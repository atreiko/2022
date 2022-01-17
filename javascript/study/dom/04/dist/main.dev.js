"use strict";

var list = document.querySelector('.list');
var firstElement = document.createElement('div');
firstElement.innerText = 'First Element - before';
list.before(firstElement);
var secondElement = document.createElement('div');
list.after(secondElement, 'Second Element - after'); // ===================================================

firstElement.insertAdjacentHTML('afterend', "<p style=\"color: red\">insertAdjacentHTML</p>"); //* beforebegin
//* afterbegin
//* beforeend
//* afterend
// ===================================================

var paragraph = document.querySelector('p');
var cloneParagraph = paragraph.cloneNode();
var DeepCloneParagraph = paragraph.cloneNode(true);
list.append(cloneParagraph);
list.append(DeepCloneParagraph);
cloneParagraph.remove();
console.log(cloneParagraph);