'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Toolbar = require('../Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Menu = require('../Menu');

var _Menu2 = _interopRequireDefault(_Menu);

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
 * React Component: Sidebar
 * -----------------------------------------------------------------------------
 */

var Sidebar = function (_Component) {
    _inherits(Sidebar, _Component);

    function Sidebar(props) {
        _classCallCheck(this, Sidebar);

        var _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));

        _this.state = _extends({}, _this.props);
        return _this;
    }

    _createClass(Sidebar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
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
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                menu = _state.menu,
                onFilterClick = _state.onFilterClick,
                onMenuItemClick = _state.onMenuItemClick,
                onToolbarItemClick = _state.onToolbarItemClick,
                position = _state.position,
                _state$filters = _state.filters,
                filters = _state$filters === undefined ? [] : _state$filters,
                _state$toolbar = _state.toolbar,
                toolbar = _state$toolbar === undefined ? {} : _state$toolbar,
                _state$prefs = _state.prefs,
                prefs = _state$prefs === undefined ? {} : _state$prefs;


            position = _objectPath2.default.get(prefs, 'sidebar.position', position);

            return _react2.default.createElement(
                'aside',
                { className: 're-toolkit-sidebar ' + position },
                _react2.default.createElement(_Toolbar2.default, _extends({}, toolbar, { onToolbarItemClick: onToolbarItemClick })),
                _react2.default.createElement(_Menu2.default, { data: menu, onFilterClick: onFilterClick, onItemClick: onMenuItemClick, filters: filters })
            );
        }
    }]);

    return Sidebar;
}(_react.Component);

exports.default = Sidebar;


Sidebar.defaultProps = {
    prefs: {},
    toolbar: {},
    menu: {},
    filters: [],
    onFilterClick: null,
    onMenuItemClick: null,
    onToolbarItemClick: null,
    position: 'left'
};