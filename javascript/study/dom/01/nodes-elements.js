
const htmlElement = document.documentElement;
const headElement = document.head
const bodyElement = document.body

//todo NODES
// ========================================================

const firstChildNode = bodyElement.firstChild // #text ( перенос строки)
const lastChildNode = bodyElement.lastChild   // <script src="document.js"></script>

const childNodes = bodyElement.childNodes // NodeList(10) [text, h1, text, h3, text, div, text, comment, text, script]
// bodyElement.hasChildNodes() //* true

console.group('node of childNodes')
for (let node of childNodes) {
  console.log(node);
}
console.groupEnd()

// element.previousSibling
// element.nextSibling
// element.parentNode

//todo OBJECTS
// ========================================================

const bodyChildren = bodyElement.children // HTMLCollection(4) [h1, h3, div, script]
const firstChild = bodyElement.firstElementChild // h1
const lastChild = bodyElement.lastElementChild // script

console.log(lastChild); 

// element.previousElementSibling
// element.nextElementSibling
// element.parentElement

