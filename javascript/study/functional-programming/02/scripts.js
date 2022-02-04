/**
 * todo
 * Частичное каррирование
 */

Function.prototype.curry = function (...args) {
  const currying = (fn, ...args) => 
    (fn.length <= args.length) ?
      fn(...args) 
      : (...others) => currying(fn, ...args, ...others)
  return currying(this, ...args)
}


/**
 * todo
 * Каррирование
 */

function curry(_fn) {
  return (x) => (y) => (z) => _fn(x, y, z)
}



function f(x, y, z) {
  return x + y + z
}

console.log(
  curry(f)(1)(2)(3),    //* 6
  curry(f)(1)(2, 1)(3)  //* 6
);

console.log(
  f.curry(1)(2)(3),     //* 6
  f.curry(1)(2, 3),     //* 6
  // f.curry(1)(2, 1)(3) - error
);