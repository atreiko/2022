"use strict";

var link = document.querySelector('a');
var input = document.querySelector('input');
var paragraph = document.querySelector('.lesson__text');
var title = document.querySelector('h2');
var span = document.querySelector('span'); // show all props in console :

console.dir(title);
paragraph.hasAttribute('name');
paragraph.getAttribute('name');
paragraph.setAttribute('name', 'value');
paragraph.removeAttribute('name');
console.log(title.dataset.size);
title.dataset.size = '500';
console.log(title.dataset.size);
span.hidden = true;