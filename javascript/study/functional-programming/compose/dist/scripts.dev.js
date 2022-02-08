"use strict";

/**
 * todo
 * Композируем
 */
var upperCase = function upperCase(str) {
  return str.toUpperCase();
};

var exclaim = function exclaim(str) {
  return "".concat(str, "!");
};

var repeat = function repeat(str) {
  return "".concat(str, " ").repeat(3);
};

console.log(repeat(exclaim(upperCase('Fire'))));
console.log(exclaim(repeat(upperCase('Fire')))); //! ================================================

var compose = function compose() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (initialValue) {
    return functions.reduceRight(function (result, func) {
      return func(result);
    }, initialValue);
  };
};

var withCompose = compose(repeat, exclaim, upperCase);
console.log(withCompose('god'));