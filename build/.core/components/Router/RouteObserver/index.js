'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _RouteObserver = require('./RouteObserver');

var _RouteObserver2 = _interopRequireDefault(_RouteObserver);

var _dependencies = require('../../../dependencies');

var _dependencies2 = _interopRequireDefault(_dependencies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
    Router: {
        pathname: false
    }
};

var mapStateToProps = function mapStateToProps(_ref) {
    var _ref$Router = _ref.Router,
        Router = _ref$Router === undefined ? {
        pathname: false
    } : _ref$Router;
    return _extends({}, initialState, {
        Router: Router
    });
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        updateRoute: function updateRoute(location, route, params) {
            return dispatch(_dependencies2.default.actions.Router.updateRoute(location, route, params));
        }
    };
};

exports.default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_RouteObserver2.default));