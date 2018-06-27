'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var H1 = function H1(props) {
    var _props$children = props.children,
        children = _props$children === undefined ? 'Heading 1' : _props$children;

    return _react2.default.createElement(
        'h1',
        props,
        children
    );
};

exports.default = H1;