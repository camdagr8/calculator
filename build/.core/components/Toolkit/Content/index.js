'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Preview = require('./Preview');

var _Preview2 = _interopRequireDefault(_Preview);

var _objectPath = require('object-path');

var _objectPath2 = _interopRequireDefault(_objectPath);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

var _Code = require('./Code');

var _Code2 = _interopRequireDefault(_Code);

var _Docs = require('./Docs');

var _Docs2 = _interopRequireDefault(_Docs);

var _Dna = require('./Dna');

var _Dna2 = _interopRequireDefault(_Dna);

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
 * React Component: Content
 * -----------------------------------------------------------------------------
 */

var Content = function (_Component) {
    _inherits(Content, _Component);

    function Content(props) {
        _classCallCheck(this, Content);

        var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

        _this.cards = {};
        _this.codes = {};
        _this.docs = {};
        _this.link = {};
        _this.previews = {};
        _this.watcher = null;
        _this.state = _extends({}, _this.props);
        _this.onWatch = _this.onWatch.bind(_this);
        _this.registerPreview = _this.registerPreview.bind(_this);
        _this.onCardButtonClick = _this.onCardButtonClick.bind(_this);
        return _this;
    }

    // Handlers


    _createClass(Content, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.state.hasOwnProperty('mount')) {
                this.state.mount(this);
            }

            this.watcher = setInterval(this.onWatch, this.state.watchTimer);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState(function (prevState) {
                return _extends({}, prevState, nextProps);
            });
        }
    }, {
        key: 'onCardButtonClick',
        value: function onCardButtonClick(e, card) {
            var onButtonClick = this.state.onButtonClick;
            var action = e.currentTarget.id;


            var evtdata = card;

            switch (action) {
                case 'toggle-link':
                case 'toggle-docs':
                case 'toggle-code':
                    {

                        if (_objectPath2.default.has(card, 'state.id')) {
                            var k = action === 'toggle-code' ? 'codes' : 'docs';
                            k = action === 'toggle-link' ? 'link' : k;

                            var cmp = this[k][card.state.id];
                            if (cmp) {
                                cmp.toggle();
                            }
                        }

                        break;
                    }
            }

            if (typeof onButtonClick === 'function') {
                e['type'] = action;
                onButtonClick(e, evtdata);
            }
        }
    }, {
        key: 'onWatch',
        value: function onWatch() {
            // Resize previews
            Object.values(this.previews).forEach(function (preview) {
                return preview.resize();
            });
        }

        // Registers

    }, {
        key: 'registerCard',
        value: function registerCard(_ref) {
            var elm = _ref.elm,
                id = _ref.id;

            if (!elm) {
                return;
            }
            this.cards[id] = elm;
        }
    }, {
        key: 'registerCode',
        value: function registerCode(_ref2) {
            var elm = _ref2.elm,
                id = _ref2.id;

            if (!elm) {
                return;
            }
            this.codes[id] = elm;
        }
    }, {
        key: 'registerDocs',
        value: function registerDocs(_ref3) {
            var elm = _ref3.elm,
                id = _ref3.id;

            if (!elm) {
                return;
            }
            this.docs[id] = elm;
        }
    }, {
        key: 'registerDnas',
        value: function registerDnas(_ref4) {
            var elm = _ref4.elm,
                id = _ref4.id;

            if (!elm) {
                return;
            }
            this.link[id] = elm;
        }
    }, {
        key: 'registerPreview',
        value: function registerPreview(_ref5) {
            var elm = _ref5.elm,
                id = _ref5.id;

            if (!elm) {
                return;
            }
            this.previews[id] = elm;
        }

        // Renderers

    }, {
        key: 'renderCards',
        value: function renderCards(_ref6) {
            var _this2 = this;

            var data = _ref6.data,
                card = _ref6.card,
                group = _ref6.group;
            var _state = this.state,
                onButtonClick = _state.onButtonClick,
                prefs = _state.prefs,
                update = _state.update,
                style = _state.style,
                menu = _state.menu;


            this.cards = {};
            this.codes = {};
            this.docs = {};
            this.link = {};
            this.previews = {};

            return Object.keys(data).map(function (key, k) {
                var id = [group, key].join('_');
                var item = data[key];

                var label = item.label,
                    component = item.component,
                    readme = item.readme,
                    dna = item.dna,
                    path = item.path;
                var _card$buttons = card.buttons,
                    buttons = _card$buttons === undefined ? {} : _card$buttons;


                buttons = JSON.stringify(buttons);
                buttons = JSON.parse(buttons);

                var Cmp = component;

                var noCode = Boolean(typeof component === 'string');
                if (noCode === true) {
                    var idx = _underscore2.default.indexOf(_underscore2.default.pluck(buttons.footer, 'name'), 'toggle-code');
                    buttons.footer.splice(idx, 1);
                }

                if (!dna || typeof component === 'string') {
                    var _idx = _underscore2.default.indexOf(_underscore2.default.pluck(buttons.footer, 'name'), 'toggle-link');
                    buttons.footer.splice(_idx, 1);
                }

                if (!readme) {
                    var _idx2 = _underscore2.default.indexOf(_underscore2.default.pluck(buttons.footer, 'name'), 'toggle-docs');
                    buttons.footer.splice(_idx2, 1);
                }

                return _react2.default.createElement(
                    _Card2.default,
                    {
                        id: id,
                        title: label,
                        buttons: buttons,
                        key: 'card-' + id,
                        onButtonClick: _this2.onCardButtonClick,
                        ref: function ref(elm) {
                            _this2.registerCard({ elm: elm, id: id });
                        } },
                    _react2.default.createElement(_Preview2.default, {
                        ref: function ref(elm) {
                            _this2.registerPreview({ elm: elm, id: id });
                        },
                        component: component,
                        update: update,
                        group: group,
                        style: style,
                        path: path,
                        id: id
                    }),
                    noCode !== true ? _react2.default.createElement(_Code2.default, {
                        ref: function ref(elm) {
                            _this2.registerCode({ elm: elm, id: id });
                        },
                        onButtonClick: onButtonClick,
                        component: component,
                        update: update,
                        prefs: prefs,
                        group: group,
                        id: id
                    }) : null,
                    readme ? _react2.default.createElement(_Docs2.default, {
                        ref: function ref(elm) {
                            _this2.registerDocs({ elm: elm, id: id });
                        },
                        title: 'Documentation',
                        component: readme,
                        update: update,
                        prefs: prefs,
                        id: id
                    }) : null,
                    _react2.default.createElement(_Dna2.default, {
                        ref: function ref(elm) {
                            _this2.registerDnas({ elm: elm, id: id });
                        },
                        component: component,
                        update: update,
                        prefs: prefs,
                        menu: menu,
                        id: id
                    })
                );
            });
        }
    }, {
        key: 'renderCrumbs',
        value: function renderCrumbs(_ref7) {
            var title = _ref7.title,
                group = _ref7.group,
                element = _ref7.element;
            var onCrumbClick = this.state.onCrumbClick;

            var elms = [];

            if (!element) {
                elms.push(_react2.default.createElement(
                    'span',
                    { key: 'group-' + group },
                    title
                ));
            } else {
                elms.push(_react2.default.createElement(
                    'span',
                    { key: 'group-' + group + '-element' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/toolkit/' + group, onClick: onCrumbClick },
                        title
                    )
                ));
            }

            return _react2.default.createElement(
                'div',
                { className: 're-toolkit-content-crumbs' },
                elms.map(function (elm) {
                    return elm;
                })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _state2 = this.state,
                card = _state2.card,
                title = _state2.title,
                data = _state2.data,
                element = _state2.element,
                group = _state2.group,
                defaultComponent = _state2.defaultComponent,
                update = _state2.update;


            if (!data) {
                if (!defaultComponent) {
                    return null;
                }

                var Overview = defaultComponent;
                return _react2.default.createElement(
                    'section',
                    { className: 're-toolkit-content' },
                    _react2.default.createElement(Overview, null)
                );
            }

            if (typeof data !== 'function') {

                element = data[element] || {};

                var _element = element,
                    _element$label = _element.label,
                    label = _element$label === undefined ? null : _element$label;


                return _react2.default.createElement(
                    'section',
                    { className: 're-toolkit-content' },
                    this.renderCrumbs({ title: title, group: group, element: label }),
                    this.renderCards({ data: data, card: card, group: group })
                );
            } else {
                var _Component2 = data;
                return _react2.default.createElement(
                    'section',
                    { className: 're-toolkit-content' },
                    this.renderCrumbs({ title: title }),
                    _react2.default.createElement(_Component2, null)
                );
            }
        }
    }]);

    return Content;
}(_react.Component);

exports.default = Content;


Content.defaultProps = {
    onButtonClick: null,
    onCrumbClick: null,
    title: null,
    update: null,
    style: null,
    watchTimer: 200,
    data: {},
    prefs: {},
    menu: {},
    card: {
        buttons: {
            header: [{ name: 'toggle-fullscreen', title: 'toggle fullscreen', icon: '#re-icon-fullscreen' }],
            footer: [{ name: 'toggle-code', title: 'code view', icon: '#re-icon-markup' }, { name: 'toggle-link', title: 'dependencies', icon: '#re-icon-link' }, { name: 'toggle-docs', title: 'docs', icon: '#re-icon-docs' }]
        }
    }
};