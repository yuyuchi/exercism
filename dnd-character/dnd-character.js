export const abilityModifier = (sum) => {
  if (sum < 3) {
    throw new Error('Ability scores must be at least 3')
  }
  if (sum > 18) {
    throw new Error('Ability scores can be at most 18')
  }
  return Math.floor((sum - 10) / 2)
};

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const reducer = (acc, val) => acc + val

const getDiceSum = (min, max, diceNum) => {
  let dices = []

  for (let i = 0; i < diceNum; i++) {
    dices = [...dices, getRndInteger(min, max)]
  }
  
  const theLargestThree = dices.sort((a, b) => b - a).splice(0, 3)
  return theLargestThree.reduce(reducer)
}

export class Character {
  strength = getDiceSum(1, 6, 4)
  dexterity = getDiceSum(1, 6, 4)
  constitution = getDiceSum(1, 6, 4)
  intelligence = getDiceSum(1, 6, 4)
  wisdom = getDiceSum(1, 6, 4)
  charisma = getDiceSum(1, 6, 4)

  static rollAbility() {
    return getDiceSum(1, 6, 4)
  }

  get strength() {
    return this.strength
  }

  get dexterity() {
    return this.dexterity
  }

  get constitution() {
    return this.constitution
  }

  get intelligence() {
    return this.intelligence
  }

  get wisdom() {
    return this.wisdom
  }

  get charisma() {
    return this.charisma
  }

  get hitpoints() {
    return 10 + abilityModifier(this.constitution)
  }
}
