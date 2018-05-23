const { $, $$ } = require('./_bling');

const menuTransition = () => {
  $('nav').classList.toggle('change');
  $('#hamburgerMenu').classList.toggle('spin');
  $('.nav-header').classList.toggle('invisible');
  $$('.nav-list-item').forEach(item => item.classList.toggle('invisible'));
};

$('#hamburgerMenu').on('click', menuTransition);
$$('.nav-list-item').on('click', menuTransition);
