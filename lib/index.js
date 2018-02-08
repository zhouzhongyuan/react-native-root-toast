'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Toast = require('./Toast');

Object.keys(_Toast).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Toast[key];
    }
  });
});

var _Toast2 = _interopRequireDefault(_Toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Toast2.default;