"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.html = void 0;

var _gulpFileInclude = _interopRequireDefault(require("gulp-file-include"));

var _gulpWebpHtmlNosvg = _interopRequireDefault(require("gulp-webp-html-nosvg"));

var _gulpVersionNumber = _interopRequireDefault(require("gulp-version-number"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var html = function html() {
  return app.gulp.src(app.path.src.html).pipe(app.plugins.plumber(app.plugins.notify.onError({
    title: "HTML",
    message: "Error: <%= error.message %>"
  }))).pipe((0, _gulpFileInclude["default"])()).pipe(app.plugins.replace(/@img\//g, 'img/')).pipe(app.plugins["if"](app.isBuild, (0, _gulpWebpHtmlNosvg["default"])())).pipe(app.plugins["if"](app.isBuild, (0, _gulpVersionNumber["default"])({
    'value': '%DT%',
    'append': {
      'key': '_v',
      'cover': 0,
      'to': ['css', 'js']
    },
    'output': {
      'file': 'gulp/version.json'
    }
  }))).pipe(app.gulp.dest(app.path.build.html)).pipe(app.plugins.browsersync.stream());
};

exports.html = html;