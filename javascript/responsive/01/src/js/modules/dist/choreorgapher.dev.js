"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.choreographer = void 0;

var _choreographerJs = _interopRequireDefault(require("choreographer-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var choreographer = new _choreographerJs["default"]({
  animations: [{
    range: [0, 1000],
    selector: '#box',
    type: 'scale',
    style: 'opacity',
    from: 0,
    to: 1
  }]
});
exports.choreographer = choreographer;