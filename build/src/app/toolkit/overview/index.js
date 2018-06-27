'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('../../../../.core/components/Toolkit/Content/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Docs = require('../../../../.core/components/Toolkit/Content/Docs');

var _Docs2 = _interopRequireDefault(_Docs);

var _Markdown = require('../../../../.core/components/Toolkit/Markdown');

var _Markdown2 = _interopRequireDefault(_Markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * -----------------------------------------------------------------------------
 * Overview
 * Write up something about the style guide or remove all of this and make
 * this a component that shows off something flashy!
 * -----------------------------------------------------------------------------
 */
var content = '\n# Style Guide\n---------\nAdd some content about this design system here.\n\n';

/**
 * -----------------------------------------------------------------------------
 * DO NOT EDIT BELOW HERE
 * -----------------------------------------------------------------------------
 */
var Comp = function Comp() {
  return _react2.default.createElement(
    _Markdown2.default,
    null,
    content
  );
};
var overview = function overview() {
  return _react2.default.createElement(
    _Card2.default,
    { title: 'Atomic Thinking' },
    _react2.default.createElement(_Docs2.default, { component: Comp, id: 'overview' })
  );
};
exports.default = overview;