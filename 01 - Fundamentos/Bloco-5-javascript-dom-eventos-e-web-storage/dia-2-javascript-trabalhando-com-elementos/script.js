const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'blue';
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerHTML = 'primeiroFilhoDoFilho';
const primeiroFilho = pai.firstElementChild;
const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;
const atencao = elementoOndeVoceEsta.nextSibling;
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

console.log(terceiroFilho);

const terceiroFilho2 = pai.lastElementChild.previousElementSibling





