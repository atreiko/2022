/**
 * todo
 * Композируем
 */

const upperCase = str => str.toUpperCase();

const exclaim = str => `${str}!`;

const repeat = str => `${str} `.repeat(3)

console.log(
  repeat(exclaim(upperCase('Fire')))
);

console.log(
  exclaim(repeat(upperCase('Fire')))
);
 
 //! ================================================
 
const compose = (...functions) => {
  return (initialValue) => 
    functions.reduceRight((result, func) => func(result), initialValue)
}
 
 const withCompose = compose(
  repeat,
  exclaim,
  upperCase
);
 
 console.log(withCompose('god'));