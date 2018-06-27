'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Markdown = require('../../../../../../.core/components/Toolkit/Markdown');

var _Markdown2 = _interopRequireDefault(_Markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * -----------------------------------------------------------------------------
 * RadioInput Readme
 * -----------------------------------------------------------------------------
 */

var content = '\n# Your Documentation Here\n\nBe sure to use [markdown ](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to format the text.\n\nI suppose you could also use HTML but come on.. do you _REALLY_ need to?\n';

/**
 * -----------------------------------------------------------------------------
 * DO NOT EDIT BELOW HERE
 * -----------------------------------------------------------------------------
 */
var readme = function readme(props) {
  return _react2.default.createElement(
    _Markdown2.default,
    props,
    content
  );
};
exports.default = readme;