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
 * Readme
 * -----------------------------------------------------------------------------
 */
var content = '\n # Testing\n _does this work?_\n\n ## Hmmm..\n **I think so**\n\n <p>What about inline HTML?</p>\n\n' + '`' + '\ncode\n' + '`' + '\n' + '```js' + '\nlet inlineCode = () => {\n    console.log(\'Whoa dude!\');\n};\n' + '```' + '\n\n' + '```html' + '\n<html>\n    <body>\n        <p>Some HTML markup</p>\n    </body>\n</html>\n' + '```' + '\n';

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