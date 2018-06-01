const { $, $$ } = require('./_bling');

const { getRatings } = require('./_getRatings');

const menuTransition = () => {
  $('nav').classList.toggle('change');
  $('#hamburgerMenu').classList.toggle('spin');
  $('.nav-header').classList.toggle('invisible');
  $$('.nav-list-item').forEach(item => item.classList.toggle('invisible'));
};

$('#hamburgerMenu').on('click', menuTransition);
$$('.nav-list-item').on('click', menuTransition);
$$('.nav-list-item').on('click', event => getRatings(event.target.id));
