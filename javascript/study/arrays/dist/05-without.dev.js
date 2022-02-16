"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.without2 = exports.without = void 0;
var _arguments = arguments;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Task description: Write a method that returns an array without listed values
 * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]
 * Task Complexity: 2 of 5
 * @param {Array} array - Array of primitive data types
 * @param {?} args list of values to remove
 * @returns {Array}
 */
var without = function without(array) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var filteredArray = _toConsumableArray(array);

  var _loop = function _loop(i) {
    filteredArray = filteredArray.filter(function (el) {
      return el !== args[i];
    });
  };

  for (var i = 0; i < args.length; i += 1) {
    _loop(i);
  }

  return filteredArray;
};

exports.without = without;
var myArr = [1, 2, 3, 1, 2];
console.log(without(myArr, 1, 2));

var without2 = function without2(array) {
  var filteredArray = _toConsumableArray(array);

  var _loop2 = function _loop2(i) {
    filteredArray = filteredArray.filter(function (el) {
      return el !== _arguments[i];
    });
  };

  for (var i = 1; i < _arguments.length; i += 1) {
    _loop2(i);
  }

  return filteredArray;
};

exports.without2 = without2;
console.log(without(myArr, 2));