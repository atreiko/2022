/**
 * Task description: Write a method that makes a shallow compare of two arrays and returns true if they are identical.
 * Expected Result: ([1, 2, 3], [1, 2, 3]) => true
 * Task Complexity: 2 of 5
 * @param {Array} firstArray - Array of primitive data types
 * @param {Array} secondArray - Array of primitive data types
 * @returns {boolean}
 */

export const isEqual = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) {
    return false
  }
  
  const compared = firstArray.map((element, index) => element === secondArray[index])

  return !compared.includes(false)
}

const arr1 = [1, 2, 3]
const arr2 = [1, 2, 3]

console.log(
  isEqual(arr1, arr2)
);
