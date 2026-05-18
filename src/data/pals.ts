export interface PalStats {
  hp: number;
  attack: { melee: number, ranged: number };
  defense: number;
  speed: { ride: number, run: number, walk: number };
  stamina: number;
  support: number;
  food: number;
}

export interface WorkSuitability {
  kindling?: number;
  watering?: number;
  planting?: number;
  generating_electricity?: number;
  handiwork?: number;
  gathering?: number;
  lumbering?: number;
  mining?: number;
  medicine_production?: number;
  cooling?: number;
  transporting?: number;
  farming?: number;
}

export interface PalDrop {
  name: string;
  rate: number;
  min: number;
  max: number;
}

export interface PalSkill {
  name: string;
  level: number;
  element: string;
  cooltime: string;
  power: string;
  description: string;
}

export interface PalData {
  id: string; // Changed to string to support "100B" etc
  key: string;
  name: string;
  types: string[];
  stats: PalStats;
  suitability: WorkSuitability;
  breedingPower: number;
  description: string;
  image: string;
  drops?: PalDrop[];
  partnerSkill?: string;
  skills?: PalSkill[];
  isVariant?: boolean;
}

export const pals: PalData[] = [
  {
    "id": "1",
    "key": "Lamball",
    "name": "Lamball",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 70,
      "attack": {
        "melee": 70,
        "ranged": 70
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "handiwork": 1,
      "transporting": 1,
      "farming": 1
    },
    "breedingPower": 1470,
    "description": "A walk up a hill tends to end with this Pal tumbling back down.\r\nThis causes it to become dizzy and unable to move, making it easy to capture and kill.\r\nAs a result, this Pal has tumbled down to the very bottom of the food chain itself.",
    "image": "/images/pals/Lamball.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Roly Poly",
        "level": 1,
        "element": "Neutral",
        "cooltime": "1",
        "power": "35",
        "description": "Lamball's exclusive skill. Curls into a ball, rolling after any enemies in its way. Becomes dizzy and unable to move after the attack ends."
      },
      {
        "name": "Air Cannon",
        "level": 7,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Power Shot",
        "level": 15,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Implode",
        "level": 22,
        "element": "Neutral",
        "cooltime": "55",
        "power": "230",
        "description": "Risks its life to cause a violent explosion. Becomes incapacitated afterwards."
      },
      {
        "name": "Electric Ball",
        "level": 30,
        "element": "Electric",
        "cooltime": "9",
        "power": "50",
        "description": "Fires an electric ball that slowly pursues an enemy."
      },
      {
        "name": "Power Bomb",
        "level": 40,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Pal Blast",
        "level": 50,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      }
    ],
    "isVariant": false
  },
  {
    "id": "2",
    "key": "Cattiva",
    "name": "Cattiva",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 70,
      "attack": {
        "melee": 70,
        "ranged": 70
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "handiwork": 1,
      "gathering": 1,
      "mining": 1,
      "transporting": 1
    },
    "breedingPower": 1460,
    "description": "At a glance it appears full of confidence, but it is in fact weak and cowardly.\r\nBeing toyed with by a Cattiva is in many ways the greatest of disgraces.",
    "image": "/images/pals/Cattiva.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Punch Flurry",
        "level": 1,
        "element": "Neutral",
        "cooltime": "1",
        "power": "40",
        "description": "Cattiva's exclusive skill. Chases after enemies, swinging both arms and delivering a flurry of punches."
      },
      {
        "name": "Air Cannon",
        "level": 7,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Bog Blast",
        "level": 15,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Power Shot",
        "level": 22,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Wind Cutter",
        "level": 30,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Seed Machine Gun",
        "level": 40,
        "element": "Grass",
        "cooltime": "9",
        "power": "50",
        "description": "Fires a volley of hard seeds at enemies in front of it."
      },
      {
        "name": "Pal Blast",
        "level": 50,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      }
    ],
    "isVariant": false
  },
  {
    "id": "3",
    "key": "Chikipi",
    "name": "Chikipi",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 60,
      "attack": {
        "melee": 70,
        "ranged": 60
      },
      "defense": 60,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 70,
      "food": 100
    },
    "suitability": {
      "gathering": 1,
      "farming": 1
    },
    "breedingPower": 1500,
    "description": "Extremely weak and far too delicious.\r\nIt is one of the weakest Pals alongside Lamball .\r\nNo matter how many are hunted, they just keep appearing.",
    "image": "/images/pals/Chikipi.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Chicken Rush",
        "level": 1,
        "element": "Neutral",
        "cooltime": "1",
        "power": "30",
        "description": "Chikipi's exclusive skill. Flies at enemies in its sights, attacking them with its sharp beak."
      },
      {
        "name": "Air Cannon",
        "level": 7,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Power Shot",
        "level": 15,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Implode",
        "level": 22,
        "element": "Neutral",
        "cooltime": "55",
        "power": "230",
        "description": "Risks its life to cause a violent explosion. Becomes incapacitated afterwards."
      },
      {
        "name": "Grass Tornado",
        "level": 30,
        "element": "Grass",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Sand Tornado",
        "level": 40,
        "element": "Ground",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two sand tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Flare Storm",
        "level": 50,
        "element": "Fire",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two flaming tornadoes on either side before launching them at an enemy."
      }
    ],
    "isVariant": false
  },
  {
    "id": "4",
    "key": "Lifmunk",
    "name": "Lifmunk",
    "types": [
      "Grass"
    ],
    "stats": {
      "hp": 75,
      "attack": {
        "melee": 70,
        "ranged": 70
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 100
    },
    "suitability": {
      "planting": 1,
      "handiwork": 1,
      "gathering": 1,
      "lumbering": 1,
      "medicine_production": 1
    },
    "breedingPower": 1430,
    "description": "Intelligent as a five to seven-year-old human child. \r\nIt makes a wonderful partner, but there have been more than a few cases \r\nwhere they've killed their master after learning to use weapons.",
    "image": "/images/pals/Lifmunk.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Wind Cutter",
        "level": 1,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Air Cannon",
        "level": 7,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Power Shot",
        "level": 15,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Seed Machine Gun",
        "level": 22,
        "element": "Grass",
        "cooltime": "9",
        "power": "50",
        "description": "Fires a volley of hard seeds at enemies in front of it."
      },
      {
        "name": "Power Bomb",
        "level": 30,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Spine Vine",
        "level": 40,
        "element": "Grass",
        "cooltime": "25",
        "power": "95",
        "description": "Generates spiny thorns that chase an enemy along the ground, piercing them from below."
      },
      {
        "name": "Solar Blast",
        "level": 50,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "5",
    "key": "Foxparks",
    "name": "Foxparks",
    "types": [
      "Fire"
    ],
    "stats": {
      "hp": 65,
      "attack": {
        "melee": 70,
        "ranged": 75
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "kindling": 1
    },
    "breedingPower": 1400,
    "description": "It is unskilled at controlling fire from the moment it is born\r\nand tends to choke on the flames it breathes unintentionally. Foxparks sneezes are one of the leading causes of forest fires.",
    "image": "/images/pals/Foxparks.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ignis Blast",
        "level": 1,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Bog Blast",
        "level": 7,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Spirit Fire",
        "level": 15,
        "element": "Fire",
        "cooltime": "7",
        "power": "45",
        "description": "Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward."
      },
      {
        "name": "Flare Arrow",
        "level": 22,
        "element": "Fire",
        "cooltime": "10",
        "power": "55",
        "description": "Fires three flaming arrows in succession that home in on an enemy."
      },
      {
        "name": "Ignis Breath",
        "level": 30,
        "element": "Fire",
        "cooltime": "15",
        "power": "70",
        "description": "Shoots flames at an enemy, dealing continuous damage."
      },
      {
        "name": "Spirit Flame",
        "level": 40,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Fire Ball",
        "level": 50,
        "element": "Fire",
        "cooltime": "55",
        "power": "150",
        "description": "Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact."
      }
    ],
    "isVariant": false
  },
  {
    "id": "5B",
    "key": "Foxparks_Cryst",
    "name": "Foxparks Cryst",
    "types": [
      "Ice"
    ],
    "stats": {
      "hp": 65,
      "attack": {
        "melee": 70,
        "ranged": 80
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "cooling": 1
    },
    "breedingPower": 1305,
    "description": "It is unskilled at controlling cold air from the moment it is born\r\nand tends to choke on the frost it breathes unintentionally. \r\nWhen Foxparks Cryst catches a cold, its nasal discharge freezes, \r\nmaking it difficult to breathe and causing it to panic.",
    "image": "/images/pals/Foxparks_Cryst.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ice Missile",
        "level": 1,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Hydro Jet",
        "level": 7,
        "element": "Water",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a high speed ball of water at an enemy."
      },
      {
        "name": "Icicle Cutter",
        "level": 15,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Iceberg",
        "level": 22,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Crystal Breath",
        "level": 30,
        "element": "Ice",
        "cooltime": "22",
        "power": "90",
        "description": "Enshrouds an enemy in a frigid blast of air, dealing continuous damage."
      },
      {
        "name": "Icicle Bullet",
        "level": 40,
        "element": "Ice",
        "cooltime": "35",
        "power": "110",
        "description": "Generates multiple sharp ice blocks in the sky and fires them at the enemy."
      },
      {
        "name": "Blizzard Spike",
        "level": 50,
        "element": "Ice",
        "cooltime": "45",
        "power": "130",
        "description": "Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact."
      }
    ],
    "isVariant": true
  },
  {
    "id": "6",
    "key": "Fuack",
    "name": "Fuack",
    "types": [
      "Water"
    ],
    "stats": {
      "hp": 60,
      "attack": {
        "melee": 80,
        "ranged": 80
      },
      "defense": 60,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "watering": 1,
      "handiwork": 1,
      "transporting": 1
    },
    "breedingPower": 1330,
    "description": "Using its own body water, this Pal can create waves anywhere. \r\nIt body surfs when in a hurry, but the resulting speed often ends in a fatal collision.",
    "image": "/images/pals/Fuack.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Aqua Gun",
        "level": 1,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Power Shot",
        "level": 7,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Hydro Jet",
        "level": 15,
        "element": "Water",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a high speed ball of water at an enemy."
      },
      {
        "name": "Ice Missile",
        "level": 22,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Bubble Blast",
        "level": 30,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "Aqua Burst",
        "level": 40,
        "element": "Water",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of water and hurls it at an enemy."
      },
      {
        "name": "Hydro Laser",
        "level": 50,
        "element": "Water",
        "cooltime": "55",
        "power": "150",
        "description": "Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it."
      }
    ],
    "isVariant": false
  },
  {
    "id": "6B",
    "key": "Fuack_Ignis",
    "name": "Fuack Ignis",
    "types": [
      "Water",
      "Fire"
    ],
    "stats": {
      "hp": 60,
      "attack": {
        "melee": 100,
        "ranged": 85
      },
      "defense": 60,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "kindling": 1,
      "watering": 1,
      "handiwork": 1,
      "transporting": 1
    },
    "breedingPower": 1290,
    "description": "With a belly built for friction, this Pal sparks flames as it body surfs.\r\nBut when it gets carried away, it often ends up a rolling fireball.",
    "image": "/images/pals/Fuack_Ignis.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ignis Blast",
        "level": 1,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Spirit Fire",
        "level": 7,
        "element": "Fire",
        "cooltime": "7",
        "power": "45",
        "description": "Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward."
      },
      {
        "name": "Bubble Blast",
        "level": 15,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "Ignis Breath",
        "level": 22,
        "element": "Fire",
        "cooltime": "15",
        "power": "70",
        "description": "Shoots flames at an enemy, dealing continuous damage."
      },
      {
        "name": "Flame Wall",
        "level": 30,
        "element": "Fire",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a wall of flames at the enemy's location. The wall of flames will remain for a while, and deal damage to the enemies it touches."
      },
      {
        "name": "Hydro Slicer",
        "level": 40,
        "element": "Water",
        "cooltime": "45",
        "power": "130",
        "description": "Mows down the frontal area with a blast of compressed water. The area struck by the blast erupts with water after a short delay."
      },
      {
        "name": "Volcanic Rain",
        "level": 50,
        "element": "Fire",
        "cooltime": "45",
        "power": "130",
        "description": "Fires countless volcanic bombs into the sky. After a while, the bombs rain down around their originator."
      }
    ],
    "isVariant": true
  },
  {
    "id": "7",
    "key": "Sparkit",
    "name": "Sparkit",
    "types": [
      "Electric"
    ],
    "stats": {
      "hp": 60,
      "attack": {
        "melee": 60,
        "ranged": 75
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 80,
      "food": 150
    },
    "suitability": {
      "generating_electricity": 1,
      "handiwork": 1,
      "transporting": 1
    },
    "breedingPower": 1410,
    "description": "During the dry season,\r\nthis Pal is always on the verge of blowing a fuse.\r\nSparks can fly with even the slightest provocation,\r\neven amongst allies.",
    "image": "/images/pals/Sparkit.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Spark Blast",
        "level": 1,
        "element": "Electric",
        "cooltime": "2",
        "power": "30",
        "description": "Releases lightning orbs in a fan shape, spreading as they travel."
      },
      {
        "name": "Bog Blast",
        "level": 7,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Shockwave",
        "level": 15,
        "element": "Electric",
        "cooltime": "4",
        "power": "40",
        "description": "Quickly discharges electricity, shocking those around it."
      },
      {
        "name": "Electric Ball",
        "level": 22,
        "element": "Electric",
        "cooltime": "9",
        "power": "50",
        "description": "Fires an electric ball that slowly pursues an enemy."
      },
      {
        "name": "Tri-Lightning",
        "level": 30,
        "element": "Electric",
        "cooltime": "22",
        "power": "90",
        "description": "Generates lightning that strikes an enemy three times from above."
      },
      {
        "name": "Lightning Streak",
        "level": 40,
        "element": "Electric",
        "cooltime": "16",
        "power": "75",
        "description": "Generates a lightning bolt that moves forward in a line."
      },
      {
        "name": "Lightning Bolt",
        "level": 50,
        "element": "Electric",
        "cooltime": "55",
        "power": "150",
        "description": "Charges electric energy before blasting enemies with a powerful shock."
      }
    ],
    "isVariant": false
  },
  {
    "id": "8",
    "key": "Tanzee",
    "name": "Tanzee",
    "types": [
      "Grass"
    ],
    "stats": {
      "hp": 80,
      "attack": {
        "melee": 100,
        "ranged": 70
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "planting": 1,
      "handiwork": 1,
      "gathering": 1,
      "lumbering": 1,
      "transporting": 1
    },
    "breedingPower": 1250,
    "description": "Long ago, this Pal used long objects like tree branches as weapons.\r\nAfter coming into contact with humans, however,\r\nit found something slightly more effective: guns.",
    "image": "/images/pals/Tanzee.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Wind Cutter",
        "level": 1,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Bog Blast",
        "level": 7,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Seed Machine Gun",
        "level": 15,
        "element": "Grass",
        "cooltime": "9",
        "power": "50",
        "description": "Fires a volley of hard seeds at enemies in front of it."
      },
      {
        "name": "Seed Mine",
        "level": 22,
        "element": "Grass",
        "cooltime": "13",
        "power": "65",
        "description": "Launches a deadly seed. If it hits an enemy, the seed explodes."
      },
      {
        "name": "Stone Cannon",
        "level": 30,
        "element": "Ground",
        "cooltime": "15",
        "power": "70",
        "description": "Digs up a boulder and hurls it at an enemy."
      },
      {
        "name": "Grass Tornado",
        "level": 40,
        "element": "Grass",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Solar Blast",
        "level": 50,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "9",
    "key": "Rooby",
    "name": "Rooby",
    "types": [
      "Fire"
    ],
    "stats": {
      "hp": 75,
      "attack": {
        "melee": 100,
        "ranged": 70
      },
      "defense": 75,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "kindling": 1
    },
    "breedingPower": 1155,
    "description": "Wild Rooby surprisingly never get sick.\r\nEating one piece of charcoal a day, made by burning a branch,\r\nis the secret to its eternal health.",
    "image": "/images/pals/Rooby.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ignis Blast",
        "level": 1,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Power Shot",
        "level": 7,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Spirit Fire",
        "level": 15,
        "element": "Fire",
        "cooltime": "7",
        "power": "45",
        "description": "Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward."
      },
      {
        "name": "Flare Arrow",
        "level": 22,
        "element": "Fire",
        "cooltime": "10",
        "power": "55",
        "description": "Fires three flaming arrows in succession that home in on an enemy."
      },
      {
        "name": "Flare Storm",
        "level": 30,
        "element": "Fire",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two flaming tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Ignis Rage",
        "level": 40,
        "element": "Fire",
        "cooltime": "40",
        "power": "120",
        "description": "Infuses the surrounding ground with energy, causing it to explode after a set amount of time."
      },
      {
        "name": "Fire Ball",
        "level": 50,
        "element": "Fire",
        "cooltime": "55",
        "power": "150",
        "description": "Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact."
      }
    ],
    "isVariant": false
  },
  {
    "id": "10",
    "key": "Pengullet",
    "name": "Pengullet",
    "types": [
      "Water",
      "Ice"
    ],
    "stats": {
      "hp": 70,
      "attack": {
        "melee": 70,
        "ranged": 75
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "watering": 1,
      "handiwork": 1,
      "cooling": 1,
      "transporting": 1
    },
    "breedingPower": 1350,
    "description": "The feathers of this Pal have all but disappeared,\r\nbut sadly, its desire to fly has remained as strong as ever.\r\nEven now, it tries to fly again in any way it can.",
    "image": "/images/pals/Pengullet.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ice Missile",
        "level": 1,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Hydro Jet",
        "level": 7,
        "element": "Water",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a high speed ball of water at an enemy."
      },
      {
        "name": "Aqua Gun",
        "level": 15,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Icicle Cutter",
        "level": 22,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Iceberg",
        "level": 30,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Blizzard Spike",
        "level": 40,
        "element": "Ice",
        "cooltime": "45",
        "power": "130",
        "description": "Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact."
      },
      {
        "name": "Hydro Laser",
        "level": 50,
        "element": "Water",
        "cooltime": "55",
        "power": "150",
        "description": "Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it."
      }
    ],
    "isVariant": false
  },
  {
    "id": "10B",
    "key": "Pengullet_Lux",
    "name": "Pengullet Lux",
    "types": [
      "Water",
      "Electric"
    ],
    "stats": {
      "hp": 70,
      "attack": {
        "melee": 100,
        "ranged": 80
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "watering": 1,
      "generating_electricity": 2,
      "handiwork": 1,
      "transporting": 1
    },
    "breedingPower": 1310,
    "description": "The feathers of this Pal have all but disappeared, and it can no longer fly.\r\nYet its longing for the sky has turned to jealousy—\r\nso it harnessed electricity to strike down those who still soar.",
    "image": "/images/pals/Pengullet_Lux.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Thunder Spear",
        "level": 1,
        "element": "Electric",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high-speed lightning spear straight ahead towards the enemy."
      },
      {
        "name": "Electric Ball",
        "level": 7,
        "element": "Electric",
        "cooltime": "9",
        "power": "50",
        "description": "Fires an electric ball that slowly pursues an enemy."
      },
      {
        "name": "Bubble Blast",
        "level": 15,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "Splash",
        "level": 22,
        "element": "Water",
        "cooltime": "22",
        "power": "90",
        "description": "Generates a column of water that travels in a straight line."
      },
      {
        "name": "Aqua Burst",
        "level": 30,
        "element": "Water",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of water and hurls it at an enemy."
      },
      {
        "name": "TriSpark",
        "level": 40,
        "element": "Electric",
        "cooltime": "35",
        "power": "110",
        "description": "A high-speed lightning ball that flies in a straight line. Simultaneously fires slow lightning balls that track the enemy."
      },
      {
        "name": "Lightning Strike",
        "level": 50,
        "element": "Electric",
        "cooltime": "40",
        "power": "120",
        "description": "Acts as a lightning rod, calling down thunderbolts that electrocute the surrounding area."
      }
    ],
    "isVariant": true
  },
  {
    "id": "11",
    "key": "Penking",
    "name": "Penking",
    "types": [
      "Water",
      "Ice"
    ],
    "stats": {
      "hp": 95,
      "attack": {
        "melee": 70,
        "ranged": 95
      },
      "defense": 95,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 525
    },
    "suitability": {
      "watering": 2,
      "handiwork": 2,
      "mining": 2,
      "cooling": 2,
      "transporting": 2
    },
    "breedingPower": 520,
    "description": "Surprisingly, it is unrelated to Pengullet .\r\nHowever, since this Pal gets pampered as it pleases, \r\nfor now, it's doing its best to strut arrogantly.",
    "image": "/images/pals/Penking.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Aqua Gun",
        "level": 1,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Iceberg",
        "level": 7,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Emperor Slide",
        "level": 15,
        "element": "Ice",
        "cooltime": "10",
        "power": "70",
        "description": "Penking's exclusive skill. Lies on its belly while generating frozen air all around it before sliding at enemies at high speed."
      },
      {
        "name": "Crystal Breath",
        "level": 22,
        "element": "Ice",
        "cooltime": "22",
        "power": "90",
        "description": "Enshrouds an enemy in a frigid blast of air, dealing continuous damage."
      },
      {
        "name": "Aqua Burst",
        "level": 30,
        "element": "Water",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of water and hurls it at an enemy."
      },
      {
        "name": "Blizzard Spike",
        "level": 40,
        "element": "Ice",
        "cooltime": "45",
        "power": "130",
        "description": "Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact."
      },
      {
        "name": "Hydro Laser",
        "level": 50,
        "element": "Water",
        "cooltime": "55",
        "power": "150",
        "description": "Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it."
      }
    ],
    "isVariant": false
  },
  {
    "id": "11B",
    "key": "Penking_Lux",
    "name": "Penking Lux",
    "types": [
      "Water",
      "Electric"
    ],
    "stats": {
      "hp": 100,
      "attack": {
        "melee": 100,
        "ranged": 100
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 525
    },
    "suitability": {
      "watering": 2,
      "generating_electricity": 2,
      "handiwork": 2,
      "mining": 2,
      "transporting": 2
    },
    "breedingPower": 490,
    "description": "Its body changed color after gaining electricity to improve underwater hunting.\r\nAs a result, it lost the affection of Pengullet —\r\nbut strangely enough, it now has a loyal follower: Pengullet Lux .",
    "image": "/images/pals/Penking_Lux.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Thunder Spear",
        "level": 1,
        "element": "Electric",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high-speed lightning spear straight ahead towards the enemy."
      },
      {
        "name": "Plasma Funnel",
        "level": 7,
        "element": "Electric",
        "cooltime": "13",
        "power": "65",
        "description": "Creates two balls of electric energy that fire numerous lightning orbs at enemies."
      },
      {
        "name": "Bubble Blast",
        "level": 15,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "TriSpark",
        "level": 22,
        "element": "Electric",
        "cooltime": "35",
        "power": "110",
        "description": "A high-speed lightning ball that flies in a straight line. Simultaneously fires slow lightning balls that track the enemy."
      },
      {
        "name": "Thunderslide",
        "level": 30,
        "element": "Electric",
        "cooltime": "35",
        "power": "145",
        "description": "Penking Lux's exclusive skill. Lies on its belly while generating electric charge all around it before sliding at enemies at high speed."
      },
      {
        "name": "Aqua Surge",
        "level": 40,
        "element": "Water",
        "cooltime": "56",
        "power": "160",
        "description": "Generates waves that surge around the enemy from all sides. They converge and explode at the center, erupting into a column of water."
      },
      {
        "name": "Thunderstorm",
        "level": 50,
        "element": "Electric",
        "cooltime": "60",
        "power": "160",
        "description": "Generates a huge tornado of lightning that moves slowly towards the enemy."
      }
    ],
    "isVariant": true
  },
  {
    "id": "12",
    "key": "Jolthog",
    "name": "Jolthog",
    "types": [
      "Electric"
    ],
    "stats": {
      "hp": 70,
      "attack": {
        "melee": 70,
        "ranged": 75
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "generating_electricity": 1
    },
    "breedingPower": 1370,
    "description": "It releases the electricity stored in its body when under attack.\r\nThe voltage it generates exceeds 10 million volts,\r\nmaking it more lethal than any conventional heavy firearms when thrown.",
    "image": "/images/pals/Jolthog.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Shockwave",
        "level": 1,
        "element": "Electric",
        "cooltime": "4",
        "power": "40",
        "description": "Quickly discharges electricity, shocking those around it."
      },
      {
        "name": "Power Shot",
        "level": 7,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Electric Ball",
        "level": 15,
        "element": "Electric",
        "cooltime": "9",
        "power": "50",
        "description": "Fires an electric ball that slowly pursues an enemy."
      },
      {
        "name": "Power Bomb",
        "level": 22,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Tri-Lightning",
        "level": 30,
        "element": "Electric",
        "cooltime": "22",
        "power": "90",
        "description": "Generates lightning that strikes an enemy three times from above."
      },
      {
        "name": "Lightning Streak",
        "level": 40,
        "element": "Electric",
        "cooltime": "16",
        "power": "75",
        "description": "Generates a lightning bolt that moves forward in a line."
      },
      {
        "name": "Lightning Bolt",
        "level": 50,
        "element": "Electric",
        "cooltime": "55",
        "power": "150",
        "description": "Charges electric energy before blasting enemies with a powerful shock."
      }
    ],
    "isVariant": false
  },
  {
    "id": "12B",
    "key": "Jolthog_Cryst",
    "name": "Jolthog Cryst",
    "types": [
      "Ice"
    ],
    "stats": {
      "hp": 70,
      "attack": {
        "melee": 70,
        "ranged": 75
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "cooling": 1
    },
    "breedingPower": 1360,
    "description": "It releases the cold air stored in its body when under attack. \r\nThe frigid blast it radiates is cold enough to freeze the surrounding air \r\nand easily pierces through any attacker's body.",
    "image": "/images/pals/Jolthog_Cryst.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ice Missile",
        "level": 1,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Power Shot",
        "level": 7,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Iceberg",
        "level": 15,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Power Bomb",
        "level": 22,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Icicle Cutter",
        "level": 30,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Crystal Breath",
        "level": 40,
        "element": "Ice",
        "cooltime": "22",
        "power": "90",
        "description": "Enshrouds an enemy in a frigid blast of air, dealing continuous damage."
      },
      {
        "name": "Blizzard Spike",
        "level": 50,
        "element": "Ice",
        "cooltime": "45",
        "power": "130",
        "description": "Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact."
      }
    ],
    "isVariant": true
  },
  {
    "id": "13",
    "key": "Gumoss",
    "name": "Gumoss",
    "types": [
      "Grass",
      "Ground"
    ],
    "stats": {
      "hp": 70,
      "attack": {
        "melee": 100,
        "ranged": 70
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 100
    },
    "suitability": {
      "planting": 1
    },
    "breedingPower": 1240,
    "description": "A strange Pal with a body resembling tree sap. \r\nIt gradually loses strength if it has nothing to cover \r\nits body with, eventually rotting away.",
    "image": "/images/pals/Gumoss.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Bog Blast",
        "level": 1,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Wind Cutter",
        "level": 7,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Stone Blast",
        "level": 15,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Seed Machine Gun",
        "level": 22,
        "element": "Grass",
        "cooltime": "9",
        "power": "50",
        "description": "Fires a volley of hard seeds at enemies in front of it."
      },
      {
        "name": "Seed Mine",
        "level": 30,
        "element": "Grass",
        "cooltime": "13",
        "power": "65",
        "description": "Launches a deadly seed. If it hits an enemy, the seed explodes."
      },
      {
        "name": "Sand Tornado",
        "level": 40,
        "element": "Ground",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two sand tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Solar Blast",
        "level": 50,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "14",
    "key": "Vixy",
    "name": "Vixy",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 70,
      "attack": {
        "melee": 70,
        "ranged": 70
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 140,
      "food": 100
    },
    "suitability": {
      "gathering": 1,
      "farming": 1
    },
    "breedingPower": 1450,
    "description": "The idol of Palpagos Island.\r\nIf you bully a Vixy ,\r\nyou best be prepared to become enemies with the whole world.",
    "image": "/images/pals/Vixy.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Bog Blast",
        "level": 7,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Power Shot",
        "level": 15,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Wind Cutter",
        "level": 22,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Seed Machine Gun",
        "level": 30,
        "element": "Grass",
        "cooltime": "9",
        "power": "50",
        "description": "Fires a volley of hard seeds at enemies in front of it."
      },
      {
        "name": "Power Bomb",
        "level": 40,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Pal Blast",
        "level": 50,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      }
    ],
    "isVariant": false
  },
  {
    "id": "15",
    "key": "Hoocrates",
    "name": "Hoocrates",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 70,
      "attack": {
        "melee": 70,
        "ranged": 70
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "gathering": 1
    },
    "breedingPower": 1390,
    "description": "Often lost in thought, it sometimes\r\nfinds it difficult to sleep.\r\n|I think, therefore I am.|",
    "image": "/images/pals/Hoocrates.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Dark Ball",
        "level": 7,
        "element": "Dark",
        "cooltime": "4",
        "power": "40",
        "description": "Unleashes a sphere of darkness that slowly tracks down an enemy."
      },
      {
        "name": "Shadow Burst",
        "level": 15,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Sand Tornado",
        "level": 22,
        "element": "Ground",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two sand tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Spirit Flame",
        "level": 30,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Nightmare Ball",
        "level": 40,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "16",
    "key": "Teafant",
    "name": "Teafant",
    "types": [
      "Water"
    ],
    "stats": {
      "hp": 70,
      "attack": {
        "melee": 70,
        "ranged": 60
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "watering": 1
    },
    "breedingPower": 1490,
    "description": "Large amounts of water pour from what is thought to be its nose,\r\nthough some say that it is, in fact, just snot.\r\nThis has sparked a fierce debate among Pal scholars.",
    "image": "/images/pals/Teafant.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Aqua Gun",
        "level": 1,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Hydro Jet",
        "level": 7,
        "element": "Water",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a high speed ball of water at an enemy."
      },
      {
        "name": "Bog Blast",
        "level": 15,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Bubble Blast",
        "level": 22,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "Acid Rain",
        "level": 30,
        "element": "Water",
        "cooltime": "18",
        "power": "80",
        "description": "Creates acidic clouds that pour down acid rain on enemies."
      },
      {
        "name": "Aqua Burst",
        "level": 40,
        "element": "Water",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of water and hurls it at an enemy."
      },
      {
        "name": "Hydro Laser",
        "level": 50,
        "element": "Water",
        "cooltime": "55",
        "power": "150",
        "description": "Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it."
      }
    ],
    "isVariant": false
  },
  {
    "id": "17",
    "key": "Depresso",
    "name": "Depresso",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 70,
      "attack": {
        "melee": 70,
        "ranged": 70
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "handiwork": 1,
      "mining": 1,
      "transporting": 1
    },
    "breedingPower": 1380,
    "description": "It has few friends because of the perpetually grouchy look on its face,\r\nbut it is in fact kindhearted.\r\nSome have seen it feeding Vixy who have strayed from their pack.",
    "image": "/images/pals/Depresso.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Poison Blast",
        "level": 1,
        "element": "Dark",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls poison sludge at an enemy."
      },
      {
        "name": "Bog Blast",
        "level": 7,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Dark Ball",
        "level": 15,
        "element": "Dark",
        "cooltime": "4",
        "power": "40",
        "description": "Unleashes a sphere of darkness that slowly tracks down an enemy."
      },
      {
        "name": "Ice Missile",
        "level": 22,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Shadow Burst",
        "level": 30,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Nightmare Ball",
        "level": 40,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "18",
    "key": "Cremis",
    "name": "Cremis",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 70,
      "attack": {
        "melee": 100,
        "ranged": 70
      },
      "defense": 75,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "gathering": 1,
      "farming": 1
    },
    "breedingPower": 1455,
    "description": "Compared to Lamball , it has finer wool\r\nand a temperament more suited for domestication.\r\nHowever, it has historically always been kept as a pet.\r\nCuteness is considered a virtue.",
    "image": "/images/pals/Cremis.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Bog Blast",
        "level": 7,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Spark Blast",
        "level": 15,
        "element": "Electric",
        "cooltime": "2",
        "power": "30",
        "description": "Releases lightning orbs in a fan shape, spreading as they travel."
      },
      {
        "name": "Power Shot",
        "level": 22,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Shockwave",
        "level": 30,
        "element": "Electric",
        "cooltime": "4",
        "power": "40",
        "description": "Quickly discharges electricity, shocking those around it."
      },
      {
        "name": "Power Bomb",
        "level": 40,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Lightning Bolt",
        "level": 50,
        "element": "Electric",
        "cooltime": "55",
        "power": "150",
        "description": "Charges electric energy before blasting enemies with a powerful shock."
      }
    ],
    "isVariant": false
  },
  {
    "id": "19",
    "key": "Daedream",
    "name": "Daedream",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 70,
      "attack": {
        "melee": 100,
        "ranged": 75
      },
      "defense": 60,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "handiwork": 1,
      "gathering": 1,
      "transporting": 1
    },
    "breedingPower": 1230,
    "description": "It puts those it is interested in to sleep and shows them\r\nan endless stream of happy dreams.\r\nThose who fall under its spell are never to wake until death takes them.",
    "image": "/images/pals/Daedream.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Dark Ball",
        "level": 1,
        "element": "Dark",
        "cooltime": "4",
        "power": "40",
        "description": "Unleashes a sphere of darkness that slowly tracks down an enemy."
      },
      {
        "name": "Poison Blast",
        "level": 7,
        "element": "Dark",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls poison sludge at an enemy."
      },
      {
        "name": "Shadow Burst",
        "level": 15,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Crystal Breath",
        "level": 22,
        "element": "Ice",
        "cooltime": "22",
        "power": "90",
        "description": "Enshrouds an enemy in a frigid blast of air, dealing continuous damage."
      },
      {
        "name": "Spirit Flame",
        "level": 30,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Nightmare Ball",
        "level": 40,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "20",
    "key": "Rushoar",
    "name": "Rushoar",
    "types": [
      "Ground"
    ],
    "stats": {
      "hp": 80,
      "attack": {
        "melee": 100,
        "ranged": 70
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "mining": 1
    },
    "breedingPower": 1130,
    "description": "Being an extremely aggressive Pal, it often picks fights before gauging its opponents' strength. \r\nThough small, its powerful charge can even send boulders flying.",
    "image": "/images/pals/Rushoar.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Reckless Charge",
        "level": 1,
        "element": "Ground",
        "cooltime": "2",
        "power": "55",
        "description": "Rushoar's exclusive skill. Takes aim at a foe and rushes at them with a fierce charge."
      },
      {
        "name": "Bog Blast",
        "level": 7,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Power Shot",
        "level": 15,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Stone Blast",
        "level": 22,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Power Bomb",
        "level": 30,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Rock Lance",
        "level": 40,
        "element": "Ground",
        "cooltime": "55",
        "power": "150",
        "description": "Generates a sharp rock spear under an enemy."
      },
      {
        "name": "Pal Blast",
        "level": 50,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      }
    ],
    "isVariant": false
  },
  {
    "id": "21",
    "key": "Nox",
    "name": "Nox",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 75,
      "attack": {
        "melee": 70,
        "ranged": 85
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 140,
      "food": 150
    },
    "suitability": {
      "gathering": 1
    },
    "breedingPower": 1180,
    "description": "If you find Nox hair in your bedding, you should \r\nleave it where it lays and leave immediately. \r\nPicking it up is a one-way-ticket to a never ending night.",
    "image": "/images/pals/Nox.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Dark Ball",
        "level": 7,
        "element": "Dark",
        "cooltime": "4",
        "power": "40",
        "description": "Unleashes a sphere of darkness that slowly tracks down an enemy."
      },
      {
        "name": "Shadow Burst",
        "level": 15,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Power Bomb",
        "level": 22,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Spirit Flame",
        "level": 30,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Nightmare Ball",
        "level": 40,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "22",
    "key": "Fuddler",
    "name": "Fuddler",
    "types": [
      "Ground"
    ],
    "stats": {
      "hp": 65,
      "attack": {
        "melee": 100,
        "ranged": 80
      },
      "defense": 50,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "handiwork": 1,
      "mining": 1,
      "transporting": 1
    },
    "breedingPower": 1220,
    "description": "Its large claws boast of diamond-like hardness. \r\nHowever, sharpening these claws consumes most of its energy, \r\nleading it to sometimes spending entire days doing nothing else.",
    "image": "/images/pals/Fuddler.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Bog Blast",
        "level": 1,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Power Shot",
        "level": 7,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Stone Blast",
        "level": 15,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Stone Cannon",
        "level": 22,
        "element": "Ground",
        "cooltime": "15",
        "power": "70",
        "description": "Digs up a boulder and hurls it at an enemy."
      },
      {
        "name": "Power Bomb",
        "level": 30,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Sand Tornado",
        "level": 40,
        "element": "Ground",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two sand tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Rock Lance",
        "level": 50,
        "element": "Ground",
        "cooltime": "55",
        "power": "150",
        "description": "Generates a sharp rock spear under an enemy."
      }
    ],
    "isVariant": false
  },
  {
    "id": "23",
    "key": "Killamari",
    "name": "Killamari",
    "types": [
      "Dark",
      "Water"
    ],
    "stats": {
      "hp": 60,
      "attack": {
        "melee": 100,
        "ranged": 60
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "watering": 1,
      "gathering": 1,
      "transporting": 2
    },
    "breedingPower": 1290,
    "description": "It wraps itself around an enemy's head, sucking out their insides. \r\nPal mummies are occasionally found, but these are in fact Killamari victims.",
    "image": "/images/pals/Killamari.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Hydro Jet",
        "level": 1,
        "element": "Water",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a high speed ball of water at an enemy."
      },
      {
        "name": "Poison Blast",
        "level": 7,
        "element": "Dark",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls poison sludge at an enemy."
      },
      {
        "name": "Dark Ball",
        "level": 15,
        "element": "Dark",
        "cooltime": "4",
        "power": "40",
        "description": "Unleashes a sphere of darkness that slowly tracks down an enemy."
      },
      {
        "name": "Shadow Burst",
        "level": 22,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Acid Rain",
        "level": 30,
        "element": "Water",
        "cooltime": "18",
        "power": "80",
        "description": "Creates acidic clouds that pour down acid rain on enemies."
      },
      {
        "name": "Nightmare Ball",
        "level": 40,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "23B",
    "key": "Killamari_Primo",
    "name": "Killamari Primo",
    "types": [
      "Neutral",
      "Water"
    ],
    "stats": {
      "hp": 70,
      "attack": {
        "melee": 100,
        "ranged": 60
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "watering": 1,
      "gathering": 1,
      "transporting": 2
    },
    "breedingPower": 1250,
    "description": "It sinks its fangs into the enemy’s neck, draining every last drop of blood. \r\nWhen two Killamari Primo s latch onto each other, \r\nthey become locked in a relentless struggle—each trying to suck the other dry until one withers away.",
    "image": "/images/pals/Killamari_Primo.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Power Shot",
        "level": 7,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Bubble Blast",
        "level": 15,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "Power Bomb",
        "level": 22,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Acid Rain",
        "level": 30,
        "element": "Water",
        "cooltime": "18",
        "power": "80",
        "description": "Creates acidic clouds that pour down acid rain on enemies."
      },
      {
        "name": "Torrential Blast",
        "level": 40,
        "element": "Water",
        "cooltime": "35",
        "power": "110",
        "description": "Fires a high-pressure stream of water forward. After a short delay, the stream branches off to the left and right."
      },
      {
        "name": "Hydro Laser",
        "level": 50,
        "element": "Water",
        "cooltime": "55",
        "power": "150",
        "description": "Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it."
      }
    ],
    "isVariant": false
  },
  {
    "id": "24",
    "key": "Mau",
    "name": "Mau",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 70,
      "attack": {
        "melee": 70,
        "ranged": 60
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 100
    },
    "suitability": {
      "farming": 1
    },
    "breedingPower": 1480,
    "description": "Its hard tail does not deteriorate even when cut off.\r\nSome believed these severed tails bring good luck,\r\nbut for the innumerable Mau who were\r\npoached as a result, they were anything but.",
    "image": "/images/pals/Mau.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Bog Blast",
        "level": 1,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Dark Ball",
        "level": 7,
        "element": "Dark",
        "cooltime": "4",
        "power": "40",
        "description": "Unleashes a sphere of darkness that slowly tracks down an enemy."
      },
      {
        "name": "Shadow Burst",
        "level": 15,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Sand Tornado",
        "level": 22,
        "element": "Ground",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two sand tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Spirit Flame",
        "level": 30,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Nightmare Ball",
        "level": 40,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "24B",
    "key": "Mau_Cryst",
    "name": "Mau Cryst",
    "types": [
      "Ice"
    ],
    "stats": {
      "hp": 70,
      "attack": {
        "melee": 70,
        "ranged": 65
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 100
    },
    "suitability": {
      "cooling": 1,
      "farming": 1
    },
    "breedingPower": 1440,
    "description": "Its crystalline tail is beautiful, but shatters when this Pal dies.\r\nSome believe it is good luck to raise them,\r\nso Mau Cryst in captivity are treated with great care.",
    "image": "/images/pals/Mau_Cryst.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ice Missile",
        "level": 1,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Air Cannon",
        "level": 7,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Bog Blast",
        "level": 15,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Icicle Cutter",
        "level": 22,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Iceberg",
        "level": 30,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Crystal Breath",
        "level": 40,
        "element": "Ice",
        "cooltime": "22",
        "power": "90",
        "description": "Enshrouds an enemy in a frigid blast of air, dealing continuous damage."
      },
      {
        "name": "Blizzard Spike",
        "level": 50,
        "element": "Ice",
        "cooltime": "45",
        "power": "130",
        "description": "Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact."
      }
    ],
    "isVariant": true
  },
  {
    "id": "25",
    "key": "Celaray",
    "name": "Celaray",
    "types": [
      "Water"
    ],
    "stats": {
      "hp": 80,
      "attack": {
        "melee": 100,
        "ranged": 70
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "watering": 1,
      "transporting": 1
    },
    "breedingPower": 870,
    "description": "Riding the wind, this Pal travels where it pleases. \r\nShould it find a partner along the way, \r\nthe encounter will mark its journey's end.",
    "image": "/images/pals/Celaray.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Hydro Jet",
        "level": 1,
        "element": "Water",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a high speed ball of water at an enemy."
      },
      {
        "name": "Aqua Gun",
        "level": 7,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Power Shot",
        "level": 15,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Bubble Blast",
        "level": 22,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "Seed Machine Gun",
        "level": 30,
        "element": "Grass",
        "cooltime": "9",
        "power": "50",
        "description": "Fires a volley of hard seeds at enemies in front of it."
      },
      {
        "name": "Aqua Burst",
        "level": 40,
        "element": "Water",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of water and hurls it at an enemy."
      },
      {
        "name": "Hydro Laser",
        "level": 50,
        "element": "Water",
        "cooltime": "55",
        "power": "150",
        "description": "Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it."
      }
    ],
    "isVariant": false
  },
  {
    "id": "25B",
    "key": "Celaray_Lux",
    "name": "Celaray Lux",
    "types": [
      "Water",
      "Electric"
    ],
    "stats": {
      "hp": 80,
      "attack": {
        "melee": 100,
        "ranged": 75
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "watering": 1,
      "generating_electricity": 1,
      "transporting": 1
    },
    "breedingPower": 830,
    "description": "Its flashy patterns help it attract a partner.\r\nBut after a long history of electrocution incidents involving Celaray Lux ,\r\nyellow-and-black stripes are now seen across the island as a sign of danger.",
    "image": "/images/pals/Celaray_Lux.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Thunder Spear",
        "level": 1,
        "element": "Electric",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high-speed lightning spear straight ahead towards the enemy."
      },
      {
        "name": "Shockwave",
        "level": 7,
        "element": "Electric",
        "cooltime": "4",
        "power": "40",
        "description": "Quickly discharges electricity, shocking those around it."
      },
      {
        "name": "Bubble Blast",
        "level": 15,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "Lightning Streak",
        "level": 22,
        "element": "Electric",
        "cooltime": "16",
        "power": "75",
        "description": "Generates a lightning bolt that moves forward in a line."
      },
      {
        "name": "Splash",
        "level": 30,
        "element": "Water",
        "cooltime": "22",
        "power": "90",
        "description": "Generates a column of water that travels in a straight line."
      },
      {
        "name": "Torrential Blast",
        "level": 40,
        "element": "Water",
        "cooltime": "35",
        "power": "110",
        "description": "Fires a high-pressure stream of water forward. After a short delay, the stream branches off to the left and right."
      },
      {
        "name": "Lightning Bolt",
        "level": 50,
        "element": "Electric",
        "cooltime": "55",
        "power": "150",
        "description": "Charges electric energy before blasting enemies with a powerful shock."
      }
    ],
    "isVariant": true
  },
  {
    "id": "26",
    "key": "Direhowl",
    "name": "Direhowl",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 80,
      "attack": {
        "melee": 110,
        "ranged": 90
      },
      "defense": 75,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "gathering": 1
    },
    "breedingPower": 1060,
    "description": "Long ago Direhowl would hunt alongside humans\r\nbut over the years this bond faded.",
    "image": "/images/pals/Direhowl.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Fierce Fang",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "45",
        "description": "Direhowl's exclusive skill. Swiftly leaps at an enemy and bites into them."
      },
      {
        "name": "Bog Blast",
        "level": 7,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Air Cannon",
        "level": 15,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Power Shot",
        "level": 22,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Ignis Blast",
        "level": 30,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Power Bomb",
        "level": 40,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Pal Blast",
        "level": 50,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      }
    ],
    "isVariant": false
  },
  {
    "id": "27",
    "key": "Tocotoco",
    "name": "Tocotoco",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 60,
      "attack": {
        "melee": 80,
        "ranged": 75
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 70,
      "food": 150
    },
    "suitability": {
      "gathering": 1
    },
    "breedingPower": 1340,
    "description": "A frightening Pal that produces exploding eggs. \r\nIt often fires these eggs from its rear end as a form of defense, \r\nbut when spent, the Pal itself explodes.",
    "image": "/images/pals/Tocotoco.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Implode",
        "level": 1,
        "element": "Neutral",
        "cooltime": "55",
        "power": "230",
        "description": "Risks its life to cause a violent explosion. Becomes incapacitated afterwards."
      },
      {
        "name": "Air Cannon",
        "level": 7,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Power Shot",
        "level": 15,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Megaton Implode",
        "level": 22,
        "element": "Neutral",
        "cooltime": "55",
        "power": "500",
        "description": "Risks life to cause a massive explosion. Those who perish for their duty become glistening stars in the night sky."
      },
      {
        "name": "Sand Tornado",
        "level": 30,
        "element": "Ground",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two sand tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Power Bomb",
        "level": 40,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Pal Blast",
        "level": 50,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      }
    ],
    "isVariant": false
  },
  {
    "id": "28",
    "key": "Flopie",
    "name": "Flopie",
    "types": [
      "Grass"
    ],
    "stats": {
      "hp": 75,
      "attack": {
        "melee": 100,
        "ranged": 65
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "planting": 1,
      "handiwork": 1,
      "gathering": 1,
      "medicine_production": 1,
      "transporting": 1
    },
    "breedingPower": 1280,
    "description": "It prefers places that have an abundance of vegetation, \r\nbut hay fever has apparently become a problem for Flopie as of late.",
    "image": "/images/pals/Flopie.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Wind Cutter",
        "level": 1,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Air Cannon",
        "level": 7,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Hydro Jet",
        "level": 15,
        "element": "Water",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a high speed ball of water at an enemy."
      },
      {
        "name": "Seed Machine Gun",
        "level": 22,
        "element": "Grass",
        "cooltime": "9",
        "power": "50",
        "description": "Fires a volley of hard seeds at enemies in front of it."
      },
      {
        "name": "Bubble Blast",
        "level": 30,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "Grass Tornado",
        "level": 40,
        "element": "Grass",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Solar Blast",
        "level": 50,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "29",
    "key": "Mozzarina",
    "name": "Mozzarina",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 100,
        "ranged": 50
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "farming": 1
    },
    "breedingPower": 910,
    "description": "Milk pours from this Pal like water from an open faucet, regardless of its gender.\r\nIt's truly a mystery of life, although this mystery may be better left unsolved.",
    "image": "/images/pals/Mozzarina.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Power Shot",
        "level": 1,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Bog Blast",
        "level": 7,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Air Cannon",
        "level": 15,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Stone Blast",
        "level": 22,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Stone Cannon",
        "level": 30,
        "element": "Ground",
        "cooltime": "15",
        "power": "70",
        "description": "Digs up a boulder and hurls it at an enemy."
      },
      {
        "name": "Power Bomb",
        "level": 40,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Pal Blast",
        "level": 50,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      }
    ],
    "isVariant": false
  },
  {
    "id": "30",
    "key": "Bristla",
    "name": "Bristla",
    "types": [
      "Grass"
    ],
    "stats": {
      "hp": 80,
      "attack": {
        "melee": 80,
        "ranged": 80
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 350
    },
    "suitability": {
      "planting": 1,
      "handiwork": 1,
      "gathering": 1,
      "medicine_production": 2,
      "transporting": 1
    },
    "breedingPower": 1320,
    "description": "This prickly Pal's thorns are highly poisonous.\r\nIt is friendly with Cinnamoth and only smiles\r\nwhile a Cinnamoth is drinking its nectar.",
    "image": "/images/pals/Bristla.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Wind Cutter",
        "level": 1,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Seed Machine Gun",
        "level": 7,
        "element": "Grass",
        "cooltime": "9",
        "power": "50",
        "description": "Fires a volley of hard seeds at enemies in front of it."
      },
      {
        "name": "Ice Missile",
        "level": 15,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Grass Tornado",
        "level": 22,
        "element": "Grass",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Iceberg",
        "level": 30,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Spine Vine",
        "level": 40,
        "element": "Grass",
        "cooltime": "25",
        "power": "95",
        "description": "Generates spiny thorns that chase an enemy along the ground, piercing them from below."
      },
      {
        "name": "Solar Blast",
        "level": 50,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "31",
    "key": "Gobfin",
    "name": "Gobfin",
    "types": [
      "Water"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 90,
        "ranged": 90
      },
      "defense": 75,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "watering": 2,
      "handiwork": 1,
      "transporting": 1
    },
    "breedingPower": 1090,
    "description": "Long ago, it was a giant and powerful aquatic Pal.\r\nHowever, as food became scarce, it evolved to live on land.\r\nSince walking requires much energy, it gradually became smaller\r\nand is now a small and puny Pal.",
    "image": "/images/pals/Gobfin.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Hydro Jet",
        "level": 1,
        "element": "Water",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a high speed ball of water at an enemy."
      },
      {
        "name": "Power Shot",
        "level": 7,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Aqua Gun",
        "level": 15,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Bubble Blast",
        "level": 22,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "Icicle Cutter",
        "level": 30,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Aqua Burst",
        "level": 40,
        "element": "Water",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of water and hurls it at an enemy."
      },
      {
        "name": "Hydro Laser",
        "level": 50,
        "element": "Water",
        "cooltime": "55",
        "power": "150",
        "description": "Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it."
      }
    ],
    "isVariant": false
  },
  {
    "id": "31B",
    "key": "Gobfin_Ignis",
    "name": "Gobfin Ignis",
    "types": [
      "Fire"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 90,
        "ranged": 90
      },
      "defense": 75,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "kindling": 2,
      "handiwork": 1,
      "transporting": 1
    },
    "breedingPower": 1100,
    "description": "Long ago, it was a giant and powerful aquatic Pal.\r\nHowever, as food became scarce, it evolved to live on land.\r\nSince walking burns many calories, it astonishingly awakened its power to control fire!",
    "image": "/images/pals/Gobfin_Ignis.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ignis Blast",
        "level": 1,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Power Shot",
        "level": 7,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Spirit Fire",
        "level": 15,
        "element": "Fire",
        "cooltime": "7",
        "power": "45",
        "description": "Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward."
      },
      {
        "name": "Flare Arrow",
        "level": 22,
        "element": "Fire",
        "cooltime": "10",
        "power": "55",
        "description": "Fires three flaming arrows in succession that home in on an enemy."
      },
      {
        "name": "Lightning Streak",
        "level": 30,
        "element": "Electric",
        "cooltime": "16",
        "power": "75",
        "description": "Generates a lightning bolt that moves forward in a line."
      },
      {
        "name": "Fire Ball",
        "level": 40,
        "element": "Fire",
        "cooltime": "55",
        "power": "150",
        "description": "Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact."
      },
      {
        "name": "Ignis Rage",
        "level": 50,
        "element": "Fire",
        "cooltime": "40",
        "power": "120",
        "description": "Infuses the surrounding ground with energy, causing it to explode after a set amount of time."
      }
    ],
    "isVariant": true
  },
  {
    "id": "32",
    "key": "Hangyu",
    "name": "Hangyu",
    "types": [
      "Ground"
    ],
    "stats": {
      "hp": 80,
      "attack": {
        "melee": 70,
        "ranged": 70
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "handiwork": 1,
      "gathering": 1,
      "transporting": 2
    },
    "breedingPower": 1420,
    "description": "Its gigantic arms can rip apart even iron.\r\nAs a particularly cruel form of execution, serious criminals\r\nwould be strung up in a public square, and a Hangyu would tear the skin right from their bones.",
    "image": "/images/pals/Hangyu.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Bog Blast",
        "level": 1,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Air Cannon",
        "level": 7,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Wind Cutter",
        "level": 15,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Power Shot",
        "level": 22,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Power Bomb",
        "level": 30,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Sand Tornado",
        "level": 40,
        "element": "Ground",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two sand tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Rock Lance",
        "level": 50,
        "element": "Ground",
        "cooltime": "55",
        "power": "150",
        "description": "Generates a sharp rock spear under an enemy."
      }
    ],
    "isVariant": false
  },
  {
    "id": "32B",
    "key": "Hangyu_Cryst",
    "name": "Hangyu Cryst",
    "types": [
      "Ice"
    ],
    "stats": {
      "hp": 80,
      "attack": {
        "melee": 70,
        "ranged": 80
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "handiwork": 1,
      "gathering": 1,
      "cooling": 1,
      "transporting": 2
    },
    "breedingPower": 1422,
    "description": "Its gigantic arms can tear through blocks of ice.\r\nThere were times when great sinners were tied in the town square\r\nand had their hair torn out by Hangyu Cryst as a brutal form of public humiliation.",
    "image": "/images/pals/Hangyu_Cryst.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Ice Missile",
        "level": 7,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Power Shot",
        "level": 15,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Icicle Cutter",
        "level": 22,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Iceberg",
        "level": 30,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Crystal Breath",
        "level": 40,
        "element": "Ice",
        "cooltime": "22",
        "power": "90",
        "description": "Enshrouds an enemy in a frigid blast of air, dealing continuous damage."
      },
      {
        "name": "Blizzard Spike",
        "level": 50,
        "element": "Ice",
        "cooltime": "45",
        "power": "130",
        "description": "Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact."
      }
    ],
    "isVariant": true
  },
  {
    "id": "33",
    "key": "Mossanda",
    "name": "Mossanda",
    "types": [
      "Grass"
    ],
    "stats": {
      "hp": 100,
      "attack": {
        "melee": 100,
        "ranged": 90
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 350
    },
    "suitability": {
      "planting": 2,
      "handiwork": 2,
      "lumbering": 2,
      "transporting": 3
    },
    "breedingPower": 430,
    "description": "A Pal so powerful it's hard to believe.\r\nIn one experiment, this Pal tore through 3,000 sheets of paper at once!\r\nIt's only by some miracle that this Pal isn't a meat-eater.",
    "image": "/images/pals/Mossanda.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Power Shot",
        "level": 1,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Seed Machine Gun",
        "level": 7,
        "element": "Grass",
        "cooltime": "9",
        "power": "50",
        "description": "Fires a volley of hard seeds at enemies in front of it."
      },
      {
        "name": "Stone Cannon",
        "level": 15,
        "element": "Ground",
        "cooltime": "15",
        "power": "70",
        "description": "Digs up a boulder and hurls it at an enemy."
      },
      {
        "name": "Crushing Punch",
        "level": 22,
        "element": "Grass",
        "cooltime": "18",
        "power": "85",
        "description": "Mossanda's exclusive skill. Winds up its right arm before striking an enemy with a devastating punch."
      },
      {
        "name": "Seed Mine",
        "level": 30,
        "element": "Grass",
        "cooltime": "13",
        "power": "65",
        "description": "Launches a deadly seed. If it hits an enemy, the seed explodes."
      },
      {
        "name": "Spine Vine",
        "level": 40,
        "element": "Grass",
        "cooltime": "25",
        "power": "95",
        "description": "Generates spiny thorns that chase an enemy along the ground, piercing them from below."
      },
      {
        "name": "Solar Blast",
        "level": 50,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "33B",
    "key": "Mossanda_Lux",
    "name": "Mossanda Lux",
    "types": [
      "Electric"
    ],
    "stats": {
      "hp": 100,
      "attack": {
        "melee": 100,
        "ranged": 100
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 350
    },
    "suitability": {
      "generating_electricity": 2,
      "handiwork": 2,
      "lumbering": 2,
      "transporting": 3
    },
    "breedingPower": 390,
    "description": "A Pal whose power is truly shocking.\r\nBy altering the electrical currents in its body, this Pal's been able to overload its own strength.\r\nWhen it comes to sheer power, this Pal may be top of the list.",
    "image": "/images/pals/Mossanda_Lux.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Spark Blast",
        "level": 1,
        "element": "Electric",
        "cooltime": "2",
        "power": "30",
        "description": "Releases lightning orbs in a fan shape, spreading as they travel."
      },
      {
        "name": "Shockwave",
        "level": 7,
        "element": "Electric",
        "cooltime": "4",
        "power": "40",
        "description": "Quickly discharges electricity, shocking those around it."
      },
      {
        "name": "Lightning Streak",
        "level": 15,
        "element": "Electric",
        "cooltime": "16",
        "power": "75",
        "description": "Generates a lightning bolt that moves forward in a line."
      },
      {
        "name": "Blast Punch",
        "level": 22,
        "element": "Electric",
        "cooltime": "14",
        "power": "85",
        "description": "Mossanda Lux's exclusive skill. Winds up its right arm before delivering an electrically charged punch."
      },
      {
        "name": "Tri-Lightning",
        "level": 30,
        "element": "Electric",
        "cooltime": "22",
        "power": "90",
        "description": "Generates lightning that strikes an enemy three times from above."
      },
      {
        "name": "Lightning Strike",
        "level": 40,
        "element": "Electric",
        "cooltime": "40",
        "power": "120",
        "description": "Acts as a lightning rod, calling down thunderbolts that electrocute the surrounding area."
      },
      {
        "name": "Lightning Bolt",
        "level": 50,
        "element": "Electric",
        "cooltime": "55",
        "power": "150",
        "description": "Charges electric energy before blasting enemies with a powerful shock."
      }
    ],
    "isVariant": true
  },
  {
    "id": "34",
    "key": "Woolipop",
    "name": "Woolipop",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 70,
      "attack": {
        "melee": 70,
        "ranged": 70
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "farming": 1
    },
    "breedingPower": 1190,
    "description": "Its entire body is 18,000 times sweeter than sugar.\r\nCarnivorous Pals lured by its scent will find themselves overwhelmed by sweetness\r\nand even pass out should they take a bite of this Pal.",
    "image": "/images/pals/Woolipop.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Bog Blast",
        "level": 7,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Power Shot",
        "level": 15,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Wind Cutter",
        "level": 22,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Bubble Blast",
        "level": 30,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "Power Bomb",
        "level": 40,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Pal Blast",
        "level": 50,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      }
    ],
    "isVariant": false
  },
  {
    "id": "35",
    "key": "Caprity",
    "name": "Caprity",
    "types": [
      "Grass"
    ],
    "stats": {
      "hp": 100,
      "attack": {
        "melee": 70,
        "ranged": 70
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 120,
      "food": 300
    },
    "suitability": {
      "planting": 2,
      "farming": 1
    },
    "breedingPower": 930,
    "description": "The shrub on this Pal's back produces berries as long as it is properly fed.\r\nIt offers these berries to potential mates, and if the flavor is to their liking, romance blossoms.",
    "image": "/images/pals/Caprity.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Wind Cutter",
        "level": 1,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Air Cannon",
        "level": 7,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Bog Blast",
        "level": 15,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Power Shot",
        "level": 22,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Grass Tornado",
        "level": 30,
        "element": "Grass",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Spine Vine",
        "level": 40,
        "element": "Grass",
        "cooltime": "25",
        "power": "95",
        "description": "Generates spiny thorns that chase an enemy along the ground, piercing them from below."
      },
      {
        "name": "Solar Blast",
        "level": 50,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "35B",
    "key": "Caprity_Noct",
    "name": "Caprity Noct",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 100,
      "attack": {
        "melee": 70,
        "ranged": 75
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 120,
      "food": 300
    },
    "suitability": {
      "planting": 2,
      "farming": 1
    },
    "breedingPower": 855,
    "description": "The berries that grow on its back change flavor according to its emotions.\r\nThe harsher the environment it grows in, the sweeter the berries become.\r\nThis is why most Caprity Noct raised in captivity have never known love.",
    "image": "/images/pals/Caprity_Noct.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Poison Fog",
        "level": 1,
        "element": "Dark",
        "cooltime": "30",
        "power": "0",
        "description": "Generates a fog of poison in front, causing the opponent to become poisoned."
      },
      {
        "name": "Wind Cutter",
        "level": 7,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Poison Blast",
        "level": 15,
        "element": "Dark",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls poison sludge at an enemy."
      },
      {
        "name": "Multicutter",
        "level": 22,
        "element": "Grass",
        "cooltime": "12",
        "power": "60",
        "description": "The user fires three high-speed blades of wind in quick succession that fly straight at enemies."
      },
      {
        "name": "Poison Shower",
        "level": 30,
        "element": "Dark",
        "cooltime": "22",
        "power": "90",
        "description": "Focuses energy into the body and scatters poison orbs in all directions."
      },
      {
        "name": "Circle Vine",
        "level": 40,
        "element": "Grass",
        "cooltime": "40",
        "power": "120",
        "description": "Sprouts sharp roots in and around the enemy's location."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": true
  },
  {
    "id": "36",
    "key": "Melpaca",
    "name": "Melpaca",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 90,
        "ranged": 75
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "farming": 1
    },
    "breedingPower": 890,
    "description": "Don't be fooled by this Pal's fluffy appearance. \r\nA hypersonic kick from one of its long legs may \r\nsend you flying to the other side of the world.",
    "image": "/images/pals/Melpaca.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Fluffy Tackle",
        "level": 7,
        "element": "Neutral",
        "cooltime": "4",
        "power": "40",
        "description": "Melpaca's exclusive skill. Charges forward while surrounded by an adorable aura."
      },
      {
        "name": "Bog Blast",
        "level": 15,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Power Shot",
        "level": 22,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Shockwave",
        "level": 30,
        "element": "Electric",
        "cooltime": "4",
        "power": "40",
        "description": "Quickly discharges electricity, shocking those around it."
      },
      {
        "name": "Power Bomb",
        "level": 40,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Pal Blast",
        "level": 50,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      }
    ],
    "isVariant": false
  },
  {
    "id": "37",
    "key": "Eikthyrdeer",
    "name": "Eikthyrdeer",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 95,
      "attack": {
        "melee": 70,
        "ranged": 80
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 350
    },
    "suitability": {
      "lumbering": 2
    },
    "breedingPower": 920,
    "description": "The one who possesses the most impressive antlers becomes the leader of the herd.\r\nIf their antlers are broken, they become depressed\r\nand leave the herd never to be seen again.",
    "image": "/images/pals/Eikthyrdeer.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Power Shot",
        "level": 1,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Antler Uppercut",
        "level": 7,
        "element": "Neutral",
        "cooltime": "5",
        "power": "50",
        "description": "Eikthyrdeer's exclusive skill. Charges at foes and uses antlers to launch them into the air. When used while riding, the direction of the charge can be controlled."
      },
      {
        "name": "Stone Blast",
        "level": 15,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Stone Cannon",
        "level": 22,
        "element": "Ground",
        "cooltime": "15",
        "power": "70",
        "description": "Digs up a boulder and hurls it at an enemy."
      },
      {
        "name": "Power Bomb",
        "level": 30,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Rock Lance",
        "level": 40,
        "element": "Ground",
        "cooltime": "55",
        "power": "150",
        "description": "Generates a sharp rock spear under an enemy."
      },
      {
        "name": "Pal Blast",
        "level": 50,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      }
    ],
    "isVariant": false
  },
  {
    "id": "37B",
    "key": "Eikthyrdeer_Terra",
    "name": "Eikthyrdeer Terra",
    "types": [
      "Ground"
    ],
    "stats": {
      "hp": 95,
      "attack": {
        "melee": 70,
        "ranged": 80
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 350
    },
    "suitability": {
      "lumbering": 2
    },
    "breedingPower": 900,
    "description": "The individual with the hardest horns becomes the leader.\r\nOnce the horns are lost, so too is its leadership status.\r\nIt leaves the herd amidst farewell glances and quietly returns to the earth.",
    "image": "/images/pals/Eikthyrdeer_Terra.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Power Shot",
        "level": 1,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Antler Uppercut",
        "level": 7,
        "element": "Neutral",
        "cooltime": "5",
        "power": "50",
        "description": "Eikthyrdeer's exclusive skill. Charges at foes and uses antlers to launch them into the air. When used while riding, the direction of the charge can be controlled."
      },
      {
        "name": "Stone Blast",
        "level": 15,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Stone Cannon",
        "level": 22,
        "element": "Ground",
        "cooltime": "15",
        "power": "70",
        "description": "Digs up a boulder and hurls it at an enemy."
      },
      {
        "name": "Power Bomb",
        "level": 30,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Sand Tornado",
        "level": 40,
        "element": "Ground",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two sand tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Rock Lance",
        "level": 50,
        "element": "Ground",
        "cooltime": "55",
        "power": "150",
        "description": "Generates a sharp rock spear under an enemy."
      }
    ],
    "isVariant": true
  },
  {
    "id": "38",
    "key": "Nitewing",
    "name": "Nitewing",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 100,
      "attack": {
        "melee": 100,
        "ranged": 95
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 475
    },
    "suitability": {
      "gathering": 2
    },
    "breedingPower": 420,
    "description": "It carries newborn Pals to its nest and raises them \r\nas a surrogate parent. \r\nOnce the baby Pal has fattened up, it hunts them.",
    "image": "/images/pals/Nitewing.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Tornado Attack",
        "level": 7,
        "element": "Neutral",
        "cooltime": "13",
        "power": "65",
        "description": "Nitewing's exclusive skill. Generates a tornado ahead before soaring towards its target."
      },
      {
        "name": "Wind Cutter",
        "level": 15,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Power Bomb",
        "level": 22,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Sand Tornado",
        "level": 30,
        "element": "Ground",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two sand tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Grass Tornado",
        "level": 40,
        "element": "Grass",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Pal Blast",
        "level": 50,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      }
    ],
    "isVariant": false
  },
  {
    "id": "39",
    "key": "Ribbuny",
    "name": "Ribbuny",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 75,
      "attack": {
        "melee": 100,
        "ranged": 65
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "handiwork": 1,
      "gathering": 1,
      "transporting": 1
    },
    "breedingPower": 1310,
    "description": "A Pal that's never without a bright smile.\r\nOccasionally, its tentacles get tied up in knots by Cattiva 's pranks.\r\nDuring those moments, its expression turns demonic.",
    "image": "/images/pals/Ribbuny.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Power Shot",
        "level": 7,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Ice Missile",
        "level": 15,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Blizzard Spike",
        "level": 22,
        "element": "Ice",
        "cooltime": "45",
        "power": "130",
        "description": "Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact."
      },
      {
        "name": "Power Bomb",
        "level": 30,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Iceberg",
        "level": 40,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Pal Blast",
        "level": 50,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      }
    ],
    "isVariant": false
  },
  {
    "id": "39B",
    "key": "Ribbuny_Botan",
    "name": "Ribbuny Botan",
    "types": [
      "Grass"
    ],
    "stats": {
      "hp": 80,
      "attack": {
        "melee": 100,
        "ranged": 65
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "planting": 1,
      "handiwork": 1,
      "gathering": 1,
      "transporting": 1
    },
    "breedingPower": 1205,
    "description": "Always wears a cheerful smile.\r\nSometimes, thanks to Cattiva 's pranks, \r\nthey end up tangled in tentacles and have to fight their way out!\r\nEven in tough situations, they keep smiling cheerfully.",
    "image": "/images/pals/Ribbuny_Botan.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Wind Cutter",
        "level": 1,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Bog Blast",
        "level": 7,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Seed Machine Gun",
        "level": 15,
        "element": "Grass",
        "cooltime": "9",
        "power": "50",
        "description": "Fires a volley of hard seeds at enemies in front of it."
      },
      {
        "name": "Seed Mine",
        "level": 22,
        "element": "Grass",
        "cooltime": "13",
        "power": "65",
        "description": "Launches a deadly seed. If it hits an enemy, the seed explodes."
      },
      {
        "name": "Wind Edge",
        "level": 30,
        "element": "Grass",
        "cooltime": "22",
        "power": "90",
        "description": "Launches sharp blades of air that fan out."
      },
      {
        "name": "Circle Vine",
        "level": 40,
        "element": "Grass",
        "cooltime": "40",
        "power": "120",
        "description": "Sprouts sharp roots in and around the enemy's location."
      },
      {
        "name": "Solar Blast",
        "level": 50,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "40",
    "key": "Incineram",
    "name": "Incineram",
    "types": [
      "Fire",
      "Dark"
    ],
    "stats": {
      "hp": 95,
      "attack": {
        "melee": 150,
        "ranged": 100
      },
      "defense": 85,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 300
    },
    "suitability": {
      "kindling": 1,
      "handiwork": 2,
      "mining": 1,
      "transporting": 2
    },
    "breedingPower": 590,
    "description": "In the dark of night, this Pal snatches prey to bring back to its territory.\r\nWhat happens to those poor souls afterwards isn't too hard to imagine.",
    "image": "/images/pals/Incineram.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ignis Blast",
        "level": 1,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Spirit Fire",
        "level": 7,
        "element": "Fire",
        "cooltime": "7",
        "power": "45",
        "description": "Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward."
      },
      {
        "name": "Flare Arrow",
        "level": 15,
        "element": "Fire",
        "cooltime": "10",
        "power": "55",
        "description": "Fires three flaming arrows in succession that home in on an enemy."
      },
      {
        "name": "Hellfire Claw",
        "level": 22,
        "element": "Fire",
        "cooltime": "10",
        "power": "70",
        "description": "Incineram's exclusive skill. Draws near enemies using its left claw to slash them into the air before cutting them down with its right claw."
      },
      {
        "name": "Shadow Burst",
        "level": 30,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Fire Ball",
        "level": 40,
        "element": "Fire",
        "cooltime": "55",
        "power": "150",
        "description": "Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact."
      },
      {
        "name": "Ignis Rage",
        "level": 50,
        "element": "Fire",
        "cooltime": "40",
        "power": "120",
        "description": "Infuses the surrounding ground with energy, causing it to explode after a set amount of time."
      }
    ],
    "isVariant": false
  },
  {
    "id": "40B",
    "key": "Incineram_Noct",
    "name": "Incineram Noct",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 95,
      "attack": {
        "melee": 150,
        "ranged": 105
      },
      "defense": 85,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 300
    },
    "suitability": {
      "handiwork": 2,
      "mining": 1,
      "transporting": 2
    },
    "breedingPower": 580,
    "description": "It specifically targets baby Pals, taking them back to its domain.\r\nOne can only imagine the profound despair\r\nof a parent whose child has been taken away.",
    "image": "/images/pals/Incineram_Noct.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ignis Blast",
        "level": 1,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Spirit Fire",
        "level": 7,
        "element": "Fire",
        "cooltime": "7",
        "power": "45",
        "description": "Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward."
      },
      {
        "name": "Flare Arrow",
        "level": 15,
        "element": "Fire",
        "cooltime": "10",
        "power": "55",
        "description": "Fires three flaming arrows in succession that home in on an enemy."
      },
      {
        "name": "Hellfire Claw",
        "level": 22,
        "element": "Fire",
        "cooltime": "10",
        "power": "70",
        "description": "Incineram's exclusive skill. Draws near enemies using its left claw to slash them into the air before cutting them down with its right claw."
      },
      {
        "name": "Shadow Burst",
        "level": 30,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Fire Ball",
        "level": 40,
        "element": "Fire",
        "cooltime": "55",
        "power": "150",
        "description": "Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact."
      },
      {
        "name": "Ignis Rage",
        "level": 50,
        "element": "Fire",
        "cooltime": "40",
        "power": "120",
        "description": "Infuses the surrounding ground with energy, causing it to explode after a set amount of time."
      }
    ],
    "isVariant": true
  },
  {
    "id": "41",
    "key": "Cinnamoth",
    "name": "Cinnamoth",
    "types": [
      "Grass"
    ],
    "stats": {
      "hp": 70,
      "attack": {
        "melee": 100,
        "ranged": 80
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "planting": 2,
      "medicine_production": 1
    },
    "breedingPower": 490,
    "description": "Sniffing its scales produces a feeling of unparalleled euphoria. \r\nThere was some effort to further regulate this byproduct, \r\nbut the Free Pal Alliance have vehemently opposed these measures, \r\nputting a stop to them.",
    "image": "/images/pals/Cinnamoth.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Wind Cutter",
        "level": 7,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Poison Fog",
        "level": 15,
        "element": "Dark",
        "cooltime": "30",
        "power": "0",
        "description": "Generates a fog of poison in front, causing the opponent to become poisoned."
      },
      {
        "name": "Sand Tornado",
        "level": 22,
        "element": "Ground",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two sand tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Seed Mine",
        "level": 30,
        "element": "Grass",
        "cooltime": "13",
        "power": "65",
        "description": "Launches a deadly seed. If it hits an enemy, the seed explodes."
      },
      {
        "name": "Grass Tornado",
        "level": 40,
        "element": "Grass",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Solar Blast",
        "level": 50,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "42",
    "key": "Arsox",
    "name": "Arsox",
    "types": [
      "Fire"
    ],
    "stats": {
      "hp": 85,
      "attack": {
        "melee": 100,
        "ranged": 95
      },
      "defense": 95,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 350
    },
    "suitability": {
      "kindling": 2,
      "lumbering": 1
    },
    "breedingPower": 790,
    "description": "In ancient times, carnivorous Pals pursued them relentlessly.\r\nThe absurd fury in the cries of Arsox transformed into a raging inferno,\r\nwhich has been passed on to this day.",
    "image": "/images/pals/Arsox.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ignis Blast",
        "level": 1,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Blazing Horn",
        "level": 7,
        "element": "Fire",
        "cooltime": "9",
        "power": "50",
        "description": "Arsox's exclusive skill. Takes aim and charges with fierce momentum while raising its horn."
      },
      {
        "name": "Spirit Fire",
        "level": 15,
        "element": "Fire",
        "cooltime": "7",
        "power": "45",
        "description": "Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward."
      },
      {
        "name": "Flare Arrow",
        "level": 22,
        "element": "Fire",
        "cooltime": "10",
        "power": "55",
        "description": "Fires three flaming arrows in succession that home in on an enemy."
      },
      {
        "name": "Ignis Breath",
        "level": 30,
        "element": "Fire",
        "cooltime": "15",
        "power": "70",
        "description": "Shoots flames at an enemy, dealing continuous damage."
      },
      {
        "name": "Ignis Rage",
        "level": 40,
        "element": "Fire",
        "cooltime": "40",
        "power": "120",
        "description": "Infuses the surrounding ground with energy, causing it to explode after a set amount of time."
      },
      {
        "name": "Fire Ball",
        "level": 50,
        "element": "Fire",
        "cooltime": "55",
        "power": "150",
        "description": "Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact."
      }
    ],
    "isVariant": false
  },
  {
    "id": "43",
    "key": "Dumud",
    "name": "Dumud",
    "types": [
      "Ground",
      "Water"
    ],
    "stats": {
      "hp": 100,
      "attack": {
        "melee": 100,
        "ranged": 70
      },
      "defense": 95,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 300
    },
    "suitability": {
      "watering": 1,
      "mining": 2,
      "transporting": 1,
      "farming": 1
    },
    "breedingPower": 895,
    "description": "When too relaxed, its reaction time drastically declines.\r\nEven if it were sliced from head to tail,\r\nit probably wouldn't even realize that it should be dead until the next morning.",
    "image": "/images/pals/Dumud.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Bog Blast",
        "level": 1,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Aqua Gun",
        "level": 7,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Stone Blast",
        "level": 15,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Bubble Blast",
        "level": 22,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "Aqua Burst",
        "level": 30,
        "element": "Water",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of water and hurls it at an enemy."
      },
      {
        "name": "Rock Lance",
        "level": 40,
        "element": "Ground",
        "cooltime": "55",
        "power": "150",
        "description": "Generates a sharp rock spear under an enemy."
      },
      {
        "name": "Hydro Laser",
        "level": 50,
        "element": "Water",
        "cooltime": "55",
        "power": "150",
        "description": "Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it."
      }
    ],
    "isVariant": false
  },
  {
    "id": "43B",
    "key": "Dumud_Gild",
    "name": "Dumud Gild",
    "types": [
      "Ground",
      "Water"
    ],
    "stats": {
      "hp": 105,
      "attack": {
        "melee": 100,
        "ranged": 75
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 300
    },
    "suitability": {
      "watering": 1,
      "mining": 2,
      "transporting": 1,
      "farming": 1
    },
    "breedingPower": 855,
    "description": "Its body reflects light with astounding clarity.\r\nEven more shocking, its reflexes are somehow even slower than Dumud .",
    "image": "/images/pals/Dumud_Gild.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Bog Blast",
        "level": 1,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Aqua Gun",
        "level": 7,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Stone Blast",
        "level": 15,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Sand Tornado",
        "level": 22,
        "element": "Ground",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two sand tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Torrential Blast",
        "level": 30,
        "element": "Water",
        "cooltime": "35",
        "power": "110",
        "description": "Fires a high-pressure stream of water forward. After a short delay, the stream branches off to the left and right."
      },
      {
        "name": "Rockburst",
        "level": 40,
        "element": "Ground",
        "cooltime": "35",
        "power": "130",
        "description": "Causes the ground to shake before hurling a massive stone mass at its surroundings."
      },
      {
        "name": "Sand Twister",
        "level": 50,
        "element": "Ground",
        "cooltime": "60",
        "power": "160",
        "description": "Creates multiple sand tornadoes. The tornadoes continuously spin in circles."
      }
    ],
    "isVariant": false
  },
  {
    "id": "44",
    "key": "Cawgnito",
    "name": "Cawgnito",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 75,
      "attack": {
        "melee": 80,
        "ranged": 95
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 350
    },
    "suitability": {
      "lumbering": 1
    },
    "breedingPower": 1080,
    "description": "Long ago it freely soared the skies. \r\nAfter losing a contest with Galeclaw , it abandoned the skies, \r\nand now lives a secretive life in the dark of night.",
    "image": "/images/pals/Cawgnito.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Dark Ball",
        "level": 7,
        "element": "Dark",
        "cooltime": "4",
        "power": "40",
        "description": "Unleashes a sphere of darkness that slowly tracks down an enemy."
      },
      {
        "name": "Phantom Peck",
        "level": 15,
        "element": "Dark",
        "cooltime": "7",
        "power": "55",
        "description": "Cawgnito's exclusive skill. Teleports next to an enemy before attacking with its beak."
      },
      {
        "name": "Shadow Burst",
        "level": 22,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Spirit Flame",
        "level": 30,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Nightmare Ball",
        "level": 40,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "45",
    "key": "Leezpunk",
    "name": "Leezpunk",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 80,
      "attack": {
        "melee": 90,
        "ranged": 80
      },
      "defense": 50,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "handiwork": 1,
      "gathering": 1,
      "transporting": 1
    },
    "breedingPower": 1120,
    "description": "A Pal that always takes great care to maintain a stylish stance.\r\nAlways on the hunt for the coolest poses, if given a mirror\r\nit will spend all day posing in front of it.",
    "image": "/images/pals/Leezpunk.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Poison Blast",
        "level": 1,
        "element": "Dark",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls poison sludge at an enemy."
      },
      {
        "name": "Dark Ball",
        "level": 7,
        "element": "Dark",
        "cooltime": "4",
        "power": "40",
        "description": "Unleashes a sphere of darkness that slowly tracks down an enemy."
      },
      {
        "name": "Shadow Burst",
        "level": 15,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Spirit Flame",
        "level": 22,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Nightmare Ball",
        "level": 30,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Ignis Breath",
        "level": 40,
        "element": "Fire",
        "cooltime": "15",
        "power": "70",
        "description": "Shoots flames at an enemy, dealing continuous damage."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "45B",
    "key": "Leezpunk_Ignis",
    "name": "Leezpunk Ignis",
    "types": [
      "Fire"
    ],
    "stats": {
      "hp": 80,
      "attack": {
        "melee": 90,
        "ranged": 80
      },
      "defense": 50,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "kindling": 1,
      "handiwork": 1,
      "gathering": 1,
      "transporting": 1
    },
    "breedingPower": 1140,
    "description": "A Pal that has an unusual obsession with their standing posture.\r\nAlways in search of the hottest pose,\r\nthis Pal's owner is constantly presented with fervent stances.",
    "image": "/images/pals/Leezpunk_Ignis.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ignis Blast",
        "level": 1,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Poison Blast",
        "level": 7,
        "element": "Dark",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls poison sludge at an enemy."
      },
      {
        "name": "Spirit Fire",
        "level": 15,
        "element": "Fire",
        "cooltime": "7",
        "power": "45",
        "description": "Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward."
      },
      {
        "name": "Ignis Breath",
        "level": 22,
        "element": "Fire",
        "cooltime": "15",
        "power": "70",
        "description": "Shoots flames at an enemy, dealing continuous damage."
      },
      {
        "name": "Flare Storm",
        "level": 30,
        "element": "Fire",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two flaming tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Ignis Rage",
        "level": 40,
        "element": "Fire",
        "cooltime": "40",
        "power": "120",
        "description": "Infuses the surrounding ground with energy, causing it to explode after a set amount of time."
      },
      {
        "name": "Fire Ball",
        "level": 50,
        "element": "Fire",
        "cooltime": "55",
        "power": "150",
        "description": "Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact."
      }
    ],
    "isVariant": true
  },
  {
    "id": "46",
    "key": "Loupmoon",
    "name": "Loupmoon",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 80,
      "attack": {
        "melee": 130,
        "ranged": 100
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 350
    },
    "suitability": {
      "handiwork": 2
    },
    "breedingPower": 950,
    "description": "The horns on its head grow under the moonlight.\r\nIt doesn't hate the sun, but its horns\r\nitch when sunlight hits them.",
    "image": "/images/pals/Loupmoon.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Dark Ball",
        "level": 1,
        "element": "Dark",
        "cooltime": "4",
        "power": "40",
        "description": "Unleashes a sphere of darkness that slowly tracks down an enemy."
      },
      {
        "name": "Jumping Claw",
        "level": 7,
        "element": "Dark",
        "cooltime": "7",
        "power": "55",
        "description": "Loupmoon's exclusive skill. Leaps forward and attacks twice with vicious claws imbued with dark energy."
      },
      {
        "name": "Shadow Burst",
        "level": 15,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Icicle Cutter",
        "level": 22,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Spirit Flame",
        "level": 30,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Nightmare Ball",
        "level": 40,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "46B",
    "key": "Loupmoon_Cryst",
    "name": "Loupmoon Cryst",
    "types": [
      "Ice"
    ],
    "stats": {
      "hp": 80,
      "attack": {
        "melee": 130,
        "ranged": 105
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 350
    },
    "suitability": {
      "handiwork": 2,
      "cooling": 3
    },
    "breedingPower": 805,
    "description": "The horns on its head are made of a mysterious ice that never melts.\r\nShaved ice made by breaking off a horn is truly exquisite,\r\nbut both the one who tries it and Loupmoon Cryst end up with a headache.",
    "image": "/images/pals/Loupmoon_Cryst.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ice Missile",
        "level": 1,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Icicle Cutter",
        "level": 7,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Snow Claw",
        "level": 15,
        "element": "Ice",
        "cooltime": "7",
        "power": "55",
        "description": "Loupmoon Cryst's exclusive skill. Leaps forward and attacks twice with vicious claws imbued with ice element."
      },
      {
        "name": "Freeze Wall",
        "level": 22,
        "element": "Ice",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a wall of ice that rises from the ground. The ice wall remains standing for a while, and breaks after taking enough damage."
      },
      {
        "name": "Icicle Bullet",
        "level": 30,
        "element": "Ice",
        "cooltime": "35",
        "power": "110",
        "description": "Generates multiple sharp ice blocks in the sky and fires them at the enemy."
      },
      {
        "name": "Icicle Line",
        "level": 40,
        "element": "Ice",
        "cooltime": "40",
        "power": "120",
        "description": "Generates pillars of ice that move in a straight line in three directions."
      },
      {
        "name": "Blizzard Spike",
        "level": 50,
        "element": "Ice",
        "cooltime": "45",
        "power": "130",
        "description": "Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact."
      }
    ],
    "isVariant": true
  },
  {
    "id": "47",
    "key": "Galeclaw",
    "name": "Galeclaw",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 75,
      "attack": {
        "melee": 120,
        "ranged": 85
      },
      "defense": 60,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 300
    },
    "suitability": {
      "gathering": 2
    },
    "breedingPower": 1030,
    "description": "A Pal that can easily take flight even while grasping a human. \r\nIt is, however, prone to letting go when tired, \r\nwhich has led to the sudden demise of more than a few souls.",
    "image": "/images/pals/Galeclaw.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Gale Claw",
        "level": 1,
        "element": "Neutral",
        "cooltime": "8",
        "power": "60",
        "description": "Galeclaw's exclusive skill. With talons outstretched, it glides forward in a ferocious charge."
      },
      {
        "name": "Air Cannon",
        "level": 7,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Bog Blast",
        "level": 15,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Wind Cutter",
        "level": 22,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Sand Tornado",
        "level": 30,
        "element": "Ground",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two sand tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Grass Tornado",
        "level": 40,
        "element": "Grass",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Pal Blast",
        "level": 50,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      }
    ],
    "isVariant": false
  },
  {
    "id": "48",
    "key": "Robinquill",
    "name": "Robinquill",
    "types": [
      "Grass"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 100,
        "ranged": 105
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "planting": 1,
      "handiwork": 2,
      "gathering": 2,
      "lumbering": 1,
      "medicine_production": 1,
      "transporting": 2
    },
    "breedingPower": 1020,
    "description": "A Pal that is very similar to humans who hunt and live in the forests.\r\nIt may prove to be a key for understanding what Pals are\r\nand how they diverged from humans in the distant past.",
    "image": "/images/pals/Robinquill.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Wind Cutter",
        "level": 1,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Power Shot",
        "level": 7,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Focus Shot",
        "level": 15,
        "element": "Grass",
        "cooltime": "9",
        "power": "65",
        "description": "Robinquill's exclusive skill. Takes aim while drawing its bow before releasing a powerful shot at an enemy."
      },
      {
        "name": "Seed Mine",
        "level": 22,
        "element": "Grass",
        "cooltime": "13",
        "power": "65",
        "description": "Launches a deadly seed. If it hits an enemy, the seed explodes."
      },
      {
        "name": "Grass Tornado",
        "level": 30,
        "element": "Grass",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Spine Vine",
        "level": 40,
        "element": "Grass",
        "cooltime": "25",
        "power": "95",
        "description": "Generates spiny thorns that chase an enemy along the ground, piercing them from below."
      },
      {
        "name": "Solar Blast",
        "level": 50,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "48B",
    "key": "Robinquill_Terra",
    "name": "Robinquill Terra",
    "types": [
      "Grass",
      "Ground"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 100,
        "ranged": 105
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "handiwork": 2,
      "gathering": 2,
      "lumbering": 1,
      "medicine_production": 1,
      "transporting": 2
    },
    "breedingPower": 1000,
    "description": "A Pal that is very similar to humans who hunt and live in the rocky areas.\r\nWhen Robinquill Terra bones are found in ruins,\r\nthere are always human bones found nearby as well.",
    "image": "/images/pals/Robinquill_Terra.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Bog Blast",
        "level": 1,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Wind Cutter",
        "level": 7,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Focus Shot",
        "level": 15,
        "element": "Grass",
        "cooltime": "9",
        "power": "65",
        "description": "Robinquill's exclusive skill. Takes aim while drawing its bow before releasing a powerful shot at an enemy."
      },
      {
        "name": "Stone Blast",
        "level": 22,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Sand Tornado",
        "level": 30,
        "element": "Ground",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two sand tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Solar Blast",
        "level": 40,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      },
      {
        "name": "Rock Lance",
        "level": 50,
        "element": "Ground",
        "cooltime": "55",
        "power": "150",
        "description": "Generates a sharp rock spear under an enemy."
      }
    ],
    "isVariant": true
  },
  {
    "id": "49",
    "key": "Gorirat",
    "name": "Gorirat",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 110,
        "ranged": 95
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "handiwork": 1,
      "lumbering": 2,
      "transporting": 3
    },
    "breedingPower": 1040,
    "description": "It beats the ground rhythmically to communicate with its comrades. \r\nThe meaning of each rhythm differs by troop, but the distinction \r\nbetween them is still largely unknown.",
    "image": "/images/pals/Gorirat.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Bog Blast",
        "level": 1,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Power Shot",
        "level": 7,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Ground Pound",
        "level": 15,
        "element": "Neutral",
        "cooltime": "14",
        "power": "85",
        "description": "Gorirat's exclusive skill. Pounds the ground twice before leaping into the air and delivers a powerful punch."
      },
      {
        "name": "Stone Blast",
        "level": 22,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Seed Machine Gun",
        "level": 30,
        "element": "Grass",
        "cooltime": "9",
        "power": "50",
        "description": "Fires a volley of hard seeds at enemies in front of it."
      },
      {
        "name": "Power Bomb",
        "level": 40,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Pal Blast",
        "level": 50,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      }
    ],
    "isVariant": false
  },
  {
    "id": "49B",
    "key": "Gorirat_Terra",
    "name": "Gorirat Terra",
    "types": [
      "Ground"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 110,
        "ranged": 100
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "handiwork": 1,
      "mining": 2,
      "transporting": 3
    },
    "breedingPower": 1030,
    "description": "It beats the ground rhythmically to communicate with its comrades.\r\nStronger than Gorirat , if every Gorirat Terra hit the ground at the same time, the island would sink in 1 second.",
    "image": "/images/pals/Gorirat_Terra.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Power Shot",
        "level": 1,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Bog Blast",
        "level": 7,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Stone Blast",
        "level": 15,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Stone Cannon",
        "level": 22,
        "element": "Ground",
        "cooltime": "15",
        "power": "70",
        "description": "Digs up a boulder and hurls it at an enemy."
      },
      {
        "name": "Ground Pound",
        "level": 30,
        "element": "Neutral",
        "cooltime": "14",
        "power": "85",
        "description": "Gorirat's exclusive skill. Pounds the ground twice before leaping into the air and delivers a powerful punch."
      },
      {
        "name": "Rockburst",
        "level": 40,
        "element": "Ground",
        "cooltime": "35",
        "power": "130",
        "description": "Causes the ground to shake before hurling a massive stone mass at its surroundings."
      },
      {
        "name": "Rock Lance",
        "level": 50,
        "element": "Ground",
        "cooltime": "55",
        "power": "150",
        "description": "Generates a sharp rock spear under an enemy."
      }
    ],
    "isVariant": true
  },
  {
    "id": "50",
    "key": "Beegarde",
    "name": "Beegarde",
    "types": [
      "Grass"
    ],
    "stats": {
      "hp": 80,
      "attack": {
        "melee": 100,
        "ranged": 90
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "planting": 1,
      "handiwork": 1,
      "gathering": 1,
      "lumbering": 1,
      "medicine_production": 1,
      "transporting": 2,
      "farming": 1
    },
    "breedingPower": 1070,
    "description": "A servant that pledges loyalty to Elizabee . \r\nAny that cause harm to the queen are immediately expelled from the hive. \r\nIt will gladly give its life to protect its queen.",
    "image": "/images/pals/Beegarde.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Wind Cutter",
        "level": 7,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Needle Spear",
        "level": 11,
        "element": "Grass",
        "cooltime": "7",
        "power": "55",
        "description": "Beegarde's exclusive skill. Charges at the enemy at high speed, delivering a final thrust with a spear."
      },
      {
        "name": "Bee Quiet",
        "level": 15,
        "element": "Grass",
        "cooltime": "55",
        "power": "250",
        "description": "Risks its life to cause a violent explosion, but receives the honor of falling in battle."
      },
      {
        "name": "Poison Blast",
        "level": 22,
        "element": "Dark",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls poison sludge at an enemy."
      },
      {
        "name": "Acid Rain",
        "level": 30,
        "element": "Water",
        "cooltime": "18",
        "power": "80",
        "description": "Creates acidic clouds that pour down acid rain on enemies."
      },
      {
        "name": "Grass Tornado",
        "level": 40,
        "element": "Grass",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Solar Blast",
        "level": 50,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "51",
    "key": "Elizabee",
    "name": "Elizabee",
    "types": [
      "Grass"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 100,
        "ranged": 105
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 475
    },
    "suitability": {
      "planting": 2,
      "handiwork": 2,
      "gathering": 2,
      "lumbering": 1,
      "medicine_production": 2
    },
    "breedingPower": 330,
    "description": "A chosen queen to rule over Beegarde s. \r\nThere is a never ending stream of servants willing to work themselves to death \r\nfor the pleasure of serving their queen.",
    "image": "/images/pals/Elizabee.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Wind Cutter",
        "level": 7,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Poison Blast",
        "level": 15,
        "element": "Dark",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls poison sludge at an enemy."
      },
      {
        "name": "Spinning Staff",
        "level": 22,
        "element": "Grass",
        "cooltime": "9",
        "power": "70",
        "description": "Elizabee's exclusive skill. Channels power into its staff, and unleashes it in a whirl."
      },
      {
        "name": "Grass Tornado",
        "level": 30,
        "element": "Grass",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Spine Vine",
        "level": 40,
        "element": "Grass",
        "cooltime": "25",
        "power": "95",
        "description": "Generates spiny thorns that chase an enemy along the ground, piercing them from below."
      },
      {
        "name": "Solar Blast",
        "level": 50,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "52",
    "key": "Grintale",
    "name": "Grintale",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 110,
      "attack": {
        "melee": 100,
        "ranged": 80
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 300
    },
    "suitability": {
      "gathering": 2
    },
    "breedingPower": 510,
    "description": "Grintale 's eyes light up the moment\r\nanyone enters its territory.\r\nThis is no figure of speech—its eyes literally light up.",
    "image": "/images/pals/Grintale.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Bog Blast",
        "level": 1,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Power Shot",
        "level": 7,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Cat Press",
        "level": 15,
        "element": "Neutral",
        "cooltime": "9",
        "power": "60",
        "description": "Grintale's exclusive skill. Grins menacingly before leaping into the air and smashing foes with its body."
      },
      {
        "name": "Stone Blast",
        "level": 22,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Stone Cannon",
        "level": 30,
        "element": "Ground",
        "cooltime": "15",
        "power": "70",
        "description": "Digs up a boulder and hurls it at an enemy."
      },
      {
        "name": "Power Bomb",
        "level": 40,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Pal Blast",
        "level": 50,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      }
    ],
    "isVariant": false
  },
  {
    "id": "53",
    "key": "Swee",
    "name": "Swee",
    "types": [
      "Ice"
    ],
    "stats": {
      "hp": 60,
      "attack": {
        "melee": 100,
        "ranged": 60
      },
      "defense": 60,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "gathering": 1,
      "cooling": 1
    },
    "breedingPower": 1300,
    "description": "Crawling along the ground, it eats microscopic organic matter.\r\nAfter a while, it discharges any substances that provide no nutrition.\r\nBy using it as a mop for cleaning, everyone wins!",
    "image": "/images/pals/Swee.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Ice Missile",
        "level": 7,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Icicle Cutter",
        "level": 15,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Power Bomb",
        "level": 22,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Iceberg",
        "level": 30,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Crystal Breath",
        "level": 40,
        "element": "Ice",
        "cooltime": "22",
        "power": "90",
        "description": "Enshrouds an enemy in a frigid blast of air, dealing continuous damage."
      },
      {
        "name": "Blizzard Spike",
        "level": 50,
        "element": "Ice",
        "cooltime": "45",
        "power": "130",
        "description": "Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact."
      }
    ],
    "isVariant": false
  },
  {
    "id": "54",
    "key": "Sweepa",
    "name": "Sweepa",
    "types": [
      "Ice"
    ],
    "stats": {
      "hp": 100,
      "attack": {
        "melee": 100,
        "ranged": 90
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "gathering": 2,
      "cooling": 2
    },
    "breedingPower": 410,
    "description": "While hibernating, a large number of Swee hide within its voluminous body hair.\r\nThe most ever recorded is 101.",
    "image": "/images/pals/Sweepa.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Power Shot",
        "level": 1,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Ice Missile",
        "level": 7,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Icicle Cutter",
        "level": 15,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Iceberg",
        "level": 22,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Crystal Breath",
        "level": 30,
        "element": "Ice",
        "cooltime": "22",
        "power": "90",
        "description": "Enshrouds an enemy in a frigid blast of air, dealing continuous damage."
      },
      {
        "name": "Pal Blast",
        "level": 40,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      },
      {
        "name": "Blizzard Spike",
        "level": 50,
        "element": "Ice",
        "cooltime": "45",
        "power": "130",
        "description": "Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact."
      }
    ],
    "isVariant": false
  },
  {
    "id": "55",
    "key": "Chillet",
    "name": "Chillet",
    "types": [
      "Ice",
      "Dragon"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 100,
        "ranged": 80
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "gathering": 1,
      "cooling": 1
    },
    "breedingPower": 800,
    "description": "It can curl up its body and roll around at extremely high speeds. \r\nLong ago, people would tie bags of milk to domesticated Chillet as they grazed to produce butter \r\nusing this spinning force.",
    "image": "/images/pals/Chillet.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ice Missile",
        "level": 1,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Dragon Cannon",
        "level": 7,
        "element": "Dragon",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls an energy ball imbued with draconic energy at an enemy."
      },
      {
        "name": "Rocket Slam",
        "level": 11,
        "element": "Dragon",
        "cooltime": "6",
        "power": "50",
        "description": "Chillet's exclusive skill. Gathers a bit of strength and leaps forward. Always shuts its eyes tight in fear when landing."
      },
      {
        "name": "Dragon Burst",
        "level": 15,
        "element": "Dragon",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges draconic energy, damaging those around it."
      },
      {
        "name": "Icicle Cutter",
        "level": 22,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Draconic Breath",
        "level": 30,
        "element": "Dragon",
        "cooltime": "15",
        "power": "70",
        "description": "Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it."
      },
      {
        "name": "Crystal Breath",
        "level": 40,
        "element": "Ice",
        "cooltime": "22",
        "power": "90",
        "description": "Enshrouds an enemy in a frigid blast of air, dealing continuous damage."
      },
      {
        "name": "Dragon Meteor",
        "level": 50,
        "element": "Dragon",
        "cooltime": "55",
        "power": "150",
        "description": "Summons numerous small meteorites and launches them at an enemy."
      }
    ],
    "isVariant": false
  },
  {
    "id": "55B",
    "key": "Chillet_Ignis",
    "name": "Chillet Ignis",
    "types": [
      "Fire",
      "Dragon"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 100,
        "ranged": 85
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "kindling": 2,
      "gathering": 1
    },
    "breedingPower": 790,
    "description": "It can curl up its body and roll around so fast that sparks fly. \r\nSparks also fly when it feels excited. \r\nIf you stroke it too much, this pal will get fired up, literally!",
    "image": "/images/pals/Chillet_Ignis.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ignis Blast",
        "level": 1,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Dragon Burst",
        "level": 7,
        "element": "Dragon",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges draconic energy, damaging those around it."
      },
      {
        "name": "Flare Arrow",
        "level": 15,
        "element": "Fire",
        "cooltime": "10",
        "power": "55",
        "description": "Fires three flaming arrows in succession that home in on an enemy."
      },
      {
        "name": "Ignis Breath",
        "level": 22,
        "element": "Fire",
        "cooltime": "15",
        "power": "70",
        "description": "Shoots flames at an enemy, dealing continuous damage."
      },
      {
        "name": "Rocket Slam",
        "level": 30,
        "element": "Dragon",
        "cooltime": "6",
        "power": "50",
        "description": "Chillet's exclusive skill. Gathers a bit of strength and leaps forward. Always shuts its eyes tight in fear when landing."
      },
      {
        "name": "Flame Wall",
        "level": 40,
        "element": "Fire",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a wall of flames at the enemy's location. The wall of flames will remain for a while, and deal damage to the enemies it touches."
      },
      {
        "name": "Fire Ball",
        "level": 50,
        "element": "Fire",
        "cooltime": "55",
        "power": "150",
        "description": "Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact."
      }
    ],
    "isVariant": true
  },
  {
    "id": "56",
    "key": "Univolt",
    "name": "Univolt",
    "types": [
      "Electric"
    ],
    "stats": {
      "hp": 80,
      "attack": {
        "melee": 110,
        "ranged": 105
      },
      "defense": 105,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 350
    },
    "suitability": {
      "generating_electricity": 2,
      "lumbering": 1
    },
    "breedingPower": 680,
    "description": "It used to be considered an emissary of the Thunder God, and thus was not hunted by people.\r\nHowever, after witnesses observed one die from a lightning strike,\r\nits reverence faded, and it quite literally fell into the role of a workhorse.",
    "image": "/images/pals/Univolt.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Spark Blast",
        "level": 1,
        "element": "Electric",
        "cooltime": "2",
        "power": "30",
        "description": "Releases lightning orbs in a fan shape, spreading as they travel."
      },
      {
        "name": "Shockwave",
        "level": 7,
        "element": "Electric",
        "cooltime": "4",
        "power": "40",
        "description": "Quickly discharges electricity, shocking those around it."
      },
      {
        "name": "Lightning Gale",
        "level": 11,
        "element": "Electric",
        "cooltime": "8",
        "power": "60",
        "description": "Univolt's exclusive skill. Generates bolts of lightning all around while charging at its target."
      },
      {
        "name": "Lock-on Laser",
        "level": 15,
        "element": "Electric",
        "cooltime": "15",
        "power": "70",
        "description": "Takes aim at an enemy before firing a super high speed laser."
      },
      {
        "name": "Lightning Streak",
        "level": 22,
        "element": "Electric",
        "cooltime": "16",
        "power": "75",
        "description": "Generates a lightning bolt that moves forward in a line."
      },
      {
        "name": "Tri-Lightning",
        "level": 30,
        "element": "Electric",
        "cooltime": "22",
        "power": "90",
        "description": "Generates lightning that strikes an enemy three times from above."
      },
      {
        "name": "Lightning Strike",
        "level": 40,
        "element": "Electric",
        "cooltime": "40",
        "power": "120",
        "description": "Acts as a lightning rod, calling down thunderbolts that electrocute the surrounding area."
      },
      {
        "name": "Lightning Bolt",
        "level": 50,
        "element": "Electric",
        "cooltime": "55",
        "power": "150",
        "description": "Charges electric energy before blasting enemies with a powerful shock."
      }
    ],
    "isVariant": false
  },
  {
    "id": "57",
    "key": "Foxcicle",
    "name": "Foxcicle",
    "types": [
      "Ice"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 100,
        "ranged": 95
      },
      "defense": 105,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "cooling": 2
    },
    "breedingPower": 760,
    "description": "On nights when the aurora is visible,\r\nit looks up towards the sky and begins to howl a beautiful song.\r\nThis does, however, leave it vulnerable to attacks from enemies.",
    "image": "/images/pals/Foxcicle.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Ice Missile",
        "level": 7,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Icicle Cutter",
        "level": 15,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Spirit Flame",
        "level": 22,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Iceberg",
        "level": 30,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Crystal Breath",
        "level": 40,
        "element": "Ice",
        "cooltime": "22",
        "power": "90",
        "description": "Enshrouds an enemy in a frigid blast of air, dealing continuous damage."
      },
      {
        "name": "Blizzard Spike",
        "level": 50,
        "element": "Ice",
        "cooltime": "45",
        "power": "130",
        "description": "Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact."
      }
    ],
    "isVariant": false
  },
  {
    "id": "58",
    "key": "Pyrin",
    "name": "Pyrin",
    "types": [
      "Fire"
    ],
    "stats": {
      "hp": 100,
      "attack": {
        "melee": 110,
        "ranged": 95
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 350
    },
    "suitability": {
      "kindling": 2,
      "lumbering": 1
    },
    "breedingPower": 360,
    "description": "Its entire body has evolved into a highly efficient radiator,\r\ngifting it with astounding stamina.\r\nIf someone rides it, this Pal takes caution not to burn them.",
    "image": "/images/pals/Pyrin.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Bog Blast",
        "level": 1,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Ignis Blast",
        "level": 7,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Spirit Fire",
        "level": 15,
        "element": "Fire",
        "cooltime": "7",
        "power": "45",
        "description": "Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward."
      },
      {
        "name": "Flare Arrow",
        "level": 22,
        "element": "Fire",
        "cooltime": "10",
        "power": "55",
        "description": "Fires three flaming arrows in succession that home in on an enemy."
      },
      {
        "name": "Ignis Charge",
        "level": 30,
        "element": "Fire",
        "cooltime": "14",
        "power": "85",
        "description": "Pyrin's exclusive skill. Charges forward while engulfed in a veil of flames. Flames continue to burn in its path."
      },
      {
        "name": "Ignis Rage",
        "level": 40,
        "element": "Fire",
        "cooltime": "40",
        "power": "120",
        "description": "Infuses the surrounding ground with energy, causing it to explode after a set amount of time."
      },
      {
        "name": "Fire Ball",
        "level": 50,
        "element": "Fire",
        "cooltime": "55",
        "power": "150",
        "description": "Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact."
      }
    ],
    "isVariant": false
  },
  {
    "id": "58B",
    "key": "Pyrin_Noct",
    "name": "Pyrin Noct",
    "types": [
      "Fire",
      "Dark"
    ],
    "stats": {
      "hp": 100,
      "attack": {
        "melee": 110,
        "ranged": 95
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 350
    },
    "suitability": {
      "kindling": 2,
      "lumbering": 1
    },
    "breedingPower": 240,
    "description": "It burns mysterious dark matter as energy\r\nand expels the remaining particles from its body.\r\nIf someone rides it, they should take care so as not to gallop down the path of darkness.",
    "image": "/images/pals/Pyrin_Noct.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ignis Blast",
        "level": 1,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Shadow Burst",
        "level": 7,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Ignis Breath",
        "level": 15,
        "element": "Fire",
        "cooltime": "15",
        "power": "70",
        "description": "Shoots flames at an enemy, dealing continuous damage."
      },
      {
        "name": "Spirit Flame",
        "level": 22,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Dark Charge",
        "level": 30,
        "element": "Dark",
        "cooltime": "14",
        "power": "85",
        "description": "Pyrin Noct's exclusive skill. Charges forward while engulfed in a veil of dark flames. Flames continue to burn in its path."
      },
      {
        "name": "Ignis Rage",
        "level": 40,
        "element": "Fire",
        "cooltime": "40",
        "power": "120",
        "description": "Infuses the surrounding ground with energy, causing it to explode after a set amount of time."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": true
  },
  {
    "id": "59",
    "key": "Reindrix",
    "name": "Reindrix",
    "types": [
      "Ice"
    ],
    "stats": {
      "hp": 100,
      "attack": {
        "melee": 80,
        "ranged": 85
      },
      "defense": 110,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 475
    },
    "suitability": {
      "lumbering": 2,
      "cooling": 2
    },
    "breedingPower": 880,
    "description": "Its transparent cerulean antlers glow with the cold of absolute zero.\r\nAny who touch them with their bare hands are instantly frozen\r\nand smashed to pieces.",
    "image": "/images/pals/Reindrix.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Ice Missile",
        "level": 7,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Icicle Cutter",
        "level": 15,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Freezing Charge",
        "level": 22,
        "element": "Ice",
        "cooltime": "9",
        "power": "65",
        "description": "Reindrix's exclusive skill. Charges at an enemy with antlers adorned in ice."
      },
      {
        "name": "Iceberg",
        "level": 30,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Crystal Breath",
        "level": 40,
        "element": "Ice",
        "cooltime": "22",
        "power": "90",
        "description": "Enshrouds an enemy in a frigid blast of air, dealing continuous damage."
      },
      {
        "name": "Blizzard Spike",
        "level": 50,
        "element": "Ice",
        "cooltime": "45",
        "power": "130",
        "description": "Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact."
      }
    ],
    "isVariant": false
  },
  {
    "id": "60",
    "key": "Rayhound",
    "name": "Rayhound",
    "types": [
      "Electric"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 100,
        "ranged": 100
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 350
    },
    "suitability": {
      "generating_electricity": 2
    },
    "breedingPower": 740,
    "description": "At full speed, it could be mistaken for a bolt of lightning.\r\nWhen two Rayhound s collide, a thunderous roar echoes through the air.",
    "image": "/images/pals/Rayhound.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Bog Blast",
        "level": 1,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Shockwave",
        "level": 7,
        "element": "Electric",
        "cooltime": "4",
        "power": "40",
        "description": "Quickly discharges electricity, shocking those around it."
      },
      {
        "name": "Spark Blast",
        "level": 15,
        "element": "Electric",
        "cooltime": "2",
        "power": "30",
        "description": "Releases lightning orbs in a fan shape, spreading as they travel."
      },
      {
        "name": "Stone Blast",
        "level": 22,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Beckon Lightning",
        "level": 26,
        "element": "Electric",
        "cooltime": "9",
        "power": "65",
        "description": "Rayhound's exclusive skill. Summons lightning one after another in front, then charges forward at high speed through the gaps between the falling bolts."
      },
      {
        "name": "Electric Ball",
        "level": 30,
        "element": "Electric",
        "cooltime": "9",
        "power": "50",
        "description": "Fires an electric ball that slowly pursues an enemy."
      },
      {
        "name": "Lightning Streak",
        "level": 40,
        "element": "Electric",
        "cooltime": "16",
        "power": "75",
        "description": "Generates a lightning bolt that moves forward in a line."
      },
      {
        "name": "Lightning Bolt",
        "level": 50,
        "element": "Electric",
        "cooltime": "55",
        "power": "150",
        "description": "Charges electric energy before blasting enemies with a powerful shock."
      }
    ],
    "isVariant": false
  },
  {
    "id": "61",
    "key": "Kitsun",
    "name": "Kitsun",
    "types": [
      "Fire"
    ],
    "stats": {
      "hp": 100,
      "attack": {
        "melee": 70,
        "ranged": 115
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 110,
      "food": 300
    },
    "suitability": {
      "kindling": 2
    },
    "breedingPower": 830,
    "description": "Despite its appearance, Kitsun is extremely sensitive and will flee into a cave when spooked.\r\nLong ago, it was considered an ill omen if one ran away from you.",
    "image": "/images/pals/Kitsun.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ignis Blast",
        "level": 1,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Spirit Fire",
        "level": 7,
        "element": "Fire",
        "cooltime": "7",
        "power": "45",
        "description": "Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward."
      },
      {
        "name": "Spirit Flame",
        "level": 15,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Daring Flames",
        "level": 22,
        "element": "Fire",
        "cooltime": "10",
        "power": "75",
        "description": "Kitsun's exclusive skill. Charges forward with great speed while enveloped in intense blue flames."
      },
      {
        "name": "Flare Storm",
        "level": 30,
        "element": "Fire",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two flaming tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Ignis Rage",
        "level": 40,
        "element": "Fire",
        "cooltime": "40",
        "power": "120",
        "description": "Infuses the surrounding ground with energy, causing it to explode after a set amount of time."
      },
      {
        "name": "Fire Ball",
        "level": 50,
        "element": "Fire",
        "cooltime": "55",
        "power": "150",
        "description": "Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact."
      }
    ],
    "isVariant": false
  },
  {
    "id": "61B",
    "key": "Kitsun_Noct",
    "name": "Kitsun Noct",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 100,
      "attack": {
        "melee": 70,
        "ranged": 115
      },
      "defense": 105,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 110,
      "food": 300
    },
    "suitability": {
      "kindling": 2
    },
    "breedingPower": 735,
    "description": "Despite its appearance, Kitsun Noct is extremely sensitive and will flee into a cave when spooked.\r\nIt has become quite gloomy from being a shut-in for too long.",
    "image": "/images/pals/Kitsun_Noct.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Dark Cannon",
        "level": 1,
        "element": "Dark",
        "cooltime": "2",
        "power": "50",
        "description": "Hurls an energy ball imbued with dark energy at an enemy."
      },
      {
        "name": "Spirit Fire",
        "level": 7,
        "element": "Fire",
        "cooltime": "7",
        "power": "45",
        "description": "Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward."
      },
      {
        "name": "Spirit Flame",
        "level": 15,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Daring Shadowstorm",
        "level": 22,
        "element": "Dark",
        "cooltime": "10",
        "power": "75",
        "description": "Kitsun Noct's exclusive skill. Charges forward with great speed while enveloped in intense purple flames."
      },
      {
        "name": "Nightmare Ball",
        "level": 30,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Flame Funnel",
        "level": 40,
        "element": "Fire",
        "cooltime": "40",
        "power": "120",
        "description": "Creates multiple spheres of fiery energy, from which countless fireballs shoot towards the enemy."
      },
      {
        "name": "Dark Whisp",
        "level": 50,
        "element": "Dark",
        "cooltime": "45",
        "power": "160",
        "description": "Fires a menacing ball of dark energy that pursues enemies."
      }
    ],
    "isVariant": true
  },
  {
    "id": "62",
    "key": "Dazzi",
    "name": "Dazzi",
    "types": [
      "Electric"
    ],
    "stats": {
      "hp": 70,
      "attack": {
        "melee": 110,
        "ranged": 80
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "generating_electricity": 1,
      "handiwork": 1,
      "transporting": 1
    },
    "breedingPower": 1210,
    "description": "Often kind to lonely Pals.\r\nHowever, the moment a Pal mistakes this for actual friendship,\r\nit seizes the opportunity to blast them with a thunderbolt.",
    "image": "/images/pals/Dazzi.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Shockwave",
        "level": 7,
        "element": "Electric",
        "cooltime": "4",
        "power": "40",
        "description": "Quickly discharges electricity, shocking those around it."
      },
      {
        "name": "Acid Rain",
        "level": 15,
        "element": "Water",
        "cooltime": "18",
        "power": "80",
        "description": "Creates acidic clouds that pour down acid rain on enemies."
      },
      {
        "name": "Lightning Streak",
        "level": 22,
        "element": "Electric",
        "cooltime": "16",
        "power": "75",
        "description": "Generates a lightning bolt that moves forward in a line."
      },
      {
        "name": "Tri-Lightning",
        "level": 30,
        "element": "Electric",
        "cooltime": "22",
        "power": "90",
        "description": "Generates lightning that strikes an enemy three times from above."
      },
      {
        "name": "Lightning Strike",
        "level": 40,
        "element": "Electric",
        "cooltime": "40",
        "power": "120",
        "description": "Acts as a lightning rod, calling down thunderbolts that electrocute the surrounding area."
      },
      {
        "name": "Lightning Bolt",
        "level": 50,
        "element": "Electric",
        "cooltime": "55",
        "power": "150",
        "description": "Charges electric energy before blasting enemies with a powerful shock."
      }
    ],
    "isVariant": false
  },
  {
    "id": "62B",
    "key": "Dazzi_Noct",
    "name": "Dazzi Noct",
    "types": [
      "Dark",
      "Electric"
    ],
    "stats": {
      "hp": 70,
      "attack": {
        "melee": 110,
        "ranged": 80
      },
      "defense": 75,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "generating_electricity": 1,
      "handiwork": 1,
      "medicine_production": 1,
      "transporting": 1
    },
    "breedingPower": 1115,
    "description": "Often kind to lonely Pals, \r\nit plots to lure them into dropping their guard before striking them down.\r\nYet, unable to find the right moment, it ends up making friends with them instead.",
    "image": "/images/pals/Dazzi_Noct.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Shadow Burst",
        "level": 7,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Dark Arrow",
        "level": 15,
        "element": "Dark",
        "cooltime": "10",
        "power": "65",
        "description": "Fires off dark energy that homes in on an enemy."
      },
      {
        "name": "Acid Rain",
        "level": 22,
        "element": "Water",
        "cooltime": "18",
        "power": "80",
        "description": "Creates acidic clouds that pour down acid rain on enemies."
      },
      {
        "name": "Tri-Lightning",
        "level": 30,
        "element": "Electric",
        "cooltime": "22",
        "power": "90",
        "description": "Generates lightning that strikes an enemy three times from above."
      },
      {
        "name": "Apocalypse",
        "level": 40,
        "element": "Dark",
        "cooltime": "55",
        "power": "110",
        "description": "Generates several dark vortexes around the enemy."
      },
      {
        "name": "Thunder Rain",
        "level": 50,
        "element": "Electric",
        "cooltime": "45",
        "power": "135",
        "description": "Calls lightning that strikes an enemy after a set amount of time has passed."
      }
    ],
    "isVariant": true
  },
  {
    "id": "63",
    "key": "Lunaris",
    "name": "Lunaris",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 80,
        "ranged": 100
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "handiwork": 3,
      "gathering": 1,
      "transporting": 1
    },
    "breedingPower": 1110,
    "description": "It can control those who carelessly stare into its eyes.\r\nThose seen with a Lunaris are in its mind,\r\nsimply under its control.",
    "image": "/images/pals/Lunaris.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Power Shot",
        "level": 7,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Icicle Cutter",
        "level": 15,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Plasma Funnel",
        "level": 22,
        "element": "Electric",
        "cooltime": "13",
        "power": "65",
        "description": "Creates two balls of electric energy that fire numerous lightning orbs at enemies."
      },
      {
        "name": "Power Bomb",
        "level": 30,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Blizzard Spike",
        "level": 40,
        "element": "Ice",
        "cooltime": "45",
        "power": "130",
        "description": "Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact."
      },
      {
        "name": "Pal Blast",
        "level": 50,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      }
    ],
    "isVariant": false
  },
  {
    "id": "64",
    "key": "Dinossom",
    "name": "Dinossom",
    "types": [
      "Grass",
      "Dragon"
    ],
    "stats": {
      "hp": 110,
      "attack": {
        "melee": 90,
        "ranged": 85
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 150,
      "food": 400
    },
    "suitability": {
      "planting": 2,
      "lumbering": 2
    },
    "breedingPower": 820,
    "description": "A Pal who once angered cannot be pacified. It rages on and on like an inferno. \r\nThe phrase |step on a Dinossom 's tail| has come to mean enraging someone.",
    "image": "/images/pals/Dinossom.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Wind Cutter",
        "level": 1,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Botanical Smash",
        "level": 7,
        "element": "Grass",
        "cooltime": "8",
        "power": "60",
        "description": "Dinossom's exclusive skill. Uses its large tail to strike the ground in front of it, delivering a shockwave in a straight line."
      },
      {
        "name": "Dragon Burst",
        "level": 15,
        "element": "Dragon",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges draconic energy, damaging those around it."
      },
      {
        "name": "Seed Mine",
        "level": 22,
        "element": "Grass",
        "cooltime": "13",
        "power": "65",
        "description": "Launches a deadly seed. If it hits an enemy, the seed explodes."
      },
      {
        "name": "Draconic Breath",
        "level": 30,
        "element": "Dragon",
        "cooltime": "15",
        "power": "70",
        "description": "Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it."
      },
      {
        "name": "Spine Vine",
        "level": 40,
        "element": "Grass",
        "cooltime": "25",
        "power": "95",
        "description": "Generates spiny thorns that chase an enemy along the ground, piercing them from below."
      },
      {
        "name": "Solar Blast",
        "level": 50,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "64B",
    "key": "Dinossom_Lux",
    "name": "Dinossom Lux",
    "types": [
      "Electric",
      "Dragon"
    ],
    "stats": {
      "hp": 110,
      "attack": {
        "melee": 90,
        "ranged": 90
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 150,
      "food": 400
    },
    "suitability": {
      "generating_electricity": 2,
      "lumbering": 2
    },
    "breedingPower": 810,
    "description": "Though struck by lightning, it lives on.\r\nThe phrase |struck by a Dinossom Lux 's bolt| has come to mean\r\nnarrowly escaping death.",
    "image": "/images/pals/Dinossom_Lux.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Shockwave",
        "level": 1,
        "element": "Electric",
        "cooltime": "4",
        "power": "40",
        "description": "Quickly discharges electricity, shocking those around it."
      },
      {
        "name": "Plasma Funnel",
        "level": 7,
        "element": "Electric",
        "cooltime": "13",
        "power": "65",
        "description": "Creates two balls of electric energy that fire numerous lightning orbs at enemies."
      },
      {
        "name": "Botanical Smash",
        "level": 15,
        "element": "Grass",
        "cooltime": "8",
        "power": "60",
        "description": "Dinossom's exclusive skill. Uses its large tail to strike the ground in front of it, delivering a shockwave in a straight line."
      },
      {
        "name": "Draconic Breath",
        "level": 22,
        "element": "Dragon",
        "cooltime": "15",
        "power": "70",
        "description": "Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it."
      },
      {
        "name": "Tri-Lightning",
        "level": 30,
        "element": "Electric",
        "cooltime": "22",
        "power": "90",
        "description": "Generates lightning that strikes an enemy three times from above."
      },
      {
        "name": "Lightning Strike",
        "level": 40,
        "element": "Electric",
        "cooltime": "40",
        "power": "120",
        "description": "Acts as a lightning rod, calling down thunderbolts that electrocute the surrounding area."
      },
      {
        "name": "Lightning Bolt",
        "level": 50,
        "element": "Electric",
        "cooltime": "55",
        "power": "150",
        "description": "Charges electric energy before blasting enemies with a powerful shock."
      }
    ],
    "isVariant": true
  },
  {
    "id": "65",
    "key": "Surfent",
    "name": "Surfent",
    "types": [
      "Water"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 70,
        "ranged": 90
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 350
    },
    "suitability": {
      "watering": 2
    },
    "breedingPower": 560,
    "description": "Its hydrodynamic form is well suited for activities on water.\r\nPoachers often catch them and use them in place of surfboards.",
    "image": "/images/pals/Surfent.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Hydro Jet",
        "level": 1,
        "element": "Water",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a high speed ball of water at an enemy."
      },
      {
        "name": "Dragon Cannon",
        "level": 7,
        "element": "Dragon",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls an energy ball imbued with draconic energy at an enemy."
      },
      {
        "name": "Aqua Gun",
        "level": 15,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Bubble Blast",
        "level": 22,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "Dragon Burst",
        "level": 30,
        "element": "Dragon",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges draconic energy, damaging those around it."
      },
      {
        "name": "Draconic Breath",
        "level": 40,
        "element": "Dragon",
        "cooltime": "15",
        "power": "70",
        "description": "Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it."
      },
      {
        "name": "Hydro Laser",
        "level": 50,
        "element": "Water",
        "cooltime": "55",
        "power": "150",
        "description": "Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it."
      }
    ],
    "isVariant": false
  },
  {
    "id": "65B",
    "key": "Surfent_Terra",
    "name": "Surfent Terra",
    "types": [
      "Ground"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 70,
        "ranged": 90
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 350
    },
    "suitability": {
      "gathering": 1
    },
    "breedingPower": 550,
    "description": "Its aerodynamic form is well suited for activities on sand.\r\nPoachers often catch them and use them in place of surfboards.",
    "image": "/images/pals/Surfent_Terra.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Bog Blast",
        "level": 1,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Dragon Cannon",
        "level": 7,
        "element": "Dragon",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls an energy ball imbued with draconic energy at an enemy."
      },
      {
        "name": "Stone Blast",
        "level": 15,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Stone Cannon",
        "level": 22,
        "element": "Ground",
        "cooltime": "15",
        "power": "70",
        "description": "Digs up a boulder and hurls it at an enemy."
      },
      {
        "name": "Sand Tornado",
        "level": 30,
        "element": "Ground",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two sand tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Draconic Breath",
        "level": 40,
        "element": "Dragon",
        "cooltime": "15",
        "power": "70",
        "description": "Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it."
      },
      {
        "name": "Rock Lance",
        "level": 50,
        "element": "Ground",
        "cooltime": "55",
        "power": "150",
        "description": "Generates a sharp rock spear under an enemy."
      }
    ],
    "isVariant": true
  },
  {
    "id": "66",
    "key": "Maraith",
    "name": "Maraith",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 75,
      "attack": {
        "melee": 50,
        "ranged": 105
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "gathering": 2,
      "mining": 1
    },
    "breedingPower": 1150,
    "description": "It relishes the peculiar scent living things give off when they are near death.\r\nIf a Maraith has taken a liking to you,\r\nit is safe to assume that is why.",
    "image": "/images/pals/Maraith.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ignis Blast",
        "level": 1,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Dark Ball",
        "level": 7,
        "element": "Dark",
        "cooltime": "4",
        "power": "40",
        "description": "Unleashes a sphere of darkness that slowly tracks down an enemy."
      },
      {
        "name": "Flare Arrow",
        "level": 15,
        "element": "Fire",
        "cooltime": "10",
        "power": "55",
        "description": "Fires three flaming arrows in succession that home in on an enemy."
      },
      {
        "name": "Shadow Burst",
        "level": 22,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Spirit Flame",
        "level": 30,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Spirit Dash",
        "level": 35,
        "element": "Dark",
        "cooltime": "15",
        "power": "90",
        "description": "Maraith's exclusive skill. While running slowly, it continuously launches flickering fireballs toward the enemy."
      },
      {
        "name": "Nightmare Ball",
        "level": 40,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "67",
    "key": "Digtoise",
    "name": "Digtoise",
    "types": [
      "Ground"
    ],
    "stats": {
      "hp": 80,
      "attack": {
        "melee": 80,
        "ranged": 95
      },
      "defense": 120,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 350
    },
    "suitability": {
      "mining": 3
    },
    "breedingPower": 850,
    "description": "A Digtoise possessing the strongest shell and the only drill capable of piercing it,\r\nponders the contradictions of the world in the popular children's tale, | Digtoise 's Fable|.",
    "image": "/images/pals/Digtoise.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Aqua Gun",
        "level": 1,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Stone Blast",
        "level": 7,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Shell Spin",
        "level": 15,
        "element": "Ground",
        "cooltime": "9",
        "power": "65",
        "description": "Digtoise's exclusive skill. Moves while spinning its whole body at high speed. Drills through enemies, dealing continuous damage."
      },
      {
        "name": "Stone Cannon",
        "level": 22,
        "element": "Ground",
        "cooltime": "15",
        "power": "70",
        "description": "Digs up a boulder and hurls it at an enemy."
      },
      {
        "name": "Sand Tornado",
        "level": 30,
        "element": "Ground",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two sand tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Aqua Burst",
        "level": 40,
        "element": "Water",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of water and hurls it at an enemy."
      },
      {
        "name": "Rock Lance",
        "level": 50,
        "element": "Ground",
        "cooltime": "55",
        "power": "150",
        "description": "Generates a sharp rock spear under an enemy."
      }
    ],
    "isVariant": false
  },
  {
    "id": "68",
    "key": "Tombat",
    "name": "Tombat",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 95,
      "attack": {
        "melee": 100,
        "ranged": 95
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 350
    },
    "suitability": {
      "gathering": 2,
      "mining": 2,
      "transporting": 2
    },
    "breedingPower": 750,
    "description": "Often appears out of the blue to flaunt its prized wings in front of other Pals. \r\nAlthough this appears to be an intimidation tactic, \r\nthe Pal seems to derive some kind of pleasure from the display.",
    "image": "/images/pals/Tombat.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Poison Blast",
        "level": 7,
        "element": "Dark",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls poison sludge at an enemy."
      },
      {
        "name": "Dark Ball",
        "level": 15,
        "element": "Dark",
        "cooltime": "4",
        "power": "40",
        "description": "Unleashes a sphere of darkness that slowly tracks down an enemy."
      },
      {
        "name": "Shadow Burst",
        "level": 22,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Spirit Flame",
        "level": 30,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Nightmare Ball",
        "level": 40,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "69",
    "key": "Lovander",
    "name": "Lovander",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 120,
      "attack": {
        "melee": 70,
        "ranged": 70
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 140,
      "food": 350
    },
    "suitability": {
      "handiwork": 2,
      "mining": 1,
      "medicine_production": 2,
      "transporting": 2
    },
    "breedingPower": 940,
    "description": "Seeking a night of love, it is always chasing someone around.\r\nAt first it only showed interest in other Pals, but in recent years\r\neven humans have become the target of its debauchery.",
    "image": "/images/pals/Lovander.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Power Shot",
        "level": 1,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Poison Blast",
        "level": 7,
        "element": "Dark",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls poison sludge at an enemy."
      },
      {
        "name": "Shadow Burst",
        "level": 15,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Acid Rain",
        "level": 22,
        "element": "Water",
        "cooltime": "18",
        "power": "80",
        "description": "Creates acidic clouds that pour down acid rain on enemies."
      },
      {
        "name": "Power Bomb",
        "level": 30,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Implode",
        "level": 40,
        "element": "Neutral",
        "cooltime": "55",
        "power": "230",
        "description": "Risks its life to cause a violent explosion. Becomes incapacitated afterwards."
      },
      {
        "name": "Pal Blast",
        "level": 50,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      }
    ],
    "isVariant": false
  },
  {
    "id": "70",
    "key": "Flambelle",
    "name": "Flambelle",
    "types": [
      "Fire"
    ],
    "stats": {
      "hp": 60,
      "attack": {
        "melee": 100,
        "ranged": 70
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "kindling": 1,
      "handiwork": 1,
      "transporting": 1,
      "farming": 1
    },
    "breedingPower": 1405,
    "description": "When it starts crying, this Pal produces magma in place of tears.\r\nThe magma that pours out is absorbed back into its body, causing it to get hotter and hotter.\r\nThe more it cries, the stronger it becomes.",
    "image": "/images/pals/Flambelle.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ignis Blast",
        "level": 1,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Spirit Fire",
        "level": 7,
        "element": "Fire",
        "cooltime": "7",
        "power": "45",
        "description": "Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward."
      },
      {
        "name": "Flare Arrow",
        "level": 15,
        "element": "Fire",
        "cooltime": "10",
        "power": "55",
        "description": "Fires three flaming arrows in succession that home in on an enemy."
      },
      {
        "name": "Spirit Flame",
        "level": 22,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Flare Storm",
        "level": 30,
        "element": "Fire",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two flaming tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Ignis Rage",
        "level": 40,
        "element": "Fire",
        "cooltime": "40",
        "power": "120",
        "description": "Infuses the surrounding ground with energy, causing it to explode after a set amount of time."
      },
      {
        "name": "Fire Ball",
        "level": 50,
        "element": "Fire",
        "cooltime": "55",
        "power": "150",
        "description": "Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact."
      }
    ],
    "isVariant": false
  },
  {
    "id": "71",
    "key": "Vanwyrm",
    "name": "Vanwyrm",
    "types": [
      "Fire",
      "Dark"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 100,
        "ranged": 115
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 400
    },
    "suitability": {
      "kindling": 1,
      "transporting": 3
    },
    "breedingPower": 660,
    "description": "The melodies of a flute made from the exoskeleton of a Vanwyrm are said to cross whole mountain ranges.\r\nIn ages past, such flutes were used to signal an attack.",
    "image": "/images/pals/Vanwyrm.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Ignis Blast",
        "level": 7,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Spirit Fire",
        "level": 15,
        "element": "Fire",
        "cooltime": "7",
        "power": "45",
        "description": "Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward."
      },
      {
        "name": "Ignis Breath",
        "level": 22,
        "element": "Fire",
        "cooltime": "15",
        "power": "70",
        "description": "Shoots flames at an enemy, dealing continuous damage."
      },
      {
        "name": "Flame Breath",
        "level": 26,
        "element": "Fire",
        "cooltime": "15",
        "power": "90",
        "description": "Vanwyrms exclusive skill. Advances while breathing fire from its mouth."
      },
      {
        "name": "Nightmare Ball",
        "level": 30,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Fire Ball",
        "level": 40,
        "element": "Fire",
        "cooltime": "55",
        "power": "150",
        "description": "Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "71B",
    "key": "Vanwyrm_Cryst",
    "name": "Vanwyrm Cryst",
    "types": [
      "Ice",
      "Dark"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 100,
        "ranged": 120
      },
      "defense": 95,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 400
    },
    "suitability": {
      "cooling": 2,
      "transporting": 3
    },
    "breedingPower": 620,
    "description": "The melodies of a flute made from the exoskeleton of a Vanwyrm Cryst are said tocross whole mountain ranges.\r\nIn ages past, such flutes were used to signal victory in battle.",
    "image": "/images/pals/Vanwyrm_Cryst.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Ice Missile",
        "level": 7,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Icicle Cutter",
        "level": 15,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Crystal Breath",
        "level": 22,
        "element": "Ice",
        "cooltime": "22",
        "power": "90",
        "description": "Enshrouds an enemy in a frigid blast of air, dealing continuous damage."
      },
      {
        "name": "Tempest Blizzard",
        "level": 26,
        "element": "Ice",
        "cooltime": "15",
        "power": "90",
        "description": "Vanwyrm Cryst's exclusive skill. Advances while exhaling cold air from its mouth."
      },
      {
        "name": "Nightmare Ball",
        "level": 30,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Blizzard Spike",
        "level": 40,
        "element": "Ice",
        "cooltime": "45",
        "power": "130",
        "description": "Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": true
  },
  {
    "id": "72",
    "key": "Bushi",
    "name": "Bushi",
    "types": [
      "Fire"
    ],
    "stats": {
      "hp": 80,
      "attack": {
        "melee": 100,
        "ranged": 125
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 300
    },
    "suitability": {
      "kindling": 2,
      "handiwork": 1,
      "gathering": 1,
      "lumbering": 3,
      "transporting": 2
    },
    "breedingPower": 640,
    "description": "Its body becomes a blade upon death, to be taken up by the next generation.\r\nIf someone other than a Bushi wields this blade, the soul within\r\ntorments them until they are driven mad.",
    "image": "/images/pals/Bushi.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ignis Blast",
        "level": 1,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Wind Cutter",
        "level": 7,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Icicle Cutter",
        "level": 15,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Iaigiri",
        "level": 22,
        "element": "Fire",
        "cooltime": "9",
        "power": "65",
        "description": "Bushi's exclusive skill. Taking hold of the sword, it appears in front of an enemy in an instant and unleashes an ultra-fast sword draw attack."
      },
      {
        "name": "Ignis Breath",
        "level": 30,
        "element": "Fire",
        "cooltime": "15",
        "power": "70",
        "description": "Shoots flames at an enemy, dealing continuous damage."
      },
      {
        "name": "Lightning Strike",
        "level": 40,
        "element": "Electric",
        "cooltime": "40",
        "power": "120",
        "description": "Acts as a lightning rod, calling down thunderbolts that electrocute the surrounding area."
      },
      {
        "name": "Ignis Rage",
        "level": 50,
        "element": "Fire",
        "cooltime": "40",
        "power": "120",
        "description": "Infuses the surrounding ground with energy, causing it to explode after a set amount of time."
      }
    ],
    "isVariant": false
  },
  {
    "id": "72B",
    "key": "Bushi_Noct",
    "name": "Bushi Noct",
    "types": [
      "Fire",
      "Dark"
    ],
    "stats": {
      "hp": 80,
      "attack": {
        "melee": 100,
        "ranged": 130
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 300
    },
    "suitability": {
      "kindling": 2,
      "handiwork": 1,
      "gathering": 1,
      "lumbering": 3,
      "transporting": 2
    },
    "breedingPower": 650,
    "description": "Its body becomes a blade upon death, to be taken up by the next generation.\r\nIf the Bushi who inherits it has a weak heart, the voices of the dead will drive it mad.\r\nThe madness turns it into Bushi Noct that endlessly wanders.",
    "image": "/images/pals/Bushi_Noct.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Spirit Fire",
        "level": 1,
        "element": "Fire",
        "cooltime": "7",
        "power": "45",
        "description": "Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward."
      },
      {
        "name": "Umbral Surge",
        "level": 7,
        "element": "Dark",
        "cooltime": "2",
        "power": "40",
        "description": "Fires high-speed dark orbs in a fan shape, spreading as they travel."
      },
      {
        "name": "Dark Cannon",
        "level": 15,
        "element": "Dark",
        "cooltime": "2",
        "power": "50",
        "description": "Hurls an energy ball imbued with dark energy at an enemy."
      },
      {
        "name": "Iaigiri",
        "level": 18,
        "element": "Fire",
        "cooltime": "9",
        "power": "65",
        "description": "Bushi's exclusive skill. Taking hold of the sword, it appears in front of an enemy in an instant and unleashes an ultra-fast sword draw attack."
      },
      {
        "name": "Dark Arrow",
        "level": 22,
        "element": "Dark",
        "cooltime": "10",
        "power": "65",
        "description": "Fires off dark energy that homes in on an enemy."
      },
      {
        "name": "Spirit Flame",
        "level": 30,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Flame Wall",
        "level": 40,
        "element": "Fire",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a wall of flames at the enemy's location. The wall of flames will remain for a while, and deal damage to the enemies it touches."
      },
      {
        "name": "Apocalypse",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "110",
        "description": "Generates several dark vortexes around the enemy."
      }
    ],
    "isVariant": true
  },
  {
    "id": "73",
    "key": "Beakon",
    "name": "Beakon",
    "types": [
      "Electric"
    ],
    "stats": {
      "hp": 105,
      "attack": {
        "melee": 100,
        "ranged": 115
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 475
    },
    "suitability": {
      "generating_electricity": 2,
      "gathering": 1,
      "transporting": 3
    },
    "breedingPower": 220,
    "description": "Some think it is a related species to Ragnahawk , but there is in fact no connection.\r\nUsing its sharp beak, it descends on its prey in a quick motion\r\nthat resembles a bolt of lightning.",
    "image": "/images/pals/Beakon.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Spark Blast",
        "level": 7,
        "element": "Electric",
        "cooltime": "2",
        "power": "30",
        "description": "Releases lightning orbs in a fan shape, spreading as they travel."
      },
      {
        "name": "Shockwave",
        "level": 15,
        "element": "Electric",
        "cooltime": "4",
        "power": "40",
        "description": "Quickly discharges electricity, shocking those around it."
      },
      {
        "name": "Lightning Streak",
        "level": 22,
        "element": "Electric",
        "cooltime": "16",
        "power": "75",
        "description": "Generates a lightning bolt that moves forward in a line."
      },
      {
        "name": "Lightning Dive",
        "level": 26,
        "element": "Electric",
        "cooltime": "12",
        "power": "80",
        "description": "Beakon's exclusive skill. First, it strikes the enemy's location with lightning. Then, while gliding forward, it drops lightning to the left and right."
      },
      {
        "name": "Tri-Lightning",
        "level": 30,
        "element": "Electric",
        "cooltime": "22",
        "power": "90",
        "description": "Generates lightning that strikes an enemy three times from above."
      },
      {
        "name": "Sand Tornado",
        "level": 40,
        "element": "Ground",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two sand tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Lightning Bolt",
        "level": 50,
        "element": "Electric",
        "cooltime": "55",
        "power": "150",
        "description": "Charges electric energy before blasting enemies with a powerful shock."
      }
    ],
    "isVariant": false
  },
  {
    "id": "74",
    "key": "Ragnahawk",
    "name": "Ragnahawk",
    "types": [
      "Fire"
    ],
    "stats": {
      "hp": 95,
      "attack": {
        "melee": 100,
        "ranged": 105
      },
      "defense": 120,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 475
    },
    "suitability": {
      "kindling": 3,
      "transporting": 3
    },
    "breedingPower": 380,
    "description": "Some think it is a related species to Beakon , but there is in fact no connection.\r\nIt mainly eats rocks, and after many long years its\r\nbeak and head have hardened to accommodate this diet.",
    "image": "/images/pals/Ragnahawk.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Spirit Fire",
        "level": 7,
        "element": "Fire",
        "cooltime": "7",
        "power": "45",
        "description": "Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward."
      },
      {
        "name": "Flare Arrow",
        "level": 15,
        "element": "Fire",
        "cooltime": "10",
        "power": "55",
        "description": "Fires three flaming arrows in succession that home in on an enemy."
      },
      {
        "name": "Sand Tornado",
        "level": 22,
        "element": "Ground",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two sand tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Rush Beak",
        "level": 26,
        "element": "Fire",
        "cooltime": "14",
        "power": "85",
        "description": "Ragnahawk's exclusive skill. While flapping forward, it strikes with its beak to ignite fires in front, right, and left, causing a small explosion."
      },
      {
        "name": "Flare Storm",
        "level": 30,
        "element": "Fire",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two flaming tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Ignis Breath",
        "level": 40,
        "element": "Fire",
        "cooltime": "15",
        "power": "70",
        "description": "Shoots flames at an enemy, dealing continuous damage."
      },
      {
        "name": "Fire Ball",
        "level": 50,
        "element": "Fire",
        "cooltime": "55",
        "power": "150",
        "description": "Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact."
      }
    ],
    "isVariant": false
  },
  {
    "id": "75",
    "key": "Katress",
    "name": "Katress",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 100,
        "ranged": 105
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 350
    },
    "suitability": {
      "handiwork": 2,
      "medicine_production": 2,
      "transporting": 2
    },
    "breedingPower": 700,
    "description": "With the power of shadows, it produces arcane phenomena.\r\nIt prefers to eat food raw and is particularly hostile towards Wixen .",
    "image": "/images/pals/Katress.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ignis Blast",
        "level": 1,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Dark Ball",
        "level": 7,
        "element": "Dark",
        "cooltime": "4",
        "power": "40",
        "description": "Unleashes a sphere of darkness that slowly tracks down an enemy."
      },
      {
        "name": "Flare Arrow",
        "level": 15,
        "element": "Fire",
        "cooltime": "10",
        "power": "55",
        "description": "Fires three flaming arrows in succession that home in on an enemy."
      },
      {
        "name": "Shadow Burst",
        "level": 22,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Spirit Flame",
        "level": 30,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Nightmare Ball",
        "level": 40,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "75B",
    "key": "Katress_Ignis",
    "name": "Katress Ignis",
    "types": [
      "Dark",
      "Fire"
    ],
    "stats": {
      "hp": 95,
      "attack": {
        "melee": 100,
        "ranged": 105
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 350
    },
    "suitability": {
      "kindling": 2,
      "handiwork": 2,
      "medicine_production": 2,
      "transporting": 2
    },
    "breedingPower": 690,
    "description": "Due to its upbringing, it no longer cares about whether its food is raw enough. \r\nThis Pal stopped worrying about those details,\r\nand just prefers its food to be as spicy as possible. \r\nNot on good terms with Wixen Noct .",
    "image": "/images/pals/Katress_Ignis.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ignis Blast",
        "level": 1,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Dark Cannon",
        "level": 7,
        "element": "Dark",
        "cooltime": "2",
        "power": "50",
        "description": "Hurls an energy ball imbued with dark energy at an enemy."
      },
      {
        "name": "Flare Arrow",
        "level": 15,
        "element": "Fire",
        "cooltime": "10",
        "power": "55",
        "description": "Fires three flaming arrows in succession that home in on an enemy."
      },
      {
        "name": "Flare Storm",
        "level": 22,
        "element": "Fire",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two flaming tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Flame Wall",
        "level": 30,
        "element": "Fire",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a wall of flames at the enemy's location. The wall of flames will remain for a while, and deal damage to the enemies it touches."
      },
      {
        "name": "Flame Funnel",
        "level": 40,
        "element": "Fire",
        "cooltime": "40",
        "power": "120",
        "description": "Creates multiple spheres of fiery energy, from which countless fireballs shoot towards the enemy."
      },
      {
        "name": "Fire Ball",
        "level": 50,
        "element": "Fire",
        "cooltime": "55",
        "power": "150",
        "description": "Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact."
      }
    ],
    "isVariant": true
  },
  {
    "id": "76",
    "key": "Wixen",
    "name": "Wixen",
    "types": [
      "Fire"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 50,
        "ranged": 110
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 120,
      "food": 350
    },
    "suitability": {
      "kindling": 2,
      "handiwork": 3,
      "transporting": 2
    },
    "breedingPower": 1160,
    "description": "With the power of light, it produces arcane phenomena.\r\nIt prefers to eat food well-done and is particularly hostile towards Katress .",
    "image": "/images/pals/Wixen.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ignis Blast",
        "level": 1,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Spirit Fire",
        "level": 7,
        "element": "Fire",
        "cooltime": "7",
        "power": "45",
        "description": "Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward."
      },
      {
        "name": "Flare Arrow",
        "level": 15,
        "element": "Fire",
        "cooltime": "10",
        "power": "55",
        "description": "Fires three flaming arrows in succession that home in on an enemy."
      },
      {
        "name": "Spirit Flame",
        "level": 22,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Flare Storm",
        "level": 30,
        "element": "Fire",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two flaming tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Fire Ball",
        "level": 40,
        "element": "Fire",
        "cooltime": "55",
        "power": "150",
        "description": "Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact."
      },
      {
        "name": "Dragon Meteor",
        "level": 50,
        "element": "Dragon",
        "cooltime": "55",
        "power": "150",
        "description": "Summons numerous small meteorites and launches them at an enemy."
      }
    ],
    "isVariant": false
  },
  {
    "id": "76B",
    "key": "Wixen_Noct",
    "name": "Wixen Noct",
    "types": [
      "Fire",
      "Dark"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 50,
        "ranged": 110
      },
      "defense": 85,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 120,
      "food": 350
    },
    "suitability": {
      "kindling": 2,
      "handiwork": 3,
      "transporting": 2
    },
    "breedingPower": 1150,
    "description": "Due to its upbringing, it no longer cares about whether its food is cooked enough.\r\nThis Pal stopped worrying about those details,\r\nand just prefers its food to be as sweet as possible. \r\nNot on good terms with Katress Ignis .",
    "image": "/images/pals/Wixen_Noct.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Umbral Surge",
        "level": 1,
        "element": "Dark",
        "cooltime": "2",
        "power": "40",
        "description": "Fires high-speed dark orbs in a fan shape, spreading as they travel."
      },
      {
        "name": "Dark Cannon",
        "level": 7,
        "element": "Dark",
        "cooltime": "2",
        "power": "50",
        "description": "Hurls an energy ball imbued with dark energy at an enemy."
      },
      {
        "name": "Dark Arrow",
        "level": 15,
        "element": "Dark",
        "cooltime": "10",
        "power": "65",
        "description": "Fires off dark energy that homes in on an enemy."
      },
      {
        "name": "Flare Storm",
        "level": 22,
        "element": "Fire",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two flaming tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Spirit Flame",
        "level": 30,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Flame Wall",
        "level": 40,
        "element": "Fire",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a wall of flames at the enemy's location. The wall of flames will remain for a while, and deal damage to the enemies it touches."
      },
      {
        "name": "Apocalypse",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "110",
        "description": "Generates several dark vortexes around the enemy."
      }
    ],
    "isVariant": true
  },
  {
    "id": "77",
    "key": "Verdash",
    "name": "Verdash",
    "types": [
      "Grass"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 100,
        "ranged": 115
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "planting": 2,
      "handiwork": 3,
      "gathering": 3,
      "lumbering": 2,
      "transporting": 2
    },
    "breedingPower": 990,
    "description": "Land that Verdash has run across becomes extremely fertile,\r\nwith thick vegetation growing soon after.\r\nIt will not run anywhere that herbicide has been used.",
    "image": "/images/pals/Verdash.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Wind Cutter",
        "level": 1,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Stone Cannon",
        "level": 7,
        "element": "Ground",
        "cooltime": "15",
        "power": "70",
        "description": "Digs up a boulder and hurls it at an enemy."
      },
      {
        "name": "Seed Machine Gun",
        "level": 15,
        "element": "Grass",
        "cooltime": "9",
        "power": "50",
        "description": "Fires a volley of hard seeds at enemies in front of it."
      },
      {
        "name": "Stone Blast",
        "level": 22,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Grass Tornado",
        "level": 30,
        "element": "Grass",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Leaping Roundhouse",
        "level": 35,
        "element": "Grass",
        "cooltime": "15",
        "power": "90",
        "description": "Verdash's exclusive skill. While jumping forward, it sweeps the surroundings with a high-speed spinning kick."
      },
      {
        "name": "Spine Vine",
        "level": 40,
        "element": "Grass",
        "cooltime": "25",
        "power": "95",
        "description": "Generates spiny thorns that chase an enemy along the ground, piercing them from below."
      },
      {
        "name": "Solar Blast",
        "level": 50,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "78",
    "key": "Vaelet",
    "name": "Vaelet",
    "types": [
      "Grass"
    ],
    "stats": {
      "hp": 100,
      "attack": {
        "melee": 100,
        "ranged": 100
      },
      "defense": 120,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "planting": 2,
      "handiwork": 2,
      "gathering": 2,
      "medicine_production": 3,
      "transporting": 1
    },
    "breedingPower": 1050,
    "description": "The castle was filled with the king's favorite flowers.\r\nA great battle ensued, and flames approached the castle.\r\nAmidst the chaos, the spirit of a flower appeared.\r\n- From the fairy tale, |The King's Flower.|",
    "image": "/images/pals/Vaelet.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Poison Fog",
        "level": 1,
        "element": "Dark",
        "cooltime": "30",
        "power": "0",
        "description": "Generates a fog of poison in front, causing the opponent to become poisoned."
      },
      {
        "name": "Wind Cutter",
        "level": 7,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Poison Blast",
        "level": 15,
        "element": "Dark",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls poison sludge at an enemy."
      },
      {
        "name": "Seed Mine",
        "level": 22,
        "element": "Grass",
        "cooltime": "13",
        "power": "65",
        "description": "Launches a deadly seed. If it hits an enemy, the seed explodes."
      },
      {
        "name": "Grass Tornado",
        "level": 30,
        "element": "Grass",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Nightmare Ball",
        "level": 40,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Solar Blast",
        "level": 50,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "79",
    "key": "Sibelyx",
    "name": "Sibelyx",
    "types": [
      "Ice"
    ],
    "stats": {
      "hp": 110,
      "attack": {
        "melee": 90,
        "ranged": 90
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 90,
      "food": 350
    },
    "suitability": {
      "medicine_production": 2,
      "cooling": 2,
      "farming": 1
    },
    "breedingPower": 450,
    "description": "A Pal that likes the rain, and will often bask in rain showers\r\nuntil the weather clears up.\r\nOn rainy days, Foxparks can often be found taking shelter beneath it.",
    "image": "/images/pals/Sibelyx.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ice Missile",
        "level": 1,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Icicle Cutter",
        "level": 7,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Iceberg",
        "level": 15,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Crystal Breath",
        "level": 22,
        "element": "Ice",
        "cooltime": "22",
        "power": "90",
        "description": "Enshrouds an enemy in a frigid blast of air, dealing continuous damage."
      },
      {
        "name": "Spirit Flame",
        "level": 30,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Aqua Burst",
        "level": 40,
        "element": "Water",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of water and hurls it at an enemy."
      },
      {
        "name": "Blizzard Spike",
        "level": 50,
        "element": "Ice",
        "cooltime": "45",
        "power": "130",
        "description": "Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact."
      }
    ],
    "isVariant": false
  },
  {
    "id": "80",
    "key": "Elphidran",
    "name": "Elphidran",
    "types": [
      "Dragon"
    ],
    "stats": {
      "hp": 110,
      "attack": {
        "melee": 80,
        "ranged": 80
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 400
    },
    "suitability": {
      "lumbering": 2
    },
    "breedingPower": 540,
    "description": "It possesses a demeanor as pure as its appearance suggests.\r\nPerhaps because of this, it is sometimes unable to discern good from evil,\r\noften allowing wrongdoers to take advantage of it.",
    "image": "/images/pals/Elphidran.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Dragon Cannon",
        "level": 1,
        "element": "Dragon",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls an energy ball imbued with draconic energy at an enemy."
      },
      {
        "name": "Dragon Burst",
        "level": 7,
        "element": "Dragon",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges draconic energy, damaging those around it."
      },
      {
        "name": "Flare Arrow",
        "level": 15,
        "element": "Fire",
        "cooltime": "10",
        "power": "55",
        "description": "Fires three flaming arrows in succession that home in on an enemy."
      },
      {
        "name": "Mystic Whirlwind",
        "level": 22,
        "element": "Dragon",
        "cooltime": "10",
        "power": "70",
        "description": "Elphidran's exclusive skill. Generates twin whirlwinds imbued with a mysterious power that pursues enemies."
      },
      {
        "name": "Draconic Breath",
        "level": 30,
        "element": "Dragon",
        "cooltime": "15",
        "power": "70",
        "description": "Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it."
      },
      {
        "name": "Pal Blast",
        "level": 40,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      },
      {
        "name": "Dragon Meteor",
        "level": 50,
        "element": "Dragon",
        "cooltime": "55",
        "power": "150",
        "description": "Summons numerous small meteorites and launches them at an enemy."
      }
    ],
    "isVariant": false
  },
  {
    "id": "80B",
    "key": "Elphidran_Aqua",
    "name": "Elphidran Aqua",
    "types": [
      "Dragon",
      "Water"
    ],
    "stats": {
      "hp": 115,
      "attack": {
        "melee": 80,
        "ranged": 80
      },
      "defense": 95,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 400
    },
    "suitability": {
      "watering": 3,
      "lumbering": 2
    },
    "breedingPower": 530,
    "description": "It possesses a demeanor as pure as its appearance suggests.\r\nPerhaps because of this, it harbors no ill will in any of its actions\r\nand is indifferent even after killing someone.",
    "image": "/images/pals/Elphidran_Aqua.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Aqua Gun",
        "level": 1,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Dragon Cannon",
        "level": 7,
        "element": "Dragon",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls an energy ball imbued with draconic energy at an enemy."
      },
      {
        "name": "Dragon Burst",
        "level": 15,
        "element": "Dragon",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges draconic energy, damaging those around it."
      },
      {
        "name": "Mystic Whirlwind",
        "level": 22,
        "element": "Dragon",
        "cooltime": "10",
        "power": "70",
        "description": "Elphidran's exclusive skill. Generates twin whirlwinds imbued with a mysterious power that pursues enemies."
      },
      {
        "name": "Acid Rain",
        "level": 30,
        "element": "Water",
        "cooltime": "18",
        "power": "80",
        "description": "Creates acidic clouds that pour down acid rain on enemies."
      },
      {
        "name": "Hydro Laser",
        "level": 40,
        "element": "Water",
        "cooltime": "55",
        "power": "150",
        "description": "Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it."
      },
      {
        "name": "Dragon Meteor",
        "level": 50,
        "element": "Dragon",
        "cooltime": "55",
        "power": "150",
        "description": "Summons numerous small meteorites and launches them at an enemy."
      }
    ],
    "isVariant": true
  },
  {
    "id": "81",
    "key": "Kelpsea",
    "name": "Kelpsea",
    "types": [
      "Water"
    ],
    "stats": {
      "hp": 70,
      "attack": {
        "melee": 100,
        "ranged": 70
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 100
    },
    "suitability": {
      "watering": 1,
      "farming": 1
    },
    "breedingPower": 1260,
    "description": "Its personality changes depending on the quality of the water it was born into. Kelpsea born into polluted waters are generally ill-tempered\r\nand quickly become delinquents.",
    "image": "/images/pals/Kelpsea.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Hydro Jet",
        "level": 1,
        "element": "Water",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a high speed ball of water at an enemy."
      },
      {
        "name": "Dragon Cannon",
        "level": 7,
        "element": "Dragon",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls an energy ball imbued with draconic energy at an enemy."
      },
      {
        "name": "Aqua Gun",
        "level": 15,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Bubble Blast",
        "level": 22,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "Power Bomb",
        "level": 30,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Aqua Burst",
        "level": 40,
        "element": "Water",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of water and hurls it at an enemy."
      },
      {
        "name": "Hydro Laser",
        "level": 50,
        "element": "Water",
        "cooltime": "55",
        "power": "150",
        "description": "Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it."
      }
    ],
    "isVariant": false
  },
  {
    "id": "81B",
    "key": "Kelpsea_Ignis",
    "name": "Kelpsea Ignis",
    "types": [
      "Fire"
    ],
    "stats": {
      "hp": 70,
      "attack": {
        "melee": 100,
        "ranged": 70
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 100
    },
    "suitability": {
      "kindling": 1,
      "farming": 1
    },
    "breedingPower": 1270,
    "description": "Its personality changes depending on the temperature of the water it was born into. Kelpsea born in warm waters\r\ngenerally have a passionate, motivated personality.",
    "image": "/images/pals/Kelpsea_Ignis.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ignis Blast",
        "level": 1,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Dragon Cannon",
        "level": 7,
        "element": "Dragon",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls an energy ball imbued with draconic energy at an enemy."
      },
      {
        "name": "Spirit Fire",
        "level": 15,
        "element": "Fire",
        "cooltime": "7",
        "power": "45",
        "description": "Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward."
      },
      {
        "name": "Flare Arrow",
        "level": 22,
        "element": "Fire",
        "cooltime": "10",
        "power": "55",
        "description": "Fires three flaming arrows in succession that home in on an enemy."
      },
      {
        "name": "Dragon Burst",
        "level": 30,
        "element": "Dragon",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges draconic energy, damaging those around it."
      },
      {
        "name": "Ignis Breath",
        "level": 40,
        "element": "Fire",
        "cooltime": "15",
        "power": "70",
        "description": "Shoots flames at an enemy, dealing continuous damage."
      },
      {
        "name": "Fire Ball",
        "level": 50,
        "element": "Fire",
        "cooltime": "55",
        "power": "150",
        "description": "Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact."
      }
    ],
    "isVariant": true
  },
  {
    "id": "82",
    "key": "Azurobe",
    "name": "Azurobe",
    "types": [
      "Water",
      "Dragon"
    ],
    "stats": {
      "hp": 110,
      "attack": {
        "melee": 70,
        "ranged": 100
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 400
    },
    "suitability": {
      "watering": 3
    },
    "breedingPower": 500,
    "description": "This Pal's white ribbon turns black if doused with impure water. \r\nGiven its usefulness in detecting poison, this Pal was once overhunted. \r\nThis past has left them bitter towards humanity.",
    "image": "/images/pals/Azurobe.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Aqua Gun",
        "level": 1,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Dragon Cannon",
        "level": 7,
        "element": "Dragon",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls an energy ball imbued with draconic energy at an enemy."
      },
      {
        "name": "Bubble Blast",
        "level": 15,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "Dragon Burst",
        "level": 22,
        "element": "Dragon",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges draconic energy, damaging those around it."
      },
      {
        "name": "Draconic Breath",
        "level": 30,
        "element": "Dragon",
        "cooltime": "15",
        "power": "70",
        "description": "Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it."
      },
      {
        "name": "Hydro Laser",
        "level": 40,
        "element": "Water",
        "cooltime": "55",
        "power": "150",
        "description": "Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it."
      },
      {
        "name": "Dragon Meteor",
        "level": 50,
        "element": "Dragon",
        "cooltime": "55",
        "power": "150",
        "description": "Summons numerous small meteorites and launches them at an enemy."
      }
    ],
    "isVariant": false
  },
  {
    "id": "82B",
    "key": "Azurobe_Cryst",
    "name": "Azurobe Cryst",
    "types": [
      "Ice",
      "Dragon"
    ],
    "stats": {
      "hp": 115,
      "attack": {
        "melee": 100,
        "ranged": 105
      },
      "defense": 105,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 400
    },
    "suitability": {
      "cooling": 3
    },
    "breedingPower": 480,
    "description": "This Pal’s white ribbon continuously absorbs heat from its surroundings, \r\nyet its temperature remains curiously unchanged. \r\nThis strange ability once made it a target of relentless hunting, \r\nleaving it with a deep mistrust of humans to this day.",
    "image": "/images/pals/Azurobe_Cryst.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ice Missile",
        "level": 1,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Dragon Burst",
        "level": 7,
        "element": "Dragon",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges draconic energy, damaging those around it."
      },
      {
        "name": "Iceberg",
        "level": 15,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Draconic Breath",
        "level": 22,
        "element": "Dragon",
        "cooltime": "15",
        "power": "70",
        "description": "Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it."
      },
      {
        "name": "Crystal Breath",
        "level": 30,
        "element": "Ice",
        "cooltime": "22",
        "power": "90",
        "description": "Enshrouds an enemy in a frigid blast of air, dealing continuous damage."
      },
      {
        "name": "Charge Cannon",
        "level": 40,
        "element": "Dragon",
        "cooltime": "50",
        "power": "140",
        "description": "Fires an energy orb infused with draconic power at the enemy. The orb causes a wide-area explosion upon impact."
      },
      {
        "name": "Diamond Rain",
        "level": 50,
        "element": "Ice",
        "cooltime": "60",
        "power": "160",
        "description": "Creates numerous lumps of ice that are consecutively dropped on a foe's head."
      }
    ],
    "isVariant": true
  },
  {
    "id": "83",
    "key": "Cryolinx",
    "name": "Cryolinx",
    "types": [
      "Ice"
    ],
    "stats": {
      "hp": 100,
      "attack": {
        "melee": 140,
        "ranged": 100
      },
      "defense": 110,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 475
    },
    "suitability": {
      "handiwork": 1,
      "lumbering": 2,
      "cooling": 3,
      "transporting": 3
    },
    "breedingPower": 130,
    "description": "It can easily climb steep mountains with its hard claws.\r\nHowever, its short legs make it difficult to descend,\r\noften leaving it stranded in high places.",
    "image": "/images/pals/Cryolinx.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Power Shot",
        "level": 1,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Ice Missile",
        "level": 7,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Stone Cannon",
        "level": 15,
        "element": "Ground",
        "cooltime": "15",
        "power": "70",
        "description": "Digs up a boulder and hurls it at an enemy."
      },
      {
        "name": "Icicle Cutter",
        "level": 22,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Iceberg",
        "level": 30,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Blizzard Claw",
        "level": 35,
        "element": "Ice",
        "cooltime": "14",
        "power": "85",
        "description": "Cryolinx's exclusive skill. First, it strikes with its claws, followed by a second slash, and culminates with a powerful slash using its entire body. When swinging the claws, ice pillars are launched forward in a fan shape."
      },
      {
        "name": "Crystal Breath",
        "level": 40,
        "element": "Ice",
        "cooltime": "22",
        "power": "90",
        "description": "Enshrouds an enemy in a frigid blast of air, dealing continuous damage."
      },
      {
        "name": "Blizzard Spike",
        "level": 50,
        "element": "Ice",
        "cooltime": "45",
        "power": "130",
        "description": "Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact."
      }
    ],
    "isVariant": false
  },
  {
    "id": "83B",
    "key": "Cryolinx_Terra",
    "name": "Cryolinx Terra",
    "types": [
      "Ground"
    ],
    "stats": {
      "hp": 100,
      "attack": {
        "melee": 140,
        "ranged": 105
      },
      "defense": 110,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 475
    },
    "suitability": {
      "handiwork": 1,
      "lumbering": 2,
      "mining": 3,
      "transporting": 3
    },
    "breedingPower": 160,
    "description": "It can easily carry many items with its large hands. \r\nHowever, its short legs slow its pace, \r\noften leaving it overtaken by nightfall.",
    "image": "/images/pals/Cryolinx_Terra.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Power Shot",
        "level": 1,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Stone Blast",
        "level": 7,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Stone Cannon",
        "level": 15,
        "element": "Ground",
        "cooltime": "15",
        "power": "70",
        "description": "Digs up a boulder and hurls it at an enemy."
      },
      {
        "name": "Sand Tornado",
        "level": 22,
        "element": "Ground",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two sand tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Stone Claw",
        "level": 30,
        "element": "Ground",
        "cooltime": "17",
        "power": "95",
        "description": "Cryolinx Terra's exclusive skill. First, it strikes with its claws, followed by a second slash, and culminates with a powerful slash using its entire body. When swinging the claws, rocks are launched forward in a fan shape."
      },
      {
        "name": "Rockburst",
        "level": 35,
        "element": "Ground",
        "cooltime": "35",
        "power": "130",
        "description": "Causes the ground to shake before hurling a massive stone mass at its surroundings."
      },
      {
        "name": "Rock Lance",
        "level": 40,
        "element": "Ground",
        "cooltime": "55",
        "power": "150",
        "description": "Generates a sharp rock spear under an enemy."
      },
      {
        "name": "Stone Beat",
        "level": 50,
        "element": "Ground",
        "cooltime": "60",
        "power": "170",
        "description": "Shakes the ground and lifts a massive boulder into the air."
      }
    ],
    "isVariant": true
  },
  {
    "id": "84",
    "key": "Blazehowl",
    "name": "Blazehowl",
    "types": [
      "Fire"
    ],
    "stats": {
      "hp": 105,
      "attack": {
        "melee": 100,
        "ranged": 110
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 475
    },
    "suitability": {
      "kindling": 3,
      "lumbering": 2
    },
    "breedingPower": 710,
    "description": "While it prefers raw meat, it always ends up eating well-done meat.\r\nThis is due to its blistering claws,\r\nwhich it uses as its weapon—it simply doesn't realize its prey gets burned to a crisp.",
    "image": "/images/pals/Blazehowl.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ignis Blast",
        "level": 1,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Power Shot",
        "level": 7,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Flare Arrow",
        "level": 15,
        "element": "Fire",
        "cooltime": "10",
        "power": "55",
        "description": "Fires three flaming arrows in succession that home in on an enemy."
      },
      {
        "name": "Ignis Breath",
        "level": 22,
        "element": "Fire",
        "cooltime": "15",
        "power": "70",
        "description": "Shoots flames at an enemy, dealing continuous damage."
      },
      {
        "name": "Ignis Rage",
        "level": 30,
        "element": "Fire",
        "cooltime": "40",
        "power": "120",
        "description": "Infuses the surrounding ground with energy, causing it to explode after a set amount of time."
      },
      {
        "name": "Volcanic Fang",
        "level": 35,
        "element": "Fire",
        "cooltime": "30",
        "power": "125",
        "description": "Blazehowl's exclusive skill. With momentum, it pounces mercilessly on the enemy and causes an explosion of fire at the point of impact."
      },
      {
        "name": "Fire Ball",
        "level": 40,
        "element": "Fire",
        "cooltime": "55",
        "power": "150",
        "description": "Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact."
      },
      {
        "name": "Pal Blast",
        "level": 50,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      }
    ],
    "isVariant": false
  },
  {
    "id": "84B",
    "key": "Blazehowl_Noct",
    "name": "Blazehowl Noct",
    "types": [
      "Fire",
      "Dark"
    ],
    "stats": {
      "hp": 105,
      "attack": {
        "melee": 100,
        "ranged": 115
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 475
    },
    "suitability": {
      "kindling": 3,
      "lumbering": 2
    },
    "breedingPower": 670,
    "description": "While it prefers raw meat, it always ends up eating tainted meat.\r\nThis is due to its dark claws,\r\nwhich it uses as its weapon—it simply doesn't realize its prey gets cursed.",
    "image": "/images/pals/Blazehowl_Noct.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Shadow Burst",
        "level": 1,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Flare Arrow",
        "level": 7,
        "element": "Fire",
        "cooltime": "10",
        "power": "55",
        "description": "Fires three flaming arrows in succession that home in on an enemy."
      },
      {
        "name": "Ignis Breath",
        "level": 15,
        "element": "Fire",
        "cooltime": "15",
        "power": "70",
        "description": "Shoots flames at an enemy, dealing continuous damage."
      },
      {
        "name": "Spirit Flame",
        "level": 22,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Ignis Rage",
        "level": 30,
        "element": "Fire",
        "cooltime": "40",
        "power": "120",
        "description": "Infuses the surrounding ground with energy, causing it to explode after a set amount of time."
      },
      {
        "name": "Volcanic Fang",
        "level": 35,
        "element": "Fire",
        "cooltime": "30",
        "power": "125",
        "description": "Blazehowl's exclusive skill. With momentum, it pounces mercilessly on the enemy and causes an explosion of fire at the point of impact."
      },
      {
        "name": "Fire Ball",
        "level": 40,
        "element": "Fire",
        "cooltime": "55",
        "power": "150",
        "description": "Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": true
  },
  {
    "id": "85",
    "key": "Relaxaurus",
    "name": "Relaxaurus",
    "types": [
      "Dragon",
      "Water"
    ],
    "stats": {
      "hp": 110,
      "attack": {
        "melee": 110,
        "ranged": 100
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 475
    },
    "suitability": {
      "watering": 2,
      "transporting": 1
    },
    "breedingPower": 280,
    "description": "Contrary to its blasé appearance, it's quite ferocious.\r\nIt perceives everything in its sight as prey\r\nand will stop at nothing to devour it.",
    "image": "/images/pals/Relaxaurus.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Dragon Cannon",
        "level": 1,
        "element": "Dragon",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls an energy ball imbued with draconic energy at an enemy."
      },
      {
        "name": "Aqua Gun",
        "level": 7,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Dragon Burst",
        "level": 15,
        "element": "Dragon",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges draconic energy, damaging those around it."
      },
      {
        "name": "Bubble Blast",
        "level": 22,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "Draconic Breath",
        "level": 30,
        "element": "Dragon",
        "cooltime": "15",
        "power": "70",
        "description": "Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it."
      },
      {
        "name": "Aqua Burst",
        "level": 40,
        "element": "Water",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of water and hurls it at an enemy."
      },
      {
        "name": "Dragon Meteor",
        "level": 50,
        "element": "Dragon",
        "cooltime": "55",
        "power": "150",
        "description": "Summons numerous small meteorites and launches them at an enemy."
      }
    ],
    "isVariant": false
  },
  {
    "id": "85B",
    "key": "Relaxaurus_Lux",
    "name": "Relaxaurus Lux",
    "types": [
      "Dragon",
      "Electric"
    ],
    "stats": {
      "hp": 110,
      "attack": {
        "melee": 110,
        "ranged": 110
      },
      "defense": 75,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 475
    },
    "suitability": {
      "generating_electricity": 3,
      "transporting": 1
    },
    "breedingPower": 270,
    "description": "One day, Relaxaurus had an idea.\r\nMaybe it was about time for a change.\r\nJust then, an electric shock raced through its body!",
    "image": "/images/pals/Relaxaurus_Lux.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Spark Blast",
        "level": 1,
        "element": "Electric",
        "cooltime": "2",
        "power": "30",
        "description": "Releases lightning orbs in a fan shape, spreading as they travel."
      },
      {
        "name": "Dragon Cannon",
        "level": 7,
        "element": "Dragon",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls an energy ball imbued with draconic energy at an enemy."
      },
      {
        "name": "Shockwave",
        "level": 15,
        "element": "Electric",
        "cooltime": "4",
        "power": "40",
        "description": "Quickly discharges electricity, shocking those around it."
      },
      {
        "name": "Lightning Streak",
        "level": 22,
        "element": "Electric",
        "cooltime": "16",
        "power": "75",
        "description": "Generates a lightning bolt that moves forward in a line."
      },
      {
        "name": "Draconic Breath",
        "level": 30,
        "element": "Dragon",
        "cooltime": "15",
        "power": "70",
        "description": "Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it."
      },
      {
        "name": "Lightning Strike",
        "level": 40,
        "element": "Electric",
        "cooltime": "40",
        "power": "120",
        "description": "Acts as a lightning rod, calling down thunderbolts that electrocute the surrounding area."
      },
      {
        "name": "Lightning Bolt",
        "level": 50,
        "element": "Electric",
        "cooltime": "55",
        "power": "150",
        "description": "Charges electric energy before blasting enemies with a powerful shock."
      }
    ],
    "isVariant": true
  },
  {
    "id": "86",
    "key": "Broncherry",
    "name": "Broncherry",
    "types": [
      "Grass"
    ],
    "stats": {
      "hp": 120,
      "attack": {
        "melee": 80,
        "ranged": 90
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 120,
      "food": 475
    },
    "suitability": {
      "planting": 3
    },
    "breedingPower": 860,
    "description": "Its scent drastically changes before and after pairing.\r\nIt exudes a pleasing aroma after finding a partner,\r\nwhich is called the |Fragrance of First Love.|",
    "image": "/images/pals/Broncherry.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Wind Cutter",
        "level": 1,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Bog Blast",
        "level": 7,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Muscle Slam",
        "level": 15,
        "element": "Grass",
        "cooltime": "12",
        "power": "80",
        "description": "Broncherry's exclusive skill. Turns sideways before tackling enemies in front of it, sending them flying into the air."
      },
      {
        "name": "Seed Mine",
        "level": 22,
        "element": "Grass",
        "cooltime": "13",
        "power": "65",
        "description": "Launches a deadly seed. If it hits an enemy, the seed explodes."
      },
      {
        "name": "Grass Tornado",
        "level": 30,
        "element": "Grass",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Spine Vine",
        "level": 40,
        "element": "Grass",
        "cooltime": "25",
        "power": "95",
        "description": "Generates spiny thorns that chase an enemy along the ground, piercing them from below."
      },
      {
        "name": "Solar Blast",
        "level": 50,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "86B",
    "key": "Broncherry_Aqua",
    "name": "Broncherry Aqua",
    "types": [
      "Grass",
      "Water"
    ],
    "stats": {
      "hp": 120,
      "attack": {
        "melee": 80,
        "ranged": 95
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 120,
      "food": 475
    },
    "suitability": {
      "watering": 3
    },
    "breedingPower": 840,
    "description": "Its scent drastically changes before and after pairing.\r\nIt exudes a pleasing aroma before finding a partner,\r\nwhich is called the |Perfume of Purity.|",
    "image": "/images/pals/Broncherry_Aqua.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Aqua Gun",
        "level": 1,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Bubble Blast",
        "level": 7,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "Muscle Slam",
        "level": 15,
        "element": "Grass",
        "cooltime": "12",
        "power": "80",
        "description": "Broncherry's exclusive skill. Turns sideways before tackling enemies in front of it, sending them flying into the air."
      },
      {
        "name": "Seed Mine",
        "level": 22,
        "element": "Grass",
        "cooltime": "13",
        "power": "65",
        "description": "Launches a deadly seed. If it hits an enemy, the seed explodes."
      },
      {
        "name": "Spine Vine",
        "level": 30,
        "element": "Grass",
        "cooltime": "25",
        "power": "95",
        "description": "Generates spiny thorns that chase an enemy along the ground, piercing them from below."
      },
      {
        "name": "Aqua Burst",
        "level": 40,
        "element": "Water",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of water and hurls it at an enemy."
      },
      {
        "name": "Hydro Laser",
        "level": 50,
        "element": "Water",
        "cooltime": "55",
        "power": "150",
        "description": "Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it."
      }
    ],
    "isVariant": true
  },
  {
    "id": "87",
    "key": "Petallia",
    "name": "Petallia",
    "types": [
      "Grass"
    ],
    "stats": {
      "hp": 100,
      "attack": {
        "melee": 100,
        "ranged": 95
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "planting": 3,
      "handiwork": 2,
      "gathering": 2,
      "medicine_production": 2,
      "transporting": 1
    },
    "breedingPower": 780,
    "description": "A Pal that transforms into a massive plant when at the end of its life. \r\nOnce every ten years, a beautiful flower blooms \r\nand a new Petallia is born.",
    "image": "/images/pals/Petallia.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Wind Cutter",
        "level": 1,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Aqua Gun",
        "level": 7,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Seed Machine Gun",
        "level": 15,
        "element": "Grass",
        "cooltime": "9",
        "power": "50",
        "description": "Fires a volley of hard seeds at enemies in front of it."
      },
      {
        "name": "Bubble Blast",
        "level": 22,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "Grass Tornado",
        "level": 30,
        "element": "Grass",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Spine Vine",
        "level": 40,
        "element": "Grass",
        "cooltime": "25",
        "power": "95",
        "description": "Generates spiny thorns that chase an enemy along the ground, piercing them from below."
      },
      {
        "name": "Solar Blast",
        "level": 50,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "88",
    "key": "Reptyro",
    "name": "Reptyro",
    "types": [
      "Fire",
      "Ground"
    ],
    "stats": {
      "hp": 110,
      "attack": {
        "melee": 100,
        "ranged": 105
      },
      "defense": 120,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 350
    },
    "suitability": {
      "kindling": 3,
      "mining": 3
    },
    "breedingPower": 320,
    "description": "Magma-like blood runs throughout its body.\r\nIf a large amount of water is thrown on it, the water rapidly heats,\r\ncausing an immense vapor explosion.",
    "image": "/images/pals/Reptyro.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ignis Blast",
        "level": 1,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Stone Blast",
        "level": 7,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Stone Cannon",
        "level": 15,
        "element": "Ground",
        "cooltime": "15",
        "power": "70",
        "description": "Digs up a boulder and hurls it at an enemy."
      },
      {
        "name": "Ignis Breath",
        "level": 22,
        "element": "Fire",
        "cooltime": "15",
        "power": "70",
        "description": "Shoots flames at an enemy, dealing continuous damage."
      },
      {
        "name": "Volcanic Burst",
        "level": 30,
        "element": "Fire",
        "cooltime": "45",
        "power": "100",
        "description": "Reptyro's exclusive skill. Raises its front legs and slams them into the ground, causing a volcanic eruptions under its enemies. It simultaneously bombards them with volcanic bombs from above."
      },
      {
        "name": "Ignis Rage",
        "level": 40,
        "element": "Fire",
        "cooltime": "40",
        "power": "120",
        "description": "Infuses the surrounding ground with energy, causing it to explode after a set amount of time."
      },
      {
        "name": "Rock Lance",
        "level": 50,
        "element": "Ground",
        "cooltime": "55",
        "power": "150",
        "description": "Generates a sharp rock spear under an enemy."
      }
    ],
    "isVariant": false
  },
  {
    "id": "88B",
    "key": "Reptyro_Cryst",
    "name": "Reptyro Cryst",
    "types": [
      "Ice",
      "Ground"
    ],
    "stats": {
      "hp": 110,
      "attack": {
        "melee": 100,
        "ranged": 105
      },
      "defense": 130,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 350
    },
    "suitability": {
      "mining": 3,
      "cooling": 3
    },
    "breedingPower": 230,
    "description": "Ice cold blood runs throughout its body. \r\nIf heated rapidly, its blood evaporates, \r\ncausing an immense vapor explosion.",
    "image": "/images/pals/Reptyro_Cryst.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ice Missile",
        "level": 1,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Stone Blast",
        "level": 7,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Iceberg",
        "level": 15,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Crystal Breath",
        "level": 22,
        "element": "Ice",
        "cooltime": "22",
        "power": "90",
        "description": "Enshrouds an enemy in a frigid blast of air, dealing continuous damage."
      },
      {
        "name": "Frost Burst",
        "level": 30,
        "element": "Ice",
        "cooltime": "45",
        "power": "100",
        "description": "Reptyro Cryst's exclusive skill. Raises its front legs and slams them into the ground, causing a frozen blast under its enemies. It simultaneously bombards them with snow balls from above."
      },
      {
        "name": "Blizzard Spike",
        "level": 40,
        "element": "Ice",
        "cooltime": "45",
        "power": "130",
        "description": "Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact."
      },
      {
        "name": "Rock Lance",
        "level": 50,
        "element": "Ground",
        "cooltime": "55",
        "power": "150",
        "description": "Generates a sharp rock spear under an enemy."
      }
    ],
    "isVariant": true
  },
  {
    "id": "89",
    "key": "Kingpaca",
    "name": "Kingpaca",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 120,
      "attack": {
        "melee": 100,
        "ranged": 85
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 475
    },
    "suitability": {
      "gathering": 1
    },
    "breedingPower": 470,
    "description": "Melpaca serve this Pal.\r\nContests between Kingpaca offer up their vassals as a wager.\r\nThose seen alone are losers of such contests.",
    "image": "/images/pals/Kingpaca.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Bog Blast",
        "level": 1,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Power Shot",
        "level": 7,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Power Bomb",
        "level": 15,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Kingly Slam",
        "level": 22,
        "element": "Neutral",
        "cooltime": "21",
        "power": "100",
        "description": "Kingpaca's exclusive skill. Leaps high into the air before smashing into an enemy with its chubby, massive body."
      },
      {
        "name": "Tri-Lightning",
        "level": 30,
        "element": "Electric",
        "cooltime": "22",
        "power": "90",
        "description": "Generates lightning that strikes an enemy three times from above."
      },
      {
        "name": "Rock Lance",
        "level": 40,
        "element": "Ground",
        "cooltime": "55",
        "power": "150",
        "description": "Generates a sharp rock spear under an enemy."
      },
      {
        "name": "Pal Blast",
        "level": 50,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      }
    ],
    "isVariant": false
  },
  {
    "id": "89B",
    "key": "Kingpaca_Cryst",
    "name": "Kingpaca Cryst",
    "types": [
      "Ice"
    ],
    "stats": {
      "hp": 120,
      "attack": {
        "melee": 100,
        "ranged": 85
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 475
    },
    "suitability": {
      "gathering": 1,
      "cooling": 3
    },
    "breedingPower": 440,
    "description": "With a heart of ice, this Pal is terrible at expressing its emotions.\r\nA solitary individual is pitiable,\r\nseen as too clumsy in the eyes of a Melpaca .",
    "image": "/images/pals/Kingpaca_Cryst.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ice Missile",
        "level": 1,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Icicle Cutter",
        "level": 7,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Iceberg",
        "level": 15,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Kingly Slam",
        "level": 22,
        "element": "Neutral",
        "cooltime": "21",
        "power": "100",
        "description": "Kingpaca's exclusive skill. Leaps high into the air before smashing into an enemy with its chubby, massive body."
      },
      {
        "name": "Crystal Breath",
        "level": 30,
        "element": "Ice",
        "cooltime": "22",
        "power": "90",
        "description": "Enshrouds an enemy in a frigid blast of air, dealing continuous damage."
      },
      {
        "name": "Aqua Burst",
        "level": 40,
        "element": "Water",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of water and hurls it at an enemy."
      },
      {
        "name": "Blizzard Spike",
        "level": 50,
        "element": "Ice",
        "cooltime": "45",
        "power": "130",
        "description": "Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact."
      }
    ],
    "isVariant": true
  },
  {
    "id": "90",
    "key": "Mammorest",
    "name": "Mammorest",
    "types": [
      "Grass",
      "Ground"
    ],
    "stats": {
      "hp": 150,
      "attack": {
        "melee": 100,
        "ranged": 85
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 30,
      "food": 525
    },
    "suitability": {
      "planting": 2,
      "lumbering": 2,
      "mining": 2
    },
    "breedingPower": 300,
    "description": "The vegetation on its back varies between individuals.\r\nThere is a long history of appreciating this veritable garden of a Pal,\r\nand there are even Mammorest pruning specialists.",
    "image": "/images/pals/Mammorest.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Bog Blast",
        "level": 1,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Seed Machine Gun",
        "level": 7,
        "element": "Grass",
        "cooltime": "9",
        "power": "50",
        "description": "Fires a volley of hard seeds at enemies in front of it."
      },
      {
        "name": "Power Bomb",
        "level": 15,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Grass Tornado",
        "level": 22,
        "element": "Grass",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Earth Impact",
        "level": 30,
        "element": "Ground",
        "cooltime": "30",
        "power": "100",
        "description": "Mammorest's exclusive skill. Uses its massive body to shake the earth, dealing damage over a wide area."
      },
      {
        "name": "Spine Vine",
        "level": 40,
        "element": "Grass",
        "cooltime": "25",
        "power": "95",
        "description": "Generates spiny thorns that chase an enemy along the ground, piercing them from below."
      },
      {
        "name": "Solar Blast",
        "level": 50,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "90B",
    "key": "Mammorest_Cryst",
    "name": "Mammorest Cryst",
    "types": [
      "Ice",
      "Ground"
    ],
    "stats": {
      "hp": 150,
      "attack": {
        "melee": 100,
        "ranged": 85
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 30,
      "food": 525
    },
    "suitability": {
      "lumbering": 2,
      "mining": 2,
      "cooling": 2
    },
    "breedingPower": 290,
    "description": "The vegetation on its back varies between individuals.\r\nThere was a time when seeds of presumed extinct plants were found\r\nstill frozen on the back of a Mammorest Cryst .",
    "image": "/images/pals/Mammorest_Cryst.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Stone Cannon",
        "level": 1,
        "element": "Ground",
        "cooltime": "15",
        "power": "70",
        "description": "Digs up a boulder and hurls it at an enemy."
      },
      {
        "name": "Icicle Cutter",
        "level": 7,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Power Bomb",
        "level": 15,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Iceberg",
        "level": 22,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Earth Impact",
        "level": 30,
        "element": "Ground",
        "cooltime": "30",
        "power": "100",
        "description": "Mammorest's exclusive skill. Uses its massive body to shake the earth, dealing damage over a wide area."
      },
      {
        "name": "Crystal Breath",
        "level": 40,
        "element": "Ice",
        "cooltime": "22",
        "power": "90",
        "description": "Enshrouds an enemy in a frigid blast of air, dealing continuous damage."
      },
      {
        "name": "Blizzard Spike",
        "level": 50,
        "element": "Ice",
        "cooltime": "45",
        "power": "130",
        "description": "Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact."
      }
    ],
    "isVariant": true
  },
  {
    "id": "91",
    "key": "Wumpo",
    "name": "Wumpo",
    "types": [
      "Ice"
    ],
    "stats": {
      "hp": 140,
      "attack": {
        "melee": 100,
        "ranged": 80
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 525
    },
    "suitability": {
      "handiwork": 2,
      "lumbering": 3,
      "cooling": 2,
      "transporting": 4
    },
    "breedingPower": 460,
    "description": "Researchers once tried to shave off its hair to reveal its true form.\r\nIn the end, only hair was left, as if that was all there was to begin with.",
    "image": "/images/pals/Wumpo.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ice Missile",
        "level": 1,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Wind Cutter",
        "level": 7,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Icicle Cutter",
        "level": 15,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Iceberg",
        "level": 22,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Crystal Breath",
        "level": 30,
        "element": "Ice",
        "cooltime": "22",
        "power": "90",
        "description": "Enshrouds an enemy in a frigid blast of air, dealing continuous damage."
      },
      {
        "name": "Snow Bowling",
        "level": 35,
        "element": "Ice",
        "cooltime": "20",
        "power": "100",
        "description": "Wumpo's exclusive skill. Rolls a snowball as it moves forward, and when it grows large enough, it throws it to cause an explosion."
      },
      {
        "name": "Blizzard Spike",
        "level": 40,
        "element": "Ice",
        "cooltime": "45",
        "power": "130",
        "description": "Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact."
      },
      {
        "name": "Solar Blast",
        "level": 50,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "91B",
    "key": "Wumpo_Botan",
    "name": "Wumpo Botan",
    "types": [
      "Grass"
    ],
    "stats": {
      "hp": 140,
      "attack": {
        "melee": 100,
        "ranged": 80
      },
      "defense": 110,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 525
    },
    "suitability": {
      "planting": 1,
      "handiwork": 2,
      "lumbering": 3,
      "transporting": 4
    },
    "breedingPower": 480,
    "description": "Researchers once tried to cut the grass off its body to reveal its true form. \r\nIn the end, only grass was left, as if that was all there was to begin with.",
    "image": "/images/pals/Wumpo_Botan.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Wind Cutter",
        "level": 1,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Aqua Gun",
        "level": 7,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Seed Mine",
        "level": 15,
        "element": "Grass",
        "cooltime": "13",
        "power": "65",
        "description": "Launches a deadly seed. If it hits an enemy, the seed explodes."
      },
      {
        "name": "Grass Tornado",
        "level": 22,
        "element": "Grass",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Spine Vine",
        "level": 30,
        "element": "Grass",
        "cooltime": "25",
        "power": "95",
        "description": "Generates spiny thorns that chase an enemy along the ground, piercing them from below."
      },
      {
        "name": "Lawn Bowling",
        "level": 35,
        "element": "Grass",
        "cooltime": "20",
        "power": "100",
        "description": "Wumpo Botan's exclusive skill. Rolls a ball made of grass as it moves forward, and when it grows large enough, it throws it to cause an explosion."
      },
      {
        "name": "Aqua Burst",
        "level": 40,
        "element": "Water",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of water and hurls it at an enemy."
      },
      {
        "name": "Solar Blast",
        "level": 50,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "92",
    "key": "Warsect",
    "name": "Warsect",
    "types": [
      "Ground",
      "Grass"
    ],
    "stats": {
      "hp": 120,
      "attack": {
        "melee": 100,
        "ranged": 100
      },
      "defense": 120,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 400
    },
    "suitability": {
      "planting": 1,
      "handiwork": 1,
      "lumbering": 3,
      "transporting": 3
    },
    "breedingPower": 340,
    "description": "The ultra-hard armor surrounding its body is\r\nextremely strong and heat resistant.\r\nEven a napalm blast would hardly leave a scratch.",
    "image": "/images/pals/Warsect.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Wind Cutter",
        "level": 1,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Seed Machine Gun",
        "level": 7,
        "element": "Grass",
        "cooltime": "9",
        "power": "50",
        "description": "Fires a volley of hard seeds at enemies in front of it."
      },
      {
        "name": "Stone Blast",
        "level": 15,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Stone Cannon",
        "level": 22,
        "element": "Ground",
        "cooltime": "15",
        "power": "70",
        "description": "Digs up a boulder and hurls it at an enemy."
      },
      {
        "name": "Giga Horn",
        "level": 30,
        "element": "Ground",
        "cooltime": "11",
        "power": "75",
        "description": "Warsect's exclusive skill. Skewers enemies with its four sturdy horns."
      },
      {
        "name": "Rock Lance",
        "level": 40,
        "element": "Ground",
        "cooltime": "55",
        "power": "150",
        "description": "Generates a sharp rock spear under an enemy."
      },
      {
        "name": "Solar Blast",
        "level": 50,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "92B",
    "key": "Warsect_Terra",
    "name": "Warsect Terra",
    "types": [
      "Ground"
    ],
    "stats": {
      "hp": 120,
      "attack": {
        "melee": 100,
        "ranged": 105
      },
      "defense": 120,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 400
    },
    "suitability": {
      "handiwork": 1,
      "mining": 3,
      "transporting": 3
    },
    "breedingPower": 275,
    "description": "The ultra-hard armor surrounding its body is\r\nextremely strong and heat resistant.\r\nIt doesn't flinch even if a Mammorest steps on it.",
    "image": "/images/pals/Warsect_Terra.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Bog Blast",
        "level": 1,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Seed Machine Gun",
        "level": 7,
        "element": "Grass",
        "cooltime": "9",
        "power": "50",
        "description": "Fires a volley of hard seeds at enemies in front of it."
      },
      {
        "name": "Giga Horn",
        "level": 15,
        "element": "Ground",
        "cooltime": "11",
        "power": "75",
        "description": "Warsect's exclusive skill. Skewers enemies with its four sturdy horns."
      },
      {
        "name": "Stone Cannon",
        "level": 22,
        "element": "Ground",
        "cooltime": "15",
        "power": "70",
        "description": "Digs up a boulder and hurls it at an enemy."
      },
      {
        "name": "Wind Edge",
        "level": 30,
        "element": "Grass",
        "cooltime": "22",
        "power": "90",
        "description": "Launches sharp blades of air that fan out."
      },
      {
        "name": "Rockburst",
        "level": 40,
        "element": "Ground",
        "cooltime": "35",
        "power": "130",
        "description": "Causes the ground to shake before hurling a massive stone mass at its surroundings."
      },
      {
        "name": "Stone Beat",
        "level": 50,
        "element": "Ground",
        "cooltime": "60",
        "power": "170",
        "description": "Shakes the ground and lifts a massive boulder into the air."
      }
    ],
    "isVariant": true
  },
  {
    "id": "93",
    "key": "Fenglope",
    "name": "Fenglope",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 110,
      "attack": {
        "melee": 110,
        "ranged": 110
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 400
    },
    "suitability": {
      "lumbering": 2
    },
    "breedingPower": 980,
    "description": "In ages past, its beautiful visage was\r\na common sight in paintings.\r\nAs time passed, its beautiful pelt and antlers were\r\noften seen in works of art.",
    "image": "/images/pals/Fenglope.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Aqua Gun",
        "level": 7,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Cloud Tempest",
        "level": 15,
        "element": "Neutral",
        "cooltime": "15",
        "power": "90",
        "description": "Fenglope's exclusive skill. Charges forward while manipulating the atmosphere to create a pressurized wind tunnel around itself."
      },
      {
        "name": "Acid Rain",
        "level": 22,
        "element": "Water",
        "cooltime": "18",
        "power": "80",
        "description": "Creates acidic clouds that pour down acid rain on enemies."
      },
      {
        "name": "Aqua Burst",
        "level": 30,
        "element": "Water",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of water and hurls it at an enemy."
      },
      {
        "name": "Blizzard Spike",
        "level": 40,
        "element": "Ice",
        "cooltime": "45",
        "power": "130",
        "description": "Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact."
      },
      {
        "name": "Pal Blast",
        "level": 50,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      }
    ],
    "isVariant": false
  },
  {
    "id": "93B",
    "key": "Fenglope_Lux",
    "name": "Fenglope Lux",
    "types": [
      "Electric"
    ],
    "stats": {
      "hp": 110,
      "attack": {
        "melee": 110,
        "ranged": 115
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 400
    },
    "suitability": {
      "generating_electricity": 2,
      "lumbering": 2
    },
    "breedingPower": 835,
    "description": "In ages past, it was believed that \r\ndrawing a picture of Fenglope Lux would result in being struck down by lightning. \r\nAs time passes, artworks depicting Fenglope Lux became revered as \r\ncharms to ward off lightning, making them a common presence.",
    "image": "/images/pals/Fenglope_Lux.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Shockwave",
        "level": 1,
        "element": "Electric",
        "cooltime": "4",
        "power": "40",
        "description": "Quickly discharges electricity, shocking those around it."
      },
      {
        "name": "Lightning Streak",
        "level": 7,
        "element": "Electric",
        "cooltime": "16",
        "power": "75",
        "description": "Generates a lightning bolt that moves forward in a line."
      },
      {
        "name": "Acid Rain",
        "level": 15,
        "element": "Water",
        "cooltime": "18",
        "power": "80",
        "description": "Creates acidic clouds that pour down acid rain on enemies."
      },
      {
        "name": "Thunder Tempest",
        "level": 22,
        "element": "Electric",
        "cooltime": "15",
        "power": "90",
        "description": "Charges forward while manipulating the atmosphere and enveloping itself in thunderclouds."
      },
      {
        "name": "Thunder Rain",
        "level": 30,
        "element": "Electric",
        "cooltime": "45",
        "power": "135",
        "description": "Calls lightning that strikes an enemy after a set amount of time has passed."
      },
      {
        "name": "Lightning Bolt",
        "level": 40,
        "element": "Electric",
        "cooltime": "55",
        "power": "150",
        "description": "Charges electric energy before blasting enemies with a powerful shock."
      },
      {
        "name": "Thunderstorm",
        "level": 50,
        "element": "Electric",
        "cooltime": "60",
        "power": "160",
        "description": "Generates a huge tornado of lightning that moves slowly towards the enemy."
      }
    ],
    "isVariant": true
  },
  {
    "id": "94",
    "key": "Felbat",
    "name": "Felbat",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 100,
      "attack": {
        "melee": 100,
        "ranged": 105
      },
      "defense": 110,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 110,
      "food": 350
    },
    "suitability": {
      "medicine_production": 3
    },
    "breedingPower": 1010,
    "description": "Attacking from the shadows,\r\nthis Pal traps its prey within its cloak-like wings.\r\nIt's probably best not to know what happens within them,\r\nor why the inside of its wings are stained red.",
    "image": "/images/pals/Felbat.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Poison Blast",
        "level": 1,
        "element": "Dark",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls poison sludge at an enemy."
      },
      {
        "name": "Dark Ball",
        "level": 7,
        "element": "Dark",
        "cooltime": "4",
        "power": "40",
        "description": "Unleashes a sphere of darkness that slowly tracks down an enemy."
      },
      {
        "name": "Shadow Burst",
        "level": 15,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Spirit Flame",
        "level": 22,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Nightmare Ball",
        "level": 30,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Ignis Rage",
        "level": 40,
        "element": "Fire",
        "cooltime": "40",
        "power": "120",
        "description": "Infuses the surrounding ground with energy, causing it to explode after a set amount of time."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "95",
    "key": "Quivern",
    "name": "Quivern",
    "types": [
      "Dragon"
    ],
    "stats": {
      "hp": 105,
      "attack": {
        "melee": 100,
        "ranged": 100
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 300
    },
    "suitability": {
      "handiwork": 1,
      "gathering": 2,
      "mining": 2,
      "transporting": 3
    },
    "breedingPower": 350,
    "description": "Sleeping while cuddling a Quivern is said to be a heavenly experience,\r\nbut there are some who have been crushed and sent to heaven by ones\r\nthat toss and turn in their sleep.",
    "image": "/images/pals/Quivern.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Dragon Cannon",
        "level": 1,
        "element": "Dragon",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls an energy ball imbued with draconic energy at an enemy."
      },
      {
        "name": "Spirit Fire",
        "level": 7,
        "element": "Fire",
        "cooltime": "7",
        "power": "45",
        "description": "Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward."
      },
      {
        "name": "Acid Rain",
        "level": 15,
        "element": "Water",
        "cooltime": "18",
        "power": "80",
        "description": "Creates acidic clouds that pour down acid rain on enemies."
      },
      {
        "name": "Draconic Breath",
        "level": 22,
        "element": "Dragon",
        "cooltime": "15",
        "power": "70",
        "description": "Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it."
      },
      {
        "name": "Grass Tornado",
        "level": 30,
        "element": "Grass",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Aqua Burst",
        "level": 40,
        "element": "Water",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of water and hurls it at an enemy."
      },
      {
        "name": "Dragon Meteor",
        "level": 50,
        "element": "Dragon",
        "cooltime": "55",
        "power": "150",
        "description": "Summons numerous small meteorites and launches them at an enemy."
      }
    ],
    "isVariant": false
  },
  {
    "id": "95B",
    "key": "Quivern_Botan",
    "name": "Quivern Botan",
    "types": [
      "Dragon",
      "Grass"
    ],
    "stats": {
      "hp": 105,
      "attack": {
        "melee": 100,
        "ranged": 105
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 300
    },
    "suitability": {
      "planting": 2,
      "handiwork": 1,
      "gathering": 2,
      "mining": 2,
      "transporting": 3
    },
    "breedingPower": 340,
    "description": "When you hug Quivern Botan ,\r\nif it smells like sunshine and meadows, tomorrow will be sunny.\r\nIf it smells damp, tomorrow will be wet and miserable.",
    "image": "/images/pals/Quivern_Botan.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Dragon Cannon",
        "level": 1,
        "element": "Dragon",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls an energy ball imbued with draconic energy at an enemy."
      },
      {
        "name": "Wind Cutter",
        "level": 7,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Seed Machine Gun",
        "level": 15,
        "element": "Grass",
        "cooltime": "9",
        "power": "50",
        "description": "Fires a volley of hard seeds at enemies in front of it."
      },
      {
        "name": "Draconic Breath",
        "level": 22,
        "element": "Dragon",
        "cooltime": "15",
        "power": "70",
        "description": "Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it."
      },
      {
        "name": "Grass Tornado",
        "level": 30,
        "element": "Grass",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Comet Strike",
        "level": 40,
        "element": "Dragon",
        "cooltime": "35",
        "power": "110",
        "description": "Drops a meteorite straight down, generating a shock wave around the impact area."
      },
      {
        "name": "Circle Vine",
        "level": 50,
        "element": "Grass",
        "cooltime": "40",
        "power": "120",
        "description": "Sprouts sharp roots in and around the enemy's location."
      }
    ],
    "isVariant": false
  },
  {
    "id": "96",
    "key": "Blazamut",
    "name": "Blazamut",
    "types": [
      "Fire"
    ],
    "stats": {
      "hp": 100,
      "attack": {
        "melee": 150,
        "ranged": 125
      },
      "defense": 120,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 50,
      "food": 600
    },
    "suitability": {
      "kindling": 3,
      "mining": 4
    },
    "breedingPower": 10,
    "description": "Legends say it was born during a volcanic eruption.\r\nA strange group even claims that this continent is laid upon\r\nthe back of a giant Blazamut .",
    "image": "/images/pals/Blazamut.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Power Shot",
        "level": 1,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Ignis Blast",
        "level": 7,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Stone Blast",
        "level": 15,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Ignis Breath",
        "level": 22,
        "element": "Fire",
        "cooltime": "15",
        "power": "70",
        "description": "Shoots flames at an enemy, dealing continuous damage."
      },
      {
        "name": "Ignis Rage",
        "level": 30,
        "element": "Fire",
        "cooltime": "40",
        "power": "120",
        "description": "Infuses the surrounding ground with energy, causing it to explode after a set amount of time."
      },
      {
        "name": "Brawn Impact",
        "level": 35,
        "element": "Fire",
        "cooltime": "38",
        "power": "150",
        "description": "Blazamut's exclusive skill. Raises and inflates its arms, then slams them together, causing a massive explosion in the surrounding area."
      },
      {
        "name": "Fire Ball",
        "level": 40,
        "element": "Fire",
        "cooltime": "55",
        "power": "150",
        "description": "Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact."
      },
      {
        "name": "Rock Lance",
        "level": 50,
        "element": "Ground",
        "cooltime": "55",
        "power": "150",
        "description": "Generates a sharp rock spear under an enemy."
      }
    ],
    "isVariant": false
  },
  {
    "id": "96B",
    "key": "Blazamut_Ryu",
    "name": "Blazamut Ryu",
    "types": [
      "Dragon",
      "Fire"
    ],
    "stats": {
      "hp": 105,
      "attack": {
        "melee": 150,
        "ranged": 130
      },
      "defense": 125,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 50,
      "food": 600
    },
    "suitability": {
      "kindling": 4,
      "mining": 4
    },
    "breedingPower": 9,
    "description": "Long ago, it emerged from the depths of the earth.\r\nWith relentless, raging flames showing no mercy,\r\nit burned the entire island until nothing remained.\r\nIt was known as the Eternal Flame.",
    "image": "/images/pals/Blazamut_Ryu.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Dragon Burst",
        "level": 1,
        "element": "Dragon",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges draconic energy, damaging those around it."
      },
      {
        "name": "Ignis Breath",
        "level": 7,
        "element": "Fire",
        "cooltime": "15",
        "power": "70",
        "description": "Shoots flames at an enemy, dealing continuous damage."
      },
      {
        "name": "Flame Wall",
        "level": 15,
        "element": "Fire",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a wall of flames at the enemy's location. The wall of flames will remain for a while, and deal damage to the enemies it touches."
      },
      {
        "name": "Comet Strike",
        "level": 22,
        "element": "Dragon",
        "cooltime": "35",
        "power": "110",
        "description": "Drops a meteorite straight down, generating a shock wave around the impact area."
      },
      {
        "name": "Beam Slicer",
        "level": 30,
        "element": "Dragon",
        "cooltime": "45",
        "power": "130",
        "description": "Mows down the area in front with a beam imbued with dragon power. The area struck by the beam will also explode after a short delay."
      },
      {
        "name": "Brawn Impact",
        "level": 40,
        "element": "Fire",
        "cooltime": "38",
        "power": "150",
        "description": "Blazamut's exclusive skill. Raises and inflates its arms, then slams them together, causing a massive explosion in the surrounding area."
      },
      {
        "name": "Magna Crush",
        "level": 50,
        "element": "Dragon",
        "cooltime": "42",
        "power": "160",
        "description": "Blazamut Ryu's exclusive skill. After a big jump, moves at high speed in the air, gathering strength to unleash a powerful punch."
      }
    ],
    "isVariant": false
  },
  {
    "id": "97",
    "key": "Helzephyr",
    "name": "Helzephyr",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 100,
      "attack": {
        "melee": 100,
        "ranged": 125
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 525
    },
    "suitability": {
      "transporting": 3
    },
    "breedingPower": 190,
    "description": "It calls forth lightning from the depths of hell.\r\nThose who dies from Helzephyr 's lightning\r\nare sure to have their soul sent to the underworld.",
    "image": "/images/pals/Helzephyr.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Spirit Fire",
        "level": 1,
        "element": "Fire",
        "cooltime": "7",
        "power": "45",
        "description": "Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward."
      },
      {
        "name": "Dark Ball",
        "level": 7,
        "element": "Dark",
        "cooltime": "4",
        "power": "40",
        "description": "Unleashes a sphere of darkness that slowly tracks down an enemy."
      },
      {
        "name": "Shadow Burst",
        "level": 15,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Flare Storm",
        "level": 22,
        "element": "Fire",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two flaming tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Spirit Flame",
        "level": 30,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Nightmare Ball",
        "level": 40,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "97B",
    "key": "Helzephyr_Lux",
    "name": "Helzephyr Lux",
    "types": [
      "Dark",
      "Electric"
    ],
    "stats": {
      "hp": 105,
      "attack": {
        "melee": 100,
        "ranged": 125
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 525
    },
    "suitability": {
      "generating_electricity": 3,
      "transporting": 3
    },
    "breedingPower": 180,
    "description": "It calls forth lightning from the depths of hell.\r\nWhile considered a subspecies of Helzephyr ,\r\nthere's a theory that suggests Helzephyr Lux , struck by lightning from hell,\r\nwill transform into Helzephyr .",
    "image": "/images/pals/Helzephyr_Lux.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Spark Blast",
        "level": 1,
        "element": "Electric",
        "cooltime": "2",
        "power": "30",
        "description": "Releases lightning orbs in a fan shape, spreading as they travel."
      },
      {
        "name": "Shockwave",
        "level": 7,
        "element": "Electric",
        "cooltime": "4",
        "power": "40",
        "description": "Quickly discharges electricity, shocking those around it."
      },
      {
        "name": "Dark Arrow",
        "level": 15,
        "element": "Dark",
        "cooltime": "10",
        "power": "65",
        "description": "Fires off dark energy that homes in on an enemy."
      },
      {
        "name": "Nightmare Ball",
        "level": 22,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "TriSpark",
        "level": 30,
        "element": "Electric",
        "cooltime": "35",
        "power": "110",
        "description": "A high-speed lightning ball that flies in a straight line. Simultaneously fires slow lightning balls that track the enemy."
      },
      {
        "name": "Thunder Rain",
        "level": 40,
        "element": "Electric",
        "cooltime": "45",
        "power": "135",
        "description": "Calls lightning that strikes an enemy after a set amount of time has passed."
      },
      {
        "name": "Thunderstorm",
        "level": 50,
        "element": "Electric",
        "cooltime": "60",
        "power": "160",
        "description": "Generates a huge tornado of lightning that moves slowly towards the enemy."
      }
    ],
    "isVariant": true
  },
  {
    "id": "98",
    "key": "Astegon",
    "name": "Astegon",
    "types": [
      "Dragon",
      "Dark"
    ],
    "stats": {
      "hp": 100,
      "attack": {
        "melee": 100,
        "ranged": 125
      },
      "defense": 125,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 600
    },
    "suitability": {
      "handiwork": 1,
      "mining": 4
    },
    "breedingPower": 150,
    "description": "A savage beast born of the abyss. \r\nThou shall not stand before the beast. \r\nThou shall not heed the beast.",
    "image": "/images/pals/Astegon.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Dragon Cannon",
        "level": 1,
        "element": "Dragon",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls an energy ball imbued with draconic energy at an enemy."
      },
      {
        "name": "Spirit Flame",
        "level": 7,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Dragon Burst",
        "level": 15,
        "element": "Dragon",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges draconic energy, damaging those around it."
      },
      {
        "name": "Nightmare Ball",
        "level": 22,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Draconic Breath",
        "level": 30,
        "element": "Dragon",
        "cooltime": "15",
        "power": "70",
        "description": "Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it."
      },
      {
        "name": "Firefist Breathstorm",
        "level": 35,
        "element": "Dragon",
        "cooltime": "30",
        "power": "130",
        "description": "Astegon's exclusive skill. After throwing two punches forward, it exhales a dragon breath downward."
      },
      {
        "name": "Dark Laser",
        "level": 40,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      },
      {
        "name": "Dragon Meteor",
        "level": 50,
        "element": "Dragon",
        "cooltime": "55",
        "power": "150",
        "description": "Summons numerous small meteorites and launches them at an enemy."
      }
    ],
    "isVariant": false
  },
  {
    "id": "99",
    "key": "Menasting",
    "name": "Menasting",
    "types": [
      "Dark",
      "Ground"
    ],
    "stats": {
      "hp": 100,
      "attack": {
        "melee": 100,
        "ranged": 100
      },
      "defense": 130,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 475
    },
    "suitability": {
      "lumbering": 2,
      "mining": 3
    },
    "breedingPower": 260,
    "description": "Being made of pure energy, its insides are completely hollow.\r\nThis Pal crams still-living prey into its hollow body, where it absorbs them.\r\nHellish screams of pain can often be heard coming from inside this Pal.",
    "image": "/images/pals/Menasting.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Bog Blast",
        "level": 1,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Poison Blast",
        "level": 7,
        "element": "Dark",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls poison sludge at an enemy."
      },
      {
        "name": "Shadow Burst",
        "level": 15,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Stone Cannon",
        "level": 22,
        "element": "Ground",
        "cooltime": "15",
        "power": "70",
        "description": "Digs up a boulder and hurls it at an enemy."
      },
      {
        "name": "Nightmare Ball",
        "level": 30,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Jumping Stinger",
        "level": 35,
        "element": "Ground",
        "cooltime": "24",
        "power": "110",
        "description": "Menasting's exclusive skill. Jumps high and forcefully stabs its prey with its tail. The poison from the tail is deadly."
      },
      {
        "name": "Rock Lance",
        "level": 40,
        "element": "Ground",
        "cooltime": "55",
        "power": "150",
        "description": "Generates a sharp rock spear under an enemy."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "99B",
    "key": "Menasting_Terra",
    "name": "Menasting Terra",
    "types": [
      "Ground"
    ],
    "stats": {
      "hp": 100,
      "attack": {
        "melee": 100,
        "ranged": 105
      },
      "defense": 130,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 475
    },
    "suitability": {
      "lumbering": 2,
      "mining": 3
    },
    "breedingPower": 250,
    "description": "Being made of pure energy, its insides are completely hollow.\r\nIt stuffs earth and minerals into its outer shell, achieving overwhelming mass.\r\nThose who are struck by it can only let out hellish groans.",
    "image": "/images/pals/Menasting_Terra.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Bog Blast",
        "level": 1,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Stone Blast",
        "level": 7,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Stone Cannon",
        "level": 15,
        "element": "Ground",
        "cooltime": "15",
        "power": "70",
        "description": "Digs up a boulder and hurls it at an enemy."
      },
      {
        "name": "Sand Tornado",
        "level": 22,
        "element": "Ground",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two sand tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Jumping Stinger",
        "level": 30,
        "element": "Ground",
        "cooltime": "24",
        "power": "110",
        "description": "Menasting's exclusive skill. Jumps high and forcefully stabs its prey with its tail. The poison from the tail is deadly."
      },
      {
        "name": "Rock Lance",
        "level": 40,
        "element": "Ground",
        "cooltime": "55",
        "power": "150",
        "description": "Generates a sharp rock spear under an enemy."
      },
      {
        "name": "Rockburst",
        "level": 50,
        "element": "Ground",
        "cooltime": "35",
        "power": "130",
        "description": "Causes the ground to shake before hurling a massive stone mass at its surroundings."
      }
    ],
    "isVariant": true
  },
  {
    "id": "100",
    "key": "Anubis",
    "name": "Anubis",
    "types": [
      "Ground"
    ],
    "stats": {
      "hp": 120,
      "attack": {
        "melee": 130,
        "ranged": 130
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 400
    },
    "suitability": {
      "handiwork": 4,
      "mining": 3,
      "transporting": 2
    },
    "breedingPower": 570,
    "description": "Once seen as a symbol of nobility, \r\nand an idol for those who shunned wealth and power.\r\nYet over time, this Pal became a token of death.",
    "image": "/images/pals/Anubis.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Stone Blast",
        "level": 1,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Power Bomb",
        "level": 7,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Sand Tornado",
        "level": 15,
        "element": "Ground",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two sand tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Spinning Roundhouse",
        "level": 22,
        "element": "Ground",
        "cooltime": "21",
        "power": "100",
        "description": "Anubis' exclusive skill. Performs a spin kick with its strong legs, sweeping enemies over a wide area."
      },
      {
        "name": "Forceful Charge",
        "level": 30,
        "element": "Ground",
        "cooltime": "28",
        "power": "120",
        "description": "Anubis' exclusive skill. Rapidly pursues its foes while releasing energy and unleashing a powerful punch."
      },
      {
        "name": "Ground Smash",
        "level": 40,
        "element": "Ground",
        "cooltime": "35",
        "power": "140",
        "description": "Anubis' exclusive skill. Leaps high into the air and strikes a punch to the ground, causing a shockwave that deals damge over a wide area."
      },
      {
        "name": "Rock Lance",
        "level": 50,
        "element": "Ground",
        "cooltime": "55",
        "power": "150",
        "description": "Generates a sharp rock spear under an enemy."
      }
    ],
    "isVariant": false
  },
  {
    "id": "101",
    "key": "Jormuntide",
    "name": "Jormuntide",
    "types": [
      "Dragon",
      "Water"
    ],
    "stats": {
      "hp": 130,
      "attack": {
        "melee": 150,
        "ranged": 120
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 475
    },
    "suitability": {
      "watering": 4
    },
    "breedingPower": 310,
    "description": "Legend says the Jormuntide was once a wise man who,\r\nafter being wrongly convicted and cast into a whirlpool,\r\nreturned as this Pal to annihilate the kingdom.",
    "image": "/images/pals/Jormuntide.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Aqua Gun",
        "level": 1,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Dragon Cannon",
        "level": 7,
        "element": "Dragon",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls an energy ball imbued with draconic energy at an enemy."
      },
      {
        "name": "Draconic Breath",
        "level": 15,
        "element": "Dragon",
        "cooltime": "15",
        "power": "70",
        "description": "Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it."
      },
      {
        "name": "Aqua Burst",
        "level": 22,
        "element": "Water",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of water and hurls it at an enemy."
      },
      {
        "name": "Tri-Lightning",
        "level": 30,
        "element": "Electric",
        "cooltime": "22",
        "power": "90",
        "description": "Generates lightning that strikes an enemy three times from above."
      },
      {
        "name": "Slither Slam",
        "level": 35,
        "element": "Water",
        "cooltime": "30",
        "power": "145",
        "description": "Jormuntide's exclusive skill. Letting out a roar, it charges toward the enemy, twisting its water-covered body as it advances."
      },
      {
        "name": "Hydro Laser",
        "level": 40,
        "element": "Water",
        "cooltime": "55",
        "power": "150",
        "description": "Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it."
      },
      {
        "name": "Dragon Meteor",
        "level": 50,
        "element": "Dragon",
        "cooltime": "55",
        "power": "150",
        "description": "Summons numerous small meteorites and launches them at an enemy."
      }
    ],
    "isVariant": false
  },
  {
    "id": "101B",
    "key": "Jormuntide_Ignis",
    "name": "Jormuntide Ignis",
    "types": [
      "Dragon",
      "Fire"
    ],
    "stats": {
      "hp": 130,
      "attack": {
        "melee": 150,
        "ranged": 130
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 475
    },
    "suitability": {
      "kindling": 4
    },
    "breedingPower": 315,
    "description": "Legend says the Jormuntide Ignis was once a warrior who,\r\nafter being wrongly convicted and cast into a volcano,\r\nreturned as this Pal to annihilate the kingdom.",
    "image": "/images/pals/Jormuntide_Ignis.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ignis Blast",
        "level": 1,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Dragon Cannon",
        "level": 7,
        "element": "Dragon",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls an energy ball imbued with draconic energy at an enemy."
      },
      {
        "name": "Flare Storm",
        "level": 15,
        "element": "Fire",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two flaming tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Ignis Breath",
        "level": 22,
        "element": "Fire",
        "cooltime": "15",
        "power": "70",
        "description": "Shoots flames at an enemy, dealing continuous damage."
      },
      {
        "name": "Tri-Lightning",
        "level": 30,
        "element": "Electric",
        "cooltime": "22",
        "power": "90",
        "description": "Generates lightning that strikes an enemy three times from above."
      },
      {
        "name": "Magma Serpent",
        "level": 35,
        "element": "Fire",
        "cooltime": "30",
        "power": "145",
        "description": "Jormuntide Ignis's exclusive skill. Letting out a roar, it charges toward the enemy, twisting its fire-covered body as it advances."
      },
      {
        "name": "Fire Ball",
        "level": 40,
        "element": "Fire",
        "cooltime": "55",
        "power": "150",
        "description": "Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact."
      },
      {
        "name": "Dragon Meteor",
        "level": 50,
        "element": "Dragon",
        "cooltime": "55",
        "power": "150",
        "description": "Summons numerous small meteorites and launches them at an enemy."
      }
    ],
    "isVariant": true
  },
  {
    "id": "102",
    "key": "Suzaku",
    "name": "Suzaku",
    "types": [
      "Fire"
    ],
    "stats": {
      "hp": 120,
      "attack": {
        "melee": 100,
        "ranged": 105
      },
      "defense": 105,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 525
    },
    "suitability": {
      "kindling": 3
    },
    "breedingPower": 50,
    "description": "It was once believed to usher in the dry season.\r\nWhenever there was a drought the previous year, people would relentlessly seek to cull its numbers,\r\nhoping to bring about a plentiful harvest in the next year.",
    "image": "/images/pals/Suzaku.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Ignis Blast",
        "level": 7,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Spirit Fire",
        "level": 15,
        "element": "Fire",
        "cooltime": "7",
        "power": "45",
        "description": "Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward."
      },
      {
        "name": "Flare Arrow",
        "level": 22,
        "element": "Fire",
        "cooltime": "10",
        "power": "55",
        "description": "Fires three flaming arrows in succession that home in on an enemy."
      },
      {
        "name": "Ignis Breath",
        "level": 30,
        "element": "Fire",
        "cooltime": "15",
        "power": "70",
        "description": "Shoots flames at an enemy, dealing continuous damage."
      },
      {
        "name": "Flare Storm",
        "level": 40,
        "element": "Fire",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two flaming tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Fire Ball",
        "level": 50,
        "element": "Fire",
        "cooltime": "55",
        "power": "150",
        "description": "Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact."
      }
    ],
    "isVariant": false
  },
  {
    "id": "102B",
    "key": "Suzaku_Aqua",
    "name": "Suzaku Aqua",
    "types": [
      "Water"
    ],
    "stats": {
      "hp": 125,
      "attack": {
        "melee": 100,
        "ranged": 105
      },
      "defense": 105,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 525
    },
    "suitability": {
      "watering": 3
    },
    "breedingPower": 30,
    "description": "It was once believed to usher in the rainy season.\r\nWhenever there was a flood the previous year, people would relentlessly seek to cull its numbers,\r\nhoping to avert disaster in the coming year.",
    "image": "/images/pals/Suzaku_Aqua.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Hydro Jet",
        "level": 1,
        "element": "Water",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a high speed ball of water at an enemy."
      },
      {
        "name": "Ice Missile",
        "level": 7,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Aqua Gun",
        "level": 15,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Crystal Breath",
        "level": 22,
        "element": "Ice",
        "cooltime": "22",
        "power": "90",
        "description": "Enshrouds an enemy in a frigid blast of air, dealing continuous damage."
      },
      {
        "name": "Aqua Burst",
        "level": 30,
        "element": "Water",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of water and hurls it at an enemy."
      },
      {
        "name": "Blizzard Spike",
        "level": 40,
        "element": "Ice",
        "cooltime": "45",
        "power": "130",
        "description": "Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact."
      },
      {
        "name": "Hydro Laser",
        "level": 50,
        "element": "Water",
        "cooltime": "55",
        "power": "150",
        "description": "Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it."
      }
    ],
    "isVariant": true
  },
  {
    "id": "103",
    "key": "Grizzbolt",
    "name": "Grizzbolt",
    "types": [
      "Electric"
    ],
    "stats": {
      "hp": 105,
      "attack": {
        "melee": 120,
        "ranged": 100
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 475
    },
    "suitability": {
      "generating_electricity": 3,
      "handiwork": 2,
      "lumbering": 2,
      "transporting": 3
    },
    "breedingPower": 200,
    "description": "With a friendly smile and a hardy physique, it is docile\r\ntowards one it recognizes as a partner.\r\nFor reasons unexplained, its personality undergoes a drastic change when wielding a minigun.",
    "image": "/images/pals/Grizzbolt.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Spark Blast",
        "level": 1,
        "element": "Electric",
        "cooltime": "2",
        "power": "30",
        "description": "Releases lightning orbs in a fan shape, spreading as they travel."
      },
      {
        "name": "Shockwave",
        "level": 7,
        "element": "Electric",
        "cooltime": "4",
        "power": "40",
        "description": "Quickly discharges electricity, shocking those around it."
      },
      {
        "name": "Lightning Claw",
        "level": 15,
        "element": "Electric",
        "cooltime": "22",
        "power": "90",
        "description": "Grizzbolt's exclusive skill. After leaping at an enemy and tearing at it twice with its electrically charged claws, it attacks the ground, sending an electric shock throughout the area."
      },
      {
        "name": "Lightning Streak",
        "level": 22,
        "element": "Electric",
        "cooltime": "16",
        "power": "75",
        "description": "Generates a lightning bolt that moves forward in a line."
      },
      {
        "name": "Tri-Lightning",
        "level": 30,
        "element": "Electric",
        "cooltime": "22",
        "power": "90",
        "description": "Generates lightning that strikes an enemy three times from above."
      },
      {
        "name": "Lightning Strike",
        "level": 40,
        "element": "Electric",
        "cooltime": "40",
        "power": "120",
        "description": "Acts as a lightning rod, calling down thunderbolts that electrocute the surrounding area."
      },
      {
        "name": "Lightning Bolt",
        "level": 50,
        "element": "Electric",
        "cooltime": "55",
        "power": "150",
        "description": "Charges electric energy before blasting enemies with a powerful shock."
      },
      {
        "name": "Heavy Thunder Tank",
        "level": 55,
        "element": "Electric",
        "cooltime": "42",
        "power": "160",
        "description": "Grizzbolt's exclusive skill. Pulls out a minigun out of nowhere and starts blasting. Finishes with a single, charged power shot."
      }
    ],
    "isVariant": false
  },
  {
    "id": "104",
    "key": "Lyleen",
    "name": "Lyleen",
    "types": [
      "Grass"
    ],
    "stats": {
      "hp": 110,
      "attack": {
        "melee": 100,
        "ranged": 110
      },
      "defense": 105,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 400
    },
    "suitability": {
      "planting": 4,
      "handiwork": 3,
      "gathering": 2,
      "medicine_production": 3
    },
    "breedingPower": 250,
    "description": "A docile Pal full of love. \r\nIt watches over small Pals who have lost their parents. \r\nIt uses a full-power Solar Blast to discipline naughty Pals.",
    "image": "/images/pals/Lyleen.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Wind Cutter",
        "level": 1,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Seed Machine Gun",
        "level": 7,
        "element": "Grass",
        "cooltime": "9",
        "power": "50",
        "description": "Fires a volley of hard seeds at enemies in front of it."
      },
      {
        "name": "Seed Mine",
        "level": 15,
        "element": "Grass",
        "cooltime": "13",
        "power": "65",
        "description": "Launches a deadly seed. If it hits an enemy, the seed explodes."
      },
      {
        "name": "Aqua Burst",
        "level": 22,
        "element": "Water",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of water and hurls it at an enemy."
      },
      {
        "name": "Grass Tornado",
        "level": 30,
        "element": "Grass",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Spine Vine",
        "level": 40,
        "element": "Grass",
        "cooltime": "25",
        "power": "95",
        "description": "Generates spiny thorns that chase an enemy along the ground, piercing them from below."
      },
      {
        "name": "Solar Blast",
        "level": 50,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      },
      {
        "name": "Bountiful Protection",
        "level": 55,
        "element": "Grass",
        "cooltime": "240",
        "power": "0",
        "description": "Lyleen's exclusive skill. Restores health to all allies within range using the power of healing."
      }
    ],
    "isVariant": false
  },
  {
    "id": "104B",
    "key": "Lyleen_Noct",
    "name": "Lyleen Noct",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 110,
      "attack": {
        "melee": 100,
        "ranged": 110
      },
      "defense": 115,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 400
    },
    "suitability": {
      "handiwork": 3,
      "gathering": 2,
      "medicine_production": 3
    },
    "breedingPower": 210,
    "description": "An elegant Pal full of grace. \r\nIt admonishes any who are disrespectful with a painful slap. \r\nSome Pals actively seek out this punishment.",
    "image": "/images/pals/Lyleen_Noct.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Dark Ball",
        "level": 1,
        "element": "Dark",
        "cooltime": "4",
        "power": "40",
        "description": "Unleashes a sphere of darkness that slowly tracks down an enemy."
      },
      {
        "name": "Icicle Cutter",
        "level": 7,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Shadow Burst",
        "level": 15,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Crystal Breath",
        "level": 22,
        "element": "Ice",
        "cooltime": "22",
        "power": "90",
        "description": "Enshrouds an enemy in a frigid blast of air, dealing continuous damage."
      },
      {
        "name": "Nightmare Ball",
        "level": 30,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Blizzard Spike",
        "level": 40,
        "element": "Ice",
        "cooltime": "45",
        "power": "130",
        "description": "Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": true
  },
  {
    "id": "105",
    "key": "Faleris",
    "name": "Faleris",
    "types": [
      "Fire"
    ],
    "stats": {
      "hp": 100,
      "attack": {
        "melee": 100,
        "ranged": 105
      },
      "defense": 110,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 90,
      "food": 525
    },
    "suitability": {
      "kindling": 3,
      "transporting": 3
    },
    "breedingPower": 370,
    "description": "When it finds its prey it unleashes a whirlwind of flames, burning the entire area to ash. Faleris breath is known for its pleasing scent.",
    "image": "/images/pals/Faleris.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ignis Blast",
        "level": 1,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Flare Arrow",
        "level": 7,
        "element": "Fire",
        "cooltime": "10",
        "power": "55",
        "description": "Fires three flaming arrows in succession that home in on an enemy."
      },
      {
        "name": "Spirit Fire",
        "level": 15,
        "element": "Fire",
        "cooltime": "7",
        "power": "45",
        "description": "Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward."
      },
      {
        "name": "Ignis Breath",
        "level": 22,
        "element": "Fire",
        "cooltime": "15",
        "power": "70",
        "description": "Shoots flames at an enemy, dealing continuous damage."
      },
      {
        "name": "Phoenix Flare",
        "level": 30,
        "element": "Fire",
        "cooltime": "28",
        "power": "135",
        "description": "Faleris' exclusive skill. After creating scorching tornadoes, it cloaks itself in hellfire and charges forward."
      },
      {
        "name": "Ignis Rage",
        "level": 40,
        "element": "Fire",
        "cooltime": "40",
        "power": "120",
        "description": "Infuses the surrounding ground with energy, causing it to explode after a set amount of time."
      },
      {
        "name": "Fire Ball",
        "level": 50,
        "element": "Fire",
        "cooltime": "55",
        "power": "150",
        "description": "Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact."
      },
      {
        "name": "Raging Flame Wave",
        "level": 55,
        "element": "Fire",
        "cooltime": "38",
        "power": "145",
        "description": "Faleris' exclusive skill. Generates multiple scorching tornadoes and charges forward while gliding. The tornadoes converge in the center and eventually merge into a single massive tornado."
      }
    ],
    "isVariant": false
  },
  {
    "id": "105B",
    "key": "Faleris_Aqua",
    "name": "Faleris Aqua",
    "types": [
      "Water"
    ],
    "stats": {
      "hp": 100,
      "attack": {
        "melee": 100,
        "ranged": 110
      },
      "defense": 110,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 90,
      "food": 525
    },
    "suitability": {
      "watering": 4,
      "transporting": 3
    },
    "breedingPower": 245,
    "description": "When it finds its prey, it unleashes a mighty torrent, sweeping the entire area.\r\nMore often than not, the prey gets swept away in the chaos, \r\nleaving one to wonder whether this truly counts as hunting.",
    "image": "/images/pals/Faleris_Aqua.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Hydro Jet",
        "level": 1,
        "element": "Water",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a high speed ball of water at an enemy."
      },
      {
        "name": "Bubble Blast",
        "level": 7,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "Acid Rain",
        "level": 15,
        "element": "Water",
        "cooltime": "18",
        "power": "80",
        "description": "Creates acidic clouds that pour down acid rain on enemies."
      },
      {
        "name": "Splash",
        "level": 22,
        "element": "Water",
        "cooltime": "22",
        "power": "90",
        "description": "Generates a column of water that travels in a straight line."
      },
      {
        "name": "Curtain Splash",
        "level": 30,
        "element": "Water",
        "cooltime": "40",
        "power": "120",
        "description": "Continously creates walls made from water columns at the enemy's location."
      },
      {
        "name": "Phoenix Tide",
        "level": 40,
        "element": "Water",
        "cooltime": "28",
        "power": "135",
        "description": "Faleris Aqua's exclusive skill. After summoning a massive tornado, it envelops its body in water and charges forward."
      },
      {
        "name": "Hydro Laser",
        "level": 50,
        "element": "Water",
        "cooltime": "55",
        "power": "150",
        "description": "Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it."
      }
    ],
    "isVariant": true
  },
  {
    "id": "106",
    "key": "Orserk",
    "name": "Orserk",
    "types": [
      "Dragon",
      "Electric"
    ],
    "stats": {
      "hp": 100,
      "attack": {
        "melee": 100,
        "ranged": 130
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 475
    },
    "suitability": {
      "generating_electricity": 4,
      "handiwork": 2,
      "transporting": 3
    },
    "breedingPower": 140,
    "description": "It sends electricity into its foes' wounds, roasting them from the inside out. \r\nFights between Orserk end in the blink of an eye.",
    "image": "/images/pals/Orserk.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Kerauno",
        "level": 1,
        "element": "Electric",
        "cooltime": "30",
        "power": "100",
        "description": "Orserk's exclusive skill. Summons a spear of lightning while leaping into the air before throwing it at an enemy."
      },
      {
        "name": "Lightning Strike",
        "level": 7,
        "element": "Electric",
        "cooltime": "40",
        "power": "120",
        "description": "Acts as a lightning rod, calling down thunderbolts that electrocute the surrounding area."
      },
      {
        "name": "Spark Blast",
        "level": 15,
        "element": "Electric",
        "cooltime": "2",
        "power": "30",
        "description": "Releases lightning orbs in a fan shape, spreading as they travel."
      },
      {
        "name": "Draconic Breath",
        "level": 22,
        "element": "Dragon",
        "cooltime": "15",
        "power": "70",
        "description": "Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it."
      },
      {
        "name": "Lightning Streak",
        "level": 30,
        "element": "Electric",
        "cooltime": "16",
        "power": "75",
        "description": "Generates a lightning bolt that moves forward in a line."
      },
      {
        "name": "Tri-Lightning",
        "level": 40,
        "element": "Electric",
        "cooltime": "22",
        "power": "90",
        "description": "Generates lightning that strikes an enemy three times from above."
      },
      {
        "name": "Lightning Bolt",
        "level": 50,
        "element": "Electric",
        "cooltime": "55",
        "power": "150",
        "description": "Charges electric energy before blasting enemies with a powerful shock."
      },
      {
        "name": "Polykeraunos",
        "level": 55,
        "element": "Electric",
        "cooltime": "50",
        "power": "180",
        "description": "Orserk's exclusive skill. Summons numerous thunder spears and hurls them at the enemy. The first spear is imbued with the power of lightning and explodes after a few seconds."
      }
    ],
    "isVariant": false
  },
  {
    "id": "107",
    "key": "Shadowbeak",
    "name": "Shadowbeak",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 120,
      "attack": {
        "melee": 130,
        "ranged": 120
      },
      "defense": 140,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 90,
      "food": 525
    },
    "suitability": {
      "gathering": 1
    },
    "breedingPower": 60,
    "description": "Born from the depths of insanity, its very existence defies reason.\r\nHaving lost all genetic ties to other Pals,\r\none wonders if it could still even be considered a Pal.",
    "image": "/images/pals/Shadowbeak.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Dark Ball",
        "level": 7,
        "element": "Dark",
        "cooltime": "4",
        "power": "40",
        "description": "Unleashes a sphere of darkness that slowly tracks down an enemy."
      },
      {
        "name": "Shadow Burst",
        "level": 15,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Spirit Flame",
        "level": 22,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Nightmare Ball",
        "level": 30,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Divine Disaster",
        "level": 40,
        "element": "Dark",
        "cooltime": "45",
        "power": "160",
        "description": "Charges forward, generating orbs of light that automatically target enemies and unleash a barrage of lasers."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      },
      {
        "name": "Divine Disaster II",
        "level": 55,
        "element": "Dark",
        "cooltime": "45",
        "power": "170",
        "description": "Shadowbeak's exclusive skill. As it charges forward, emits countless blue rays that automatically locate and pursue the enemy."
      }
    ],
    "isVariant": false
  },
  {
    "id": "108",
    "key": "Paladius",
    "name": "Paladius",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 130,
      "attack": {
        "melee": 110,
        "ranged": 120
      },
      "defense": 145,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 600
    },
    "suitability": {
      "lumbering": 2,
      "mining": 2
    },
    "breedingPower": 80,
    "description": "Once one with Necromus .\r\nIts gleaming form is free of all negative emotions.\r\nHowever, a glimmer of hatred can still be seen deep within its eyes.",
    "image": "/images/pals/Paladius.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Power Shot",
        "level": 1,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Ice Missile",
        "level": 7,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Iceberg",
        "level": 15,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Power Bomb",
        "level": 22,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Blizzard Spike",
        "level": 30,
        "element": "Ice",
        "cooltime": "45",
        "power": "130",
        "description": "Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact."
      },
      {
        "name": "Spear Thrust",
        "level": 40,
        "element": "Neutral",
        "cooltime": "40",
        "power": "120",
        "description": "Paladius' exclusive skill. Charges forward while enveloped in holy power with its spear thrust ahead. The shield in its other hand blocks all attacks during the charge."
      },
      {
        "name": "Pal Blast",
        "level": 50,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      },
      {
        "name": "Absolute Frost",
        "level": 55,
        "element": "Ice",
        "cooltime": "50",
        "power": "140",
        "description": "Throws icicles in a wide area from under the enemy's feet."
      },
      {
        "name": "Holy Burst",
        "level": 60,
        "element": "Neutral",
        "cooltime": "30",
        "power": "120",
        "description": "Creates a wide explosion of light at the enemy's location and around it."
      }
    ],
    "isVariant": false
  },
  {
    "id": "109",
    "key": "Necromus",
    "name": "Necromus",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 130,
      "attack": {
        "melee": 100,
        "ranged": 145
      },
      "defense": 120,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 600
    },
    "suitability": {
      "lumbering": 2,
      "mining": 2
    },
    "breedingPower": 70,
    "description": "Once one with Paladius . \r\nIts darkened form is the embodiment of negative emotions. \r\nHowever, a glimmer of compassion can still be seen deep within its eyes.",
    "image": "/images/pals/Necromus.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Shadow Burst",
        "level": 1,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Spirit Fire",
        "level": 7,
        "element": "Fire",
        "cooltime": "7",
        "power": "45",
        "description": "Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward."
      },
      {
        "name": "Spirit Flame",
        "level": 15,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Nightmare Ball",
        "level": 22,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Rock Lance",
        "level": 30,
        "element": "Ground",
        "cooltime": "55",
        "power": "150",
        "description": "Generates a sharp rock spear under an enemy."
      },
      {
        "name": "Twin Spears",
        "level": 40,
        "element": "Dark",
        "cooltime": "40",
        "power": "120",
        "description": "Necromus' exclusive skill. Clads its twin spears with vicious whirlwinds and charges forward, thrusting them one after the other."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      },
      {
        "name": "Apocalypse",
        "level": 55,
        "element": "Dark",
        "cooltime": "55",
        "power": "110",
        "description": "Generates several dark vortexes around the enemy."
      },
      {
        "name": "Stone Beat",
        "level": 60,
        "element": "Ground",
        "cooltime": "60",
        "power": "170",
        "description": "Shakes the ground and lifts a massive boulder into the air."
      }
    ],
    "isVariant": false
  },
  {
    "id": "110",
    "key": "Frostallion",
    "name": "Frostallion",
    "types": [
      "Ice"
    ],
    "stats": {
      "hp": 140,
      "attack": {
        "melee": 100,
        "ranged": 140
      },
      "defense": 120,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 70,
      "food": 475
    },
    "suitability": {
      "cooling": 4
    },
    "breedingPower": 120,
    "description": "Guardian deity of Palpagos Island, known as the Winter Caller.\r\nIn the past, when a calamity struck the land, it soared into the sky\r\nand sealed away the threat by casting the island into eternal winter.",
    "image": "/images/pals/Frostallion.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Ice Missile",
        "level": 7,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Icicle Cutter",
        "level": 15,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Iceberg",
        "level": 22,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Crystal Wing",
        "level": 30,
        "element": "Ice",
        "cooltime": "24",
        "power": "110",
        "description": "Frostallion's exclusive skill. Dashes forward while concentrating frigid air around its wings, using them to slash enemies with icy blade."
      },
      {
        "name": "Crystal Breath",
        "level": 40,
        "element": "Ice",
        "cooltime": "22",
        "power": "90",
        "description": "Enshrouds an enemy in a frigid blast of air, dealing continuous damage."
      },
      {
        "name": "Blizzard Spike",
        "level": 50,
        "element": "Ice",
        "cooltime": "45",
        "power": "130",
        "description": "Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact."
      },
      {
        "name": "Holy Burst",
        "level": 55,
        "element": "Neutral",
        "cooltime": "30",
        "power": "120",
        "description": "Creates a wide explosion of light at the enemy's location and around it."
      },
      {
        "name": "Double Blizzard Spike",
        "level": 60,
        "element": "Ice",
        "cooltime": "60",
        "power": "200",
        "description": "Creates two huge ice blocks and fires them at the enemy one after another. On impact, it also shocks those close by."
      }
    ],
    "isVariant": false
  },
  {
    "id": "110B",
    "key": "Frostallion_Noct",
    "name": "Frostallion Noct",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 140,
      "attack": {
        "melee": 100,
        "ranged": 140
      },
      "defense": 135,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 70,
      "food": 475
    },
    "suitability": {
      "gathering": 4
    },
    "breedingPower": 100,
    "description": "Guardian deity of Palpagos Island, known as the Night Caller.\r\nIn the past, when a calamity struck the land, it soared into the sky\r\nand sealed away the threat by casting the island into eternal darkness.",
    "image": "/images/pals/Frostallion_Noct.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Dark Ball",
        "level": 7,
        "element": "Dark",
        "cooltime": "4",
        "power": "40",
        "description": "Unleashes a sphere of darkness that slowly tracks down an enemy."
      },
      {
        "name": "Shadow Burst",
        "level": 15,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Spirit Flame",
        "level": 22,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Crystal Wing",
        "level": 30,
        "element": "Ice",
        "cooltime": "24",
        "power": "110",
        "description": "Frostallion's exclusive skill. Dashes forward while concentrating frigid air around its wings, using them to slash enemies with icy blade."
      },
      {
        "name": "Nightmare Ball",
        "level": 40,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      },
      {
        "name": "Double Blizzard Spike",
        "level": 55,
        "element": "Ice",
        "cooltime": "60",
        "power": "200",
        "description": "Creates two huge ice blocks and fires them at the enemy one after another. On impact, it also shocks those close by."
      },
      {
        "name": "Dark Whisp",
        "level": 60,
        "element": "Dark",
        "cooltime": "45",
        "power": "160",
        "description": "Fires a menacing ball of dark energy that pursues enemies."
      }
    ],
    "isVariant": true
  },
  {
    "id": "111",
    "key": "Jetragon",
    "name": "Jetragon",
    "types": [
      "Dragon"
    ],
    "stats": {
      "hp": 110,
      "attack": {
        "melee": 100,
        "ranged": 140
      },
      "defense": 110,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 600
    },
    "suitability": {
      "gathering": 3
    },
    "breedingPower": 90,
    "description": "Watches over Palpagos Island from high above.\r\nWhen calamity returns to the land, the earth will split open, and the skies will burn.\r\nIt is destined to strike down the calamity in a flash of total destruction.",
    "image": "/images/pals/Jetragon.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Spirit Fire",
        "level": 1,
        "element": "Fire",
        "cooltime": "7",
        "power": "45",
        "description": "Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward."
      },
      {
        "name": "Dragon Burst",
        "level": 7,
        "element": "Dragon",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges draconic energy, damaging those around it."
      },
      {
        "name": "Flare Storm",
        "level": 15,
        "element": "Fire",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two flaming tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Draconic Breath",
        "level": 22,
        "element": "Dragon",
        "cooltime": "15",
        "power": "70",
        "description": "Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it."
      },
      {
        "name": "Beam Comet",
        "level": 30,
        "element": "Dragon",
        "cooltime": "50",
        "power": "140",
        "description": "Jetragon's exclusive skill. Illuminates its wings and fires innumerable beams as it flies towards the enemy. The beams explode on impact."
      },
      {
        "name": "Fire Ball",
        "level": 40,
        "element": "Fire",
        "cooltime": "55",
        "power": "150",
        "description": "Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact."
      },
      {
        "name": "Dragon Meteor",
        "level": 50,
        "element": "Dragon",
        "cooltime": "55",
        "power": "150",
        "description": "Summons numerous small meteorites and launches them at an enemy."
      },
      {
        "name": "Beam Slicer",
        "level": 55,
        "element": "Dragon",
        "cooltime": "45",
        "power": "130",
        "description": "Mows down the area in front with a beam imbued with dragon power. The area struck by the beam will also explode after a short delay."
      },
      {
        "name": "Meteorain",
        "level": 60,
        "element": "Dragon",
        "cooltime": "55",
        "power": "160",
        "description": "Drops countless meteorites, generating an array of shock waves."
      }
    ],
    "isVariant": false
  },
  {
    "id": "112",
    "key": "Bellanoir",
    "name": "Bellanoir",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 120,
      "attack": {
        "melee": 100,
        "ranged": 150
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 300
    },
    "suitability": {
      "handiwork": 2,
      "medicine_production": 4,
      "transporting": 2
    },
    "breedingPower": 1,
    "description": "Without existing, she quietly gazed upon the world.\r\nOne day, she was seized with a longing to be seen.\r\nWith unbridled lust for vengeance against reality,\r\nthus was born the Eclipsed Siren.",
    "image": "/images/pals/Bellanoir.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Dark Cannon",
        "level": 1,
        "element": "Dark",
        "cooltime": "2",
        "power": "50",
        "description": "Hurls an energy ball imbued with dark energy at an enemy."
      },
      {
        "name": "Umbral Surge",
        "level": 7,
        "element": "Dark",
        "cooltime": "2",
        "power": "40",
        "description": "Fires high-speed dark orbs in a fan shape, spreading as they travel."
      },
      {
        "name": "Dark Arrow",
        "level": 15,
        "element": "Dark",
        "cooltime": "10",
        "power": "65",
        "description": "Fires off dark energy that homes in on an enemy."
      },
      {
        "name": "Spirit Flame",
        "level": 22,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Nightmare Ball",
        "level": 30,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Apocalypse",
        "level": 40,
        "element": "Dark",
        "cooltime": "55",
        "power": "110",
        "description": "Generates several dark vortexes around the enemy."
      },
      {
        "name": "Nightmare Ray",
        "level": 50,
        "element": "Dark",
        "cooltime": "50",
        "power": "140",
        "description": "Bellanoir's exclusive skill. Disappears suddenly, then reappears while firing a barrage of beams."
      }
    ],
    "isVariant": false
  },
  {
    "id": "112B",
    "key": "Bellanoir_Libero",
    "name": "Bellanoir Libero",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 120,
      "attack": {
        "melee": 100,
        "ranged": 150
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 300
    },
    "suitability": {
      "handiwork": 2,
      "medicine_production": 4,
      "transporting": 2
    },
    "breedingPower": 1,
    "description": "With her desires set loose, she was soon overwhelmed.\r\nShe longed for a self to gaze upon herself. \r\nAnd the sisters who gazed, resenting reality, \r\nwere driven into the abyss and, at last, closed their eyes.",
    "image": "/images/pals/Bellanoir_Libero.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Dark Cannon",
        "level": 1,
        "element": "Dark",
        "cooltime": "2",
        "power": "50",
        "description": "Hurls an energy ball imbued with dark energy at an enemy."
      },
      {
        "name": "Umbral Surge",
        "level": 7,
        "element": "Dark",
        "cooltime": "2",
        "power": "40",
        "description": "Fires high-speed dark orbs in a fan shape, spreading as they travel."
      },
      {
        "name": "Dark Arrow",
        "level": 15,
        "element": "Dark",
        "cooltime": "10",
        "power": "65",
        "description": "Fires off dark energy that homes in on an enemy."
      },
      {
        "name": "Nightmare Ball",
        "level": 22,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Apocalypse",
        "level": 30,
        "element": "Dark",
        "cooltime": "55",
        "power": "110",
        "description": "Generates several dark vortexes around the enemy."
      },
      {
        "name": "Flame Waltz",
        "level": 40,
        "element": "Dark",
        "cooltime": "45",
        "power": "130",
        "description": "Bellanoir Libero's exclusive skill. With a graceful dance, conjuries expanding rings of fire, then unleashes eerie flames that seek the enemies."
      },
      {
        "name": "Nightmare Bloom",
        "level": 50,
        "element": "Dark",
        "cooltime": "50",
        "power": "160",
        "description": "Bellanoir Libero's exclusive skill. Disappears suddenly, then reappears while firing a barrage of beams. The beams spread like a beautiful flower in bloom."
      }
    ],
    "isVariant": false
  },
  {
    "id": "113",
    "key": "Selyne",
    "name": "Selyne",
    "types": [
      "Dark",
      "Neutral"
    ],
    "stats": {
      "hp": 130,
      "attack": {
        "melee": 100,
        "ranged": 115
      },
      "defense": 110,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "handiwork": 4,
      "medicine_production": 3,
      "transporting": 3
    },
    "breedingPower": 345,
    "description": "The object floating behind, resembling the moon,\r\nis said to gradually become more circular with each passing generation.\r\nNo one knows what will happen when the moon is full.",
    "image": "/images/pals/Selyne.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Dark Cannon",
        "level": 1,
        "element": "Dark",
        "cooltime": "2",
        "power": "50",
        "description": "Hurls an energy ball imbued with dark energy at an enemy."
      },
      {
        "name": "Dark Arrow",
        "level": 7,
        "element": "Dark",
        "cooltime": "10",
        "power": "65",
        "description": "Fires off dark energy that homes in on an enemy."
      },
      {
        "name": "Air Blade",
        "level": 15,
        "element": "Neutral",
        "cooltime": "20",
        "power": "85",
        "description": "Sends out sharp blades of air in a fan shape."
      },
      {
        "name": "Holy Burst",
        "level": 22,
        "element": "Neutral",
        "cooltime": "30",
        "power": "120",
        "description": "Creates a wide explosion of light at the enemy's location and around it."
      },
      {
        "name": "Seigetsu Blade",
        "level": 30,
        "element": "Neutral",
        "cooltime": "24",
        "power": "110",
        "description": "Selyne's exclusive skill. Fires two consecutive high-speed blades imbued with the power of moonlight."
      },
      {
        "name": "Star Mine",
        "level": 40,
        "element": "Neutral",
        "cooltime": "55",
        "power": "110",
        "description": "Generates stars around the enemy that explode on contact. Stars also explode after some time."
      },
      {
        "name": "Moonlight Beam",
        "level": 50,
        "element": "Neutral",
        "cooltime": "40",
        "power": "170",
        "description": "Selyne's exclusive skill. Stores energy in the moon on its back, then fires a crescent-shaped beam forward."
      }
    ],
    "isVariant": false
  },
  {
    "id": "114",
    "key": "Croajiro",
    "name": "Croajiro",
    "types": [
      "Water"
    ],
    "stats": {
      "hp": 80,
      "attack": {
        "melee": 100,
        "ranged": 100
      },
      "defense": 85,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "watering": 1,
      "handiwork": 1,
      "gathering": 1,
      "transporting": 1
    },
    "breedingPower": 795,
    "description": "Those who disgrace the honor of the herd are forced to take their own life.\r\nBy piercing their inflated vocal sac with a tree branch,\r\nthey are blown away into the atmosphere and return to the afterlife.",
    "image": "/images/pals/Croajiro.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Aqua Gun",
        "level": 1,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Bubble Blast",
        "level": 7,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "Acid Rain",
        "level": 15,
        "element": "Water",
        "cooltime": "18",
        "power": "80",
        "description": "Creates acidic clouds that pour down acid rain on enemies."
      },
      {
        "name": "Aqua Burst",
        "level": 22,
        "element": "Water",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of water and hurls it at an enemy."
      },
      {
        "name": "Splash",
        "level": 30,
        "element": "Water",
        "cooltime": "22",
        "power": "90",
        "description": "Generates a column of water that travels in a straight line."
      },
      {
        "name": "Curtain Splash",
        "level": 40,
        "element": "Water",
        "cooltime": "40",
        "power": "120",
        "description": "Continously creates walls made from water columns at the enemy's location."
      },
      {
        "name": "Hydro Laser",
        "level": 50,
        "element": "Water",
        "cooltime": "55",
        "power": "150",
        "description": "Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it."
      }
    ],
    "isVariant": false
  },
  {
    "id": "114B",
    "key": "Croajiro_Noct",
    "name": "Croajiro Noct",
    "types": [
      "Water",
      "Dark"
    ],
    "stats": {
      "hp": 85,
      "attack": {
        "melee": 100,
        "ranged": 110
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "watering": 1,
      "handiwork": 1,
      "gathering": 1,
      "transporting": 1
    },
    "breedingPower": 765,
    "description": "The Croajiro who have forsaken their honor gather and form splinter groups.\r\nThey will use any underhanded means to take down their chosen prey.\r\nIf you encounter a pack of Croajiro Noct in the dead of the night, it's your life that's on the line.",
    "image": "/images/pals/Croajiro_Noct.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Poison Blast",
        "level": 1,
        "element": "Dark",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls poison sludge at an enemy."
      },
      {
        "name": "Dark Shot",
        "level": 7,
        "element": "Dark",
        "cooltime": "4",
        "power": "40",
        "description": "Fires a dark energy projectile that accelerates over time."
      },
      {
        "name": "Dark Arrow",
        "level": 15,
        "element": "Dark",
        "cooltime": "10",
        "power": "65",
        "description": "Fires off dark energy that homes in on an enemy."
      },
      {
        "name": "Acid Rain",
        "level": 22,
        "element": "Water",
        "cooltime": "18",
        "power": "80",
        "description": "Creates acidic clouds that pour down acid rain on enemies."
      },
      {
        "name": "Nightmare Ball",
        "level": 30,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Hydro Slicer",
        "level": 40,
        "element": "Water",
        "cooltime": "45",
        "power": "130",
        "description": "Mows down the frontal area with a blast of compressed water. The area struck by the blast erupts with water after a short delay."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": true
  },
  {
    "id": "115",
    "key": "Lullu",
    "name": "Lullu",
    "types": [
      "Grass"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 100,
        "ranged": 90
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "planting": 2,
      "handiwork": 2,
      "gathering": 1,
      "medicine_production": 2
    },
    "breedingPower": 905,
    "description": "In early spring, pollen floats on the wind throughout the island. Flopie 's hay fever is Lullu 's fault.",
    "image": "/images/pals/Lullu.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Wind Cutter",
        "level": 1,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Seed Machine Gun",
        "level": 7,
        "element": "Grass",
        "cooltime": "9",
        "power": "50",
        "description": "Fires a volley of hard seeds at enemies in front of it."
      },
      {
        "name": "Multicutter",
        "level": 15,
        "element": "Grass",
        "cooltime": "12",
        "power": "60",
        "description": "The user fires three high-speed blades of wind in quick succession that fly straight at enemies."
      },
      {
        "name": "Grass Tornado",
        "level": 22,
        "element": "Grass",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Holy Burst",
        "level": 30,
        "element": "Neutral",
        "cooltime": "30",
        "power": "120",
        "description": "Creates a wide explosion of light at the enemy's location and around it."
      },
      {
        "name": "Circle Vine",
        "level": 40,
        "element": "Grass",
        "cooltime": "40",
        "power": "120",
        "description": "Sprouts sharp roots in and around the enemy's location."
      },
      {
        "name": "Solar Blast",
        "level": 50,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "116",
    "key": "Shroomer",
    "name": "Shroomer",
    "types": [
      "Grass"
    ],
    "stats": {
      "hp": 110,
      "attack": {
        "melee": 100,
        "ranged": 80
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 270
    },
    "suitability": {
      "planting": 2,
      "handiwork": 1,
      "gathering": 2,
      "lumbering": 2
    },
    "breedingPower": 720,
    "description": "Inhaling large amounts of its spores will put you into a trance.\r\nSometimes, if Shroomer appears motionless,\r\nit's not because it's mimicking a mushroom,\r\nbut rather because it's high off its own spores.",
    "image": "/images/pals/Shroomer.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Poison Blast",
        "level": 1,
        "element": "Dark",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls poison sludge at an enemy."
      },
      {
        "name": "Seed Machine Gun",
        "level": 7,
        "element": "Grass",
        "cooltime": "9",
        "power": "50",
        "description": "Fires a volley of hard seeds at enemies in front of it."
      },
      {
        "name": "Grass Tornado",
        "level": 15,
        "element": "Grass",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Seed Mine",
        "level": 22,
        "element": "Grass",
        "cooltime": "13",
        "power": "65",
        "description": "Launches a deadly seed. If it hits an enemy, the seed explodes."
      },
      {
        "name": "Spine Vine",
        "level": 30,
        "element": "Grass",
        "cooltime": "25",
        "power": "95",
        "description": "Generates spiny thorns that chase an enemy along the ground, piercing them from below."
      },
      {
        "name": "Circle Vine",
        "level": 40,
        "element": "Grass",
        "cooltime": "40",
        "power": "120",
        "description": "Sprouts sharp roots in and around the enemy's location."
      },
      {
        "name": "Solar Blast",
        "level": 50,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "116B",
    "key": "Shroomer_Noct",
    "name": "Shroomer Noct",
    "types": [
      "Grass",
      "Dark"
    ],
    "stats": {
      "hp": 110,
      "attack": {
        "melee": 100,
        "ranged": 85
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 270
    },
    "suitability": {
      "planting": 2,
      "handiwork": 1,
      "gathering": 2,
      "lumbering": 2
    },
    "breedingPower": 730,
    "description": "The abundance of spores released by this Pal blocks out sunlight.\r\nSometimes, if Shroomer Noct appears motionless,\r\nit's not because it's mimicking a mushroom,\r\nbut rather because its own spores don't let it see anything.",
    "image": "/images/pals/Shroomer_Noct.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Poison Blast",
        "level": 1,
        "element": "Dark",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls poison sludge at an enemy."
      },
      {
        "name": "Shadow Burst",
        "level": 7,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Grass Tornado",
        "level": 15,
        "element": "Grass",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Seed Mine",
        "level": 22,
        "element": "Grass",
        "cooltime": "13",
        "power": "65",
        "description": "Launches a deadly seed. If it hits an enemy, the seed explodes."
      },
      {
        "name": "Nightmare Ball",
        "level": 30,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Circle Vine",
        "level": 40,
        "element": "Grass",
        "cooltime": "40",
        "power": "120",
        "description": "Sprouts sharp roots in and around the enemy's location."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": true
  },
  {
    "id": "117",
    "key": "Kikit",
    "name": "Kikit",
    "types": [
      "Ground"
    ],
    "stats": {
      "hp": 75,
      "attack": {
        "melee": 100,
        "ranged": 70
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "mining": 1
    },
    "breedingPower": 1125,
    "description": "A decade ago, Kikit soccer was popular. \r\nHowever, it quickly fell out of favor due to fierce opposition from the Free Pal Alliance. \r\nNevertheless, the Kikit 's themselves didn't mind because it helped shed their old carapace.",
    "image": "/images/pals/Kikit.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Power Shot",
        "level": 1,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Bog Blast",
        "level": 7,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Stone Blast",
        "level": 15,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Power Bomb",
        "level": 22,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Sand Tornado",
        "level": 30,
        "element": "Ground",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two sand tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Rockburst",
        "level": 40,
        "element": "Ground",
        "cooltime": "35",
        "power": "130",
        "description": "Causes the ground to shake before hurling a massive stone mass at its surroundings."
      },
      {
        "name": "Rock Lance",
        "level": 50,
        "element": "Ground",
        "cooltime": "55",
        "power": "150",
        "description": "Generates a sharp rock spear under an enemy."
      }
    ],
    "isVariant": false
  },
  {
    "id": "118",
    "key": "Sootseer",
    "name": "Sootseer",
    "types": [
      "Dark",
      "Fire"
    ],
    "stats": {
      "hp": 105,
      "attack": {
        "melee": 100,
        "ranged": 125
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 475
    },
    "suitability": {
      "kindling": 3,
      "handiwork": 2,
      "gathering": 1,
      "mining": 2,
      "farming": 1
    },
    "breedingPower": 545,
    "description": "It was once believed that as the world approached its end, the flame would weaken.\r\nDoomsayers would repeatedly rejoice when the flame began to weaken,\r\nbut in the end, it turned out to be a prank by Sootseer .\r\nAt least, for now.",
    "image": "/images/pals/Sootseer.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ignis Blast",
        "level": 1,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Dark Ball",
        "level": 7,
        "element": "Dark",
        "cooltime": "4",
        "power": "40",
        "description": "Unleashes a sphere of darkness that slowly tracks down an enemy."
      },
      {
        "name": "Spirit Fire",
        "level": 15,
        "element": "Fire",
        "cooltime": "7",
        "power": "45",
        "description": "Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward."
      },
      {
        "name": "Spirit Flame",
        "level": 22,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Nightmare Ball",
        "level": 30,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Flame Funnel",
        "level": 40,
        "element": "Fire",
        "cooltime": "40",
        "power": "120",
        "description": "Creates multiple spheres of fiery energy, from which countless fireballs shoot towards the enemy."
      },
      {
        "name": "Volcanic Rain",
        "level": 50,
        "element": "Fire",
        "cooltime": "45",
        "power": "130",
        "description": "Fires countless volcanic bombs into the sky. After a while, the bombs rain down around their originator."
      }
    ],
    "isVariant": false
  },
  {
    "id": "119",
    "key": "Prixter",
    "name": "Prixter",
    "types": [
      "Dark",
      "Ground"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 100,
        "ranged": 110
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 300
    },
    "suitability": {
      "gathering": 1,
      "lumbering": 3,
      "medicine_production": 1
    },
    "breedingPower": 355,
    "description": "It has about 5,000 types of poison.\r\nSome of them are deadly enough to cause instant death,\r\nbut all of them are too weak to have any effect.",
    "image": "/images/pals/Prixter.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Poison Blast",
        "level": 1,
        "element": "Dark",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls poison sludge at an enemy."
      },
      {
        "name": "Dark Cannon",
        "level": 7,
        "element": "Dark",
        "cooltime": "2",
        "power": "50",
        "description": "Hurls an energy ball imbued with dark energy at an enemy."
      },
      {
        "name": "Stone Blast",
        "level": 15,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Sand Tornado",
        "level": 22,
        "element": "Ground",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two sand tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Upper Smash",
        "level": 30,
        "element": "Dark",
        "cooltime": "24",
        "power": "110",
        "description": "Prixter's exclusive skill. Closes the distance to the enemy at high speed, then swings its pincers upward with full force."
      },
      {
        "name": "Rock Lance",
        "level": 40,
        "element": "Ground",
        "cooltime": "55",
        "power": "150",
        "description": "Generates a sharp rock spear under an enemy."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "120",
    "key": "Knocklem",
    "name": "Knocklem",
    "types": [
      "Ground"
    ],
    "stats": {
      "hp": 105,
      "attack": {
        "melee": 100,
        "ranged": 110
      },
      "defense": 135,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 600
    },
    "suitability": {
      "gathering": 3,
      "mining": 4,
      "transporting": 4
    },
    "breedingPower": 265,
    "description": "Can be disassembled into 215 parts, and even if the parts are scattered,\r\nit will reassemble itself and start moving again. \r\nIf parts from different individuals are mixed it will malfunction due to mistaken identity.",
    "image": "/images/pals/Knocklem.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Power Shot",
        "level": 1,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Stone Blast",
        "level": 7,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Stone Cannon",
        "level": 15,
        "element": "Ground",
        "cooltime": "15",
        "power": "70",
        "description": "Digs up a boulder and hurls it at an enemy."
      },
      {
        "name": "Rockburst",
        "level": 22,
        "element": "Ground",
        "cooltime": "35",
        "power": "130",
        "description": "Causes the ground to shake before hurling a massive stone mass at its surroundings."
      },
      {
        "name": "Rock Lance",
        "level": 30,
        "element": "Ground",
        "cooltime": "55",
        "power": "150",
        "description": "Generates a sharp rock spear under an enemy."
      },
      {
        "name": "Ground Cutter",
        "level": 40,
        "element": "Ground",
        "cooltime": "35",
        "power": "145",
        "description": "Knocklem's exclusive skill. Takes a big swing and throws the ring from its back. The ring flies in a circular trajectory."
      },
      {
        "name": "Sand Twister",
        "level": 50,
        "element": "Ground",
        "cooltime": "60",
        "power": "160",
        "description": "Creates multiple sand tornadoes. The tornadoes continuously spin in circles."
      }
    ],
    "isVariant": false
  },
  {
    "id": "121",
    "key": "Yakumo",
    "name": "Yakumo",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 85,
      "attack": {
        "melee": 80,
        "ranged": 85
      },
      "defense": 85,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 110,
      "food": 270
    },
    "suitability": {
      "gathering": 2
    },
    "breedingPower": 945,
    "description": "It has a strong sense of justice and despises evil.\r\nIn the past they were faithful and loving companions to the islanders.\r\nNowadays, Yakumo s are hostile to humans wherever they spot them.",
    "image": "/images/pals/Yakumo.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Bog Blast",
        "level": 1,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Power Shot",
        "level": 7,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Stone Blast",
        "level": 15,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Power Bomb",
        "level": 22,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Air Blade",
        "level": 30,
        "element": "Neutral",
        "cooltime": "20",
        "power": "85",
        "description": "Sends out sharp blades of air in a fan shape."
      },
      {
        "name": "Holy Burst",
        "level": 40,
        "element": "Neutral",
        "cooltime": "30",
        "power": "120",
        "description": "Creates a wide explosion of light at the enemy's location and around it."
      },
      {
        "name": "Pal Blast",
        "level": 50,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      }
    ],
    "isVariant": false
  },
  {
    "id": "122",
    "key": "Dogen",
    "name": "Dogen",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 100,
        "ranged": 100
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 300
    },
    "suitability": {
      "handiwork": 3,
      "gathering": 2,
      "lumbering": 2,
      "medicine_production": 1,
      "transporting": 2
    },
    "breedingPower": 665,
    "description": "Striving for a state of selflessness, it meditates endlessly. \r\nAfter confronting its worldly desires, it eats a meal and reflects.\r\nIt ate too much today.",
    "image": "/images/pals/Dogen.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Air Cannon",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "25",
        "description": "Quickly fires a burst of highly pressurized air."
      },
      {
        "name": "Power Shot",
        "level": 7,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Stone Cannon",
        "level": 15,
        "element": "Ground",
        "cooltime": "15",
        "power": "70",
        "description": "Digs up a boulder and hurls it at an enemy."
      },
      {
        "name": "Power Bomb",
        "level": 22,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Air Blade",
        "level": 30,
        "element": "Neutral",
        "cooltime": "20",
        "power": "85",
        "description": "Sends out sharp blades of air in a fan shape."
      },
      {
        "name": "Wholehearted Stance",
        "level": 40,
        "element": "Neutral",
        "cooltime": "30",
        "power": "170",
        "description": "Dogen's exclusive skill. Adopts an aiki stance. While in this stance, nulify any incoming attack, instantly close in on the enemy, and counter with a full-forced palm strike."
      },
      {
        "name": "Pal Blast",
        "level": 50,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      }
    ],
    "isVariant": false
  },
  {
    "id": "123",
    "key": "Dazemu",
    "name": "Dazemu",
    "types": [
      "Ground"
    ],
    "stats": {
      "hp": 95,
      "attack": {
        "melee": 100,
        "ranged": 90
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 300
    },
    "suitability": {
      "gathering": 2
    },
    "breedingPower": 675,
    "description": "Take one step forward and forget your doubts.\r\nTake two steps forward and forget your worries.\r\nTake three steps forward and forget your fears.\r\nFace any enemy.",
    "image": "/images/pals/Dazemu.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Bog Blast",
        "level": 1,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Power Shot",
        "level": 7,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Stone Blast",
        "level": 15,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Stone Cannon",
        "level": 22,
        "element": "Ground",
        "cooltime": "15",
        "power": "70",
        "description": "Digs up a boulder and hurls it at an enemy."
      },
      {
        "name": "Earth Dash",
        "level": 30,
        "element": "Ground",
        "cooltime": "21",
        "power": "100",
        "description": "Dazemu's exclusive skill. Accelerates all at once and dashes forward at high speed."
      },
      {
        "name": "Rockburst",
        "level": 40,
        "element": "Ground",
        "cooltime": "35",
        "power": "130",
        "description": "Causes the ground to shake before hurling a massive stone mass at its surroundings."
      },
      {
        "name": "Sand Twister",
        "level": 50,
        "element": "Ground",
        "cooltime": "60",
        "power": "160",
        "description": "Creates multiple sand tornadoes. The tornadoes continuously spin in circles."
      }
    ],
    "isVariant": false
  },
  {
    "id": "124",
    "key": "Mimog",
    "name": "Mimog",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 60,
      "attack": {
        "melee": 100,
        "ranged": 60
      },
      "defense": 130,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "gathering": 1,
      "transporting": 1
    },
    "breedingPower": 1200,
    "description": "There was once a tradition of handing out an award\r\nto the person who met their end in the most foolish way.\r\nThe first award was given for\r\n|being unaware of Mimog , opening the chest, and being bitten to death.|",
    "image": "/images/pals/Mimog.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Power Shot",
        "level": 1,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Dark Cannon",
        "level": 7,
        "element": "Dark",
        "cooltime": "2",
        "power": "50",
        "description": "Hurls an energy ball imbued with dark energy at an enemy."
      },
      {
        "name": "Spirit Flame",
        "level": 15,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Power Bomb",
        "level": 22,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Air Blade",
        "level": 30,
        "element": "Neutral",
        "cooltime": "20",
        "power": "85",
        "description": "Sends out sharp blades of air in a fan shape."
      },
      {
        "name": "Holy Burst",
        "level": 40,
        "element": "Neutral",
        "cooltime": "30",
        "power": "120",
        "description": "Creates a wide explosion of light at the enemy's location and around it."
      },
      {
        "name": "Pal Blast",
        "level": 50,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      }
    ],
    "isVariant": false
  },
  {
    "id": "125",
    "key": "Xenovader",
    "name": "Xenovader",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 100,
        "ranged": 125
      },
      "defense": 85,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 475
    },
    "suitability": {
      "lumbering": 2,
      "transporting": 2
    },
    "breedingPower": 465,
    "description": "Can send information and convert it into energy by forgetting it.\r\nRegularly seems to be sending information to someone.\r\n- Respond. Target located. Proceed to immediate destruction.",
    "image": "/images/pals/Xenovader.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Power Shot",
        "level": 1,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Poison Blast",
        "level": 7,
        "element": "Dark",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls poison sludge at an enemy."
      },
      {
        "name": "Umbral Surge",
        "level": 15,
        "element": "Dark",
        "cooltime": "2",
        "power": "40",
        "description": "Fires high-speed dark orbs in a fan shape, spreading as they travel."
      },
      {
        "name": "Dark Arrow",
        "level": 22,
        "element": "Dark",
        "cooltime": "10",
        "power": "65",
        "description": "Fires off dark energy that homes in on an enemy."
      },
      {
        "name": "Nightmare Ball",
        "level": 30,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Evil Slash",
        "level": 40,
        "element": "Dark",
        "cooltime": "17",
        "power": "95",
        "description": "Xenovader's exclusive skill. Swiftly pounces and slashes with its left hand."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "126",
    "key": "Xenogard",
    "name": "Xenogard",
    "types": [
      "Dragon"
    ],
    "stats": {
      "hp": 110,
      "attack": {
        "melee": 100,
        "ranged": 120
      },
      "defense": 130,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 600
    },
    "suitability": {
      "mining": 3
    },
    "breedingPower": 435,
    "description": "Consumes information and turns it into energy.\r\nRegularly seems to be sending information to someone.\r\n- Hello? What was the message you just sent? I devoured it before checking.",
    "image": "/images/pals/Xenogard.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Dragon Cannon",
        "level": 1,
        "element": "Dragon",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls an energy ball imbued with draconic energy at an enemy."
      },
      {
        "name": "Dragon Burst",
        "level": 7,
        "element": "Dragon",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges draconic energy, damaging those around it."
      },
      {
        "name": "Air Blade",
        "level": 15,
        "element": "Neutral",
        "cooltime": "20",
        "power": "85",
        "description": "Sends out sharp blades of air in a fan shape."
      },
      {
        "name": "Draconic Breath",
        "level": 22,
        "element": "Dragon",
        "cooltime": "15",
        "power": "70",
        "description": "Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it."
      },
      {
        "name": "Icicle Line",
        "level": 30,
        "element": "Ice",
        "cooltime": "40",
        "power": "120",
        "description": "Generates pillars of ice that move in a straight line in three directions."
      },
      {
        "name": "Comet Strike",
        "level": 40,
        "element": "Dragon",
        "cooltime": "35",
        "power": "110",
        "description": "Drops a meteorite straight down, generating a shock wave around the impact area."
      },
      {
        "name": "Beam Slicer",
        "level": 50,
        "element": "Dragon",
        "cooltime": "45",
        "power": "130",
        "description": "Mows down the area in front with a beam imbued with dragon power. The area struck by the beam will also explode after a short delay."
      }
    ],
    "isVariant": false
  },
  {
    "id": "127",
    "key": "Xenolord",
    "name": "Xenolord",
    "types": [
      "Dark",
      "Dragon"
    ],
    "stats": {
      "hp": 130,
      "attack": {
        "melee": 100,
        "ranged": 120
      },
      "defense": 120,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 565
    },
    "suitability": {
      "gathering": 1
    },
    "breedingPower": 265,
    "description": "-Destination reached. Priority: Locate entity |Supersonic Dragon|\r\n-Note: Conquest deadline exceeded by <://Error_Code:126DC> years.\r\n-Update: No conquest traces found. Naturalization confirmed. Commence elimination protocol.\r\n-Staff Memo: Refrain from forgetting or consuming critical data!",
    "image": "/images/pals/Xenolord.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Dragon Cannon",
        "level": 1,
        "element": "Dragon",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls an energy ball imbued with draconic energy at an enemy."
      },
      {
        "name": "Umbral Surge",
        "level": 7,
        "element": "Dark",
        "cooltime": "2",
        "power": "40",
        "description": "Fires high-speed dark orbs in a fan shape, spreading as they travel."
      },
      {
        "name": "Satellite Bit",
        "level": 15,
        "element": "Dragon",
        "cooltime": "12",
        "power": "80",
        "description": "Xenolord's exclusive skill. Generates four satellite-like wings with auto-attack functionality. These wings will automatically track and attack the enemy when the next attack is launched."
      },
      {
        "name": "Beam Slash",
        "level": 22,
        "element": "Dragon",
        "cooltime": "28",
        "power": "120",
        "description": "Xenolord's exclusive skill. Generates a high-output beam sword with the right hand and delivers two powerful slashes while moving at high speed."
      },
      {
        "name": "Astral Ray",
        "level": 30,
        "element": "Dark",
        "cooltime": "45",
        "power": "170",
        "description": "Xenolord's exclusive skill. Concentrates energy filled with darkness and releases it all at once in a straight line."
      },
      {
        "name": "Cosmic Meteor",
        "level": 40,
        "element": "Dragon",
        "cooltime": "50",
        "power": "180",
        "description": "Xenolord's exclusive skill. Soars into the air at the speed of light and releases countless meteor projectiles. Afterwards, transforms into a comet and charges forward, causing a massive explosion upon impact."
      },
      {
        "name": "Omega Laser",
        "level": 50,
        "element": "Dragon",
        "cooltime": "55",
        "power": "200",
        "description": "Xenolord's exclusive skill. Summons the light of destruction from subspace and continuously fires it in all directions, burning everything in its sight to ashes."
      }
    ],
    "isVariant": false
  },
  {
    "id": "128",
    "key": "Nitemary",
    "name": "Nitemary",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 105,
      "attack": {
        "melee": 100,
        "ranged": 95
      },
      "defense": 105,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 255
    },
    "suitability": {
      "handiwork": 3,
      "transporting": 2
    },
    "breedingPower": 705,
    "description": "What it carries is its own soul. \r\nWhen it falls for someone, \r\nit forcibly extracts their soul and merges it with its own, \r\nyearning to become one.",
    "image": "/images/pals/Nitemary.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Dark Ball",
        "level": 1,
        "element": "Dark",
        "cooltime": "4",
        "power": "40",
        "description": "Unleashes a sphere of darkness that slowly tracks down an enemy."
      },
      {
        "name": "Umbral Surge",
        "level": 7,
        "element": "Dark",
        "cooltime": "2",
        "power": "40",
        "description": "Fires high-speed dark orbs in a fan shape, spreading as they travel."
      },
      {
        "name": "Dark Cannon",
        "level": 15,
        "element": "Dark",
        "cooltime": "2",
        "power": "50",
        "description": "Hurls an energy ball imbued with dark energy at an enemy."
      },
      {
        "name": "Dark Arrow",
        "level": 22,
        "element": "Dark",
        "cooltime": "10",
        "power": "65",
        "description": "Fires off dark energy that homes in on an enemy."
      },
      {
        "name": "Spirit Flame",
        "level": 30,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Nightmare Ball",
        "level": 40,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Dark Whisp",
        "level": 50,
        "element": "Dark",
        "cooltime": "45",
        "power": "160",
        "description": "Fires a menacing ball of dark energy that pursues enemies."
      }
    ],
    "isVariant": false
  },
  {
    "id": "129",
    "key": "Starryon",
    "name": "Starryon",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 110,
      "attack": {
        "melee": 100,
        "ranged": 100
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 435
    },
    "suitability": {
      "gathering": 2
    },
    "breedingPower": 365,
    "description": "It takes great pride in its flowing, gorgeous mane.\r\nIf it finds a split end, it becomes so mortified it can't focus on running properly. \r\nBecause static electricity makes its hair frizzy, it avoids Azurmane at all costs.",
    "image": "/images/pals/Starryon.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Bog Blast",
        "level": 1,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Dark Ball",
        "level": 7,
        "element": "Dark",
        "cooltime": "4",
        "power": "40",
        "description": "Unleashes a sphere of darkness that slowly tracks down an enemy."
      },
      {
        "name": "Spirit Flame",
        "level": 15,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Nightmare Ball",
        "level": 22,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Ignis Rage",
        "level": 30,
        "element": "Fire",
        "cooltime": "40",
        "power": "120",
        "description": "Infuses the surrounding ground with energy, causing it to explode after a set amount of time."
      },
      {
        "name": "Apocalypse",
        "level": 40,
        "element": "Dark",
        "cooltime": "55",
        "power": "110",
        "description": "Generates several dark vortexes around the enemy."
      },
      {
        "name": "Lethal Step",
        "level": 50,
        "element": "Dark",
        "cooltime": "35",
        "power": "140",
        "description": "Starryon's exclusive skill. Confuses enemies with flickering steps and launches slashing attack with its sharp horn."
      }
    ],
    "isVariant": false
  },
  {
    "id": "130",
    "key": "Silvegis",
    "name": "Silvegis",
    "types": [
      "Dragon"
    ],
    "stats": {
      "hp": 120,
      "attack": {
        "melee": 100,
        "ranged": 110
      },
      "defense": 115,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 525
    },
    "suitability": {
      "lumbering": 3
    },
    "breedingPower": 215,
    "description": "The metallic components around its neck possess magnetic properties.\r\nIf the leg pieces get too close, they cling to it.\r\nWhen metal debris builds up on its neck, it grudgingly begins cleaning, \r\nand grows frustrated when they won't come off easily.",
    "image": "/images/pals/Silvegis.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Dragon Cannon",
        "level": 1,
        "element": "Dragon",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls an energy ball imbued with draconic energy at an enemy."
      },
      {
        "name": "Icicle Cutter",
        "level": 7,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Iceberg",
        "level": 15,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Draconic Breath",
        "level": 22,
        "element": "Dragon",
        "cooltime": "15",
        "power": "70",
        "description": "Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it."
      },
      {
        "name": "Blast Cannon",
        "level": 30,
        "element": "Dragon",
        "cooltime": "30",
        "power": "100",
        "description": "Fires an energy bullet imbued with dragon power at the enemy's location. Upon impact, the bullet shatters and creates a frontal long-range explosion."
      },
      {
        "name": "Charge Cannon",
        "level": 40,
        "element": "Dragon",
        "cooltime": "50",
        "power": "140",
        "description": "Fires an energy orb infused with draconic power at the enemy. The orb causes a wide-area explosion upon impact."
      },
      {
        "name": "Aegis Charge",
        "level": 50,
        "element": "Dragon",
        "cooltime": "50",
        "power": "170",
        "description": "Silvegis's exclusive skill. Deploys a shield in front that reduces all types of attacks, then charges forward, crushing the enemy."
      }
    ],
    "isVariant": false
  },
  {
    "id": "131",
    "key": "Smokie",
    "name": "Smokie",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 85,
      "attack": {
        "melee": 100,
        "ranged": 90
      },
      "defense": 85,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 170
    },
    "suitability": {
      "gathering": 2
    },
    "breedingPower": 1245,
    "description": "The black flames are only warm to the touch, \r\nbut anything that remains in contact with them slowly melts from the inside. \r\nHold some cheese above them, and it becomes a true delicacy.",
    "image": "/images/pals/Smokie.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Bog Blast",
        "level": 1,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Umbral Surge",
        "level": 7,
        "element": "Dark",
        "cooltime": "2",
        "power": "40",
        "description": "Fires high-speed dark orbs in a fan shape, spreading as they travel."
      },
      {
        "name": "Dark Cannon",
        "level": 15,
        "element": "Dark",
        "cooltime": "2",
        "power": "50",
        "description": "Hurls an energy ball imbued with dark energy at an enemy."
      },
      {
        "name": "Shadow Burst",
        "level": 22,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Nightmare Ball",
        "level": 30,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Comet Strike",
        "level": 40,
        "element": "Dragon",
        "cooltime": "35",
        "power": "110",
        "description": "Drops a meteorite straight down, generating a shock wave around the impact area."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "132",
    "key": "Celesdir",
    "name": "Celesdir",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 120,
      "attack": {
        "melee": 100,
        "ranged": 110
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 410
    },
    "suitability": {
      "gathering": 1,
      "lumbering": 4
    },
    "breedingPower": 815,
    "description": "Ancient texts refer to it as the |Beast of Salvation.| \r\nThe light emitted by Celesdir purifies everything,\r\nliterally causing things to vanish from existence without leaving a trace.",
    "image": "/images/pals/Celesdir.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Power Shot",
        "level": 1,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Power Bomb",
        "level": 7,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Air Blade",
        "level": 15,
        "element": "Neutral",
        "cooltime": "20",
        "power": "85",
        "description": "Sends out sharp blades of air in a fan shape."
      },
      {
        "name": "Comet Strike",
        "level": 22,
        "element": "Dragon",
        "cooltime": "35",
        "power": "110",
        "description": "Drops a meteorite straight down, generating a shock wave around the impact area."
      },
      {
        "name": "Holy Burst",
        "level": 30,
        "element": "Neutral",
        "cooltime": "30",
        "power": "120",
        "description": "Creates a wide explosion of light at the enemy's location and around it."
      },
      {
        "name": "Pal Blast",
        "level": 40,
        "element": "Neutral",
        "cooltime": "55",
        "power": "150",
        "description": "Charges destructive energy before firing a high-powered beam forward across a wide area."
      },
      {
        "name": "Holy Nova",
        "level": 50,
        "element": "Neutral",
        "cooltime": "45",
        "power": "200",
        "description": "Celesdir's exclusive skill. After igniting a burst of holy light across a vast area ahead, it strides forward, radiating holy light around itself."
      }
    ],
    "isVariant": false
  },
  {
    "id": "133",
    "key": "Omascul",
    "name": "Omascul",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 95,
      "attack": {
        "melee": 100,
        "ranged": 105
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 160
    },
    "suitability": {
      "gathering": 1
    },
    "breedingPower": 630,
    "description": "The mask it wears is not its face, they say.\r\nIt seems in front, but it's not there, no way.\r\nFrom shadows deep, it watches night and day.\r\nGlance away, and closer it will stray.",
    "image": "/images/pals/Omascul.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Dark Ball",
        "level": 1,
        "element": "Dark",
        "cooltime": "4",
        "power": "40",
        "description": "Unleashes a sphere of darkness that slowly tracks down an enemy."
      },
      {
        "name": "Umbral Surge",
        "level": 7,
        "element": "Dark",
        "cooltime": "2",
        "power": "40",
        "description": "Fires high-speed dark orbs in a fan shape, spreading as they travel."
      },
      {
        "name": "Dark Cannon",
        "level": 15,
        "element": "Dark",
        "cooltime": "2",
        "power": "50",
        "description": "Hurls an energy ball imbued with dark energy at an enemy."
      },
      {
        "name": "Shadow Burst",
        "level": 22,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Nightmare Ball",
        "level": 30,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Soul Drain",
        "level": 40,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Omasculs exclusive skill. Suddenly appears near the enemy, firmly restraining them with its arms, and absorbs the HP of the restrained enemy."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "134",
    "key": "Splatterina",
    "name": "Splatterina",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 95,
      "attack": {
        "melee": 100,
        "ranged": 115
      },
      "defense": 105,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "handiwork": 4,
      "lumbering": 1,
      "medicine_production": 3,
      "transporting": 2
    },
    "breedingPower": 725,
    "description": "It has an uncontrollable urge to tear its prey apart.\r\nEach individual has their own meticulous order for dismemberment.\r\nIf caught by Splatterina , pray that your head is taken first.",
    "image": "/images/pals/Splatterina.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Dark Ball",
        "level": 1,
        "element": "Dark",
        "cooltime": "4",
        "power": "40",
        "description": "Unleashes a sphere of darkness that slowly tracks down an enemy."
      },
      {
        "name": "Umbral Surge",
        "level": 7,
        "element": "Dark",
        "cooltime": "2",
        "power": "40",
        "description": "Fires high-speed dark orbs in a fan shape, spreading as they travel."
      },
      {
        "name": "Dark Cannon",
        "level": 15,
        "element": "Dark",
        "cooltime": "2",
        "power": "50",
        "description": "Hurls an energy ball imbued with dark energy at an enemy."
      },
      {
        "name": "Shadow Burst",
        "level": 22,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Nightmare Ball",
        "level": 30,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Grudge Barrage",
        "level": 40,
        "element": "Dark",
        "cooltime": "31",
        "power": "130",
        "description": "Splatterina's exclusive skill. Teleports instantly and launches a slash. It then teleports above the enemy, drives its weapon into them, and unleashes a wave of dark energy."
      },
      {
        "name": "Dark Whisp",
        "level": 50,
        "element": "Dark",
        "cooltime": "45",
        "power": "160",
        "description": "Fires a menacing ball of dark energy that pursues enemies."
      }
    ],
    "isVariant": false
  },
  {
    "id": "135",
    "key": "Tarantriss",
    "name": "Tarantriss",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 110,
      "attack": {
        "melee": 100,
        "ranged": 100
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 315
    },
    "suitability": {
      "handiwork": 2,
      "gathering": 2,
      "medicine_production": 2,
      "transporting": 2
    },
    "breedingPower": 825,
    "description": "Extremely sticky and clingy.\r\nThe more it's resisted, the more tenacious it becomes.\r\nSuch is its |personality.|",
    "image": "/images/pals/Tarantriss.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Poison Fog",
        "level": 1,
        "element": "Dark",
        "cooltime": "30",
        "power": "0",
        "description": "Generates a fog of poison in front, causing the opponent to become poisoned."
      },
      {
        "name": "Poison Blast",
        "level": 7,
        "element": "Dark",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls poison sludge at an enemy."
      },
      {
        "name": "Umbral Surge",
        "level": 15,
        "element": "Dark",
        "cooltime": "2",
        "power": "40",
        "description": "Fires high-speed dark orbs in a fan shape, spreading as they travel."
      },
      {
        "name": "Dark Arrow",
        "level": 22,
        "element": "Dark",
        "cooltime": "10",
        "power": "65",
        "description": "Fires off dark energy that homes in on an enemy."
      },
      {
        "name": "Webstrike Impact",
        "level": 30,
        "element": "Dark",
        "cooltime": "14",
        "power": "85",
        "description": "Tarantriss's exclusive skill. Spits out a ball of thread, entangling the target it hits. Then, rushes at full speed to the trapped target and delivers three slashing strikes to finish it off."
      },
      {
        "name": "Poison Shower",
        "level": 40,
        "element": "Dark",
        "cooltime": "22",
        "power": "90",
        "description": "Focuses energy into the body and scatters poison orbs in all directions."
      },
      {
        "name": "Apocalypse",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "110",
        "description": "Generates several dark vortexes around the enemy."
      }
    ],
    "isVariant": false
  },
  {
    "id": "136",
    "key": "Azurmane",
    "name": "Azurmane",
    "types": [
      "Electric"
    ],
    "stats": {
      "hp": 130,
      "attack": {
        "melee": 100,
        "ranged": 120
      },
      "defense": 110,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 410
    },
    "suitability": {
      "generating_electricity": 4,
      "gathering": 1
    },
    "breedingPower": 400,
    "description": "Like Univolt , it was once believed to be connected to the Thunder God. \r\nAs faith in Univolt waned, Azurmane was deemed the God's true envoy.\r\nEven so, time reduced both to the same lowly status of ordinary workhorses.",
    "image": "/images/pals/Azurmane.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Spark Blast",
        "level": 1,
        "element": "Electric",
        "cooltime": "2",
        "power": "30",
        "description": "Releases lightning orbs in a fan shape, spreading as they travel."
      },
      {
        "name": "Shockwave",
        "level": 7,
        "element": "Electric",
        "cooltime": "4",
        "power": "40",
        "description": "Quickly discharges electricity, shocking those around it."
      },
      {
        "name": "Lightning Streak",
        "level": 15,
        "element": "Electric",
        "cooltime": "16",
        "power": "75",
        "description": "Generates a lightning bolt that moves forward in a line."
      },
      {
        "name": "TriSpark",
        "level": 22,
        "element": "Electric",
        "cooltime": "35",
        "power": "110",
        "description": "A high-speed lightning ball that flies in a straight line. Simultaneously fires slow lightning balls that track the enemy."
      },
      {
        "name": "All Range Thunder",
        "level": 30,
        "element": "Electric",
        "cooltime": "40",
        "power": "125",
        "description": "Generates lightning strikes that travel in a straight line in all directions."
      },
      {
        "name": "Thunder Rail",
        "level": 40,
        "element": "Electric",
        "cooltime": "60",
        "power": "200",
        "description": "Charge the power of lightning to the limit and fires multiple simultaneous electric shocks at the enemy."
      },
      {
        "name": "Bolt Blink",
        "level": 50,
        "element": "Electric",
        "cooltime": "45",
        "power": "200",
        "description": "Azurmane's exclusive skill. Moves with the speed of lightning, engulfing everything in its path."
      }
    ],
    "isVariant": false
  },
  {
    "id": "137",
    "key": "Bastigor",
    "name": "Bastigor",
    "types": [
      "Ice"
    ],
    "stats": {
      "hp": 140,
      "attack": {
        "melee": 100,
        "ranged": 130
      },
      "defense": 120,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 485
    },
    "suitability": {
      "lumbering": 3,
      "mining": 3,
      "cooling": 4
    },
    "breedingPower": 170,
    "description": "The sight of anything round gives it an uncontrollable urge to punch it.\r\nFor Bastigor the toughest challenge, after simply living,\r\nis making a snowman.",
    "image": "/images/pals/Bastigor.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Stone Cannon",
        "level": 1,
        "element": "Ground",
        "cooltime": "15",
        "power": "70",
        "description": "Digs up a boulder and hurls it at an enemy."
      },
      {
        "name": "Iceberg",
        "level": 7,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Crystal Breath",
        "level": 15,
        "element": "Ice",
        "cooltime": "22",
        "power": "90",
        "description": "Enshrouds an enemy in a frigid blast of air, dealing continuous damage."
      },
      {
        "name": "Frost Talon",
        "level": 22,
        "element": "Ice",
        "cooltime": "17",
        "power": "95",
        "description": "Bastigor's exclusive skill. Stomps the ground, creating a fissure of ice ahead. Then, rapidly closes the distance and slashes with the right hand."
      },
      {
        "name": "Rockburst",
        "level": 30,
        "element": "Ground",
        "cooltime": "35",
        "power": "130",
        "description": "Causes the ground to shake before hurling a massive stone mass at its surroundings."
      },
      {
        "name": "Stone Beat",
        "level": 40,
        "element": "Ground",
        "cooltime": "60",
        "power": "170",
        "description": "Shakes the ground and lifts a massive boulder into the air."
      },
      {
        "name": "Diamond Rain",
        "level": 50,
        "element": "Ice",
        "cooltime": "60",
        "power": "160",
        "description": "Creates numerous lumps of ice that are consecutively dropped on a foe's head."
      },
      {
        "name": "Glacial Impact",
        "level": 55,
        "element": "Ice",
        "cooltime": "52",
        "power": "190",
        "description": "Bastigor's exclusive skill. Let out a mighty roar and leap into the air. Then, embed both arms into the ground to create a massive ice crack. Continue to channel power into the ground, ultimately causing a large explosion of ice energy"
      }
    ],
    "isVariant": false
  },
  {
    "id": "138",
    "key": "Prunelia",
    "name": "Prunelia",
    "types": [
      "Grass",
      "Dark"
    ],
    "stats": {
      "hp": 105,
      "attack": {
        "melee": 100,
        "ranged": 95
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 225
    },
    "suitability": {
      "planting": 3,
      "handiwork": 1,
      "gathering": 2,
      "medicine_production": 3,
      "transporting": 1
    },
    "breedingPower": 755,
    "description": "Intelligent and graceful in its demeanor, \r\nit was frequently employed as an attendant by the island's nobles.\r\nHowever, when encountered at night, its face looked so eerie that it quickly fell out of favor.",
    "image": "/images/pals/Prunelia.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Poison Fog",
        "level": 1,
        "element": "Dark",
        "cooltime": "30",
        "power": "0",
        "description": "Generates a fog of poison in front, causing the opponent to become poisoned."
      },
      {
        "name": "Wind Cutter",
        "level": 7,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Poison Blast",
        "level": 15,
        "element": "Dark",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls poison sludge at an enemy."
      },
      {
        "name": "Seed Mine",
        "level": 22,
        "element": "Grass",
        "cooltime": "13",
        "power": "65",
        "description": "Launches a deadly seed. If it hits an enemy, the seed explodes."
      },
      {
        "name": "Poison Shower",
        "level": 30,
        "element": "Dark",
        "cooltime": "22",
        "power": "90",
        "description": "Focuses energy into the body and scatters poison orbs in all directions."
      },
      {
        "name": "Spine Vine",
        "level": 40,
        "element": "Grass",
        "cooltime": "25",
        "power": "95",
        "description": "Generates spiny thorns that chase an enemy along the ground, piercing them from below."
      },
      {
        "name": "Solar Blast",
        "level": 50,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "139",
    "key": "Nyafia",
    "name": "Nyafia",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 110,
      "attack": {
        "melee": 100,
        "ranged": 100
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 280
    },
    "suitability": {
      "handiwork": 3,
      "gathering": 2,
      "lumbering": 2,
      "transporting": 2
    },
    "breedingPower": 645,
    "description": "Strongly dislikes anyone catching a glimpse of its concealed eye. \r\nIf you insist on trying, it'll burst into tears\r\nand ignore you for two weeks.",
    "image": "/images/pals/Nyafia.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Poison Fog",
        "level": 1,
        "element": "Dark",
        "cooltime": "30",
        "power": "0",
        "description": "Generates a fog of poison in front, causing the opponent to become poisoned."
      },
      {
        "name": "Poison Blast",
        "level": 7,
        "element": "Dark",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls poison sludge at an enemy."
      },
      {
        "name": "Stone Blast",
        "level": 15,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Shadow Burst",
        "level": 22,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Poison Shower",
        "level": 30,
        "element": "Dark",
        "cooltime": "22",
        "power": "90",
        "description": "Focuses energy into the body and scatters poison orbs in all directions."
      },
      {
        "name": "Nightmare Ball",
        "level": 40,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Dark Laser",
        "level": 50,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      }
    ],
    "isVariant": false
  },
  {
    "id": "140",
    "key": "Gildane",
    "name": "Gildane",
    "types": [
      "Ground"
    ],
    "stats": {
      "hp": 120,
      "attack": {
        "melee": 100,
        "ranged": 110
      },
      "defense": 110,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 475
    },
    "suitability": {
      "gathering": 2
    },
    "breedingPower": 505,
    "description": "During the golden age of alchemy on the island, \r\nits ever-glowing golden fur was highly prized as a catalyst for transmuting gold.\r\nIn time, a remarkable revelation was made: \r\nthe same golden hue could be achieved simply by processing its mane.",
    "image": "/images/pals/Gildane.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Power Shot",
        "level": 1,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Bog Blast",
        "level": 7,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Stone Blast",
        "level": 15,
        "element": "Ground",
        "cooltime": "10",
        "power": "55",
        "description": "Fires a barrage of stones forward."
      },
      {
        "name": "Power Bomb",
        "level": 22,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Rockburst",
        "level": 30,
        "element": "Ground",
        "cooltime": "35",
        "power": "130",
        "description": "Causes the ground to shake before hurling a massive stone mass at its surroundings."
      },
      {
        "name": "Crash Dash",
        "level": 40,
        "element": "Ground",
        "cooltime": "28",
        "power": "120",
        "description": "Gildane's exclusive skill. Charges forward, hurling rocks to the left and right with great force."
      },
      {
        "name": "Stone Beat",
        "level": 50,
        "element": "Ground",
        "cooltime": "60",
        "power": "170",
        "description": "Shakes the ground and lifts a massive boulder into the air."
      }
    ],
    "isVariant": false
  },
  {
    "id": "141",
    "key": "Herbil",
    "name": "Herbil",
    "types": [
      "Grass",
      "Neutral"
    ],
    "stats": {
      "hp": 80,
      "attack": {
        "melee": 100,
        "ranged": 75
      },
      "defense": 75,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 150
    },
    "suitability": {
      "planting": 2,
      "gathering": 1,
      "transporting": 1
    },
    "breedingPower": 1445,
    "description": "When in doubt, punch it till it works—that’s Herbil 's approach to fixing things.\r\nWith strength perfectly tuned for humans, sometimes just one punch is enough to restart a stopped heart.",
    "image": "/images/pals/Herbil.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Wind Cutter",
        "level": 1,
        "element": "Grass",
        "cooltime": "2",
        "power": "30",
        "description": "Fires a high speed blade of wind that flies straight at an enemy."
      },
      {
        "name": "Seed Machine Gun",
        "level": 7,
        "element": "Grass",
        "cooltime": "9",
        "power": "50",
        "description": "Fires a volley of hard seeds at enemies in front of it."
      },
      {
        "name": "Grass Tornado",
        "level": 15,
        "element": "Grass",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Air Blade",
        "level": 22,
        "element": "Neutral",
        "cooltime": "20",
        "power": "85",
        "description": "Sends out sharp blades of air in a fan shape."
      },
      {
        "name": "Konoha Flip",
        "level": 30,
        "element": "Grass",
        "cooltime": "20",
        "power": "105",
        "description": "Herbil's exclusive skill. After a brief moment of preparation, charges at the enemy at high speed, finishing with a flip."
      },
      {
        "name": "Reflect Leaf",
        "level": 40,
        "element": "Grass",
        "cooltime": "42",
        "power": "130",
        "description": "Launches a blade of wind that rebounds off enemies or trees, striking repeatedly. Can ricochet up to four times."
      },
      {
        "name": "Crosswind",
        "level": 50,
        "element": "Grass",
        "cooltime": "45",
        "power": "140",
        "description": "Conjures blades of wind in front of the enemy, converging to deliver a cutting cross attack."
      }
    ],
    "isVariant": false
  },
  {
    "id": "142",
    "key": "Icelyn",
    "name": "Icelyn",
    "types": [
      "Ice"
    ],
    "stats": {
      "hp": 95,
      "attack": {
        "melee": 100,
        "ranged": 115
      },
      "defense": 105,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 160
    },
    "suitability": {
      "handiwork": 2,
      "medicine_production": 2,
      "cooling": 3,
      "transporting": 1
    },
    "breedingPower": 605,
    "description": "Though its body melts in the heat, it just can’t resist sunbathing.\r\nThough its body melts in the warmth, it likes hot springs too much.\r\nIf it's going to melt anyway, it hopes it’ll be in a steaming outdoor bath \r\nunder a clear blue sky.",
    "image": "/images/pals/Icelyn.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ice Missile",
        "level": 1,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Icicle Cutter",
        "level": 7,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Iceberg",
        "level": 15,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Crystal Breath",
        "level": 22,
        "element": "Ice",
        "cooltime": "22",
        "power": "90",
        "description": "Enshrouds an enemy in a frigid blast of air, dealing continuous damage."
      },
      {
        "name": "Freeze Wall",
        "level": 30,
        "element": "Ice",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a wall of ice that rises from the ground. The ice wall remains standing for a while, and breaks after taking enough damage."
      },
      {
        "name": "Blizzard Spike",
        "level": 40,
        "element": "Ice",
        "cooltime": "45",
        "power": "130",
        "description": "Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact."
      },
      {
        "name": "Diamond Rain",
        "level": 50,
        "element": "Ice",
        "cooltime": "60",
        "power": "160",
        "description": "Creates numerous lumps of ice that are consecutively dropped on a foe's head."
      }
    ],
    "isVariant": false
  },
  {
    "id": "143",
    "key": "Frostplume",
    "name": "Frostplume",
    "types": [
      "Ice"
    ],
    "stats": {
      "hp": 110,
      "attack": {
        "melee": 100,
        "ranged": 100
      },
      "defense": 100,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 180
    },
    "suitability": {
      "gathering": 1,
      "cooling": 2
    },
    "breedingPower": 655,
    "description": "So precise is its sense of time that \r\nit awakens at the exact same hour every morning.\r\nAccording to Palpagos lore, a day was divided into 24 parts because\r\nwhen Frostplume spreads its tail feathers wide,\r\nit reveals a pattern with 24 distinct spaces.",
    "image": "/images/pals/Frostplume.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ice Missile",
        "level": 1,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Icicle Cutter",
        "level": 7,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Iceberg",
        "level": 15,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Crystal Breath",
        "level": 22,
        "element": "Ice",
        "cooltime": "22",
        "power": "90",
        "description": "Enshrouds an enemy in a frigid blast of air, dealing continuous damage."
      },
      {
        "name": "Freeze Wall",
        "level": 30,
        "element": "Ice",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a wall of ice that rises from the ground. The ice wall remains standing for a while, and breaks after taking enough damage."
      },
      {
        "name": "Icicle Bullet",
        "level": 40,
        "element": "Ice",
        "cooltime": "35",
        "power": "110",
        "description": "Generates multiple sharp ice blocks in the sky and fires them at the enemy."
      },
      {
        "name": "Diamond Rain",
        "level": 50,
        "element": "Ice",
        "cooltime": "60",
        "power": "160",
        "description": "Creates numerous lumps of ice that are consecutively dropped on a foe's head."
      }
    ],
    "isVariant": false
  },
  {
    "id": "144",
    "key": "Palumba",
    "name": "Palumba",
    "types": [
      "Grass"
    ],
    "stats": {
      "hp": 105,
      "attack": {
        "melee": 100,
        "ranged": 110
      },
      "defense": 115,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 340
    },
    "suitability": {
      "planting": 2,
      "gathering": 2,
      "mining": 3
    },
    "breedingPower": 455,
    "description": "Disrupts enemies’ rhythm with a signature dance.\r\nIn turf battles, the first to fall in sync with the other’s rhythm loses.\r\nCourtship, boredom, battle—it all comes down to dance!\r\nNow then, what could a dance aimed at a human possibly mean?",
    "image": "/images/pals/Palumba.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Seed Machine Gun",
        "level": 1,
        "element": "Grass",
        "cooltime": "9",
        "power": "50",
        "description": "Fires a volley of hard seeds at enemies in front of it."
      },
      {
        "name": "Seed Mine",
        "level": 7,
        "element": "Grass",
        "cooltime": "13",
        "power": "65",
        "description": "Launches a deadly seed. If it hits an enemy, the seed explodes."
      },
      {
        "name": "Grass Tornado",
        "level": 15,
        "element": "Grass",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Wind Edge",
        "level": 22,
        "element": "Grass",
        "cooltime": "22",
        "power": "90",
        "description": "Launches sharp blades of air that fan out."
      },
      {
        "name": "Dash Kick",
        "level": 30,
        "element": "Grass",
        "cooltime": "28",
        "power": "125",
        "description": "Palumba's exclusive skill. Dashes to build up speed, then launches a devastating airborne kick at its target."
      },
      {
        "name": "Reflect Leaf",
        "level": 40,
        "element": "Grass",
        "cooltime": "42",
        "power": "130",
        "description": "Launches a blade of wind that rebounds off enemies or trees, striking repeatedly. Can ricochet up to four times."
      },
      {
        "name": "Crosswind",
        "level": 50,
        "element": "Grass",
        "cooltime": "45",
        "power": "140",
        "description": "Conjures blades of wind in front of the enemy, converging to deliver a cutting cross attack."
      }
    ],
    "isVariant": false
  },
  {
    "id": "145",
    "key": "Braloha",
    "name": "Braloha",
    "types": [
      "Grass",
      "Ground"
    ],
    "stats": {
      "hp": 130,
      "attack": {
        "melee": 100,
        "ranged": 95
      },
      "defense": 120,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 460
    },
    "suitability": {
      "planting": 4,
      "gathering": 4,
      "mining": 2
    },
    "breedingPower": 335,
    "description": "Its breath carries a miraculous, pollen-like substance \r\nthat pollinates any plant it touches. \r\nFor plant-based Pals, being near it can be a bit… complicated.",
    "image": "/images/pals/Braloha.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Bog Blast",
        "level": 1,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Seed Mine",
        "level": 7,
        "element": "Grass",
        "cooltime": "13",
        "power": "65",
        "description": "Launches a deadly seed. If it hits an enemy, the seed explodes."
      },
      {
        "name": "Grass Tornado",
        "level": 15,
        "element": "Grass",
        "cooltime": "18",
        "power": "80",
        "description": "Generates two tornadoes on either side before launching them at an enemy."
      },
      {
        "name": "Spine Vine",
        "level": 22,
        "element": "Grass",
        "cooltime": "25",
        "power": "95",
        "description": "Generates spiny thorns that chase an enemy along the ground, piercing them from below."
      },
      {
        "name": "Deep Breath",
        "level": 30,
        "element": "Grass",
        "cooltime": "30",
        "power": "135",
        "description": "Braloha's exclusive skill. From the base of its long neck to the tip of its snout, it gradually spreads the breath of grass element."
      },
      {
        "name": "Solar Blast",
        "level": 40,
        "element": "Grass",
        "cooltime": "55",
        "power": "150",
        "description": "Charges solar energy before blasting enemies with a powerful beam."
      },
      {
        "name": "Stone Beat",
        "level": 50,
        "element": "Ground",
        "cooltime": "60",
        "power": "170",
        "description": "Shakes the ground and lifts a massive boulder into the air."
      }
    ],
    "isVariant": false
  },
  {
    "id": "146",
    "key": "Munchill",
    "name": "Munchill",
    "types": [
      "Ice",
      "Water"
    ],
    "stats": {
      "hp": 75,
      "attack": {
        "melee": 100,
        "ranged": 80
      },
      "defense": 85,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 310
    },
    "suitability": {
      "watering": 1,
      "cooling": 2,
      "transporting": 1
    },
    "breedingPower": 1335,
    "description": "The inside of its mouth stays pleasantly cold, \r\nmaking it a natural fridge when closed. \r\nIts saliva contains enzymes that prevent food from rotting. \r\nThus, it can serve as a food locker for humans—\r\nwhether it is sanitary or not is another matter entirely.",
    "image": "/images/pals/Munchill.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Aqua Gun",
        "level": 1,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Icicle Cutter",
        "level": 7,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Crystal Breath",
        "level": 15,
        "element": "Ice",
        "cooltime": "22",
        "power": "90",
        "description": "Enshrouds an enemy in a frigid blast of air, dealing continuous damage."
      },
      {
        "name": "Chaotic Spray",
        "level": 22,
        "element": "Ice",
        "cooltime": "17",
        "power": "95",
        "description": "Munchill's exclusive skill. Coughs up three cold grenades kept undigested inside its body and lobs them at enemies. May occasionally spit out something more dangerous...?"
      },
      {
        "name": "Freeze Wall",
        "level": 30,
        "element": "Ice",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a wall of ice that rises from the ground. The ice wall remains standing for a while, and breaks after taking enough damage."
      },
      {
        "name": "Torrential Blast",
        "level": 40,
        "element": "Water",
        "cooltime": "35",
        "power": "110",
        "description": "Fires a high-pressure stream of water forward. After a short delay, the stream branches off to the left and right."
      },
      {
        "name": "Diamond Rain",
        "level": 50,
        "element": "Ice",
        "cooltime": "60",
        "power": "160",
        "description": "Creates numerous lumps of ice that are consecutively dropped on a foe's head."
      }
    ],
    "isVariant": false
  },
  {
    "id": "147",
    "key": "Polapup",
    "name": "Polapup",
    "types": [
      "Ice",
      "Water"
    ],
    "stats": {
      "hp": 95,
      "attack": {
        "melee": 100,
        "ranged": 105
      },
      "defense": 105,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 160
    },
    "suitability": {
      "watering": 2,
      "cooling": 3
    },
    "breedingPower": 745,
    "description": "Among Polapup s, the fastest slider on the snow earns the highest respect.\r\nSometimes, a too-forceful leap sends one tumbling from the sky—\r\na common sight during territorial season.\r\nForecast: clear skies with a chance of flying Polapup s.",
    "image": "/images/pals/Polapup.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ice Missile",
        "level": 1,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Aqua Gun",
        "level": 7,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Iceberg",
        "level": 15,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Splash",
        "level": 22,
        "element": "Water",
        "cooltime": "22",
        "power": "90",
        "description": "Generates a column of water that travels in a straight line."
      },
      {
        "name": "Freeze Wall",
        "level": 30,
        "element": "Ice",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a wall of ice that rises from the ground. The ice wall remains standing for a while, and breaks after taking enough damage."
      },
      {
        "name": "Icicle Line",
        "level": 40,
        "element": "Ice",
        "cooltime": "40",
        "power": "120",
        "description": "Generates pillars of ice that move in a straight line in three directions."
      },
      {
        "name": "Aqua Surge",
        "level": 50,
        "element": "Water",
        "cooltime": "56",
        "power": "160",
        "description": "Generates waves that surge around the enemy from all sides. They converge and explode at the center, erupting into a column of water."
      }
    ],
    "isVariant": false
  },
  {
    "id": "148",
    "key": "Turtacle",
    "name": "Turtacle",
    "types": [
      "Water"
    ],
    "stats": {
      "hp": 75,
      "attack": {
        "melee": 100,
        "ranged": 75
      },
      "defense": 115,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 275
    },
    "suitability": {
      "watering": 2,
      "mining": 1,
      "transporting": 1
    },
    "breedingPower": 1105,
    "description": "To protect its fragile body, it developed an incredibly tough shell. \r\nUnfortunately, it's utterly defenseless underneath. \r\nEven a little tickle could knock it out cold.",
    "image": "/images/pals/Turtacle.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Hydro Jet",
        "level": 1,
        "element": "Water",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a high speed ball of water at an enemy."
      },
      {
        "name": "Bubble Blast",
        "level": 7,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "Hydro Spin",
        "level": 15,
        "element": "Water",
        "cooltime": "15",
        "power": "95",
        "description": "Turtacle's exclusive skill. Uses jet-powered propulsion to spin rapidly and launch itself at the enemy."
      },
      {
        "name": "Aqua Burst",
        "level": 22,
        "element": "Water",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of water and hurls it at an enemy."
      },
      {
        "name": "Torrential Blast",
        "level": 30,
        "element": "Water",
        "cooltime": "35",
        "power": "110",
        "description": "Fires a high-pressure stream of water forward. After a short delay, the stream branches off to the left and right."
      },
      {
        "name": "Hydro Slicer",
        "level": 40,
        "element": "Water",
        "cooltime": "45",
        "power": "130",
        "description": "Mows down the frontal area with a blast of compressed water. The area struck by the blast erupts with water after a short delay."
      },
      {
        "name": "Hydro Laser",
        "level": 50,
        "element": "Water",
        "cooltime": "55",
        "power": "150",
        "description": "Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it."
      }
    ],
    "isVariant": false
  },
  {
    "id": "148B",
    "key": "Turtacle_Terra",
    "name": "Turtacle Terra",
    "types": [
      "Water",
      "Ground"
    ],
    "stats": {
      "hp": 85,
      "attack": {
        "melee": 100,
        "ranged": 85
      },
      "defense": 125,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 275
    },
    "suitability": {
      "watering": 2,
      "mining": 1,
      "transporting": 1
    },
    "breedingPower": 1065,
    "description": "To protect its fragile body, it developed an incredibly tough shell. \r\nWith most of its senses concentrated in its limbs and shell, \r\nit can’t even tell if someone quietly touches its core.",
    "image": "/images/pals/Turtacle_Terra.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Bog Blast",
        "level": 1,
        "element": "Ground",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls sticky mud at an enemy."
      },
      {
        "name": "Bubble Blast",
        "level": 7,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "Hydro Spin",
        "level": 15,
        "element": "Water",
        "cooltime": "15",
        "power": "95",
        "description": "Turtacle's exclusive skill. Uses jet-powered propulsion to spin rapidly and launch itself at the enemy."
      },
      {
        "name": "Aqua Burst",
        "level": 22,
        "element": "Water",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of water and hurls it at an enemy."
      },
      {
        "name": "Rockburst",
        "level": 30,
        "element": "Ground",
        "cooltime": "35",
        "power": "130",
        "description": "Causes the ground to shake before hurling a massive stone mass at its surroundings."
      },
      {
        "name": "Rock Lance",
        "level": 40,
        "element": "Ground",
        "cooltime": "55",
        "power": "150",
        "description": "Generates a sharp rock spear under an enemy."
      },
      {
        "name": "Stone Beat",
        "level": 50,
        "element": "Ground",
        "cooltime": "60",
        "power": "170",
        "description": "Shakes the ground and lifts a massive boulder into the air."
      }
    ],
    "isVariant": true
  },
  {
    "id": "149",
    "key": "Jellroy",
    "name": "Jellroy",
    "types": [
      "Water",
      "Dark"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 100,
        "ranged": 75
      },
      "defense": 75,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 145
    },
    "suitability": {
      "watering": 2,
      "handiwork": 1,
      "medicine_production": 1,
      "transporting": 1
    },
    "breedingPower": 1395,
    "description": "A Pal that closely resembles Jelliette .\r\nIt sometimes appears as a substitute when Jelliette is unavailable.\r\nIts acting is so flawless that no one ever notices the switch.",
    "image": "/images/pals/Jellroy.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Poison Blast",
        "level": 1,
        "element": "Dark",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls poison sludge at an enemy."
      },
      {
        "name": "Umbral Surge",
        "level": 7,
        "element": "Dark",
        "cooltime": "2",
        "power": "40",
        "description": "Fires high-speed dark orbs in a fan shape, spreading as they travel."
      },
      {
        "name": "Bubble Blast",
        "level": 15,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "Spirit Flame",
        "level": 22,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Poison Shower",
        "level": 30,
        "element": "Dark",
        "cooltime": "22",
        "power": "90",
        "description": "Focuses energy into the body and scatters poison orbs in all directions."
      },
      {
        "name": "Hydro Slicer",
        "level": 40,
        "element": "Water",
        "cooltime": "45",
        "power": "130",
        "description": "Mows down the frontal area with a blast of compressed water. The area struck by the blast erupts with water after a short delay."
      },
      {
        "name": "Dark Whisp",
        "level": 50,
        "element": "Dark",
        "cooltime": "45",
        "power": "160",
        "description": "Fires a menacing ball of dark energy that pursues enemies."
      }
    ],
    "isVariant": false
  },
  {
    "id": "150",
    "key": "Jelliette",
    "name": "Jelliette",
    "types": [
      "Water"
    ],
    "stats": {
      "hp": 75,
      "attack": {
        "melee": 100,
        "ranged": 90
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 145
    },
    "suitability": {
      "watering": 2,
      "handiwork": 1,
      "transporting": 1
    },
    "breedingPower": 1385,
    "description": "A Pal that closely resembles Jellroy .\r\nIt’s very social, so when plans overlap, \r\nit asks its good friend Jellroy to go in its place.\r\nAs thanks, one date.",
    "image": "/images/pals/Jelliette.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Hydro Jet",
        "level": 1,
        "element": "Water",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a high speed ball of water at an enemy."
      },
      {
        "name": "Aqua Gun",
        "level": 7,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Bubble Blast",
        "level": 15,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "Aqua Burst",
        "level": 22,
        "element": "Water",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of water and hurls it at an enemy."
      },
      {
        "name": "Curtain Splash",
        "level": 30,
        "element": "Water",
        "cooltime": "40",
        "power": "120",
        "description": "Continously creates walls made from water columns at the enemy's location."
      },
      {
        "name": "Hydro Slicer",
        "level": 40,
        "element": "Water",
        "cooltime": "45",
        "power": "130",
        "description": "Mows down the frontal area with a blast of compressed water. The area struck by the blast erupts with water after a short delay."
      },
      {
        "name": "Aqua Surge",
        "level": 50,
        "element": "Water",
        "cooltime": "56",
        "power": "160",
        "description": "Generates waves that surge around the enemy from all sides. They converge and explode at the center, erupting into a column of water."
      }
    ],
    "isVariant": false
  },
  {
    "id": "151",
    "key": "Gloopie",
    "name": "Gloopie",
    "types": [
      "Water",
      "Dark"
    ],
    "stats": {
      "hp": 70,
      "attack": {
        "melee": 100,
        "ranged": 85
      },
      "defense": 70,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 280
    },
    "suitability": {
      "watering": 2,
      "handiwork": 2,
      "transporting": 2
    },
    "breedingPower": 1195,
    "description": "Be sure to check your plans for the next day before falling asleep with this Pal.\r\nIts suction cups leave marks that look suspiciously like hickeys.\r\nOne sleepy cuddle session could lead to some \r\ntruly awkward misunderstandings.",
    "image": "/images/pals/Gloopie.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Hydro Jet",
        "level": 1,
        "element": "Water",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a high speed ball of water at an enemy."
      },
      {
        "name": "Shadow Burst",
        "level": 7,
        "element": "Dark",
        "cooltime": "10",
        "power": "55",
        "description": "Quickly discharges dark energy, damaging those around it."
      },
      {
        "name": "Smoke Jet",
        "level": 15,
        "element": "Water",
        "cooltime": "12",
        "power": "85",
        "description": "Gloopie's exclusive skill. Releases smoke to conceal itself, then launches a surprise headbutt from the shadows."
      },
      {
        "name": "Splash",
        "level": 22,
        "element": "Water",
        "cooltime": "22",
        "power": "90",
        "description": "Generates a column of water that travels in a straight line."
      },
      {
        "name": "Nightmare Ball",
        "level": 30,
        "element": "Dark",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a giant ball of darkness and hurls it at an enemy."
      },
      {
        "name": "Torrential Blast",
        "level": 40,
        "element": "Water",
        "cooltime": "35",
        "power": "110",
        "description": "Fires a high-pressure stream of water forward. After a short delay, the stream branches off to the left and right."
      },
      {
        "name": "Hydro Slicer",
        "level": 50,
        "element": "Water",
        "cooltime": "45",
        "power": "130",
        "description": "Mows down the frontal area with a blast of compressed water. The area struck by the blast erupts with water after a short delay."
      }
    ],
    "isVariant": false
  },
  {
    "id": "152",
    "key": "Finsider",
    "name": "Finsider",
    "types": [
      "Water"
    ],
    "stats": {
      "hp": 75,
      "attack": {
        "melee": 100,
        "ranged": 85
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 210
    },
    "suitability": {
      "watering": 2,
      "transporting": 1
    },
    "breedingPower": 1295,
    "description": "It looks like something is peeking out from inside a costume, \r\nbut even if you reach inside, there’s nothing there. \r\nIn fact, you can keep reaching deeper and deeper. \r\nPerhaps the universe itself lies within.",
    "image": "/images/pals/Finsider.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Aqua Gun",
        "level": 1,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Bubble Blast",
        "level": 7,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "Power Bomb",
        "level": 15,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Torrential Blast",
        "level": 22,
        "element": "Water",
        "cooltime": "35",
        "power": "110",
        "description": "Fires a high-pressure stream of water forward. After a short delay, the stream branches off to the left and right."
      },
      {
        "name": "Trigger Happy",
        "level": 30,
        "element": "Water",
        "cooltime": "24",
        "power": "115",
        "description": "Finsider's exclusive skill. Draws twin water blasters from its mouth, firing six shots alternately left and right, then finishes by combining both blasters to unleash one powerful shot."
      },
      {
        "name": "Curtain Splash",
        "level": 40,
        "element": "Water",
        "cooltime": "40",
        "power": "120",
        "description": "Continously creates walls made from water columns at the enemy's location."
      },
      {
        "name": "Hydro Laser",
        "level": 50,
        "element": "Water",
        "cooltime": "55",
        "power": "150",
        "description": "Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it."
      }
    ],
    "isVariant": false
  },
  {
    "id": "152B",
    "key": "Finsider_Ignis",
    "name": "Finsider Ignis",
    "types": [
      "Water",
      "Fire"
    ],
    "stats": {
      "hp": 75,
      "attack": {
        "melee": 100,
        "ranged": 90
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 210
    },
    "suitability": {
      "kindling": 2,
      "watering": 2,
      "transporting": 1
    },
    "breedingPower": 1255,
    "description": "Even if you reach into its mouth, there’s nothing inside—it just keeps going.\r\nThinking it might be an interdimensional space, one researcher \r\ntried climbing in like a sleeping bag.\r\nBut when the gag reflex kicked in, they realized... \r\nit’s definitely part of the creature’s body.",
    "image": "/images/pals/Finsider_Ignis.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ignis Blast",
        "level": 1,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Spirit Fire",
        "level": 7,
        "element": "Fire",
        "cooltime": "7",
        "power": "45",
        "description": "Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward."
      },
      {
        "name": "Ignis Breath",
        "level": 15,
        "element": "Fire",
        "cooltime": "15",
        "power": "70",
        "description": "Shoots flames at an enemy, dealing continuous damage."
      },
      {
        "name": "Splash",
        "level": 22,
        "element": "Water",
        "cooltime": "22",
        "power": "90",
        "description": "Generates a column of water that travels in a straight line."
      },
      {
        "name": "Trigger Happy",
        "level": 30,
        "element": "Water",
        "cooltime": "24",
        "power": "115",
        "description": "Finsider's exclusive skill. Draws twin water blasters from its mouth, firing six shots alternately left and right, then finishes by combining both blasters to unleash one powerful shot."
      },
      {
        "name": "Flame Funnel",
        "level": 40,
        "element": "Fire",
        "cooltime": "40",
        "power": "120",
        "description": "Creates multiple spheres of fiery energy, from which countless fireballs shoot towards the enemy."
      },
      {
        "name": "Fire Ball",
        "level": 50,
        "element": "Fire",
        "cooltime": "55",
        "power": "150",
        "description": "Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact."
      }
    ],
    "isVariant": true
  },
  {
    "id": "153",
    "key": "Ghangler",
    "name": "Ghangler",
    "types": [
      "Dark",
      "Water"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 100,
        "ranged": 125
      },
      "defense": 105,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 270
    },
    "suitability": {
      "watering": 4,
      "transporting": 2
    },
    "breedingPower": 525,
    "description": "With its shining lure, it illuminates the darkness.\r\nThe wandering Pals drawn in by the light stand no chance of escape \r\nonce spotted by Ghangler .\r\nNo matter how far, it will keep guiding them until they get home \r\nsafe and sound.",
    "image": "/images/pals/Ghangler.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Aqua Gun",
        "level": 1,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Dark Ball",
        "level": 7,
        "element": "Dark",
        "cooltime": "4",
        "power": "40",
        "description": "Unleashes a sphere of darkness that slowly tracks down an enemy."
      },
      {
        "name": "Dark Arrow",
        "level": 15,
        "element": "Dark",
        "cooltime": "10",
        "power": "65",
        "description": "Fires off dark energy that homes in on an enemy."
      },
      {
        "name": "Spirit Flame",
        "level": 22,
        "element": "Dark",
        "cooltime": "16",
        "power": "75",
        "description": "Fires three balls of malice that relentlessly pursue an enemy."
      },
      {
        "name": "Lantern Sweep",
        "level": 30,
        "element": "Water",
        "cooltime": "15",
        "power": "95",
        "description": "Ghangler's exclusive skill. Lashes forward with the lantern atop its head, sweeping broadly ahead."
      },
      {
        "name": "Dark Laser",
        "level": 40,
        "element": "Dark",
        "cooltime": "55",
        "power": "150",
        "description": "Charges dark energy before blasting enemies with a powerful beam."
      },
      {
        "name": "Aqua Surge",
        "level": 50,
        "element": "Water",
        "cooltime": "56",
        "power": "160",
        "description": "Generates waves that surge around the enemy from all sides. They converge and explode at the center, erupting into a column of water."
      }
    ],
    "isVariant": false
  },
  {
    "id": "153B",
    "key": "Ghangler_Ignis",
    "name": "Ghangler Ignis",
    "types": [
      "Fire",
      "Water"
    ],
    "stats": {
      "hp": 90,
      "attack": {
        "melee": 100,
        "ranged": 130
      },
      "defense": 105,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 270
    },
    "suitability": {
      "kindling": 3,
      "watering": 4,
      "transporting": 2
    },
    "breedingPower": 505,
    "description": "Its blazing lure doubles as a grill for roasting prey.\r\nDrawn in by the delicious aroma, Pals have no hope of escape once Ghangler Ignis sets its sights on them.\r\nIn the end, they’re treated to a hearty meal—until everyone’s full.",
    "image": "/images/pals/Ghangler_Ignis.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ignis Blast",
        "level": 1,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Flare Arrow",
        "level": 7,
        "element": "Fire",
        "cooltime": "10",
        "power": "55",
        "description": "Fires three flaming arrows in succession that home in on an enemy."
      },
      {
        "name": "Bubble Blast",
        "level": 15,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "Flame Wall",
        "level": 22,
        "element": "Fire",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a wall of flames at the enemy's location. The wall of flames will remain for a while, and deal damage to the enemies it touches."
      },
      {
        "name": "Scorching Lantern Sweep",
        "level": 30,
        "element": "Fire",
        "cooltime": "15",
        "power": "95",
        "description": "Ghangler Ignis's exclusive skill. Lashes forward with the flaming lantern atop its head, sweeping broadly ahead."
      },
      {
        "name": "Fire Ball",
        "level": 40,
        "element": "Fire",
        "cooltime": "55",
        "power": "150",
        "description": "Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact."
      },
      {
        "name": "Aqua Surge",
        "level": 50,
        "element": "Water",
        "cooltime": "56",
        "power": "160",
        "description": "Generates waves that surge around the enemy from all sides. They converge and explode at the center, erupting into a column of water."
      }
    ],
    "isVariant": true
  },
  {
    "id": "154",
    "key": "Whalaska",
    "name": "Whalaska",
    "types": [
      "Ice",
      "Water"
    ],
    "stats": {
      "hp": 105,
      "attack": {
        "melee": 100,
        "ranged": 115
      },
      "defense": 110,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 420
    },
    "suitability": {
      "watering": 3,
      "cooling": 4
    },
    "breedingPower": 445,
    "description": "When it sleeps, Pals often mistake it for a drifting piece of ice and rest on it. \r\nAlthough gentle and unwilling to push them away when awake, \r\nit feels quietly stressed by the intrusion on its personal space.",
    "image": "/images/pals/Whalaska.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ice Missile",
        "level": 1,
        "element": "Ice",
        "cooltime": "3",
        "power": "30",
        "description": "Creates ice lances in the air that fly towards enemies."
      },
      {
        "name": "Icicle Cutter",
        "level": 7,
        "element": "Ice",
        "cooltime": "10",
        "power": "55",
        "description": "Creates a crescent blade of ice and hurls it forward."
      },
      {
        "name": "Iceberg",
        "level": 15,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Splash",
        "level": 22,
        "element": "Water",
        "cooltime": "22",
        "power": "90",
        "description": "Generates a column of water that travels in a straight line."
      },
      {
        "name": "Freeze Wall",
        "level": 30,
        "element": "Ice",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a wall of ice that rises from the ground. The ice wall remains standing for a while, and breaks after taking enough damage."
      },
      {
        "name": "High Breach",
        "level": 40,
        "element": "Ice",
        "cooltime": "40",
        "power": "165",
        "description": "Whalaska's exclusive skill. Charges straight ahead and briefly submerges, then bursts high into the air to launch an attack. An ice-element explosion occurs upon emerging."
      },
      {
        "name": "Geyser Gush",
        "level": 50,
        "element": "Water",
        "cooltime": "60",
        "power": "180",
        "description": "Erupts massive pillars of water beneath and around the enemy."
      }
    ],
    "isVariant": false
  },
  {
    "id": "154B",
    "key": "Whalaska_Ignis",
    "name": "Whalaska Ignis",
    "types": [
      "Ice",
      "Fire"
    ],
    "stats": {
      "hp": 105,
      "attack": {
        "melee": 100,
        "ranged": 120
      },
      "defense": 110,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 420
    },
    "suitability": {
      "kindling": 3,
      "cooling": 4
    },
    "breedingPower": 430,
    "description": "Determined never to be mistaken for drift ice again, \r\nit turned bright red through sheer will.\r\nUnfortunately, some Pals can’t see red.\r\nSo despite its efforts, its personal space continues to be invaded.",
    "image": "/images/pals/Whalaska_Ignis.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ignis Blast",
        "level": 1,
        "element": "Fire",
        "cooltime": "2",
        "power": "30",
        "description": "Hurls a ball of fire straight at an enemy."
      },
      {
        "name": "Flare Arrow",
        "level": 7,
        "element": "Fire",
        "cooltime": "10",
        "power": "55",
        "description": "Fires three flaming arrows in succession that home in on an enemy."
      },
      {
        "name": "Iceberg",
        "level": 15,
        "element": "Ice",
        "cooltime": "15",
        "power": "70",
        "description": "Summons a sharp ice lance under an enemy."
      },
      {
        "name": "Flame Wall",
        "level": 22,
        "element": "Fire",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a wall of flames at the enemy's location. The wall of flames will remain for a while, and deal damage to the enemies it touches."
      },
      {
        "name": "Freeze Wall",
        "level": 30,
        "element": "Ice",
        "cooltime": "30",
        "power": "100",
        "description": "Creates a wall of ice that rises from the ground. The ice wall remains standing for a while, and breaks after taking enough damage."
      },
      {
        "name": "Volcanic Rain",
        "level": 40,
        "element": "Fire",
        "cooltime": "45",
        "power": "130",
        "description": "Fires countless volcanic bombs into the sky. After a while, the bombs rain down around their originator."
      },
      {
        "name": "High Breach",
        "level": 50,
        "element": "Ice",
        "cooltime": "40",
        "power": "165",
        "description": "Whalaska's exclusive skill. Charges straight ahead and briefly submerges, then bursts high into the air to launch an attack. An ice-element explosion occurs upon emerging."
      }
    ],
    "isVariant": true
  },
  {
    "id": "155",
    "key": "Neptilius",
    "name": "Neptilius",
    "types": [
      "Water"
    ],
    "stats": {
      "hp": 105,
      "attack": {
        "melee": 100,
        "ranged": 145
      },
      "defense": 125,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 480
    },
    "suitability": {
      "watering": 4
    },
    "breedingPower": 90,
    "description": "After the sealing of the calamity, a champion from Feybreak emerged. \r\nIt stares out to sea, awaiting one it deems worthy. \r\nFor such encounters are no coincidence—they are fate.",
    "image": "/images/pals/Neptilius.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Aqua Gun",
        "level": 1,
        "element": "Water",
        "cooltime": "4",
        "power": "40",
        "description": "Hurls a ball of water straight at an enemy."
      },
      {
        "name": "Bubble Blast",
        "level": 7,
        "element": "Water",
        "cooltime": "13",
        "power": "65",
        "description": "Fires numerous bubbles that slowly pursue an enemy."
      },
      {
        "name": "Splash",
        "level": 15,
        "element": "Water",
        "cooltime": "22",
        "power": "90",
        "description": "Generates a column of water that travels in a straight line."
      },
      {
        "name": "Torrential Blast",
        "level": 22,
        "element": "Water",
        "cooltime": "35",
        "power": "110",
        "description": "Fires a high-pressure stream of water forward. After a short delay, the stream branches off to the left and right."
      },
      {
        "name": "Curtain Splash",
        "level": 30,
        "element": "Water",
        "cooltime": "40",
        "power": "120",
        "description": "Continously creates walls made from water columns at the enemy's location."
      },
      {
        "name": "Aqua Surge",
        "level": 40,
        "element": "Water",
        "cooltime": "56",
        "power": "160",
        "description": "Generates waves that surge around the enemy from all sides. They converge and explode at the center, erupting into a column of water."
      },
      {
        "name": "Geyser Gush",
        "level": 50,
        "element": "Water",
        "cooltime": "60",
        "power": "180",
        "description": "Erupts massive pillars of water beneath and around the enemy."
      },
      {
        "name": "Thalassonic Laser",
        "level": 60,
        "element": "Water",
        "cooltime": "60",
        "power": "200",
        "description": "Neptilius's exclusive skill. Rising slightly, it gathers water at its mouth, then sweeps a high-pressure stream vertically and horizontally three times. Fissures form at the swept locations, erupting with water."
      }
    ],
    "isVariant": false
  },
  {
    "id": "156",
    "key": "Hartalis",
    "name": "Hartalis",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 135,
      "attack": {
        "melee": 100,
        "ranged": 130
      },
      "defense": 110,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 550
    },
    "suitability": {
      "gathering": 3,
      "lumbering": 4
    },
    "breedingPower": 20,
    "description": "The silence is unsettling, yet strangely soothing.\r\nNo one else remains. All have been delivered.\r\nO King of Salvation, carry me too into eternal stillness.\r\n-The ancient text cuts off here.",
    "image": "/images/pals/Hartalis.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Power Shot",
        "level": 1,
        "element": "Neutral",
        "cooltime": "4",
        "power": "35",
        "description": "Charges energy into a focused blast."
      },
      {
        "name": "Power Bomb",
        "level": 7,
        "element": "Neutral",
        "cooltime": "15",
        "power": "70",
        "description": "Charges a massive amount of energy before firing a large destructive ball."
      },
      {
        "name": "Holy Burst",
        "level": 15,
        "element": "Neutral",
        "cooltime": "30",
        "power": "120",
        "description": "Creates a wide explosion of light at the enemy's location and around it."
      },
      {
        "name": "Radiant Barrage",
        "level": 22,
        "element": "Neutral",
        "cooltime": "40",
        "power": "120",
        "description": "Unleashes a sphere of light that slowly tracks down an enemy. As it nears its target, it splits into countless light bullets that strike all at once."
      },
      {
        "name": "Divine Wing",
        "level": 30,
        "element": "Neutral",
        "cooltime": "35",
        "power": "140",
        "description": "Hartalis' exclusive skill. Leaps back and sprouts wings of light, then dives toward the enemy."
      },
      {
        "name": "Sacred Rain",
        "level": 40,
        "element": "Neutral",
        "cooltime": "60",
        "power": "200",
        "description": "Hartalis' exclusive skill. Fades from sight, then calls down a massive barrage of light pillars centered on its position."
      },
      {
        "name": "Purifying Light",
        "level": 50,
        "element": "Neutral",
        "cooltime": "100",
        "power": "250",
        "description": "Hartalis' exclusive skill. Leaps high into the air, condensing immense energy into a descending sphere of light. When it strikes the ground, it purifies all on the ground below."
      }
    ],
    "isVariant": false
  },
  {
    "id": "",
    "key": "Green_Slime",
    "name": "Green Slime",
    "types": [
      "Grass"
    ],
    "stats": {
      "hp": 65,
      "attack": {
        "melee": 100,
        "ranged": 70
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 180
    },
    "suitability": {
      "transporting": 1
    },
    "breedingPower": 1430,
    "description": "[Tides of Terraria] \r\nA monster from another world, now tameable in this realm.",
    "image": "/images/pals/Green_Slime.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Slime Press (Grass)",
        "level": 1,
        "element": "Grass",
        "cooltime": "1",
        "power": "50",
        "description": "Green Slime's exclusive skill. Leaps toward the enemy and delivers an attack."
      }
    ],
    "isVariant": false
  },
  {
    "id": "",
    "key": "Blue_Slime",
    "name": "Blue Slime",
    "types": [
      "Water"
    ],
    "stats": {
      "hp": 70,
      "attack": {
        "melee": 100,
        "ranged": 70
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 210
    },
    "suitability": {
      "transporting": 1
    },
    "breedingPower": 1490,
    "description": "[Tides of Terraria] \r\nA monster from another world, now tameable in this realm.",
    "image": "/images/pals/Blue_Slime.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Slime Press (Water)",
        "level": 1,
        "element": "Water",
        "cooltime": "1",
        "power": "50",
        "description": "Blue Slime's exclusive skill. Leaps toward the enemy and delivers an attack."
      }
    ],
    "isVariant": false
  },
  {
    "id": "",
    "key": "Red_Slime",
    "name": "Red Slime",
    "types": [
      "Fire"
    ],
    "stats": {
      "hp": 70,
      "attack": {
        "melee": 100,
        "ranged": 75
      },
      "defense": 85,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 240
    },
    "suitability": {
      "transporting": 1
    },
    "breedingPower": 1405,
    "description": "[Tides of Terraria] \r\nA monster from another world, now tameable in this realm.",
    "image": "/images/pals/Red_Slime.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Slime Press (Fire)",
        "level": 1,
        "element": "Fire",
        "cooltime": "1",
        "power": "50",
        "description": "Red Slime's exclusive skill. Leaps toward the enemy and delivers an attack."
      }
    ],
    "isVariant": false
  },
  {
    "id": "",
    "key": "Purple_Slime",
    "name": "Purple Slime",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 75,
      "attack": {
        "melee": 100,
        "ranged": 70
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 270
    },
    "suitability": {
      "transporting": 1
    },
    "breedingPower": 1390,
    "description": "[Tides of Terraria] \r\nA monster from another world, now tameable in this realm.",
    "image": "/images/pals/Purple_Slime.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Slime Press (Dark)",
        "level": 1,
        "element": "Dark",
        "cooltime": "1",
        "power": "50",
        "description": "Purple Slime's exclusive skill. Leaps toward the enemy and delivers an attack."
      }
    ],
    "isVariant": false
  },
  {
    "id": "",
    "key": "Illuminant_Slime",
    "name": "Illuminant Slime",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 80,
      "attack": {
        "melee": 100,
        "ranged": 75
      },
      "defense": 85,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 300
    },
    "suitability": {
      "transporting": 1
    },
    "breedingPower": 1500,
    "description": "[Tides of Terraria] \r\nA monster from another world, now tameable in this realm.",
    "image": "/images/pals/Illuminant_Slime.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Slime Press (Neutral)",
        "level": 1,
        "element": "Neutral",
        "cooltime": "1",
        "power": "50",
        "description": "Illuminant Slime's exclusive skill. Leaps toward the enemy and delivers an attack."
      }
    ],
    "isVariant": false
  },
  {
    "id": "",
    "key": "Rainbow_Slime",
    "name": "Rainbow Slime",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 105,
      "attack": {
        "melee": 100,
        "ranged": 95
      },
      "defense": 105,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 330
    },
    "suitability": {
      "transporting": 1
    },
    "breedingPower": 1320,
    "description": "[Tides of Terraria] \r\nA monster from another world, now tameable in this realm.",
    "image": "/images/pals/Rainbow_Slime.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Slime Press (Rainbow)",
        "level": 1,
        "element": "Neutral",
        "cooltime": "1",
        "power": "100",
        "description": "Rainbow Slime's exclusive skill. Leaps toward the enemy and delivers an attack."
      }
    ],
    "isVariant": false
  },
  {
    "id": "",
    "key": "Enchanted_Sword",
    "name": "Enchanted Sword",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 95,
      "attack": {
        "melee": 100,
        "ranged": 105
      },
      "defense": 90,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 180
    },
    "suitability": {
      "lumbering": 1
    },
    "breedingPower": 1380,
    "description": "[Tides of Terraria] \r\nA monster from another world, now tameable in this realm.",
    "image": "/images/pals/Enchanted_Sword.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Sword Charge",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "80",
        "description": "Enchanted Sword's exclusive skill. Lunges forward to deliver a sharp thrust."
      }
    ],
    "isVariant": false
  },
  {
    "id": "",
    "key": "Cave_Bat",
    "name": "Cave Bat",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 65,
      "attack": {
        "melee": 100,
        "ranged": 75
      },
      "defense": 80,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 220
    },
    "suitability": {
      "gathering": 1
    },
    "breedingPower": 1340,
    "description": "[Tides of Terraria] \r\nA monster from another world, now tameable in this realm.",
    "image": "/images/pals/Cave_Bat.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Winged Assault",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "70",
        "description": "Cave Bat's exclusive skill. Using its whole body, it lunges at the enemy, bouncing off the ground or walls on impact."
      }
    ],
    "isVariant": false
  },
  {
    "id": "",
    "key": "Illuminant_Bat",
    "name": "Illuminant Bat",
    "types": [
      "Neutral"
    ],
    "stats": {
      "hp": 80,
      "attack": {
        "melee": 100,
        "ranged": 80
      },
      "defense": 95,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 220
    },
    "suitability": {
      "gathering": 1
    },
    "breedingPower": 1250,
    "description": "[Tides of Terraria] \r\nA monster from another world, now tameable in this realm.",
    "image": "/images/pals/Illuminant_Bat.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Winged Assault",
        "level": 1,
        "element": "Neutral",
        "cooltime": "2",
        "power": "70",
        "description": "Cave Bat's exclusive skill. Using its whole body, it lunges at the enemy, bouncing off the ground or walls on impact."
      }
    ],
    "isVariant": false
  },
  {
    "id": "",
    "key": "Eye_of_Cthulhu",
    "name": "Eye of Cthulhu",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 110,
      "attack": {
        "melee": 100,
        "ranged": 105
      },
      "defense": 95,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 240
    },
    "suitability": {
      "transporting": 4
    },
    "breedingPower": 1380,
    "description": "[Tides of Terraria] \r\nA monster from another world, now tameable in this realm.",
    "image": "/images/pals/Eye_of_Cthulhu.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Lock-On Lunge",
        "level": 1,
        "element": "Dark",
        "cooltime": "15",
        "power": "100",
        "description": "Eye of Cthulhu's exclusive skill. Repeatedly charges at the enemy."
      },
      {
        "name": "Servant Call",
        "level": 2,
        "element": "Dark",
        "cooltime": "10",
        "power": "50",
        "description": "Eye of Cthulhu's exclusive skill. Summons four Servants that charge at enemies to deal damage. Servants disappear after taking damage or after a short time."
      }
    ],
    "isVariant": false
  },
  {
    "id": "",
    "key": "Demon_Eye",
    "name": "Demon Eye",
    "types": [
      "Dark"
    ],
    "stats": {
      "hp": 105,
      "attack": {
        "melee": 100,
        "ranged": 110
      },
      "defense": 95,
      "speed": {
        "ride": 0,
        "run": 0,
        "walk": 0
      },
      "stamina": 100,
      "support": 100,
      "food": 220
    },
    "suitability": {
      "transporting": 1
    },
    "breedingPower": 1390,
    "description": "[Tides of Terraria] \r\nA monster from another world, now tameable in this realm.",
    "image": "/images/pals/Demon_Eye.webp",
    "drops": [],
    "partnerSkill": "Unknown Partner Skill",
    "skills": [
      {
        "name": "Ocular Rush",
        "level": 1,
        "element": "Dark",
        "cooltime": "1",
        "power": "60",
        "description": "Demon Eye's exclusive skill. Charges at the enemy, bouncing off the ground or walls on impact."
      }
    ],
    "isVariant": false
  }
];
