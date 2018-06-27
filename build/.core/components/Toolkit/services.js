'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _dependencies = require('../../dependencies');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetch = function fetch() {
    var hdr = (0, _dependencies.restHeaders)();
    return _axios2.default.get('/some/rest/route', { headers: hdr }).then(function (_ref) {
        var data = _ref.data;
        return data;
    });
};

exports.default = {
    fetch: fetch
};