"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromPairs = void 0;

/**
 * Task description: Write a method that returns an object composed of key-value pairs.
 * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
 * Task Complexity: 2 of 5
 * @param {Array} array - a deep array of pairs
 * @returns {Array}
 */
var fromPairs = function fromPairs(array) {
  return array.reduce(function (acc, value) {
    if (Array.isArray(value)) {
      acc[value[0]] = value[1];
    }

    return acc;
  }, {});
};

exports.fromPairs = fromPairs;
var entries = [['a', 1], ['b', 2]];
console.log(fromPairs(entries));