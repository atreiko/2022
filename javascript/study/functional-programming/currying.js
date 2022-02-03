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
  return a + b + c
}

function curry(func) {
  return function curried(...args) {
    if(args.length >= func.length) {
      return func.apply(this, args)
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}

const curriedSum = curry(sum)

console.log(
  curriedSum(1, 2, 3)
);

console.log(
  curriedSum(1)(2, 3)
);

console.log(
  curriedSum(1)(2)(3)
);