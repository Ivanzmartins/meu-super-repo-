const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://icanhazdadjoke.com/';

  try {
    const response = await fetch(url);
    const data = (await response.json());
    console.log(data);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.