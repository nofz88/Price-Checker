const axios = require('axios');

const getRandomCryptoPrice = async () => {
  const cryptocurrencies = ['bitcoin', 'ethereum', 'litecoin', 'ripple'];
  const randomCrypto = cryptocurrencies[Math.floor(Math.random() * cryptocurrencies.length)];

  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${randomCrypto}&vs_currencies=usd`);
    const price = response.data[randomCrypto].usd;
    console.log(`Random price for ${randomCrypto}: $${price}`);
  } catch (error) {
    console.error('Error fetching crypto price:', error.message);
  }
};

getRandomCryptoPrice();
