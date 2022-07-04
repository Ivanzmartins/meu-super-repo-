
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const newUser = {...user, ...jobInfos};
let {name, age, nationality, profession, squad, squadInitials} = newUser;
console.log(name)

