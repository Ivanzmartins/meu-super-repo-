const checkNumber = (myNumber, number) => number === myNumber;

const lottery = (myNumber, callback) => {
  const number = Math.floor(Math.random()*6);
  console.log(`Seu numero: ${myNumber}. Numero sorteado:${number} `);
  if (callback(myNumber, number) === true ) {return 'Ganhador'};
  return 'tente novamente'
};

console.log(lottery(0, checkNumber))


