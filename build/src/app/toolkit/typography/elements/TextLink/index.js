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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Cam Tullos on 11/30/17
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */


/**
 * -----------------------------------------------------------------------------
 * React Component: TextLink
 * -----------------------------------------------------------------------------
 */
var TextLink = function (_Component) {
    _inherits(TextLink, _Component);

    _createClass(TextLink, null, [{
        key: 'dependencies',
        value: function dependencies() {
            return module.children;
        }
    }]);

    function TextLink(props) {
        _classCallCheck(this, TextLink);

        var _this = _possibleConstructorReturn(this, (TextLink.__proto__ || Object.getPrototypeOf(TextLink)).call(this, props));

        _this.state = Object.assign({}, _this.props);
        return _this;
    }

    _createClass(TextLink, [{
        key: 'onClick',
        value: function onClick(e) {
            e.preventDefault();
            window.alert('LINK CLICKED');
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'a',
                { href: '#', onClick: this.onClick.bind(this) },
                'Click Me'
            );
        }
    }]);

    return TextLink;
}(_react.Component);

exports.default = TextLink;


TextLink.defaultProps = {};