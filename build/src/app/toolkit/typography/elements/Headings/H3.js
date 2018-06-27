'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var H3 = function H3(props) {
    var _props$children = props.children,
        children = _props$children === undefined ? 'Heading 3' : _props$children;

    return _react2.default.createElement(
        'h3',
        props,
        children
    );
};

exports.default = H3;