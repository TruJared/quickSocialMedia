const axios = require('axios');
const { $ } = require('./_bling');

const getRatings = (id) => {
  const { googleId } = storeInfo[id];
  const { facebookId } = storeInfo[id];
  const { instaId } = storeInfo;

  console.log(id);
  console.log(googleId);
  console.log(facebookId);
  console.log(instaId);
};
export { getRatings };

// const lambdaUrl =
//   // 'http://localhost:9000/callApis'; -- testing
//   'https://www.r28ratings.com/.netlify/functions/callApis';

// // -- GOOGLE --//
// googleIds.forEach((id) => {
//   axios
//     .post(
//       lambdaUrl,
//       JSON.stringify({
//         host: 'google',
//         id,
//       }),
//   )
//     // catch NaN
//     .then(res =>
//       (isNaN(res.data.result.rating)
//         ? 0
//         : ($(`#${id}`).innerText = res.data.result.rating.toFixed(2))))
//     .then(res => googleRatingsArray.push(Number(res)))
//     // Find Average
//     .then(() =>
//       ($('.googleAvgDisplay').innerText =
//         googleRatingsArray.reduce((acc, value) => acc + value, 0) / googleRatingsArray.length))
//     // Make readable
//     .then(() => ($('.googleAvgDisplay').innerText = $('.googleAvgDisplay').innerText.substring(0, 4)))
//     // TODO Update Progress Bar
//     .catch(e => console.log(e));
// });

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
