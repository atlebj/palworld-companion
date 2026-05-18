// AUTO-EXPANDED from mlg404/palworld-paldex-api (MIT license).
// https://github.com/mlg404/palworld-paldex-api/blob/main/src/passive_skills.json
//
// Tier convention: positive tiers (1, 2, 3) are beneficial passives, with 3
// being the rarest. Negative tiers (-1, -2, -3) are detrimental passives
// ("Clumsy", "Coward", etc.). Tier 0 is reserved for neutrals.
//
// `stats` is parsed from the prose for the four numeric fields the IV / Stat
// Planner consumes (attack, defense, workSpeed, moveSpeed). Effects outside
// that set (element-specific damage, hunger, etc.) live only in `description`.

export interface PassiveSkill {
  name: string;
  description: string;
  /** -3 (very bad) ... 0 ... 3 (legendary). */
  tier: number;
  /** True when the passive has at least one negative effect (or tier < 0). */
  negative?: boolean;
  /** Parsed numeric multipliers — fraction, e.g. 0.2 for +20%. */
  stats: {
    attack?: number;
    defense?: number;
    workSpeed?: number;
    moveSpeed?: number;
  };
}

export const passives: PassiveSkill[] = [
  {
    name: "Artisan",
    description: "Work Speed +50%",
    tier: 3,
    stats: { workSpeed: 0.5 },
  },
  {
    name: "Burly Body",
    description: "Defense +20%",
    tier: 3,
    stats: { defense: 0.2 },
  },
  {
    name: "Celestial Emperor",
    description: "20% increase to Normal attack damage",
    tier: 3,
    stats: {},
  },
  {
    name: "Diet Lover",
    description: "Decrease in Hunger is less likely by +15%",
    tier: 3,
    stats: {},
  },
  {
    name: "Divine Dragon",
    description: "20% increase to Dragon attack damage",
    tier: 3,
    stats: {},
  },
  {
    name: "Earth Emperor",
    description: "20% increase to Ground attack damage",
    tier: 3,
    stats: {},
  },
  {
    name: "Ferocious",
    description: "Attack +20%",
    tier: 3,
    stats: { attack: 0.2 },
  },
  {
    name: "Flame Emperor",
    description: "20% increase to Fire attack damage",
    tier: 3,
    stats: {},
  },
  {
    name: "Ice Emperor",
    description: "20% increase to Ice attack damage",
    tier: 3,
    stats: {},
  },
  {
    name: "Legend",
    description: "Attack +20%, Defense +20%, Movement Speed increases 15%",
    tier: 3,
    stats: { attack: 0.2, defense: 0.2, moveSpeed: 0.15 },
  },
  {
    name: "Logging Foreman",
    description: "25% increase to Player Logging Efficiency",
    tier: 3,
    stats: {},
  },
  {
    name: "Lord of Lightning",
    description: "20% increase to Lightning attack damage",
    tier: 3,
    stats: {},
  },
  {
    name: "Lord of the Underworld",
    description: "20% increase to Dark attack damage",
    tier: 3,
    stats: {},
  },
  {
    name: "Lucky",
    description: "Work Speed +15%, Attack +15%",
    tier: 3,
    stats: { attack: 0.15, workSpeed: 0.15 },
  },
  {
    name: "Mine Foreman",
    description: "25% increase to Player Mining Efficiency",
    tier: 3,
    stats: {},
  },
  {
    name: "Motivational Leader",
    description: "25% increase to Player Work Speed",
    tier: 3,
    stats: {},
  },
  {
    name: "Spirit Emperor",
    description: "20% increase to Grass attack damage",
    tier: 3,
    stats: {},
  },
  {
    name: "Stronghold Strategist",
    description: "10% increase to Player Defense",
    tier: 3,
    stats: {},
  },
  {
    name: "Swift",
    description: "30% increase to movement speed",
    tier: 3,
    stats: { moveSpeed: 0.3 },
  },
  {
    name: "Vanguard",
    description: "10% increase to Player Attack",
    tier: 3,
    stats: {},
  },
  {
    name: "Workaholic",
    description: "SAN drops +15% slower",
    tier: 3,
    stats: {},
  },
  {
    name: "Musclehead",
    description: "Attack +30%; Work Speed -50%",
    tier: 2,
    negative: true,
    stats: { attack: 0.3, workSpeed: -0.5 },
  },
  {
    name: "Runner",
    description: "20% increase to Movement Speed",
    tier: 2,
    stats: { moveSpeed: 0.2 },
  },
  {
    name: "Serious",
    description: "Work Speed +20%",
    tier: 2,
    stats: { workSpeed: 0.2 },
  },
  {
    name: "Abnormal",
    description: "10% decrease to incoming Neutral damage",
    tier: 1,
    stats: {},
  },
  {
    name: "Aggressive",
    description: "Attack +10%; Defense -10%",
    tier: 1,
    negative: true,
    stats: { attack: 0.1, defense: -0.1 },
  },
  {
    name: "Blood of the Dragon",
    description: "10% increase to Dragon attack damage",
    tier: 1,
    stats: {},
  },
  {
    name: "Botanical Barrier",
    description: "10% decrease to incoming Grass damage",
    tier: 1,
    stats: {},
  },
  {
    name: "Brave",
    description: "Attack +10%",
    tier: 1,
    stats: { attack: 0.1 },
  },
  {
    name: "Capacitor",
    description: "10% increase to Lightning attack damage",
    tier: 1,
    stats: {},
  },
  {
    name: "Cheery",
    description: "10% decrease to incoming Dark damage",
    tier: 1,
    stats: {},
  },
  {
    name: "Coldblooded",
    description: "10% increase to Ice attack damage",
    tier: 1,
    stats: {},
  },
  {
    name: "Conceited",
    description: "Work Speed +10%; Defense -10%",
    tier: 1,
    negative: true,
    stats: { defense: -0.1, workSpeed: 0.1 },
  },
  {
    name: "Dainty Eater",
    description: "Hunger drops 10% slower",
    tier: 1,
    stats: {},
  },
  {
    name: "Dragonkiller",
    description: "10% decrease to incoming Dragon damage",
    tier: 1,
    stats: {},
  },
  {
    name: "Earthquake Resistant",
    description: "10% decrease to incoming Ground damage",
    tier: 1,
    stats: {},
  },
  {
    name: "Fragrant Foliage",
    description: "10% increase to Grass attack damage",
    tier: 1,
    stats: {},
  },
  {
    name: "Hard Skin",
    description: "Defense +10%",
    tier: 1,
    stats: { defense: 0.1 },
  },
  {
    name: "Heated Body",
    description: "10% decrease to incoming Ice damage",
    tier: 1,
    stats: {},
  },
  {
    name: "Hooligan",
    description: "Attack +15%; Work Speed -10%",
    tier: 1,
    negative: true,
    stats: { attack: 0.15, workSpeed: -0.1 },
  },
  {
    name: "Hydromaniac",
    description: "10% increase to Water attack damage",
    tier: 1,
    stats: {},
  },
  {
    name: "Insulated Body",
    description: "10% decrease to incoming Lightning damage",
    tier: 1,
    stats: {},
  },
  {
    name: "Masochist",
    description: "Defense +15%; Attack -15%",
    tier: 1,
    negative: true,
    stats: { attack: -0.15, defense: 0.15 },
  },
  {
    name: "Nimble",
    description: "10% increase to Movement Speed",
    tier: 1,
    stats: { moveSpeed: 0.1 },
  },
  {
    name: "Positive Thinker",
    description: "SAN drops +10% slower",
    tier: 1,
    stats: {},
  },
  {
    name: "Power of Gaia",
    description: "10% increase to Earth attack damage",
    tier: 1,
    stats: {},
  },
  {
    name: "Pyromaniac",
    description: "10% increase to Fire attack damage",
    tier: 1,
    stats: {},
  },
  {
    name: "Sadist",
    description: "Attack +15%; Defense -15%",
    tier: 1,
    negative: true,
    stats: { attack: 0.15, defense: -0.15 },
  },
  {
    name: "Suntan Lover",
    description: "10% decrease to incoming Fire damage",
    tier: 1,
    stats: {},
  },
  {
    name: "Veil of Darkness",
    description: "10% increase to Dark attack damage",
    tier: 1,
    stats: {},
  },
  {
    name: "Waterproof",
    description: "10% decrease to incoming Water damage",
    tier: 1,
    stats: {},
  },
  {
    name: "Work Slave",
    description: "Work Speed +30%; Attack -30%",
    tier: 1,
    negative: true,
    stats: { attack: -0.3, workSpeed: 0.3 },
  },
  {
    name: "Zen Mind",
    description: "10% increase to Neutral attack damage",
    tier: 1,
    stats: {},
  },
  {
    name: "Lord of the Sea",
    description: "20% increase to Water attack damage",
    tier: 0,
    stats: {},
  },
  {
    name: "Clumsy",
    description: "Work Speed -10%",
    tier: -1,
    negative: true,
    stats: { workSpeed: -0.1 },
  },
  {
    name: "Coward",
    description: "Attack -10%",
    tier: -1,
    negative: true,
    stats: { attack: -0.1 },
  },
  {
    name: "Downtrodden",
    description: "Defense -10%",
    tier: -1,
    negative: true,
    stats: { defense: -0.1 },
  },
  {
    name: "Glutton",
    description: "Hunger drops +10% faster",
    tier: -1,
    negative: true,
    stats: {},
  },
  {
    name: "Unstable",
    description: "SAN drops +10% faster",
    tier: -1,
    negative: true,
    stats: {},
  },
  {
    name: "Bottomless Stomach",
    description: "Hunger drops +15% faster",
    tier: -2,
    negative: true,
    stats: {},
  },
  {
    name: "Destructive",
    description: "SAN drops 15% faster",
    tier: -2,
    negative: true,
    stats: {},
  },
  {
    name: "Brittle",
    description: "Defense -20%",
    tier: -3,
    negative: true,
    stats: { defense: -0.2 },
  },
  {
    name: "Pacifist",
    description: "Attack -20%",
    tier: -3,
    negative: true,
    stats: { attack: -0.2 },
  },
  {
    name: "Slacker",
    description: "Work Speed -30%",
    tier: -3,
    negative: true,
    stats: { workSpeed: -0.3 },
  },
];
