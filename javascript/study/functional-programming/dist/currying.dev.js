"use strict";

/**
 * todo
 * f(a, b, c)  -->  f(a)(b)(c)
 */

/**
 * Новую функцию (curried) можно вызывать со случайным кол-вом аргументов
 * Поэтому складываем их в массив
 * Если все аргументы были переданы 
 * Например для sum() нужно чтобы было передано 3 аргумента
 * У функии есть свойство length - ожидаемое кол-во аргументов
 * return func.apply(this, args) - возвращаем результат функции
 * Если не все еще аргументы были переданы
 * То создадим новую функцию - return function(...args2)
 * Снова вызываем curried, конкатинируя аргументы двух функций
 * Главное понять как накапливаются аргументы в замыкании
 */
function sum(a, b, c) {
  return a + b + c;
}

function curry(func) {
  return function curried() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function () {
        for (var _len2 = arguments.length, args2 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args2[_key2] = arguments[_key2];
        }

        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

var curriedSum = curry(sum);
console.log(curriedSum(1, 2, 3));
console.log(curriedSum(1)(2, 3));
console.log(curriedSum(1)(2)(3));