
const element = document.querySelector('.lesson__item-list_red')
const elementClassNames = element.className // lesson__item-list lesson__item-list_red

// ======================================================

element.classList.add('active')
element.classList.remove('active')
element.classList.toggle('active')
element.classList.contains('active')

// ======================================================

const elem = document.querySelector('.lesson__item-list_blue')
elem.classList.add('active')

for(let className of elem.classList) {
  console.log(className);
  // lesson__item-list
  // lesson__item-list_blue
  // active
}
console.log(elem);

// ======================================================
