const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = (dragon) => {
  const minDmg = 15;
  const dragonDmg = Math.floor((Math.random() * (dragon.strength - minDmg + 1) + minDmg));
  return dragonDmg;
};

const warriorAttack = (warrior) => {
  const minDmg = warrior.strength;
  const maxDmg = minDmg * warrior.weaponDmg;
  const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
  return warriorDamage;
};

const mageDamage = (mage) => {
  const mana = mage.mana;
  const min = mage.intelligence;
  const max = min*2
  const damage = Math.floor(Math.random()*(max-min+1)+min);
  const status = {
    dano: damage,
    manaSPent: 15
  }
  if (mana < 15) {
    status.dano = 'Não possui mana suficiente';
    status.manaSPent = 0;
  }
  return status;
}

const gameActions = {
  warriorTurn: warriorAttack(warrior)
}