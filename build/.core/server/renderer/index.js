'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var normalizeAssets = function normalizeAssets(assets) {
    return Array.isArray(assets) ? assets : [assets];
};
var globby = require('globby');
var path = require('path');

var isToolkit = function isToolkit(path) {
    var exp = /^\/toolkit/i;
    return exp.test(path);
};

var styles = function styles(req, res) {
    var css = isToolkit(req.path) === true ? 'toolkit.css' : 'style.css';
    var styles = ['<link rel="stylesheet" href="/assets/style/' + css + '">'];

    return styles.join('\n\t');
};

var preferVendors = function preferVendors(a, b) {
    if (a === 'vendors.js') return -1;
    if (b === 'vendors.js') return 1;
    return 0;
};

var scripts = function scripts(res) {

    var scripts = '';

    var scriptPathBase = process.env.PUBLIC_DIRECTORY || process.cwd() + '/public';
    scripts = globby.sync(path.resolve(scriptPathBase, 'assets', 'js', '*.js')).map(function (script) {
        return path.parse(script).base;
    }).sort(preferVendors).map(function (script) {
        return '<script src="/assets/js/' + script + '"></script>';
    }).join("\n");

    if (process.env.NODE_ENV === 'development') {
        var assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName;

        var vendors = assetsByChunkName.vendors;

        scripts = Object.values(assetsByChunkName).map(function (chunk) {
            return normalizeAssets(chunk).filter(function (path) {
                return path.endsWith('.js');
            });
        }).reduce(function (files, chunk) {
            return files.concat(chunk);
        }, []).sort(preferVendors).map(function (path) {
            return '<script src="/' + path + '"></script>';
        }).join('\n');
    }

    return scripts;
};

exports.default = function (req, res, context) {
    req.scripts = scripts(res);
    req.styles = styles(req, res);

    if ('SSR_MODE' in process.env && process.env.SSR_MODE === 'on') {
        var ssr = require('./ssr');
        return ssr(req, res, context);
    }

    var feTemplate = require('./fe-only');
    return Promise.resolve(feTemplate(req, res, context));
};