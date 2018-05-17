const hamburgerMenu = document.querySelector('#hamburgerMenu');
const nav = document.querySelector('nav');
const navListItem = document.querySelectorAll('.nav-list-item');
const title = document.querySelector('.title');

const menuTransition = () => {
  nav.classList.toggle('change');
  hamburgerMenu.classList.toggle('spin');
  title.classList.toggle('pusher');
  setTimeout(() => {
    for (let i = 0; i < navListItem.length; i++) {
      navListItem[i].classList.toggle('hide');
    }
  }, 400);
};

hamburgerMenu.addEventListener('click', menuTransition);
