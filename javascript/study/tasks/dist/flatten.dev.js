"use strict";

/**
 * Напишите фун-цию, принимающая массив с вложенными массивами
 * и распакуйте в результатирующий плосский массив.
 */
var arr = [[1], [[2, 3]], [[[[[4]]]]]];

function flatten(array) {
  var res = [];

  for (var i = 0; i < array.length; i++) {
    var flat = flatten(array[i]);

    if (Array.isArray(array[i])) {
      for (var j = 0; j < flat.length; j++) {
        res.push(flat[j]);
      }
    } else {
      res.push(array[i]);
    }
  }

  return res;
}

console.log(flatten(arr));