const { $ } = require('./_bling');

const buildFacebookCard = (res, id) => {
  const storeListing = `
      <a href="${res.link}" target="_blank"><p>${id.toUpperCase()}</p></a>
      <p>${res.location.street}</p>
      <p>${res.location.city}, ${res.location.state} ${res.location.zip}</p>
      <p>${res.phone}</p >`;

  //   // create new array of content to fill the body
  const cardBody = `<h1 style="text-align:center;">${res.engagement.social_sentence}</h1>
  <br>
  <hr>
  <br>
  <p>Sorry for the sparse data... blame facebook not the <i class="fas fa-poo"></i> developer <i class="fas fa-poo"></i> </p>
  <br>
  <p>But here's another (completely not useful) <a href="${
  res.link
}" target="_blank">link</a> to the page</p>
  <br>
  <p>And a cat</p>
  <br>
  <hr>
   <a href="http://thecatapi.com"><img src="http://thecatapi.com/api/images/get?format=src&type=gif" style="width:100%;"></a>
`;

  // add info to header
  $('#facebook-card .rank h1').innerHTML = res.overall_star_rating
    ? res.overall_star_rating.toFixed(2)
    : '';
  $('#facebook-card .store-photo').src = storeInfo[id].facebookImg;
  $('#facebook-card .address').innerHTML = storeListing;
  // add info to card body
  $('#facebook-card .card-body').innerHTML = cardBody;
};

export { buildFacebookCard };
