'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gsap = require('gsap');

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

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
 * React Component: Card
 * -----------------------------------------------------------------------------
 */

var Card = function (_Component) {
    _inherits(Card, _Component);

    function Card(props) {
        _classCallCheck(this, Card);

        var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));

        _this.cont = null;
        _this.anchor = null;
        _this.state = _extends({}, _this.props);
        _this.toggleFullScreen = _this.toggleFullScreen.bind(_this);
        return _this;
    }

    _createClass(Card, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.forceUpdate();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState(function (prevState) {
                return _extends({}, prevState, nextProps);
            });
        }
    }, {
        key: 'getCoords',
        value: function getCoords(elm, cont) {
            var box = elm.getBoundingClientRect();

            // Get top & left
            var body = document.body;
            var docEl = document.documentElement;

            var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
            var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

            var clientTop = docEl.clientTop || body.clientTop || 0;
            var clientLeft = docEl.clientLeft || body.clientLeft || 0;

            var top = box.top + scrollTop - clientTop;
            var left = box.left + scrollLeft - clientLeft;

            // Get current height
            var currentH = cont.offsetHeight;

            // Get actual height
            _gsap.TweenMax.set(cont, { height: 'auto' });
            var actualH = cont.offsetHeight;

            // Reset cont back to it's original height
            _gsap.TweenMax.set(cont, { height: currentH });

            return { x: Math.round(left), y: Math.round(top), width: elm.offsetWidth, height: actualH };
        }
    }, {
        key: 'toggleFullScreen',
        value: function toggleFullScreen(e) {
            var _this2 = this;

            var anchor = this.anchor,
                cont = this.cont;
            var _state = this.state,
                fullscreen = _state.fullscreen,
                _state$speed = _state.speed,
                speed = _state$speed === undefined ? 0.125 : _state$speed,
                buttons = _state.buttons;

            // Get position

            var coords = this.getCoords(anchor, cont);

            var x = fullscreen === true ? coords.x : 0;
            var y = fullscreen === true ? coords.y : 80;
            var width = fullscreen === true ? coords.width : '100%';
            var height = fullscreen === true ? coords.height : window.innerHeight - 80;

            if (fullscreen !== true) {
                // pop out
                _gsap.TweenMax.set(cont, {
                    zIndex: 100000,
                    position: 'fixed',
                    left: coords.x,
                    top: coords.y,
                    width: coords.width,
                    height: coords.height
                });

                // Set anchor height to actual H
                _gsap.TweenMax.set(anchor, { height: coords.height + 60 });
            } else {
                _gsap.TweenMax.set(cont, { height: window.innerHeight - 80 });
            }

            _gsap.TweenMax.to(cont, speed, {
                left: x,
                top: y,
                width: width,
                height: height,
                ease: _gsap.Power2.easeInOut,
                onComplete: function onComplete() {
                    if (fullscreen === true) {
                        // pop in
                        _gsap.TweenMax.set(anchor, { height: 'auto' });
                        _gsap.TweenMax.set(cont, {
                            zIndex: 1,
                            left: 0,
                            top: 0,
                            width: '100%',
                            height: 'auto',
                            position: 'relative'
                        });
                    } else {
                        _gsap.TweenMax.set(cont, {
                            width: '100%'
                        });
                    }

                    // Update header buttons
                    var btns = JSON.parse(JSON.stringify(buttons)); // clone buttons array
                    var idx = _underscore2.default.indexOf(_underscore2.default.pluck(btns.header, 'name'), 'toggle-fullscreen');
                    var icon = fullscreen === true ? '#re-icon-fullscreen' : '#re-icon-collapse';

                    btns.header[idx]['icon'] = icon;

                    // Update the state
                    _this2.setState({ fullscreen: !fullscreen, buttons: btns });
                }
            });
        }
    }, {
        key: 'renderButtons',
        value: function renderButtons(buttons) {
            var _this3 = this;

            var _onClick = this.state.onButtonClick;

            return buttons.map(function (item, i) {
                var title = item.title,
                    name = item.name,
                    icon = item.icon;

                return _react2.default.createElement(
                    'button',
                    { className: 're-toolkit-card-btn-icon', onClick: function onClick(e) {
                            _onClick(e, _this3);
                        }, type: 'button', title: title, key: 'button-' + i, id: name },
                    _react2.default.createElement(
                        'svg',
                        null,
                        _react2.default.createElement('use', { xlinkHref: icon })
                    )
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _state2 = this.state,
                _state2$children = _state2.children,
                children = _state2$children === undefined ? null : _state2$children,
                _state2$buttons = _state2.buttons,
                buttons = _state2$buttons === undefined ? {} : _state2$buttons,
                _state2$title = _state2.title,
                title = _state2$title === undefined ? null : _state2$title,
                _state2$fullscreen = _state2.fullscreen,
                fullscreen = _state2$fullscreen === undefined ? false : _state2$fullscreen;
            var _buttons$header = buttons.header,
                hbuttons = _buttons$header === undefined ? [] : _buttons$header,
                _buttons$footer = buttons.footer,
                fbuttons = _buttons$footer === undefined ? [] : _buttons$footer;


            var position = fullscreen === true ? ' fixed' : '';
            var zIndex = fullscreen === true ? 100000 : 1;

            return _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement('div', { className: 're-toolkit-card-anchor', ref: function ref(elm) {
                        _this4.anchor = elm;
                    }, style: { zIndex: zIndex } }),
                _react2.default.createElement(
                    'div',
                    { className: 're-toolkit-card' + position, ref: function ref(elm) {
                            _this4.cont = elm;
                        } },
                    !title && hbuttons.length < 1 ? null : _react2.default.createElement(
                        'div',
                        { className: 're-toolkit-card-heading' },
                        !title ? _react2.default.createElement('div', null) : _react2.default.createElement(
                            'h3',
                            null,
                            title
                        ),
                        this.renderButtons(hbuttons)
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 're-toolkit-card-body' },
                        _react2.default.createElement(
                            'div',
                            { className: 're-toolkit-card-body-wrap' },
                            children
                        )
                    ),
                    fbuttons.length < 1 ? null : _react2.default.createElement(
                        'div',
                        { className: 're-toolkit-card-footer' },
                        this.renderButtons(fbuttons)
                    )
                )
            );
        }
    }]);

    return Card;
}(_react.Component);

exports.default = Card;


Card.defaultProps = {
    speed: 0.125,
    fullscreen: false,
    title: null,
    onButtonClick: null,
    buttons: {
        header: [],
        footer: []
    }
};