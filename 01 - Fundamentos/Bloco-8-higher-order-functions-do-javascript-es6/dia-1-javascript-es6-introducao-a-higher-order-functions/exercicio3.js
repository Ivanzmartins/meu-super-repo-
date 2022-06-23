const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (gabarito, respostasAluno) => {
  if (gabarito === respostasAluno) {
    return 1;
  }else if (respostasAluno === 'N.A') {
    return 0;
  } else {
    return -0.5;
  }
  }

const avaliadorTotal = (gabarito, respostasAluno, callback) => {
  let notaFinal = 0;
  for (let index = 0; index < gabarito.length; index += 1){
    const retornoCallback = callback(gabarito[index], respostasAluno[index]);
    console.log(retornoCallback);
    notaFinal += retornoCallback;
  }
  return notaFinal;
} 

console.log(avaliadorTotal(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers))

