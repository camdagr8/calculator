'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

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
 * React Component: Header
 * -----------------------------------------------------------------------------
 */

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.state = _extends({}, _this.props);
        return _this;
    }

    _createClass(Header, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.state.hasOwnProperty('mount')) {
                this.state.mount(this);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState(function (prevState) {
                return _extends({}, prevState, nextProps);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                logo = _state.logo,
                title = _state.title,
                version = _state.version,
                _state$themes = _state.themes,
                themes = _state$themes === undefined ? [] : _state$themes,
                _state$onThemeChange = _state.onThemeChange,
                onThemeChange = _state$onThemeChange === undefined ? null : _state$onThemeChange;


            var selected = themes.length > 1 ? _underscore2.default.findWhere(themes, { selected: true }) : null;
            if (selected) {
                selected = selected.css;
            } else {
                selected = null;
            }

            return _react2.default.createElement(
                'header',
                { className: 're-toolkit-header' },
                logo ? _react2.default.createElement(
                    'a',
                    { href: '/toolkit' },
                    _react2.default.createElement('img', { className: 're-toolkit-header-logo', src: logo })
                ) : null,
                title ? _react2.default.createElement(
                    'h1',
                    { style: { flexGrow: 1 } },
                    title
                ) : null,
                version ? _react2.default.createElement(
                    'small',
                    null,
                    version
                ) : null,
                themes.length > 1 ? _react2.default.createElement(
                    'div',
                    { style: { marginLeft: 10 } },
                    _react2.default.createElement(
                        'select',
                        { className: 're-toolkit-select', defaultValue: selected, onChange: onThemeChange },
                        themes.map(function (item, i) {
                            var css = item.css,
                                name = item.name;

                            return _react2.default.createElement(
                                'option',
                                { key: i, value: css },
                                name
                            );
                        })
                    )
                ) : null
            );
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;


Header.defaultProps = {
    themes: [],
    logo: null,
    title: null,
    onThemeChange: null,
    version: '0.0.1'
};