const fullName = (name) => {
  const email = name.toLowerCase().split(' ').join('_') + '@trybe.com';
  return {name, email}
}

// console.log(fullName('ivan maRFGDFGDFGtins'))

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra batata'),
    id2: callback('Luiza Drumond teste'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(fullName))