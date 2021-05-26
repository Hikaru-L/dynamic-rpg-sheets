import {
  InvestigatorOccupation,
  InvestigatorStatTypes,
} from "./InvestigatorOccupations";
import { InvestigatorSkillTypes } from "./InvestigatorSkills";

export const occupations: InvestigatorOccupation[] = [
  {
    name: "Accountant",
    description:
      "Either employed within a business or working as a freelance consultant with a portfolio of self-employed clients or businesses. Diligence and an attention to detail means that most accountants can make good researchers, being able to support investigations through the careful analysis of personal and business transactions, financial statements, and other records.",
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
      "Business associates",
      "Legal Professions",
      "Financial sector",
    ],
  },
  {
    name: "Acrobat",
    description:
      "Acrobats may be either amateur athletes competing in staged meets—possibly even the Olympics—or professionals employed with the entertainment sector (e.g. circuses, carnivals, theatrical performances).",
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
      },
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
      "Amateur athletic circles",
      "Sports writers",
      "Circuses",
      "Carnivals",
    ],
  },
  {
    name: "Actor (Film Star)",
    description:
      "Movie stars and the film industry have long captured the interest of people across the world. Many stars are made overnight and most of them lead flashy, high profile lives, ever in the media spotlight.",
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
      },
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
    suggestedContacts: ["Film industry", "Media critics", "Writers"],
  },
  {
    name: "Actor (Stage Actor)",
    description:
      "Many stage actors have a background in the classics and, considering themselves “legitimate,” have a tendency to look down upon the commercial efforts of the film industry, although by the late twentieth century this is diminished, with film actors able to command greater respect and higher fees.",
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
      },
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
      "Theatre industry",
      "Newspaper art critics",
      "Actors' guild",
    ],
  },
  {
    name: "Agency Detective",
    description:
      "Numerous well-known detective agencies exist around the world, with probably the most famous being the Pinkerton and Burns agencies (merged into one in modern times). Large agencies employ two types of agents: security guards and operatives. Guards are uniformed patrolmen, hired by companies and individuals to protect property and people against burglars, assassins and kidnappers. Use the Uniformed Police Officer’s description for these characters. Company Operatives are plainclothes detectives, sent out on cases requiring them to solve mysteries, prevent murders, locate missing people, and so on.",
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
    suggestedContacts: ["Local law enforcement", "Clients"],
  },
  {
    name: "Alienist (Classic)",
    description:
      'In the 1920s, "alienist" is the term given for those who treat mental illness (early psychiatrists). Psychoanalysis is barely known in the U.S., and its basis in sexual life and toilet training is felt to be indecent. Psychiatry, a standard medical education augmented by behaviorism, is more common. Intellectual wars rage between alienists, psychiatrists, and neurologists.',
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
      "Others in the field of mental illness",
      "Medical doctors",
      "Detectives in law enforcement",
    ],
  },
  {
    name: "Animal Trainer",
    description:
      "May be employed by film studios, a travelling circus, a horse stable, or possibly working freelance. Whether training guide dogs for the blind or teaching a lion to jump through a flaming hoop, the animal trainer usually works alone, spending long hours in close proximity with the animals in their care. An animal trainer can use the Psychology skill with animals as well as people.",
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
    suggestedContacts: ["Zoos", "Circus folk", "Patrons", "Actors"],
  },
  {
    name: "Antiquarian (Lovecraftian)",
    description:
      "A person who delights in the timeless excellence of design and execution, and in the power of ancient lore. Probably the most Lovecraft-like occupation available to an investigator. An independent income allows the antiquarian to explore things old and obscure, perhaps sharpening their focus down particular lines of enquiry based on personal preference and interest. Usually a person with an appreciative eye and a swift mind, who frequently finds mordant or contemptuous humor in the foolishness of the ignorant, the pompous, and the greedy.",
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
      "Booksellers",
      "Antique collectors",
      "Historical societies",
    ],
  },
  {
    name: "Antique Dealer",
    description:
      "Antique dealers usually own their own shop, retail items out of their homes, or go on extended buying trips, making a profit on reselling to urban stores.",
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
      "Local historians",
      "Other antique dealers",
      "Criminal fences",
    ],
  },
  {
    name: "Archaeologist (Lovecraftian)",
    description:
      "The study and exploration of the past. Primarily the identification, examination, and analysis of recovered materials relating to human history. The work involves painstaking research and meticulous study, not to mention a willing attitude to getting one’s hands dirty. In the 1920s, successful archaeologists became celebrities, seen as explorers and adventurers. While some used scientific methods, many were happy to apply brute force when unveiling the secrets of the past— the use of dynamite was sometimes common. Such bullish behavior would be frowned upon in modern times.",
    creditRating: {
      min: 10,
      max: 40,
    },
    skillPoints: [
      {
        type: InvestigatorStatTypes.education,
        multiplier: 4,
      },
    ],
    skills: [
      InvestigatorSkillTypes.appraise,
      InvestigatorSkillTypes.archaeology,
      InvestigatorSkillTypes.history,
      InvestigatorSkillTypes.language,
      InvestigatorSkillTypes.libraryUse,
      InvestigatorSkillTypes.spotHidden,
      InvestigatorSkillTypes.mechanicalRepair,
      InvestigatorSkillTypes.navigate,
      InvestigatorSkillTypes.science,
    ],
    extraSkillTypes: 0,
    interpersonalSkills: 0,
    suggestedContacts: ["Patrons", "Museums", "Universities"],
  },
  {
    name: "Architect",
    description:
      "Architects are trained to design and plan buildings, whether a small conversion to a private house or a multi-million dollar construction project. The architect will work closely with the project manager and oversee the construction. Architects must be aware of local planning laws, health and safety regulation, and general public safety. Some may work for large firms or work freelance. A lot will depend on reputation. In the 1920s, many try and go it alone, working out of their house or a small office. Few manage to sell the grandiose designs they all nurse. Architecture may also encompass specialist areas like naval architecture and landscape architecture.",
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
      InvestigatorSkillTypes.accounting,
      InvestigatorSkillTypes.art,
      InvestigatorSkillTypes.law,
      InvestigatorSkillTypes.language,
      InvestigatorSkillTypes.libraryUse,
      InvestigatorSkillTypes.persuade,
      InvestigatorSkillTypes.psychology,
      InvestigatorSkillTypes.science,
    ],
    extraSkillTypes: 0,
    interpersonalSkills: 0,
    suggestedContacts: [
      "Local building and city-engineering departments",
      "Construction firms",
    ],
  },
  {
    name: "Artist",
    description:
      "May be a painter, sculptor, etc. Sometimes self-absorbed and driven with a particular vision, sometimes blessed with a great talent that is able to inspire passion and understanding. Talented or not, the artist’s ego must be hardy and strong to surmount initial obstacles and critical appraisal, and to keep them working if success arrives. Some artists care not for material enrichment, while others have a keen entrepreneurial streak.",
    creditRating: {
      min: 9,
      max: 50,
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
      InvestigatorSkillTypes.art,
      InvestigatorSkillTypes.history,
      InvestigatorSkillTypes.naturalWorld,
      InvestigatorSkillTypes.psychology,
      InvestigatorSkillTypes.language,
      InvestigatorSkillTypes.spotHidden,
    ],
    extraSkillTypes: 2,
    interpersonalSkills: 1,
    suggestedContacts: [
      "Art galleries",
      "Critics",
      "Wealthy patrons",
      "Advertising industry",
    ],
  },
  {
    name: "Asylum Attendant",
    description:
      "Although there are private sanitariums for those few who can afford them, the vast bulk of the mentally ill are housed in state and county facilities. Aside from a few doctors and nurses, they employ a large number of attendants, often chosen more for their strength and size rather than medical learning.",
    creditRating: {
      min: 8,
      max: 20,
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
      InvestigatorSkillTypes.dodge,
      InvestigatorSkillTypes.fighting,
      InvestigatorSkillTypes.firstAid,
      InvestigatorSkillTypes.listen,
      InvestigatorSkillTypes.psychology,
      InvestigatorSkillTypes.stealth,
    ],
    extraSkillTypes: 0,
    interpersonalSkills: 2,
    suggestedContacts: ["Medical staff", "Patients", "Relatives of patients"],
  },
  {
    name: "Athlete",
    description:
      "Probably plays in a professional baseball, football, cricket, or basketball team. This may be a major league team with a regular salary and national attention or—particularly in the case of 1920s baseball—one of many minor league teams, some of them owned and operated by major league owners. The latter pay barely enough to keep players fed and on the team. Successful professional athletes will enjoy a certain amount of celebrity within the arena of their expertise - more so in the present day where sporting heroes stand side by side with film stars on red carpets around the world.",
    creditRating: {
      min: 9,
      max: 70,
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
      InvestigatorSkillTypes.climb,
      InvestigatorSkillTypes.jump,
      InvestigatorSkillTypes.fighting,
      InvestigatorSkillTypes.swim,
      InvestigatorSkillTypes.throw,
    ],
    extraSkillTypes: 1,
    interpersonalSkills: 1,
    suggestedContacts: [
      "Sports personalities",
      "Sports writers",
      "Media stars",
    ],
  },
  {
    name: "Author (Lovecraftian)",
    description:
      "As distinct from the journalist, the author uses words to define and explore the human condition, especially the range of human emotions. Their labors are solitary and the rewards solipsistic: only a relative handful make much money in the present day, though in previous eras the trade once provided a regular living wage. The work habits of authors vary widely. Typically an author might spend months or years researching in preparation for a book, then withdrawing for periods of intense creation.",
    creditRating: {
      min: 9,
      max: 30,
    },
    skillPoints: [
      {
        type: InvestigatorStatTypes.education,
        multiplier: 4,
      },
    ],
    skills: [
      InvestigatorSkillTypes.art,
      InvestigatorSkillTypes.history,
      InvestigatorSkillTypes.libraryUse,
      InvestigatorSkillTypes.naturalWorld,
      InvestigatorSkillTypes.occult,
      InvestigatorSkillTypes.language,
      InvestigatorSkillTypes.psychology,
    ],
    extraSkillTypes: 1,
    interpersonalSkills: 0,
    suggestedContacts: ["Publishers", "Critics", "Historians"],
  },
  {
    name: "Bartender",
    description:
      "Normally not the owner of the bar, the bartender is everyone’s friend. For some it’s a career or their business, for many it's a means to an end. In the 1920s the profession is made illegal by the Prohibition Act; however, there’s no shortage of work for a bartender, as someone has to serve the drinks in the speakeasies and secret gin joints.",
    creditRating: {
      min: 8,
      max: 25,
    },
    skillPoints: [
      {
        type: InvestigatorStatTypes.education,
        multiplier: 2,
      },
      {
        type: InvestigatorStatTypes.appearance,
        multiplier: 2,
      },
    ],
    skills: [
      InvestigatorSkillTypes.accounting,
      InvestigatorSkillTypes.fighting,
      InvestigatorSkillTypes.listen,
      InvestigatorSkillTypes.spotHidden,
      InvestigatorSkillTypes.psychology,
    ],
    extraSkillTypes: 1,
    interpersonalSkills: 1,
    suggestedContacts: ["Regular customers", "Mafia"],
  },
  {
    name: "Big Game Hunter",
    description:
      'Big game hunters are skilled trackers and hunters who usually earn their living leading safaris for wealthy clients. Most are specialized in one part of the world, such as the Canadian woods, African plains, and other locales. Some hunters may work for the black market, capturing live exotic species for private collectors, or trading in illegal or morally objectionable animal products like skins, ivory, and the like—although in the 1920s such activities were more common and were permissible under most countries’ laws. Although the "great white hunter" is the quintessential type, others may be simply local indigenous people who escort hunters through the backwoods of the Yukon in search of moose or bear.',
    creditRating: {
      min: 20,
      max: 50,
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
      InvestigatorSkillTypes.firearmsRifle,
      InvestigatorSkillTypes.firearmsShotgun,
      InvestigatorSkillTypes.listen,
      InvestigatorSkillTypes.spotHidden,
      InvestigatorSkillTypes.naturalWorld,
      InvestigatorSkillTypes.navigate,
      InvestigatorSkillTypes.language,
      InvestigatorSkillTypes.survival,
      InvestigatorSkillTypes.science,
      InvestigatorSkillTypes.stealth,
      InvestigatorSkillTypes.track,
    ],
    extraSkillTypes: 0,
    interpersonalSkills: 0,
    suggestedContacts: [
      "Foreign government officials",
      "Game wardens",
      "Past clients",
      "Black market traders",
      "Zoo owners",
    ],
  },
];
