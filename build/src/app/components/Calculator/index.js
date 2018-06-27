'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Keypad = require('./Keypad');

var _Keypad2 = _interopRequireDefault(_Keypad);

var _Operator = require('./Operator');

var _Operator2 = _interopRequireDefault(_Operator);

var _reactHelmet = require('react-helmet');

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
 * React Component: Calculator
 * -----------------------------------------------------------------------------
 */

var Calculator = function (_Component) {
    _inherits(Calculator, _Component);

    function Calculator(props) {
        _classCallCheck(this, Calculator);

        var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

        _this.inputs = {};
        _this.target = null;

        // bindings
        _this.calculate = _this.calculate.bind(_this);
        _this.onInputKeyPress = _this.onInputKeyPress.bind(_this);
        _this.onInputFocus = _this.onInputFocus.bind(_this);
        _this.onKeyPadClick = _this.onKeyPadClick.bind(_this);
        _this.onOperatorChange = _this.onOperatorChange.bind(_this);

        _this.state = _extends({}, _this.props);
        return _this;
    }

    _createClass(Calculator, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            // transpose props to state
            this.setState(function (prevState) {
                return _extends({}, prevState, nextProps);
            });
        }
    }, {
        key: 'calculate',
        value: function calculate() {
            var _inputs = this.inputs,
                left = _inputs.left,
                right = _inputs.right,
                operator = _inputs.operator,
                total = _inputs.total;


            if (!left.value) {
                left.focus();return;
            }
            if (!right.value) {
                right.focus();return;
            }

            var equation = left.value + ' ' + operator.value + ' ' + right.value;

            this.setState({ total: eval(equation) });

            total.focus();
        }
    }, {
        key: 'onInputKeyPress',
        value: function onInputKeyPress(e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                this.calculate();
            }
        }
    }, {
        key: 'onInputFocus',
        value: function onInputFocus(e) {
            this.target = e.currentTarget;
        }
    }, {
        key: 'onKeyPadClick',
        value: function onKeyPadClick(e, key) {
            e.target.blur();
            var _inputs2 = this.inputs,
                left = _inputs2.left,
                right = _inputs2.right,
                total = _inputs2.total;
            var _target = this.target,
                target = _target === undefined ? null : _target;


            target = !target ? left : target;

            switch (key) {
                case 'backspace':
                    var val = target.value.split('');
                    if (val.length > 0) {
                        val.pop();
                    }
                    target.value = val.join('');
                    break;

                case 'clear':
                    left.value = '';
                    right.value = '';
                    total.value = '';
                    left.focus();
                    break;

                case 'toggle':
                    var _state = this.state,
                        operator = _state.operator,
                        operators = _state.operators;

                    operator = operator === operators[0] ? operators[1] : operators[0];
                    this.setState({ operator: operator });
                    break;

                default:
                    target.value = target.value + key;
            }
        }
    }, {
        key: 'onOperatorChange',
        value: function onOperatorChange(e, operator) {
            this.setState({ operator: operator });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state2 = this.state,
                _state2$total = _state2.total,
                total = _state2$total === undefined ? '' : _state2$total,
                operator = _state2.operator,
                operators = _state2.operators,
                title = _state2.title;

            return _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    { titleTemplate: 'Calculator' },
                    _react2.default.createElement(
                        'title',
                        null,
                        title
                    ),
                    _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
                    _react2.default.createElement('meta', { name: 'description', content: 'Startups.co Code Challenge' }),
                    _react2.default.createElement('meta', { property: 'og:title', content: title }),
                    _react2.default.createElement('meta', { property: 'og:type', content: 'article' }),
                    _react2.default.createElement('html', { lang: 'en' }),
                    _react2.default.createElement('body', { className: 'test-component' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'calculator' },
                    _react2.default.createElement(
                        'div',
                        { className: 'box' },
                        _react2.default.createElement(
                            'div',
                            { className: 'group flex stretch' },
                            _react2.default.createElement('input', {
                                type: 'number',
                                onFocus: this.onInputFocus,
                                onKeyUp: this.onInputKeyPress,
                                ref: function ref(elm) {
                                    _this2.inputs['left'] = elm;
                                } }),
                            _react2.default.createElement(_Operator2.default, {
                                value: operator,
                                operators: operators,
                                title: 'click to change operator',
                                onChange: this.onOperatorChange,
                                ref: function ref(elm) {
                                    _this2.inputs['operator'] = elm;
                                } }),
                            _react2.default.createElement('input', {
                                type: 'number',
                                onFocus: this.onInputFocus,
                                onKeyUp: this.onInputKeyPress,
                                ref: function ref(elm) {
                                    _this2.inputs['right'] = elm;
                                } }),
                            _react2.default.createElement(
                                'button',
                                {
                                    type: 'button',
                                    onClick: this.calculate,
                                    title: 'Calculate' },
                                '='
                            ),
                            _react2.default.createElement('input', {
                                type: 'text',
                                value: total,
                                readOnly: true,
                                className: 'grow number',
                                onKeyUp: this.onInputKeyPress,
                                ref: function ref(elm) {
                                    _this2.inputs['total'] = elm;
                                } })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'box' },
                        _react2.default.createElement(_Keypad2.default, { onKeyClick: this.onKeyPadClick, operators: operators })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'box' },
                        _react2.default.createElement(
                            'button',
                            { className: 'primary block', onClick: this.calculate },
                            'Calculate'
                        )
                    )
                )
            );
        }
    }]);

    return Calculator;
}(_react.Component);

exports.default = Calculator;


Calculator.defaultProps = {
    total: '',
    title: 'Calculator',
    operator: '+',
    operators: ['+', '-']
};