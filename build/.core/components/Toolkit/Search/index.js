'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
 * React Component: Search
 * -----------------------------------------------------------------------------
 */

var Search = function (_Component) {
    _inherits(Search, _Component);

    function Search(props) {
        _classCallCheck(this, Search);

        var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

        _this.input = null;
        _this.state = _extends({}, _this.props);
        return _this;
    }

    _createClass(Search, [{
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
        key: 'onInput',
        value: function onInput(e) {
            var onChange = this.state.onChange;


            if (typeof onChange === 'function') {
                onChange(e);
            }
        }
    }, {
        key: 'onSearchClear',
        value: function onSearchClear(e) {
            var onSearchClear = this.state.onSearchClear;

            this.input.value = '';

            this.input.focus();
            onSearchClear();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var text = this.state.text;


            return _react2.default.createElement(
                'div',
                { className: 're-toolkit-search' },
                _react2.default.createElement('input', {
                    ref: function ref(elm) {
                        _this2.input = elm;
                    },
                    name: 'search',
                    type: 'text',
                    placeholder: 'search',
                    onChange: this.onInput.bind(this),
                    onKeyUp: this.onInput.bind(this) }),
                _react2.default.createElement(
                    'button',
                    { type: 'button', className: 're-toolkit-search-clear', onClick: this.onSearchClear.bind(this) },
                    _react2.default.createElement(
                        'svg',
                        null,
                        _react2.default.createElement('use', { xlinkHref: '#re-icon-close' })
                    )
                )
            );
        }
    }]);

    return Search;
}(_react.Component);

exports.default = Search;


Search.defaultProps = {
    text: null,
    onChange: null,
    onSearchClear: null
};