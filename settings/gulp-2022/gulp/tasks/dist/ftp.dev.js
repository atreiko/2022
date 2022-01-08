"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ftp = void 0;

var _ftp = require("../config/ftp.js");

var _vinylFtp = _interopRequireDefault(require("vinyl-ftp"));

var _gulpUtil = _interopRequireDefault(require("gulp-util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ftp = function ftp() {
  _ftp.configFTP.log = _gulpUtil["default"].log;

  var ftpConnect = _vinylFtp["default"].create(_ftp.configFTP);

  return app.gulp.src("".concat(app.path.buildFolder, "/**/*.*"), {}).pipe(app.plugins.plumber(app.plugins.notify.onError({
    title: "FTP",
    message: "Error: <%= error.message %>"
  }))).pipe(ftpConnect.dest("/".concat(app.path.ftp, "/").concat(app.path.rootFolder)));
};

exports.ftp = ftp;