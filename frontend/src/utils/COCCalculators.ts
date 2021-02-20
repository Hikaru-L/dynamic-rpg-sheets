import { Dice, DiceType } from "../models/Dice"

export const MoveRateCalculator = (str: number, dex: number, siz: number, age: number) => {
  let moveRate = 0
  if((str < siz) && (dex < siz)) {
    moveRate = 7
  } else if ((str > siz) && (dex > siz)) {
    moveRate = 9
  } else {
    moveRate = 8
  }

  if(age >= 80) {
    moveRate += -5
  } else if(age >= 70) {
    moveRate += -4
  } else if(age >= 60) {
    moveRate += -3
  } else if(age >= 50) {
    moveRate += -2
  } else if(age >= 40) {
    moveRate += -1
  }
  return moveRate
}

export const DamageBonusAndBuildCalculator = (str: number, siz: number) => {

  const value = str + siz
  if(value <= 64) {
    return {db: -2, build: -2}
  } else if(value <= 84) {
    return {db: -1, build: -1}
  } else if(value <= 124) {
    return {db: 0, build: 0}
  } else if(value <= 164) {
    return {db: new Dice(DiceType.d4), build: 1}
  } else if(value <= 204) {
    return {db: new Dice(DiceType.d6), build: 2}
  } else if(value <= 284) {
    return {db: new Dice(DiceType.d6, 2), build: 3}
  } else if(value <= 364) {
    return {db: new Dice(DiceType.d6, 3), build: 4}
  } else {
    return {db: new Dice(DiceType.d6, 4), build: 5}
  }
}