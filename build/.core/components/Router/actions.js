'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dependencies = require('../../dependencies');

var _dependencies2 = _interopRequireDefault(_dependencies);

var _querystringBrowser = require('querystring-browser');

var _querystringBrowser2 = _interopRequireDefault(_querystringBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    updateRoute: function updateRoute(location) {
        var route = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var params = arguments[2];
        return function (dispatch, getState) {
            var _getState = getState(),
                Router = _getState.Router;

            if (typeof window !== 'undefined' && Router.pathname !== location.pathname) {
                window.scrollTo(0, 0);
            }

            dispatch({
                type: _dependencies2.default.actionTypes.UPDATE_ROUTE,
                location: location,
                params: params
            });

            // load route data
            if ('load' in route) {
                dispatch(route.load(params, _querystringBrowser2.default.parse(location.search)));
            }
        };
    }
};