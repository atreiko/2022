"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chunk = void 0;

/**
 * Task description: Write a method that splits an array into parts of determined size
 * Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 * Task complexity: 3 of 5
 * @param {Array} array - An array of any elements
 * @param {number} size - size of chunks
 * @returns {Array}
 */
var chunk = function chunk(array, size) {
  var chunkedArray = [];
  var index = 0;

  while (index < array.length) {
    chunkedArray.push(array.slice(index, size + index));
    index += size;
  }

  return chunkedArray;
};

exports.chunk = chunk;
var arr = [1, 2, 3, 4, 5, 6];
console.log(chunk(arr, 3));