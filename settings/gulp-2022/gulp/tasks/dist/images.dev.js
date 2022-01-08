"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.images = void 0;

var _gulpWebp = _interopRequireDefault(require("gulp-webp"));

var _gulpImagemin = _interopRequireDefault(require("gulp-imagemin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var images = function images() {
  return app.gulp.src(app.path.src.images).pipe(app.plugins.plumber(app.plugins.notify.onError({
    title: "IMAGES",
    message: "Error: <%= error.message %>"
  }))).pipe(app.plugins.newer(app.path.build.images)).pipe(app.plugins["if"](app.isBuild, (0, _gulpWebp["default"])())).pipe(app.plugins["if"](app.isBuild, app.gulp.dest(app.path.build.images))).pipe(app.plugins["if"](app.isBuild, app.gulp.src(app.path.src.images))).pipe(app.plugins["if"](app.isBuild, app.plugins.newer(app.path.build.images))).pipe(app.plugins["if"](app.isBuild, (0, _gulpImagemin["default"])({
    progressive: true,
    svgoPlugins: [{
      removeViewBox: false
    }],
    interlaced: true,
    optimizationLevel: 3 // 0 to 7

  }))).pipe(app.gulp.dest(app.path.build.images)).pipe(app.gulp.src(app.path.src.svg)).pipe(app.gulp.dest(app.path.build.images)).pipe(app.plugins.browsersync.stream());
};

exports.images = images;