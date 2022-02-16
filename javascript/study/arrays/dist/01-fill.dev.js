"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fill = void 0;

/**
 * Task description: Write a method that creates a new array with given values
 * Expected Result: (3, 'a') => ['a', 'a', 'a']
 * Task Complexity: 1 of 5
 * @param {number} arraySize - size of array
 * @param {?} value - value to fill
 * @returns {Array}
 */
var fill = function fill(arraySize, value) {
  return new Array(arraySize).fill(value);
};

exports.fill = fill;
console.log(fill(4, 2));