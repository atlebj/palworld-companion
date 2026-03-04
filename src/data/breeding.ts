import { PalData } from './pals';

// Special combinations that defy the standard formula
// Key: "Parent1Key|Parent2Key" (sorted alphabetically) -> "ChildKey"
const specialCombos: Record<string, string> = {
  // Example: Jetragon + Jetragon = Jetragon (Self-breeding is standard, but keeping as example)
  'frostallion_noct|helzephyr': 'frostallion_noct', // Example of a fixed combo
};

/**
 * Calculates the resulting child from breeding two parents.
 * Palworld Logic:
 * 1. Calculate Target Power = floor((Power A + Power B) / 2)
 * 2. Find the Pal with the closest Breeding Power to the Target Power.
 * 3. Tie-breaking rules apply (simplified here to first match or by ID).
 *
 * Note: Real game has complex tie-breaking, we will use a simple "closest absolute difference".
 */
export function calculateBreedingResult(parent1: PalData, parent2: PalData, allPals: PalData[]): PalData | null {
  // 1. Check Special Combos
  const key = [parent1.key, parent2.key].sort().join('|');
  if (specialCombos[key]) {
    return allPals.find(p => p.key === specialCombos[key]) || null;
  }

  if (parent1.key === parent2.key) {
    return parent1; // Same parents = same child usually
  }

  // 2. Standard Formula
  const targetPower = Math.floor((parent1.breedingPower + parent2.breedingPower) / 2);

  // 3. Find closest match
  // Filter out Legends/Uniques if they can't be bred normally (Jetragon, etc. can only be bred from 2 Jetragons)
  // For this simplified logic, we'll assume any Pal in the list is valid unless it's a "special only" Pal.
  // In reality, some Pals (mostly Legends) cannot be the result of a random breed.
  // We'll add a 'isUnique' flag to PalData later if needed. For now, we assume all are breedable.

  let closestPal: PalData | null = null;
  let minDiff = Infinity;

  for (const pal of allPals) {
    // Skip if Pal is the same as one of the parents? No, that's allowed.
    // Skip if Pal is a Legend that requires specific parents? (Simplified: skip Jetragon/Frostallion unless specific)
    if (['jetragon', 'frostallion_noct'].includes(pal.key)) continue;

    const diff = Math.abs(pal.breedingPower - targetPower);
    if (diff < minDiff) {
      minDiff = diff;
      closestPal = pal;
    }
  }

  return closestPal;
}
