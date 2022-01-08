"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scss = void 0;

var _sass = _interopRequireDefault(require("sass"));

var _gulpSass = _interopRequireDefault(require("gulp-sass"));

var _gulpRename = _interopRequireDefault(require("gulp-rename"));

var _gulpCleanCss = _interopRequireDefault(require("gulp-clean-css"));

var _gulpWebpcss = _interopRequireDefault(require("gulp-webpcss"));

var _gulpAutoprefixer = _interopRequireDefault(require("gulp-autoprefixer"));

var _gulpGroupCssMediaQueries = _interopRequireDefault(require("gulp-group-css-media-queries"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sass = (0, _gulpSass["default"])(_sass["default"]);

var scss = function scss() {
  return app.gulp.src(app.path.src.scss, {
    sourcemaps: app.isDev
  }).pipe(app.plugins.plumber(app.plugins.notify.onError({
    title: "SCSS",
    message: "Error: <%= error.message %>"
  }))).pipe(app.plugins.replace(/@img\//g, '../img/')).pipe(sass({
    outputStyle: 'expanded'
  })).pipe(app.plugins["if"](app.isBuild, (0, _gulpGroupCssMediaQueries["default"])())).pipe(app.plugins["if"](app.isBuild, (0, _gulpAutoprefixer["default"])({
    grid: true,
    overrideBrowserslist: ["last 3 versions"],
    cascade: true
  }))).pipe(app.plugins["if"](app.isBuild, (0, _gulpWebpcss["default"])({
    webpClass: ".webp",
    noWebpClass: ".no-webp"
  }))) // Раскомментировать, если нужен не сжатый дубль файла стилей
  .pipe(app.gulp.dest(app.path.build.css)).pipe(app.plugins["if"](app.isBuild, (0, _gulpCleanCss["default"])())).pipe((0, _gulpRename["default"])({
    extname: ".min.css"
  })).pipe(app.gulp.dest(app.path.build.css)).pipe(app.plugins.browsersync.stream());
};

exports.scss = scss;