// // // PARTE 1 - BUSCANDO ELEMENTOS
// const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
// const pai = elementoOndeVoceEsta.parentElement;
// pai.style.backgroundColor = 'red';
// const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
// primeiroFilhoDoFilho.innerText = 'Primeiro Filho do filho';
// const primeiroFilho = pai.firstElementChild;
// const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;
// const atencao = elementoOndeVoceEsta.nextSibling;
// const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// console.log(terceiroFilho);

// const terceiroFilho2 = pai.lastElementChild.previousElementSibling

// //PARTE 2 CRIANDO ELEMENTOS
// const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
// const pai = document.getElementById('pai');
// const irmaoElementoOndeVoceEsta = document.createElement('h2');
// pai.appendChild(irmaoElementoOndeVoceEsta);
// irmaoElementoOndeVoceEsta.innerText = "teste";
// const filhodoElemento =document.createElement('h2');
// elementoOndeVoceEsta.appendChild(filhodoElemento);
// // filhodoElemento.innerText = 'texto do filho do Elemento'
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const filhodoPrimeiroFilhodoFilho = document.createElement('section');
primeiroFilhoDoFilho.appendChild(filhodoPrimeiroFilhodoFilho);
filhodoPrimeiroFilhodoFilho.innerText = 'teste'
