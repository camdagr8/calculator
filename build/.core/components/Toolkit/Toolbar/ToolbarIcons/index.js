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
 * React Component: ToolbarIcons
 * -----------------------------------------------------------------------------
 */

var ToolbarIcons = function (_Component) {
    _inherits(ToolbarIcons, _Component);

    function ToolbarIcons(props) {
        _classCallCheck(this, ToolbarIcons);

        var _this = _possibleConstructorReturn(this, (ToolbarIcons.__proto__ || Object.getPrototypeOf(ToolbarIcons)).call(this, props));

        _this.state = _extends({}, _this.props);
        return _this;
    }

    _createClass(ToolbarIcons, [{
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
            return _react2.default.createElement(
                'svg',
                { className: 're-toolkit-icons' },
                _react2.default.createElement(
                    'symbol',
                    { id: 're-icon-clipboard', viewBox: '0 0 1024 1024' },
                    _react2.default.createElement(
                        'g',
                        null,
                        _react2.default.createElement('path', { d: 'M435.2 153.6c-6.736 0-13.328-2.736-18.096-7.504s-7.504-11.36-7.504-18.096 2.736-13.328 7.504-18.096c4.752-4.768 11.36-7.504 18.096-7.504s13.344 2.736 18.096 7.504c4.768 4.752 7.504 11.36 7.504 18.096s-2.736 13.344-7.504 18.096c-4.768 4.768-11.36 7.504-18.096 7.504z' }),
                        _react2.default.createElement('path', { d: 'M793.6 358.4h-25.6v-128c0-42.347-34.453-76.8-76.8-76.8h-48.426c-10.68-14.824-24.949-26.909-42.526-35.698-14.091-7.045-27.994-10.891-39.134-12.99-10.898-59.6-63.213-104.912-125.914-104.912s-115.014 45.312-125.914 104.912c-11.141 2.099-25.043 5.944-39.134 12.99-17.579 8.789-31.848 20.874-42.528 35.698h-48.424c-42.347 0-76.8 34.453-76.8 76.8v563.2c0 42.347 34.453 76.8 76.8 76.8h128v76.8c0 42.347 34.453 76.8 76.8 76.8h409.6c42.347 0 76.8-34.453 76.8-76.8v-512c0-42.347-34.453-76.8-76.8-76.8zM291.749 164.362c19.898-10.402 40.982-10.76 41.051-10.762 14.138 0 25.6-11.462 25.6-25.6 0-42.347 34.453-76.8 76.8-76.8s76.8 34.453 76.8 76.8c0 14.138 11.32 25.6 25.458 25.6 0.211 0.002 21.298 0.362 41.194 10.763 16.942 8.858 27.754 22.195 32.666 40.438h-352.234c4.912-18.245 15.722-31.582 32.666-40.44zM179.2 819.2c-14.115 0-25.6-11.485-25.6-25.6v-563.2c0-14.115 11.485-25.6 25.6-25.6h27.672c-1.363 8.166-2.072 16.707-2.072 25.6 0 14.138 11.462 25.6 25.6 25.6h409.6c0.011 0.002 0.024 0 0.032 0 14.139 0 25.6-11.462 25.6-25.6 0-0.47-0.013-0.938-0.037-1.402-0.069-8.39-0.771-16.461-2.062-24.198h27.667c14.115 0 25.6 11.485 25.6 25.6v128h-256c-6.79 0-13.301 2.698-18.102 7.498l-128 128c-4.8 4.802-7.498 11.312-7.498 18.102v307.2h-128zM460.8 420.203v66.197c0 14.115-11.485 25.6-25.6 25.6h-66.195l91.795-91.797zM819.2 947.2c0 14.115-11.485 25.6-25.6 25.6h-409.6c-14.115 0-25.6-11.485-25.6-25.6v-384h76.8c42.347 0 76.8-34.451 76.8-76.8v-76.8h281.6c14.115 0 25.6 11.485 25.6 25.6v512z' })
                    )
                ),
                _react2.default.createElement(
                    'symbol',
                    { id: 're-icon-link', viewBox: '0 0 1024 1024' },
                    _react2.default.createElement(
                        'g',
                        null,
                        _react2.default.createElement('path', { d: 'M546.917 665.512c-48.275 0-96.55-18.376-133.301-55.128-9.998-9.997-9.998-26.206 0-36.203s26.205-9.997 36.203 0c53.539 53.541 140.656 53.541 194.197 0l186.166-186.166c53.539-53.539 53.539-140.656 0-194.197-53.541-53.539-140.656-53.538-194.197 0l-157.082 157.083c-9.998 9.997-26.206 9.997-36.203 0-9.998-9.998-9.998-26.206 0-36.205l157.083-157.083c73.502-73.501 193.101-73.501 266.603 0s73.502 193.101 0 266.603l-186.168 186.168c-36.752 36.752-85.027 55.128-133.302 55.128z' }),
                        _react2.default.createElement('path', { d: 'M239.717 972.712c-48.275 0-96.55-18.376-133.302-55.128-73.501-73.502-73.501-193.101 0-266.603l186.166-186.166c73.501-73.501 193.101-73.501 266.603 0 9.998 9.998 9.998 26.206 0 36.203-9.997 9.998-26.206 9.998-36.203 0-53.541-53.541-140.656-53.541-194.197 0l-186.165 186.166c-53.539 53.541-53.539 140.656 0 194.197s140.656 53.541 194.195 0l157.083-157.083c9.997-9.997 26.206-9.997 36.203 0 9.998 9.997 9.998 26.206 0 36.203l-157.083 157.083c-36.75 36.752-85.026 55.128-133.301 55.128z' })
                    )
                ),
                _react2.default.createElement(
                    'symbol',
                    { id: 're-icon-menu', viewBox: '0 0 1024 1024' },
                    _react2.default.createElement(
                        'g',
                        null,
                        _react2.default.createElement('path', { d: 'M896 307.2h-768c-14.138 0-25.6-11.462-25.6-25.6s11.462-25.6 25.6-25.6h768c14.139 0 25.6 11.462 25.6 25.6s-11.461 25.6-25.6 25.6z' }),
                        _react2.default.createElement('path', { d: 'M896 563.2h-768c-14.138 0-25.6-11.461-25.6-25.6s11.462-25.6 25.6-25.6h768c14.139 0 25.6 11.461 25.6 25.6s-11.461 25.6-25.6 25.6z' }),
                        _react2.default.createElement('path', { d: 'M896 819.2h-768c-14.138 0-25.6-11.461-25.6-25.6s11.462-25.6 25.6-25.6h768c14.139 0 25.6 11.461 25.6 25.6s-11.461 25.6-25.6 25.6z' })
                    )
                ),
                _react2.default.createElement(
                    'symbol',
                    { id: 're-icon-close', viewBox: '0 0 1024 1024' },
                    _react2.default.createElement(
                        'g',
                        null,
                        _react2.default.createElement('path', { d: 'M548.203 537.6l442.698-442.699c9.998-9.997 9.998-26.206 0-36.203-9.997-9.998-26.206-9.998-36.203 0l-442.698 442.699-442.699-442.698c-9.997-9.998-26.206-9.998-36.203 0-9.998 9.997-9.998 26.206 0 36.203l442.699 442.698-442.698 442.699c-9.998 9.997-9.998 26.206 0 36.203 4.998 4.998 11.549 7.498 18.101 7.498s13.102-2.499 18.101-7.499l442.699-442.698 442.699 442.699c4.998 4.998 11.549 7.498 18.101 7.498s13.102-2.499 18.101-7.499c9.998-9.997 9.998-26.206 0-36.203l-442.698-442.698z' })
                    )
                ),
                _react2.default.createElement(
                    'symbol',
                    { id: 're-icon-docs', viewBox: '0 0 1024 1024' },
                    _react2.default.createElement(
                        'g',
                        null,
                        _react2.default.createElement('path', { d: 'M844.8 1024h-665.6c-42.347 0-76.8-34.451-76.8-76.8v-819.2c0-42.347 34.453-76.8 76.8-76.8h665.6c42.349 0 76.8 34.453 76.8 76.8v819.2c0 42.349-34.451 76.8-76.8 76.8zM179.2 102.4c-14.115 0-25.6 11.485-25.6 25.6v819.2c0 14.115 11.485 25.6 25.6 25.6h665.6c14.115 0 25.6-11.485 25.6-25.6v-819.2c0-14.115-11.485-25.6-25.6-25.6h-665.6z' }),
                        _react2.default.createElement('path', { d: 'M640 256h-358.4c-14.138 0-25.6-11.462-25.6-25.6s11.462-25.6 25.6-25.6h358.4c14.138 0 25.6 11.462 25.6 25.6s-11.462 25.6-25.6 25.6z' }),
                        _react2.default.createElement('path', { d: 'M742.4 358.4h-460.8c-14.138 0-25.6-11.462-25.6-25.6s11.462-25.6 25.6-25.6h460.8c14.138 0 25.6 11.462 25.6 25.6s-11.462 25.6-25.6 25.6z' }),
                        _react2.default.createElement('path', { d: 'M742.4 460.8h-460.8c-14.138 0-25.6-11.462-25.6-25.6s11.462-25.6 25.6-25.6h460.8c14.138 0 25.6 11.462 25.6 25.6s-11.462 25.6-25.6 25.6z' }),
                        _react2.default.createElement('path', { d: 'M537.6 563.2h-256c-14.138 0-25.6-11.461-25.6-25.6s11.462-25.6 25.6-25.6h256c14.139 0 25.6 11.461 25.6 25.6s-11.461 25.6-25.6 25.6z' }),
                        _react2.default.createElement('path', { d: 'M742.4 768h-460.8c-14.138 0-25.6-11.461-25.6-25.6s11.462-25.6 25.6-25.6h460.8c14.139 0 25.6 11.461 25.6 25.6s-11.461 25.6-25.6 25.6z' }),
                        _react2.default.createElement('path', { d: 'M640 870.4h-358.4c-14.138 0-25.6-11.461-25.6-25.6s11.462-25.6 25.6-25.6h358.4c14.139 0 25.6 11.461 25.6 25.6s-11.461 25.6-25.6 25.6z' })
                    )
                ),
                _react2.default.createElement(
                    'symbol',
                    { id: 're-icon-markup', viewBox: '0 0 1024 1024' },
                    _react2.default.createElement(
                        'g',
                        null,
                        _react2.default.createElement('path', { d: 'M256 768c-6.552 0-13.102-2.499-18.101-7.499l-204.8-204.8c-9.998-9.997-9.998-26.206 0-36.203l204.8-204.8c9.997-9.997 26.206-9.997 36.203 0 9.998 9.997 9.998 26.206 0 36.203l-186.699 186.699 186.698 186.699c9.998 9.997 9.998 26.206 0 36.203-4.998 4.998-11.549 7.498-18.101 7.498z' }),
                        _react2.default.createElement('path', { d: 'M768 768c-6.552 0-13.102-2.499-18.101-7.499-9.998-9.997-9.998-26.206 0-36.203l186.698-186.698-186.698-186.699c-9.998-9.997-9.998-26.206 0-36.203 9.997-9.997 26.206-9.997 36.203 0l204.8 204.8c9.998 9.997 9.998 26.206 0 36.203l-204.8 204.8c-5 5-11.55 7.499-18.102 7.499z' }),
                        _react2.default.createElement('path', { d: 'M383.976 768.003c-4.634 0-9.325-1.258-13.544-3.894-11.989-7.494-15.634-23.288-8.141-35.278l256-409.6c7.493-11.984 23.283-15.634 35.278-8.141 11.989 7.494 15.634 23.288 8.141 35.278l-256 409.6c-4.858 7.77-13.202 12.035-21.734 12.035z' })
                    )
                ),
                _react2.default.createElement(
                    'symbol',
                    { id: 're-icon-search', viewBox: '0 0 1024 1024' },
                    _react2.default.createElement(
                        'g',
                        null,
                        _react2.default.createElement('path', { d: 'M966.070 981.101l-304.302-331.965c68.573-71.754 106.232-165.549 106.232-265.136 0-102.57-39.942-199-112.47-271.53s-168.96-112.47-271.53-112.47-199 39.942-271.53 112.47-112.47 168.96-112.47 271.53 39.942 199.002 112.47 271.53 168.96 112.47 271.53 112.47c88.362 0 172.152-29.667 240.043-84.248l304.285 331.947c5.050 5.507 11.954 8.301 18.878 8.301 6.179 0 12.378-2.226 17.293-6.728 10.421-9.555 11.126-25.749 1.571-36.171zM51.2 384c0-183.506 149.294-332.8 332.8-332.8s332.8 149.294 332.8 332.8-149.294 332.8-332.8 332.8-332.8-149.294-332.8-332.8z' })
                    )
                ),
                _react2.default.createElement(
                    'symbol',
                    { id: 're-icon-collapse', viewBox: '0 0 1024 1024' },
                    _react2.default.createElement(
                        'g',
                        null,
                        _react2.default.createElement('path', { d: 'M1016.499 7.498c-9.997-9.997-26.206-9.997-36.203 0l-314.696 314.699v-142.997c0-14.138-11.461-25.6-25.6-25.6s-25.6 11.462-25.6 25.6v204.8c0 14.138 11.461 25.6 25.6 25.6h204.8c14.139 0 25.6-11.462 25.6-25.6s-11.461-25.6-25.6-25.6h-142.997l314.696-314.698c10-9.998 10-26.206 0-36.205z' }),
                        _react2.default.createElement('path', { d: 'M384 614.4h-204.8c-14.138 0-25.6 11.461-25.6 25.6s11.462 25.6 25.6 25.6h142.997l-314.699 314.701c-9.997 9.995-9.997 26.206 0 36.203 5 4.997 11.55 7.496 18.102 7.496s13.102-2.499 18.102-7.501l314.698-314.696v142.997c0 14.139 11.462 25.6 25.6 25.6s25.6-11.461 25.6-25.6v-204.8c0-14.139-11.462-25.6-25.6-25.6z' })
                    )
                ),
                _react2.default.createElement(
                    'symbol',
                    { id: 're-icon-fullscreen', viewBox: '0 0 1024 1024' },
                    _react2.default.createElement(
                        'g',
                        null,
                        _react2.default.createElement('path', { d: 'M998.4 0h-256c-14.139 0-25.6 11.462-25.6 25.6s11.461 25.6 25.6 25.6h194.197l-314.696 314.698c-10 9.998-10 26.206 0 36.205 4.997 4.998 11.547 7.498 18.099 7.498s13.102-2.499 18.099-7.498l314.701-314.699v194.197c0 14.138 11.461 25.6 25.6 25.6s25.6-11.462 25.6-25.6v-256c0-14.138-11.461-25.6-25.6-25.6z' }),
                        _react2.default.createElement('path', { d: 'M402.102 621.901c-9.998-9.997-26.206-9.997-36.205 0l-314.698 314.696v-194.197c0-14.139-11.462-25.6-25.6-25.6s-25.6 11.461-25.6 25.6v256c0 14.139 11.462 25.6 25.6 25.6h256c14.138 0 25.6-11.461 25.6-25.6s-11.462-25.6-25.6-25.6h-194.197l314.699-314.701c9.997-9.995 9.997-26.203-0-36.198z' })
                    )
                ),
                _react2.default.createElement(
                    'symbol',
                    { id: 're-icon-chevron-left', viewBox: '0 0 1024 1024' },
                    _react2.default.createElement(
                        'g',
                        null,
                        _react2.default.createElement('path', { d: 'M716.8 1024c6.552 0 13.102-2.499 18.101-7.499 9.998-9.997 9.998-26.206 0-36.203l-442.698-442.698 442.698-442.699c9.998-9.997 9.998-26.206 0-36.203s-26.206-9.998-36.203 0l-460.8 460.8c-9.998 9.997-9.998 26.206 0 36.203l460.8 460.8c5 5 11.55 7.499 18.102 7.499z' })
                    )
                ),
                _react2.default.createElement(
                    'symbol',
                    { id: 're-icon-settings', viewBox: '0 0 1024 1024' },
                    _react2.default.createElement(
                        'g',
                        null,
                        _react2.default.createElement('path', { d: 'M128 1024c-14.138 0-25.6-11.461-25.6-25.6v-409.6c0-14.139 11.462-25.6 25.6-25.6s25.6 11.461 25.6 25.6v409.6c0 14.139-11.462 25.6-25.6 25.6z' }),
                        _react2.default.createElement('path', { d: 'M128 307.2c-14.138 0-25.6-11.462-25.6-25.6v-256c0-14.138 11.462-25.6 25.6-25.6s25.6 11.462 25.6 25.6v256c0 14.138-11.462 25.6-25.6 25.6z' }),
                        _react2.default.createElement('path', { d: 'M179.2 512h-102.4c-42.347 0-76.8-34.453-76.8-76.8s34.453-76.8 76.8-76.8h102.4c42.347 0 76.8 34.453 76.8 76.8s-34.453 76.8-76.8 76.8zM76.8 409.6c-14.115 0-25.6 11.485-25.6 25.6s11.485 25.6 25.6 25.6h102.4c14.115 0 25.6-11.485 25.6-25.6s-11.485-25.6-25.6-25.6h-102.4z' }),
                        _react2.default.createElement('path', { d: 'M486.4 1024c-14.138 0-25.6-11.461-25.6-25.6v-204.8c0-14.139 11.462-25.6 25.6-25.6s25.6 11.461 25.6 25.6v204.8c0 14.139-11.462 25.6-25.6 25.6z' }),
                        _react2.default.createElement('path', { d: 'M486.4 512c-14.138 0-25.6-11.462-25.6-25.6v-460.8c0-14.138 11.462-25.6 25.6-25.6s25.6 11.462 25.6 25.6v460.8c0 14.138-11.462 25.6-25.6 25.6z' }),
                        _react2.default.createElement('path', { d: 'M537.6 716.8h-102.4c-42.347 0-76.8-34.453-76.8-76.8s34.453-76.8 76.8-76.8h102.4c42.347 0 76.8 34.453 76.8 76.8s-34.453 76.8-76.8 76.8zM435.2 614.4c-14.115 0-25.6 11.485-25.6 25.6s11.485 25.6 25.6 25.6h102.4c14.115 0 25.6-11.485 25.6-25.6s-11.485-25.6-25.6-25.6h-102.4z' }),
                        _react2.default.createElement('path', { d: 'M844.8 1024c-14.139 0-25.6-11.461-25.6-25.6v-512c0-14.138 11.461-25.6 25.6-25.6s25.6 11.462 25.6 25.6v512c0 14.139-11.461 25.6-25.6 25.6z' }),
                        _react2.default.createElement('path', { d: 'M844.8 204.8c-14.139 0-25.6-11.462-25.6-25.6v-153.6c0-14.138 11.461-25.6 25.6-25.6s25.6 11.462 25.6 25.6v153.6c0 14.138-11.461 25.6-25.6 25.6z' }),
                        _react2.default.createElement('path', { d: 'M896 409.6h-102.4c-42.347 0-76.8-34.453-76.8-76.8s34.453-76.8 76.8-76.8h102.4c42.347 0 76.8 34.453 76.8 76.8s-34.453 76.8-76.8 76.8zM793.6 307.2c-14.115 0-25.6 11.485-25.6 25.6s11.485 25.6 25.6 25.6h102.4c14.115 0 25.6-11.485 25.6-25.6s-11.485-25.6-25.6-25.6h-102.4z' })
                    )
                ),
                _react2.default.createElement(
                    'symbol',
                    { id: 're-icon-code', viewBox: '0 0 512 512' },
                    _react2.default.createElement('path', { d: 'M377.3 121.3l-40.5 40.4 94.4 94.3-94.4 94.3 40.5 40.4L512 256zM134.7 121.3L0 256l134.7 134.7 40.5-40.4L80.8 256l94.4-94.3zM281.8 103.8zM230.183 408.16l-29.233-7.97 80.85-296.484 29.234 7.972z' })
                ),
                _react2.default.createElement(
                    'symbol',
                    { id: 're-icon-notes', viewBox: '0 0 512 512' },
                    _react2.default.createElement('path', { d: 'M443.8 0H68.2C30.6 0 0 30.5 0 68v264.2c0 16.6 8.9 29.5 25.9 37.5 15.3 7.2 33.1 8.4 40.1 8.5V512l201.6-134h176.1c37.6 0 68.2-30.3 68.2-67.8V68c.1-37.5-30.5-68-68.1-68zM114 438V330H68.2c-11.1 0-19.2-8.8-19.2-19.8V68c0-11 8.2-20 19.2-20h375.5c11.1 0 19.2 9 19.2 20v242.2c0 11-8.2 19.8-19.2 19.8H244.2L114 438z' })
                ),
                _react2.default.createElement(
                    'symbol',
                    { id: 're-icon-labels', viewBox: '0 0 512 512' },
                    _react2.default.createElement('path', { d: 'M304 280c0 13.2-10.8 24-24 24h-48c-13.2 0-24-10.8-24-24v-48c0-13.2 10.8-24 24-24h48c13.2 0 24 10.8 24 24v48zM464 280c0 13.2-10.8 24-24 24h-48c-13.2 0-24-10.8-24-24v-48c0-13.2 10.8-24 24-24h48c13.2 0 24 10.8 24 24v48zM144 280c0 13.2-10.8 24-24 24H72c-13.2 0-24-10.8-24-24v-48c0-13.2 10.8-24 24-24h48c13.2 0 24 10.8 24 24v48z' })
                ),
                _react2.default.createElement(
                    'symbol',
                    { id: 're-icon-menu', viewBox: '0 0 512 512' },
                    _react2.default.createElement('path', { d: 'M512 100c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h488c6.6 0 12 5.4 12 12v24zM512 212c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h488c6.6 0 12 5.4 12 12v24zM512 324c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h488c6.6 0 12 5.4 12 12v24zM512 436c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h488c6.6 0 12 5.4 12 12v24z' })
                ),
                _react2.default.createElement(
                    'symbol',
                    { id: 're-icon-settings', viewBox: '0 0 512 512' },
                    _react2.default.createElement('path', { d: 'M256 377.3c-67.5 0-121.6-53.9-121.6-121.3s54-121.3 121.6-121.3S377.6 188.6 377.6 256 323.5 377.3 256 377.3zm0-215.6c-52.7 0-94.6 41.8-94.6 94.3s41.9 94.3 94.6 94.3 94.6-41.8 94.6-94.3-41.9-94.3-94.6-94.3zM293.2 512h-72.9L200 450c-13.5-4-27-9.4-39.2-16.2l-59.4 29.6L50 412.3 79.7 353c-6.8-12.1-12.2-25.6-16.2-39.1L0 292.4v-72.8l62.1-20.2c4.1-13.5 9.5-26.9 16.2-39.1L48.6 101 100 49.9l59.4 29.6c12.2-6.7 25.7-12.1 39.2-16.2L220.2 0h72.9l20.3 62c13.5 4 27 9.4 39.2 16.2L412 48.5l51.3 51.2-29.7 59.3c6.8 12.1 12.2 25.6 16.2 39.1l62.1 20.2V291l-62.1 20.2c-4.1 13.5-9.5 26.9-16.2 39.1l29.7 59.3-51.3 51.2-59.4-29.6c-12.2 6.7-25.7 12.1-39.2 16.2L293.2 512zm-54.1-26.9h35.1l18.9-57.9 6.8-1.3c16.2-4 31.1-10.8 45.9-18.9l6.8-4 54 26.9 24.3-24.3-27-53.9 4.1-6.7c8.1-13.5 14.9-29.6 18.9-45.8l1.4-6.7 58.1-18.9v-35l-58.1-18.9-1.4-6.7c-4.1-16.2-10.8-31-18.9-45.8l-4.1-6.7 27-53.9-24.3-24.3-54 26.9-6.8-4c-14.8-8.2-29.7-14.9-45.9-19l-6.8-1.3L274.2 27h-35.1l-18.9 57.9-6.8 1.3c-16.2 4-31.1 10.8-45.9 18.9l-6.8 4-54-26.9-24.3 24.3 27 53.9-4.1 6.7c-8.1 13.5-14.9 29.6-18.9 45.8l-1.4 6.7-58 18.9v35l58.1 18.9 1.4 6.7c4.1 16.2 10.8 31 18.9 45.8l4.1 6.7-27 53.9 24.3 24.3 54-26.9 6.8 4c14.9 8.1 29.7 14.8 45.9 18.9l6.8 1.3 18.8 58z' })
                ),
                _react2.default.createElement(
                    'symbol',
                    { id: 're-icon-search', viewBox: '0 0 476 512' },
                    _react2.default.createElement('path', { d: 'M329.143 237.714c0-70.572-57.428-128-128-128s-128 57.428-128 128 57.428 128 128 128 128-57.428 128-128zM475.428 475.428c0 20-16.572 36.572-36.572 36.572-9.714 0-19.143-4-25.714-10.857l-98-97.714c-33.428 23.143-73.428 35.428-114 35.428-111.143 0-201.143-90-201.143-201.143s90-201.143 201.143-201.143 201.143 90 201.143 201.143c0 40.571-12.286 80.571-35.428 114l98 98c6.572 6.572 10.572 16 10.572 25.714z' })
                ),
                _react2.default.createElement(
                    'symbol',
                    { id: 're-icon-catalyst', viewBox: '0 0 70 70' },
                    _react2.default.createElement(
                        'title',
                        null,
                        'Catalysts'
                    ),
                    _react2.default.createElement(
                        'g',
                        { fill: '#FFF', stroke: '#000', strokeWidth: '4' },
                        _react2.default.createElement('circle', { cx: '29', cy: '41', r: '23' }),
                        _react2.default.createElement('path', { d: 'M35 20L50 5l15 15-15 15' }),
                        _react2.default.createElement('path', { strokeLinecap: 'round', d: 'M67 22L48 3' })
                    ),
                    _react2.default.createElement('path', { fill: 'currentColor', d: 'M46 41c0-6-5-11-11-11-9 0-11 7-22 6l-1 5a17 17 0 0 0 34 1v-1z' }),
                    _react2.default.createElement(
                        'g',
                        { fill: '#FFF' },
                        _react2.default.createElement('circle', { cx: '35', cy: '41', r: '5' }),
                        _react2.default.createElement('circle', { cx: '22', cy: '45', r: '4' }),
                        _react2.default.createElement('circle', { cx: '31', cy: '52', r: '3' })
                    )
                ),
                _react2.default.createElement(
                    'symbol',
                    { id: 're-icon-dna', viewBox: '0 0 70 70' },
                    _react2.default.createElement(
                        'title',
                        null,
                        'All Elements'
                    ),
                    _react2.default.createElement('rect', { x: '2', y: '2', width: '66', height: '66', fill: 'currentColor', stroke: '#000', strokeWidth: '4', rx: '10' }),
                    _react2.default.createElement('rect', { x: '7', y: '7', width: '56', height: '56', fill: 'none', stroke: '#fff', strokeWidth: '6', rx: '5' }),
                    _react2.default.createElement(
                        'text',
                        { transform: 'translate(14 50)', fill: '#FFF', fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '33' },
                        'Re'
                    ),
                    _react2.default.createElement('path', { fill: '#FFF', d: 'M43 27l6-11 2 3 6-6-6 10-2-3-6 7z' })
                ),
                _react2.default.createElement(
                    'symbol',
                    { id: 're-icon-atom', viewBox: '0 0 70 70' },
                    _react2.default.createElement(
                        'title',
                        null,
                        'Atoms'
                    ),
                    _react2.default.createElement('circle', { cx: '35', cy: '35', r: '33', fill: '#fff', stroke: '#000', strokeWidth: '4' }),
                    _react2.default.createElement('circle', { cx: '58', cy: '58', r: '7', stroke: '#fff', strokeWidth: '4' }),
                    _react2.default.createElement('circle', { cx: '35', cy: '35', r: '23', fill: 'currentColor' })
                ),
                _react2.default.createElement(
                    'symbol',
                    { id: 're-icon-molecule', viewBox: '0 0 70 70' },
                    _react2.default.createElement(
                        'title',
                        null,
                        'Molecules'
                    ),
                    _react2.default.createElement('circle', { cx: '35', cy: '32', r: '30' }),
                    _react2.default.createElement('circle', { cx: '15', cy: '53', r: '15' }),
                    _react2.default.createElement('circle', { cx: '55', cy: '53', r: '15' }),
                    _react2.default.createElement('circle', { cx: '35', cy: '32', r: '22', fill: 'currentColor', stroke: '#fff', strokeWidth: '8' }),
                    _react2.default.createElement(
                        'g',
                        { fill: 'currentColor', stroke: '#fff', strokeWidth: '4' },
                        _react2.default.createElement('circle', { cx: '15', cy: '53', r: '9' }),
                        _react2.default.createElement('circle', { cx: '55', cy: '53', r: '9' })
                    )
                ),
                _react2.default.createElement(
                    'symbol',
                    { id: 're-icon-organism', viewBox: '0 0 70 70' },
                    _react2.default.createElement(
                        'title',
                        null,
                        'Organisms'
                    ),
                    _react2.default.createElement('path', { fill: '#fff', stroke: '#000', strokeWidth: '4', d: 'M58 13.2c-4.7-3.4-10.3-4-15.3-2.4-2.8.9-5.8.2-7.9-1.9-2.1-2-4.8-3.5-8.1-3.9-6-.8-11.9 2.5-14.4 7.9-1.6 3.4-1.7 6.9-.7 10 .8 2.6.1 5.3-1.7 7.4-4.7 5.6-6.4 13.5-3.6 21C10 61 20.1 66.6 30 64.6c8.3-1.6 14.4-7.9 16.3-15.4.7-2.9 3-5 5.9-5.7 4.5-1.2 8.6-4.2 10.9-8.7A17.2 17.2 0 0 0 58 13.2z' }),
                    _react2.default.createElement('circle', { cx: '48', cy: '27', r: '7' }),
                    _react2.default.createElement(
                        'g',
                        { fill: 'currentColor' },
                        _react2.default.createElement('circle', { cx: '25', cy: '19', r: '4' }),
                        _react2.default.createElement('circle', { cx: '26', cy: '44', r: '11' }),
                        _react2.default.createElement('circle', { cx: '35', cy: '25', r: '2' }),
                        _react2.default.createElement('circle', { cx: '42', cy: '38', r: '2' }),
                        _react2.default.createElement('circle', { cx: '48', cy: '27', r: '7' })
                    ),
                    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', strokeLinecap: 'round', d: 'M30 6l1-3m7 8l1-3m9 2V7m10 6l2-3m4 11l3-1m-2 11l3 1m-6 10l-2-3m-9 5l2 3m-8 5l4 2m-10 6l3 3m-11 5l-1-3m-10-1l-1 4m-10-6l3-3m-6-7l-3 1m2-12H2m8-10l-4-1m6-7l-4-1m4-9l-3-1m11-6l-2-3' })
                ),
                _react2.default.createElement(
                    'symbol',
                    { id: 're-icon-template', viewBox: '0 0 70 70' },
                    _react2.default.createElement(
                        'title',
                        null,
                        'Templates'
                    ),
                    _react2.default.createElement(
                        'g',
                        { strokeWidth: '4', stroke: '#000' },
                        _react2.default.createElement('rect', { fill: '#FFF', stroke: 'currentColor', x: '16', y: '2', width: '48', height: '56', strokeDasharray: '4', strokeDashoffset: '2' }),
                        _react2.default.createElement('polygon', { fill: '#fff', points: '6,12 38,12 54,28 54,68 6,68' }),
                        _react2.default.createElement('polyline', { fill: 'currentColor', points: '38,12 38,28 54,28' }),
                        _react2.default.createElement('polygon', { fill: 'none', points: '6,12 38,12 54,28 54,68 6,68' })
                    )
                ),
                _react2.default.createElement(
                    'svg',
                    { id: 're-icon-page', viewBox: '0 0 70 70' },
                    _react2.default.createElement(
                        'title',
                        null,
                        'Pages'
                    ),
                    _react2.default.createElement(
                        'g',
                        { strokeWidth: '4', stroke: '#000' },
                        _react2.default.createElement('rect', { fill: 'currentColor', x: '16', y: '2', width: '48', height: '56' }),
                        _react2.default.createElement('polygon', { fill: '#FFF', points: '6,12 38,12 54,28 54,68 6,68' }),
                        _react2.default.createElement('polyline', { fill: 'none', points: '38,12 38,28 54,28' })
                    )
                )
            );
        }
    }]);

    return ToolbarIcons;
}(_react.Component);

exports.default = ToolbarIcons;


ToolbarIcons.defaultProps = {};