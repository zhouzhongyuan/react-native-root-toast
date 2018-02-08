'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Manager = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeRootSiblings = require('react-native-root-siblings');

var _reactNativeRootSiblings2 = _interopRequireDefault(_reactNativeRootSiblings);

var _ToastContainer = require('./ToastContainer');

var _ToastContainer2 = _interopRequireDefault(_ToastContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toast = function (_Component) {
    _inherits(Toast, _Component);

    function Toast() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Toast);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toast.__proto__ || Object.getPrototypeOf(Toast)).call.apply(_ref, [this].concat(args))), _this), _this._toast = null, _this.componentWillMount = function () {
            _this._toast = new _reactNativeRootSiblings2.default(_react2.default.createElement(_ToastContainer2.default, _extends({}, _this.props, {
                duration: 0
            })));
        }, _this.componentWillReceiveProps = function (nextProps) {
            _this._toast.update(_react2.default.createElement(_ToastContainer2.default, _extends({}, nextProps, {
                duration: 0
            })));
        }, _this.componentWillUnmount = function () {
            _this._toast.destroy();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Toast, [{
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return Toast;
}(_react.Component);

Toast.displayName = 'Toast';
Toast.propTypes = _ToastContainer2.default.propTypes;
Toast.positions = _ToastContainer.positions;
Toast.durations = _ToastContainer.durations;

Toast.show = function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { position: _ToastContainer.positions.BOTTOM, duration: _ToastContainer.durations.SHORT };

    return new _reactNativeRootSiblings2.default(_react2.default.createElement(
        _ToastContainer2.default,
        _extends({}, options, {
            visible: true
        }),
        message
    ));
};

Toast.hide = function (toast) {
    if (toast instanceof _reactNativeRootSiblings2.default) {
        toast.destroy();
    } else {
        console.warn('Toast.hide expected a `RootSiblings` instance as argument.\nBut got `' + (typeof toast === 'undefined' ? 'undefined' : _typeof(toast)) + '` instead.');
    }
};

exports.Manager = _reactNativeRootSiblings2.default;
exports.default = Toast;