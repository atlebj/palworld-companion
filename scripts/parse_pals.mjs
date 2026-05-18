import fs from 'fs';
import path from 'path';

const rawData = fs.readFileSync('public/pals.json', 'utf-8');
const palsJson = JSON.parse(rawData);

const formatSuitability = (workArr) => {
  const suitability = {};
  if (workArr && Array.isArray(workArr)) {
    workArr.forEach(w => {
      // Keep it exact to match UI needs
      suitability[w.type] = w.level;
    });
  }
  return suitability;
};

const formatTypes = (typesArr) => {
  return typesArr.map(t => t.charAt(0).toUpperCase() + t.slice(1));
};

const formattedPals = palsJson.map(pal => {
  let imageLocal = pal.image_local;
  if (!imageLocal) {
    // Fallback if missing, try slug
    imageLocal = `images/pals/${pal.slug || pal.name}.webp`;
  }
  // Replace backslashes with forward slashes and ensure leading slash
  const imagePath = '/' + imageLocal.replace(/\\/g, '/');

  return {
    id: pal.id.toString(),
    key: (pal.slug || pal.name.toLowerCase()).replace(/\s+/g, '-'),
    name: pal.name,
    types: formatTypes(pal.types || []),
    stats: {
      hp: pal.stats?.Health || 0,
      attack: {
        melee: pal.stats?.MeleeAttack || 0,
        ranged: pal.stats?.Attack || 0
      },
      defense: pal.stats?.Defense || 0,
      speed: {
        ride: 0, // Not available in this dataset
        run: 0,
        walk: 0
      },
      stamina: 100, // Defaulting as not explicitly provided in all entries
      support: pal.stats?.Support || 100,
      food: pal.stats?.Food || 0
    },
    suitability: formatSuitability(pal.work_suitability),
    breedingPower: pal.stats?.CombiRank || 0,
    description: pal.description || "No description available.",
    image: imagePath, // USING LOCAL IMAGE PATH
    drops: (pal.drops || []).map(d => ({
      name: d.name || 'Unknown',
      rate: d.rate || 0,
      min: d.min || 1,
      max: d.max || 1
    })),
    partnerSkill: pal.partner_skill ? pal.partner_skill.name : "Unknown Partner Skill",
    skills: pal.skills || [],
    isVariant: pal.name.includes('Cryst') || pal.name.includes('Noct') || pal.name.includes('Ignis') || pal.name.includes('Terra') || pal.name.includes('Aqua') || pal.name.includes('Botics') || pal.name.includes('Lux') || pal.name.includes('Cryst')
  };
});

const fileContent = `export interface PalStats {
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

export const pals: PalData[] = ${JSON.stringify(formattedPals, null, 2)};
`;

fs.writeFileSync('src/data/pals.ts', fileContent);
console.log('Successfully generated src/data/pals.ts with local images');
