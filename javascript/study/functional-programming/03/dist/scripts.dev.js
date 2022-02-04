"use strict";

function sum(a, b, c) {
  return a + b + c;
}

function curry(fn) {
  return function curried() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    console.log(args);

    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }

    return curried.bind.apply(curried, [this].concat(args));
  };
}

var curriedSum = curry(sum);
console.log(curriedSum(2)(1)(3)); // [ 2 ]
// [ 2, 1 ]
// [ 2, 1, 3 ]
// 6              <-- Отработает после того, как будут переданы все агрументы

console.log(curriedSum(2, 1)(3) // 6
);
console.log(curriedSum(2, 1, 3) // 6
);