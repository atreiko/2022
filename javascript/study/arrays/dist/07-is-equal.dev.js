"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEqual = void 0;

/**
 * Task description: Write a method that makes a shallow compare of two arrays and returns true if they are identical.
 * Expected Result: ([1, 2, 3], [1, 2, 3]) => true
 * Task Complexity: 2 of 5
 * @param {Array} firstArray - Array of primitive data types
 * @param {Array} secondArray - Array of primitive data types
 * @returns {boolean}
 */
var isEqual = function isEqual(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  var compared = firstArray.map(function (element, index) {
    return element === secondArray[index];
  });
  return !compared.includes(false);
};

exports.isEqual = isEqual;
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
console.log(isEqual(arr1, arr2));