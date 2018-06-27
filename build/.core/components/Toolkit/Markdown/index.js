'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _hljs = require('react-syntax-highlighter/styles/hljs');

var _reactSyntaxHighlighter = require('react-syntax-highlighter');

var _reactSyntaxHighlighter2 = _interopRequireDefault(_reactSyntaxHighlighter);

var _server = require('react-dom/server');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */


/**
 * -----------------------------------------------------------------------------
 * React Component: Markdown
 * -----------------------------------------------------------------------------
 */

var Markdown = function (_Component) {
    _inherits(Markdown, _Component);

    function Markdown(props) {
        _classCallCheck(this, Markdown);

        var _this = _possibleConstructorReturn(this, (Markdown.__proto__ || Object.getPrototypeOf(Markdown)).call(this, props));

        _this.state = _extends({}, _this.props);
        return _this;
    }

    _createClass(Markdown, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState(function (prevState) {
                var newState = _extends({}, prevState, nextProps);
                return newState;
            });
        }
    }, {
        key: 'markedRenderer',
        value: function markedRenderer() {
            var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'dark';

            var style = theme === 'dark' ? _hljs.vs2015 : _hljs.vs;

            var rndr = new _marked2.default.Renderer();

            rndr.code = function (markup, lang) {

                var hl = (0, _server.renderToStaticMarkup)(_react2.default.createElement(
                    _reactSyntaxHighlighter2.default,
                    {
                        showLineNumbers: true,
                        style: style,
                        customStyle: { padding: "20px 30px" },
                        language: lang },
                    markup
                ));

                return '<div class="re-toolkit-code inline">' + hl + '</div>';
            };

            return rndr;
        }
    }, {
        key: 'parseMarkdown',
        value: function parseMarkdown(md) {
            var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dark';

            _marked2.default.setOptions({
                xhtml: true,
                gfm: true,
                breaks: true
            });

            md = (0, _marked2.default)(md, { renderer: this.markedRenderer(theme) });
            return { __html: md };
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                children = _state.children,
                theme = _state.theme;

            return _react2.default.createElement('div', { className: 'markdown', dangerouslySetInnerHTML: this.parseMarkdown(children, theme) });
        }
    }]);

    return Markdown;
}(_react.Component);

exports.default = Markdown;


Markdown.defaultProps = {
    theme: 'dark'
};