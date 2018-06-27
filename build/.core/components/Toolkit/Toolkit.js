'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _objectPath = require('object-path');

var _objectPath2 = _interopRequireDefault(_objectPath);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Sidebar = require('./Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

var _Settings = require('./Settings');

var _Settings2 = _interopRequireDefault(_Settings);

var _reactHelmet = require('react-helmet');

var _ToolbarIcons = require('./Toolbar/ToolbarIcons');

var _ToolbarIcons2 = _interopRequireDefault(_ToolbarIcons);

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
 * React Component: Toolkit
 * -----------------------------------------------------------------------------
 */

var Toolkit = function (_Component) {
    _inherits(Toolkit, _Component);

    function Toolkit(props) {
        _classCallCheck(this, Toolkit);

        var _this = _possibleConstructorReturn(this, (Toolkit.__proto__ || Object.getPrototypeOf(Toolkit)).call(this, props));

        _this.state = _extends({}, _this.props);

        _this.content = null;
        _this.sidebar = null;
        _this.settings = null;
        _this.togglePref = _this.togglePref.bind(_this);
        _this.toggleSettings = _this.toggleSettings.bind(_this);
        return _this;
    }

    _createClass(Toolkit, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            this.setState(function (prevState) {
                var newState = Object.assign({}, _this2.state, nextProps);
                return newState;
            });
        }
    }, {
        key: 'onMenuItemClick',
        value: function onMenuItemClick(e) {
            var url = e.target.getAttribute('href');
            this.state.menuItemClick(url);
        }
    }, {
        key: 'onButtonClick',
        value: function onButtonClick(e, data) {
            var type = e.type;


            this.togglePref({ type: type, data: data });
            this.toggleFilter({ type: type, data: data });
            this.toggleFullscreen({ type: type, data: data, e: e });
            this.toggleSettings({ type: type });
        }
    }, {
        key: 'onFilterClick',
        value: function onFilterClick(e, filter) {
            var _state$filters = this.state.filters,
                filters = _state$filters === undefined ? [] : _state$filters;
            var type = filter.type;


            var idx = _underscore2.default.indexOf(_underscore2.default.pluck(filters, 'type'), type);
            if (idx > -1) {
                filters.splice(idx, 1);
            }

            this.setState({ filters: filters });
        }
    }, {
        key: 'toggleFilter',
        value: function toggleFilter(_ref) {
            var type = _ref.type,
                data = _ref.data;


            var isFilter = new RegExp('^toolbar-filter').test(type);
            if (isFilter !== true) {
                return;
            }

            var _state = this.state,
                _state$filters2 = _state.filters,
                filters = _state$filters2 === undefined ? [] : _state$filters2,
                _state$manifest = _state.manifest,
                manifest = _state$manifest === undefined ? {} : _state$manifest;


            var filter = type.split('toolbar-filter-').join('');

            if (filter !== 'all') {
                if (!_underscore2.default.findWhere(filters, { type: filter })) {
                    var buttons = manifest.toolbar.buttons;

                    var btn = _underscore2.default.findWhere(buttons, { name: 'filter-' + filter });
                    var label = btn.label;


                    filter = { type: filter, label: label };

                    filters.push(filter);
                } else {
                    var idx = _underscore2.default.indexOf(_underscore2.default.pluck(filters, 'type'), filter);
                    if (idx > -1) {
                        filters.splice(idx, 1);
                    }
                }
            } else {
                filters = [];
            }

            this.setState({ filters: filters });
        }
    }, {
        key: 'toggleFullscreen',
        value: function toggleFullscreen(_ref2) {
            var type = _ref2.type,
                data = _ref2.data,
                e = _ref2.e;

            if (type !== 'toggle-fullscreen') {
                return;
            }
            data.toggleFullScreen(e);
        }
    }, {
        key: 'togglePref',
        value: function togglePref(_ref3) {
            var type = _ref3.type,
                data = _ref3.data;


            var toggles = ['toggle-code', 'toggle-codeColor', 'toggle-docs', 'toggle-link'];

            if (toggles.indexOf(type) < 0) {
                return;
            }

            var set = this.state.set;


            var value = void 0;
            var key = type.split('toggle-').join('');
            key = 'prefs.' + key + '.' + data.state.id;

            switch (type) {
                case 'toggle-link':
                case 'toggle-docs':
                case 'toggle-code':
                    {
                        var k = type === 'toggle-code' ? 'codes' : 'docs';
                        k = type === 'toggle-link' ? 'link' : k;

                        value = !_objectPath2.default.get(this.content, k + '.' + data.state.id + '.state.visible');

                        break;
                    }

                case 'toggle-codeColor':
                    {
                        value = data.state.theme;
                        break;
                    }
            }

            set({ key: key, value: value });
        }
    }, {
        key: 'toggleSettings',
        value: function toggleSettings(_ref4) {
            var type = _ref4.type,
                data = _ref4.data;

            if (type !== 'toolbar-toggle-settings') {
                return;
            }
            this.settings.open();
        }
    }, {
        key: 'onSettingsOpen',
        value: function onSettingsOpen() {
            this.setState({ showSettings: true });
        }
    }, {
        key: 'onSettingsClose',
        value: function onSettingsClose() {
            this.setState({ showSettings: false });
        }
    }, {
        key: 'onSettingSwitchClick',
        value: function onSettingSwitchClick(_ref5) {
            var pref = _ref5.pref,
                value = _ref5.value;
            var set = this.state.set;

            var key = 'prefs.' + pref;

            set({ key: key, value: value });

            this.setState({ update: Date.now() });
        }
    }, {
        key: 'onThemeChange',
        value: function onThemeChange(e) {
            // TODO: on theme change
            this.state.setTheme(e.target.value);
        }
    }, {
        key: 'getElements',
        value: function getElements(_ref6) {
            var menu = _ref6.menu,
                group = _ref6.group,
                element = _ref6.element;

            var elements = {};

            if (Object.keys(menu).length < 1 || !group) {
                return null;
            }

            if (!element) {
                var _menu$group$component = menu[group].component,
                    component = _menu$group$component === undefined ? null : _menu$group$component;

                elements = component || menu[group]['elements'];
            } else {
                elements[element] = menu[group]['elements'][element];
            }

            return elements;
        }
    }, {
        key: 'filterMenu',
        value: function filterMenu(menu) {

            // Loop through menu items and if the group has hidden === true -> remove it
            Object.keys(menu).forEach(function (k) {
                if (_objectPath2.default.get(menu, 'hidden', false) === true) {
                    delete menu[k];
                    return;
                }

                var elements = _objectPath2.default.get(menu, k + '.elements', {});

                Object.keys(elements).forEach(function (e) {
                    if (_objectPath2.default.get(elements, e + '.hidden', false) === true) {
                        delete elements[e];
                    }
                });

                menu[k]['elements'] = elements;
            });

            console.log({ menu: menu });
            return menu;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _state2 = this.state,
                _state2$update = _state2.update,
                update = _state2$update === undefined ? Date.now() : _state2$update,
                _state2$filters = _state2.filters,
                filters = _state2$filters === undefined ? [] : _state2$filters,
                _state2$manifest = _state2.manifest,
                manifest = _state2$manifest === undefined ? {} : _state2$manifest,
                _state2$prefs = _state2.prefs,
                prefs = _state2$prefs === undefined ? {} : _state2$prefs,
                group = _state2.group,
                element = _state2.element,
                showSettings = _state2.showSettings,
                showMenu = _state2.showMenu,
                style = _state2.style;
            var _manifest$themes = manifest.themes,
                themes = _manifest$themes === undefined ? [] : _manifest$themes,
                _manifest$settings = manifest.settings,
                settings = _manifest$settings === undefined ? [] : _manifest$settings,
                _manifest$menu = manifest.menu,
                menu = _manifest$menu === undefined ? {} : _manifest$menu,
                _manifest$toolbar = manifest.toolbar,
                toolbar = _manifest$toolbar === undefined ? {} : _manifest$toolbar,
                _manifest$sidebar = manifest.sidebar,
                sidebar = _manifest$sidebar === undefined ? {} : _manifest$sidebar,
                _manifest$header = manifest.header,
                header = _manifest$header === undefined ? {} : _manifest$header,
                overview = manifest.overview;


            menu = this.filterMenu(menu);

            var elements = this.getElements({ menu: menu, group: group, element: element });
            var groupName = group ? menu[group]['label'] : 'Reactium';
            var theme = _underscore2.default.findWhere(themes, { selected: true });

            if (!style) {
                style = theme ? theme.css : null;
            }

            // update manifest to have the selected style
            themes = themes.map(function (item) {
                var css = item.css;

                item['selected'] = css === style;
                return item;
            });

            return _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    { titleTemplate: '%s | Style Guide' },
                    _react2.default.createElement(
                        'title',
                        null,
                        groupName
                    ),
                    _react2.default.createElement('html', { lang: 'en' }),
                    _react2.default.createElement('body', { className: 're-toolkit' })
                ),
                _react2.default.createElement(_ToolbarIcons2.default, null),
                _react2.default.createElement(_Header2.default, _extends({}, header, {
                    themes: themes,
                    onThemeChange: this.onThemeChange.bind(this)
                })),
                _react2.default.createElement(
                    'main',
                    { className: 're-toolkit-container' },
                    _react2.default.createElement(_Sidebar2.default, _extends({}, sidebar, {
                        menu: menu,
                        prefs: prefs,
                        update: update,
                        toolbar: toolbar,
                        filters: filters,
                        ref: function ref(elm) {
                            _this3.sidebar = elm;
                        },
                        onFilterClick: this.onFilterClick.bind(this),
                        onMenuItemClick: this.onMenuItemClick.bind(this),
                        onToolbarItemClick: this.onButtonClick.bind(this)
                    })),
                    _react2.default.createElement(_Content2.default, {
                        group: group,
                        prefs: prefs,
                        menu: menu,
                        style: style,
                        data: elements,
                        update: update,
                        title: groupName,
                        element: element,
                        defaultComponent: overview,
                        ref: function ref(elm) {
                            _this3.content = elm;
                        },
                        onButtonClick: this.onButtonClick.bind(this),
                        onCrumbClick: this.onMenuItemClick.bind(this)
                    })
                ),
                _react2.default.createElement(_Settings2.default, {
                    onSwitchClick: this.onSettingSwitchClick.bind(this),
                    onSettingsClose: this.onSettingsClose.bind(this),
                    onSettingsOpen: this.onSettingsOpen.bind(this),
                    ref: function ref(elm) {
                        _this3.settings = elm;
                    },
                    visible: showSettings,
                    settings: settings,
                    update: update,
                    prefs: prefs
                })
            );
        }
    }]);

    return Toolkit;
}(_react.Component);

exports.default = Toolkit;


Toolkit.defaultProps = {
    update: Date.now(),
    prefs: {},
    filters: [],
    style: null,
    showSettings: false
};