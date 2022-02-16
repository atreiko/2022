/**
 * Task description: Write a method that verifies an argument is a plain object, not an array or null
 * Expected Result: True if object is plain, false otherwise. ({ a: 1 }) => true, ([1, 2, 3]) => false
 * Task complexity: 1 of 5
 * @param element - element to verify
 * @returns {boolean}
 */
 export const isPlainObject = (element) => {
  if (typeof element === 'object' && !Array.isArray(element) && element !== null) {
    return true
  }
}

const fruits = {
  local: {
    apples: 5,
    pears: 3,
  },
  exotic: {
    mango: 2,
    'dragon-fruit': 1
  }
}

console.log(
  isPlainObject(fruits)
);
// true


