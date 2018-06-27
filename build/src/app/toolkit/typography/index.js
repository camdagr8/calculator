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
 * React Component: Typography
 * -----------------------------------------------------------------------------
 */

var Typography = function (_Component) {
    _inherits(Typography, _Component);

    function Typography(props) {
        _classCallCheck(this, Typography);

        var _this = _possibleConstructorReturn(this, (Typography.__proto__ || Object.getPrototypeOf(Typography)).call(this, props));

        _this.state = Object.assign({}, _this.props);
        return _this;
    }

    _createClass(Typography, [{
        key: 'onClick',
        value: function onClick(e) {
            var onClick = this.state.onClick;


            if (typeof onClick === 'function') {
                e.preventDefault();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var content = this.state.content;

            return _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(
                    'h3',
                    null,
                    'Custom component instead of the default group list.'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'p',
                    null,
                    content
                )
            );
        }
    }]);

    return Typography;
}(_react.Component);

exports.default = Typography;


Typography.defaultProps = {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non orci cursus diam blandit tristique sit amet et nisi. Cras egestas viverra leo et pharetra. Suspendisse sodales velit ac scelerisque pellentesque. Phasellus non tortor vitae erat euismod mattis eget id nulla. Duis orci felis, pellentesque vitae neque maximus, venenatis consectetur nunc. Phasellus tincidunt, nunc ut aliquam congue, risus lectus pellentesque tellus, et ultricies augue nibh at augue. Phasellus fermentum iaculis risus, a blandit nisl lobortis in.'
};