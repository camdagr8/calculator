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
 * React Component: Operator
 * -----------------------------------------------------------------------------
 */

var Operator = function (_Component) {
    _inherits(Operator, _Component);

    function Operator(props) {
        _classCallCheck(this, Operator);

        var _this = _possibleConstructorReturn(this, (Operator.__proto__ || Object.getPrototypeOf(Operator)).call(this, props));

        _this.value = null;
        _this.toggle = _this.toggle.bind(_this);
        _this.state = _extends({}, _this.props);
        return _this;
    }

    _createClass(Operator, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState(function (prevState) {
                return _extends({}, prevState, nextProps);
            });
        }
    }, {
        key: 'toggle',
        value: function toggle(e) {
            var _state = this.state,
                value = _state.value,
                onChange = _state.onChange,
                operators = _state.operators;


            value = value === operators[0] ? operators[1] : operators[0];

            this.setState({ value: value });
            this.value = value;

            if (typeof onChange === 'function') {
                onChange(e, value);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var state = JSON.parse(JSON.stringify(this.state));
            var value = this.state.value;


            delete state.value;
            delete state.onClick;

            this.value = value;
            return _react2.default.createElement(
                'button',
                _extends({ onClick: this.toggle, type: 'button' }, state),
                this.value
            );
        }
    }]);

    return Operator;
}(_react.Component);

exports.default = Operator;


Operator.defaultProps = {
    value: '+',
    operators: ['+', '-'],
    onChange: null
};