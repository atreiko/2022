"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compact = void 0;

/**
 * Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null
 * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
 * Task Complexity: 1 of 5
 * @param {Array} array - An array of any elements
 * @returns {Array}
 */
var compact = function compact(array) {
  return array.filter(function (el) {
    return el;
  });
};

exports.compact = compact;
var arr = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(arr));