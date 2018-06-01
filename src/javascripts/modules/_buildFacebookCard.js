const { $ } = require('./_bling');

const buildFacebookCard = (res, id) => {
  console.log(res);

  //   const { reviews } = res.result;
  //   const address = res.result.formatted_address.split(',');

  //   console.log(res);
  //   // console.log(res.result.photos[0].html_attributions);

  //   // TODO find a better way to get address
  //   const storeListing = `
  //     <a href="${res.result.url}" target="_blank"><p>${id.toUpperCase()}</p></a>
  //     <p>${address[0]}</p>
  //     <p>${address[1]}, ${address[2]}</p>
  //     <p a href="tel:+${res.result.international_phone_number}">${
  //   res.result.formatted_phone_number
  // }</p >`;

  //   // create new array of content to fill the body
  //   const cardBody = reviews.map(element => `
  //     <div class="entry">
  //       <div class="user-info">
  //         <img src="${element.profile_photo_url}" alt="profile photo" class="user-photo">
  //         <p>${element.author_name}</p>
  //         <p>Gave ${element.rating} stars</p>
  //         <p>${element.relative_time_description}</p>
  //       </div>
  //       <div class="review">
  //         <p>${element.text}</p>
  //       </div>
  //     </div>`);

  //   // add info to header
  //   $('#google-card .rank h1').innerHTML = res.result.rating.toFixed(2);
  //   $('#google-card .store-photo').src = storeInfo[id].googleImg;
  //   $('#google-card .address').innerHTML = storeListing;
  //   // add info to card body
  //   $('#google-card .card-body').innerHTML = cardBody.join('');
};

export { buildFacebookCard };
