'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dependencies = require('../../dependencies');

var _dependencies2 = _interopRequireDefault(_dependencies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isToolkit = function isToolkit(path) {
    var exp = /^\/toolkit/i;
    return exp.test(path);
};

exports.default = {
    mount: function mount(data) {
        return function (dispatch) {

            return dispatch({
                type: _dependencies2.default.actionTypes.TOOLKIT_MOUNT,
                data: data
            });
        };
    },

    menuItemClick: function menuItemClick(url) {
        return function (dispatch) {
            if (isToolkit(url)) {

                var uarr = url.split('/toolkit')[1].split('/');
                uarr.shift();

                var group = uarr[0];
                var element = uarr[1];
                var params = { group: group, element: element };

                return dispatch({
                    type: _dependencies2.default.actionTypes.TOOLKIT_NAV,
                    params: params
                });
            }
        };
    },

    set: function set(_ref) {
        var key = _ref.key,
            value = _ref.value;
        return function (dispatch) {
            return dispatch({
                type: _dependencies2.default.actionTypes.TOOLKIT_PREF,
                value: value,
                key: key
            });
        };
    },

    setTheme: function setTheme(theme) {
        return function (dispatch) {
            return dispatch({
                type: _dependencies2.default.actionTypes.TOOLKIT_THEME,
                theme: theme
            });
        };
    }
};