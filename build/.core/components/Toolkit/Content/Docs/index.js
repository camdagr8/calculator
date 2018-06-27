'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _objectPath = require('object-path');

var _objectPath2 = _interopRequireDefault(_objectPath);

var _gsap = require('gsap');

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
 * React Component: Docs
 * -----------------------------------------------------------------------------
 */

var Docs = function (_Component) {
    _inherits(Docs, _Component);

    function Docs(props) {
        _classCallCheck(this, Docs);

        var _this = _possibleConstructorReturn(this, (Docs.__proto__ || Object.getPrototypeOf(Docs)).call(this, props));

        _this.cont = null;
        _this.state = _extends({}, _this.props);
        _this.open = _this.open.bind(_this);
        _this.close = _this.close.bind(_this);
        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }

    _createClass(Docs, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            if (this.state.hasOwnProperty('mount')) {
                this.state.mount(this);
            }

            this.applyPrefs();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {

            this.setState(function (prevState) {
                return _extends({}, prevState, nextProps);
            });

            this.applyPrefs();
        }
    }, {
        key: 'getPref',
        value: function getPref() {
            var newState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var key = arguments[1];
            var vals = arguments[2];
            var _state$prefs = this.state.prefs,
                prefs = _state$prefs === undefined ? {} : _state$prefs;


            vals.forEach(function (v, i) {
                if (_objectPath2.default.has(newState, key)) {
                    return;
                }
                if (typeof v !== 'undefined') {
                    newState[key] = v;
                }
            });

            return newState;
        }
    }, {
        key: 'applyPrefs',
        value: function applyPrefs() {

            var newState = {};
            newState = this.applyThemePref(newState);
            newState = this.applyVisiblePref(newState);

            if (Object.keys(newState).length > 0) {
                this.setState(newState);
            }
        }
    }, {
        key: 'applyVisiblePref',
        value: function applyVisiblePref() {
            var newState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var _state = this.state,
                _state$prefs2 = _state.prefs,
                prefs = _state$prefs2 === undefined ? {} : _state$prefs2,
                _state$visible = _state.visible,
                visible = _state$visible === undefined ? false : _state$visible,
                id = _state.id;


            var vals = [_objectPath2.default.get(prefs, 'docs.' + id), _objectPath2.default.get(prefs, 'docs.all', visible)];

            return this.getPref(newState, 'visible', vals);
        }
    }, {
        key: 'applyThemePref',
        value: function applyThemePref() {
            var newState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var _state2 = this.state,
                _state2$prefs = _state2.prefs,
                prefs = _state2$prefs === undefined ? {} : _state2$prefs,
                theme = _state2.theme,
                id = _state2.id;


            var vals = [_objectPath2.default.get(prefs, 'codeColor.' + id), _objectPath2.default.get(prefs, 'codeColor.all', theme)];

            return this.getPref(newState, 'theme', vals);
        }
    }, {
        key: 'open',
        value: function open() {
            if (!this.cont) {
                return;
            }

            var speed = this.state.speed;

            var _self = this;

            _gsap.TweenMax.set(this.cont, { height: 'auto', display: 'block' });
            _gsap.TweenMax.from(this.cont, speed, {
                height: 0,
                overwrite: 'all',
                ease: _gsap.Power2.easeInOut,
                onComplete: function onComplete() {
                    _self.setState({ visible: true, height: 'auto' });
                }
            });
        }
    }, {
        key: 'close',
        value: function close() {
            if (!this.cont) {
                return;
            }

            var speed = this.state.speed;

            var _self = this;

            _gsap.TweenMax.to(this.cont, speed, {
                height: 0,
                overwrite: 'all',
                ease: _gsap.Power2.easeInOut,
                onComplete: function onComplete() {
                    _self.setState({ visible: false, height: 0 });
                }
            });
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            var visible = this.state.visible;


            if (visible !== true) {
                this.open();
            } else {
                this.close();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state3 = this.state,
                Component = _state3.component,
                visible = _state3.visible,
                height = _state3.height,
                title = _state3.title,
                update = _state3.update,
                _state3$theme = _state3.theme,
                theme = _state3$theme === undefined ? 'dark' : _state3$theme;


            var display = visible === true ? 'block' : 'none';

            return !Component ? null : _react2.default.createElement(
                'div',
                { ref: function ref(elm) {
                        _this2.cont = elm;
                    }, className: 're-toolkit-docs-view', style: { height: height, display: display } },
                title ? _react2.default.createElement(
                    'div',
                    { className: 're-toolkit-card-heading thin' },
                    _react2.default.createElement(
                        'h3',
                        null,
                        title
                    )
                ) : null,
                _react2.default.createElement(
                    'div',
                    { className: 're-toolkit-card-docs' },
                    _react2.default.createElement(Component, { theme: theme })
                )
            );
        }
    }]);

    return Docs;
}(_react.Component);

exports.default = Docs;


Docs.defaultProps = {
    theme: 'dark',
    title: null,
    prefs: {},
    height: 'auto',
    speed: 0.2,
    visible: true,
    id: null,
    update: null
};