"use strict";

/**
 * todo
 * Частичное каррирование
 */
Function.prototype.curry = function () {
  var currying = function currying(fn) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return fn.length <= args.length ? fn.apply(void 0, args) : function () {
      for (var _len3 = arguments.length, others = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        others[_key3] = arguments[_key3];
      }

      return currying.apply(void 0, [fn].concat(args, others));
    };
  };

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return currying.apply(void 0, [this].concat(args));
};
/**
 * todo
 * Каррирование
 */


function curry(_fn) {
  return function (x) {
    return function (y) {
      return function (z) {
        return _fn(x, y, z);
      };
    };
  };
}

function f(x, y, z) {
  return x + y + z;
}

console.log(curry(f)(1)(2)(3), //* 6
curry(f)(1)(2, 1)(3) //* 6
);
console.log(f.curry(1)(2)(3), //* 6
f.curry(1)(2, 3) //* 6
// f.curry(1)(2, 1)(3) - error
);