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
  },
  {
    id: 3,
    key: 'chikipi',
    name: 'Chikipi',
    types: ['Neutral'],
    stats: { hp: 60, attack: 60, defense: 60 },
    suitability: { gathering: 1, farming: 1 },
    breedingPower: 1500,
    description: "A chicken. It lays eggs regularly.",
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
  },
  {
    id: 101,
    key: 'jormuntide',
    name: 'Jormuntide',
    types: ['Dragon', 'Water'],
    stats: { hp: 130, attack: 150, defense: 120 },
    suitability: { watering: 4 },
    breedingPower: 310,
    description: "Emperor of the sea. Its watering capabilities are unmatched.",
  },
  {
    id: 110,
    key: 'frostallion_noct',
    name: 'Frostallion Noct',
    types: ['Dark'],
    stats: { hp: 140, attack: 140, defense: 135 },
    suitability: { gathering: 4 },
    breedingPower: 120, // Very rare
    description: "A legendary steed of darkness.",
  },
  {
    id: 111,
    key: 'jetragon',
    name: 'Jetragon',
    types: ['Dragon'],
    stats: { hp: 110, attack: 170, defense: 110 },
    suitability: { gathering: 3 },
    breedingPower: 10, // Rarest
    description: "A legendary dragon capable of high-speed flight.",
  }
];
