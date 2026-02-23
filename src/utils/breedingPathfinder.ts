import { pals, PalData } from '../data/pals';
import { calculateBreedingResult } from '../data/breeding';

export interface PathStep {
  result: PalData;
  parent1: PalData | null;
  parent2: PalData | null;
  generation: number;
}

export function findBreedingPath(
  startingPalKeys: string[],
  targetKey: string
): PathStep[] | null {
  const visited = new Set<string>(startingPalKeys);
  const pathMap = new Map<string, { p1: string; p2: string; gen: number }>();

  // Initialize queue with starting pals (Generation 0)
  let currentPool = startingPalKeys.slice();
  let generation = 1;
  const maxGenerations = 5; // Search depth limit

  // Pre-populate pathMap for starting pals (Gen 0)
  startingPalKeys.forEach(k => pathMap.set(k, { p1: '', p2: '', gen: 0 }));

  if (visited.has(targetKey)) {
    // Target already owned
    return [{ result: getPal(targetKey)!, parent1: null, parent2: null, generation: 0 }];
  }

  while (generation <= maxGenerations) {
    const nextGen: string[] = [];
    const poolSize = currentPool.length;

    // Breed every pair in currentPool
    for (let i = 0; i < poolSize; i++) {
      for (let j = i; j < poolSize; j++) {
        const p1Key = currentPool[i];
        const p2Key = currentPool[j];

        const p1 = getPal(p1Key);
        const p2 = getPal(p2Key);
        if (!p1 || !p2) continue;

        const child = calculateBreedingResult(p1, p2, pals);
        if (child && !visited.has(child.key)) {
          visited.add(child.key);
          pathMap.set(child.key, { p1: p1Key, p2: p2Key, gen: generation });
          nextGen.push(child.key);

          if (child.key === targetKey) {
            return reconstructPath(targetKey, pathMap);
          }
        }
      }
    }

    if (nextGen.length === 0) break;
    // Add new generation to the pool for the next round of breeding
    currentPool = [...currentPool, ...nextGen];
    generation++;
  }

  return null;
}

function getPal(key: string) {
  return pals.find(p => p.key === key);
}

function reconstructPath(
  targetKey: string,
  pathMap: Map<string, { p1: string; p2: string; gen: number }>
): PathStep[] {
  const processed = new Set<string>();
  const steps: PathStep[] = [];

  const addStep = (key: string) => {
    if (processed.has(key)) return;

    const entry = pathMap.get(key);
    // If gen 0 (base pal) or not found, stop recursion
    if (!entry || entry.gen === 0) return;

    // Recursively add steps to create parents first
    addStep(entry.p1);
    addStep(entry.p2);

    const result = getPal(key)!;
    const p1 = getPal(entry.p1)!;
    const p2 = getPal(entry.p2)!;

    steps.push({
      result,
      parent1: p1,
      parent2: p2,
      generation: entry.gen
    });

    processed.add(key);
  };

  addStep(targetKey);
  return steps;
}
