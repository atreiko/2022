const list = document.querySelector('.list')

const firstElement = document.createElement('div')
firstElement.innerText = 'First Element - before'
list.before(firstElement)

const secondElement = document.createElement('div')
list.after(secondElement, 'Second Element - after')

// ===================================================

firstElement.insertAdjacentHTML(
  'afterend',
  `<p style="color: red">insertAdjacentHTML</p>`
)

//* beforebegin
//* afterbegin
//* beforeend
//* afterend

// ===================================================

const paragraph = document.querySelector('p')
const cloneParagraph = paragraph.cloneNode() 
const DeepCloneParagraph = paragraph.cloneNode(true) 

list.append(cloneParagraph)
list.append(DeepCloneParagraph)

cloneParagraph.remove()

console.log(cloneParagraph);