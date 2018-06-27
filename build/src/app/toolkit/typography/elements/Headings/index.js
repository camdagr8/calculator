'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _H = require('./H1');

var _H2 = _interopRequireDefault(_H);

var _H3 = require('./H2');

var _H4 = _interopRequireDefault(_H3);

var _H5 = require('./H3');

var _H6 = _interopRequireDefault(_H5);

var _H7 = require('./H4');

var _H8 = _interopRequireDefault(_H7);

var _H9 = require('./H5');

var _H10 = _interopRequireDefault(_H9);

var _H11 = require('./H6');

var _H12 = _interopRequireDefault(_H11);

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
 * React Component: Headings
 * -----------------------------------------------------------------------------
 */

var Headings = function (_Component) {
    _inherits(Headings, _Component);

    _createClass(Headings, null, [{
        key: 'dependencies',
        value: function dependencies() {
            return module.children;
        }
    }]);

    function Headings(props) {
        _classCallCheck(this, Headings);

        var _this = _possibleConstructorReturn(this, (Headings.__proto__ || Object.getPrototypeOf(Headings)).call(this, props));

        _this.state = _extends({}, _this.props);
        return _this;
    }

    _createClass(Headings, [{
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
            var text = this.state.text;

            return _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(_H2.default, null),
                _react2.default.createElement(_H4.default, null),
                _react2.default.createElement(_H6.default, null),
                _react2.default.createElement(_H8.default, null),
                _react2.default.createElement(_H10.default, null),
                _react2.default.createElement(_H12.default, null)
            );
        }
    }]);

    return Headings;
}(_react.Component);

exports.default = Headings;
exports.H1 = _H2.default;
exports.H2 = _H4.default;
exports.H3 = _H6.default;
exports.H4 = _H8.default;
exports.H5 = _H10.default;
exports.H6 = _H12.default;


Headings.defaultProps = {};