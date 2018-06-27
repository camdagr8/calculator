'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dependencies = require('../../dependencies');

var _dependencies2 = _interopRequireDefault(_dependencies);

var _manifest = require('../../../src/app/toolkit/manifest');

var _manifest2 = _interopRequireDefault(_manifest);

var _objectPath = require('object-path');

var _objectPath2 = _interopRequireDefault(_objectPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];


    var newState = void 0;

    switch (action.type) {

        case _dependencies2.default.actionTypes.TOOLKIT_MOUNT:
            newState = _extends({}, state, action.data, { manifest: _manifest2.default });
            return newState;

        case _dependencies2.default.actionTypes.TOOLKIT_NAV:
            var _action$params = action.params,
                _action$params$group = _action$params.group,
                group = _action$params$group === undefined ? null : _action$params$group,
                _action$params$elemen = _action$params.element,
                element = _action$params$elemen === undefined ? null : _action$params$elemen;

            newState = _extends({}, state, { group: group, element: element });
            return newState;

        case _dependencies2.default.actionTypes.TOOLKIT_PREF:
            newState = _extends({}, state);
            var karry = action.key.split('.');

            var all = karry.pop();
            if (all === 'all') {
                _objectPath2.default.empty(newState, karry.join('.'), null);
            }

            _objectPath2.default.set(newState, action.key, action.value);

            return newState;

        case _dependencies2.default.actionTypes.TOOLKIT_THEME:

            newState = _extends({}, state, { style: action.theme });

            return newState;

        default:
            return state;
    }
};