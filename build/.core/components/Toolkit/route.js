'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _dependencies = require('../../dependencies');

var _dependencies2 = _interopRequireDefault(_dependencies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    path: ['/toolkit/:group/:element', '/toolkit/:group', '/toolkit'],
    exact: true,
    component: _index2.default,
    load: function load(params, search) {
        return _dependencies2.default.actions.Toolkit.mount(params, search);
    }
}];