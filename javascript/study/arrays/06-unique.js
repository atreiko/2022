/**
 * Task description: Write a method that returns a duplicate-free array
 * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]
 * Task Complexity: 2 of 5
 * @param {Array<string | number>} array - Array of primitive data types
 * @returns {Array}
 */


const unique = array => Array.from(new Set(array))

const arr = [ 1, 1, 2, 3, 4, 'a', 'a' ]

console.log(
  unique(arr)
);

const unique2 = array => array.filter((element, index) => array.indexOf(element) === index)