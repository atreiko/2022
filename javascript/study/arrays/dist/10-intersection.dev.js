"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intersection = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Task description: Write a method that creates an array of unique values that are included in all given arrays
 * Expected Result: ([1, 2], [2, 3]) => [2]
 * Task complexity: 4 of 5
 * @param {?} arrays - Arrays of primitive data types
 * @returns {Array}
 */
var intersection = function intersection() {
  for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }

  var result = arrays[0].filter(function (element) {
    var indexOfElement = arrays[1].indexOf(element);

    if (indexOfElement >= 0) {
      return element;
    }
  });

  if (arrays.length > 2) {
    intersection.apply(void 0, [result].concat(_toConsumableArray(arrays.slice(2, arrays.length))));
  }

  return Array.from(new Set(result));
};

exports.intersection = intersection;
var arr = [1, 2];
var arr2 = [2, 3];
console.log(intersection(arr, arr2));