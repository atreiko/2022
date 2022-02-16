"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reverse2 = exports.reverse = void 0;

/**
 * Task description: Write a method that reverts input array
 * Expected Result: [1, 2, 3] => [3, 2, 1]
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @returns {Array}
 */
var reverse = function reverse(array) {
  var reversed = [];

  for (var i = array.length - 1; i >= 0; i -= 1) {
    reversed.push(array[i]);
  }

  return reversed;
};

exports.reverse = reverse;

var reverse2 = function reverse2(array) {
  return array.map(function (el, id, arr) {
    return arr[arr.length - id - 1];
  });
};

exports.reverse2 = reverse2;
var myArray = [1, 2, 3];
console.log(reverse(myArray));
console.log(reverse2(myArray));