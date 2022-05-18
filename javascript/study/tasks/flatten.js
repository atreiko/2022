/**
 * Напишите фун-цию, принимающая массив с вложенными массивами
 * и распакуйте в результатирующий плосский массив.
 */

const arr = [[1], [[2, 3]], [[[[[4]]]]]]

function flatten(array) {
  let res = [];

    for(let i = 0; i < array.length; i++) {
      const flat = flatten(array[i])
      
      if (Array.isArray(array[i])) {
        for(let j = 0; j < flat.length; j++) {
          res.push(flat[j])
        }
      } else {
        res.push(array[i])
      }
    } 

  return res
}

console.log(flatten(arr));

