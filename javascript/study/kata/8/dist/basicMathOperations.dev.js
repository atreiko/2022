"use strict";

// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - 
// operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7
function basicOp(operation, value1, value2) {
  switch (operation) {
    case '/':
      return value1 / value2;

    case '*':
      return value1 * value2;

    case '+':
      return value1 + value2;

    case '-':
      return value1 - value2;

    default:
      break;
  }
}

console.log(basicOp('/', 2, 4)); // ! ============================================================

function basicMathOperations(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

console.log(basicMathOperations('*', 3, 5)); // ! ============================================================

function mathOperations(operation, value1, value2) {
  var cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '/': value1 / value2,
    '*': value1 * value2
  };
  return cases[operation];
}

console.log(mathOperations('-', 8, 4));