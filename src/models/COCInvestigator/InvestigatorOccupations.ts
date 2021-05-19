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
  optionalSkillPoints?: {
    type: InvestigatorStatTypes,
    multiplier: number,
  }[]
}

// TODO separate types of pilot, driver, laborer, photographer
// TODO make two endpoints: one for fetching all occupation names and one for getting a specific occupation and move this to backend
export const occupationNames: string[] = [
  'Accountant',
  'Acrobat',
  'Actor (Film Star)',
  'Actor (Stage Actor)',
  'Agency Detective',
  'Alienist (Classic)',
  'Animal Trainer',
  'Antiquarian (Lovecraftian)',
  'Antique Dealer',
  'Archaeologist (Lovecraftian',
  'Architect',
  'Artist',
  'Asylum Attendant',
  'Athlete',
  'Author (Lovecraftian)',
  'Bartender',
  'Big Game Hunter',
  'Book Dealer',
  'Bounty Hunter',
  'Boxer/Wrestler',
  'Butler',
  'Clergy, Member of the',
  'Cowboy/girl',
  'Craftsperson',
  'Criminal (Assassin)',
  'Criminal (Bank Robber)',
  'Criminal (Bootlegger)',
  'Criminal (Burglar)',
  'Criminal (Conman)',
  'Criminal (Gangster)',
  'Criminal (Fence)',
  'Criminal (Forger/Counterfeiter)',
  'Criminal (Gun Moll)',
  'Criminal (Smuggler)',
  'Criminal (Street Punk)',
  'Criminal (Thug)',
  'Cult Leader',
  'Designer',
  'Dilettante (Lovecraftian)',
  'Diver',
  'Drifter',
  'Driver',
  'Driver (Chauffeur)',
  'Driver (Taxi Driver)',
  'Editor',
  'Elected Official',
  'Engineer',
  'Entertainer',
  'Explorer (Classic)',
  'Farmer',
  'Federal Agent',
  'Firefighter',
  'Foreign Correspondent',
  'Forensic Surgeon',
  'Gambler',
  'Gentleman/lady',
  'Hobo',
  'Hospital Orderly',
  'Journalist (Investigative Journalist)',
  'Journalist (Reporter)',
  'Laboratory Assistant',
  'Laborer (Unskilled)',
  'Laborer (Lumberjack)',
  'Laborer (Miner)',
  'Lawyer',
  'Librarian (Lovecraftian)',

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
      InvestigatorSkillTypes.creditRating,
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
      InvestigatorSkillTypes.creditRating,
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
      InvestigatorSkillTypes.creditRating,
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
      InvestigatorSkillTypes.creditRating,
    ],
    extraSkillTypes: 1,
    interpersonalSkills: 2,
    suggestedContacts: [
      'Theatre industry',
      'Newspaper art critics',
      'Actors\' guild',
    ],
  },  
  {
    name: 'Agency Detective',
    description: 'Numerous well-known detective agencies exist around the world, with probably the most famous being the Pinkerton and Burns agencies (merged into one in modern times). Large agencies employ two types of agents: security guards and operatives. Guards are uniformed patrolmen, hired by companies and individuals to protect property and people against burglars, assassins and kidnappers. Use the Uniformed Police Officer’s description for these characters. Company Operatives are plainclothes detectives, sent out on cases requiring them to solve mysteries, prevent murders, locate missing people, and so on.',
    creditRating: {
      min: 20,
      max: 45,
    },
    skillPoints: [
      {
        type: InvestigatorStatTypes.education,
        multiplier: 2,
      },
    ],
    optionalSkillPoints: [
      {
        type: InvestigatorStatTypes.strength,
        multiplier: 2,
      },
      {
        type: InvestigatorStatTypes.dexterity,
        multiplier: 2,
      },
    ],
    skills: [
      InvestigatorSkillTypes.fighting,
      InvestigatorSkillTypes.firearmsHandgun,
      InvestigatorSkillTypes.firearmsShotgun,
      InvestigatorSkillTypes.law,
      InvestigatorSkillTypes.libraryUse,
      InvestigatorSkillTypes.psychology,
      InvestigatorSkillTypes.stealth,
      InvestigatorSkillTypes.track,
      InvestigatorSkillTypes.creditRating,
    ],
    extraSkillTypes: 0,
    interpersonalSkills: 1,
    suggestedContacts: [
      'Local law enforcement',
      'Clients',
    ],
  },
  {
    name: 'Alienist (Classic)',
    description: 'In the 1920s, "alienist" is the term given for those who treat mental illness (early psychiatrists). Psychoanalysis is barely known in the U.S., and its basis in sexual life and toilet training is felt to be indecent. Psychiatry, a standard medical education augmented by behaviorism, is more common. Intellectual wars rage between alienists, psychiatrists, and neurologists.',
    creditRating: {
      min: 10,
      max: 60,
    },
    skillPoints: [
      {
        type: InvestigatorStatTypes.education,
        multiplier: 4,
      },
    ],
    skills: [
      InvestigatorSkillTypes.law,
      InvestigatorSkillTypes.listen,
      InvestigatorSkillTypes.medicine,
      InvestigatorSkillTypes.language,
      InvestigatorSkillTypes.psychoanalysis,
      InvestigatorSkillTypes.psychology,
      InvestigatorSkillTypes.science,
      InvestigatorSkillTypes.creditRating,
    ],
    extraSkillTypes: 0,
    interpersonalSkills: 0,
    suggestedContacts: [
      'Others in the field of mental illness',
      'Medical doctors',
      'Detectives in law enforcement',
    ],
  },
  {
    name: 'Animal Trainer',
    description: 'May be employed by film studios, a travelling circus, a horse stable, or possibly working freelance. Whether training guide dogs for the blind or teaching a lion to jump through a flaming hoop, the animal trainer usually works alone, spending long hours in close proximity with the animals in their care. An animal trainer can use the Psychology skill with animals as well as people.',
    creditRating: {
      min: 10,
      max: 40,
    },
    skillPoints: [
      {
        type: InvestigatorStatTypes.education,
        multiplier: 2,
      },
    ],
    optionalSkillPoints: [
      {
        type: InvestigatorStatTypes.appearance,
        multiplier: 2,
      },
      {
        type: InvestigatorStatTypes.power,
        multiplier: 2,
      },
    ],
    skills: [
      InvestigatorSkillTypes.jump,
      InvestigatorSkillTypes.listen,
      InvestigatorSkillTypes.naturalWorld,
      InvestigatorSkillTypes.psychology,
      InvestigatorSkillTypes.science,
      InvestigatorSkillTypes.stealth,
      InvestigatorSkillTypes.track,
      InvestigatorSkillTypes.creditRating,
    ],
    extraSkillTypes: 1,
    interpersonalSkills: 0,
    suggestedContacts: [
      'Zoos',
      'Circus folk',
      'Patrons',
      'Actors',
    ],
  },
  {
    name: 'Antiquarian (Lovecraftian)',
    description: 'A person who delights in the timeless excellence of design and execution, and in the power of ancient lore. Probably the most Lovecraft-like occupation available to an investigator. An independent income allows the antiquarian to explore things old and obscure, perhaps sharpening their focus down particular lines of enquiry based on personal preference and interest. Usually a person with an appreciative eye and a swift mind, who frequently finds mordant or contemptuous humor in the foolishness of the ignorant, the pompous, and the greedy.',
    creditRating: {
      min: 30,
      max: 70,
    },
    skillPoints: [
      {
        type: InvestigatorStatTypes.education,
        multiplier: 4,
      },
    ],
    skills: [
      InvestigatorSkillTypes.appraise,
      InvestigatorSkillTypes.art,
      InvestigatorSkillTypes.history,
      InvestigatorSkillTypes.libraryUse,
      InvestigatorSkillTypes.language,
      InvestigatorSkillTypes.spotHidden,
      InvestigatorSkillTypes.creditRating,
    ],
    extraSkillTypes: 1,
    interpersonalSkills: 1,
    suggestedContacts: [
      'Booksellers',
      'Antique collectors',
      'Historical societies',
    ],
  },
  {
    name: 'Antique Dealer',
    description: 'Antique dealers usually own their own shop, retail items out of their homes, or go on extended buying trips, making a profit on reselling to urban stores.',
    creditRating: {
      min: 30,
      max: 50,
    },
    skillPoints: [
      {
        type: InvestigatorStatTypes.education,
        multiplier: 4,
      },
    ],
    skills: [
      InvestigatorSkillTypes.accounting,
      InvestigatorSkillTypes.appraise,
      InvestigatorSkillTypes.driveAuto,
      InvestigatorSkillTypes.history,
      InvestigatorSkillTypes.libraryUse,
      InvestigatorSkillTypes.navigate,
      InvestigatorSkillTypes.creditRating,
    ],
    extraSkillTypes: 0,
    interpersonalSkills: 2,
    suggestedContacts: [
      'Local historians',
      'Other antique dealers',
      'Criminal fences',
    ],
  },
]