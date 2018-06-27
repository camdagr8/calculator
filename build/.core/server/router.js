'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _renderer = require('./renderer');

var _renderer2 = _interopRequireDefault(_renderer);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _httpAuth = require('http-auth');

var _httpAuth2 = _interopRequireDefault(_httpAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// Conditional basic auth
var basicAuthFile = _path2.default.resolve(process.env.BASIC_AUTH_FILE || '.htpasswd');
if (_fs2.default.existsSync(basicAuthFile)) {
    router.use(function (req, res, next) {
        if (req.url !== '/elb-healthcheck') {
            var basic = _httpAuth2.default.basic({
                realm: "Reactium.",
                file: basicAuthFile
            });

            _httpAuth2.default.connect(basic)(req, res, next);
        } else {
            next();
        }
    });
}

router.get('/elb-healthcheck', function (req, res) {
    return res.send('Up');
});

process.on('unhandledRejection', function (reason, p) {
    console.log('[Reactium] Unhandled Rejection at: Promise', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
});

router.get('*', function (req, res) {
    var context = {};

    (0, _renderer2.default)(req, res, context).then(function (content) {
        if (context.url) {
            console.log('[Reactium] Redirecting to ', context.url);
            return res.redirect(302, context.url);
        }

        var status = 200;
        if (/^\/404/.test(req.path) || context.notFound) {
            status = 404;
        }

        res.status(status).send(content);
    }).catch(function (err) {
        console.error('[Reactium] React SSR Error', err);
        res.status(500).send('[Reactium] Internal Server Error');
    });
});

exports.default = router;