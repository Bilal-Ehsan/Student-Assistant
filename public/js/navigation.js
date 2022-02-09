console.log('Test');

const hamburger = document.querySelector('.hamburger');
// const menuItems = document.querySelectorAll('.menu__item');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function () {
  this.classList.toggle('hamburger--is-active');
  mobileNav.classList.toggle('mobile-nav--is-active');
});

// menuItems.forEach(item => {
//   item.addEventListener('click', function () {
//     const closest = item.closest('a');

//     menuItems.forEach(item => {
//       item.classList.remove('menu__item--is-active');
//       closest.classList.add('menu__item--is-active');
//     });
//   });
// });
