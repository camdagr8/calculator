'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LI = function LI(props) {
    var _props$children = props.children,
        children = _props$children === undefined ? 'List Item' : _props$children;

    return _react2.default.createElement(
        'li',
        props,
        children
    );
};

exports.default = LI;