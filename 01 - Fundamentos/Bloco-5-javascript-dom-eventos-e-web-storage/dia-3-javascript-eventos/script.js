function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function dayMonth(){
    let listaDeDias = document.querySelector('#days');
    for( let index = 0; index < dezDaysList.length; index += 1){
        let conteudoDoDia = dezDaysList[index];
        let elementoDiaLi = document.createElement('li');
        elementoDiaLi.classList.add('day');
        elementoDiaLi.innerText = conteudoDoDia;
        listaDeDias.appendChild(elementoDiaLi);
        if( conteudoDoDia === 24 || conteudoDoDia === 25 || conteudoDoDia === 31){
            elementoDiaLi.classList.add('holiday')
        }
        if(conteudoDoDia === 4 || conteudoDoDia === 11 || conteudoDoDia === 18 || conteudoDoDia === 25) {
            elementoDiaLi.classList.add('friday')
        }

    }
  }
  dayMonth();


  
function criaBotaoFeriado(buttonName){
  let conteinerBotao = document.getElementsByClassName('buttons-container')[0];
  let botao = document.createElement('button');
  
  botao.id = 'btn-holiday'; 
  botao.innerHTML = buttonName; 
  conteinerBotao.appendChild(botao)

}
criaBotaoFeriado('Feriados');  

function mostraFeriados() {
  let botaoFeriado = document.querySelector('#btn-holiday');
  let todosFeriados = document.querySelectorAll('.holiday');

  botaoFeriado.addEventListener('click', function(){
    for( let index = 0; index < todosFeriados.length; index += 1){
      if(todosFeriados[index].style.backgroundColor === 'blue'){
        todosFeriados[index].style.backgroundColor = 'rgb(238,238,238)'; 
      }else{
        todosFeriados[index].style.backgroundColor = 'blue';
      }
    }
  }); 
  
}
mostraFeriados();

function criaBotaoSextou(buttonName){
  let conteinerSextou = document.getElementsByClassName('buttons-container')[0];
  let sextou = document.createElement('button');
  sextou.id = 'btn-friday'; 
  sextou.innerHTML = buttonName; 
  conteinerSextou.appendChild(sextou)
 
}
criaBotaoSextou('Sexta Feira'); 

function mostraSexta(){
  let botaoSexta = document.querySelector('#btn-friday');
  let todasSextas = document.querySelectorAll('.friday');
  botaoSexta.addEventListener('click', function (){
    for( let index = 0; index < todasSextas.length; index += 1){
      if(todasSextas[index].style.backgroundColor === 'pink'){
        todasSextas[index].style.backgroundColor = 'rgb(238,238,238)';
      }else{
        todasSextas[index].style.backgroundColor = 'pink';
      }   
    }
  })
}
mostraSexta();