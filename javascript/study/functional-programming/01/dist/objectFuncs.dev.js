"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var hookahs = [{
  'title': 'Amy',
  'price': 4000,
  'full-set': false,
  'equipment': {
    'bowl': false,
    'pipe': true,
    'glass': true,
    'hose': true,
    'heat-control': true
  },
  'count': 4
}, {
  'title': 'Kaya',
  'price': 6000,
  'full-set': true,
  'equipment': {
    'bowl': true,
    'pipe': true,
    'glass': true,
    'hose': true,
    'heat-control': true
  },
  'count': 1
}, {
  'title': 'Khalil-Mamoon',
  'price': 2000,
  'full-set': false,
  'equipment': {
    'bowl': true,
    'pipe': true,
    'glass': true,
    'hose': true,
    'heat-control': true
  },
  'count': 6
}, {
  'title': 'Starbuzz',
  'price': 5000,
  'full-set': false,
  'equipment': {
    'bowl': true,
    'pipe': true,
    'glass': false,
    'hose': true,
    'heat-control': false
  },
  'count': 7
}];

var getTitles = function getTitles(array) {
  return _toConsumableArray(array).map(function (element) {
    return element.title;
  });
};

var amountPipes = function amountPipes(array) {
  return _toConsumableArray(array).reduce(function (val, acc) {
    return val += acc.count;
  }, 0);
};

var purchaseCost = function purchaseCost(array) {
  return _toConsumableArray(array).map(function (element) {
    return element.count * element.price;
  });
};

var budget = function budget(callback, array) {
  var count = callback(array).reduce(function (val, acc) {
    return val += acc;
  }, 0);
  return count;
};

console.log(budget(purchaseCost, hookahs));