"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flatten = void 0;

/**
 * Task description: Write a method that turns a deep array into a plain array
 * Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
 * Task complexity: 3 of 5
 * @param {Array} array - A deep array
 * @returns {Array}
 */
var flatten = function flatten(array) {
  return array.reduce(function (acc, value) {
    return acc.concat(Array.isArray(value) ? flatten(value) : value);
  }, []);
};

exports.flatten = flatten;
var arr = [1, 2, [3, 4, [5]]];
console.log(flatten(arr));