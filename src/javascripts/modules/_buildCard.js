const { $ } = require('./_bling');

const buildCard = (res) => {
  console.log(res);
  console.log(res.result.photos[0].html_attributions);

  $('#google-card .rank h1').innerHTML = res.result.rating;
  // $('#google-card .google-header img').src = storePhoto;
};

export { buildCard };
