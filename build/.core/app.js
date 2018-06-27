'use strict';

/**
 * -----------------------------------------------------------------------------
 * Includes
 * -----------------------------------------------------------------------------
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.App = exports.getComponents = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _Router = require('./components/Router');

var _Router2 = _interopRequireDefault(_Router);

var _storeCreator = require('./storeCreator');

var _storeCreator2 = _interopRequireDefault(_storeCreator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Placeholder for the bindable elements
var bindPoints = [];

// <Component /> DOM Elements array
var elements = typeof document !== 'undefined' ? Array.prototype.slice.call(document.querySelectorAll('component')) : [];

var getComponents = exports.getComponents = function getComponents() {
    var elms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var cmps = {};

    // Traverse the Array of bindable elements and require the components for them
    elms.forEach(function (elm) {

        var req = void 0;
        var type = elm.type,
            path = elm.path;

        // The path to the component

        path = !path ? type : path;

        // Force webpack to include the components we need.
        // The order of this Array is SUPER important.

        // Q: Why?
        // A: As we traverse the array, the first match of the `path` is used as the component.
        //    Keeping this hierarchy insures that user created components
        //    will supercede .core and /toolkit components.
        var paths = [function () {
            return require('components/' + path);
        }, function () {
            return require('components/' + path + '/index');
        }, function () {
            return require('components/common-ui/' + path);
        }, function () {
            return require('components/common-ui/' + path + '/index');
        }, function () {
            return require('toolkit/' + path);
        }, function () {
            return require('toolkit/' + path + '/index');
        }, function () {
            return require('reactium-core/components/' + path);
        }, function () {
            return require('reactium-core/components/' + path + '/index');
        }, function () {
            return require('reactium-core/components/common-ui/' + path);
        }, function () {
            return require('reactium-core/components/common-ui/' + paty + '/index');
        }];

        // Aggregate the required components into the `cmps` Object;
        paths.forEach(function (cmp, i) {

            // Exit if the component has already been defined
            if (cmps[type]) {
                return;
            }

            // Construct the component
            try {

                req = cmp();

                // Check if the component has a .default
                // -> if so: set that as the component constructor
                req = 'default' in req ? req.default : req;
            } catch (err) {}
        });

        if (req) {
            cmps[type] = req;
        }
    });

    // Output the Components Object
    return cmps;
};

if (elements.length > 0) {

    var types = [];

    var elms = elements.map(function (elm) {
        var path = elm.getAttribute('path');
        var type = elm.getAttribute('type');

        types.push(type);

        return { path: path, type: type };
    });

    var components = getComponents(elms);

    elements.forEach(function (elm) {
        // Get the component type
        var type = elm.getAttribute('type');

        if (!components.hasOwnProperty(type)) {
            return;
        }

        // Get parameters from container element
        var params = {};
        var exclude = ['type', 'path'];
        Object.entries(elm.attributes).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                key = _ref2[0],
                attr = _ref2[1];

            key = String(key).toLowerCase();
            if (exclude.indexOf(key) < 0) {
                return;
            }
            params[attr.name] = attr.value;
        });

        // Get the children from the element and pass them to the component
        var children = elm.innerHTML;
        if (children) {
            params['children'] = children;
        }

        // Create the React element and apply parameters
        var cmp = _react2.default.createElement(components[type], params);
        bindPoints.push({ component: cmp, element: elm });
    });
}

/**
 * -----------------------------------------------------------------------------
 * @function App()
 * @description Scan DOM for <Component> elements and render React components
 * inside of them.
 * -----------------------------------------------------------------------------
 */
var App = exports.App = function App() {
    require('./dependencies').default.init();

    if (typeof document !== 'undefined') {

        // Create the Redux store
        var store = (0, _storeCreator2.default)();

        // Render the React Components
        if (bindPoints.length > 0) {
            bindPoints.forEach(function (item) {
                _reactDom2.default.render(_react2.default.createElement(
                    _reactRedux.Provider,
                    { store: store },
                    _react2.default.createElement(
                        _react.Fragment,
                        null,
                        item.component
                    )
                ), item.element);
            });
        }

        // Get the router target DOM Element
        var routerTarget = document.getElementById('router');
        if (routerTarget) {
            // ensure router DOM Element is on the page

            if (window && 'ssr' in window && window.ssr) {
                // Reactium SSR Mode

                console.log('[Reactium] SSR Mode: Hydrating Reactium.');

                // Hydrate the Routed component
                _reactDom2.default.hydrate(_react2.default.createElement(
                    _reactRedux.Provider,
                    { store: store },
                    _react2.default.createElement(
                        _react.Fragment,
                        null,
                        _react2.default.createElement(_Router2.default, null)
                    )
                ), routerTarget);
            } else {
                // Reactium FE Mode

                console.log('[Reactium] FE Mode: Binding Reactium.');

                // Bind the Routed component
                _reactDom2.default.render(_react2.default.createElement(
                    _reactRedux.Provider,
                    { store: store },
                    _react2.default.createElement(
                        _react.Fragment,
                        null,
                        _react2.default.createElement(_Router2.default, null)
                    )
                ), routerTarget);
            }
        }
    }
};