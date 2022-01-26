"use strict";

var SRTitles = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 1500,
  delay: 1000
});
SRTitles.reveal('.title');
var headerItems = document.querySelectorAll('.sr');
var SRItems = ScrollReveal({
  origin: 'left',
  distance: '60px',
  duration: 1500,
  delay: 1000
});
SRItems.reveal('.header__content-left'); // console.log(SRHeaderItems);
// SRHeaderItems.reveal(SRHeaderItems)
// ! -=============
// const headerAnimatedItems = document.querySelectorAll('.anim')
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     // entry.target.classList.toggle('show', entries.isIntersecting)
//   })
// }, {
//   threshold: 1,
// })
// headerAnimatedItems.forEach(item => {
//   observer.observe(headerAnimatedItems[0])
// })