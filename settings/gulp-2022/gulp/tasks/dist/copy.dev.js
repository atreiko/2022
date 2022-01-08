"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copy = void 0;

var copy = function copy() {
  return app.gulp.src(app.path.src.files).pipe(app.gulp.dest(app.path.build.files));
};

exports.copy = copy;