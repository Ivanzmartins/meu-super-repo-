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

//EXERCICIO 1 BONUS CRIE UM QUADRADO FEITO DE ASTERISCOS
// let n=2;

// for(let  i = 0; i < n; i += 1){
//     let linha = '';
//     for(let j = 0; j < n; j += 1){
//         linha += '*';
//     }
//     console.log(linha);
// }

//EXERCICIO 2 BONUS crie um retangulo

// let n=4, linha='';

// for(let j = 0; j < n; j += 1){
//     linha += '*';
//     console.log(linha);
//     }

//exercicio 3 bonus crie um retangulo invertido

// let n=4, linha='';

// for(let i = 0; i <= n; i += 1){
//     for(let j=0; j<n-i; j+=1){//adiciona os espaços a string
//         linha+=' ';
//     }
//     for( let k=0; k<i; k+=1){//adiciona "*" a string
//         linha+='*'
//     }
//     linha +='\n';//quebra a linha da string para imprimir
//     }
//     console.log(linha);// imprime a string com as quebras de linha e estrelas

// //Exercício 6 bonus
// let maiorPrimo = 0;
// let primo=true;
// let limite=10;
// let primeSequence=[];

// for (let i=0; i<limite; i+=1){
// let primo=true;
//     for(let j=2; j<i; j+=1){
//         if(i % j === 0){
//             primo=false;
//         }
//     }
//     if(primo == true && i!=0){
//         primeSequence.push(i);
//     }
// }
// console.log(primeSequence)


