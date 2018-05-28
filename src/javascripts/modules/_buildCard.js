const { $ } = require('./_bling');

const buildCard = (res) => {
  console.log(res);

  $('#google-card .rank h1').innerHTML = res.data.result.rating;
  // $('#google-card .google-header img').src = storePhoto;
};

export { buildCard };
