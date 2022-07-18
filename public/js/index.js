const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const passwordVisibility = document.getElementById('password-visibility');
const password = document.getElementById('password');

hamburger.addEventListener('click', function () {
  this.classList.toggle('hamburger--is-active');
  mobileNav.classList.toggle('mobile-nav--is-active');
});

passwordVisibility.textContent = '[show]';

passwordVisibility.addEventListener('click', () => {
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);

  const text = passwordVisibility.textContent === '[hide]' ? '[show]' : '[hide]';
  passwordVisibility.textContent = text;
});
