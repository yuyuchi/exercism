export const abilityModifier = (sum) => {
  if (sum < 3) throw new Error('Ability scores must be at least 3')
  if (sum > 18) throw new Error('Ability scores can be at most 18')

  return Math.floor((sum - 10) / 2)
}

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getDiceSum = (min, max, diceNum) => {
  let dices = [...new Array(diceNum)].map(() => getRndInteger(min, max))

  dices
    .sort((a, b) => b - a)
    .pop()
    
  return dices.reduce((a, b) => a + b, 0)
}

export class Character {
  constructor() {
    this._strength = Character.rollAbility()
    this._dexterity = Character.rollAbility()
    this._constitution = Character.rollAbility()
    this._intelligence = Character.rollAbility()
    this._wisdom = Character.rollAbility()
    this._charisma = Character.rollAbility()
  }
  
  static rollAbility() {
    return getDiceSum(1, 6, 4)
  }

  get strength() {
    return this._strength
  }

  get dexterity() {
    return this._dexterity
  }

  get constitution() {
    return this._constitution
  }

  get intelligence() {
    return this._intelligence
  }

  get wisdom() {
    return this._wisdom
  }

  get charisma() {
    return this._charisma
  }

  get hitpoints() {
    return 10 + abilityModifier(this._constitution)
  }
}
