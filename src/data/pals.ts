export interface PalStats {
  hp: number;
  attack: number;
  defense: number;
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

export interface PalData {
  id: number;
  key: string;
  name: string;
  types: string[];
  stats: PalStats;
  suitability: WorkSuitability;
  breedingPower: number;
  description: string;
  image?: string;
}

export const pals: PalData[] = [
  {
    id: 1,
    key: 'lamball',
    name: 'Lamball',
    types: ['Neutral'],
    stats: { hp: 70, attack: 70, defense: 70 },
    suitability: { handiwork: 1, transporting: 1, farming: 1 },
    breedingPower: 1470,
    description: "A ball of wool. It rolls down slopes when threatened.",
    image: '/images/pals/Lamball_icon.png',
  },
  {
    id: 2,
    key: 'cattiva',
    name: 'Cattiva',
    types: ['Neutral'],
    stats: { hp: 70, attack: 70, defense: 70 },
    suitability: { handiwork: 1, gathering: 1, mining: 1, transporting: 1 },
    breedingPower: 1460,
    description: "A cowardly cat. It pretends to be tough but runs away easily.",
    image: '/images/pals/Cattiva_icon.webp',
  },
  {
    id: 3,
    key: 'chikipi',
    name: 'Chikipi',
    types: ['Neutral'],
    stats: { hp: 60, attack: 60, defense: 60 },
    suitability: { gathering: 1, farming: 1 },
    breedingPower: 1500,
    description: "Extremely weak. Useful for egg farming.",
    image: '/images/pals/Chikipi_icon.webp',
  },
  {
    id: 14,
    key: 'vixy',
    name: 'Vixy',
    types: ['Neutral'],
    stats: { hp: 70, attack: 70, defense: 70 },
    suitability: { gathering: 1, farming: 1 },
    breedingPower: 1465,
    description: "Produces Pal Spheres when assigned to a Ranch.",
    image: '/images/pals/Vixy_icon.webp',
  },
  {
    id: 18,
    key: 'cremis',
    name: 'Cremis',
    types: ['Neutral'],
    stats: { hp: 70, attack: 70, defense: 70 },
    suitability: { gathering: 1, farming: 1 },
    breedingPower: 1455,
    description: "Produces Wool. Looks like a fluffy cloud.",
    image: '/images/pals/cremis.svg',
  },
  {
    id: 24,
    key: 'mau',
    name: 'Mau',
    types: ['Dark'],
    stats: { hp: 70, attack: 70, defense: 70 },
    suitability: { farming: 1 },
    breedingPower: 1480,
    description: "Produces Gold Coins.",
    image: '/images/pals/mau.svg',
  },
  {
    id: 100,
    key: 'anubis',
    name: 'Anubis',
    types: ['Ground'],
    stats: { hp: 120, attack: 130, defense: 100 },
    suitability: { handiwork: 4, mining: 3, transporting: 2 },
    breedingPower: 570,
    description: "Guardian of the desert. Known for its exceptional crafting speed.",
    image: '/images/pals/Anubis_icon.webp',
  },
  {
    id: 101,
    key: 'jormuntide',
    name: 'Jormuntide',
    types: ['Dragon', 'Water'],
    stats: { hp: 130, attack: 120, defense: 100 },
    suitability: { watering: 4 },
    breedingPower: 300,
    description: "Legendary dragon of the sea.",
    image: '/images/pals/jormuntide.svg',
  },
  {
    id: 102,
    key: 'frostallion_noct',
    name: 'Frostallion Noct',
    types: ['Dark'],
    stats: { hp: 140, attack: 140, defense: 120 },
    suitability: { gathering: 4 },
    breedingPower: 100,
    description: "Dark variant of the legendary steed.",
    image: '/images/pals/frostallion_noct.svg',
  },
  {
    id: 103,
    key: 'jetragon',
    name: 'Jetragon',
    types: ['Dragon'],
    stats: { hp: 150, attack: 150, defense: 150 },
    suitability: { gathering: 3 },
    breedingPower: 50,
    description: "Legendary celestial dragon.",
    image: '/images/pals/Jetragon_icon.webp',
  }
];
