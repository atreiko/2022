function sum(a, b, c) {
  return a + b + c
}

function curry(fn) {
  return function curried(...args) {
    console.log(args);
    if(args.length >= fn.length) {
      return fn.apply(this, args)
    }

    return curried.bind(this, ...args)
  }
}

const curriedSum = curry(sum)

console.log(
  curriedSum(2)(1)(3)
);
// [ 2 ]
// [ 2, 1 ]
// [ 2, 1, 3 ]
// 6              <-- Отработает после того, как будут переданы все агрументы

console.log(
  curriedSum(2, 1)(3)     // 6
);

console.log(
  curriedSum(2, 1, 3)     // 6
);