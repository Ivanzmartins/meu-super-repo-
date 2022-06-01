// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");


function prevent1(e){
    e.preventDefault();
}
HREF_LINK.addEventListener('click', prevent1);

function prevent2(e){
    e.preventDefault();
}
INPUT_CHECKBOX.addEventListener('click', prevent2);

function prevent3(e){
    e.preventDefault();
}
INPUT_TEXT.addEventListener('keypress', prevent3)