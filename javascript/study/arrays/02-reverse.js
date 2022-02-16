/**
 * Task description: Write a method that reverts input array
 * Expected Result: [1, 2, 3] => [3, 2, 1]
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @returns {Array}
 */

export const reverse = (array) => {
  const reversed = [];

  for (let i = array.length - 1; i >= 0; i -= 1 ) {
    reversed.push(array[i])
  }

  return reversed
}

export const reverse2 = (array) => array.map((el, id, arr) => arr[arr.length - id - 1])


const myArray = [1, 2, 3]

console.log(reverse(myArray));
console.log(reverse2(myArray));