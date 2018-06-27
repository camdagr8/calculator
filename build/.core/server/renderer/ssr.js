'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _server = require('react-dom/server');

var _reactHelmet = require('react-helmet');

var _serializeJavascript = require('serialize-javascript');

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _reactRouterConfig = require('react-router-config');

var _storeCreator = require('../../storeCreator');

var _storeCreator2 = _interopRequireDefault(_storeCreator);

var _Router = require('../../components/Router');

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = function template(content, helmet, store, req, res) {
    return '<html ' + helmet.htmlAttributes.toString() + '>\n        <head>\n            ' + helmet.title.toString() + '\n            ' + helmet.meta.toString() + '\n            ' + helmet.link.toString() + '\n            ' + req.styles + '\n        </head>\n        <body ' + helmet.bodyAttributes.toString() + '>\n            <Component type="DevTools"></Component>\n            <div id="router">' + content + '</div>\n\n            <script>\n                window.ssr = true;\n                window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n                window.restAPI = \'/api\';\n                window.parseAppId = \'' + parseAppId + '\'\n            </script>\n            ' + req.scripts + '\n        </body>\n    </html>';
};

module.exports = function (req, res, context) {
    var store = (0, _storeCreator2.default)({ server: true });
    var matches = (0, _reactRouterConfig.matchRoutes)(dependencies.routes, req.path);
    var loaders = matches.map(function (_ref) {
        var route = _ref.route,
            match = _ref.match;

        return _extends({}, route, {
            params: match.params,
            query: req.query ? req.query : {}
        });
    }).filter(function (route) {
        return route.load;
    }).map(function (route) {
        return route.load(route.params, route.query);
    }).map(function (thunk) {
        return thunk(store.dispatch, store.getState, store);
    });

    // Check for 404
    context.notFound = !matches.length || !('path' in matches[0].route);

    // Wait for all loaders or go ahead and render on error
    return new Promise(function (resolve) {
        console.log('[Reactium] Loading page data...');

        Promise.all(loaders).then(function () {
            console.log('[Reactium] Page data loading complete.');
            resolve();
        }).catch(function (error) {
            console.error('[Reactium] Page data loading error.', error);
            resolve();
        });
    }).then(function () {
        var html = '';
        var body = (0, _server.renderToString)(_react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(_Router2.default, { server: true, location: req.path, context: context })
        ));

        var helmet = _reactHelmet.Helmet.renderStatic();
        html = template(body, helmet, store, req, res);

        return html;
    });
};