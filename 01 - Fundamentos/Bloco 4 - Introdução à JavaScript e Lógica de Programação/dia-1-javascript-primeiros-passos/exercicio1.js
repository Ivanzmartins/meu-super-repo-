//EXERCICIO 1

const a=10;
const b=3;

console.log(a%b);

//EXERCICIO 2

const a=10, b=7;

if(a>b){
    console.log(a);
}
else {
    console.log(b);
}

//EXERCICIO 3

const a=5, b=11, c= 15;

if(a>b && a>c){
    console.log(a);
}
else if(b>a && b>c){
    console.log(b);
}
else{
    console.log(c)
}


//EXERCICIO 4

const num=-0;

if(num>0){
    console.log("Positive");
}
else if(num<0){
    console.log("Negative");
}
else{
    console.log("Zero")
}
//EXERCICIO 5 

const a=90, b=50, c=50;

if(a<0 || b<0 || c<0){
    console.log("Um ou mais angulos inválidos");
}
console.log(a+b+c==180)

//EXERCICIO 6   

let piece = "casa";
piece = piece.toLowerCase();

switch (piece){
    case "pawn":
        console.log("Anda somente uma casa à frente, exceto no primeiro movimento, que pode andar duas");
         break;
    case "bishop":
        console.log("Anda nas diagonais, quantas casas for possível");
        break;
    case "knight":
        console.log("Anda em L");
        break;
    case "rook":
        console.log("Anda quantas casas possível em linhas retas");
        break;
    case "queen":
        console.log("Anda quantas casas quiser, seja diagonal quanto em linhas retas");
        break;
    case "king":
        console.log("Uma casa em qualquer direção");
    default:
        console.log("peça inválida")
}

//EXERCÍCIO 7

const nota = 10;

if (nota<0 || nota>100){
    console.log("erro");
}
else if( nota< 50){
    console.log("Nota F");
    }
else if(nota >= 50 && nota < 60){
    console.log("Nota E");
    }

else if(nota >=60 && nota < 70){
    console.log("Nota D");
}
else if (nota>=70 && nota<80){
    console.log("Nota C");
}
else if (nota>=80 && nota<90){
    console.log("Nota B");
}
else{
    console.log("Nota A");
}
