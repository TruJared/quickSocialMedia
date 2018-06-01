const axios = require('axios');
const { $ } = require('./_bling');
const { buildGoogleCard } = require('./_buildGoogleCard');
const { buildFacebookCard } = require('./_buildFacebookCard');

const getRatings = (id) => {
  const { googleId } = storeInfo[id];
  const { facebookId } = storeInfo[id];
  const { instaId } = storeInfo;

  const lambdaUrl = 'http://localhost:9000/callApis';
  //  'https://vigilant-babbage-982e22.netlify.com/.netlify/functions/callApis';

  // -- GET GOOGLE --//
  axios
    .post(
      lambdaUrl,
      JSON.stringify({
        host: 'google',
        id: googleId,
      }),
    )
    .then(res => res.data)
    .then(res => buildGoogleCard(res, id))
    .catch(e => console.log(e));

  // -- GET Facebook --//
  axios
    .post(
      lambdaUrl,
      JSON.stringify({
        host: 'facebook',
        id: facebookId,
      }),
    )
    .then(res => res.data)
    .then(res => buildFacebookCard(res, id))
    .catch(e => console.log(e));
};

export { getRatings };

// };
