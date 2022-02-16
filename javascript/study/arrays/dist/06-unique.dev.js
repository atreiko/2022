"use strict";

/**
 * Task description: Write a method that returns a duplicate-free array
 * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]
 * Task Complexity: 2 of 5
 * @param {Array<string | number>} array - Array of primitive data types
 * @returns {Array}
 */
var unique = function unique(array) {
  return Array.from(new Set(array));
};

var arr = [1, 1, 2, 3, 4, 'a', 'a'];
console.log(unique(arr));

var unique2 = function unique2(array) {
  return array.filter(function (element, index) {
    return array.indexOf(element) === index;
  });
};