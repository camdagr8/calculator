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
 * React Component: Keypad
 * -----------------------------------------------------------------------------
 */

var Keypad = function (_Component) {
    _inherits(Keypad, _Component);

    function Keypad(props) {
        _classCallCheck(this, Keypad);

        var _this = _possibleConstructorReturn(this, (Keypad.__proto__ || Object.getPrototypeOf(Keypad)).call(this, props));

        _this.buttons = [];
        _this.onResize = _this.onResize.bind(_this);

        _this.state = _extends({}, _this.props);
        return _this;
    }

    _createClass(Keypad, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener('resize', this.onResize);
            this.onResize();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.onResize);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState(function (prevState) {
                return _extends({}, prevState, nextProps);
            });
        }
    }, {
        key: 'onResize',
        value: function onResize() {
            var _this2 = this;

            var _state = this.state,
                _state$height = _state.height,
                height = _state$height === undefined ? 'auto' : _state$height,
                _state$mounted = _state.mounted,
                mounted = _state$mounted === undefined ? false : _state$mounted;


            this.buttons.forEach(function (item) {
                if (!item) {
                    return;
                }

                var w = item.offsetWidth;

                if (height !== w) {
                    height = w - w / 3;
                    _this2.setState({ height: height });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _state2 = this.state,
                keys = _state2.keys,
                onKeyClick = _state2.onKeyClick,
                height = _state2.height,
                operators = _state2.operators;


            this.buttons = [];

            return _react2.default.createElement(
                'div',
                { className: 'keypad' },
                _react2.default.createElement(
                    'div',
                    { className: 'row middle center' },
                    keys.map(function (item, i) {
                        var label = item.label,
                            value = item.value,
                            alt = item.alt;


                        if (value === 'toggle') {
                            label = operators.join('|');
                        }

                        return _react2.default.createElement(
                            'div',
                            { className: 'col-4 key', key: 'key-' + i },
                            _react2.default.createElement('button', {
                                type: 'button',
                                style: { height: height },
                                alt: alt,
                                dangerouslySetInnerHTML: { __html: label },
                                ref: function ref(elm) {
                                    _this3.buttons.push(elm);
                                },
                                onClick: function onClick(e) {
                                    onKeyClick(e, value, _this3);
                                } })
                        );
                    })
                )
            );
        }
    }]);

    return Keypad;
}(_react.Component);

exports.default = Keypad;


Keypad.defaultProps = {
    onKeyClick: null,
    operators: ['+', '-'],
    keys: [{ value: 1, label: 1, alt: 'number 1' }, { value: 2, label: 2, alt: 'number 2' }, { value: 3, label: 3, alt: 'number 3' }, { value: 4, label: 4, alt: 'number 4' }, { value: 5, label: 5, alt: 'number 5' }, { value: 6, label: 6, alt: 'number 6' }, { value: 7, label: 7, alt: 'number 7' }, { value: 8, label: 8, alt: 'number 8' }, { value: 9, label: 9, alt: 'number 9' }, { value: 'backspace', label: '&larr;', alt: 'backspace' }, { value: 0, label: 0, alt: 'number zero' }, { value: 'clear', label: 'clear', alt: 'clear' }, { value: 'toggle', label: '+|-', alt: 'change operator' }]
};