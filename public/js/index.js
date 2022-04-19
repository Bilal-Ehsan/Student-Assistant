const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const eye = document.getElementById('eye');
const password = document.getElementById('password');

hamburger.addEventListener('click', function () {
  this.classList.toggle('hamburger--is-active');
  mobileNav.classList.toggle('mobile-nav--is-active');
});

eye.addEventListener('mouseover', () => {
  password.setAttribute('type', 'text');

  setTimeout(() => {
    password.setAttribute('type', 'password');
  }, 2000);
});
