// // Exercicios 1 a 5
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'sim'
//   };
//   let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrente: 'sim'
//   };


// //console.log('Bem vinda ' + info.personagem);

// // info['recorrente'] = 'Sim' // adiciona recorrente ao objeto

// //console.log('recorrente? ' + info.recorrente)

// for ( let index in info){ 
//     if (index === 'recorrente' && info[index] === 'sim' && info2[index] === 'sim'){
//         console.log('Ambos recorrentes')
//     }else{
//         console.log(info[index]+' e ' + info2[index])
//     } 
// }

//Exercicio 6 e 7

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  //console.log('O livro favorito de '+leitor.nome, leitor.sobrenome + ' se chama ' +leitor.livrosFavoritos[0].titulo) //exercicio 6

leitor.livrosFavoritos.push(            // EM UMA ARRAY SE ADICIONA UM NOVO ELEMENTO COM O COMANDO .push
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
      }
)

console.log(leitor.nome + ' tem ' +leitor.livrosFavoritos.length + ' livros favoritos.')