export interface PassiveSkill {
    name: string;
    description: string;
    tier: number; // 1 (Common) to 3 (Legendary)
    stats: {
      attack?: number; // Percentage multiplier (e.g., 0.2 for +20%)
      defense?: number;
      workSpeed?: number;
      moveSpeed?: number;
    };
  }

  export const passives: PassiveSkill[] = [
    {
      name: 'Legend',
      description: 'Attack +20%, Defense +20%, Move Speed +15%',
      tier: 3,
      stats: { attack: 0.2, defense: 0.2, moveSpeed: 0.15 },
    },
    {
      name: 'Musclehead',
      description: 'Attack +30%, Work Speed -50%',
      tier: 2,
      stats: { attack: 0.3, workSpeed: -0.5 },
    },
    {
      name: 'Ferocious',
      description: 'Attack +20%',
      tier: 2,
      stats: { attack: 0.2 },
    },
    {
      name: 'Burly Body',
      description: 'Defense +20%',
      tier: 2,
      stats: { defense: 0.2 },
    },
    {
      name: 'Artisan',
      description: 'Work Speed +50%',
      tier: 2,
      stats: { workSpeed: 0.5 },
    },
    {
      name: 'Serious',
      description: 'Work Speed +20%',
      tier: 1,
      stats: { workSpeed: 0.2 },
    },
    {
      name: 'Swift',
      description: 'Move Speed +30%',
      tier: 2,
      stats: { moveSpeed: 0.3 },
    },
    {
      name: 'Runner',
      description: 'Move Speed +20%',
      tier: 1,
      stats: { moveSpeed: 0.2 },
    },
    {
      name: 'Lucky',
      description: 'Work Speed +15%, Attack +15%',
      tier: 3,
      stats: { workSpeed: 0.15, attack: 0.15 },
    },
    {
      name: 'Coward',
      description: 'Attack -10%',
      tier: 1,
      stats: { attack: -0.1 },
    }
  ];
