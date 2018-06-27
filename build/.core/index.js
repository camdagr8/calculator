'use strict';

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _router = require('./server/router');

var _router2 = _interopRequireDefault(_router);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _cookieSession = require('cookie-session');

var _cookieSession2 = _interopRequireDefault(_cookieSession);

var _expressHttpProxy = require('express-http-proxy');

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _config = require('../src/app/api/config');

var _config2 = _interopRequireDefault(_config);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//------------------------------------------------------------------------------
// node.js starter application for hosting
//------------------------------------------------------------------------------

var app = (0, _express2.default)();

var node_env = process.env.hasOwnProperty('NODE_ENV') ? process.env.NODE_ENV : 'development';
var port = process.env.hasOwnProperty('APP_PORT') ? process.env.APP_PORT : '3030';
//port          = (node_env === 'production') ? '8080' : port;

global.parseAppId = _config2.default.parseAppId;
global.restAPI = _config2.default.restAPI;

var adminURL = process.env.ACTINIUM_ADMIN_URL || false;

// set app variables
app.set('x-powered-by', false);

// logging
if (process.env.DEBUG !== 'off') {
    app.use((0, _morgan2.default)('combined'));
}

// apply cross site scripting
app.use((0, _cors2.default)());

// Proxy /api
app.use(['/api', '/api/*'], (0, _expressHttpProxy2.default)('' + restAPI, {
    proxyReqOptDecorator: function proxyReqOptDecorator(req) {
        req.headers['x-forwarded-host'] = 'localhost:' + port;
        return req;
    },
    proxyReqPathResolver: function proxyReqPathResolver(req) {
        var resolvedPath = '' + restAPI + req.url;
        return resolvedPath;
    }
}));

// parsers
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use((0, _cookieParser2.default)());
app.use((0, _cookieSession2.default)({ name: 'aljtka4', keys: ['Q2FtZXJvbiBSdWxlcw', 'vT3GtyZKbnoNSdWxlcw'] }));

// development mode
if (process.env.NODE_ENV === 'development') {
    var webpack = require('webpack');
    var gulpConfig = require('../gulp.config')();
    var webpackConfig = require('../webpack.config')(gulpConfig);
    var wpMiddlware = require('webpack-dev-middleware');
    var wpHotMiddlware = require('webpack-hot-middleware');

    webpackConfig.entry.main = ['webpack-hot-middleware/client?http://localhost:3030', webpackConfig.entry.main];
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

    var compiler = webpack(webpackConfig);

    app.use(wpMiddlware(compiler, {
        serverSideRender: true
    }));

    app.use(wpHotMiddlware(compiler, {
        reload: true
    }));
}

// serve the static files out of ./public or specified directory
var staticAssets = process.env.PUBLIC_DIRECTORY || _path2.default.resolve(process.cwd(), 'public');
app.use(_express2.default.static(staticAssets));

// default route handler
app.use(_router2.default);

// start server on the specified port and binding host
app.listen(port, '0.0.0.0', function () {
    app.dependencies.init();

    console.log('[00:00:00] [Reactium] Server running on port ' + port + '...');
});

app.dependencies = global.dependencies = require('./dependencies').default;