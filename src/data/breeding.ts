import { PalData } from './pals';
import breedingPairs from './breedingPairs.json';

/**
 * Breeding outcome data sourced from mlg404/palworld-paldex-api
 * (https://github.com/mlg404/palworld-paldex-api, MIT license).
 *
 * The lookup table covers 9,453 documented parent pairs. For any pair NOT in
 * the table (variants, collab pals, or pals added after the dataset was
 * snapshotted), we fall back to the in-game formula:
 *   target = floor((p1.breedingPower + p2.breedingPower) / 2)
 *   pick non-variant pal with closest breedingPower (tie-break by paldex id)
 *
 * The fallback is approximate — official Palworld breeding has additional
 * tie-break rules — but it gives a plausible answer for pairs the table
 * doesn't cover instead of returning nothing.
 */

const pairs: Record<string, string> = breedingPairs as Record<string, string>;

function pairKey(a: string, b: string): string {
  return a < b ? `${a}|${b}` : `${b}|${a}`;
}

/** Returns true if a pal is a "primary" candidate the formula can resolve to.
 *  Variants (Cryst/Lux/Noct/Terra/Aqua/Ignis), collabs (no numeric id), and
 *  legendaries that only come from specific parents shouldn't be selected by
 *  the fallback formula — they live in the lookup table or nowhere. */
function isFormulaCandidate(p: PalData): boolean {
  if (p.isVariant) return false;
  if (!p.id) return false;
  // Skip legendaries the game won't produce by formula alone
  const legendaries = new Set(['Jetragon', 'Frostallion', 'Necromus', 'Paladius']);
  if (legendaries.has(p.key)) return false;
  return /^\d+$/.test(p.id);
}

function formulaFallback(p1: PalData, p2: PalData, allPals: PalData[]): PalData | null {
  if (p1.key === p2.key) return p1;
  const target = Math.floor((p1.breedingPower + p2.breedingPower) / 2);
  let best: PalData | null = null;
  let minDiff = Infinity;
  for (const cand of allPals) {
    if (!isFormulaCandidate(cand)) continue;
    const diff = Math.abs(cand.breedingPower - target);
    if (diff < minDiff) {
      minDiff = diff;
      best = cand;
    } else if (diff === minDiff && best && cand.id && best.id) {
      // Tie-break: lower paldex id wins
      const candId = parseInt(cand.id, 10);
      const bestId = parseInt(best.id, 10);
      if (Number.isFinite(candId) && Number.isFinite(bestId) && candId < bestId) {
        best = cand;
      }
    }
  }
  return best;
}

/**
 * Calculates the resulting child from breeding two parents.
 * Lookup-first against the documented pairs table, formula fallback otherwise.
 */
export function calculateBreedingResult(
  parent1: PalData,
  parent2: PalData,
  allPals: PalData[]
): PalData | null {
  const key = pairKey(parent1.key, parent2.key);
  const childKey = pairs[key];
  if (childKey) {
    return allPals.find((p) => p.key === childKey) ?? null;
  }
  return formulaFallback(parent1, parent2, allPals);
}

/**
 * Finds all parent combinations that produce the specified child.
 * Reads directly from the pairs table; falls back to brute-force formula
 * search for children outside the dataset.
 */
export function findPossibleParents(
  childKey: string,
  allPals: PalData[]
): [PalData, PalData][] {
  const palByKey = new Map<string, PalData>();
  for (const p of allPals) palByKey.set(p.key, p);

  const results: [PalData, PalData][] = [];

  // Fast path: scan the documented pairs
  let foundAny = false;
  for (const [pk, ck] of Object.entries(pairs)) {
    if (ck !== childKey) continue;
    foundAny = true;
    const [k1, k2] = pk.split('|');
    const p1 = palByKey.get(k1);
    const p2 = palByKey.get(k2);
    if (p1 && p2) results.push([p1, p2]);
  }

  if (foundAny) return results;

  // Fallback: brute-force pair scan using the formula. This handles children
  // that aren't in the documented table (rare — variants, collabs).
  const seen = new Set<string>();
  for (let i = 0; i < allPals.length; i++) {
    for (let j = i; j < allPals.length; j++) {
      const p1 = allPals[i];
      const p2 = allPals[j];
      const child = formulaFallback(p1, p2, allPals);
      if (child && child.key === childKey) {
        const k = pairKey(p1.key, p2.key);
        if (!seen.has(k)) {
          seen.add(k);
          results.push([p1, p2]);
        }
      }
    }
  }
  return results;
}
