'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */


var _reactRedux = require('react-redux');

var _Toolkit = require('./Toolkit');

var _Toolkit2 = _interopRequireDefault(_Toolkit);

var _dependencies = require('../../dependencies');

var _dependencies2 = _interopRequireDefault(_dependencies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * -----------------------------------------------------------------------------
 * Inject Redux State and Actions into React Component: Toolkit
 * -----------------------------------------------------------------------------
 */
var mapStateToProps = function mapStateToProps(state, props) {
  return _extends({}, state.Toolkit, props);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    mount: function mount() {
      return dispatch(_dependencies2.default.actions.Toolkit.mount());
    },
    menuItemClick: function menuItemClick(url) {
      return dispatch(_dependencies2.default.actions.Toolkit.menuItemClick(url));
    },
    set: function set(data) {
      return dispatch(_dependencies2.default.actions.Toolkit.set(data));
    },
    setTheme: function setTheme(data) {
      return dispatch(_dependencies2.default.actions.Toolkit.setTheme(data));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Toolkit2.default);