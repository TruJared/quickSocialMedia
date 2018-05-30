const axios = require('axios');
const { $ } = require('./_bling');
const { buildCard } = require('./_buildCard');

const getRatings = (id) => {
  const { googleId } = storeInfo[id];
  const { facebookId } = storeInfo[id];
  const { instaId } = storeInfo;

  const lambdaUrl = // 'http://localhost:9000/callApis';
    'https://vigilant-babbage-982e22.netlify.com/.netlify/functions/callApis';

  // // -- GET GOOGLE --//
  axios
    .post(
      lambdaUrl,
      JSON.stringify({
        host: 'google',
        id: googleId,
      }),
    )
    .then(res => res.data)
    .then(res => buildCard(res, id))
    .catch(e => console.log(e));
};

export { getRatings };

// //   // -- FACEBOOK --//
// facebookIds.forEach((id) => {
//   axios
//     .post(
//       lambdaUrl,
//       JSON.stringify({
//         host: 'facebook',
//         id,
//       }),
//   )
//     // catch NaN
//     .then(res =>
//       (isNaN(res.data.overall_star_rating)
//         ? 0
//         : ($(`#${id}`).innerText = res.data.overall_star_rating.toFixed(2))))
//     .then(res => facebookRatingsArray.push(Number(res)))
//     // Find Average
//     .then(() =>
//       ($('.facebookAvgDisplay').innerText =
//         facebookRatingsArray.reduce((acc, value) => acc + value, 0) /
//         facebookRatingsArray.length))
//     // Make readable
//     .then(() =>
//       ($('.facebookAvgDisplay').innerText = $('.facebookAvgDisplay').innerText.substring(0, 4)))
//     // TODO Update Progress Bar
//     .catch(e => console.log(e));
// });

// };
