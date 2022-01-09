import * as flsFunctions from './modules/functions.js';
import { choreographer } from './modules/choreorgapher.js';

flsFunctions.isWebp()

// console.log(choreographer);

// window.addEventListener('scroll', () => {
//   choreographer.runAnimationsAt(window.clientY)
// })

const burger = document.querySelectorAll('.burger');

burger.forEach (line => {  
  line.addEventListener('click', (event) => {
    line.classList.toggle("open");
  });
});

console.log(burger);

