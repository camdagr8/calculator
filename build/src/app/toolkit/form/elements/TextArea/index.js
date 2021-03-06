'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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
 * React Component: TextArea
 * -----------------------------------------------------------------------------
 */

var TextArea = function (_Component) {
    _inherits(TextArea, _Component);

    _createClass(TextArea, null, [{
        key: 'dependencies',
        value: function dependencies() {
            return module.children;
        }
    }]);

    function TextArea(props) {
        _classCallCheck(this, TextArea);

        var _this = _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call(this, props));

        _this.state = Object.assign({}, _this.props);
        return _this;
    }

    _createClass(TextArea, [{
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
                return Object.assign({}, prevState, nextProps);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('textarea', this.state);
        }
    }]);

    return TextArea;
}(_react.Component);

// Default properties


TextArea.defaultProps = {
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit ipsum tortor, finibus aliquet sem volutpat at. Duis pretium eros sed lacus luctus, non sagittis leo vestibulum. Donec libero sapien, auctor sit amet vulputate a, efficitur ut elit. Etiam feugiat ornare metus, sit amet cursus erat sagittis vitae. Fusce pulvinar cursus neque sed consectetur. In aliquet porttitor lobortis. Praesent tristique, lacus quis consectetur venenatis, ante leo mattis sem, ornare posuere lacus ligula sed risus. Cras nec ullamcorper felis. Vivamus vehicula iaculis urna. In at metus tortor. Sed id felis vitae neque accumsan congue venenatis eget ex. Nam placerat, augue in ullamcorper consectetur, est sapien convallis neque, accumsan laoreet eros libero cursus elit.'
};

exports.default = TextArea;