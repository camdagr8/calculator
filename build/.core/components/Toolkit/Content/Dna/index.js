'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gsap = require('gsap');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectPath = require('object-path');

var _objectPath2 = _interopRequireDefault(_objectPath);

var _reactRouterDom = require('react-router-dom');

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
 * React Component: Dna
 * -----------------------------------------------------------------------------
 */

var Dna = function (_Component) {
    _inherits(Dna, _Component);

    function Dna(props) {
        _classCallCheck(this, Dna);

        var _this = _possibleConstructorReturn(this, (Dna.__proto__ || Object.getPrototypeOf(Dna)).call(this, props));

        _this.getDependents = _this.getDependents.bind(_this);
        _this.getDependency = _this.getDependency.bind(_this);
        _this.getElements = _this.getElements.bind(_this);
        _this.getNPM = _this.getNPM.bind(_this);
        _this.open = _this.open.bind(_this);
        _this.close = _this.close.bind(_this);
        _this.toggle = _this.toggle.bind(_this);

        _this.state = _extends({}, _this.props);
        return _this;
    }

    _createClass(Dna, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.applyPrefs();

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


            var vals = [_objectPath2.default.get(prefs, 'link.' + id), _objectPath2.default.get(prefs, 'link.all', visible)];

            return this.getPref(newState, 'visible', vals);
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

            _gsap.TweenMax.to(this.cont, speed / 2, {
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
        key: 'getElements',
        value: function getElements() {
            var menu = this.state.menu;

            var elements = [];
            _underscore2.default.compact(_underscore2.default.pluck(Object.values(menu), 'elements')).forEach(function (item) {
                elements = elements.concat(Object.values(item));
            });

            return elements;
        }
    }, {
        key: 'getDependents',
        value: function getDependents(component) {
            var output = [];

            if (!_objectPath2.default.has(component, 'dependencies')) {
                return output;
            }

            var elements = this.getElements();

            elements.forEach(function (item) {
                if (!_objectPath2.default.has(item, 'dna')) {
                    return;
                }
                if (!_objectPath2.default.has(item, 'component')) {
                    return;
                }
                if (typeof _objectPath2.default.get(item, 'component') === 'string') {
                    return;
                }
                if (!_objectPath2.default.has(item.component, 'dependencies')) {
                    return;
                }
                if (item.component.name === component.name) {
                    return;
                }

                var results = [];
                var deps = item.component.dependencies();

                deps.forEach(function (str) {
                    var exp = new RegExp('^.\/node_modules\/', 'i');
                    if (exp.test(str)) {
                        return;
                    }

                    var p = str.split('./src/app/').join('/').split('/index.js').join('');

                    var cmp = _underscore2.default.findWhere(elements, { dna: p });

                    if (!cmp) {
                        return;
                    }

                    var cname = cmp.name;
                    if (cname === component.name) {
                        results.push(item);
                    }
                });

                if (results.length < 1) {
                    return;
                }

                results.forEach(function (res) {
                    output.push(res);
                });
            });

            return output;
        }
    }, {
        key: 'getDependency',
        value: function getDependency(str) {
            var menu = this.state.menu;


            var elements = this.getElements();
            var p = str.split('./src/app/').join('/').split('/index.js').join('');

            var item = _underscore2.default.findWhere(elements, { dna: p });

            if (item) {
                var route = item.route,
                    label = item.label;

                return route && label ? function () {
                    return _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: route, title: str },
                        _react2.default.createElement(
                            'svg',
                            null,
                            _react2.default.createElement('use', { xlinkHref: '#re-icon-link' })
                        ),
                        label
                    );
                } : null;
            } else {
                var exp = new RegExp('^.\/node_modules\/', 'i');
                if (exp.test(str)) {
                    return;
                }

                var cmp = str.split('/').pop().split('.js').join('');
                return function () {
                    return _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(
                            'svg',
                            null,
                            _react2.default.createElement('use', { xlinkHref: '#re-icon-docs' })
                        ),
                        cmp,
                        ' \u2013 ',
                        str.split('./src/app').join('')
                    );
                };
            }
        }
    }, {
        key: 'getNPM',
        value: function getNPM(str, deps) {
            var exp = new RegExp('^.\/node_modules\/', 'i');
            if (!exp.test(str)) {
                return;
            }

            var elements = [];
            var pkg = str.split('./node_modules/').join('').split('/').shift();

            var exclude = ['webpack', 'react'];
            if (exclude.indexOf(pkg) > -1) {
                return;
            }

            var url = 'https://www.npmjs.com/package/' + pkg;

            return function () {
                return _react2.default.createElement(
                    'a',
                    { href: url, target: '_blank' },
                    pkg
                );
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state2 = this.state,
                component = _state2.component,
                height = _state2.height,
                visible = _state2.visible;


            if (typeof component === 'undefined' || typeof component === 'string') {
                return null;
            }

            var deps = _objectPath2.default.has(component, 'dependencies') ? component.dependencies() : [];

            var display = visible === true ? 'block' : 'none';

            var npm = _underscore2.default.compact(deps.map(function (item) {
                return _this2.getNPM(item, deps);
            }));
            var dependencies = _underscore2.default.compact(deps.map(function (item) {
                return _this2.getDependency(item);
            }));
            var dependents = this.getDependents(component);

            var count = npm.length + dependencies.length + dependents.length;

            if (count < 1) {
                return _react2.default.createElement(
                    'div',
                    {
                        ref: function ref(elm) {
                            _this2.cont = elm;
                        },
                        className: 're-toolkit-dna-view',
                        style: { height: height, display: display } },
                    _react2.default.createElement(
                        'div',
                        { className: 're-toolkit-card-heading thin' },
                        'DNA'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 're-toolkit-card-body' },
                        _react2.default.createElement(
                            'div',
                            { className: 're-toolkit-card-body-pad' },
                            _react2.default.createElement(
                                'h3',
                                null,
                                'No DNA Found'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                'Be sure to add the dna property to the manifest entry for this element and include the static function ',
                                _react2.default.createElement(
                                    'code',
                                    null,
                                    'dependencies'
                                ),
                                ' to your class.'
                            )
                        )
                    )
                );
            }

            return _react2.default.createElement(
                'div',
                {
                    ref: function ref(elm) {
                        _this2.cont = elm;
                    },
                    className: 're-toolkit-dna-view',
                    style: { height: height, display: display } },
                dependents.length > 0 ? _react2.default.createElement(
                    _react.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 're-toolkit-card-heading thin' },
                        'Dependents'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        dependents.map(function (item, i) {
                            var route = item.route,
                                label = item.label;

                            return !route ? null : _react2.default.createElement(
                                'li',
                                { key: 'dep-' + i },
                                _react2.default.createElement(
                                    'a',
                                    { href: route },
                                    label
                                )
                            );
                        })
                    )
                ) : null,
                dependencies.length > 0 ? _react2.default.createElement(
                    _react.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 're-toolkit-card-heading thin' },
                        'Dependencies'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        dependencies.map(function (item, i) {
                            var Alink = item;
                            return Alink ? _react2.default.createElement(
                                'li',
                                { key: 'dep-' + i },
                                _react2.default.createElement(Alink, null)
                            ) : null;
                        })
                    )
                ) : null,
                npm.length > 0 ? _react2.default.createElement(
                    _react.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 're-toolkit-card-heading thin' },
                        'NPM Modules'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        npm.map(function (item, i) {
                            var Alink = item;
                            return Alink ? _react2.default.createElement(
                                'li',
                                { key: 'dep-' + i },
                                _react2.default.createElement(Alink, null)
                            ) : null;
                        })
                    )
                ) : null
            );
        }
    }]);

    return Dna;
}(_react.Component);

exports.default = Dna;


Dna.defaultProps = {
    component: null,
    height: 'auto',
    menu: {},
    prefs: {},
    speed: 0.2,
    id: null,
    visible: false
};