// Exercicios 1 a 5
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//console.log('Bem vinda ' + info.personagem);

info['recorrente'] = 'Sim' // adiciona recorrente ao objeto

//console.log('recorrente? ' + info.recorrente)

for ( let index in info){ 
    console.log(index)
}