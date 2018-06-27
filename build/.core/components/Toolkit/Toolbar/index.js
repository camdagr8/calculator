'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
 * React Component: Toolbar
 * -----------------------------------------------------------------------------
 */

var Toolbar = function (_Component) {
    _inherits(Toolbar, _Component);

    function Toolbar(props) {
        _classCallCheck(this, Toolbar);

        var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, props));

        _this.state = _extends({}, _this.props);
        _this.onButtonClick = _this.onButtonClick.bind(_this);
        return _this;
    }

    _createClass(Toolbar, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState(function (prevState) {
                return _extends({}, prevState, nextProps);
            });
        }
    }, {
        key: 'onButtonClick',
        value: function onButtonClick(e) {
            var id = e.currentTarget.id;
            var onToolbarItemClick = this.state.onToolbarItemClick;


            if (typeof onToolbarItemClick === 'function') {
                e['type'] = id;
                onToolbarItemClick(e, this);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var buttons = this.state.buttons;


            return _react2.default.createElement(
                'nav',
                { className: 're-toolkit-toolbar' },
                _react2.default.createElement(
                    'div',
                    null,
                    buttons.map(function (item, i) {
                        var icon = item.icon,
                            name = item.name,
                            _item$label = item.label,
                            label = _item$label === undefined ? null : _item$label,
                            _item$cls = item.cls,
                            cls = _item$cls === undefined ? null : _item$cls;

                        return name === 'spacer' ? _react2.default.createElement('div', { className: 'spacer', key: 're-toolkit-toolbar-' + i }) : _react2.default.createElement(
                            'button',
                            { onClick: _this2.onButtonClick, type: 'button', key: 're-toolkit-toolbar-' + i, id: 'toolbar-' + name, className: cls },
                            _react2.default.createElement(
                                'svg',
                                null,
                                _react2.default.createElement('use', { xlinkHref: icon })
                            ),
                            label ? _react2.default.createElement(
                                'div',
                                null,
                                label
                            ) : ''
                        );
                    })
                )
            );
        }
    }]);

    return Toolbar;
}(_react.Component);

exports.default = Toolbar;


Toolbar.defaultProps = {
    onToolbarItemClick: null,
    buttons: [{ icon: '#re-icon-dna', name: 'filter-all', label: 'All Elements' }, { icon: '#re-icon-atom', name: 'filter-atom', label: 'Atoms' }, { icon: '#re-icon-molecule', name: 'filter-molecule', label: 'Molecules' }, { icon: '#re-icon-organism', name: 'filter-organism', label: 'Organisms' }, { icon: '#re-icon-catalyst', name: 'filter-catalyst', label: 'Catalysts' }, { icon: '#re-icon-page', name: 'filter-template', label: 'Pages' }, { icon: '#re-icon-template', name: 'filter-template', label: 'Templates' }, { name: 'spacer' }, { icon: '#re-icon-settings', name: 'toggle-settings', cls: 'toggle' }]
};