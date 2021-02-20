import { DicePool } from "./Dice"

export class COCInvestigator {
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
        mythosKnowledge: 0,
        luck: 50,
        damageBonus: 1,
        magicPoints: 5,
        healthPoints: 10,
        sanityPoints: 50,
        build: 0,
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
      firearms: {
        handgun: 25,
        rifle: 20,
        shotgun: 20,
        automatic: 10,
      },
      firstAid: 30,
      history: 5,
      intimidate: 15,
      jump: 20,
      language: {
        english: 50
      },
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
}

export interface InvestigatorStats {
  baseStats: {
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
  specialStats: {
    mythosKnowledge: number
    luck: number
    damageBonus: number
    magicPoints: number
    healthPoints: number
    sanityPoints: number
    //TODO make enum for build
    build: number
  }
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
  firearms: {
    handgun: number
    rifle: number
    shotgun: number
    automatic: number
  }
  firstAid: number
  history: number
  intimidate: number
  jump: number
  language: {
    [key: string]: number
  }
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