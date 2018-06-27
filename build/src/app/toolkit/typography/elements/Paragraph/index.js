'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.P = undefined;

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
 * React Component: Paragraph
 * -----------------------------------------------------------------------------
 */

var P = exports.P = function P(props) {
    var _props$children = props.children,
        children = _props$children === undefined ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non orci cursus diam blandit tristique sit amet et nisi. Cras egestas viverra leo et pharetra. Suspendisse sodales velit ac scelerisque pellentesque. Phasellus non tortor vitae erat euismod mattis eget id nulla. Duis orci felis, pellentesque vitae neque maximus, venenatis consectetur nunc. Phasellus tincidunt, nunc ut aliquam congue, risus lectus pellentesque tellus, et ultricies augue nibh at augue. Phasellus fermentum iaculis risus, a blandit nisl lobortis in.' : _props$children;


    return _react2.default.createElement(
        'p',
        props,
        children
    );
};

var Paragraph = function (_Component) {
    _inherits(Paragraph, _Component);

    function Paragraph() {
        _classCallCheck(this, Paragraph);

        return _possibleConstructorReturn(this, (Paragraph.__proto__ || Object.getPrototypeOf(Paragraph)).apply(this, arguments));
    }

    _createClass(Paragraph, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(P, null),
                _react2.default.createElement(
                    P,
                    null,
                    'The quick brown fox jumps over a lazy dog.'
                ),
                _react2.default.createElement(
                    P,
                    { className: 'number' },
                    '1 2 3 4 5 6 7 8 9 10'
                )
            );
        }
    }], [{
        key: 'dependencies',
        value: function dependencies() {
            return module.children;
        }
    }]);

    return Paragraph;
}(_react.Component);

exports.default = Paragraph;