'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _dependencies = require('../../../dependencies');

var _dependencies2 = _interopRequireDefault(_dependencies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RouteObserver = function (_Component) {
    _inherits(RouteObserver, _Component);

    function RouteObserver() {
        _classCallCheck(this, RouteObserver);

        return _possibleConstructorReturn(this, (RouteObserver.__proto__ || Object.getPrototypeOf(RouteObserver)).apply(this, arguments));
    }

    _createClass(RouteObserver, [{
        key: 'processRoute',

        /**
         * When route updates, find matching route and dispatch update.
         * @see actions to see how to load data on route changes
         * e.g. appdir/product-page/route
         */
        value: function processRoute() {
            var _props = this.props,
                location = _props.location,
                Router = _props.Router,
                updateRoute = _props.updateRoute;


            var pathChanged = !Router.pathname || location.pathname !== Router.pathname;
            var searchChanged = 'search' in Router && location.search !== Router.search;

            if (pathChanged || searchChanged) {
                var _deps$routes$filter = _dependencies2.default.routes.filter(function (route) {
                    var match = (0, _reactRouter.matchPath)(location.pathname, route);
                    return match && match.isExact;
                }),
                    _deps$routes$filter2 = _slicedToArray(_deps$routes$filter, 1),
                    route = _deps$routes$filter2[0];

                if (location) {
                    var routeParams = {};

                    if (route) {
                        routeParams = (0, _reactRouter.matchPath)(location.pathname, route).params;
                    }

                    updateRoute(location, route, routeParams);
                }
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.processRoute();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.processRoute();
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return RouteObserver;
}(_react.Component);

exports.default = RouteObserver;