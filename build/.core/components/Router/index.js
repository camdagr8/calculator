'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

var _browser = require('./browser');

var _browser2 = _interopRequireDefault(_browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = function Router(_ref) {
    var _ref$server = _ref.server,
        server = _ref$server === undefined ? false : _ref$server,
        location = _ref.location,
        context = _ref.context;

    if (server) {
        return _react2.default.createElement(_server2.default, { location: location, context: context });
    }

    return _react2.default.createElement(_browser2.default, null);
};

exports.default = Router;