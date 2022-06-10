// const verifyIsNumber = (value1, value2) => {
//   if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//     throw new Error('Os valores devem ser numéricos');
//   }
// };

// const sum = (value1, value2) => {
//   try {
//     verifyIsNumber(value1, value2);
//     return value1 + value2;
//   } catch (error) {
//     return error.message;
//   }
// };

// console.log(sum(2, 'batata'));

// const objeto = {
//   keyInicial: 2,
//   segundaKey: 22
// }

// console.log(Object.entries(objeto));

// function objetoAtualizado (test, newKey, seuValor) {
//   objeto[newKey] = seuValor;
//   console.log(Object.entries(objeto));
// }

// objetoAtualizado(objeto, 'batata', 12)

// objetoAtualizado(objeto, 'quartaKey', 42)



// const países = {
//   França: 'Paris',
//   Brasil: 'Brasília',
//   Espanha: 'Madrid',
//   Portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(países);
// // console.log(pairKeyValue[1]);
// for(index in pairKeyValue) {
//   console.log('--------');
//   console.log('País:', pairKeyValue[index][0]);
//   console.log('Capital:', pairKeyValue[index][1]);
// };


// const arrayTeste = [10,90,30,40];
// console.log("For/in mostrando o contador. console.log(contador)")
// for (const contador in arrayTeste) {
//   console.log(contador)
// }

// console.log("For/in mostrando o elemento dentro do contador. console.log(arrayTeste[contador])")
// for (const contador in arrayTeste) {
//   console.log(arrayTeste[contador])
// }

//For of é usado para pegar o valor do array na posição do contador

//CLONANDO OBJETOS COM Object.assign
const pessoa = {
  nome: 'Roberto'
};
const lastName = {
  lastName: 'Silva'
}

const newPerson = Object.assign({}, pessoa,lastName);
console.log(pessoa);
console.log(lastName);
console.log('Objeto clonado');
console.log(newPerson);
newPerson.nome =  'Abacaxi';
console.log('Objeto clonado-alterado');
console.log(newPerson);




