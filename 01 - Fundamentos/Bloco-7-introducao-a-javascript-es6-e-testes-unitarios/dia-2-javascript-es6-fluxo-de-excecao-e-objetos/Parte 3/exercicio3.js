const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//1
const addNewKey = (obj, key, value) => obj[key] = value;
addNewKey(lesson2, 'turno', 'noite');

//2
const keyLister = (obj) => {const exer = (Object.keys(obj))};

//3
const lengthObj = (obj) => {const exer3 = (Object.keys(obj).length)}; 
lengthObj(lesson2)

//4
const valueLister = (obj) => {const exer = (Object.values(obj))};
valueLister(lesson2);

//5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);

//6
const allStudents = (obj) => {
  const keyss = Object.keys(obj);
  let total = 0;
  for ( let index = 0; index < keyss.length; index += 1) {
    total += obj[keyss[index]].numeroEstudantes;//o atributo numero de keyss na chave index
  }return total;
};
// console.log(allStudents(allLessons));

//7
const keyValuer = (obj, key) => Object.values(obj)[key];
// console.log(keyValuer(lesson1, 3));

//8
let verifyPair = (object, key, value) => object.hasOwnProperty(key) && object[key] === value;
// console.log(verifyPair(lesson3, 'turno', 'noite'))
// const verifyPair = (obj, key, value) => {
//   let taCerto = false;
//   const entriess = Object.entries(obj);
//   console.log(entriess);
//   for (let index = 0; index < entriess.length; index += 1) {
//     if (entriess[index][0] === key && entriess[index][1] === value ) {
//       taCerto = true;
//     }
//   }return taCerto;
// }
// console.log(verifyPair(lesson3, 'turno', 'noite'));

//BôNUS 1

// const mathCLasses = (obj, subject) => {
//   const allClasses = Object.keys(obj);
//   let total = 0;
//   for (let index in allClasses) {
//     if (obj[allClasses[index]].materia === subject) {
//       total += obj[allClasses[index]].numeroEstudantes
//     }
//   }
//   console.log(total);
//   return total;
// }

// mathCLasses(allLessons, 'Matemática')

//BÔNUS 2

// const createReport = (obj, prof) => {
//   const allClasses = Object.keys(obj);
//   const profReport = {};
//   profReport.name = prof;
//   profReport.aulas = [];
//   prof = prof;
//   for (let index in allClasses) {
//     if (obj[allClasses[index]].professor === 'Maria Clara') {
//       (profReport.aulas).push(obj[allClasses[index]].materia) 
//     }
//   }
//    console.log(profReport)
// };

// createReport(allLessons, 'Maria Clara')

