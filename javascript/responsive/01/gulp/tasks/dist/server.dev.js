"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.server = void 0;

var server = function server(done) {
  app.plugins.browsersync.init({
    server: {
      baseDir: "".concat(app.path.build.html)
    },
    notify: false,
    port: 3000
  });
};

exports.server = server;