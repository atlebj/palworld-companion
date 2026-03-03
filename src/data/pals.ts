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

export interface PalAura {
  name: string;
  description: string;
  tech?: string | null;
}

export interface PalSkill {
  level: number;
  name: string;
  type: string;
  cooldown: number;
  power: number;
  description: string;
}

export interface PalData {
  id: number | string;
  key: string;
  name: string;
  types: string[];
  stats: PalStats;
  suitability: WorkSuitability;
  breedingPower: number;
  description: string;
  image: string;
  aura: PalAura;
  skills: PalSkill[];
}

export const pals: PalData[] = [
  {
    id: "1",
    key: '',
    name: 'Lamball',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Roly Poly',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Lamball\'s exclusive skill. Curls into a ball, rolling after any enemies in its way. Becomes dizzy and unable to move after the attack ends.'
      },
      {
        level: 7,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 15,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 22,
        name: 'Implode',
        type: '',
        cooldown: 0,
        power: 230,
        description: 'Risks its life to cause a violent explosion. Becomes incapacitated afterwards.'
      },
      {
        level: 30,
        name: 'Electric Ball',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires an electric ball that slowly pursues an enemy.'
      },
      {
        level: 40,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 50,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
    ],
    description: "",
    image: '/images/pals/Lamball.webp',
  },
  {
    id: "2",
    key: '',
    name: 'Cattiva',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Punch Flurry',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Cattiva\'s exclusive skill. Chases after enemies, swinging both arms and delivering a flurry of punches.'
      },
      {
        level: 7,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 15,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 22,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 30,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 40,
        name: 'Seed Machine Gun',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires a volley of hard seeds at enemies in front of it.'
      },
      {
        level: 50,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
    ],
    description: "",
    image: '/images/pals/Cattiva.webp',
  },
  {
    id: "3",
    key: '',
    name: 'Chikipi',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Chicken Rush',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Chikipi\'s exclusive skill. Flies at enemies in its sights, attacking them with its sharp beak.'
      },
      {
        level: 7,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 15,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 22,
        name: 'Implode',
        type: '',
        cooldown: 0,
        power: 230,
        description: 'Risks its life to cause a violent explosion. Becomes incapacitated afterwards.'
      },
      {
        level: 30,
        name: 'Grass Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 40,
        name: 'Sand Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two sand tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 50,
        name: 'Flare Storm',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two flaming tornadoes on either side before launching them at an enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Chikipi.webp',
  },
  {
    id: "4",
    key: '',
    name: 'Lifmunk',
    types: ["Grass"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 7,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 15,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 22,
        name: 'Seed Machine Gun',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires a volley of hard seeds at enemies in front of it.'
      },
      {
        level: 30,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 40,
        name: 'Spine Vine',
        type: '',
        cooldown: 0,
        power: 95,
        description: 'Generates spiny thorns that chase an enemy along the ground, piercing them from below.'
      },
      {
        level: 50,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Lifmunk.webp',
  },
  {
    id: "5",
    key: '',
    name: 'Foxparks',
    types: ["Fire"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 7,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 15,
        name: 'Spirit Fire',
        type: '',
        cooldown: 0,
        power: 45,
        description: 'Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward.'
      },
      {
        level: 22,
        name: 'Flare Arrow',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires three flaming arrows in succession that home in on an enemy.'
      },
      {
        level: 30,
        name: 'Ignis Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Shoots flames at an enemy, dealing continuous damage.'
      },
      {
        level: 40,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 50,
        name: 'Fire Ball',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact.'
      },
    ],
    description: "",
    image: '/images/pals/Foxparks.webp',
  },
  {
    id: "5B",
    key: '',
    name: 'Foxparks Cryst',
    types: ["Ice"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 7,
        name: 'Hydro Jet',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a high speed ball of water at an enemy.'
      },
      {
        level: 15,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 22,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 30,
        name: 'Crystal Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Enshrouds an enemy in a frigid blast of air, dealing continuous damage.'
      },
      {
        level: 40,
        name: 'Icicle Bullet',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Generates multiple sharp ice blocks in the sky and fires them at the enemy.'
      },
      {
        level: 50,
        name: 'Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.'
      },
    ],
    description: "",
    image: '/images/pals/Foxparks_Cryst.webp',
  },
  {
    id: "6",
    key: '',
    name: 'Fuack',
    types: ["Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 7,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 15,
        name: 'Hydro Jet',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a high speed ball of water at an enemy.'
      },
      {
        level: 22,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 30,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 40,
        name: 'Aqua Burst',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of water and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Hydro Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it.'
      },
    ],
    description: "",
    image: '/images/pals/Fuack.webp',
  },
  {
    id: "6B",
    key: '',
    name: 'Fuack Ignis',
    types: ["Water", "Fire"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 7,
        name: 'Spirit Fire',
        type: '',
        cooldown: 0,
        power: 45,
        description: 'Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward.'
      },
      {
        level: 15,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 22,
        name: 'Ignis Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Shoots flames at an enemy, dealing continuous damage.'
      },
      {
        level: 30,
        name: 'Flame Wall',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a wall of flames at the enemy\'s location. The wall of flames will remain for a while, and deal damage to the enemies it touches.'
      },
      {
        level: 40,
        name: 'Hydro Slicer',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Mows down the frontal area with a blast of compressed water. The area struck by the blast erupts with water after a short delay.'
      },
      {
        level: 50,
        name: 'Volcanic Rain',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Fires countless volcanic bombs into the sky. After a while, the bombs rain down around their originator.'
      },
    ],
    description: "",
    image: '/images/pals/Fuack_Ignis.webp',
  },
  {
    id: "7",
    key: '',
    name: 'Sparkit',
    types: ["Electric"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Spark Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Releases lightning orbs in a fan shape, spreading as they travel.'
      },
      {
        level: 7,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 15,
        name: 'Shockwave',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Quickly discharges electricity, shocking those around it.'
      },
      {
        level: 22,
        name: 'Electric Ball',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires an electric ball that slowly pursues an enemy.'
      },
      {
        level: 30,
        name: 'Tri-Lightning',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Generates lightning that strikes an enemy three times from above.'
      },
      {
        level: 40,
        name: 'Lightning Streak',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Generates a lightning bolt that moves forward in a line.'
      },
      {
        level: 50,
        name: 'Lightning Bolt',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges electric energy before blasting enemies with a powerful shock.'
      },
    ],
    description: "",
    image: '/images/pals/Sparkit.webp',
  },
  {
    id: "8",
    key: '',
    name: 'Tanzee',
    types: ["Grass"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 7,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 15,
        name: 'Seed Machine Gun',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires a volley of hard seeds at enemies in front of it.'
      },
      {
        level: 22,
        name: 'Seed Mine',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Launches a deadly seed. If it hits an enemy, the seed explodes.'
      },
      {
        level: 30,
        name: 'Stone Cannon',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Digs up a boulder and hurls it at an enemy.'
      },
      {
        level: 40,
        name: 'Grass Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 50,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Tanzee.webp',
  },
  {
    id: "9",
    key: '',
    name: 'Rooby',
    types: ["Fire"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 7,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 15,
        name: 'Spirit Fire',
        type: '',
        cooldown: 0,
        power: 45,
        description: 'Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward.'
      },
      {
        level: 22,
        name: 'Flare Arrow',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires three flaming arrows in succession that home in on an enemy.'
      },
      {
        level: 30,
        name: 'Flare Storm',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two flaming tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 40,
        name: 'Ignis Rage',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Infuses the surrounding ground with energy, causing it to explode after a set amount of time.'
      },
      {
        level: 50,
        name: 'Fire Ball',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact.'
      },
    ],
    description: "",
    image: '/images/pals/Rooby.webp',
  },
  {
    id: "10",
    key: '',
    name: 'Pengullet',
    types: ["Water", "Ice"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 7,
        name: 'Hydro Jet',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a high speed ball of water at an enemy.'
      },
      {
        level: 15,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 22,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 30,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 40,
        name: 'Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.'
      },
      {
        level: 50,
        name: 'Hydro Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it.'
      },
    ],
    description: "",
    image: '/images/pals/Pengullet.webp',
  },
  {
    id: "10B",
    key: '',
    name: 'Pengullet Lux',
    types: ["Water", "Electric"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Thunder Spear',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high-speed lightning spear straight ahead towards the enemy.'
      },
      {
        level: 7,
        name: 'Electric Ball',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires an electric ball that slowly pursues an enemy.'
      },
      {
        level: 15,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 22,
        name: 'Splash',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Generates a column of water that travels in a straight line.'
      },
      {
        level: 30,
        name: 'Aqua Burst',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of water and hurls it at an enemy.'
      },
      {
        level: 40,
        name: 'TriSpark',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'A high-speed lightning ball that flies in a straight line. Simultaneously fires slow lightning balls that track the enemy.'
      },
      {
        level: 50,
        name: 'Lightning Strike',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Acts as a lightning rod, calling down thunderbolts that electrocute the surrounding area.'
      },
    ],
    description: "",
    image: '/images/pals/Pengullet_Lux.webp',
  },
  {
    id: "11",
    key: '',
    name: 'Penking',
    types: ["Water", "Ice"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 7,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 15,
        name: 'Emperor Slide',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Penking\'s exclusive skill. Lies on its belly while generating frozen air all around it before sliding at enemies at high speed.'
      },
      {
        level: 22,
        name: 'Crystal Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Enshrouds an enemy in a frigid blast of air, dealing continuous damage.'
      },
      {
        level: 30,
        name: 'Aqua Burst',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of water and hurls it at an enemy.'
      },
      {
        level: 40,
        name: 'Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.'
      },
      {
        level: 50,
        name: 'Hydro Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it.'
      },
    ],
    description: "",
    image: '/images/pals/Penking.webp',
  },
  {
    id: "11B",
    key: '',
    name: 'Penking Lux',
    types: ["Water", "Electric"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Thunder Spear',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high-speed lightning spear straight ahead towards the enemy.'
      },
      {
        level: 7,
        name: 'Plasma Funnel',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Creates two balls of electric energy that fire numerous lightning orbs at enemies.'
      },
      {
        level: 15,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 22,
        name: 'TriSpark',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'A high-speed lightning ball that flies in a straight line. Simultaneously fires slow lightning balls that track the enemy.'
      },
      {
        level: 30,
        name: 'Thunderslide',
        type: '',
        cooldown: 0,
        power: 145,
        description: 'Penking Lux\'s exclusive skill. Lies on its belly while generating electric charge all around it before sliding at enemies at high speed.'
      },
      {
        level: 40,
        name: 'Aqua Surge',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Generates waves that surge around the enemy from all sides. They converge and explode at the center, erupting into a column of water.'
      },
      {
        level: 50,
        name: 'Thunderstorm',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Generates a huge tornado of lightning that moves slowly towards the enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Penking_Lux.webp',
  },
  {
    id: "12",
    key: '',
    name: 'Jolthog',
    types: ["Electric"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Shockwave',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Quickly discharges electricity, shocking those around it.'
      },
      {
        level: 7,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 15,
        name: 'Electric Ball',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires an electric ball that slowly pursues an enemy.'
      },
      {
        level: 22,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 30,
        name: 'Tri-Lightning',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Generates lightning that strikes an enemy three times from above.'
      },
      {
        level: 40,
        name: 'Lightning Streak',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Generates a lightning bolt that moves forward in a line.'
      },
      {
        level: 50,
        name: 'Lightning Bolt',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges electric energy before blasting enemies with a powerful shock.'
      },
    ],
    description: "",
    image: '/images/pals/Jolthog.webp',
  },
  {
    id: "12B",
    key: '',
    name: 'Jolthog Cryst',
    types: ["Ice"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 7,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 15,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 22,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 30,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 40,
        name: 'Crystal Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Enshrouds an enemy in a frigid blast of air, dealing continuous damage.'
      },
      {
        level: 50,
        name: 'Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.'
      },
    ],
    description: "",
    image: '/images/pals/Jolthog_Cryst.webp',
  },
  {
    id: "13",
    key: '',
    name: 'Gumoss',
    types: ["Grass", "Ground"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 7,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 15,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 22,
        name: 'Seed Machine Gun',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires a volley of hard seeds at enemies in front of it.'
      },
      {
        level: 30,
        name: 'Seed Mine',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Launches a deadly seed. If it hits an enemy, the seed explodes.'
      },
      {
        level: 40,
        name: 'Sand Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two sand tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 50,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Gumoss.webp',
  },
  {
    id: "14",
    key: '',
    name: 'Vixy',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 15,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 22,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 30,
        name: 'Seed Machine Gun',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires a volley of hard seeds at enemies in front of it.'
      },
      {
        level: 40,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 50,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
    ],
    description: "",
    image: '/images/pals/Vixy.webp',
  },
  {
    id: "15",
    key: '',
    name: 'Hoocrates',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Dark Ball',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Unleashes a sphere of darkness that slowly tracks down an enemy.'
      },
      {
        level: 15,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 22,
        name: 'Sand Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two sand tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 30,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 40,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Hoocrates.webp',
  },
  {
    id: "16",
    key: '',
    name: 'Teafant',
    types: ["Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 7,
        name: 'Hydro Jet',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a high speed ball of water at an enemy.'
      },
      {
        level: 15,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 22,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 30,
        name: 'Acid Rain',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Creates acidic clouds that pour down acid rain on enemies.'
      },
      {
        level: 40,
        name: 'Aqua Burst',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of water and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Hydro Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it.'
      },
    ],
    description: "",
    image: '/images/pals/Teafant.webp',
  },
  {
    id: "17",
    key: '',
    name: 'Depresso',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Poison Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls poison sludge at an enemy.'
      },
      {
        level: 7,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 15,
        name: 'Dark Ball',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Unleashes a sphere of darkness that slowly tracks down an enemy.'
      },
      {
        level: 22,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 30,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 40,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Depresso.webp',
  },
  {
    id: "18",
    key: '',
    name: 'Cremis',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 15,
        name: 'Spark Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Releases lightning orbs in a fan shape, spreading as they travel.'
      },
      {
        level: 22,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 30,
        name: 'Shockwave',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Quickly discharges electricity, shocking those around it.'
      },
      {
        level: 40,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 50,
        name: 'Lightning Bolt',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges electric energy before blasting enemies with a powerful shock.'
      },
    ],
    description: "",
    image: '/images/pals/Cremis.webp',
  },
  {
    id: "19",
    key: '',
    name: 'Daedream',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Dark Ball',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Unleashes a sphere of darkness that slowly tracks down an enemy.'
      },
      {
        level: 7,
        name: 'Poison Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls poison sludge at an enemy.'
      },
      {
        level: 15,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 22,
        name: 'Crystal Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Enshrouds an enemy in a frigid blast of air, dealing continuous damage.'
      },
      {
        level: 30,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 40,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Daedream.webp',
  },
  {
    id: "20",
    key: '',
    name: 'Rushoar',
    types: ["Ground"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Reckless Charge',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Rushoar\'s exclusive skill. Takes aim at a foe and rushes at them with a fierce charge.'
      },
      {
        level: 7,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 15,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 22,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 30,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 40,
        name: 'Rock Lance',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Generates a sharp rock spear under an enemy.'
      },
      {
        level: 50,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
    ],
    description: "",
    image: '/images/pals/Rushoar.webp',
  },
  {
    id: "21",
    key: '',
    name: 'Nox',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Dark Ball',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Unleashes a sphere of darkness that slowly tracks down an enemy.'
      },
      {
        level: 15,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 22,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 30,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 40,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Nox.webp',
  },
  {
    id: "22",
    key: '',
    name: 'Fuddler',
    types: ["Ground"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 7,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 15,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 22,
        name: 'Stone Cannon',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Digs up a boulder and hurls it at an enemy.'
      },
      {
        level: 30,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 40,
        name: 'Sand Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two sand tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 50,
        name: 'Rock Lance',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Generates a sharp rock spear under an enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Fuddler.webp',
  },
  {
    id: "23",
    key: '',
    name: 'Killamari',
    types: ["Dark", "Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Hydro Jet',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a high speed ball of water at an enemy.'
      },
      {
        level: 7,
        name: 'Poison Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls poison sludge at an enemy.'
      },
      {
        level: 15,
        name: 'Dark Ball',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Unleashes a sphere of darkness that slowly tracks down an enemy.'
      },
      {
        level: 22,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 30,
        name: 'Acid Rain',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Creates acidic clouds that pour down acid rain on enemies.'
      },
      {
        level: 40,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Killamari.webp',
  },
  {
    id: "23B",
    key: '',
    name: 'Killamari Primo',
    types: ["Neutral", "Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 15,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 22,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 30,
        name: 'Acid Rain',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Creates acidic clouds that pour down acid rain on enemies.'
      },
      {
        level: 40,
        name: 'Torrential Blast',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Fires a high-pressure stream of water forward. After a short delay, the stream branches off to the left and right.'
      },
      {
        level: 50,
        name: 'Hydro Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it.'
      },
    ],
    description: "",
    image: '/images/pals/Killamari_Primo.webp',
  },
  {
    id: "24",
    key: '',
    name: 'Mau',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 7,
        name: 'Dark Ball',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Unleashes a sphere of darkness that slowly tracks down an enemy.'
      },
      {
        level: 15,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 22,
        name: 'Sand Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two sand tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 30,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 40,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Mau.webp',
  },
  {
    id: "24B",
    key: '',
    name: 'Mau Cryst',
    types: ["Ice"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 7,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 15,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 22,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 30,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 40,
        name: 'Crystal Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Enshrouds an enemy in a frigid blast of air, dealing continuous damage.'
      },
      {
        level: 50,
        name: 'Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.'
      },
    ],
    description: "",
    image: '/images/pals/Mau_Cryst.webp',
  },
  {
    id: "25",
    key: '',
    name: 'Celaray',
    types: ["Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Hydro Jet',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a high speed ball of water at an enemy.'
      },
      {
        level: 7,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 15,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 22,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 30,
        name: 'Seed Machine Gun',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires a volley of hard seeds at enemies in front of it.'
      },
      {
        level: 40,
        name: 'Aqua Burst',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of water and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Hydro Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it.'
      },
    ],
    description: "",
    image: '/images/pals/Celaray.webp',
  },
  {
    id: "25B",
    key: '',
    name: 'Celaray Lux',
    types: ["Water", "Electric"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Thunder Spear',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high-speed lightning spear straight ahead towards the enemy.'
      },
      {
        level: 7,
        name: 'Shockwave',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Quickly discharges electricity, shocking those around it.'
      },
      {
        level: 15,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 22,
        name: 'Lightning Streak',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Generates a lightning bolt that moves forward in a line.'
      },
      {
        level: 30,
        name: 'Splash',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Generates a column of water that travels in a straight line.'
      },
      {
        level: 40,
        name: 'Torrential Blast',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Fires a high-pressure stream of water forward. After a short delay, the stream branches off to the left and right.'
      },
      {
        level: 50,
        name: 'Lightning Bolt',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges electric energy before blasting enemies with a powerful shock.'
      },
    ],
    description: "",
    image: '/images/pals/Celaray_Lux.webp',
  },
  {
    id: "26",
    key: '',
    name: 'Direhowl',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Fierce Fang',
        type: '',
        cooldown: 0,
        power: 45,
        description: 'Direhowl\'s exclusive skill. Swiftly leaps at an enemy and bites into them.'
      },
      {
        level: 7,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 15,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 22,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 30,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 40,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 50,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
    ],
    description: "",
    image: '/images/pals/Direhowl.webp',
  },
  {
    id: "27",
    key: '',
    name: 'Tocotoco',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Implode',
        type: '',
        cooldown: 0,
        power: 230,
        description: 'Risks its life to cause a violent explosion. Becomes incapacitated afterwards.'
      },
      {
        level: 7,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 15,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 22,
        name: 'Megaton Implode',
        type: '',
        cooldown: 0,
        power: 500,
        description: 'Risks life to cause a massive explosion. Those who perish for their duty become glistening stars in the night sky.'
      },
      {
        level: 30,
        name: 'Sand Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two sand tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 40,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 50,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
    ],
    description: "",
    image: '/images/pals/Tocotoco.webp',
  },
  {
    id: "28",
    key: '',
    name: 'Flopie',
    types: ["Grass"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 7,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 15,
        name: 'Hydro Jet',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a high speed ball of water at an enemy.'
      },
      {
        level: 22,
        name: 'Seed Machine Gun',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires a volley of hard seeds at enemies in front of it.'
      },
      {
        level: 30,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 40,
        name: 'Grass Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 50,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Flopie.webp',
  },
  {
    id: "29",
    key: '',
    name: 'Mozzarina',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 7,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 15,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 22,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 30,
        name: 'Stone Cannon',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Digs up a boulder and hurls it at an enemy.'
      },
      {
        level: 40,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 50,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
    ],
    description: "",
    image: '/images/pals/Mozzarina.webp',
  },
  {
    id: "30",
    key: '',
    name: 'Bristla',
    types: ["Grass"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 7,
        name: 'Seed Machine Gun',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires a volley of hard seeds at enemies in front of it.'
      },
      {
        level: 15,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 22,
        name: 'Grass Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 30,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 40,
        name: 'Spine Vine',
        type: '',
        cooldown: 0,
        power: 95,
        description: 'Generates spiny thorns that chase an enemy along the ground, piercing them from below.'
      },
      {
        level: 50,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Bristla.webp',
  },
  {
    id: "31",
    key: '',
    name: 'Gobfin',
    types: ["Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Hydro Jet',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a high speed ball of water at an enemy.'
      },
      {
        level: 7,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 15,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 22,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 30,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 40,
        name: 'Aqua Burst',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of water and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Hydro Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it.'
      },
    ],
    description: "",
    image: '/images/pals/Gobfin.webp',
  },
  {
    id: "31B",
    key: '',
    name: 'Gobfin Ignis',
    types: ["Fire"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 7,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 15,
        name: 'Spirit Fire',
        type: '',
        cooldown: 0,
        power: 45,
        description: 'Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward.'
      },
      {
        level: 22,
        name: 'Flare Arrow',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires three flaming arrows in succession that home in on an enemy.'
      },
      {
        level: 30,
        name: 'Lightning Streak',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Generates a lightning bolt that moves forward in a line.'
      },
      {
        level: 40,
        name: 'Fire Ball',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact.'
      },
      {
        level: 50,
        name: 'Ignis Rage',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Infuses the surrounding ground with energy, causing it to explode after a set amount of time.'
      },
    ],
    description: "",
    image: '/images/pals/Gobfin_Ignis.webp',
  },
  {
    id: "32",
    key: '',
    name: 'Hangyu',
    types: ["Ground"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 7,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 15,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 22,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 30,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 40,
        name: 'Sand Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two sand tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 50,
        name: 'Rock Lance',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Generates a sharp rock spear under an enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Hangyu.webp',
  },
  {
    id: "32B",
    key: '',
    name: 'Hangyu Cryst',
    types: ["Ice"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 15,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 22,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 30,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 40,
        name: 'Crystal Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Enshrouds an enemy in a frigid blast of air, dealing continuous damage.'
      },
      {
        level: 50,
        name: 'Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.'
      },
    ],
    description: "",
    image: '/images/pals/Hangyu_Cryst.webp',
  },
  {
    id: "33",
    key: '',
    name: 'Mossanda',
    types: ["Grass"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 7,
        name: 'Seed Machine Gun',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires a volley of hard seeds at enemies in front of it.'
      },
      {
        level: 15,
        name: 'Stone Cannon',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Digs up a boulder and hurls it at an enemy.'
      },
      {
        level: 22,
        name: 'Crushing Punch',
        type: '',
        cooldown: 0,
        power: 85,
        description: 'Mossanda\'s exclusive skill. Winds up its right arm before striking an enemy with a devastating punch.'
      },
      {
        level: 30,
        name: 'Seed Mine',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Launches a deadly seed. If it hits an enemy, the seed explodes.'
      },
      {
        level: 40,
        name: 'Spine Vine',
        type: '',
        cooldown: 0,
        power: 95,
        description: 'Generates spiny thorns that chase an enemy along the ground, piercing them from below.'
      },
      {
        level: 50,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Mossanda.webp',
  },
  {
    id: "33B",
    key: '',
    name: 'Mossanda Lux',
    types: ["Electric"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Spark Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Releases lightning orbs in a fan shape, spreading as they travel.'
      },
      {
        level: 7,
        name: 'Shockwave',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Quickly discharges electricity, shocking those around it.'
      },
      {
        level: 15,
        name: 'Lightning Streak',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Generates a lightning bolt that moves forward in a line.'
      },
      {
        level: 22,
        name: 'Blast Punch',
        type: '',
        cooldown: 0,
        power: 85,
        description: 'Mossanda Lux\'s exclusive skill. Winds up its right arm before delivering an electrically charged punch.'
      },
      {
        level: 30,
        name: 'Tri-Lightning',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Generates lightning that strikes an enemy three times from above.'
      },
      {
        level: 40,
        name: 'Lightning Strike',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Acts as a lightning rod, calling down thunderbolts that electrocute the surrounding area.'
      },
      {
        level: 50,
        name: 'Lightning Bolt',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges electric energy before blasting enemies with a powerful shock.'
      },
    ],
    description: "",
    image: '/images/pals/Mossanda_Lux.webp',
  },
  {
    id: "34",
    key: '',
    name: 'Woolipop',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 15,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 22,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 30,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 40,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 50,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
    ],
    description: "",
    image: '/images/pals/Woolipop.webp',
  },
  {
    id: "35",
    key: '',
    name: 'Caprity',
    types: ["Grass"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 7,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 15,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 22,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 30,
        name: 'Grass Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 40,
        name: 'Spine Vine',
        type: '',
        cooldown: 0,
        power: 95,
        description: 'Generates spiny thorns that chase an enemy along the ground, piercing them from below.'
      },
      {
        level: 50,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Caprity.webp',
  },
  {
    id: "35B",
    key: '',
    name: 'Caprity Noct',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Poison Fog',
        type: '',
        cooldown: 0,
        power: 0,
        description: 'Generates a fog of poison in front, causing the opponent to become poisoned.'
      },
      {
        level: 7,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 15,
        name: 'Poison Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls poison sludge at an enemy.'
      },
      {
        level: 22,
        name: 'Multicutter',
        type: '',
        cooldown: 0,
        power: 60,
        description: 'The user fires three high-speed blades of wind in quick succession that fly straight at enemies.'
      },
      {
        level: 30,
        name: 'Poison Shower',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Focuses energy into the body and scatters poison orbs in all directions.'
      },
      {
        level: 40,
        name: 'Circle Vine',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Sprouts sharp roots in and around the enemy\'s location.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Caprity_Noct.webp',
  },
  {
    id: "36",
    key: '',
    name: 'Melpaca',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Fluffy Tackle',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Melpaca\'s exclusive skill. Charges forward while surrounded by an adorable aura.'
      },
      {
        level: 15,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 22,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 30,
        name: 'Shockwave',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Quickly discharges electricity, shocking those around it.'
      },
      {
        level: 40,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 50,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
    ],
    description: "",
    image: '/images/pals/Melpaca.webp',
  },
  {
    id: "37",
    key: '',
    name: 'Eikthyrdeer',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 7,
        name: 'Antler Uppercut',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Eikthyrdeer\'s exclusive skill. Charges at foes and uses antlers to launch them into the air. When used while riding, the direction of the charge can be controlled.'
      },
      {
        level: 15,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 22,
        name: 'Stone Cannon',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Digs up a boulder and hurls it at an enemy.'
      },
      {
        level: 30,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 40,
        name: 'Rock Lance',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Generates a sharp rock spear under an enemy.'
      },
      {
        level: 50,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
    ],
    description: "",
    image: '/images/pals/Eikthyrdeer.webp',
  },
  {
    id: "37B",
    key: '',
    name: 'Eikthyrdeer Terra',
    types: ["Ground"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 7,
        name: 'Antler Uppercut',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Eikthyrdeer\'s exclusive skill. Charges at foes and uses antlers to launch them into the air. When used while riding, the direction of the charge can be controlled.'
      },
      {
        level: 15,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 22,
        name: 'Stone Cannon',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Digs up a boulder and hurls it at an enemy.'
      },
      {
        level: 30,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 40,
        name: 'Sand Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two sand tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 50,
        name: 'Rock Lance',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Generates a sharp rock spear under an enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Eikthyrdeer_Terra.webp',
  },
  {
    id: "38",
    key: '',
    name: 'Nitewing',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Tornado Attack',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Nitewing\'s exclusive skill. Generates a tornado ahead before soaring towards its target.'
      },
      {
        level: 15,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 22,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 30,
        name: 'Sand Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two sand tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 40,
        name: 'Grass Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 50,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
    ],
    description: "",
    image: '/images/pals/Nitewing.webp',
  },
  {
    id: "39",
    key: '',
    name: 'Ribbuny',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 15,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 22,
        name: 'Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.'
      },
      {
        level: 30,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 40,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 50,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
    ],
    description: "",
    image: '/images/pals/Ribbuny.webp',
  },
  {
    id: "39B",
    key: '',
    name: 'Ribbuny Botan',
    types: ["Grass"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 7,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 15,
        name: 'Seed Machine Gun',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires a volley of hard seeds at enemies in front of it.'
      },
      {
        level: 22,
        name: 'Seed Mine',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Launches a deadly seed. If it hits an enemy, the seed explodes.'
      },
      {
        level: 30,
        name: 'Wind Edge',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Launches sharp blades of air that fan out.'
      },
      {
        level: 40,
        name: 'Circle Vine',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Sprouts sharp roots in and around the enemy\'s location.'
      },
      {
        level: 50,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Ribbuny_Botan.webp',
  },
  {
    id: "40",
    key: '',
    name: 'Incineram',
    types: ["Fire", "Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 7,
        name: 'Spirit Fire',
        type: '',
        cooldown: 0,
        power: 45,
        description: 'Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward.'
      },
      {
        level: 15,
        name: 'Flare Arrow',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires three flaming arrows in succession that home in on an enemy.'
      },
      {
        level: 22,
        name: 'Hellfire Claw',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Incineram\'s exclusive skill. Draws near enemies using its left claw to slash them into the air before cutting them down with its right claw.'
      },
      {
        level: 30,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 40,
        name: 'Fire Ball',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact.'
      },
      {
        level: 50,
        name: 'Ignis Rage',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Infuses the surrounding ground with energy, causing it to explode after a set amount of time.'
      },
    ],
    description: "",
    image: '/images/pals/Incineram.webp',
  },
  {
    id: "40B",
    key: '',
    name: 'Incineram Noct',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 7,
        name: 'Spirit Fire',
        type: '',
        cooldown: 0,
        power: 45,
        description: 'Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward.'
      },
      {
        level: 15,
        name: 'Flare Arrow',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires three flaming arrows in succession that home in on an enemy.'
      },
      {
        level: 22,
        name: 'Hellfire Claw',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Incineram\'s exclusive skill. Draws near enemies using its left claw to slash them into the air before cutting them down with its right claw.'
      },
      {
        level: 30,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 40,
        name: 'Fire Ball',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact.'
      },
      {
        level: 50,
        name: 'Ignis Rage',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Infuses the surrounding ground with energy, causing it to explode after a set amount of time.'
      },
    ],
    description: "",
    image: '/images/pals/Incineram_Noct.webp',
  },
  {
    id: "41",
    key: '',
    name: 'Cinnamoth',
    types: ["Grass"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 15,
        name: 'Poison Fog',
        type: '',
        cooldown: 0,
        power: 0,
        description: 'Generates a fog of poison in front, causing the opponent to become poisoned.'
      },
      {
        level: 22,
        name: 'Sand Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two sand tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 30,
        name: 'Seed Mine',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Launches a deadly seed. If it hits an enemy, the seed explodes.'
      },
      {
        level: 40,
        name: 'Grass Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 50,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Cinnamoth.webp',
  },
  {
    id: "42",
    key: '',
    name: 'Arsox',
    types: ["Fire"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 7,
        name: 'Blazing Horn',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Arsox\'s exclusive skill. Takes aim and charges with fierce momentum while raising its horn.'
      },
      {
        level: 15,
        name: 'Spirit Fire',
        type: '',
        cooldown: 0,
        power: 45,
        description: 'Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward.'
      },
      {
        level: 22,
        name: 'Flare Arrow',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires three flaming arrows in succession that home in on an enemy.'
      },
      {
        level: 30,
        name: 'Ignis Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Shoots flames at an enemy, dealing continuous damage.'
      },
      {
        level: 40,
        name: 'Ignis Rage',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Infuses the surrounding ground with energy, causing it to explode after a set amount of time.'
      },
      {
        level: 50,
        name: 'Fire Ball',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact.'
      },
    ],
    description: "",
    image: '/images/pals/Arsox.webp',
  },
  {
    id: "43",
    key: '',
    name: 'Dumud',
    types: ["Ground", "Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 7,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 15,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 22,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 30,
        name: 'Aqua Burst',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of water and hurls it at an enemy.'
      },
      {
        level: 40,
        name: 'Rock Lance',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Generates a sharp rock spear under an enemy.'
      },
      {
        level: 50,
        name: 'Hydro Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it.'
      },
    ],
    description: "",
    image: '/images/pals/Dumud.webp',
  },
  {
    id: "43B",
    key: '',
    name: 'Dumud Gild',
    types: ["Ground", "Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 7,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 15,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 22,
        name: 'Sand Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two sand tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 30,
        name: 'Torrential Blast',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Fires a high-pressure stream of water forward. After a short delay, the stream branches off to the left and right.'
      },
      {
        level: 40,
        name: 'Rockburst',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Causes the ground to shake before hurling a massive stone mass at its surroundings.'
      },
      {
        level: 50,
        name: 'Sand Twister',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Creates multiple sand tornadoes. The tornadoes continuously spin in circles.'
      },
    ],
    description: "",
    image: '/images/pals/Dumud_Gild.webp',
  },
  {
    id: "44",
    key: '',
    name: 'Cawgnito',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Dark Ball',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Unleashes a sphere of darkness that slowly tracks down an enemy.'
      },
      {
        level: 15,
        name: 'Phantom Peck',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Cawgnito\'s exclusive skill. Teleports next to an enemy before attacking with its beak.'
      },
      {
        level: 22,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 30,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 40,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Cawgnito.webp',
  },
  {
    id: "45",
    key: '',
    name: 'Leezpunk',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Poison Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls poison sludge at an enemy.'
      },
      {
        level: 7,
        name: 'Dark Ball',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Unleashes a sphere of darkness that slowly tracks down an enemy.'
      },
      {
        level: 15,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 22,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 30,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 40,
        name: 'Ignis Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Shoots flames at an enemy, dealing continuous damage.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Leezpunk.webp',
  },
  {
    id: "45B",
    key: '',
    name: 'Leezpunk Ignis',
    types: ["Fire"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 7,
        name: 'Poison Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls poison sludge at an enemy.'
      },
      {
        level: 15,
        name: 'Spirit Fire',
        type: '',
        cooldown: 0,
        power: 45,
        description: 'Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward.'
      },
      {
        level: 22,
        name: 'Ignis Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Shoots flames at an enemy, dealing continuous damage.'
      },
      {
        level: 30,
        name: 'Flare Storm',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two flaming tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 40,
        name: 'Ignis Rage',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Infuses the surrounding ground with energy, causing it to explode after a set amount of time.'
      },
      {
        level: 50,
        name: 'Fire Ball',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact.'
      },
    ],
    description: "",
    image: '/images/pals/Leezpunk_Ignis.webp',
  },
  {
    id: "46",
    key: '',
    name: 'Loupmoon',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Dark Ball',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Unleashes a sphere of darkness that slowly tracks down an enemy.'
      },
      {
        level: 7,
        name: 'Jumping Claw',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Loupmoon\'s exclusive skill. Leaps forward and attacks twice with vicious claws imbued with dark energy.'
      },
      {
        level: 15,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 22,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 30,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 40,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Loupmoon.webp',
  },
  {
    id: "46B",
    key: '',
    name: 'Loupmoon Cryst',
    types: ["Ice"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 7,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 15,
        name: 'Snow Claw',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Loupmoon Cryst\'s exclusive skill. Leaps forward and attacks twice with vicious claws imbued with ice element.'
      },
      {
        level: 22,
        name: 'Freeze Wall',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a wall of ice that rises from the ground. The ice wall remains standing for a while, and breaks after taking enough damage.'
      },
      {
        level: 30,
        name: 'Icicle Bullet',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Generates multiple sharp ice blocks in the sky and fires them at the enemy.'
      },
      {
        level: 40,
        name: 'Icicle Line',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Generates pillars of ice that move in a straight line in three directions.'
      },
      {
        level: 50,
        name: 'Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.'
      },
    ],
    description: "",
    image: '/images/pals/Loupmoon_Cryst.webp',
  },
  {
    id: "47",
    key: '',
    name: 'Galeclaw',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Gale Claw',
        type: '',
        cooldown: 0,
        power: 60,
        description: 'Galeclaw\'s exclusive skill. With talons outstretched, it glides forward in a ferocious charge.'
      },
      {
        level: 7,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 15,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 22,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 30,
        name: 'Sand Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two sand tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 40,
        name: 'Grass Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 50,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
    ],
    description: "",
    image: '/images/pals/Galeclaw.webp',
  },
  {
    id: "48",
    key: '',
    name: 'Robinquill',
    types: ["Grass"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 7,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 15,
        name: 'Focus Shot',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Robinquill\'s exclusive skill. Takes aim while drawing its bow before releasing a powerful shot at an enemy.'
      },
      {
        level: 22,
        name: 'Seed Mine',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Launches a deadly seed. If it hits an enemy, the seed explodes.'
      },
      {
        level: 30,
        name: 'Grass Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 40,
        name: 'Spine Vine',
        type: '',
        cooldown: 0,
        power: 95,
        description: 'Generates spiny thorns that chase an enemy along the ground, piercing them from below.'
      },
      {
        level: 50,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Robinquill.webp',
  },
  {
    id: "48B",
    key: '',
    name: 'Robinquill Terra',
    types: ["Grass", "Ground"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 7,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 15,
        name: 'Focus Shot',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Robinquill\'s exclusive skill. Takes aim while drawing its bow before releasing a powerful shot at an enemy.'
      },
      {
        level: 22,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 30,
        name: 'Sand Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two sand tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 40,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
      {
        level: 50,
        name: 'Rock Lance',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Generates a sharp rock spear under an enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Robinquill_Terra.webp',
  },
  {
    id: "49",
    key: '',
    name: 'Gorirat',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 7,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 15,
        name: 'Ground Pound',
        type: '',
        cooldown: 0,
        power: 85,
        description: 'Gorirat\'s exclusive skill. Pounds the ground twice before leaping into the air and delivers a powerful punch.'
      },
      {
        level: 22,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 30,
        name: 'Seed Machine Gun',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires a volley of hard seeds at enemies in front of it.'
      },
      {
        level: 40,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 50,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
    ],
    description: "",
    image: '/images/pals/Gorirat.webp',
  },
  {
    id: "49B",
    key: '',
    name: 'Gorirat Terra',
    types: ["Ground"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 7,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 15,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 22,
        name: 'Stone Cannon',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Digs up a boulder and hurls it at an enemy.'
      },
      {
        level: 30,
        name: 'Ground Pound',
        type: '',
        cooldown: 0,
        power: 85,
        description: 'Gorirat\'s exclusive skill. Pounds the ground twice before leaping into the air and delivers a powerful punch.'
      },
      {
        level: 40,
        name: 'Rockburst',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Causes the ground to shake before hurling a massive stone mass at its surroundings.'
      },
      {
        level: 50,
        name: 'Rock Lance',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Generates a sharp rock spear under an enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Gorirat_Terra.webp',
  },
  {
    id: "50",
    key: '',
    name: 'Beegarde',
    types: ["Grass"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 11,
        name: 'Needle Spear',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Beegarde\'s exclusive skill. Charges at the enemy at high speed, delivering a final thrust with a spear.'
      },
      {
        level: 15,
        name: 'Bee Quiet',
        type: '',
        cooldown: 0,
        power: 250,
        description: 'Risks its life to cause a violent explosion, but receives the honor of falling in battle.'
      },
      {
        level: 22,
        name: 'Poison Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls poison sludge at an enemy.'
      },
      {
        level: 30,
        name: 'Acid Rain',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Creates acidic clouds that pour down acid rain on enemies.'
      },
      {
        level: 40,
        name: 'Grass Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 50,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Beegarde.webp',
  },
  {
    id: "51",
    key: '',
    name: 'Elizabee',
    types: ["Grass"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 15,
        name: 'Poison Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls poison sludge at an enemy.'
      },
      {
        level: 22,
        name: 'Spinning Staff',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Elizabee\'s exclusive skill. Channels power into its staff, and unleashes it in a whirl.'
      },
      {
        level: 30,
        name: 'Grass Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 40,
        name: 'Spine Vine',
        type: '',
        cooldown: 0,
        power: 95,
        description: 'Generates spiny thorns that chase an enemy along the ground, piercing them from below.'
      },
      {
        level: 50,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Elizabee.webp',
  },
  {
    id: "52",
    key: '',
    name: 'Grintale',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 7,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 15,
        name: 'Cat Press',
        type: '',
        cooldown: 0,
        power: 60,
        description: 'Grintale\'s exclusive skill. Grins menacingly before leaping into the air and smashing foes with its body.'
      },
      {
        level: 22,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 30,
        name: 'Stone Cannon',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Digs up a boulder and hurls it at an enemy.'
      },
      {
        level: 40,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 50,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
    ],
    description: "",
    image: '/images/pals/Grintale.webp',
  },
  {
    id: "53",
    key: '',
    name: 'Swee',
    types: ["Ice"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 15,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 22,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 30,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 40,
        name: 'Crystal Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Enshrouds an enemy in a frigid blast of air, dealing continuous damage.'
      },
      {
        level: 50,
        name: 'Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.'
      },
    ],
    description: "",
    image: '/images/pals/Swee.webp',
  },
  {
    id: "54",
    key: '',
    name: 'Sweepa',
    types: ["Ice"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 7,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 15,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 22,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 30,
        name: 'Crystal Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Enshrouds an enemy in a frigid blast of air, dealing continuous damage.'
      },
      {
        level: 40,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
      {
        level: 50,
        name: 'Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.'
      },
    ],
    description: "",
    image: '/images/pals/Sweepa.webp',
  },
  {
    id: "55",
    key: '',
    name: 'Chillet',
    types: ["Ice", "Dragon"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 7,
        name: 'Dragon Cannon',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls an energy ball imbued with draconic energy at an enemy.'
      },
      {
        level: 11,
        name: 'Rocket Slam',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Chillet\'s exclusive skill. Gathers a bit of strength and leaps forward. Always shuts its eyes tight in fear when landing.'
      },
      {
        level: 15,
        name: 'Dragon Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges draconic energy, damaging those around it.'
      },
      {
        level: 22,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 30,
        name: 'Draconic Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it.'
      },
      {
        level: 40,
        name: 'Crystal Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Enshrouds an enemy in a frigid blast of air, dealing continuous damage.'
      },
      {
        level: 50,
        name: 'Dragon Meteor',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Summons numerous small meteorites and launches them at an enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Chillet.webp',
  },
  {
    id: "55B",
    key: '',
    name: 'Chillet Ignis',
    types: ["Fire", "Dragon"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 7,
        name: 'Dragon Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges draconic energy, damaging those around it.'
      },
      {
        level: 15,
        name: 'Flare Arrow',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires three flaming arrows in succession that home in on an enemy.'
      },
      {
        level: 22,
        name: 'Ignis Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Shoots flames at an enemy, dealing continuous damage.'
      },
      {
        level: 30,
        name: 'Rocket Slam',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Chillet\'s exclusive skill. Gathers a bit of strength and leaps forward. Always shuts its eyes tight in fear when landing.'
      },
      {
        level: 40,
        name: 'Flame Wall',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a wall of flames at the enemy\'s location. The wall of flames will remain for a while, and deal damage to the enemies it touches.'
      },
      {
        level: 50,
        name: 'Fire Ball',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact.'
      },
    ],
    description: "",
    image: '/images/pals/Chillet_Ignis.webp',
  },
  {
    id: "56",
    key: '',
    name: 'Univolt',
    types: ["Electric"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Spark Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Releases lightning orbs in a fan shape, spreading as they travel.'
      },
      {
        level: 7,
        name: 'Shockwave',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Quickly discharges electricity, shocking those around it.'
      },
      {
        level: 11,
        name: 'Lightning Gale',
        type: '',
        cooldown: 0,
        power: 60,
        description: 'Univolt\'s exclusive skill. Generates bolts of lightning all around while charging at its target.'
      },
      {
        level: 15,
        name: 'Lock-on Laser',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Takes aim at an enemy before firing a super high speed laser.'
      },
      {
        level: 22,
        name: 'Lightning Streak',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Generates a lightning bolt that moves forward in a line.'
      },
      {
        level: 30,
        name: 'Tri-Lightning',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Generates lightning that strikes an enemy three times from above.'
      },
      {
        level: 40,
        name: 'Lightning Strike',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Acts as a lightning rod, calling down thunderbolts that electrocute the surrounding area.'
      },
      {
        level: 50,
        name: 'Lightning Bolt',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges electric energy before blasting enemies with a powerful shock.'
      },
    ],
    description: "",
    image: '/images/pals/Univolt.webp',
  },
  {
    id: "57",
    key: '',
    name: 'Foxcicle',
    types: ["Ice"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 15,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 22,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 30,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 40,
        name: 'Crystal Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Enshrouds an enemy in a frigid blast of air, dealing continuous damage.'
      },
      {
        level: 50,
        name: 'Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.'
      },
    ],
    description: "",
    image: '/images/pals/Foxcicle.webp',
  },
  {
    id: "58",
    key: '',
    name: 'Pyrin',
    types: ["Fire"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 7,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 15,
        name: 'Spirit Fire',
        type: '',
        cooldown: 0,
        power: 45,
        description: 'Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward.'
      },
      {
        level: 22,
        name: 'Flare Arrow',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires three flaming arrows in succession that home in on an enemy.'
      },
      {
        level: 30,
        name: 'Ignis Charge',
        type: '',
        cooldown: 0,
        power: 85,
        description: 'Pyrin\'s exclusive skill. Charges forward while engulfed in a veil of flames. Flames continue to burn in its path.'
      },
      {
        level: 40,
        name: 'Ignis Rage',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Infuses the surrounding ground with energy, causing it to explode after a set amount of time.'
      },
      {
        level: 50,
        name: 'Fire Ball',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact.'
      },
    ],
    description: "",
    image: '/images/pals/Pyrin.webp',
  },
  {
    id: "58B",
    key: '',
    name: 'Pyrin Noct',
    types: ["Fire", "Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 7,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 15,
        name: 'Ignis Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Shoots flames at an enemy, dealing continuous damage.'
      },
      {
        level: 22,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 30,
        name: 'Dark Charge',
        type: '',
        cooldown: 0,
        power: 85,
        description: 'Pyrin Noct\'s exclusive skill. Charges forward while engulfed in a veil of dark flames. Flames continue to burn in its path.'
      },
      {
        level: 40,
        name: 'Ignis Rage',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Infuses the surrounding ground with energy, causing it to explode after a set amount of time.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Pyrin_Noct.webp',
  },
  {
    id: "59",
    key: '',
    name: 'Reindrix',
    types: ["Ice"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 15,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 22,
        name: 'Freezing Charge',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Reindrix\'s exclusive skill. Charges at an enemy with antlers adorned in ice.'
      },
      {
        level: 30,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 40,
        name: 'Crystal Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Enshrouds an enemy in a frigid blast of air, dealing continuous damage.'
      },
      {
        level: 50,
        name: 'Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.'
      },
    ],
    description: "",
    image: '/images/pals/Reindrix.webp',
  },
  {
    id: "60",
    key: '',
    name: 'Rayhound',
    types: ["Electric"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 7,
        name: 'Shockwave',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Quickly discharges electricity, shocking those around it.'
      },
      {
        level: 15,
        name: 'Spark Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Releases lightning orbs in a fan shape, spreading as they travel.'
      },
      {
        level: 22,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 26,
        name: 'Beckon Lightning',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Rayhound\'s exclusive skill. Summons lightning one after another in front, then charges forward at high speed through the gaps between the falling bolts.'
      },
      {
        level: 30,
        name: 'Electric Ball',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires an electric ball that slowly pursues an enemy.'
      },
      {
        level: 40,
        name: 'Lightning Streak',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Generates a lightning bolt that moves forward in a line.'
      },
      {
        level: 50,
        name: 'Lightning Bolt',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges electric energy before blasting enemies with a powerful shock.'
      },
    ],
    description: "",
    image: '/images/pals/Rayhound.webp',
  },
  {
    id: "61",
    key: '',
    name: 'Kitsun',
    types: ["Fire"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 7,
        name: 'Spirit Fire',
        type: '',
        cooldown: 0,
        power: 45,
        description: 'Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward.'
      },
      {
        level: 15,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 22,
        name: 'Daring Flames',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Kitsun\'s exclusive skill. Charges forward with great speed while enveloped in intense blue flames.'
      },
      {
        level: 30,
        name: 'Flare Storm',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two flaming tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 40,
        name: 'Ignis Rage',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Infuses the surrounding ground with energy, causing it to explode after a set amount of time.'
      },
      {
        level: 50,
        name: 'Fire Ball',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact.'
      },
    ],
    description: "",
    image: '/images/pals/Kitsun.webp',
  },
  {
    id: "61B",
    key: '',
    name: 'Kitsun Noct',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Dark Cannon',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Hurls an energy ball imbued with dark energy at an enemy.'
      },
      {
        level: 7,
        name: 'Spirit Fire',
        type: '',
        cooldown: 0,
        power: 45,
        description: 'Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward.'
      },
      {
        level: 15,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 22,
        name: 'Daring Shadowstorm',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Kitsun Noct\'s exclusive skill. Charges forward with great speed while enveloped in intense purple flames.'
      },
      {
        level: 30,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 40,
        name: 'Flame Funnel',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Creates multiple spheres of fiery energy, from which countless fireballs shoot towards the enemy.'
      },
      {
        level: 50,
        name: 'Dark Whisp',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Fires a menacing ball of dark energy that pursues enemies.'
      },
    ],
    description: "",
    image: '/images/pals/Kitsun_Noct.webp',
  },
  {
    id: "62",
    key: '',
    name: 'Dazzi',
    types: ["Electric"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Shockwave',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Quickly discharges electricity, shocking those around it.'
      },
      {
        level: 15,
        name: 'Acid Rain',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Creates acidic clouds that pour down acid rain on enemies.'
      },
      {
        level: 22,
        name: 'Lightning Streak',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Generates a lightning bolt that moves forward in a line.'
      },
      {
        level: 30,
        name: 'Tri-Lightning',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Generates lightning that strikes an enemy three times from above.'
      },
      {
        level: 40,
        name: 'Lightning Strike',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Acts as a lightning rod, calling down thunderbolts that electrocute the surrounding area.'
      },
      {
        level: 50,
        name: 'Lightning Bolt',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges electric energy before blasting enemies with a powerful shock.'
      },
    ],
    description: "",
    image: '/images/pals/Dazzi.webp',
  },
  {
    id: "62B",
    key: '',
    name: 'Dazzi Noct',
    types: ["Dark", "Electric"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 15,
        name: 'Dark Arrow',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires off dark energy that homes in on an enemy.'
      },
      {
        level: 22,
        name: 'Acid Rain',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Creates acidic clouds that pour down acid rain on enemies.'
      },
      {
        level: 30,
        name: 'Tri-Lightning',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Generates lightning that strikes an enemy three times from above.'
      },
      {
        level: 40,
        name: 'Apocalypse',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Generates several dark vortexes around the enemy.'
      },
      {
        level: 50,
        name: 'Thunder Rain',
        type: '',
        cooldown: 0,
        power: 135,
        description: 'Calls lightning that strikes an enemy after a set amount of time has passed.'
      },
    ],
    description: "",
    image: '/images/pals/Dazzi_Noct.webp',
  },
  {
    id: "63",
    key: '',
    name: 'Lunaris',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 15,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 22,
        name: 'Plasma Funnel',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Creates two balls of electric energy that fire numerous lightning orbs at enemies.'
      },
      {
        level: 30,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 40,
        name: 'Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.'
      },
      {
        level: 50,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
    ],
    description: "",
    image: '/images/pals/Lunaris.webp',
  },
  {
    id: "64",
    key: '',
    name: 'Dinossom',
    types: ["Grass", "Dragon"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 7,
        name: 'Botanical Smash',
        type: '',
        cooldown: 0,
        power: 60,
        description: 'Dinossom\'s exclusive skill. Uses its large tail to strike the ground in front of it, delivering a shockwave in a straight line.'
      },
      {
        level: 15,
        name: 'Dragon Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges draconic energy, damaging those around it.'
      },
      {
        level: 22,
        name: 'Seed Mine',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Launches a deadly seed. If it hits an enemy, the seed explodes.'
      },
      {
        level: 30,
        name: 'Draconic Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it.'
      },
      {
        level: 40,
        name: 'Spine Vine',
        type: '',
        cooldown: 0,
        power: 95,
        description: 'Generates spiny thorns that chase an enemy along the ground, piercing them from below.'
      },
      {
        level: 50,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Dinossom.webp',
  },
  {
    id: "64B",
    key: '',
    name: 'Dinossom Lux',
    types: ["Electric", "Dragon"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Shockwave',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Quickly discharges electricity, shocking those around it.'
      },
      {
        level: 7,
        name: 'Plasma Funnel',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Creates two balls of electric energy that fire numerous lightning orbs at enemies.'
      },
      {
        level: 15,
        name: 'Botanical Smash',
        type: '',
        cooldown: 0,
        power: 60,
        description: 'Dinossom\'s exclusive skill. Uses its large tail to strike the ground in front of it, delivering a shockwave in a straight line.'
      },
      {
        level: 22,
        name: 'Draconic Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it.'
      },
      {
        level: 30,
        name: 'Tri-Lightning',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Generates lightning that strikes an enemy three times from above.'
      },
      {
        level: 40,
        name: 'Lightning Strike',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Acts as a lightning rod, calling down thunderbolts that electrocute the surrounding area.'
      },
      {
        level: 50,
        name: 'Lightning Bolt',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges electric energy before blasting enemies with a powerful shock.'
      },
    ],
    description: "",
    image: '/images/pals/Dinossom_Lux.webp',
  },
  {
    id: "65",
    key: '',
    name: 'Surfent',
    types: ["Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Hydro Jet',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a high speed ball of water at an enemy.'
      },
      {
        level: 7,
        name: 'Dragon Cannon',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls an energy ball imbued with draconic energy at an enemy.'
      },
      {
        level: 15,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 22,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 30,
        name: 'Dragon Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges draconic energy, damaging those around it.'
      },
      {
        level: 40,
        name: 'Draconic Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it.'
      },
      {
        level: 50,
        name: 'Hydro Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it.'
      },
    ],
    description: "",
    image: '/images/pals/Surfent.webp',
  },
  {
    id: "65B",
    key: '',
    name: 'Surfent Terra',
    types: ["Ground"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 7,
        name: 'Dragon Cannon',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls an energy ball imbued with draconic energy at an enemy.'
      },
      {
        level: 15,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 22,
        name: 'Stone Cannon',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Digs up a boulder and hurls it at an enemy.'
      },
      {
        level: 30,
        name: 'Sand Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two sand tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 40,
        name: 'Draconic Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it.'
      },
      {
        level: 50,
        name: 'Rock Lance',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Generates a sharp rock spear under an enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Surfent_Terra.webp',
  },
  {
    id: "66",
    key: '',
    name: 'Maraith',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 7,
        name: 'Dark Ball',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Unleashes a sphere of darkness that slowly tracks down an enemy.'
      },
      {
        level: 15,
        name: 'Flare Arrow',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires three flaming arrows in succession that home in on an enemy.'
      },
      {
        level: 22,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 30,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 35,
        name: 'Spirit Dash',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Maraith\'s exclusive skill. While running slowly, it continuously launches flickering fireballs toward the enemy.'
      },
      {
        level: 40,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Maraith.webp',
  },
  {
    id: "67",
    key: '',
    name: 'Digtoise',
    types: ["Ground"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 7,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 15,
        name: 'Shell Spin',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Digtoise\'s exclusive skill. Moves while spinning its whole body at high speed. Drills through enemies, dealing continuous damage.'
      },
      {
        level: 22,
        name: 'Stone Cannon',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Digs up a boulder and hurls it at an enemy.'
      },
      {
        level: 30,
        name: 'Sand Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two sand tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 40,
        name: 'Aqua Burst',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of water and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Rock Lance',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Generates a sharp rock spear under an enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Digtoise.webp',
  },
  {
    id: "68",
    key: '',
    name: 'Tombat',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Poison Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls poison sludge at an enemy.'
      },
      {
        level: 15,
        name: 'Dark Ball',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Unleashes a sphere of darkness that slowly tracks down an enemy.'
      },
      {
        level: 22,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 30,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 40,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Tombat.webp',
  },
  {
    id: "69",
    key: '',
    name: 'Lovander',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 7,
        name: 'Poison Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls poison sludge at an enemy.'
      },
      {
        level: 15,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 22,
        name: 'Acid Rain',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Creates acidic clouds that pour down acid rain on enemies.'
      },
      {
        level: 30,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 40,
        name: 'Implode',
        type: '',
        cooldown: 0,
        power: 230,
        description: 'Risks its life to cause a violent explosion. Becomes incapacitated afterwards.'
      },
      {
        level: 50,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
    ],
    description: "",
    image: '/images/pals/Lovander.webp',
  },
  {
    id: "70",
    key: '',
    name: 'Flambelle',
    types: ["Fire"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 7,
        name: 'Spirit Fire',
        type: '',
        cooldown: 0,
        power: 45,
        description: 'Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward.'
      },
      {
        level: 15,
        name: 'Flare Arrow',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires three flaming arrows in succession that home in on an enemy.'
      },
      {
        level: 22,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 30,
        name: 'Flare Storm',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two flaming tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 40,
        name: 'Ignis Rage',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Infuses the surrounding ground with energy, causing it to explode after a set amount of time.'
      },
      {
        level: 50,
        name: 'Fire Ball',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact.'
      },
    ],
    description: "",
    image: '/images/pals/Flambelle.webp',
  },
  {
    id: "71",
    key: '',
    name: 'Vanwyrm',
    types: ["Fire", "Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 15,
        name: 'Spirit Fire',
        type: '',
        cooldown: 0,
        power: 45,
        description: 'Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward.'
      },
      {
        level: 22,
        name: 'Ignis Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Shoots flames at an enemy, dealing continuous damage.'
      },
      {
        level: 26,
        name: 'Flame Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Vanwyrms exclusive skill. Advances while breathing fire from its mouth.'
      },
      {
        level: 30,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 40,
        name: 'Fire Ball',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Vanwyrm.webp',
  },
  {
    id: "71B",
    key: '',
    name: 'Vanwyrm Cryst',
    types: ["Ice", "Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 15,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 22,
        name: 'Crystal Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Enshrouds an enemy in a frigid blast of air, dealing continuous damage.'
      },
      {
        level: 26,
        name: 'Tempest Blizzard',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Vanwyrm Cryst\'s exclusive skill. Advances while exhaling cold air from its mouth.'
      },
      {
        level: 30,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 40,
        name: 'Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Vanwyrm_Cryst.webp',
  },
  {
    id: "72",
    key: '',
    name: 'Bushi',
    types: ["Fire"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 7,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 15,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 22,
        name: 'Iaigiri',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Bushi\'s exclusive skill. Taking hold of the sword, it appears in front of an enemy in an instant and unleashes an ultra-fast sword draw attack.'
      },
      {
        level: 30,
        name: 'Ignis Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Shoots flames at an enemy, dealing continuous damage.'
      },
      {
        level: 40,
        name: 'Lightning Strike',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Acts as a lightning rod, calling down thunderbolts that electrocute the surrounding area.'
      },
      {
        level: 50,
        name: 'Ignis Rage',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Infuses the surrounding ground with energy, causing it to explode after a set amount of time.'
      },
    ],
    description: "",
    image: '/images/pals/Bushi.webp',
  },
  {
    id: "72B",
    key: '',
    name: 'Bushi Noct',
    types: ["Fire", "Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Spirit Fire',
        type: '',
        cooldown: 0,
        power: 45,
        description: 'Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward.'
      },
      {
        level: 7,
        name: 'Umbral Surge',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Fires high-speed dark orbs in a fan shape, spreading as they travel.'
      },
      {
        level: 15,
        name: 'Dark Cannon',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Hurls an energy ball imbued with dark energy at an enemy.'
      },
      {
        level: 18,
        name: 'Iaigiri',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Bushi\'s exclusive skill. Taking hold of the sword, it appears in front of an enemy in an instant and unleashes an ultra-fast sword draw attack.'
      },
      {
        level: 22,
        name: 'Dark Arrow',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires off dark energy that homes in on an enemy.'
      },
      {
        level: 30,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 40,
        name: 'Flame Wall',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a wall of flames at the enemy\'s location. The wall of flames will remain for a while, and deal damage to the enemies it touches.'
      },
      {
        level: 50,
        name: 'Apocalypse',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Generates several dark vortexes around the enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Bushi_Noct.webp',
  },
  {
    id: "73",
    key: '',
    name: 'Beakon',
    types: ["Electric"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Spark Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Releases lightning orbs in a fan shape, spreading as they travel.'
      },
      {
        level: 15,
        name: 'Shockwave',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Quickly discharges electricity, shocking those around it.'
      },
      {
        level: 22,
        name: 'Lightning Streak',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Generates a lightning bolt that moves forward in a line.'
      },
      {
        level: 26,
        name: 'Lightning Dive',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Beakon\'s exclusive skill. First, it strikes the enemy\'s location with lightning. Then, while gliding forward, it drops lightning to the left and right.'
      },
      {
        level: 30,
        name: 'Tri-Lightning',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Generates lightning that strikes an enemy three times from above.'
      },
      {
        level: 40,
        name: 'Sand Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two sand tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 50,
        name: 'Lightning Bolt',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges electric energy before blasting enemies with a powerful shock.'
      },
    ],
    description: "",
    image: '/images/pals/Beakon.webp',
  },
  {
    id: "74",
    key: '',
    name: 'Ragnahawk',
    types: ["Fire"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Spirit Fire',
        type: '',
        cooldown: 0,
        power: 45,
        description: 'Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward.'
      },
      {
        level: 15,
        name: 'Flare Arrow',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires three flaming arrows in succession that home in on an enemy.'
      },
      {
        level: 22,
        name: 'Sand Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two sand tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 26,
        name: 'Rush Beak',
        type: '',
        cooldown: 0,
        power: 85,
        description: 'Ragnahawk\'s exclusive skill. While flapping forward, it strikes with its beak to ignite fires in front, right, and left, causing a small explosion.'
      },
      {
        level: 30,
        name: 'Flare Storm',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two flaming tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 40,
        name: 'Ignis Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Shoots flames at an enemy, dealing continuous damage.'
      },
      {
        level: 50,
        name: 'Fire Ball',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact.'
      },
    ],
    description: "",
    image: '/images/pals/Ragnahawk.webp',
  },
  {
    id: "75",
    key: '',
    name: 'Katress',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 7,
        name: 'Dark Ball',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Unleashes a sphere of darkness that slowly tracks down an enemy.'
      },
      {
        level: 15,
        name: 'Flare Arrow',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires three flaming arrows in succession that home in on an enemy.'
      },
      {
        level: 22,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 30,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 40,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Katress.webp',
  },
  {
    id: "75B",
    key: '',
    name: 'Katress Ignis',
    types: ["Dark", "Fire"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 7,
        name: 'Dark Cannon',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Hurls an energy ball imbued with dark energy at an enemy.'
      },
      {
        level: 15,
        name: 'Flare Arrow',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires three flaming arrows in succession that home in on an enemy.'
      },
      {
        level: 22,
        name: 'Flare Storm',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two flaming tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 30,
        name: 'Flame Wall',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a wall of flames at the enemy\'s location. The wall of flames will remain for a while, and deal damage to the enemies it touches.'
      },
      {
        level: 40,
        name: 'Flame Funnel',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Creates multiple spheres of fiery energy, from which countless fireballs shoot towards the enemy.'
      },
      {
        level: 50,
        name: 'Fire Ball',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact.'
      },
    ],
    description: "",
    image: '/images/pals/Katress_Ignis.webp',
  },
  {
    id: "76",
    key: '',
    name: 'Wixen',
    types: ["Fire"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 7,
        name: 'Spirit Fire',
        type: '',
        cooldown: 0,
        power: 45,
        description: 'Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward.'
      },
      {
        level: 15,
        name: 'Flare Arrow',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires three flaming arrows in succession that home in on an enemy.'
      },
      {
        level: 22,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 30,
        name: 'Flare Storm',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two flaming tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 40,
        name: 'Fire Ball',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact.'
      },
      {
        level: 50,
        name: 'Dragon Meteor',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Summons numerous small meteorites and launches them at an enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Wixen.webp',
  },
  {
    id: "76B",
    key: '',
    name: 'Wixen Noct',
    types: ["Fire", "Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Umbral Surge',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Fires high-speed dark orbs in a fan shape, spreading as they travel.'
      },
      {
        level: 7,
        name: 'Dark Cannon',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Hurls an energy ball imbued with dark energy at an enemy.'
      },
      {
        level: 15,
        name: 'Dark Arrow',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires off dark energy that homes in on an enemy.'
      },
      {
        level: 22,
        name: 'Flare Storm',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two flaming tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 30,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 40,
        name: 'Flame Wall',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a wall of flames at the enemy\'s location. The wall of flames will remain for a while, and deal damage to the enemies it touches.'
      },
      {
        level: 50,
        name: 'Apocalypse',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Generates several dark vortexes around the enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Wixen_Noct.webp',
  },
  {
    id: "77",
    key: '',
    name: 'Verdash',
    types: ["Grass"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 7,
        name: 'Stone Cannon',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Digs up a boulder and hurls it at an enemy.'
      },
      {
        level: 15,
        name: 'Seed Machine Gun',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires a volley of hard seeds at enemies in front of it.'
      },
      {
        level: 22,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 30,
        name: 'Grass Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 35,
        name: 'Leaping Roundhouse',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Verdash\'s exclusive skill. While jumping forward, it sweeps the surroundings with a high-speed spinning kick.'
      },
      {
        level: 40,
        name: 'Spine Vine',
        type: '',
        cooldown: 0,
        power: 95,
        description: 'Generates spiny thorns that chase an enemy along the ground, piercing them from below.'
      },
      {
        level: 50,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Verdash.webp',
  },
  {
    id: "78",
    key: '',
    name: 'Vaelet',
    types: ["Grass"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Poison Fog',
        type: '',
        cooldown: 0,
        power: 0,
        description: 'Generates a fog of poison in front, causing the opponent to become poisoned.'
      },
      {
        level: 7,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 15,
        name: 'Poison Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls poison sludge at an enemy.'
      },
      {
        level: 22,
        name: 'Seed Mine',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Launches a deadly seed. If it hits an enemy, the seed explodes.'
      },
      {
        level: 30,
        name: 'Grass Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 40,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Vaelet.webp',
  },
  {
    id: "79",
    key: '',
    name: 'Sibelyx',
    types: ["Ice"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 7,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 15,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 22,
        name: 'Crystal Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Enshrouds an enemy in a frigid blast of air, dealing continuous damage.'
      },
      {
        level: 30,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 40,
        name: 'Aqua Burst',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of water and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.'
      },
    ],
    description: "",
    image: '/images/pals/Sibelyx.webp',
  },
  {
    id: "80",
    key: '',
    name: 'Elphidran',
    types: ["Dragon"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Dragon Cannon',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls an energy ball imbued with draconic energy at an enemy.'
      },
      {
        level: 7,
        name: 'Dragon Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges draconic energy, damaging those around it.'
      },
      {
        level: 15,
        name: 'Flare Arrow',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires three flaming arrows in succession that home in on an enemy.'
      },
      {
        level: 22,
        name: 'Mystic Whirlwind',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Elphidran\'s exclusive skill. Generates twin whirlwinds imbued with a mysterious power that pursues enemies.'
      },
      {
        level: 30,
        name: 'Draconic Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it.'
      },
      {
        level: 40,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
      {
        level: 50,
        name: 'Dragon Meteor',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Summons numerous small meteorites and launches them at an enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Elphidran.webp',
  },
  {
    id: "80B",
    key: '',
    name: 'Elphidran Aqua',
    types: ["Dragon", "Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 7,
        name: 'Dragon Cannon',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls an energy ball imbued with draconic energy at an enemy.'
      },
      {
        level: 15,
        name: 'Dragon Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges draconic energy, damaging those around it.'
      },
      {
        level: 22,
        name: 'Mystic Whirlwind',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Elphidran\'s exclusive skill. Generates twin whirlwinds imbued with a mysterious power that pursues enemies.'
      },
      {
        level: 30,
        name: 'Acid Rain',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Creates acidic clouds that pour down acid rain on enemies.'
      },
      {
        level: 40,
        name: 'Hydro Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it.'
      },
      {
        level: 50,
        name: 'Dragon Meteor',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Summons numerous small meteorites and launches them at an enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Elphidran_Aqua.webp',
  },
  {
    id: "81",
    key: '',
    name: 'Kelpsea',
    types: ["Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Hydro Jet',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a high speed ball of water at an enemy.'
      },
      {
        level: 7,
        name: 'Dragon Cannon',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls an energy ball imbued with draconic energy at an enemy.'
      },
      {
        level: 15,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 22,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 30,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 40,
        name: 'Aqua Burst',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of water and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Hydro Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it.'
      },
    ],
    description: "",
    image: '/images/pals/Kelpsea.webp',
  },
  {
    id: "81B",
    key: '',
    name: 'Kelpsea Ignis',
    types: ["Fire"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 7,
        name: 'Dragon Cannon',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls an energy ball imbued with draconic energy at an enemy.'
      },
      {
        level: 15,
        name: 'Spirit Fire',
        type: '',
        cooldown: 0,
        power: 45,
        description: 'Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward.'
      },
      {
        level: 22,
        name: 'Flare Arrow',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires three flaming arrows in succession that home in on an enemy.'
      },
      {
        level: 30,
        name: 'Dragon Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges draconic energy, damaging those around it.'
      },
      {
        level: 40,
        name: 'Ignis Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Shoots flames at an enemy, dealing continuous damage.'
      },
      {
        level: 50,
        name: 'Fire Ball',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact.'
      },
    ],
    description: "",
    image: '/images/pals/Kelpsea_Ignis.webp',
  },
  {
    id: "82",
    key: '',
    name: 'Azurobe',
    types: ["Water", "Dragon"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 7,
        name: 'Dragon Cannon',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls an energy ball imbued with draconic energy at an enemy.'
      },
      {
        level: 15,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 22,
        name: 'Dragon Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges draconic energy, damaging those around it.'
      },
      {
        level: 30,
        name: 'Draconic Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it.'
      },
      {
        level: 40,
        name: 'Hydro Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it.'
      },
      {
        level: 50,
        name: 'Dragon Meteor',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Summons numerous small meteorites and launches them at an enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Azurobe.webp',
  },
  {
    id: "82B",
    key: '',
    name: 'Azurobe Cryst',
    types: ["Ice", "Dragon"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 7,
        name: 'Dragon Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges draconic energy, damaging those around it.'
      },
      {
        level: 15,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 22,
        name: 'Draconic Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it.'
      },
      {
        level: 30,
        name: 'Crystal Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Enshrouds an enemy in a frigid blast of air, dealing continuous damage.'
      },
      {
        level: 40,
        name: 'Charge Cannon',
        type: '',
        cooldown: 0,
        power: 140,
        description: 'Fires an energy orb infused with draconic power at the enemy. The orb causes a wide-area explosion upon impact.'
      },
      {
        level: 50,
        name: 'Diamond Rain',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Creates numerous lumps of ice that are consecutively dropped on a foe\'s head.'
      },
    ],
    description: "",
    image: '/images/pals/Azurobe_Cryst.webp',
  },
  {
    id: "83",
    key: '',
    name: 'Cryolinx',
    types: ["Ice"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 7,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 15,
        name: 'Stone Cannon',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Digs up a boulder and hurls it at an enemy.'
      },
      {
        level: 22,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 30,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 35,
        name: 'Blizzard Claw',
        type: '',
        cooldown: 0,
        power: 85,
        description: 'Cryolinx\'s exclusive skill. First, it strikes with its claws, followed by a second slash, and culminates with a powerful slash using its entire body. When swinging the claws, ice pillars are launched forward in a fan shape.'
      },
      {
        level: 40,
        name: 'Crystal Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Enshrouds an enemy in a frigid blast of air, dealing continuous damage.'
      },
      {
        level: 50,
        name: 'Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.'
      },
    ],
    description: "",
    image: '/images/pals/Cryolinx.webp',
  },
  {
    id: "83B",
    key: '',
    name: 'Cryolinx Terra',
    types: ["Ground"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 7,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 15,
        name: 'Stone Cannon',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Digs up a boulder and hurls it at an enemy.'
      },
      {
        level: 22,
        name: 'Sand Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two sand tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 30,
        name: 'Stone Claw',
        type: '',
        cooldown: 0,
        power: 95,
        description: 'Cryolinx Terra\'s exclusive skill. First, it strikes with its claws, followed by a second slash, and culminates with a powerful slash using its entire body. When swinging the claws, rocks are launched forward in a fan shape.'
      },
      {
        level: 35,
        name: 'Rockburst',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Causes the ground to shake before hurling a massive stone mass at its surroundings.'
      },
      {
        level: 40,
        name: 'Rock Lance',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Generates a sharp rock spear under an enemy.'
      },
      {
        level: 50,
        name: 'Stone Beat',
        type: '',
        cooldown: 0,
        power: 170,
        description: 'Shakes the ground and lifts a massive boulder into the air.'
      },
    ],
    description: "",
    image: '/images/pals/Cryolinx_Terra.webp',
  },
  {
    id: "84",
    key: '',
    name: 'Blazehowl',
    types: ["Fire"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 7,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 15,
        name: 'Flare Arrow',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires three flaming arrows in succession that home in on an enemy.'
      },
      {
        level: 22,
        name: 'Ignis Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Shoots flames at an enemy, dealing continuous damage.'
      },
      {
        level: 30,
        name: 'Ignis Rage',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Infuses the surrounding ground with energy, causing it to explode after a set amount of time.'
      },
      {
        level: 35,
        name: 'Volcanic Fang',
        type: '',
        cooldown: 0,
        power: 125,
        description: 'Blazehowl\'s exclusive skill. With momentum, it pounces mercilessly on the enemy and causes an explosion of fire at the point of impact.'
      },
      {
        level: 40,
        name: 'Fire Ball',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact.'
      },
      {
        level: 50,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
    ],
    description: "",
    image: '/images/pals/Blazehowl.webp',
  },
  {
    id: "84B",
    key: '',
    name: 'Blazehowl Noct',
    types: ["Fire", "Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 7,
        name: 'Flare Arrow',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires three flaming arrows in succession that home in on an enemy.'
      },
      {
        level: 15,
        name: 'Ignis Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Shoots flames at an enemy, dealing continuous damage.'
      },
      {
        level: 22,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 30,
        name: 'Ignis Rage',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Infuses the surrounding ground with energy, causing it to explode after a set amount of time.'
      },
      {
        level: 35,
        name: 'Volcanic Fang',
        type: '',
        cooldown: 0,
        power: 125,
        description: 'Blazehowl\'s exclusive skill. With momentum, it pounces mercilessly on the enemy and causes an explosion of fire at the point of impact.'
      },
      {
        level: 40,
        name: 'Fire Ball',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Blazehowl_Noct.webp',
  },
  {
    id: "85",
    key: '',
    name: 'Relaxaurus',
    types: ["Dragon", "Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Dragon Cannon',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls an energy ball imbued with draconic energy at an enemy.'
      },
      {
        level: 7,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 15,
        name: 'Dragon Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges draconic energy, damaging those around it.'
      },
      {
        level: 22,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 30,
        name: 'Draconic Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it.'
      },
      {
        level: 40,
        name: 'Aqua Burst',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of water and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Dragon Meteor',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Summons numerous small meteorites and launches them at an enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Relaxaurus.webp',
  },
  {
    id: "85B",
    key: '',
    name: 'Relaxaurus Lux',
    types: ["Dragon", "Electric"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Spark Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Releases lightning orbs in a fan shape, spreading as they travel.'
      },
      {
        level: 7,
        name: 'Dragon Cannon',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls an energy ball imbued with draconic energy at an enemy.'
      },
      {
        level: 15,
        name: 'Shockwave',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Quickly discharges electricity, shocking those around it.'
      },
      {
        level: 22,
        name: 'Lightning Streak',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Generates a lightning bolt that moves forward in a line.'
      },
      {
        level: 30,
        name: 'Draconic Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it.'
      },
      {
        level: 40,
        name: 'Lightning Strike',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Acts as a lightning rod, calling down thunderbolts that electrocute the surrounding area.'
      },
      {
        level: 50,
        name: 'Lightning Bolt',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges electric energy before blasting enemies with a powerful shock.'
      },
    ],
    description: "",
    image: '/images/pals/Relaxaurus_Lux.webp',
  },
  {
    id: "86",
    key: '',
    name: 'Broncherry',
    types: ["Grass"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 7,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 15,
        name: 'Muscle Slam',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Broncherry\'s exclusive skill. Turns sideways before tackling enemies in front of it, sending them flying into the air.'
      },
      {
        level: 22,
        name: 'Seed Mine',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Launches a deadly seed. If it hits an enemy, the seed explodes.'
      },
      {
        level: 30,
        name: 'Grass Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 40,
        name: 'Spine Vine',
        type: '',
        cooldown: 0,
        power: 95,
        description: 'Generates spiny thorns that chase an enemy along the ground, piercing them from below.'
      },
      {
        level: 50,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Broncherry.webp',
  },
  {
    id: "86B",
    key: '',
    name: 'Broncherry Aqua',
    types: ["Grass", "Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 7,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 15,
        name: 'Muscle Slam',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Broncherry\'s exclusive skill. Turns sideways before tackling enemies in front of it, sending them flying into the air.'
      },
      {
        level: 22,
        name: 'Seed Mine',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Launches a deadly seed. If it hits an enemy, the seed explodes.'
      },
      {
        level: 30,
        name: 'Spine Vine',
        type: '',
        cooldown: 0,
        power: 95,
        description: 'Generates spiny thorns that chase an enemy along the ground, piercing them from below.'
      },
      {
        level: 40,
        name: 'Aqua Burst',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of water and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Hydro Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it.'
      },
    ],
    description: "",
    image: '/images/pals/Broncherry_Aqua.webp',
  },
  {
    id: "87",
    key: '',
    name: 'Petallia',
    types: ["Grass"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 7,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 15,
        name: 'Seed Machine Gun',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires a volley of hard seeds at enemies in front of it.'
      },
      {
        level: 22,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 30,
        name: 'Grass Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 40,
        name: 'Spine Vine',
        type: '',
        cooldown: 0,
        power: 95,
        description: 'Generates spiny thorns that chase an enemy along the ground, piercing them from below.'
      },
      {
        level: 50,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Petallia.webp',
  },
  {
    id: "88",
    key: '',
    name: 'Reptyro',
    types: ["Fire", "Ground"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 7,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 15,
        name: 'Stone Cannon',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Digs up a boulder and hurls it at an enemy.'
      },
      {
        level: 22,
        name: 'Ignis Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Shoots flames at an enemy, dealing continuous damage.'
      },
      {
        level: 30,
        name: 'Volcanic Burst',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Reptyro\'s exclusive skill. Raises its front legs and slams them into the ground, causing a volcanic eruptions under its enemies. It simultaneously bombards them with volcanic bombs from above.'
      },
      {
        level: 40,
        name: 'Ignis Rage',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Infuses the surrounding ground with energy, causing it to explode after a set amount of time.'
      },
      {
        level: 50,
        name: 'Rock Lance',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Generates a sharp rock spear under an enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Reptyro.webp',
  },
  {
    id: "88B",
    key: '',
    name: 'Reptyro Cryst',
    types: ["Ice", "Ground"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 7,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 15,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 22,
        name: 'Crystal Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Enshrouds an enemy in a frigid blast of air, dealing continuous damage.'
      },
      {
        level: 30,
        name: 'Frost Burst',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Reptyro Cryst\'s exclusive skill. Raises its front legs and slams them into the ground, causing a frozen blast under its enemies. It simultaneously bombards them with snow balls from above.'
      },
      {
        level: 40,
        name: 'Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.'
      },
      {
        level: 50,
        name: 'Rock Lance',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Generates a sharp rock spear under an enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Reptyro_Cryst.webp',
  },
  {
    id: "89",
    key: '',
    name: 'Kingpaca',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 7,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 15,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 22,
        name: 'Kingly Slam',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Kingpaca\'s exclusive skill. Leaps high into the air before smashing into an enemy with its chubby, massive body.'
      },
      {
        level: 30,
        name: 'Tri-Lightning',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Generates lightning that strikes an enemy three times from above.'
      },
      {
        level: 40,
        name: 'Rock Lance',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Generates a sharp rock spear under an enemy.'
      },
      {
        level: 50,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
    ],
    description: "",
    image: '/images/pals/Kingpaca.webp',
  },
  {
    id: "89B",
    key: '',
    name: 'Kingpaca Cryst',
    types: ["Ice"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 7,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 15,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 22,
        name: 'Kingly Slam',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Kingpaca\'s exclusive skill. Leaps high into the air before smashing into an enemy with its chubby, massive body.'
      },
      {
        level: 30,
        name: 'Crystal Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Enshrouds an enemy in a frigid blast of air, dealing continuous damage.'
      },
      {
        level: 40,
        name: 'Aqua Burst',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of water and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.'
      },
    ],
    description: "",
    image: '/images/pals/Kingpaca_Cryst.webp',
  },
  {
    id: "90",
    key: '',
    name: 'Mammorest',
    types: ["Grass", "Ground"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 7,
        name: 'Seed Machine Gun',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires a volley of hard seeds at enemies in front of it.'
      },
      {
        level: 15,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 22,
        name: 'Grass Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 30,
        name: 'Earth Impact',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Mammorest\'s exclusive skill. Uses its massive body to shake the earth, dealing damage over a wide area.'
      },
      {
        level: 40,
        name: 'Spine Vine',
        type: '',
        cooldown: 0,
        power: 95,
        description: 'Generates spiny thorns that chase an enemy along the ground, piercing them from below.'
      },
      {
        level: 50,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Mammorest.webp',
  },
  {
    id: "90B",
    key: '',
    name: 'Mammorest Cryst',
    types: ["Ice", "Ground"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Stone Cannon',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Digs up a boulder and hurls it at an enemy.'
      },
      {
        level: 7,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 15,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 22,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 30,
        name: 'Earth Impact',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Mammorest\'s exclusive skill. Uses its massive body to shake the earth, dealing damage over a wide area.'
      },
      {
        level: 40,
        name: 'Crystal Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Enshrouds an enemy in a frigid blast of air, dealing continuous damage.'
      },
      {
        level: 50,
        name: 'Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.'
      },
    ],
    description: "",
    image: '/images/pals/Mammorest_Cryst.webp',
  },
  {
    id: "91",
    key: '',
    name: 'Wumpo',
    types: ["Ice"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 7,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 15,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 22,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 30,
        name: 'Crystal Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Enshrouds an enemy in a frigid blast of air, dealing continuous damage.'
      },
      {
        level: 35,
        name: 'Snow Bowling',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Wumpo\'s exclusive skill. Rolls a snowball as it moves forward, and when it grows large enough, it throws it to cause an explosion.'
      },
      {
        level: 40,
        name: 'Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.'
      },
      {
        level: 50,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Wumpo.webp',
  },
  {
    id: "91B",
    key: '',
    name: 'Wumpo Botan',
    types: ["Grass"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 7,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 15,
        name: 'Seed Mine',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Launches a deadly seed. If it hits an enemy, the seed explodes.'
      },
      {
        level: 22,
        name: 'Grass Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 30,
        name: 'Spine Vine',
        type: '',
        cooldown: 0,
        power: 95,
        description: 'Generates spiny thorns that chase an enemy along the ground, piercing them from below.'
      },
      {
        level: 35,
        name: 'Lawn Bowling',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Wumpo Botan\'s exclusive skill. Rolls a ball made of grass as it moves forward, and when it grows large enough, it throws it to cause an explosion.'
      },
      {
        level: 40,
        name: 'Aqua Burst',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of water and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Wumpo_Botan.webp',
  },
  {
    id: "92",
    key: '',
    name: 'Warsect',
    types: ["Ground", "Grass"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 7,
        name: 'Seed Machine Gun',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires a volley of hard seeds at enemies in front of it.'
      },
      {
        level: 15,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 22,
        name: 'Stone Cannon',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Digs up a boulder and hurls it at an enemy.'
      },
      {
        level: 30,
        name: 'Giga Horn',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Warsect\'s exclusive skill. Skewers enemies with its four sturdy horns.'
      },
      {
        level: 40,
        name: 'Rock Lance',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Generates a sharp rock spear under an enemy.'
      },
      {
        level: 50,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Warsect.webp',
  },
  {
    id: "92B",
    key: '',
    name: 'Warsect Terra',
    types: ["Ground"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 7,
        name: 'Seed Machine Gun',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires a volley of hard seeds at enemies in front of it.'
      },
      {
        level: 15,
        name: 'Giga Horn',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Warsect\'s exclusive skill. Skewers enemies with its four sturdy horns.'
      },
      {
        level: 22,
        name: 'Stone Cannon',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Digs up a boulder and hurls it at an enemy.'
      },
      {
        level: 30,
        name: 'Wind Edge',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Launches sharp blades of air that fan out.'
      },
      {
        level: 40,
        name: 'Rockburst',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Causes the ground to shake before hurling a massive stone mass at its surroundings.'
      },
      {
        level: 50,
        name: 'Stone Beat',
        type: '',
        cooldown: 0,
        power: 170,
        description: 'Shakes the ground and lifts a massive boulder into the air.'
      },
    ],
    description: "",
    image: '/images/pals/Warsect_Terra.webp',
  },
  {
    id: "93",
    key: '',
    name: 'Fenglope',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 15,
        name: 'Cloud Tempest',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Fenglope\'s exclusive skill. Charges forward while manipulating the atmosphere to create a pressurized wind tunnel around itself.'
      },
      {
        level: 22,
        name: 'Acid Rain',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Creates acidic clouds that pour down acid rain on enemies.'
      },
      {
        level: 30,
        name: 'Aqua Burst',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of water and hurls it at an enemy.'
      },
      {
        level: 40,
        name: 'Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.'
      },
      {
        level: 50,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
    ],
    description: "",
    image: '/images/pals/Fenglope.webp',
  },
  {
    id: "93B",
    key: '',
    name: 'Fenglope Lux',
    types: ["Electric"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Shockwave',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Quickly discharges electricity, shocking those around it.'
      },
      {
        level: 7,
        name: 'Lightning Streak',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Generates a lightning bolt that moves forward in a line.'
      },
      {
        level: 15,
        name: 'Acid Rain',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Creates acidic clouds that pour down acid rain on enemies.'
      },
      {
        level: 22,
        name: 'Thunder Tempest',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Charges forward while manipulating the atmosphere and enveloping itself in thunderclouds.'
      },
      {
        level: 30,
        name: 'Thunder Rain',
        type: '',
        cooldown: 0,
        power: 135,
        description: 'Calls lightning that strikes an enemy after a set amount of time has passed.'
      },
      {
        level: 40,
        name: 'Lightning Bolt',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges electric energy before blasting enemies with a powerful shock.'
      },
      {
        level: 50,
        name: 'Thunderstorm',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Generates a huge tornado of lightning that moves slowly towards the enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Fenglope_Lux.webp',
  },
  {
    id: "94",
    key: '',
    name: 'Felbat',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Poison Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls poison sludge at an enemy.'
      },
      {
        level: 7,
        name: 'Dark Ball',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Unleashes a sphere of darkness that slowly tracks down an enemy.'
      },
      {
        level: 15,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 22,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 30,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 40,
        name: 'Ignis Rage',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Infuses the surrounding ground with energy, causing it to explode after a set amount of time.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Felbat.webp',
  },
  {
    id: "95",
    key: '',
    name: 'Quivern',
    types: ["Dragon"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Dragon Cannon',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls an energy ball imbued with draconic energy at an enemy.'
      },
      {
        level: 7,
        name: 'Spirit Fire',
        type: '',
        cooldown: 0,
        power: 45,
        description: 'Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward.'
      },
      {
        level: 15,
        name: 'Acid Rain',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Creates acidic clouds that pour down acid rain on enemies.'
      },
      {
        level: 22,
        name: 'Draconic Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it.'
      },
      {
        level: 30,
        name: 'Grass Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 40,
        name: 'Aqua Burst',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of water and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Dragon Meteor',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Summons numerous small meteorites and launches them at an enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Quivern.webp',
  },
  {
    id: "95B",
    key: '',
    name: 'Quivern Botan',
    types: ["Dragon", "Grass"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Dragon Cannon',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls an energy ball imbued with draconic energy at an enemy.'
      },
      {
        level: 7,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 15,
        name: 'Seed Machine Gun',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires a volley of hard seeds at enemies in front of it.'
      },
      {
        level: 22,
        name: 'Draconic Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it.'
      },
      {
        level: 30,
        name: 'Grass Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 40,
        name: 'Comet Strike',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Drops a meteorite straight down, generating a shock wave around the impact area.'
      },
      {
        level: 50,
        name: 'Circle Vine',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Sprouts sharp roots in and around the enemy\'s location.'
      },
    ],
    description: "",
    image: '/images/pals/Quivern_Botan.webp',
  },
  {
    id: "96",
    key: '',
    name: 'Blazamut',
    types: ["Fire"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 7,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 15,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 22,
        name: 'Ignis Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Shoots flames at an enemy, dealing continuous damage.'
      },
      {
        level: 30,
        name: 'Ignis Rage',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Infuses the surrounding ground with energy, causing it to explode after a set amount of time.'
      },
      {
        level: 35,
        name: 'Brawn Impact',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Blazamut\'s exclusive skill. Raises and inflates its arms, then slams them together, causing a massive explosion in the surrounding area.'
      },
      {
        level: 40,
        name: 'Fire Ball',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact.'
      },
      {
        level: 50,
        name: 'Rock Lance',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Generates a sharp rock spear under an enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Blazamut.webp',
  },
  {
    id: "96B",
    key: '',
    name: 'Blazamut Ryu',
    types: ["Dragon", "Fire"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Dragon Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges draconic energy, damaging those around it.'
      },
      {
        level: 7,
        name: 'Ignis Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Shoots flames at an enemy, dealing continuous damage.'
      },
      {
        level: 15,
        name: 'Flame Wall',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a wall of flames at the enemy\'s location. The wall of flames will remain for a while, and deal damage to the enemies it touches.'
      },
      {
        level: 22,
        name: 'Comet Strike',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Drops a meteorite straight down, generating a shock wave around the impact area.'
      },
      {
        level: 30,
        name: 'Beam Slicer',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Mows down the area in front with a beam imbued with dragon power. The area struck by the beam will also explode after a short delay.'
      },
      {
        level: 40,
        name: 'Brawn Impact',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Blazamut\'s exclusive skill. Raises and inflates its arms, then slams them together, causing a massive explosion in the surrounding area.'
      },
      {
        level: 50,
        name: 'Magna Crush',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Blazamut Ryu\'s exclusive skill. After a big jump, moves at high speed in the air, gathering strength to unleash a powerful punch.'
      },
    ],
    description: "",
    image: '/images/pals/Blazamut_Ryu.webp',
  },
  {
    id: "97",
    key: '',
    name: 'Helzephyr',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Spirit Fire',
        type: '',
        cooldown: 0,
        power: 45,
        description: 'Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward.'
      },
      {
        level: 7,
        name: 'Dark Ball',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Unleashes a sphere of darkness that slowly tracks down an enemy.'
      },
      {
        level: 15,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 22,
        name: 'Flare Storm',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two flaming tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 30,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 40,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Helzephyr.webp',
  },
  {
    id: "97B",
    key: '',
    name: 'Helzephyr Lux',
    types: ["Dark", "Electric"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Spark Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Releases lightning orbs in a fan shape, spreading as they travel.'
      },
      {
        level: 7,
        name: 'Shockwave',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Quickly discharges electricity, shocking those around it.'
      },
      {
        level: 15,
        name: 'Dark Arrow',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires off dark energy that homes in on an enemy.'
      },
      {
        level: 22,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 30,
        name: 'TriSpark',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'A high-speed lightning ball that flies in a straight line. Simultaneously fires slow lightning balls that track the enemy.'
      },
      {
        level: 40,
        name: 'Thunder Rain',
        type: '',
        cooldown: 0,
        power: 135,
        description: 'Calls lightning that strikes an enemy after a set amount of time has passed.'
      },
      {
        level: 50,
        name: 'Thunderstorm',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Generates a huge tornado of lightning that moves slowly towards the enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Helzephyr_Lux.webp',
  },
  {
    id: "98",
    key: '',
    name: 'Astegon',
    types: ["Dragon", "Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Dragon Cannon',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls an energy ball imbued with draconic energy at an enemy.'
      },
      {
        level: 7,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 15,
        name: 'Dragon Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges draconic energy, damaging those around it.'
      },
      {
        level: 22,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 30,
        name: 'Draconic Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it.'
      },
      {
        level: 35,
        name: 'Firefist Breathstorm',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Astegon\'s exclusive skill. After throwing two punches forward, it exhales a dragon breath downward.'
      },
      {
        level: 40,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
      {
        level: 50,
        name: 'Dragon Meteor',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Summons numerous small meteorites and launches them at an enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Astegon.webp',
  },
  {
    id: "99",
    key: '',
    name: 'Menasting',
    types: ["Dark", "Ground"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 7,
        name: 'Poison Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls poison sludge at an enemy.'
      },
      {
        level: 15,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 22,
        name: 'Stone Cannon',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Digs up a boulder and hurls it at an enemy.'
      },
      {
        level: 30,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 35,
        name: 'Jumping Stinger',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Menasting\'s exclusive skill. Jumps high and forcefully stabs its prey with its tail. The poison from the tail is deadly.'
      },
      {
        level: 40,
        name: 'Rock Lance',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Generates a sharp rock spear under an enemy.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Menasting.webp',
  },
  {
    id: "99B",
    key: '',
    name: 'Menasting Terra',
    types: ["Ground"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 7,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 15,
        name: 'Stone Cannon',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Digs up a boulder and hurls it at an enemy.'
      },
      {
        level: 22,
        name: 'Sand Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two sand tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 30,
        name: 'Jumping Stinger',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Menasting\'s exclusive skill. Jumps high and forcefully stabs its prey with its tail. The poison from the tail is deadly.'
      },
      {
        level: 40,
        name: 'Rock Lance',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Generates a sharp rock spear under an enemy.'
      },
      {
        level: 50,
        name: 'Rockburst',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Causes the ground to shake before hurling a massive stone mass at its surroundings.'
      },
    ],
    description: "",
    image: '/images/pals/Menasting_Terra.webp',
  },
  {
    id: "100",
    key: '',
    name: 'Anubis',
    types: ["Ground"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 7,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 15,
        name: 'Sand Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two sand tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 22,
        name: 'Spinning Roundhouse',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Anubis\' exclusive skill. Performs a spin kick with its strong legs, sweeping enemies over a wide area.'
      },
      {
        level: 30,
        name: 'Forceful Charge',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Anubis\' exclusive skill. Rapidly pursues its foes while releasing energy and unleashing a powerful punch.'
      },
      {
        level: 40,
        name: 'Ground Smash',
        type: '',
        cooldown: 0,
        power: 140,
        description: 'Anubis\' exclusive skill. Leaps high into the air and strikes a punch to the ground, causing a shockwave that deals damge over a wide area.'
      },
      {
        level: 50,
        name: 'Rock Lance',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Generates a sharp rock spear under an enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Anubis.webp',
  },
  {
    id: "101",
    key: '',
    name: 'Jormuntide',
    types: ["Dragon", "Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 7,
        name: 'Dragon Cannon',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls an energy ball imbued with draconic energy at an enemy.'
      },
      {
        level: 15,
        name: 'Draconic Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it.'
      },
      {
        level: 22,
        name: 'Aqua Burst',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of water and hurls it at an enemy.'
      },
      {
        level: 30,
        name: 'Tri-Lightning',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Generates lightning that strikes an enemy three times from above.'
      },
      {
        level: 35,
        name: 'Slither Slam',
        type: '',
        cooldown: 0,
        power: 145,
        description: 'Jormuntide\'s exclusive skill. Letting out a roar, it charges toward the enemy, twisting its water-covered body as it advances.'
      },
      {
        level: 40,
        name: 'Hydro Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it.'
      },
      {
        level: 50,
        name: 'Dragon Meteor',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Summons numerous small meteorites and launches them at an enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Jormuntide.webp',
  },
  {
    id: "101B",
    key: '',
    name: 'Jormuntide Ignis',
    types: ["Dragon", "Fire"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 7,
        name: 'Dragon Cannon',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls an energy ball imbued with draconic energy at an enemy.'
      },
      {
        level: 15,
        name: 'Flare Storm',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two flaming tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 22,
        name: 'Ignis Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Shoots flames at an enemy, dealing continuous damage.'
      },
      {
        level: 30,
        name: 'Tri-Lightning',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Generates lightning that strikes an enemy three times from above.'
      },
      {
        level: 35,
        name: 'Magma Serpent',
        type: '',
        cooldown: 0,
        power: 145,
        description: 'Jormuntide Ignis\'s exclusive skill. Letting out a roar, it charges toward the enemy, twisting its fire-covered body as it advances.'
      },
      {
        level: 40,
        name: 'Fire Ball',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact.'
      },
      {
        level: 50,
        name: 'Dragon Meteor',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Summons numerous small meteorites and launches them at an enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Jormuntide_Ignis.webp',
  },
  {
    id: "102",
    key: '',
    name: 'Suzaku',
    types: ["Fire"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 15,
        name: 'Spirit Fire',
        type: '',
        cooldown: 0,
        power: 45,
        description: 'Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward.'
      },
      {
        level: 22,
        name: 'Flare Arrow',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires three flaming arrows in succession that home in on an enemy.'
      },
      {
        level: 30,
        name: 'Ignis Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Shoots flames at an enemy, dealing continuous damage.'
      },
      {
        level: 40,
        name: 'Flare Storm',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two flaming tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 50,
        name: 'Fire Ball',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact.'
      },
    ],
    description: "",
    image: '/images/pals/Suzaku.webp',
  },
  {
    id: "102B",
    key: '',
    name: 'Suzaku Aqua',
    types: ["Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Hydro Jet',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a high speed ball of water at an enemy.'
      },
      {
        level: 7,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 15,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 22,
        name: 'Crystal Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Enshrouds an enemy in a frigid blast of air, dealing continuous damage.'
      },
      {
        level: 30,
        name: 'Aqua Burst',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of water and hurls it at an enemy.'
      },
      {
        level: 40,
        name: 'Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.'
      },
      {
        level: 50,
        name: 'Hydro Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it.'
      },
    ],
    description: "",
    image: '/images/pals/Suzaku_Aqua.webp',
  },
  {
    id: "103",
    key: '',
    name: 'Grizzbolt',
    types: ["Electric"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Spark Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Releases lightning orbs in a fan shape, spreading as they travel.'
      },
      {
        level: 7,
        name: 'Shockwave',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Quickly discharges electricity, shocking those around it.'
      },
      {
        level: 15,
        name: 'Lightning Claw',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Grizzbolt\'s exclusive skill. After leaping at an enemy and tearing at it twice with its electrically charged claws, it attacks the ground, sending an electric shock throughout the area.'
      },
      {
        level: 22,
        name: 'Lightning Streak',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Generates a lightning bolt that moves forward in a line.'
      },
      {
        level: 30,
        name: 'Tri-Lightning',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Generates lightning that strikes an enemy three times from above.'
      },
      {
        level: 40,
        name: 'Lightning Strike',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Acts as a lightning rod, calling down thunderbolts that electrocute the surrounding area.'
      },
      {
        level: 50,
        name: 'Lightning Bolt',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges electric energy before blasting enemies with a powerful shock.'
      },
      {
        level: 55,
        name: 'Heavy Thunder Tank',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Grizzbolt\'s exclusive skill. Pulls out a minigun out of nowhere and starts blasting. Finishes with a single, charged power shot.'
      },
    ],
    description: "",
    image: '/images/pals/Grizzbolt.webp',
  },
  {
    id: "104",
    key: '',
    name: 'Lyleen',
    types: ["Grass"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 7,
        name: 'Seed Machine Gun',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires a volley of hard seeds at enemies in front of it.'
      },
      {
        level: 15,
        name: 'Seed Mine',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Launches a deadly seed. If it hits an enemy, the seed explodes.'
      },
      {
        level: 22,
        name: 'Aqua Burst',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of water and hurls it at an enemy.'
      },
      {
        level: 30,
        name: 'Grass Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 40,
        name: 'Spine Vine',
        type: '',
        cooldown: 0,
        power: 95,
        description: 'Generates spiny thorns that chase an enemy along the ground, piercing them from below.'
      },
      {
        level: 50,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
      {
        level: 55,
        name: 'Bountiful Protection',
        type: '',
        cooldown: 0,
        power: 0,
        description: 'Lyleen\'s exclusive skill. Restores health to all allies within range using the power of healing.'
      },
    ],
    description: "",
    image: '/images/pals/Lyleen.webp',
  },
  {
    id: "104B",
    key: '',
    name: 'Lyleen Noct',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Dark Ball',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Unleashes a sphere of darkness that slowly tracks down an enemy.'
      },
      {
        level: 7,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 15,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 22,
        name: 'Crystal Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Enshrouds an enemy in a frigid blast of air, dealing continuous damage.'
      },
      {
        level: 30,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 40,
        name: 'Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Lyleen_Noct.webp',
  },
  {
    id: "105",
    key: '',
    name: 'Faleris',
    types: ["Fire"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 7,
        name: 'Flare Arrow',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires three flaming arrows in succession that home in on an enemy.'
      },
      {
        level: 15,
        name: 'Spirit Fire',
        type: '',
        cooldown: 0,
        power: 45,
        description: 'Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward.'
      },
      {
        level: 22,
        name: 'Ignis Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Shoots flames at an enemy, dealing continuous damage.'
      },
      {
        level: 30,
        name: 'Phoenix Flare',
        type: '',
        cooldown: 0,
        power: 135,
        description: 'Faleris\' exclusive skill. After creating scorching tornadoes, it cloaks itself in hellfire and charges forward.'
      },
      {
        level: 40,
        name: 'Ignis Rage',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Infuses the surrounding ground with energy, causing it to explode after a set amount of time.'
      },
      {
        level: 50,
        name: 'Fire Ball',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact.'
      },
      {
        level: 55,
        name: 'Raging Flame Wave',
        type: '',
        cooldown: 0,
        power: 145,
        description: 'Faleris\' exclusive skill. Generates multiple scorching tornadoes and charges forward while gliding. The tornadoes converge in the center and eventually merge into a single massive tornado.'
      },
    ],
    description: "",
    image: '/images/pals/Faleris.webp',
  },
  {
    id: "105B",
    key: '',
    name: 'Faleris Aqua',
    types: ["Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Hydro Jet',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a high speed ball of water at an enemy.'
      },
      {
        level: 7,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 15,
        name: 'Acid Rain',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Creates acidic clouds that pour down acid rain on enemies.'
      },
      {
        level: 22,
        name: 'Splash',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Generates a column of water that travels in a straight line.'
      },
      {
        level: 30,
        name: 'Curtain Splash',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Continously creates walls made from water columns at the enemy\'s location.'
      },
      {
        level: 40,
        name: 'Phoenix Tide',
        type: '',
        cooldown: 0,
        power: 135,
        description: 'Faleris Aqua\'s exclusive skill. After summoning a massive tornado, it envelops its body in water and charges forward.'
      },
      {
        level: 50,
        name: 'Hydro Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it.'
      },
    ],
    description: "",
    image: '/images/pals/Faleris_Aqua.webp',
  },
  {
    id: "106",
    key: '',
    name: 'Orserk',
    types: ["Dragon", "Electric"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Kerauno',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Orserk\'s exclusive skill. Summons a spear of lightning while leaping into the air before throwing it at an enemy.'
      },
      {
        level: 7,
        name: 'Lightning Strike',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Acts as a lightning rod, calling down thunderbolts that electrocute the surrounding area.'
      },
      {
        level: 15,
        name: 'Spark Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Releases lightning orbs in a fan shape, spreading as they travel.'
      },
      {
        level: 22,
        name: 'Draconic Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it.'
      },
      {
        level: 30,
        name: 'Lightning Streak',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Generates a lightning bolt that moves forward in a line.'
      },
      {
        level: 40,
        name: 'Tri-Lightning',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Generates lightning that strikes an enemy three times from above.'
      },
      {
        level: 50,
        name: 'Lightning Bolt',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges electric energy before blasting enemies with a powerful shock.'
      },
      {
        level: 55,
        name: 'Polykeraunos',
        type: '',
        cooldown: 0,
        power: 180,
        description: 'Orserk\'s exclusive skill. Summons numerous thunder spears and hurls them at the enemy. The first spear is imbued with the power of lightning and explodes after a few seconds.'
      },
    ],
    description: "",
    image: '/images/pals/Orserk.webp',
  },
  {
    id: "107",
    key: '',
    name: 'Shadowbeak',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Dark Ball',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Unleashes a sphere of darkness that slowly tracks down an enemy.'
      },
      {
        level: 15,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 22,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 30,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 40,
        name: 'Divine Disaster',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Charges forward, generating orbs of light that automatically target enemies and unleash a barrage of lasers.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
      {
        level: 55,
        name: 'Divine Disaster II',
        type: '',
        cooldown: 0,
        power: 170,
        description: 'Shadowbeak\'s exclusive skill. As it charges forward, emits countless blue rays that automatically locate and pursue the enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Shadowbeak.webp',
  },
  {
    id: "108",
    key: '',
    name: 'Paladius',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 7,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 15,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 22,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 30,
        name: 'Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.'
      },
      {
        level: 40,
        name: 'Spear Thrust',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Paladius\' exclusive skill. Charges forward while enveloped in holy power with its spear thrust ahead. The shield in its other hand blocks all attacks during the charge.'
      },
      {
        level: 50,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
      {
        level: 55,
        name: 'Absolute Frost',
        type: '',
        cooldown: 0,
        power: 140,
        description: 'Throws icicles in a wide area from under the enemy\'s feet.'
      },
      {
        level: 60,
        name: 'Holy Burst',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Creates a wide explosion of light at the enemy\'s location and around it.'
      },
    ],
    description: "",
    image: '/images/pals/Paladius.webp',
  },
  {
    id: "109",
    key: '',
    name: 'Necromus',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 7,
        name: 'Spirit Fire',
        type: '',
        cooldown: 0,
        power: 45,
        description: 'Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward.'
      },
      {
        level: 15,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 22,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 30,
        name: 'Rock Lance',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Generates a sharp rock spear under an enemy.'
      },
      {
        level: 40,
        name: 'Twin Spears',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Necromus\' exclusive skill. Clads its twin spears with vicious whirlwinds and charges forward, thrusting them one after the other.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
      {
        level: 55,
        name: 'Apocalypse',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Generates several dark vortexes around the enemy.'
      },
      {
        level: 60,
        name: 'Stone Beat',
        type: '',
        cooldown: 0,
        power: 170,
        description: 'Shakes the ground and lifts a massive boulder into the air.'
      },
    ],
    description: "",
    image: '/images/pals/Necromus.webp',
  },
  {
    id: "110",
    key: '',
    name: 'Frostallion',
    types: ["Ice"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 15,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 22,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 30,
        name: 'Crystal Wing',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Frostallion\'s exclusive skill. Dashes forward while concentrating frigid air around its wings, using them to slash enemies with icy blade.'
      },
      {
        level: 40,
        name: 'Crystal Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Enshrouds an enemy in a frigid blast of air, dealing continuous damage.'
      },
      {
        level: 50,
        name: 'Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.'
      },
      {
        level: 55,
        name: 'Holy Burst',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Creates a wide explosion of light at the enemy\'s location and around it.'
      },
      {
        level: 60,
        name: 'Double Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 200,
        description: 'Creates two huge ice blocks and fires them at the enemy one after another. On impact, it also shocks those close by.'
      },
    ],
    description: "",
    image: '/images/pals/Frostallion.webp',
  },
  {
    id: "110B",
    key: '',
    name: 'Frostallion Noct',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Dark Ball',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Unleashes a sphere of darkness that slowly tracks down an enemy.'
      },
      {
        level: 15,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 22,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 30,
        name: 'Crystal Wing',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Frostallion\'s exclusive skill. Dashes forward while concentrating frigid air around its wings, using them to slash enemies with icy blade.'
      },
      {
        level: 40,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
      {
        level: 55,
        name: 'Double Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 200,
        description: 'Creates two huge ice blocks and fires them at the enemy one after another. On impact, it also shocks those close by.'
      },
      {
        level: 60,
        name: 'Dark Whisp',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Fires a menacing ball of dark energy that pursues enemies.'
      },
    ],
    description: "",
    image: '/images/pals/Frostallion_Noct.webp',
  },
  {
    id: "111",
    key: '',
    name: 'Jetragon',
    types: ["Dragon"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Spirit Fire',
        type: '',
        cooldown: 0,
        power: 45,
        description: 'Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward.'
      },
      {
        level: 7,
        name: 'Dragon Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges draconic energy, damaging those around it.'
      },
      {
        level: 15,
        name: 'Flare Storm',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two flaming tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 22,
        name: 'Draconic Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it.'
      },
      {
        level: 30,
        name: 'Beam Comet',
        type: '',
        cooldown: 0,
        power: 140,
        description: 'Jetragon\'s exclusive skill. Illuminates its wings and fires innumerable beams as it flies towards the enemy. The beams explode on impact.'
      },
      {
        level: 40,
        name: 'Fire Ball',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact.'
      },
      {
        level: 50,
        name: 'Dragon Meteor',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Summons numerous small meteorites and launches them at an enemy.'
      },
      {
        level: 55,
        name: 'Beam Slicer',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Mows down the area in front with a beam imbued with dragon power. The area struck by the beam will also explode after a short delay.'
      },
      {
        level: 60,
        name: 'Meteorain',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Drops countless meteorites, generating an array of shock waves.'
      },
    ],
    description: "",
    image: '/images/pals/Jetragon.webp',
  },
  {
    id: "112",
    key: '',
    name: 'Bellanoir',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Dark Cannon',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Hurls an energy ball imbued with dark energy at an enemy.'
      },
      {
        level: 7,
        name: 'Umbral Surge',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Fires high-speed dark orbs in a fan shape, spreading as they travel.'
      },
      {
        level: 15,
        name: 'Dark Arrow',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires off dark energy that homes in on an enemy.'
      },
      {
        level: 22,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 30,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 40,
        name: 'Apocalypse',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Generates several dark vortexes around the enemy.'
      },
      {
        level: 50,
        name: 'Nightmare Ray',
        type: '',
        cooldown: 0,
        power: 140,
        description: 'Bellanoir\'s exclusive skill. Disappears suddenly, then reappears while firing a barrage of beams.'
      },
    ],
    description: "",
    image: '/images/pals/Bellanoir.webp',
  },
  {
    id: "112B",
    key: '',
    name: 'Bellanoir Libero',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Dark Cannon',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Hurls an energy ball imbued with dark energy at an enemy.'
      },
      {
        level: 7,
        name: 'Umbral Surge',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Fires high-speed dark orbs in a fan shape, spreading as they travel.'
      },
      {
        level: 15,
        name: 'Dark Arrow',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires off dark energy that homes in on an enemy.'
      },
      {
        level: 22,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 30,
        name: 'Apocalypse',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Generates several dark vortexes around the enemy.'
      },
      {
        level: 40,
        name: 'Flame Waltz',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Bellanoir Libero\'s exclusive skill. With a graceful dance, conjuries expanding rings of fire, then unleashes eerie flames that seek the enemies.'
      },
      {
        level: 50,
        name: 'Nightmare Bloom',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Bellanoir Libero\'s exclusive skill. Disappears suddenly, then reappears while firing a barrage of beams. The beams spread like a beautiful flower in bloom.'
      },
    ],
    description: "",
    image: '/images/pals/Bellanoir_Libero.webp',
  },
  {
    id: "113",
    key: '',
    name: 'Selyne',
    types: ["Dark", "Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Dark Cannon',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Hurls an energy ball imbued with dark energy at an enemy.'
      },
      {
        level: 7,
        name: 'Dark Arrow',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires off dark energy that homes in on an enemy.'
      },
      {
        level: 15,
        name: 'Air Blade',
        type: '',
        cooldown: 0,
        power: 85,
        description: 'Sends out sharp blades of air in a fan shape.'
      },
      {
        level: 22,
        name: 'Holy Burst',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Creates a wide explosion of light at the enemy\'s location and around it.'
      },
      {
        level: 30,
        name: 'Seigetsu Blade',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Selyne\'s exclusive skill. Fires two consecutive high-speed blades imbued with the power of moonlight.'
      },
      {
        level: 40,
        name: 'Star Mine',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Generates stars around the enemy that explode on contact. Stars also explode after some time.'
      },
      {
        level: 50,
        name: 'Moonlight Beam',
        type: '',
        cooldown: 0,
        power: 170,
        description: 'Selyne\'s exclusive skill. Stores energy in the moon on its back, then fires a crescent-shaped beam forward.'
      },
    ],
    description: "",
    image: '/images/pals/Selyne.webp',
  },
  {
    id: "114",
    key: '',
    name: 'Croajiro',
    types: ["Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 7,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 15,
        name: 'Acid Rain',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Creates acidic clouds that pour down acid rain on enemies.'
      },
      {
        level: 22,
        name: 'Aqua Burst',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of water and hurls it at an enemy.'
      },
      {
        level: 30,
        name: 'Splash',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Generates a column of water that travels in a straight line.'
      },
      {
        level: 40,
        name: 'Curtain Splash',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Continously creates walls made from water columns at the enemy\'s location.'
      },
      {
        level: 50,
        name: 'Hydro Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it.'
      },
    ],
    description: "",
    image: '/images/pals/Croajiro.webp',
  },
  {
    id: "114B",
    key: '',
    name: 'Croajiro Noct',
    types: ["Water", "Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Poison Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls poison sludge at an enemy.'
      },
      {
        level: 7,
        name: 'Dark Shot',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Fires a dark energy projectile that accelerates over time.'
      },
      {
        level: 15,
        name: 'Dark Arrow',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires off dark energy that homes in on an enemy.'
      },
      {
        level: 22,
        name: 'Acid Rain',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Creates acidic clouds that pour down acid rain on enemies.'
      },
      {
        level: 30,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 40,
        name: 'Hydro Slicer',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Mows down the frontal area with a blast of compressed water. The area struck by the blast erupts with water after a short delay.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Croajiro_Noct.webp',
  },
  {
    id: "115",
    key: '',
    name: 'Lullu',
    types: ["Grass"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 7,
        name: 'Seed Machine Gun',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires a volley of hard seeds at enemies in front of it.'
      },
      {
        level: 15,
        name: 'Multicutter',
        type: '',
        cooldown: 0,
        power: 60,
        description: 'The user fires three high-speed blades of wind in quick succession that fly straight at enemies.'
      },
      {
        level: 22,
        name: 'Grass Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 30,
        name: 'Holy Burst',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Creates a wide explosion of light at the enemy\'s location and around it.'
      },
      {
        level: 40,
        name: 'Circle Vine',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Sprouts sharp roots in and around the enemy\'s location.'
      },
      {
        level: 50,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Lullu.webp',
  },
  {
    id: "116",
    key: '',
    name: 'Shroomer',
    types: ["Grass"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Poison Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls poison sludge at an enemy.'
      },
      {
        level: 7,
        name: 'Seed Machine Gun',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires a volley of hard seeds at enemies in front of it.'
      },
      {
        level: 15,
        name: 'Grass Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 22,
        name: 'Seed Mine',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Launches a deadly seed. If it hits an enemy, the seed explodes.'
      },
      {
        level: 30,
        name: 'Spine Vine',
        type: '',
        cooldown: 0,
        power: 95,
        description: 'Generates spiny thorns that chase an enemy along the ground, piercing them from below.'
      },
      {
        level: 40,
        name: 'Circle Vine',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Sprouts sharp roots in and around the enemy\'s location.'
      },
      {
        level: 50,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Shroomer.webp',
  },
  {
    id: "116B",
    key: '',
    name: 'Shroomer Noct',
    types: ["Grass", "Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Poison Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls poison sludge at an enemy.'
      },
      {
        level: 7,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 15,
        name: 'Grass Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 22,
        name: 'Seed Mine',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Launches a deadly seed. If it hits an enemy, the seed explodes.'
      },
      {
        level: 30,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 40,
        name: 'Circle Vine',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Sprouts sharp roots in and around the enemy\'s location.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Shroomer_Noct.webp',
  },
  {
    id: "117",
    key: '',
    name: 'Kikit',
    types: ["Ground"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 7,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 15,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 22,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 30,
        name: 'Sand Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two sand tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 40,
        name: 'Rockburst',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Causes the ground to shake before hurling a massive stone mass at its surroundings.'
      },
      {
        level: 50,
        name: 'Rock Lance',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Generates a sharp rock spear under an enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Kikit.webp',
  },
  {
    id: "118",
    key: '',
    name: 'Sootseer',
    types: ["Dark", "Fire"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 7,
        name: 'Dark Ball',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Unleashes a sphere of darkness that slowly tracks down an enemy.'
      },
      {
        level: 15,
        name: 'Spirit Fire',
        type: '',
        cooldown: 0,
        power: 45,
        description: 'Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward.'
      },
      {
        level: 22,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 30,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 40,
        name: 'Flame Funnel',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Creates multiple spheres of fiery energy, from which countless fireballs shoot towards the enemy.'
      },
      {
        level: 50,
        name: 'Volcanic Rain',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Fires countless volcanic bombs into the sky. After a while, the bombs rain down around their originator.'
      },
    ],
    description: "",
    image: '/images/pals/Sootseer.webp',
  },
  {
    id: "119",
    key: '',
    name: 'Prixter',
    types: ["Dark", "Ground"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Poison Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls poison sludge at an enemy.'
      },
      {
        level: 7,
        name: 'Dark Cannon',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Hurls an energy ball imbued with dark energy at an enemy.'
      },
      {
        level: 15,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 22,
        name: 'Sand Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two sand tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 30,
        name: 'Upper Smash',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Prixter\'s exclusive skill. Closes the distance to the enemy at high speed, then swings its pincers upward with full force.'
      },
      {
        level: 40,
        name: 'Rock Lance',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Generates a sharp rock spear under an enemy.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Prixter.webp',
  },
  {
    id: "120",
    key: '',
    name: 'Knocklem',
    types: ["Ground"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 7,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 15,
        name: 'Stone Cannon',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Digs up a boulder and hurls it at an enemy.'
      },
      {
        level: 22,
        name: 'Rockburst',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Causes the ground to shake before hurling a massive stone mass at its surroundings.'
      },
      {
        level: 30,
        name: 'Rock Lance',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Generates a sharp rock spear under an enemy.'
      },
      {
        level: 40,
        name: 'Ground Cutter',
        type: '',
        cooldown: 0,
        power: 145,
        description: 'Knocklem\'s exclusive skill. Takes a big swing and throws the ring from its back. The ring flies in a circular trajectory.'
      },
      {
        level: 50,
        name: 'Sand Twister',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Creates multiple sand tornadoes. The tornadoes continuously spin in circles.'
      },
    ],
    description: "",
    image: '/images/pals/Knocklem.webp',
  },
  {
    id: "121",
    key: '',
    name: 'Yakumo',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 7,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 15,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 22,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 30,
        name: 'Air Blade',
        type: '',
        cooldown: 0,
        power: 85,
        description: 'Sends out sharp blades of air in a fan shape.'
      },
      {
        level: 40,
        name: 'Holy Burst',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Creates a wide explosion of light at the enemy\'s location and around it.'
      },
      {
        level: 50,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
    ],
    description: "",
    image: '/images/pals/Yakumo.webp',
  },
  {
    id: "122",
    key: '',
    name: 'Dogen',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Air Cannon',
        type: '',
        cooldown: 0,
        power: 25,
        description: 'Quickly fires a burst of highly pressurized air.'
      },
      {
        level: 7,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 15,
        name: 'Stone Cannon',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Digs up a boulder and hurls it at an enemy.'
      },
      {
        level: 22,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 30,
        name: 'Air Blade',
        type: '',
        cooldown: 0,
        power: 85,
        description: 'Sends out sharp blades of air in a fan shape.'
      },
      {
        level: 40,
        name: 'Wholehearted Stance',
        type: '',
        cooldown: 0,
        power: 170,
        description: 'Dogen\'s exclusive skill. Adopts an aiki stance. While in this stance, nulify any incoming attack, instantly close in on the enemy, and counter with a full-forced palm strike.'
      },
      {
        level: 50,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
    ],
    description: "",
    image: '/images/pals/Dogen.webp',
  },
  {
    id: "123",
    key: '',
    name: 'Dazemu',
    types: ["Ground"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 7,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 15,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 22,
        name: 'Stone Cannon',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Digs up a boulder and hurls it at an enemy.'
      },
      {
        level: 30,
        name: 'Earth Dash',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Dazemu\'s exclusive skill. Accelerates all at once and dashes forward at high speed.'
      },
      {
        level: 40,
        name: 'Rockburst',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Causes the ground to shake before hurling a massive stone mass at its surroundings.'
      },
      {
        level: 50,
        name: 'Sand Twister',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Creates multiple sand tornadoes. The tornadoes continuously spin in circles.'
      },
    ],
    description: "",
    image: '/images/pals/Dazemu.webp',
  },
  {
    id: "124",
    key: '',
    name: 'Mimog',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 7,
        name: 'Dark Cannon',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Hurls an energy ball imbued with dark energy at an enemy.'
      },
      {
        level: 15,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 22,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 30,
        name: 'Air Blade',
        type: '',
        cooldown: 0,
        power: 85,
        description: 'Sends out sharp blades of air in a fan shape.'
      },
      {
        level: 40,
        name: 'Holy Burst',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Creates a wide explosion of light at the enemy\'s location and around it.'
      },
      {
        level: 50,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
    ],
    description: "",
    image: '/images/pals/Mimog.webp',
  },
  {
    id: "125",
    key: '',
    name: 'Xenovader',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 7,
        name: 'Poison Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls poison sludge at an enemy.'
      },
      {
        level: 15,
        name: 'Umbral Surge',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Fires high-speed dark orbs in a fan shape, spreading as they travel.'
      },
      {
        level: 22,
        name: 'Dark Arrow',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires off dark energy that homes in on an enemy.'
      },
      {
        level: 30,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 40,
        name: 'Evil Slash',
        type: '',
        cooldown: 0,
        power: 95,
        description: 'Xenovader\'s exclusive skill. Swiftly pounces and slashes with its left hand.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Xenovader.webp',
  },
  {
    id: "126",
    key: '',
    name: 'Xenogard',
    types: ["Dragon"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Dragon Cannon',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls an energy ball imbued with draconic energy at an enemy.'
      },
      {
        level: 7,
        name: 'Dragon Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges draconic energy, damaging those around it.'
      },
      {
        level: 15,
        name: 'Air Blade',
        type: '',
        cooldown: 0,
        power: 85,
        description: 'Sends out sharp blades of air in a fan shape.'
      },
      {
        level: 22,
        name: 'Draconic Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it.'
      },
      {
        level: 30,
        name: 'Icicle Line',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Generates pillars of ice that move in a straight line in three directions.'
      },
      {
        level: 40,
        name: 'Comet Strike',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Drops a meteorite straight down, generating a shock wave around the impact area.'
      },
      {
        level: 50,
        name: 'Beam Slicer',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Mows down the area in front with a beam imbued with dragon power. The area struck by the beam will also explode after a short delay.'
      },
    ],
    description: "",
    image: '/images/pals/Xenogard.webp',
  },
  {
    id: "127",
    key: '',
    name: 'Xenolord',
    types: ["Dark", "Dragon"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Dragon Cannon',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls an energy ball imbued with draconic energy at an enemy.'
      },
      {
        level: 7,
        name: 'Umbral Surge',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Fires high-speed dark orbs in a fan shape, spreading as they travel.'
      },
      {
        level: 15,
        name: 'Satellite Bit',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Xenolord\'s exclusive skill. Generates four satellite-like wings with auto-attack functionality. These wings will automatically track and attack the enemy when the next attack is launched.'
      },
      {
        level: 22,
        name: 'Beam Slash',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Xenolord\'s exclusive skill. Generates a high-output beam sword with the right hand and delivers two powerful slashes while moving at high speed.'
      },
      {
        level: 30,
        name: 'Astral Ray',
        type: '',
        cooldown: 0,
        power: 170,
        description: 'Xenolord\'s exclusive skill. Concentrates energy filled with darkness and releases it all at once in a straight line.'
      },
      {
        level: 40,
        name: 'Cosmic Meteor',
        type: '',
        cooldown: 0,
        power: 180,
        description: 'Xenolord\'s exclusive skill. Soars into the air at the speed of light and releases countless meteor projectiles. Afterwards, transforms into a comet and charges forward, causing a massive explosion upon impact.'
      },
      {
        level: 50,
        name: 'Omega Laser',
        type: '',
        cooldown: 0,
        power: 200,
        description: 'Xenolord\'s exclusive skill. Summons the light of destruction from subspace and continuously fires it in all directions, burning everything in its sight to ashes.'
      },
    ],
    description: "",
    image: '/images/pals/Xenolord.webp',
  },
  {
    id: "128",
    key: '',
    name: 'Nitemary',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Dark Ball',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Unleashes a sphere of darkness that slowly tracks down an enemy.'
      },
      {
        level: 7,
        name: 'Umbral Surge',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Fires high-speed dark orbs in a fan shape, spreading as they travel.'
      },
      {
        level: 15,
        name: 'Dark Cannon',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Hurls an energy ball imbued with dark energy at an enemy.'
      },
      {
        level: 22,
        name: 'Dark Arrow',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires off dark energy that homes in on an enemy.'
      },
      {
        level: 30,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 40,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Dark Whisp',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Fires a menacing ball of dark energy that pursues enemies.'
      },
    ],
    description: "",
    image: '/images/pals/Nitemary.webp',
  },
  {
    id: "129",
    key: '',
    name: 'Starryon',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 7,
        name: 'Dark Ball',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Unleashes a sphere of darkness that slowly tracks down an enemy.'
      },
      {
        level: 15,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 22,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 30,
        name: 'Ignis Rage',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Infuses the surrounding ground with energy, causing it to explode after a set amount of time.'
      },
      {
        level: 40,
        name: 'Apocalypse',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Generates several dark vortexes around the enemy.'
      },
      {
        level: 50,
        name: 'Lethal Step',
        type: '',
        cooldown: 0,
        power: 140,
        description: 'Starryon\'s exclusive skill. Confuses enemies with flickering steps and launches slashing attack with its sharp horn.'
      },
    ],
    description: "",
    image: '/images/pals/Starryon.webp',
  },
  {
    id: "130",
    key: '',
    name: 'Silvegis',
    types: ["Dragon"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Dragon Cannon',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls an energy ball imbued with draconic energy at an enemy.'
      },
      {
        level: 7,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 15,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 22,
        name: 'Draconic Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Exhales breath imbued with draconic energy, dealing continuous damage to those in front of it.'
      },
      {
        level: 30,
        name: 'Blast Cannon',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Fires an energy bullet imbued with dragon power at the enemy\'s location. Upon impact, the bullet shatters and creates a frontal long-range explosion.'
      },
      {
        level: 40,
        name: 'Charge Cannon',
        type: '',
        cooldown: 0,
        power: 140,
        description: 'Fires an energy orb infused with draconic power at the enemy. The orb causes a wide-area explosion upon impact.'
      },
      {
        level: 50,
        name: 'Aegis Charge',
        type: '',
        cooldown: 0,
        power: 170,
        description: 'Silvegis\'s exclusive skill. Deploys a shield in front that reduces all types of attacks, then charges forward, crushing the enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Silvegis.webp',
  },
  {
    id: "131",
    key: '',
    name: 'Smokie',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 7,
        name: 'Umbral Surge',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Fires high-speed dark orbs in a fan shape, spreading as they travel.'
      },
      {
        level: 15,
        name: 'Dark Cannon',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Hurls an energy ball imbued with dark energy at an enemy.'
      },
      {
        level: 22,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 30,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 40,
        name: 'Comet Strike',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Drops a meteorite straight down, generating a shock wave around the impact area.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Smokie.webp',
  },
  {
    id: "132",
    key: '',
    name: 'Celesdir',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 7,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 15,
        name: 'Air Blade',
        type: '',
        cooldown: 0,
        power: 85,
        description: 'Sends out sharp blades of air in a fan shape.'
      },
      {
        level: 22,
        name: 'Comet Strike',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Drops a meteorite straight down, generating a shock wave around the impact area.'
      },
      {
        level: 30,
        name: 'Holy Burst',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Creates a wide explosion of light at the enemy\'s location and around it.'
      },
      {
        level: 40,
        name: 'Pal Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges destructive energy before firing a high-powered beam forward across a wide area.'
      },
      {
        level: 50,
        name: 'Holy Nova',
        type: '',
        cooldown: 0,
        power: 200,
        description: 'Celesdir\'s exclusive skill. After igniting a burst of holy light across a vast area ahead, it strides forward, radiating holy light around itself.'
      },
    ],
    description: "",
    image: '/images/pals/Celesdir.webp',
  },
  {
    id: "133",
    key: '',
    name: 'Omascul',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Dark Ball',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Unleashes a sphere of darkness that slowly tracks down an enemy.'
      },
      {
        level: 7,
        name: 'Umbral Surge',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Fires high-speed dark orbs in a fan shape, spreading as they travel.'
      },
      {
        level: 15,
        name: 'Dark Cannon',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Hurls an energy ball imbued with dark energy at an enemy.'
      },
      {
        level: 22,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 30,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 40,
        name: 'Soul Drain',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Omasculs exclusive skill. Suddenly appears near the enemy, firmly restraining them with its arms, and absorbs the HP of the restrained enemy.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Omascul.webp',
  },
  {
    id: "134",
    key: '',
    name: 'Splatterina',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Dark Ball',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Unleashes a sphere of darkness that slowly tracks down an enemy.'
      },
      {
        level: 7,
        name: 'Umbral Surge',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Fires high-speed dark orbs in a fan shape, spreading as they travel.'
      },
      {
        level: 15,
        name: 'Dark Cannon',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Hurls an energy ball imbued with dark energy at an enemy.'
      },
      {
        level: 22,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 30,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 40,
        name: 'Grudge Barrage',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Splatterina\'s exclusive skill. Teleports instantly and launches a slash. It then teleports above the enemy, drives its weapon into them, and unleashes a wave of dark energy.'
      },
      {
        level: 50,
        name: 'Dark Whisp',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Fires a menacing ball of dark energy that pursues enemies.'
      },
    ],
    description: "",
    image: '/images/pals/Splatterina.webp',
  },
  {
    id: "135",
    key: '',
    name: 'Tarantriss',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Poison Fog',
        type: '',
        cooldown: 0,
        power: 0,
        description: 'Generates a fog of poison in front, causing the opponent to become poisoned.'
      },
      {
        level: 7,
        name: 'Poison Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls poison sludge at an enemy.'
      },
      {
        level: 15,
        name: 'Umbral Surge',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Fires high-speed dark orbs in a fan shape, spreading as they travel.'
      },
      {
        level: 22,
        name: 'Dark Arrow',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires off dark energy that homes in on an enemy.'
      },
      {
        level: 30,
        name: 'Webstrike Impact',
        type: '',
        cooldown: 0,
        power: 85,
        description: 'Tarantriss\'s exclusive skill. Spits out a ball of thread, entangling the target it hits. Then, rushes at full speed to the trapped target and delivers three slashing strikes to finish it off.'
      },
      {
        level: 40,
        name: 'Poison Shower',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Focuses energy into the body and scatters poison orbs in all directions.'
      },
      {
        level: 50,
        name: 'Apocalypse',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Generates several dark vortexes around the enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Tarantriss.webp',
  },
  {
    id: "136",
    key: '',
    name: 'Azurmane',
    types: ["Electric"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Spark Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Releases lightning orbs in a fan shape, spreading as they travel.'
      },
      {
        level: 7,
        name: 'Shockwave',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Quickly discharges electricity, shocking those around it.'
      },
      {
        level: 15,
        name: 'Lightning Streak',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Generates a lightning bolt that moves forward in a line.'
      },
      {
        level: 22,
        name: 'TriSpark',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'A high-speed lightning ball that flies in a straight line. Simultaneously fires slow lightning balls that track the enemy.'
      },
      {
        level: 30,
        name: 'All Range Thunder',
        type: '',
        cooldown: 0,
        power: 125,
        description: 'Generates lightning strikes that travel in a straight line in all directions.'
      },
      {
        level: 40,
        name: 'Thunder Rail',
        type: '',
        cooldown: 0,
        power: 200,
        description: 'Charge the power of lightning to the limit and fires multiple simultaneous electric shocks at the enemy.'
      },
      {
        level: 50,
        name: 'Bolt Blink',
        type: '',
        cooldown: 0,
        power: 200,
        description: 'Azurmane\'s exclusive skill. Moves with the speed of lightning, engulfing everything in its path.'
      },
    ],
    description: "",
    image: '/images/pals/Azurmane.webp',
  },
  {
    id: "137",
    key: '',
    name: 'Bastigor',
    types: ["Ice"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Stone Cannon',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Digs up a boulder and hurls it at an enemy.'
      },
      {
        level: 7,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 15,
        name: 'Crystal Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Enshrouds an enemy in a frigid blast of air, dealing continuous damage.'
      },
      {
        level: 22,
        name: 'Frost Talon',
        type: '',
        cooldown: 0,
        power: 95,
        description: 'Bastigor\'s exclusive skill. Stomps the ground, creating a fissure of ice ahead. Then, rapidly closes the distance and slashes with the right hand.'
      },
      {
        level: 30,
        name: 'Rockburst',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Causes the ground to shake before hurling a massive stone mass at its surroundings.'
      },
      {
        level: 40,
        name: 'Stone Beat',
        type: '',
        cooldown: 0,
        power: 170,
        description: 'Shakes the ground and lifts a massive boulder into the air.'
      },
      {
        level: 50,
        name: 'Diamond Rain',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Creates numerous lumps of ice that are consecutively dropped on a foe\'s head.'
      },
      {
        level: 55,
        name: 'Glacial Impact',
        type: '',
        cooldown: 0,
        power: 190,
        description: 'Bastigor\'s exclusive skill. Let out a mighty roar and leap into the air. Then, embed both arms into the ground to create a massive ice crack. Continue to channel power into the ground, ultimately causing a large explosion of ice energy'
      },
    ],
    description: "",
    image: '/images/pals/Bastigor.webp',
  },
  {
    id: "138",
    key: '',
    name: 'Prunelia',
    types: ["Grass", "Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Poison Fog',
        type: '',
        cooldown: 0,
        power: 0,
        description: 'Generates a fog of poison in front, causing the opponent to become poisoned.'
      },
      {
        level: 7,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 15,
        name: 'Poison Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls poison sludge at an enemy.'
      },
      {
        level: 22,
        name: 'Seed Mine',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Launches a deadly seed. If it hits an enemy, the seed explodes.'
      },
      {
        level: 30,
        name: 'Poison Shower',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Focuses energy into the body and scatters poison orbs in all directions.'
      },
      {
        level: 40,
        name: 'Spine Vine',
        type: '',
        cooldown: 0,
        power: 95,
        description: 'Generates spiny thorns that chase an enemy along the ground, piercing them from below.'
      },
      {
        level: 50,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Prunelia.webp',
  },
  {
    id: "139",
    key: '',
    name: 'Nyafia',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Poison Fog',
        type: '',
        cooldown: 0,
        power: 0,
        description: 'Generates a fog of poison in front, causing the opponent to become poisoned.'
      },
      {
        level: 7,
        name: 'Poison Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls poison sludge at an enemy.'
      },
      {
        level: 15,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 22,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 30,
        name: 'Poison Shower',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Focuses energy into the body and scatters poison orbs in all directions.'
      },
      {
        level: 40,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 50,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
    ],
    description: "",
    image: '/images/pals/Nyafia.webp',
  },
  {
    id: "140",
    key: '',
    name: 'Gildane',
    types: ["Ground"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 7,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 15,
        name: 'Stone Blast',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires a barrage of stones forward.'
      },
      {
        level: 22,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 30,
        name: 'Rockburst',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Causes the ground to shake before hurling a massive stone mass at its surroundings.'
      },
      {
        level: 40,
        name: 'Crash Dash',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Gildane\'s exclusive skill. Charges forward, hurling rocks to the left and right with great force.'
      },
      {
        level: 50,
        name: 'Stone Beat',
        type: '',
        cooldown: 0,
        power: 170,
        description: 'Shakes the ground and lifts a massive boulder into the air.'
      },
    ],
    description: "",
    image: '/images/pals/Gildane.webp',
  },
  {
    id: "141",
    key: '',
    name: 'Herbil',
    types: ["Grass", "Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Wind Cutter',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Fires a high speed blade of wind that flies straight at an enemy.'
      },
      {
        level: 7,
        name: 'Seed Machine Gun',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires a volley of hard seeds at enemies in front of it.'
      },
      {
        level: 15,
        name: 'Grass Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 22,
        name: 'Air Blade',
        type: '',
        cooldown: 0,
        power: 85,
        description: 'Sends out sharp blades of air in a fan shape.'
      },
      {
        level: 30,
        name: 'Konoha Flip',
        type: '',
        cooldown: 0,
        power: 105,
        description: 'Herbil\'s exclusive skill. After a brief moment of preparation, charges at the enemy at high speed, finishing with a flip.'
      },
      {
        level: 40,
        name: 'Reflect Leaf',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Launches a blade of wind that rebounds off enemies or trees, striking repeatedly. Can ricochet up to four times.'
      },
      {
        level: 50,
        name: 'Crosswind',
        type: '',
        cooldown: 0,
        power: 140,
        description: 'Conjures blades of wind in front of the enemy, converging to deliver a cutting cross attack.'
      },
    ],
    description: "",
    image: '/images/pals/Herbil.webp',
  },
  {
    id: "142",
    key: '',
    name: 'Icelyn',
    types: ["Ice"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 7,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 15,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 22,
        name: 'Crystal Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Enshrouds an enemy in a frigid blast of air, dealing continuous damage.'
      },
      {
        level: 30,
        name: 'Freeze Wall',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a wall of ice that rises from the ground. The ice wall remains standing for a while, and breaks after taking enough damage.'
      },
      {
        level: 40,
        name: 'Blizzard Spike',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Creates a giant lump of ice and hurls it at an enemy. It deals damage to those in the surrounding area upon impact.'
      },
      {
        level: 50,
        name: 'Diamond Rain',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Creates numerous lumps of ice that are consecutively dropped on a foe\'s head.'
      },
    ],
    description: "",
    image: '/images/pals/Icelyn.webp',
  },
  {
    id: "143",
    key: '',
    name: 'Frostplume',
    types: ["Ice"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 7,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 15,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 22,
        name: 'Crystal Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Enshrouds an enemy in a frigid blast of air, dealing continuous damage.'
      },
      {
        level: 30,
        name: 'Freeze Wall',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a wall of ice that rises from the ground. The ice wall remains standing for a while, and breaks after taking enough damage.'
      },
      {
        level: 40,
        name: 'Icicle Bullet',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Generates multiple sharp ice blocks in the sky and fires them at the enemy.'
      },
      {
        level: 50,
        name: 'Diamond Rain',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Creates numerous lumps of ice that are consecutively dropped on a foe\'s head.'
      },
    ],
    description: "",
    image: '/images/pals/Frostplume.webp',
  },
  {
    id: "144",
    key: '',
    name: 'Palumba',
    types: ["Grass"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Seed Machine Gun',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Fires a volley of hard seeds at enemies in front of it.'
      },
      {
        level: 7,
        name: 'Seed Mine',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Launches a deadly seed. If it hits an enemy, the seed explodes.'
      },
      {
        level: 15,
        name: 'Grass Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 22,
        name: 'Wind Edge',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Launches sharp blades of air that fan out.'
      },
      {
        level: 30,
        name: 'Dash Kick',
        type: '',
        cooldown: 0,
        power: 125,
        description: 'Palumba\'s exclusive skill. Dashes to build up speed, then launches a devastating airborne kick at its target.'
      },
      {
        level: 40,
        name: 'Reflect Leaf',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Launches a blade of wind that rebounds off enemies or trees, striking repeatedly. Can ricochet up to four times.'
      },
      {
        level: 50,
        name: 'Crosswind',
        type: '',
        cooldown: 0,
        power: 140,
        description: 'Conjures blades of wind in front of the enemy, converging to deliver a cutting cross attack.'
      },
    ],
    description: "",
    image: '/images/pals/Palumba.webp',
  },
  {
    id: "145",
    key: '',
    name: 'Braloha',
    types: ["Grass", "Ground"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 7,
        name: 'Seed Mine',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Launches a deadly seed. If it hits an enemy, the seed explodes.'
      },
      {
        level: 15,
        name: 'Grass Tornado',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Generates two tornadoes on either side before launching them at an enemy.'
      },
      {
        level: 22,
        name: 'Spine Vine',
        type: '',
        cooldown: 0,
        power: 95,
        description: 'Generates spiny thorns that chase an enemy along the ground, piercing them from below.'
      },
      {
        level: 30,
        name: 'Deep Breath',
        type: '',
        cooldown: 0,
        power: 135,
        description: 'Braloha\'s exclusive skill. From the base of its long neck to the tip of its snout, it gradually spreads the breath of grass element.'
      },
      {
        level: 40,
        name: 'Solar Blast',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges solar energy before blasting enemies with a powerful beam.'
      },
      {
        level: 50,
        name: 'Stone Beat',
        type: '',
        cooldown: 0,
        power: 170,
        description: 'Shakes the ground and lifts a massive boulder into the air.'
      },
    ],
    description: "",
    image: '/images/pals/Braloha.webp',
  },
  {
    id: "146",
    key: '',
    name: 'Munchill',
    types: ["Ice", "Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 7,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 15,
        name: 'Crystal Breath',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Enshrouds an enemy in a frigid blast of air, dealing continuous damage.'
      },
      {
        level: 22,
        name: 'Chaotic Spray',
        type: '',
        cooldown: 0,
        power: 95,
        description: 'Munchill\'s exclusive skill. Coughs up three cold grenades kept undigested inside its body and lobs them at enemies. May occasionally spit out something more dangerous...?'
      },
      {
        level: 30,
        name: 'Freeze Wall',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a wall of ice that rises from the ground. The ice wall remains standing for a while, and breaks after taking enough damage.'
      },
      {
        level: 40,
        name: 'Torrential Blast',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Fires a high-pressure stream of water forward. After a short delay, the stream branches off to the left and right.'
      },
      {
        level: 50,
        name: 'Diamond Rain',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Creates numerous lumps of ice that are consecutively dropped on a foe\'s head.'
      },
    ],
    description: "",
    image: '/images/pals/Munchill.webp',
  },
  {
    id: "147",
    key: '',
    name: 'Polapup',
    types: ["Ice", "Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 7,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 15,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 22,
        name: 'Splash',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Generates a column of water that travels in a straight line.'
      },
      {
        level: 30,
        name: 'Freeze Wall',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a wall of ice that rises from the ground. The ice wall remains standing for a while, and breaks after taking enough damage.'
      },
      {
        level: 40,
        name: 'Icicle Line',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Generates pillars of ice that move in a straight line in three directions.'
      },
      {
        level: 50,
        name: 'Aqua Surge',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Generates waves that surge around the enemy from all sides. They converge and explode at the center, erupting into a column of water.'
      },
    ],
    description: "",
    image: '/images/pals/Polapup.webp',
  },
  {
    id: "148",
    key: '',
    name: 'Turtacle',
    types: ["Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Hydro Jet',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a high speed ball of water at an enemy.'
      },
      {
        level: 7,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 15,
        name: 'Hydro Spin',
        type: '',
        cooldown: 0,
        power: 95,
        description: 'Turtacle\'s exclusive skill. Uses jet-powered propulsion to spin rapidly and launch itself at the enemy.'
      },
      {
        level: 22,
        name: 'Aqua Burst',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of water and hurls it at an enemy.'
      },
      {
        level: 30,
        name: 'Torrential Blast',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Fires a high-pressure stream of water forward. After a short delay, the stream branches off to the left and right.'
      },
      {
        level: 40,
        name: 'Hydro Slicer',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Mows down the frontal area with a blast of compressed water. The area struck by the blast erupts with water after a short delay.'
      },
      {
        level: 50,
        name: 'Hydro Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it.'
      },
    ],
    description: "",
    image: '/images/pals/Turtacle.webp',
  },
  {
    id: "148B",
    key: '',
    name: 'Turtacle Terra',
    types: ["Water", "Ground"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Bog Blast',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls sticky mud at an enemy.'
      },
      {
        level: 7,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 15,
        name: 'Hydro Spin',
        type: '',
        cooldown: 0,
        power: 95,
        description: 'Turtacle\'s exclusive skill. Uses jet-powered propulsion to spin rapidly and launch itself at the enemy.'
      },
      {
        level: 22,
        name: 'Aqua Burst',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of water and hurls it at an enemy.'
      },
      {
        level: 30,
        name: 'Rockburst',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Causes the ground to shake before hurling a massive stone mass at its surroundings.'
      },
      {
        level: 40,
        name: 'Rock Lance',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Generates a sharp rock spear under an enemy.'
      },
      {
        level: 50,
        name: 'Stone Beat',
        type: '',
        cooldown: 0,
        power: 170,
        description: 'Shakes the ground and lifts a massive boulder into the air.'
      },
    ],
    description: "",
    image: '/images/pals/Turtacle_Terra.webp',
  },
  {
    id: "149",
    key: '',
    name: 'Jellroy',
    types: ["Water", "Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Poison Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls poison sludge at an enemy.'
      },
      {
        level: 7,
        name: 'Umbral Surge',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Fires high-speed dark orbs in a fan shape, spreading as they travel.'
      },
      {
        level: 15,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 22,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 30,
        name: 'Poison Shower',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Focuses energy into the body and scatters poison orbs in all directions.'
      },
      {
        level: 40,
        name: 'Hydro Slicer',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Mows down the frontal area with a blast of compressed water. The area struck by the blast erupts with water after a short delay.'
      },
      {
        level: 50,
        name: 'Dark Whisp',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Fires a menacing ball of dark energy that pursues enemies.'
      },
    ],
    description: "",
    image: '/images/pals/Jellroy.webp',
  },
  {
    id: "150",
    key: '',
    name: 'Jelliette',
    types: ["Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Hydro Jet',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a high speed ball of water at an enemy.'
      },
      {
        level: 7,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 15,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 22,
        name: 'Aqua Burst',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of water and hurls it at an enemy.'
      },
      {
        level: 30,
        name: 'Curtain Splash',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Continously creates walls made from water columns at the enemy\'s location.'
      },
      {
        level: 40,
        name: 'Hydro Slicer',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Mows down the frontal area with a blast of compressed water. The area struck by the blast erupts with water after a short delay.'
      },
      {
        level: 50,
        name: 'Aqua Surge',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Generates waves that surge around the enemy from all sides. They converge and explode at the center, erupting into a column of water.'
      },
    ],
    description: "",
    image: '/images/pals/Jelliette.webp',
  },
  {
    id: "151",
    key: '',
    name: 'Gloopie',
    types: ["Water", "Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Hydro Jet',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a high speed ball of water at an enemy.'
      },
      {
        level: 7,
        name: 'Shadow Burst',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Quickly discharges dark energy, damaging those around it.'
      },
      {
        level: 15,
        name: 'Smoke Jet',
        type: '',
        cooldown: 0,
        power: 85,
        description: 'Gloopie\'s exclusive skill. Releases smoke to conceal itself, then launches a surprise headbutt from the shadows.'
      },
      {
        level: 22,
        name: 'Splash',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Generates a column of water that travels in a straight line.'
      },
      {
        level: 30,
        name: 'Nightmare Ball',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a giant ball of darkness and hurls it at an enemy.'
      },
      {
        level: 40,
        name: 'Torrential Blast',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Fires a high-pressure stream of water forward. After a short delay, the stream branches off to the left and right.'
      },
      {
        level: 50,
        name: 'Hydro Slicer',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Mows down the frontal area with a blast of compressed water. The area struck by the blast erupts with water after a short delay.'
      },
    ],
    description: "",
    image: '/images/pals/Gloopie.webp',
  },
  {
    id: "152",
    key: '',
    name: 'Finsider',
    types: ["Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 7,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 15,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 22,
        name: 'Torrential Blast',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Fires a high-pressure stream of water forward. After a short delay, the stream branches off to the left and right.'
      },
      {
        level: 30,
        name: 'Trigger Happy',
        type: '',
        cooldown: 0,
        power: 115,
        description: 'Finsider\'s exclusive skill. Draws twin water blasters from its mouth, firing six shots alternately left and right, then finishes by combining both blasters to unleash one powerful shot.'
      },
      {
        level: 40,
        name: 'Curtain Splash',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Continously creates walls made from water columns at the enemy\'s location.'
      },
      {
        level: 50,
        name: 'Hydro Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Shoots pressurized water at extreme velocities, sweeping over a wide area in front of it.'
      },
    ],
    description: "",
    image: '/images/pals/Finsider.webp',
  },
  {
    id: "152B",
    key: '',
    name: 'Finsider Ignis',
    types: ["Water", "Fire"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 7,
        name: 'Spirit Fire',
        type: '',
        cooldown: 0,
        power: 45,
        description: 'Shoots fireballs towards an enemy. The fireballs explode after a short distance, generating smaller fireballs that spread forward.'
      },
      {
        level: 15,
        name: 'Ignis Breath',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Shoots flames at an enemy, dealing continuous damage.'
      },
      {
        level: 22,
        name: 'Splash',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Generates a column of water that travels in a straight line.'
      },
      {
        level: 30,
        name: 'Trigger Happy',
        type: '',
        cooldown: 0,
        power: 115,
        description: 'Finsider\'s exclusive skill. Draws twin water blasters from its mouth, firing six shots alternately left and right, then finishes by combining both blasters to unleash one powerful shot.'
      },
      {
        level: 40,
        name: 'Flame Funnel',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Creates multiple spheres of fiery energy, from which countless fireballs shoot towards the enemy.'
      },
      {
        level: 50,
        name: 'Fire Ball',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact.'
      },
    ],
    description: "",
    image: '/images/pals/Finsider_Ignis.webp',
  },
  {
    id: "153",
    key: '',
    name: 'Ghangler',
    types: ["Dark", "Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 7,
        name: 'Dark Ball',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Unleashes a sphere of darkness that slowly tracks down an enemy.'
      },
      {
        level: 15,
        name: 'Dark Arrow',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires off dark energy that homes in on an enemy.'
      },
      {
        level: 22,
        name: 'Spirit Flame',
        type: '',
        cooldown: 0,
        power: 75,
        description: 'Fires three balls of malice that relentlessly pursue an enemy.'
      },
      {
        level: 30,
        name: 'Lantern Sweep',
        type: '',
        cooldown: 0,
        power: 95,
        description: 'Ghangler\'s exclusive skill. Lashes forward with the lantern atop its head, sweeping broadly ahead.'
      },
      {
        level: 40,
        name: 'Dark Laser',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Charges dark energy before blasting enemies with a powerful beam.'
      },
      {
        level: 50,
        name: 'Aqua Surge',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Generates waves that surge around the enemy from all sides. They converge and explode at the center, erupting into a column of water.'
      },
    ],
    description: "",
    image: '/images/pals/Ghangler.webp',
  },
  {
    id: "153B",
    key: '',
    name: 'Ghangler Ignis',
    types: ["Fire", "Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 7,
        name: 'Flare Arrow',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires three flaming arrows in succession that home in on an enemy.'
      },
      {
        level: 15,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 22,
        name: 'Flame Wall',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a wall of flames at the enemy\'s location. The wall of flames will remain for a while, and deal damage to the enemies it touches.'
      },
      {
        level: 30,
        name: 'Scorching Lantern Sweep',
        type: '',
        cooldown: 0,
        power: 95,
        description: 'Ghangler Ignis\'s exclusive skill. Lashes forward with the flaming lantern atop its head, sweeping broadly ahead.'
      },
      {
        level: 40,
        name: 'Fire Ball',
        type: '',
        cooldown: 0,
        power: 150,
        description: 'Creates a giant ball of flame and hurls it at an enemy. The ball explodes over a wide area upon impact.'
      },
      {
        level: 50,
        name: 'Aqua Surge',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Generates waves that surge around the enemy from all sides. They converge and explode at the center, erupting into a column of water.'
      },
    ],
    description: "",
    image: '/images/pals/Ghangler_Ignis.webp',
  },
  {
    id: "154",
    key: '',
    name: 'Whalaska',
    types: ["Ice", "Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ice Missile',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Creates ice lances in the air that fly towards enemies.'
      },
      {
        level: 7,
        name: 'Icicle Cutter',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Creates a crescent blade of ice and hurls it forward.'
      },
      {
        level: 15,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 22,
        name: 'Splash',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Generates a column of water that travels in a straight line.'
      },
      {
        level: 30,
        name: 'Freeze Wall',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a wall of ice that rises from the ground. The ice wall remains standing for a while, and breaks after taking enough damage.'
      },
      {
        level: 40,
        name: 'High Breach',
        type: '',
        cooldown: 0,
        power: 165,
        description: 'Whalaska\'s exclusive skill. Charges straight ahead and briefly submerges, then bursts high into the air to launch an attack. An ice-element explosion occurs upon emerging.'
      },
      {
        level: 50,
        name: 'Geyser Gush',
        type: '',
        cooldown: 0,
        power: 180,
        description: 'Erupts massive pillars of water beneath and around the enemy.'
      },
    ],
    description: "",
    image: '/images/pals/Whalaska.webp',
  },
  {
    id: "154B",
    key: '',
    name: 'Whalaska Ignis',
    types: ["Ice", "Fire"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ignis Blast',
        type: '',
        cooldown: 0,
        power: 30,
        description: 'Hurls a ball of fire straight at an enemy.'
      },
      {
        level: 7,
        name: 'Flare Arrow',
        type: '',
        cooldown: 0,
        power: 55,
        description: 'Fires three flaming arrows in succession that home in on an enemy.'
      },
      {
        level: 15,
        name: 'Iceberg',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Summons a sharp ice lance under an enemy.'
      },
      {
        level: 22,
        name: 'Flame Wall',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a wall of flames at the enemy\'s location. The wall of flames will remain for a while, and deal damage to the enemies it touches.'
      },
      {
        level: 30,
        name: 'Freeze Wall',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Creates a wall of ice that rises from the ground. The ice wall remains standing for a while, and breaks after taking enough damage.'
      },
      {
        level: 40,
        name: 'Volcanic Rain',
        type: '',
        cooldown: 0,
        power: 130,
        description: 'Fires countless volcanic bombs into the sky. After a while, the bombs rain down around their originator.'
      },
      {
        level: 50,
        name: 'High Breach',
        type: '',
        cooldown: 0,
        power: 165,
        description: 'Whalaska\'s exclusive skill. Charges straight ahead and briefly submerges, then bursts high into the air to launch an attack. An ice-element explosion occurs upon emerging.'
      },
    ],
    description: "",
    image: '/images/pals/Whalaska_Ignis.webp',
  },
  {
    id: "155",
    key: '',
    name: 'Neptilius',
    types: ["Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Aqua Gun',
        type: '',
        cooldown: 0,
        power: 40,
        description: 'Hurls a ball of water straight at an enemy.'
      },
      {
        level: 7,
        name: 'Bubble Blast',
        type: '',
        cooldown: 0,
        power: 65,
        description: 'Fires numerous bubbles that slowly pursue an enemy.'
      },
      {
        level: 15,
        name: 'Splash',
        type: '',
        cooldown: 0,
        power: 90,
        description: 'Generates a column of water that travels in a straight line.'
      },
      {
        level: 22,
        name: 'Torrential Blast',
        type: '',
        cooldown: 0,
        power: 110,
        description: 'Fires a high-pressure stream of water forward. After a short delay, the stream branches off to the left and right.'
      },
      {
        level: 30,
        name: 'Curtain Splash',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Continously creates walls made from water columns at the enemy\'s location.'
      },
      {
        level: 40,
        name: 'Aqua Surge',
        type: '',
        cooldown: 0,
        power: 160,
        description: 'Generates waves that surge around the enemy from all sides. They converge and explode at the center, erupting into a column of water.'
      },
      {
        level: 50,
        name: 'Geyser Gush',
        type: '',
        cooldown: 0,
        power: 180,
        description: 'Erupts massive pillars of water beneath and around the enemy.'
      },
      {
        level: 60,
        name: 'Thalassonic Laser',
        type: '',
        cooldown: 0,
        power: 200,
        description: 'Neptilius\'s exclusive skill. Rising slightly, it gathers water at its mouth, then sweeps a high-pressure stream vertically and horizontally three times. Fissures form at the swept locations, erupting with water.'
      },
    ],
    description: "",
    image: '/images/pals/Neptilius.webp',
  },
  {
    id: "156",
    key: '',
    name: 'Hartalis',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Power Shot',
        type: '',
        cooldown: 0,
        power: 35,
        description: 'Charges energy into a focused blast.'
      },
      {
        level: 7,
        name: 'Power Bomb',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Charges a massive amount of energy before firing a large destructive ball.'
      },
      {
        level: 15,
        name: 'Holy Burst',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Creates a wide explosion of light at the enemy\'s location and around it.'
      },
      {
        level: 22,
        name: 'Radiant Barrage',
        type: '',
        cooldown: 0,
        power: 120,
        description: 'Unleashes a sphere of light that slowly tracks down an enemy. As it nears its target, it splits into countless light bullets that strike all at once.'
      },
      {
        level: 30,
        name: 'Divine Wing',
        type: '',
        cooldown: 0,
        power: 140,
        description: 'Hartalis\' exclusive skill. Leaps back and sprouts wings of light, then dives toward the enemy.'
      },
      {
        level: 40,
        name: 'Sacred Rain',
        type: '',
        cooldown: 0,
        power: 200,
        description: 'Hartalis\' exclusive skill. Fades from sight, then calls down a massive barrage of light pillars centered on its position.'
      },
      {
        level: 50,
        name: 'Purifying Light',
        type: '',
        cooldown: 0,
        power: 250,
        description: 'Hartalis\' exclusive skill. Leaps high into the air, condensing immense energy into a descending sphere of light. When it strikes the ground, it purifies all on the ground below.'
      },
    ],
    description: "",
    image: '/images/pals/Hartalis.webp',
  },
  {
    id: "",
    key: '',
    name: 'Green Slime',
    types: ["Grass"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Slime Press (Grass)',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Green Slime\'s exclusive skill. Leaps toward the enemy and delivers an attack.'
      },
    ],
    description: "",
    image: '/images/pals/Green_Slime.webp',
  },
  {
    id: "",
    key: '',
    name: 'Blue Slime',
    types: ["Water"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Slime Press (Water)',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Blue Slime\'s exclusive skill. Leaps toward the enemy and delivers an attack.'
      },
    ],
    description: "",
    image: '/images/pals/Blue_Slime.webp',
  },
  {
    id: "",
    key: '',
    name: 'Red Slime',
    types: ["Fire"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Slime Press (Fire)',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Red Slime\'s exclusive skill. Leaps toward the enemy and delivers an attack.'
      },
    ],
    description: "",
    image: '/images/pals/Red_Slime.webp',
  },
  {
    id: "",
    key: '',
    name: 'Purple Slime',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Slime Press (Dark)',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Purple Slime\'s exclusive skill. Leaps toward the enemy and delivers an attack.'
      },
    ],
    description: "",
    image: '/images/pals/Purple_Slime.webp',
  },
  {
    id: "",
    key: '',
    name: 'Illuminant Slime',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Slime Press (Neutral)',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Illuminant Slime\'s exclusive skill. Leaps toward the enemy and delivers an attack.'
      },
    ],
    description: "",
    image: '/images/pals/Illuminant_Slime.webp',
  },
  {
    id: "",
    key: '',
    name: 'Rainbow Slime',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Slime Press (Rainbow)',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Rainbow Slime\'s exclusive skill. Leaps toward the enemy and delivers an attack.'
      },
    ],
    description: "",
    image: '/images/pals/Rainbow_Slime.webp',
  },
  {
    id: "",
    key: '',
    name: 'Enchanted Sword',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Sword Charge',
        type: '',
        cooldown: 0,
        power: 80,
        description: 'Enchanted Sword\'s exclusive skill. Lunges forward to deliver a sharp thrust.'
      },
    ],
    description: "",
    image: '/images/pals/Enchanted_Sword.webp',
  },
  {
    id: "",
    key: '',
    name: 'Cave Bat',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Winged Assault',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Cave Bat\'s exclusive skill. Using its whole body, it lunges at the enemy, bouncing off the ground or walls on impact.'
      },
    ],
    description: "",
    image: '/images/pals/Cave_Bat.webp',
  },
  {
    id: "",
    key: '',
    name: 'Illuminant Bat',
    types: ["Neutral"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Winged Assault',
        type: '',
        cooldown: 0,
        power: 70,
        description: 'Cave Bat\'s exclusive skill. Using its whole body, it lunges at the enemy, bouncing off the ground or walls on impact.'
      },
    ],
    description: "",
    image: '/images/pals/Illuminant_Bat.webp',
  },
  {
    id: "",
    key: '',
    name: 'Eye of Cthulhu',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Lock-On Lunge',
        type: '',
        cooldown: 0,
        power: 100,
        description: 'Eye of Cthulhu\'s exclusive skill. Repeatedly charges at the enemy.'
      },
      {
        level: 2,
        name: 'Servant Call',
        type: '',
        cooldown: 0,
        power: 50,
        description: 'Eye of Cthulhu\'s exclusive skill. Summons four Servants that charge at enemies to deal damage. Servants disappear after taking damage or after a short time.'
      },
    ],
    description: "",
    image: '/images/pals/Eye_of_Cthulhu.webp',
  },
  {
    id: "",
    key: '',
    name: 'Demon Eye',
    types: ["Dark"],
    suitability: {  },
    breedingPower: 0,
    stats: {
      hp: 0,
      attack: { melee: 0, ranged: 0 },
      defense: 0,
      speed: { ride: 0, run: 0, walk: 0 },
      stamina: 0,
      support: 0,
      food: 0
    },
    aura: {
      name: '',
      description: '',
      tech: null
    },
    skills: [
      {
        level: 1,
        name: 'Ocular Rush',
        type: '',
        cooldown: 0,
        power: 60,
        description: 'Demon Eye\'s exclusive skill. Charges at the enemy, bouncing off the ground or walls on impact.'
      },
    ],
    description: "",
    image: '/images/pals/Demon_Eye.webp',
  },
];