'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Search = require('../Search');

var _Search2 = _interopRequireDefault(_Search);

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
 * React Component: Menu
 * -----------------------------------------------------------------------------
 */

var Menu = function (_Component) {
    _inherits(Menu, _Component);

    function Menu(props) {
        _classCallCheck(this, Menu);

        var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

        _this.state = _extends({}, _this.props);
        _this.search = null;
        _this.searchTest = _this.searchTest.bind(_this);
        return _this;
    }

    _createClass(Menu, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState(function (prevState) {
                return _extends({}, prevState, nextProps);
            });
        }
    }, {
        key: 'onSearch',
        value: function onSearch(e) {
            var target = e.target;
            var data = this.state.data;


            var search = target.value;
            search = _underscore2.default.compact(search.split(' ')).join(' ');
            search = search.replace(/\s+/g, ' ').replace(/^\s+|\s+$/, '');
            search = search.length < 1 ? null : search;

            this.search = search;

            this.setState({ search: search });
        }
    }, {
        key: 'onSearchClear',
        value: function onSearchClear(e) {
            this.search = null;
            this.setState({ search: null });
        }
    }, {
        key: 'searchTest',
        value: function searchTest(str) {
            var search = this.search;


            if (!search || search === null) {
                return true;
            }

            str = _underscore2.default.compact(str.split(' ')).join(' ').replace(/\s+/g, ' ').replace(/^\s+|\s+$/, '').toLowerCase();

            return new RegExp(search, 'i').test(str);
        }
    }, {
        key: 'filterTest',
        value: function filterTest(type) {
            var filters = this.state.filters;


            if (filters.length < 1) {
                return true;
            }

            filters = _underscore2.default.pluck(filters, 'type');

            return Boolean(filters.indexOf(type) > -1);
        }
    }, {
        key: 'renderFilters',
        value: function renderFilters() {
            var _state = this.state,
                _state$filters = _state.filters,
                filters = _state$filters === undefined ? [] : _state$filters,
                onFilterClick = _state.onFilterClick;


            return filters.length > 0 ? _react2.default.createElement(
                'li',
                { className: 'filters' },
                filters.map(function (item, i) {
                    var type = item.type,
                        label = item.label;

                    return _react2.default.createElement(
                        'button',
                        { key: 'filter-' + i, className: 'filters-remove-btn', onClick: function onClick(e) {
                                onFilterClick(e, item);
                            } },
                        _react2.default.createElement(
                            'svg',
                            null,
                            _react2.default.createElement('use', { xlinkHref: '#re-icon-close' })
                        ),
                        label
                    );
                })
            ) : null;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state2 = this.state,
                _state2$data = _state2.data,
                data = _state2$data === undefined ? {} : _state2$data,
                onItemClick = _state2.onItemClick,
                _state2$filters = _state2.filters,
                filters = _state2$filters === undefined ? [] : _state2$filters,
                search = _state2.search;


            if (search) {
                this.search = search;
            }

            return _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 're-toolkit-menu' },
                    _react2.default.createElement(
                        'div',
                        { className: 're-toolkit-menu-top' },
                        _react2.default.createElement(_Search2.default, { text: search, onChange: this.onSearch.bind(this), onSearchClear: this.onSearchClear.bind(this) })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 're-toolkit-menu-middle' },
                        _react2.default.createElement(
                            'ul',
                            null,
                            this.renderFilters(),
                            Object.keys(data).map(function (key, k) {
                                var _data$key = data[key],
                                    label = _data$key.label,
                                    route = _data$key.route,
                                    _data$key$redirect = _data$key.redirect,
                                    redirect = _data$key$redirect === undefined ? false : _data$key$redirect,
                                    _data$key$elements = _data$key.elements,
                                    elements = _data$key$elements === undefined ? {} : _data$key$elements,
                                    _data$key$target = _data$key.target,
                                    target = _data$key$target === undefined ? null : _data$key$target;

                                // Test the label against the search value

                                var isMatch = _this2.searchTest(label);
                                if (isMatch !== true && Object.keys(elements).length < 1) {
                                    return;
                                }

                                // Do a search on the label and sub children.
                                // If the search is true add it to the childSearch array to be drawn in the menu later.
                                var childSearch = [];

                                if (Object.keys(elements).length > 0) {
                                    Object.keys(elements).forEach(function (elm, i) {
                                        var item = elements[elm];
                                        var label = item.label,
                                            type = item.type;


                                        if (_this2.searchTest(label) === true && _this2.filterTest(type) === true) {
                                            childSearch.push(elm);
                                        }
                                    });
                                }

                                // No childrenSearch and no search match
                                if (isMatch !== true && childSearch.length < 1) {
                                    return;
                                }

                                // No childSearch and filters
                                if (childSearch.length < 1 && filters.length > 0) {
                                    return;
                                }

                                return _react2.default.createElement(
                                    'li',
                                    { key: 'group-' + key },
                                    redirect === true ? _react2.default.createElement(
                                        'a',
                                        { className: 'heading', href: route, target: target },
                                        label
                                    ) : _react2.default.createElement(
                                        _reactRouterDom.NavLink,
                                        { className: 'heading', exact: false, to: route, onClick: onItemClick },
                                        label
                                    ),
                                    childSearch.length < 1 ? null : _react2.default.createElement(
                                        'ul',
                                        null,
                                        childSearch.map(function (elm, i) {
                                            var item = elements[elm];
                                            var label = item.label,
                                                route = item.route,
                                                _item$redirect = item.redirect,
                                                redirect = _item$redirect === undefined ? false : _item$redirect,
                                                _item$target = item.target,
                                                target = _item$target === undefined ? null : _item$target;


                                            if (_this2.searchTest(label) !== true) {
                                                return;
                                            }

                                            return _react2.default.createElement(
                                                'li',
                                                { key: 're-toolkit-menu-item-' + i },
                                                redirect === true ? _react2.default.createElement(
                                                    'a',
                                                    { className: 'link', href: route, target: target },
                                                    label
                                                ) : _react2.default.createElement(
                                                    _reactRouterDom.NavLink,
                                                    { className: 'link', exact: true, to: route, onClick: onItemClick },
                                                    label
                                                )
                                            );
                                        })
                                    )
                                );
                            })
                        )
                    ),
                    _react2.default.createElement('div', { className: 're-toolkit-menu-bottom' })
                )
            );
        }
    }]);

    return Menu;
}(_react.Component);

exports.default = Menu;


Menu.defaultProps = {
    onFilterClick: null,
    onItemClick: null,
    search: null,
    filters: [],
    data: {}
};