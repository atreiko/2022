"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Напишите функцию с именем, first_non_repeating_letterкоторая принимает 
// строковый ввод и возвращает первый символ, который не повторяется нигде в строке.
// Например, если задан ввод 'stress', функция должна вернуться 't', поскольку буква t 
// встречается в строке только один раз и появляется первой в строке.
//!
// В качестве дополнительной проблемы, прописные и строчные буквы считаются одним и тем же символом, 
// но функция должна возвращать правильный регистр для начальной буквы. 
// Например, ввод 'sTreSS'должен вернуться 'T'.
// Если строка содержит все повторяющиеся символы , 
// она должна вернуть пустую строку ( "") или None- см. Примеры тестов.
var str = 'stress';
var str2 = 's'; // console.log(str.lastIndexOf('s')); // 5
// console.log(str.indexOf('s'));     // 0

function firstNonRepeatingLetter(s) {
  if (s.length === 1) {
    return s;
  }

  for (var i = 0; i <= s.length; i++) {
    var j = s.charAt(i);

    if (s.indexOf(j) == s.lastIndexOf(j)) {
      return j;
    }
  }

  return '';
}

console.log(firstNonRepeatingLetter(str));
console.log(str2);

function firstNonRepeatingLetter2(s) {
  return _toConsumableArray(s).filter(function (letter, index, array) {
    return array.indexOf(letter) === array.lastIndexOf(letter);
  }).shift();
}

console.log(firstNonRepeatingLetter2(str));