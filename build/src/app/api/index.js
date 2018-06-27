'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Isomorphic Parse
var Parse = null;

if (typeof window !== 'undefined') {
    Parse = require('parse');
} else {
    Parse = require('parse/node');
}
if (Parse) {
    Parse.initialize(_config2.default.parseAppId);
    Parse.serverURL = _config2.default.restAPI;
}

exports.default = Parse;