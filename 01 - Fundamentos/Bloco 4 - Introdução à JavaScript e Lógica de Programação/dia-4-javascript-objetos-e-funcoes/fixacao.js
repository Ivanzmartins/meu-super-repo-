// // let diasDaSemana = {
// //     1: 'domingo',
// //     2: 'segunda',
// //     3: 'terça',
// //     4: 'quarta',
// //     5: 'quinta',
// //     6: 'sexta',
// //     7: 'sábado',
// //     };
    
// //     // diasDaSemana.1; // SyntaxError: Unexpected number
// //     console.log(diasDaSemana[2]); // domingo

// let conta = {
//     agencia: '0000',
//     banco: {
//       cod: '012',
//       id: 4,
//       nome: 'TrybeBank',
//     },
//   };
  
//   let infoDoBanco = 'banco';
//   console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
//   console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
//   console.log(conta.agencia); // 0000
//   console.log(conta['agencia']); // 0000
  
//   console.log(conta.banco.cod); // 012
//   console.log(conta['banco']['id']); // 4

// let moradores = [
//     {
//       nome: 'Luiza',
//       sobrenome: 'Guimarães',
//       andar: 10,
//       apartamento: 1005,
//     },
//     {
//       nome: 'William',
//       sobrenome: 'Albuquerque',
//       andar: 5,
//       apartamento: 502,
//     },
//     {
//       nome: 'Murilo',
//       sobrenome: 'Ferraz',
//       andar: 8,
//       apartamento: 804,
//     },
//     {
//       nome: 'Zoey',
//       sobrenome: 'Brooks',
//       andar: 1,
//       apartamento: 101,
//     },
//   ];
  
//   let primeiroMorador = moradores[0];
//   console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
//   console.log(primeiroMorador['andar']); // 10
  
//   let ultimoMorador = moradores[moradores.length - 1];
//   console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
//   console.log(ultimoMorador.nome); // Zoey

// // Exercicios de fixação 1 a 5
// let player = {
//      name : 'Marta',
//      lastName : 'Silva',
//      age : 34,
//      medals : { golden: 2, silver: 3 },
//      bestInTheWorld : [2006, 2007, 2008, 2009, 2010, 2018]

// }
// console.log("A jogadora " + player.name + ' ' +player.lastName+ " tem " + player.age +" anos de idade."  )
// console.log("A jogadora " + player.name + ' ' +player.lastName+ " foi eleita a melhor do mundo por " + player.bestInTheWorld.length +" vezes."  )
// console.log("A jogadora " + player.name + ' ' +player.lastName+ " possui " + player.medals.golden +" medalhas de ouro e " + player.medals.silver + " medalhas de prata."  )

// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]);
// }

// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };
//   for (let index in car) {
//     console.log(index, car[index]);
//   }

//Fixação for/in for/of

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };
//   for (let index in names){
//       console.log("Olá " + names[index])
//   }
// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };
//   for (let index in car){
//       console.log(index, car[index])
//   }




// // Com função
// function bomDiaTryber(nome) {
// //   console.log('Bom dia, ' + nome);
// }

// bomDiaTryber('Pururu'); // Bom dia, Pururu
// bomDiaTryber('Julia'); // Bom dia, Julia
// bomDiaTryber('Marcelo'); // Bom dia, Marcelo

// function soma(a,b){
//     return a+b;
// }
// console.log(soma(1,2))

// function comparaNumeros (c,d){
//     if(c>d){
//         return ('O número ' + c + ' é maior.');
//     }
//     return ("O número " + d + ' é maior.')
// }
// console.log(comparaNumeros(1000,150))
function sum(a, b) {
    return a + b;
  }
  console.log(sum(1, 2));
  