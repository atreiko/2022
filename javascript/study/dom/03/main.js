

const textElement = document.querySelector('.lesson__text')

const getComment = textElement.nextSibling
console.log(getComment); // <!--comment -->
console.log(getComment.data); // comment

const textElementContent = textElement.innerHTML // Lesson<span>Text</span>

textElement.innerHTML = `
  ${textElementContent} and <h3>New title</h3>
`;

console.log(textElement.outerHTML); /*  <div class="lesson__text">
                                          Lesson<span>Text</span> and <h3>New title</h3>
                                        </div> */

textElement.outerHTML = `Another text`;

console.log(textElement.outerHTML); /*  <div class="lesson__text">
                                          Lesson<span>Text</span> and <h3>New title</h3>
                                        </div> */

const txtContent = textElement.textContent  //  LessonText and New title

