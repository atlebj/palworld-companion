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
    "key": "lamball",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_SheepBall_icon_normal.webp",
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
    "key": "cattiva",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_PinkCat_icon_normal.webp",
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
    "key": "chikipi",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_ChickenPal_icon_normal.webp",
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
    "key": "lifmunk",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Carbunclo_icon_normal.webp",
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
    "key": "foxparks",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Kitsunebi_icon_normal.webp",
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
    "key": "foxparks_cryst",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Kitsunebi_Ice_icon_normal.webp",
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
    "key": "fuack",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_BluePlatypus_icon_normal.webp",
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
    "key": "fuack_ignis",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_BluePlatypus_Fire_icon_normal.webp",
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
    "key": "sparkit",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_ElecCat_icon_normal.webp",
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
    "key": "tanzee",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Monkey_icon_normal.webp",
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
    "key": "rooby",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_FlameBambi_icon_normal.webp",
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
    "key": "pengullet",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Penguin_icon_normal.webp",
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
    "key": "pengullet_lux",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Penguin_Electric_icon_normal.webp",
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
    "key": "penking",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_CaptainPenguin_icon_normal.webp",
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
    "key": "penking_lux",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_CaptainPenguin_Black_icon_normal.webp",
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
    "key": "jolthog",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Hedgehog_icon_normal.webp",
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
    "key": "jolthog_cryst",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Hedgehog_Ice_icon_normal.webp",
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
    "key": "gumoss",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_PlantSlime_icon_normal.webp",
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
    "key": "vixy",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_CuteFox_icon_normal.webp",
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
    "key": "hoocrates",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_WizardOwl_icon_normal.webp",
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
    "key": "teafant",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Ganesha_icon_normal.webp",
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
    "key": "depresso",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_NegativeKoala_icon_normal.webp",
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
    "key": "cremis",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_WoolFox_icon_normal.webp",
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
    "key": "daedream",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_DreamDemon_icon_normal.webp",
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
    "key": "rushoar",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Boar_icon_normal.webp",
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
    "key": "nox",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_NightFox_icon_normal.webp",
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
    "key": "fuddler",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_CuteMole_icon_normal.webp",
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
    "key": "killamari",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_NegativeOctopus_icon_normal.webp",
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
    "key": "killamari_primo",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_NegativeOctopus_Neutral_icon_normal.webp",
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
    "isVariant": true
  },
  {
    "id": "24",
    "key": "mau",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Bastet_icon_normal.webp",
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
    "key": "mau_cryst",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Bastet_Ice_icon_normal.webp",
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
    "key": "celaray",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_FlyingManta_icon_normal.webp",
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
    "key": "celaray_lux",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_FlyingManta_Thunder_icon_normal.webp",
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
    "key": "direhowl",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Garm_icon_normal.webp",
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
    "key": "tocotoco",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_ColorfulBird_icon_normal.webp",
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
    "key": "flopie",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_FlowerRabbit_icon_normal.webp",
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
    "key": "mozzarina",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_CowPal_icon_normal.webp",
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
    "key": "bristla",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_LittleBriarRose_icon_normal.webp",
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
    "key": "gobfin",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_SharkKid_icon_normal.webp",
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
    "key": "gobfin_ignis",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_SharkKid_Fire_icon_normal.webp",
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
    "key": "hangyu",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_WindChimes_icon_normal.webp",
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
    "key": "hangyu_cryst",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_WindChimes_Ice_icon_normal.webp",
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
    "key": "mossanda",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_GrassPanda_icon_normal.webp",
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
    "key": "mossanda_lux",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_GrassPanda_Electric_icon_normal.webp",
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
    "key": "woolipop",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_SweetsSheep_icon_normal.webp",
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
    "key": "caprity",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_BerryGoat_icon_normal.webp",
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
    "key": "caprity_noct",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_BerryGoat_Dark_icon_normal.webp",
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
    "key": "melpaca",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Alpaca_icon_normal.webp",
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
    "key": "eikthyrdeer",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Deer_icon_normal.webp",
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
    "key": "eikthyrdeer_terra",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Deer_Ground_icon_normal.webp",
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
    "key": "nitewing",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_HawkBird_icon_normal.webp",
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
    "key": "ribbuny",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_PinkRabbit_icon_normal.webp",
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
    "key": "ribbuny_botan",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_PinkRabbit_Grass_icon_normal.webp",
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
    "isVariant": true
  },
  {
    "id": "40",
    "key": "incineram",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Baphomet_icon_normal.webp",
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
    "key": "incineram_noct",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Baphomet_Dark_icon_normal.webp",
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
    "key": "cinnamoth",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_CuteButterfly_icon_normal.webp",
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
    "key": "arsox",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_FlameBuffalo_icon_normal.webp",
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
    "key": "dumud",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_LazyCatfish_icon_normal.webp",
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
    "key": "dumud_gild",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_LazyCatfish_Gold_icon_normal.webp",
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
    "isVariant": true
  },
  {
    "id": "44",
    "key": "cawgnito",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_DarkCrow_icon_normal.webp",
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
    "key": "leezpunk",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_LizardMan_icon_normal.webp",
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
    "key": "leezpunk_ignis",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_LizardMan_Fire_icon_normal.webp",
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
    "key": "loupmoon",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Werewolf_icon_normal.webp",
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
    "key": "loupmoon_cryst",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Werewolf_Ice_icon_normal.webp",
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
    "key": "galeclaw",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Eagle_icon_normal.webp",
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
    "key": "robinquill",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_RobinHood_icon_normal.webp",
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
    "key": "robinquill_terra",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_RobinHood_Ground_icon_normal.webp",
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
    "key": "gorirat",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Gorilla_icon_normal.webp",
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
    "key": "gorirat_terra",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Gorilla_Ground_icon_normal.webp",
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
    "key": "beegarde",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_SoldierBee_icon_normal.webp",
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
    "key": "elizabee",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_QueenBee_icon_normal.webp",
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
    "key": "grintale",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_NaughtyCat_icon_normal.webp",
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
    "key": "swee",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_MopBaby_icon_normal.webp",
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
    "key": "sweepa",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_MopKing_icon_normal.webp",
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
    "key": "chillet",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_WeaselDragon_icon_normal.webp",
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
    "key": "chillet_ignis",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_WeaselDragon_Fire_icon_normal.webp",
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
    "key": "univolt",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Kirin_icon_normal.webp",
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
    "key": "foxcicle",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_IceFox_icon_normal.webp",
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
    "key": "pyrin",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_FireKirin_icon_normal.webp",
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
    "key": "pyrin_noct",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_FireKirin_Dark_icon_normal.webp",
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
    "key": "reindrix",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_IceDeer_icon_normal.webp",
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
    "key": "rayhound",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_ThunderDog_icon_normal.webp",
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
    "key": "kitsun",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_AmaterasuWolf_icon_normal.webp",
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
    "key": "kitsun_noct",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_AmaterasuWolf_Dark_icon_normal.webp",
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
    "key": "dazzi",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_RaijinDaughter_icon_normal.webp",
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
    "key": "dazzi_noct",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_RaijinDaughter_Water_icon_normal.webp",
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
    "key": "lunaris",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Mutant_icon_normal.webp",
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
    "key": "dinossom",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_FlowerDinosaur_icon_normal.webp",
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
    "key": "dinossom_lux",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_FlowerDinosaur_Electric_icon_normal.webp",
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
    "key": "surfent",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Serpent_icon_normal.webp",
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
    "key": "surfent_terra",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Serpent_Ground_icon_normal.webp",
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
    "key": "maraith",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_GhostBeast_icon_normal.webp",
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
    "key": "digtoise",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_DrillGame_icon_normal.webp",
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
    "key": "tombat",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_CatBat_icon_normal.webp",
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
    "key": "lovander",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_PinkLizard_icon_normal.webp",
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
    "key": "flambelle",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_LavaGirl_icon_normal.webp",
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
    "key": "vanwyrm",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_BirdDragon_icon_normal.webp",
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
    "key": "vanwyrm_cryst",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_BirdDragon_Ice_icon_normal.webp",
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
    "key": "bushi",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Ronin_icon_normal.webp",
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
    "key": "bushi_noct",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Ronin_Dark_icon_normal.webp",
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
    "key": "beakon",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_ThunderBird_icon_normal.webp",
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
    "key": "ragnahawk",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_RedArmorBird_icon_normal.webp",
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
    "key": "katress",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_CatMage_icon_normal.webp",
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
    "key": "katress_ignis",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_CatMage_Fire_icon_normal.webp",
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
    "key": "wixen",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_FoxMage_icon_normal.webp",
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
    "key": "wixen_noct",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_FoxMage_Dark_icon_normal.webp",
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
    "key": "verdash",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_GrassRabbitMan_icon_normal.webp",
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
    "key": "vaelet",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_VioletFairy_icon_normal.webp",
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
    "key": "sibelyx",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_WhiteMoth_icon_normal.webp",
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
    "key": "elphidran",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_FairyDragon_icon_normal.webp",
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
    "key": "elphidran_aqua",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_FairyDragon_Water_icon_normal.webp",
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
    "key": "kelpsea",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Kelpie_icon_normal.webp",
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
    "key": "kelpsea_ignis",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Kelpie_Fire_icon_normal.webp",
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
    "key": "azurobe",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_BlueDragon_icon_normal.webp",
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
    "key": "azurobe_cryst",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_BlueDragon_Ice_icon_normal.webp",
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
    "key": "cryolinx",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_WhiteTiger_icon_normal.webp",
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
    "key": "cryolinx_terra",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_WhiteTiger_Ground_icon_normal.webp",
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
    "key": "blazehowl",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Manticore_icon_normal.webp",
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
    "key": "blazehowl_noct",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Manticore_Dark_icon_normal.webp",
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
    "key": "relaxaurus",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_LazyDragon_icon_normal.webp",
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
    "key": "relaxaurus_lux",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_LazyDragon_Electric_icon_normal.webp",
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
    "key": "broncherry",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_SakuraSaurus_icon_normal.webp",
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
    "key": "broncherry_aqua",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_SakuraSaurus_Water_icon_normal.webp",
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
    "key": "petallia",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_FlowerDoll_icon_normal.webp",
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
    "key": "reptyro",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_VolcanicMonster_icon_normal.webp",
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
    "key": "reptyro_cryst",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_VolcanicMonster_Ice_icon_normal.webp",
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
    "key": "kingpaca",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_KingAlpaca_icon_normal.webp",
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
    "key": "kingpaca_cryst",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_KingAlpaca_Ice_icon_normal.webp",
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
    "key": "mammorest",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_GrassMammoth_icon_normal.webp",
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
    "key": "mammorest_cryst",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_GrassMammoth_Ice_icon_normal.webp",
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
    "key": "wumpo",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Yeti_icon_normal.webp",
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
    "key": "wumpo_botan",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Yeti_Grass_icon_normal.webp",
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
    "isVariant": true
  },
  {
    "id": "92",
    "key": "warsect",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_HerculesBeetle_icon_normal.webp",
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
    "key": "warsect_terra",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_HerculesBeetle_Ground_icon_normal.webp",
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
    "key": "fenglope",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_FengyunDeeper_icon_normal.webp",
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
    "key": "fenglope_lux",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_FengyunDeeper_Electric_icon_norma.webp",
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
    "key": "felbat",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_CatVampire_icon_normal.webp",
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
    "key": "quivern",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_SkyDragon_icon_normal.webp",
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
    "key": "quivern_botan",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_SkyDragon_Grass_icon_normal.webp",
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
    "isVariant": true
  },
  {
    "id": "96",
    "key": "blazamut",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_KingBahamut_icon_normal.webp",
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
    "key": "blazamut_ryu",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_KingBahamut_Dragon_icon_normal.webp",
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
    "isVariant": true
  },
  {
    "id": "97",
    "key": "helzephyr",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_HadesBird_icon_normal.webp",
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
    "key": "helzephyr_lux",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_HadesBird_Electric_icon_normal.webp",
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
    "key": "astegon",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_BlackMetalDragon_icon_normal.webp",
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
    "key": "menasting",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_DarkScorpion_icon_normal.webp",
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
    "key": "menasting_terra",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_DarkScorpion_Ground_icon_normal.webp",
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
    "key": "anubis",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Anubis_icon_normal.webp",
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
    "key": "jormuntide",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Umihebi_icon_normal.webp",
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
    "key": "jormuntide_ignis",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Umihebi_Fire_icon_normal.webp",
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
    "key": "suzaku",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Suzaku_icon_normal.webp",
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
    "key": "suzaku_aqua",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Suzaku_Water_icon_normal.webp",
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
    "key": "grizzbolt",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_ElecPanda_icon_normal.webp",
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
    "key": "lyleen",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_LilyQueen_icon_normal.webp",
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
    "key": "lyleen_noct",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_LilyQueen_Dark_icon_normal.webp",
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
    "key": "faleris",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Horus_icon_normal.webp",
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
    "key": "faleris_aqua",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Horus_Water_icon_normal.webp",
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
    "key": "orserk",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_ThunderDragonMan_icon_normal.webp",
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
    "key": "shadowbeak",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_BlackGriffon_icon_normal.webp",
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
    "key": "paladius",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_SaintCentaur_icon_normal.webp",
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
    "key": "necromus",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_BlackCentaur_icon_normal.webp",
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
    "key": "frostallion",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_IceHorse_icon_normal.webp",
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
    "key": "frostallion_noct",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_IceHorse_Dark_icon_normal.webp",
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
    "key": "jetragon",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_JetDragon_icon_normal.webp",
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
    "key": "bellanoir",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_NightLady_icon_normal.webp",
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
    "key": "bellanoir_libero",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_NightLady_Dark_icon_normal.webp",
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
    "isVariant": true
  },
  {
    "id": "113",
    "key": "selyne",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_MoonQueen_icon_normal.webp",
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
    "key": "croajiro",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_KendoFrog_icon_normal.webp",
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
    "key": "croajiro_noct",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_KendoFrog_Dark_icon_normal.webp",
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
    "key": "lullu",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_LeafPrincess_icon_normal.webp",
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
    "key": "shroomer",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_MushroomDragon_icon_normal.webp",
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
    "key": "shroomer_noct",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_MushroomDragon_Dark_icon_normal.webp",
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
    "key": "kikit",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_SmallArmadillo_icon_normal.webp",
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
    "key": "sootseer",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_CandleGhost_icon_normal.webp",
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
    "key": "prixter",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_ScorpionMan_icon_normal.webp",
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
    "key": "knocklem",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_WingGolem_icon_normal.webp",
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
    "key": "yakumo",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_GuardianDog_icon_normal.webp",
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
    "key": "dogen",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_SifuDog_icon_normal.webp",
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
    "key": "dazemu",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_FeatherOstrich_icon_normal.webp",
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
    "key": "mimog",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_MimicDog_icon_normal.webp",
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
    "key": "xenovader",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_DarkAlien_icon_normal.webp",
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
    "key": "xenogard",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_WhiteAlienDragon_icon_normal.webp",
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
    "key": "xenolord",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_DarkMechaDragon_icon_normal.webp",
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
    "key": "nitemary",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_GhostRabbit_icon_normal.webp",
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
    "key": "starryon",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_NightBlueHorse_icon_normal.webp",
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
    "key": "silvegis",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_WhiteShieldDragon_icon_normal.webp",
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
    "key": "smokie",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_BlackPuppy_icon_normal.webp",
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
    "key": "celesdir",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_WhiteDeer_icon_normal.webp",
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
    "key": "omascul",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_MysteryMask_icon_normal.webp",
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
    "key": "splatterina",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_GrimGirl_icon_normal.webp",
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
    "key": "tarantriss",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_PurpleSpider_icon_normal.webp",
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
    "key": "azurmane",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_BlueThunderHorse_icon_normal.webp",
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
    "key": "bastigor",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_SnowTigerBeastman_icon_normal.webp",
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
    "key": "prunelia",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_BlueberryFairy_icon_normal.webp",
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
    "key": "nyafia",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_BadCatgirl_icon_normal.webp",
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
    "key": "gildane",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_GoldenHorse_icon_normal.webp",
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
    "key": "herbil",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_LeafMomonga_icon_normal.webp",
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
    "key": "icelyn",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_IceWitch_icon_normal.webp",
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
    "key": "frostplume",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_SnowPeafowl_icon_normal.webp",
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
    "key": "palumba",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_TropicalOstrich_icon_normal.webp",
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
    "key": "braloha",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_Plesiosaur_icon_normal.webp",
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
    "key": "munchill",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_IceCrocodile_icon_normal.webp",
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
    "key": "polapup",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_IceSeal_icon_normal.webp",
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
    "key": "turtacle",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_TentacleTurtle_icon_normal.webp",
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
    "key": "turtacle_terra",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_TentacleTurtle_Ground_icon_normal.webp",
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
    "key": "jellroy",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_JellyfishGhost_icon_normal.webp",
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
    "key": "jelliette",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_JellyfishFairy_icon_normal.webp",
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
    "key": "gloopie",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_OctopusGirl_icon_normal.webp",
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
    "key": "finsider",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_StuffedShark_icon_normal.webp",
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
    "key": "finsider_ignis",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_StuffedShark_Fire_icon_normal.webp",
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
    "key": "ghangler",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_GhostAnglerfish_icon_normal.webp",
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
    "key": "ghangler_ignis",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_GhostAnglerfish_Fire_icon_normal.webp",
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
    "key": "whalaska",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_IceNarwhal_icon_normal.webp",
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
    "key": "whalaska_ignis",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_IceNarwhal_Fire_icon_normal.webp",
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
    "key": "neptilius",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_PoseidonOrca_icon_normal.webp",
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
    "key": "hartalis",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/T_LegendDeer_icon_normal.webp",
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
    "key": "green_slime",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/Yakushima/T_YakushimaMonster001_icon_normal.webp",
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
    "key": "blue_slime",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/Yakushima/T_YakushimaMonster001_Blue_icon_normal.webp",
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
    "key": "red_slime",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/Yakushima/T_YakushimaMonster001_Red_icon_normal.webp",
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
    "key": "purple_slime",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/Yakushima/T_YakushimaMonster001_Purple_icon_normal.webp",
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
    "key": "illuminant_slime",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/Yakushima/T_YakushimaMonster001_Pink_icon_normal.webp",
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
    "key": "rainbow_slime",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/Yakushima/T_YakushimaMonster001_Rainbow_icon_normal.webp",
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
    "key": "enchanted_sword",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/Yakushima/T_YakushimaMonster002_icon_normal.webp",
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
    "key": "cave_bat",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/Yakushima/T_YakushimaMonster003_icon_normal.webp",
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
    "key": "illuminant_bat",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/Yakushima/T_YakushimaMonster003_Purple_icon_normal.webp",
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
    "key": "eye_of_cthulhu",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/Yakushima/T_YakushimaBoss001_icon_normal.webp",
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
    "key": "demon_eye",
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
    "description": "No description available.",
    "image": "https://cdn.paldb.cc/image/Pal/Texture/PalIcon/Normal/Yakushima/T_YakushimaBoss001_Small_icon_normal.webp",
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
