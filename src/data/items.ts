export interface ItemData {
  id: string;
  name: string;
  category: string;
  description: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
  weight?: number;
}

export const items: ItemData[] = [
  {
    id: 'pal_sphere',
    name: 'Pal Sphere',
    category: 'Sphere',
    description: 'A device for capturing Pals. Low success rate for higher level Pals.',
    rarity: 'Common',
    weight: 0.1
  },
  {
    id: 'mega_sphere',
    name: 'Mega Sphere',
    category: 'Sphere',
    description: 'A stronger sphere. Capable of capturing mid-level Pals.',
    rarity: 'Uncommon',
    weight: 0.1
  },
  {
    id: 'giga_sphere',
    name: 'Giga Sphere',
    category: 'Sphere',
    description: 'A high-grade sphere. Good for capturing strong Pals.',
    rarity: 'Rare',
    weight: 0.1
  },
  {
    id: 'hyper_sphere',
    name: 'Hyper Sphere',
    category: 'Sphere',
    description: 'A very high-grade sphere. Essential for late-game captures.',
    rarity: 'Epic',
    weight: 0.1
  },
  {
    id: 'ultra_sphere',
    name: 'Ultra Sphere',
    category: 'Sphere',
    description: 'An extremely powerful sphere. Even high-level Pals are hard to miss.',
    rarity: 'Epic',
    weight: 0.1
  },
  {
    id: 'legendary_sphere',
    name: 'Legendary Sphere',
    category: 'Sphere',
    description: 'The ultimate sphere. Almost guarantees capture of any Pal.',
    rarity: 'Legendary',
    weight: 0.1
  },
  {
    id: 'wood',
    name: 'Wood',
    category: 'Material',
    description: 'Basic building material obtained from trees.',
    rarity: 'Common',
    weight: 2
  },
  {
    id: 'stone',
    name: 'Stone',
    category: 'Material',
    description: 'Basic building material obtained from rocks.',
    rarity: 'Common',
    weight: 3
  },
  {
    id: 'ore',
    name: 'Ore',
    category: 'Material',
    description: 'Raw metal ore. Can be smelted into Ingots.',
    rarity: 'Uncommon',
    weight: 5
  },
  {
    id: 'pal_fluids',
    name: 'Pal Fluids',
    category: 'Material',
    description: 'Obtained from Water-type Pals. Used for making cement.',
    rarity: 'Uncommon',
    weight: 0.5
  },
  {
    id: 'high_quality_pal_oil',
    name: 'High Quality Pal Oil',
    category: 'Material',
    description: 'Obtained from certain Pals. Used for making polymers.',
    rarity: 'Uncommon',
    weight: 1
  },
  {
    id: 'ancient_civilization_parts',
    name: 'Ancient Civilization Parts',
    category: 'Material',
    description: 'Rare parts found in dungeons and from bosses.',
    rarity: 'Rare',
    weight: 0.1
  },
  {
    id: 'cake',
    name: 'Cake',
    category: 'Consumable',
    description: 'Required for breeding Pals. Pals love it!',
    rarity: 'Rare',
    weight: 5
  },
  {
    id: 'assault_rifle_schematic_4',
    name: 'Assault Rifle Schematic 4',
    category: 'Schematic',
    description: 'Legendary schematic for crafting a powerful Assault Rifle.',
    rarity: 'Legendary',
    weight: 0
  }
];
