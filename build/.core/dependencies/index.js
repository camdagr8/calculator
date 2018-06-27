'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.restHeaders = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NotFound = require('../components/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactiumDependencies = function () {
    function ReactiumDependencies() {
        _classCallCheck(this, ReactiumDependencies);

        this.routes = [];
        this.actions = {};
        this.actionTypes = {};
        this.services = {};
    }

    _createClass(ReactiumDependencies, [{
        key: 'init',
        value: function init() {
            var _this = this;

            this.actions = this.manifest.allActions;
            this.actionTypes = Object.keys(this.manifest.allActionTypes).reduce(function (types, key) {
                return _extends({}, types, _this.manifest.allActionTypes[key]);
            }, {});
            this.services = this.manifest.allServices;

            this.routes = Object.keys(this.manifest.allRoutes).map(function (route) {
                return _this.manifest.allRoutes[route];
            }).reduce(function (rts, route) {
                // Support multiple routable components per route file
                if (Array.isArray(route)) {
                    return [].concat(_toConsumableArray(rts), _toConsumableArray(route.map(function (subRoute, subKey) {
                        return _extends({
                            order: 0
                        }, subRoute);
                    })));
                }

                // Support one routable component
                return [].concat(_toConsumableArray(rts), [_extends({
                    order: 0
                }, route)]);
            }, []).reduce(function (rts, route) {
                // Support multiple paths for one route
                if (Array.isArray(route.path)) {
                    return [].concat(_toConsumableArray(rts), _toConsumableArray(route.path.map(function (path) {
                        return _extends({}, route, {
                            path: path
                        });
                    })));
                }
                return [].concat(_toConsumableArray(rts), [route]);
            }, []).sort(function (a, b) {
                return a.order - b.order;
            }).concat([{ component: _NotFound2.default }]);
        }
    }]);

    return ReactiumDependencies;
}();

var dependencies = new ReactiumDependencies();

exports.default = dependencies;
var restHeaders = exports.restHeaders = function restHeaders() {
    return {};
};

// File scoped
dependencies.manifest = require('../../src/manifest').get();