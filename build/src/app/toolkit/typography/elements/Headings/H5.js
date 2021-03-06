'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var H5 = function H5(props) {
    var _props$children = props.children,
        children = _props$children === undefined ? 'Heading 5' : _props$children;

    return _react2.default.createElement(
        'h5',
        props,
        children
    );
};

exports.default = H5;