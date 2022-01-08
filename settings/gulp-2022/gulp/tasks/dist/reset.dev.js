"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reset = void 0;

var _del = _interopRequireDefault(require("del"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reset = function reset() {
  return regeneratorRuntime.async(function reset$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _del["default"])(app.path.clean));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.reset = reset;