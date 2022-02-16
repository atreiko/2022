/**
 * Task description: Write a method that invokes an array method on a specific path
 * Expected Result: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
 * Task complexity: 3 of 5
 * @param {Object} object
 * @param {String} path - path in an object to property
 * @param {String} func - function to invoke
 * @param {Array} [args] - list of args
 * @returns {boolean}
 */
 export const invoke = (object, path, func, args) => {
  const splittedPath = path.split('.');

  const target = splittedPath.reduce((acc, key) => {
    acc = acc[key] ? acc[key] : object[key];
    return acc;
  }, {});

  return Array.prototype[func].apply(target, args);
};


const object = { 
  a: { 
    b: [1, 2, 3] 
  },
  c: [4, 5, 6],
  d: {
    e: [7, 8, 9]
  } 
}
const path = 'c';
const func = 'splice';
const args = [2, 3]

console.log(
  invoke(
    object,
    path,
    func,
    args
  )
);




