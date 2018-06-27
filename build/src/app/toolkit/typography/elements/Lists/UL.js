'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UL = function UL(props) {
    var children = props.children;

    return _react2.default.createElement(
        'ul',
        props,
        children
    );
};

exports.default = UL;