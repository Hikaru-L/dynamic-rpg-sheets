import { DicePool, Dice } from "../dice/Dice"

export class CallOfCthulhuInvestigator {
  info: InvestigatorBaseInfo
  stats: InvestigatorStats
  skills: InvestigatorSkills

  constructor() {
    this.info = {
      name: '',
      occupation: '',
      player: '',
      birthplace: '',
      sex: '',
      age: 1,
      avatarUrl: ''
    }
    this.stats = {
      baseStats: {
        strength: 50,
        dexterity: 50,
        intelligence: 50,
        constitution: 50,
        appearance: 50,
        power: 50,
        size: 50,
        sanity: 50,
        education: 50,
      },
      specialStats: {
        luck: 50,
        damageBonus: 1,
        magicPoints: 5,
        health: 10,
        currentHealth: 10,
        sanityPoints: 50,
        build: 0,
        moveRate: 7,
        currentMagic: 5,
      }
    }
    this.skills = {
      accounting: 5,
      anthropology: 1,
      appraise: 5,
      archaeology: 1,
      art: 5,
      charm: 15,
      climb: 20,
      creditRating: 0,
      cthulhuMythos: 0,
      disguise: 5,
      dodge: 25,
      driveAuto: 20,
      electricRepair: 10,
      fastTalk: 5,
      fighting: 25,
      firearmsHandgun: 25,
      firearmsShotgun: 20,
      firearmsRifle: 20,
      firearmsAutomatic: 10,
      firstAid: 30,
      history: 5,
      intimidate: 15,
      jump: 20,
      language: 50,
      law: 5,
      libraryUse: 20,
      listen: 25,
      locksmith: 1,
      mechanicalRepair: 10,
      medicine: 1,
      naturalWorld: 10,
      navigate: 10,
      occult: 5,
      persuade: 10,
      pilot: 1,
      psychology: 10,
      psychoanalysis: 1,
      science: 1,
      sleightOfHand: 10,
      spotHidden: 25,
      stealth: 20,
      survival: 10,
      swim: 20,
      throw: 20,
      track: 10,
    }
  }
}

export interface InvestigatorBaseInfo {
  name: string
  occupation: string
  player: string
  birthplace: string
  sex: string
  age: number
  avatarUrl: string
}

export interface InvestigatorStats {
  baseStats: InvestigatorBaseStats
  specialStats: InvestigatorSpecialStats
}

export interface InvestigatorSpecialStats {
  luck: number
  damageBonus: number | Dice
  magicPoints: number
  currentMagic: number
  health: number
  currentHealth: number
  sanityPoints: number
  build: number
  moveRate: number
}

export interface InvestigatorBaseStats {
  strength: number
  dexterity: number
  intelligence: number
  constitution: number
  appearance: number
  power: number
  size: number
  sanity: number
  education: number
}
export interface InvestigatorSkills {
  specialSkills?: {
    [key: string]: number
  }
  accounting: number
  anthropology: number
  appraise: number
  archaeology: number
  art: number
  charm: number
  climb: number
  creditRating: number
  cthulhuMythos: number
  disguise: number
  dodge: number
  driveAuto: number
  electricRepair: number
  fastTalk: number
  fighting: number
  firearmsHandgun: number
  firearmsShotgun: number
  firearmsRifle: number
  firearmsAutomatic: number
  firstAid: number
  history: number
  intimidate: number
  jump: number
  language: number
  law: number
  libraryUse: number
  listen: number
  locksmith: number
  mechanicalRepair: number
  medicine: number
  naturalWorld: number
  navigate: number
  occult: number
  persuade: number
  pilot: number
  psychology: number
  psychoanalysis: number
  science: number
  sleightOfHand: number
  spotHidden: number
  stealth: number
  survival: number
  swim: number
  throw: number
  track: number
}

export interface InvestigatorWeapon {
  name: string
  checks: {
    regular: number
    hard: number
    extreme: number
  }
  damage: DicePool
}