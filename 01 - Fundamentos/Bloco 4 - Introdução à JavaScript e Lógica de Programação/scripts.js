let estado = "lista";

switch(estado){
    case "aprovado":
        console.log("Aprovado!!!");
        break;
    case "reprovado":
        console.log("Reprovado, tente mais uma vez D:");
        break;
    case "lista":
        console.log("Você está na lista de espera");
        break;
    default:
        console.log("Entrada inválida");
}