'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var H2 = function H2(props) {
    var _props$children = props.children,
        children = _props$children === undefined ? 'Heading 2' : _props$children;

    return _react2.default.createElement(
        'h2',
        props,
        children
    );
};

exports.default = H2;