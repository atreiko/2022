"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zip = void 0;

var _del = _interopRequireDefault(require("del"));

var _gulpZip = _interopRequireDefault(require("gulp-zip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var zip = function zip() {
  (0, _del["default"])("./".concat(app.path.rootFolder, ".zip"));
  return app.gulp.src("".concat(app.path.buildFolder, "/**/*.*"), {}).pipe(app.plugins.plumber(app.plugins.notify.onError({
    title: "ZIP",
    message: "Error: <%= error.message %>"
  }))).pipe((0, _gulpZip["default"])("".concat(app.path.rootFolder, ".zip"))).pipe(app.gulp.dest('./'));
};

exports.zip = zip;