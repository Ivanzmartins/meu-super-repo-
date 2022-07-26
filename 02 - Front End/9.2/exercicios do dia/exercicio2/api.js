
const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';
  const coins =  await fetch(url)
    .then((response) => response.json())
    .then((infos) => infos.data )
    .catch((error) => error.toString());
  console.log(coins);
  return coins;
};

const coinToHtml = async () => {
  const coins = await fetchCoins();// array com informações de todas as moedas
  const list = document.querySelector('#coin-array');
  coins.forEach( ({name, priceUsd, symbol}) => {
    const newLi = document.createElement('li');
    newLi.innerText = `${name}(${symbol}): ${Number(priceUsd).toFixed(4)}`;
    list.appendChild(newLi);
  });
}



window.onload = () => coinToHtml();





// const API_URL = 'https://icanhazdadjoke.com/';

// const fetchJoke = () => {
//   const myObject = {
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
//   };

//   fetch(API_URL, myObject)
//     .then(response => response.json())
//     .then((joke) =>
//     document.querySelector('#jokeContainer').innerText = joke.joke);
// };

// window.onload = () => fetchJoke();