'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxLocalPersist = require('redux-local-persist');

var _redux = require('redux');

var _reduxSuperThunk = require('redux-super-thunk');

var _reduxSuperThunk2 = _interopRequireDefault(_reduxSuperThunk);

var _DevTools = require('./components/DevTools');

var _DevTools2 = _interopRequireDefault(_DevTools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require$get = require('../src/manifest').get(),
    allInitialStates = _require$get.allInitialStates,
    allReducers = _require$get.allReducers;

/**
 * -----------------------------------------------------------------------------
 * @description Redux setup
 * -----------------------------------------------------------------------------
 */


var localizeState = true;
var initialState = {};
if (typeof window !== 'undefined') {
    if ('INITIAL_STATE' in window) {
        initialState = window.INITIAL_STATE;
        delete window.INITIAL_STATE;
    }
}

// Make sure initial loaded state matches reducers
var sanitizeInitialState = function sanitizeInitialState(state) {
    return Object.keys(state).filter(function (s) {
        return s in allReducers;
    }).reduce(function (states, key) {
        return _extends({}, states, _defineProperty({}, key, state[key]));
    }, {});
};

var store = {};

exports.default = function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$server = _ref.server,
        server = _ref$server === undefined ? false : _ref$server;

    // Load middleware
    var middleWare = [_reduxSuperThunk2.default];

    // Load InitialState first from modules
    var importedStates = allInitialStates;
    initialState = _extends({}, sanitizeInitialState(importedStates), initialState);

    // Get localized state and apply it
    if (!server) {
        if (localizeState === true) {
            middleWare.push((0, _reduxLocalPersist.save)());
            initialState = _extends({}, initialState, sanitizeInitialState((0, _reduxLocalPersist.load)({ initialState: allInitialStates })));
        } else {
            (0, _reduxLocalPersist.clear)();
        }
    }

    var createStoreWithMiddleware = _reduxSuperThunk.applyMiddleware.apply(undefined, middleWare)(_redux.createStore);

    // Combine all Top-level reducers into one
    var rootReducer = (0, _redux.combineReducers)(allReducers);

    // Add DevTools redux enhancer in development
    var storeEnhancer = process.env.NODE_ENV === 'development' ? _DevTools2.default.instrument() : function (_) {
        return _;
    };

    // Create the store
    store = createStoreWithMiddleware(rootReducer, initialState, storeEnhancer);

    return store;
};