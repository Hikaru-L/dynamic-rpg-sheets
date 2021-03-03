import { InvestigatorSkillTypes } from "./InvestigatorSkills";

export enum InvestigatorStatTypes {
  education = 'education',
  strength = 'strength',
  dexterity = 'dexterity',
  intelligence = 'intelligence',
  constituition = 'constituition',
  appearance = 'appearance',
  power = 'power',
  size = 'size',
  sanity = 'sanity',
}

export interface InvestigatorOccupation {
  name: string
  description: string
  skillPoints: {
    type: InvestigatorStatTypes,
    multiplier: number,
  }[]
  creditRating: {
    min: number,
    max: number,
  }
  suggestedContacts: string[]
  skills: InvestigatorSkillTypes[]
  extraSkillTypes: number
  interpersonalSkills: number
}

export const occupationNames: string[] = [
  'Accountant',
  'Acrobat',
  'Actor (Film Star)',
  'Actor (Stage Actor)',
]

export const occupations: InvestigatorOccupation[] = [
  {
    name: 'Accountant',
    description: 'Either employed within a business or working as a freelance consultant with a portfolio of self-employed clients or businesses. Diligence and an attention to detail means that most accountants can make good researchers, being able to support investigations through the careful analysis of personal and business transactions, financial statements, and other records.',
    creditRating: {
      min: 30,
      max: 70,
    },
    skillPoints: [
      {
        type: InvestigatorStatTypes.education,
        multiplier: 4,
      }
    ],
    skills: [
      InvestigatorSkillTypes.accounting,
      InvestigatorSkillTypes.law,
      InvestigatorSkillTypes.libraryUse,
      InvestigatorSkillTypes.persuade,
      InvestigatorSkillTypes.spotHidden,
    ],
    extraSkillTypes: 2,
    interpersonalSkills: 0,
    suggestedContacts: [
      'Business associates',
      'Legal Professions',
      'Financial sector',
    ],
  },
  {
    name: 'Acrobat',
    description: 'Acrobats may be either amateur athletes competing in staged meets—possibly even the Olympics—or professionals employed with the entertainment sector (e.g. circuses, carnivals, theatrical performances).',
    creditRating: {
      min: 9,
      max: 20,
    },
    skillPoints: [
      {
        type: InvestigatorStatTypes.education,
        multiplier: 2,
      },
      {
        type: InvestigatorStatTypes.dexterity,
        multiplier: 2,
      }
    ],
    skills: [
      InvestigatorSkillTypes.climb,
      InvestigatorSkillTypes.dodge,
      InvestigatorSkillTypes.jump,
      InvestigatorSkillTypes.throw,
      InvestigatorSkillTypes.spotHidden,
      InvestigatorSkillTypes.swim,
    ],
    extraSkillTypes: 2,
    interpersonalSkills: 0,
    suggestedContacts: [
      'Amateur athletic circles',
      'Sports writers',
      'Circuses',
      'Carnivals',
    ],
  },
  {
    name: 'Actor (Film Star)',
    description: 'Movie stars and the film industry have long captured the interest of people across the world. Many stars are made overnight and most of them lead flashy, high profile lives, ever in the media spotlight.',
    creditRating: {
      min: 20,
      max: 90,
    },
    skillPoints: [
      {
        type: InvestigatorStatTypes.education,
        multiplier: 2,
      },
      {
        type: InvestigatorStatTypes.appearance,
        multiplier: 2,
      }
    ],
    skills: [
      InvestigatorSkillTypes.art,
      InvestigatorSkillTypes.disguise,
      InvestigatorSkillTypes.driveAuto,
      InvestigatorSkillTypes.psychology,
    ],
    extraSkillTypes: 2,
    interpersonalSkills: 2,
    suggestedContacts: [
      'Film industry',
      'Media critics',
      'Writers',
    ],
  },
  {
    name: 'Actor (Stage Actor)',
    description: 'Many stage actors have a background in the classics and, considering themselves “legitimate,” have a tendency to look down upon the commercial efforts of the film industry, although by the late twentieth century this is diminished, with film actors able to command greater respect and higher fees.',
    creditRating: {
      min: 9,
      max: 40,
    },
    skillPoints: [
      {
        type: InvestigatorStatTypes.education,
        multiplier: 2,
      },
      {
        type: InvestigatorStatTypes.appearance,
        multiplier: 2,
      }
    ],
    skills: [
      InvestigatorSkillTypes.art,
      InvestigatorSkillTypes.disguise,
      InvestigatorSkillTypes.fighting,
      InvestigatorSkillTypes.history,
      InvestigatorSkillTypes.psychology,
    ],
    extraSkillTypes: 1,
    interpersonalSkills: 2,
    suggestedContacts: [
      'Theatre industry',
      'Newspaper art critics',
      'Actors\' guild',
    ],
  }
]