let link = document.querySelector('a')
let input = document.querySelector('input')
let paragraph = document.querySelector('.lesson__text')
let title = document.querySelector('h2')
let span = document.querySelector('span')

// show all props in console :
console.dir(title);

paragraph.hasAttribute('name')
paragraph.getAttribute('name')
paragraph.setAttribute('name', 'value')
paragraph.removeAttribute('name')

console.log(title.dataset.size); 
title.dataset.size = '500';
console.log(title.dataset.size); 

span.hidden = true

