'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gsap = require('gsap');

var _server = require('react-dom/server');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSyntaxHighlighter = require('react-syntax-highlighter');

var _reactSyntaxHighlighter2 = _interopRequireDefault(_reactSyntaxHighlighter);

var _hljs = require('react-syntax-highlighter/styles/hljs');

var _copyToClipboard = require('copy-to-clipboard');

var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);

var _htmlToJsx = require('html-to-jsx');

var _htmlToJsx2 = _interopRequireDefault(_htmlToJsx);

var _jsBeautify = require('js-beautify');

var _jsBeautify2 = _interopRequireDefault(_jsBeautify);

var _objectPath = require('object-path');

var _objectPath2 = _interopRequireDefault(_objectPath);

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
 * React Component: Code
 * -----------------------------------------------------------------------------
 */

var Code = function (_Component) {
    _inherits(Code, _Component);

    function Code(props) {
        _classCallCheck(this, Code);

        var _this = _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).call(this, props));

        _this.cont = null;
        _this.state = _extends({}, _this.props);
        _this.open = _this.open.bind(_this);
        _this.close = _this.close.bind(_this);
        _this.toggle = _this.toggle.bind(_this);
        _this.getPref = _this.getPref.bind(_this);
        _this.onCopyClick = _this.onCopyClick.bind(_this);
        _this.onThemeClick = _this.onThemeClick.bind(_this);
        return _this;
    }

    _createClass(Code, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.applyPrefs();
            if (this.state.hasOwnProperty('mount')) {
                this.state.mount(this);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState(function (prevState) {
                var newState = _extends({}, prevState, nextProps);
                return newState;
            });

            this.applyPrefs();
        }
    }, {
        key: 'getPref',
        value: function getPref() {
            var newState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var key = arguments[1];
            var vals = arguments[2];
            var _state$prefs = this.state.prefs,
                prefs = _state$prefs === undefined ? {} : _state$prefs;


            vals.forEach(function (v, i) {
                if (_objectPath2.default.has(newState, key)) {
                    return;
                }
                if (typeof v !== 'undefined') {
                    newState[key] = v;
                }
            });

            return newState;
        }
    }, {
        key: 'applyPrefs',
        value: function applyPrefs() {

            var newState = {};
            newState = this.applyVisiblePref(newState);
            newState = this.applyThemePref(newState);

            if (Object.keys(newState).length > 0) {
                this.setState(newState);
            }
        }
    }, {
        key: 'applyThemePref',
        value: function applyThemePref() {
            var newState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var _state = this.state,
                _state$prefs2 = _state.prefs,
                prefs = _state$prefs2 === undefined ? {} : _state$prefs2,
                theme = _state.theme,
                id = _state.id;


            var vals = [_objectPath2.default.get(prefs, 'codeColor.' + id), _objectPath2.default.get(prefs, 'codeColor.all', theme)];

            return this.getPref(newState, 'theme', vals);
        }
    }, {
        key: 'applyVisiblePref',
        value: function applyVisiblePref() {
            var newState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var _state2 = this.state,
                _state2$prefs = _state2.prefs,
                prefs = _state2$prefs === undefined ? {} : _state2$prefs,
                _state2$visible = _state2.visible,
                visible = _state2$visible === undefined ? false : _state2$visible,
                id = _state2.id;


            var vals = [_objectPath2.default.get(prefs, 'code.' + id), _objectPath2.default.get(prefs, 'code.all', visible)];

            return this.getPref(newState, 'visible', vals);
        }
    }, {
        key: 'onCopyClick',
        value: function onCopyClick(e) {
            var _state3 = this.state,
                _state3$beauty = _state3.beauty,
                beauty = _state3$beauty === undefined ? {} : _state3$beauty,
                Component = _state3.component,
                onButtonClick = _state3.onButtonClick;

            var markup = _jsBeautify2.default.html((0, _server.renderToStaticMarkup)(_react2.default.createElement(Component, null)), beauty);

            markup = (0, _htmlToJsx2.default)(markup);

            (0, _copyToClipboard2.default)(markup);

            if (typeof onButtonClick === 'function') {
                e['type'] = 'copy';
                onButtonClick(e, this, markup);
            }
        }
    }, {
        key: 'onThemeClick',
        value: function onThemeClick(e) {
            var _state4 = this.state,
                theme = _state4.theme,
                onButtonClick = _state4.onButtonClick;


            theme = theme === 'dark' ? 'light' : 'dark';

            this.setState({ theme: theme });

            if (typeof onButtonClick === 'function') {
                e['type'] = 'toggle-codeColor';

                var data = _extends({}, this);
                data.state.theme = theme;

                onButtonClick(e, data);
            }
        }
    }, {
        key: 'open',
        value: function open() {
            if (!this.cont) {
                return;
            }

            var speed = this.state.speed;

            var _self = this;

            _gsap.TweenMax.set(this.cont, { height: 'auto', display: 'block' });
            _gsap.TweenMax.from(this.cont, speed, {
                height: 0,
                overwrite: 'all',
                ease: _gsap.Power2.easeInOut,
                onComplete: function onComplete() {
                    _self.setState({ visible: true, height: 'auto' });
                }
            });
        }
    }, {
        key: 'close',
        value: function close() {
            if (!this.cont) {
                return;
            }

            var speed = this.state.speed;

            var _self = this;

            _gsap.TweenMax.to(this.cont, speed, {
                height: 0,
                overwrite: 'all',
                ease: _gsap.Power2.easeInOut,
                onComplete: function onComplete() {
                    _self.setState({ visible: false, height: 0 });
                }
            });
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            var visible = this.state.visible;


            if (visible !== true) {
                this.open();
            } else {
                this.close();
            }
        }
    }, {
        key: 'themes',
        value: function themes() {
            var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'dark';

            var thms = {
                'dark': _hljs.vs2015,
                'light': _hljs.vs
            };

            return _objectPath2.default.has(thms, theme) ? thms[theme] : thms.dark;
        }
    }, {
        key: 'markup',
        value: function markup(Component, beauty) {
            return _jsBeautify2.default.html((0, _server.renderToStaticMarkup)(_react2.default.createElement(Component, null)), beauty);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state5 = this.state,
                Component = _state5.component,
                visible = _state5.visible,
                height = _state5.height,
                _state5$beauty = _state5.beauty,
                beauty = _state5$beauty === undefined ? {} : _state5$beauty,
                _state5$theme = _state5.theme,
                theme = _state5$theme === undefined ? 'dark' : _state5$theme;


            if (!Component) {
                return null;
            }

            var type = typeof Component === 'undefined' ? 'undefined' : _typeof(Component);
            var style = this.themes(theme);
            var display = visible === true ? 'block' : 'none';

            switch (type) {
                case 'function':
                    {
                        return _react2.default.createElement(
                            'div',
                            { ref: function ref(elm) {
                                    _this2.cont = elm;
                                }, className: 're-toolkit-code-view', style: { height: height, display: display } },
                            _react2.default.createElement(
                                'div',
                                { className: 're-toolkit-card-heading thin' },
                                _react2.default.createElement(
                                    'h3',
                                    null,
                                    'Code'
                                ),
                                _react2.default.createElement(
                                    'button',
                                    {
                                        className: 'theme-btn ' + theme,
                                        title: 'theme: ' + theme,
                                        onClick: this.onThemeClick,
                                        type: 'button' },
                                    _react2.default.createElement('span', null),
                                    _react2.default.createElement('span', null)
                                ),
                                _react2.default.createElement(
                                    'button',
                                    {
                                        title: 'copy to clipboard',
                                        onClick: this.onCopyClick,
                                        type: 'button' },
                                    _react2.default.createElement(
                                        'svg',
                                        null,
                                        _react2.default.createElement('use', { xlinkHref: '#re-icon-clipboard' })
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 're-toolkit-code' },
                                _react2.default.createElement(
                                    _reactSyntaxHighlighter2.default,
                                    {
                                        showLineNumbers: true,
                                        style: style,
                                        customStyle: { padding: "20px 30px" },
                                        language: 'HTML' },
                                    this.markup(Component, beauty)
                                )
                            )
                        );
                    }

                default:
                    {
                        return _react2.default.createElement(
                            'div',
                            { ref: function ref(elm) {
                                    _this2.cont = elm;
                                }, className: 're-toolkit-code-view', style: { height: height, display: display } },
                            _react2.default.createElement(
                                'div',
                                { className: 're-toolkit-card-heading thin' },
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    _react2.default.createElement(
                                        'em',
                                        null,
                                        '* Code view not available for this type of element.'
                                    )
                                )
                            )
                        );
                    }
            }
        }
    }]);

    return Code;
}(_react.Component);

exports.default = Code;


Code.defaultProps = {
    prefs: {},
    onButtonClick: null,
    height: 'auto',
    speed: 0.2,
    visible: false,
    component: null,
    group: null,
    id: null,
    theme: 'light',
    beauty: {
        wrap_line_length: 10000000000000
    }
};