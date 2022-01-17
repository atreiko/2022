"use strict";

var textElement = document.querySelector('.lesson__text');
var getComment = textElement.nextSibling;
console.log(getComment); // <!--comment -->

console.log(getComment.data); // comment

var textElementContent = textElement.innerHTML; // Lesson<span>Text</span>

textElement.innerHTML = "\n  ".concat(textElementContent, " and <h3>New title</h3>\n");
console.log(textElement.outerHTML);
/*  <div class="lesson__text">
      Lesson<span>Text</span> and <h3>New title</h3>
    </div> */

textElement.outerHTML = "Another text";
console.log(textElement.outerHTML);
/*  <div class="lesson__text">
      Lesson<span>Text</span> and <h3>New title</h3>
    </div> */

var txtContent = textElement.textContent; //  LessonText and New title