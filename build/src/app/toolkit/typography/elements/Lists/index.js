'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UL = exports.LI = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LI = require('./LI');

var _LI2 = _interopRequireDefault(_LI);

var _UL = require('./UL');

var _UL2 = _interopRequireDefault(_UL);

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
 * React Component: Lists
 * -----------------------------------------------------------------------------
 */

var Lists = function (_Component) {
    _inherits(Lists, _Component);

    _createClass(Lists, null, [{
        key: 'dependencies',
        value: function dependencies() {
            return module.children;
        }
    }]);

    function Lists(props) {
        _classCallCheck(this, Lists);

        var _this = _possibleConstructorReturn(this, (Lists.__proto__ || Object.getPrototypeOf(Lists)).call(this, props));

        _this.state = _extends({}, _this.props);
        return _this;
    }

    _createClass(Lists, [{
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
        key: 'renderDefault',
        value: function renderDefault() {
            var items = [_react2.default.createElement(
                _LI2.default,
                { key: 'li-1' },
                'Item 1'
            ), _react2.default.createElement(
                _LI2.default,
                { key: 'li-2' },
                'Item 2'
            ), _react2.default.createElement(
                _LI2.default,
                { key: 'li-3' },
                'Item 3'
            ), _react2.default.createElement(
                _LI2.default,
                { key: 'li-4' },
                'Item 4'
            ), _react2.default.createElement(
                _LI2.default,
                { key: 'li-5' },
                'Item 5'
            )];

            return items.map(function (item) {
                return item;
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                children = _state.children,
                className = _state.className,
                style = _state.style;

            children = !children ? this.renderDefault() : children;

            return _react2.default.createElement(
                'ul',
                { className: className, style: style },
                children
            );
        }
    }]);

    return Lists;
}(_react.Component);

exports.default = Lists;
exports.LI = _LI2.default;
exports.UL = _UL2.default;


Lists.defaultProps = {};