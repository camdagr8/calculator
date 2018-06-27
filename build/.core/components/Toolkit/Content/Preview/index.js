'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tools = require('../../_lib/tools');

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
 * React Component: Preview
 * -----------------------------------------------------------------------------
 */

var Preview = function (_Component) {
    _inherits(Preview, _Component);

    function Preview(props) {
        _classCallCheck(this, Preview);

        var _this = _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this, props));

        _this.resize = _this.resize.bind(_this);
        _this.registerIframe = _this.registerIframe.bind(_this);
        _this.state = _extends({}, _this.props);
        return _this;
    }

    _createClass(Preview, [{
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
        key: 'resize',
        value: function resize() {
            var visible = this.state.visible;

            if (!this.iframe || visible === false) {
                return;
            }

            try {
                var h = this.iframe.contentWindow.document.body.scrollHeight;
                h = h < 1 ? 100 : h;

                this.iframe.style.height = h;
            } catch (err) {}
        }
    }, {
        key: 'registerIframe',
        value: function registerIframe(elm) {
            this.iframe = elm;
        }
    }, {
        key: 'renderCmp',
        value: function renderCmp(_ref) {
            var cname = _ref.cname,
                cpath = _ref.cpath,
                style = _ref.style;


            return '\n            <html>\n                <head>\n                    <link rel="stylesheet" href="' + style + '">\n                </head>\n                <body style="padding: 25px;">\n                    <Component type="' + cname + '" path="' + cpath + '"></Component>\n                    <script>\n                        window.ssr = false;\n                        window.restAPI = \'/api\';\n                        window.parseAppId = \'' + parseAppId + '\';\n                    </script>\n                    <script src="/vendors.js"></script>\n                    <script src="/main.js"></script>\n                </body>\n            </html>\n        ';
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                Component = _state.component,
                group = _state.group,
                id = _state.id,
                visible = _state.visible,
                style = _state.style,
                path = _state.path;


            if (!Component || !group || !id) {
                return null;
            }

            var type = typeof Component === 'undefined' ? 'undefined' : _typeof(Component);
            var display = visible ? 'block' : 'none';

            switch (type) {
                case 'string':
                    {
                        return _react2.default.createElement('iframe', {
                            src: Component,
                            style: { display: display },
                            id: 'iframe-' + id,
                            onLoad: this.resize,
                            ref: this.registerIframe
                        });
                    }

                case 'function':
                    {
                        var cname = path || (0, _tools.getDisplayName)(Component);
                        var cpath = group + '/elements/' + cname;
                        var markup = this.renderCmp({ cname: cname, cpath: cpath, style: style });

                        return _react2.default.createElement('iframe', {
                            srcDoc: markup,
                            style: { display: display },
                            id: 'iframe-' + id,
                            onLoad: this.resize,
                            ref: this.registerIframe
                        });
                    }

                default:
                    {
                        return null;
                    }
            }
        }
    }]);

    return Preview;
}(_react.Component);

exports.default = Preview;


Preview.defaultProps = {
    visible: true,
    component: null,
    group: null,
    id: null,
    style: '/assets/style/style.css'
};