"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.svgSprite = void 0;

var svgSprite = function svgSprite() {
  return app.gulp.src("".concat(app.path.src.svgicons), {}).pipe(app.plugins.plumber(app.plugins.notify.onError({
    title: "SVG",
    message: "Error: <%= error.message %>"
  }))).pipe(app.gulp.dest("".concat(app.path.build.images)));
};

exports.svgSprite = svgSprite;