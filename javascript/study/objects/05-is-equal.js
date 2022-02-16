/**
 * Task description: Write a method that makes a shallow compare of two objects
 * Expected Result: True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
 * Task complexity: 2 of 5
 * @param {Object<string | number>} firstObj - Object with values of primitive data types
 * @param {Object<string | number>} secondObj - Object with values of primitive data types
 * @returns {boolean}
 */
export const isEqual = (firstObj, secondObj) => {
  const first = Object.keys(firstObj)
  const second = Object.keys(secondObj)

  if (first.length !== second.length) {
    return false
  }

  for (let prop in first) {
    if(first.hasOwnProperty(prop) && first[prop] !== second[prop]) {
      return false
    }
  }
  return true
};

const _1 = { a : 1 }
const _2 = { a : 1 }
const _3 = { b : 1 }

console.log(
  isEqual(_1, _2), // true
  isEqual(_1, _3) // false
);




