const elem = document.querySelector('.lesson__item-list_blue')


elem.style.cssText = `
  border: 1px solid black;
`;

// ======================================================

console.group('element styles:')
const elementStyles = getComputedStyle(elem)
console.log(elementStyles);
console.groupEnd()

console.group('element keys')
for(let key in elementStyles) {
  console.log(key);
}
console.groupEnd()

console.log(elementStyles.fontSize); // 16px

// ======================================================

const elementBeforeStyle = getComputedStyle(elem, 'after')
console.log(elementBeforeStyle.backgroundColor); // rgb(0, 0, 255)

const paddingLeft = parseInt(elementStyles.paddingLeft)
console.log(paddingLeft); 64
elem.style.paddingRight = `${paddingLeft}px` // 64px