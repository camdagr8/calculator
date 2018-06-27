'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dependencies = require('../../dependencies');

var _dependencies2 = _interopRequireDefault(_dependencies);

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = function Router() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case _dependencies2.default.actionTypes.UPDATE_ROUTE:
            {
                var location = action.location,
                    params = action.params;

                return _extends({}, location, {
                    params: params
                });
            }
        default:
            {
                return state;
            }
    }
};

exports.default = Router;