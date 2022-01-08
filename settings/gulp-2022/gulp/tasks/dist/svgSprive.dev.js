"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.svgSprive = void 0;

var _gulpSvgSprite = _interopRequireDefault(require("gulp-svg-sprite"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var svgSprive = function svgSprive() {
  return app.gulp.src("".concat(app.path.src.svgicons), {}).pipe(app.plugins.plumber(app.plugins.notify.onError({
    title: "SVG",
    message: "Error: <%= error.message %>"
  }))).pipe((0, _gulpSvgSprite["default"])({
    mode: {
      stack: {
        sprite: "../icons/icons.svg",
        // Создать страницу с перечнем иконок
        example: true
      }
    }
  })).pipe(app.gulp.dest("".concat(app.path.build.images)));
};

exports.svgSprive = svgSprive;