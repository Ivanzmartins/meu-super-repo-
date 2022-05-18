// //Exercício 1
// function verificaPalindrome (string){
//     let stringReversed = string.split('').reverse().join('');//split transforma a string em uma array com cada letra, 
//     //pois a função reverse só pode ser usada em arrays e a join transforma a array invertida em uma string novamente     
//     if( string === stringReversed){
//         return true;
//     }
//         return false;
    
// }
// console.log(verificaPalindrome('arara'))

//Exercicio 2

// function indiceDoMaior (numeros){
//    let indiceMaior = 0;
//    for (let indice in numeros){
//        if( numeros[indiceMaior] < numeros[indice]){
//            indiceMaior = indice;
//        }
//    } 
//    return indiceMaior;
// }

// console.log(indiceDoMaior([2, 4, 6, 7, 10, 0, -3]))

function indiceDoMenor (numeros){
    let indiceMenor = 0;
    for (let indice in numeros){
        if( numeros[indiceMenor] < numeros[indice]){
            indiceMenor = indice;
        }
    } 
    return indiceMenor;
 }
 
 console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]))
 
