// // Exercício 1
// let n=10, resultado=1;

// for ( let i=n; i>=1; i-=1){
//     resultado=resultado*i
// }
// console.log("O fatorial de " +n+" é: "+resultado)

// Exercicio 2

// let word = 'casa', reverse="";
// for ( let i=word.length-1; i>=0; i-=1){
//     reverse+=word[i];
//     console.log(reverse);

// }
// console.log(reverse)

// //Exercicio 3
// let array = ['java', 'javascript', 'python', 'html', 'css']
// let longestWord = array[0];
// let smallestWord = array[0];

// for(let i = 0; i < array.length; i+=1){
//     if( array[i].length > longestWord.length){
//         longestWord = array[i];

//     }
//     if(array[i].length < smallestWord.length){
//         smallestWord = array[i];
//     }
// }
// console.log("A maior palavra é: " +longestWord,".");
// console.log("A menor palavra é: " +smallestWord+".")

//Exercício 4

// let maiorPrimo = 0;
// let primo=true;

// for (let i=0; i<100; i+=1){
// let primo=true;
//     for(let j=2; j<i; j+=1){
//         if(i % j === 0){
//             primo=false;
//         }
//     }
//     if(primo == true){
//         maiorPrimo=i;
//     }
// }
// console.log(maiorPrimo)