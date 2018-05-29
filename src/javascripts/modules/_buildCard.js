const { $ } = require('./_bling');

const buildCard = (res) => {
  console.log(res);
  console.log(res.result.photos[0].html_attributions);

  const { reviews } = res.result;

  // create new array of content
  const newBody = reviews.map(element => `<div class="entry">
          <figure class="profile">
            <img src="${element.profile_photo_url}" alt="profile photo">
            <figcaption>Rating: ${element.rating} | ${
  element.relative_time_description
}</figcaption>
          </figure>

          <p style="margin-top:25px;">${element.text}</p>
          <br>`);
  // and insert it into the body of the card
  $('#google-card .card-body').innerHTML = newBody.join('');

  $('#google-card .rank h1').innerHTML = res.result.rating.toFixed(2);
  // $('#google-card .google-header img').src = storePhoto;
};

export { buildCard };
