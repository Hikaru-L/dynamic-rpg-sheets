export class Dice {
  diceType: DiceType 
  amount: number

  constructor(type: DiceType, amount?: number) {
    this.diceType = type
    this.amount = amount || 1
  }

  public roll() {
    //roll dice
  }
  public toString() {
    return `${this.amount}${this.diceType}`
  }
}

export class DicePool {
  diceTypes: DiceType []
  amount: number[]

  constructor(types: DiceType[], amount: number[]) {
    this.diceTypes = types
    this.amount = amount
  }

  public roll() {
    //roll dice
  }

}

export enum DiceType {
  d3 = 'd3',
  d4 = 'd4',
  d6 = 'd6',
  d8 = 'd8',
  d10 = 'd10',
  d12 = 'd12',
  d20 = 'd20',
  d100 = 'd100',
}