'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gsap = require('gsap');

var _Card = require('../Content/Card');

var _Card2 = _interopRequireDefault(_Card);

var _objectPath = require('object-path');

var _objectPath2 = _interopRequireDefault(_objectPath);

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
 * React Component: Settings
 * -----------------------------------------------------------------------------
 */

var Settings = function (_Component) {
    _inherits(Settings, _Component);

    function Settings(props) {
        _classCallCheck(this, Settings);

        var _this = _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).call(this, props));

        _this.cont = null;
        _this.open = _this.open.bind(_this);
        _this.close = _this.close.bind(_this);
        _this.toggle = _this.toggle.bind(_this);
        _this.dismiss = _this.dismiss.bind(_this);

        _this.state = _extends({}, _this.props);
        return _this;
    }

    _createClass(Settings, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState(function (prevState) {
                return _extends({}, prevState, nextProps);
            });
        }
    }, {
        key: 'close',
        value: function close(callback) {
            var _this2 = this;

            if (!this.cont) {
                return;
            }

            var _state = this.state,
                _state$speed = _state.speed,
                speed = _state$speed === undefined ? 0.25 : _state$speed,
                onSettingsClose = _state.onSettingsClose;


            var _self = this;

            _gsap.TweenMax.to(this.cont, speed, {
                opacity: 0,
                ease: _gsap.Power2.easeInOut,
                onComplete: function onComplete() {
                    _this2.setState({ visible: false });

                    if (typeof callback === 'function') {
                        callback();
                    }

                    if (typeof onSettingsClose === 'function') {
                        onSettingsClose();
                    }
                }
            });
        }
    }, {
        key: 'open',
        value: function open(callback) {
            var _this3 = this;

            if (!this.cont) {
                return;
            }

            var _state2 = this.state,
                _state2$speed = _state2.speed,
                speed = _state2$speed === undefined ? 0.25 : _state2$speed,
                onSettingsOpen = _state2.onSettingsOpen;


            var _self = this;

            _gsap.TweenMax.set(this.cont, { display: 'block', opacity: 0 });
            _gsap.TweenMax.to(this.cont, speed, {
                opacity: 1,
                //ease: Power2.easeInOut,
                onComplete: function onComplete() {
                    _this3.cont.focus();
                    _this3.setState({ visible: true });

                    if (typeof callback === 'function') {
                        callback();
                    }

                    if (typeof onSettingsOpen === 'function') {
                        onSettingsOpen();
                    }
                }
            });
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            if (!this.cont) {
                return;
            }

            var visible = this.state.visible;


            if (visible !== true) {
                this.open();
            } else {
                this.close();
            }
        }
    }, {
        key: 'dismiss',
        value: function dismiss(e) {
            if (e.target.id === 'lightbox') {
                this.close();
            }
        }
    }, {
        key: 'onSwitchClick',
        value: function onSwitchClick(e, _ref) {
            var pref = _ref.pref,
                other = _ref.other;
            var onSwitchClick = this.state.onSwitchClick;


            e.target.classList.toggle('active');

            if (typeof onSwitchClick === 'function') {
                onSwitchClick({ pref: pref, value: other });
            }

            // TODO: ADD action that saves the pref to the Toolkit.state
        }
    }, {
        key: 'renderSettings',
        value: function renderSettings() {
            var _this4 = this;

            var _state3 = this.state,
                _state3$settings = _state3.settings,
                settings = _state3$settings === undefined ? [] : _state3$settings,
                _state3$prefs = _state3.prefs,
                prefs = _state3$prefs === undefined ? {} : _state3$prefs;


            return settings.map(function (item, i) {
                var _item$text = item.text,
                    text = _item$text === undefined ? [] : _item$text,
                    _item$values = item.values,
                    values = _item$values === undefined ? [] : _item$values,
                    _item$labels = item.labels,
                    labels = _item$labels === undefined ? [] : _item$labels,
                    help = item.help,
                    pref = item.pref;


                var value = _objectPath2.default.get(prefs, pref);
                var idx = values.indexOf(value);
                idx = idx == -1 ? 0 : idx;

                var active = idx === 1 ? 'active' : '';
                var other = idx === 0 && values.length > 1 ? values[1] : values[0];

                return _react2.default.createElement(
                    'li',
                    { className: 're-toolkit-card-list-item', key: 'setting-' + i },
                    text.length > 0 ? _react2.default.createElement(
                        'div',
                        { className: 're-toolkit-card-list-text' },
                        _react2.default.createElement(
                            'div',
                            null,
                            text[idx]
                        ),
                        help ? _react2.default.createElement(
                            'small',
                            null,
                            help
                        ) : null
                    ) : null,
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'button',
                            {
                                type: 'button',
                                className: 're-toolkit-switch ' + active,
                                onClick: function onClick(e) {
                                    _this4.onSwitchClick(e, { pref: pref, other: other });
                                } },
                            labels.length > 0 ? labels.map(function (label, l) {
                                return _react2.default.createElement(
                                    'span',
                                    { key: 'label-' + l },
                                    label
                                );
                            }) : null
                        )
                    )
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var _state4 = this.state,
                _state4$buttons = _state4.buttons,
                buttons = _state4$buttons === undefined ? {} : _state4$buttons,
                _state4$visible = _state4.visible,
                visible = _state4$visible === undefined ? false : _state4$visible;


            var display = visible === false ? 'none' : 'block';
            var opacity = visible === false ? 0 : 1;

            return _react2.default.createElement(
                'div',
                {
                    id: 'lightbox',
                    ref: function ref(elm) {
                        _this5.cont = elm;
                    },
                    onClick: this.dismiss,
                    className: 're-toolkit-settings', style: { display: display, opacity: opacity } },
                _react2.default.createElement(
                    _Card2.default,
                    {
                        id: 'settings-card',
                        title: 'Settings',
                        onButtonClick: this.close,
                        buttons: buttons },
                    _react2.default.createElement(
                        'ul',
                        { className: 're-toolkit-card-list' },
                        this.renderSettings()
                    )
                )
            );
        }
    }]);

    return Settings;
}(_react.Component);

exports.default = Settings;


Settings.defaultProps = {
    onSettingsClose: null,
    onSettingsOpen: null,
    onSwitchClick: null,
    visible: false,
    speed: 0.125,
    manifest: {},
    prefs: {},
    buttons: {
        header: [{ name: 'toggle-settings', title: 'close', icon: '#re-icon-close' }]
    }
};