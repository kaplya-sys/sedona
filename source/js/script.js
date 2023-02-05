const navMenu = document.querySelector('.nav-menu');
const toggleButton = document.querySelector('.nav-menu__toggle-button');

navMenu.classList.remove('nav-menu--nojs');

toggleButton.addEventListener('click', () => {
  if (navMenu.classList.contains('nav-menu--closed')) {
    navMenu.classList.remove('nav-menu--closed');
    navMenu.classList.add('nav-menu--opened');
  } else {
    navMenu.classList.add('nav-menu--closed');
    navMenu.classList.remove('nav-menu--opened');
  }
});
