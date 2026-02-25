import { pals, PalData } from '../data/pals';
import { calculateBreedingResult } from '../data/breeding';

export interface PathStep {
  result: PalData;
  parent1: PalData | null;
  parent2: PalData | null;
  generation: number;
}

// Optimization: Fast lookup map
const palMap = new Map<string, PalData>();
const allPalsList = pals; // Use imported list directly
pals.forEach(p => palMap.set(p.key, p));

function getPal(key: string): PalData | undefined {
  return palMap.get(key);
}

export function findBreedingPath(
  startingPalKeys: string[],
  targetKey: string
): PathStep[] | null {
  const visited = new Set<string>(startingPalKeys);
  const pathMap = new Map<string, { p1: string; p2: string; gen: number }>();

  // Current pool of available pals (keys)
  let currentPool = startingPalKeys.slice();

  // Pals newly added in the last generation (for optimization)
  let newPals = startingPalKeys.slice();

  let generation = 1;
  const maxGenerations = 6; // Search depth limit (increased for deeper searches)

  // Pre-populate pathMap for starting pals (Gen 0)
  startingPalKeys.forEach(k => pathMap.set(k, { p1: '', p2: '', gen: 0 }));

  if (visited.has(targetKey)) {
    return [{ result: getPal(targetKey)!, parent1: null, parent2: null, generation: 0 }];
  }

  while (generation <= maxGenerations) {
    const nextGen: string[] = [];

    // Convert pools to PalData objects once to avoid repetitive lookups
    const newPalObjs = newPals.map(k => getPal(k)).filter(Boolean) as PalData[];
    // Get old pals (those in pool but NOT in newPals)
    const newPalKeySet = new Set(newPals);
    const oldPalObjs = currentPool
        .filter(k => !newPalKeySet.has(k))
        .map(k => getPal(k))
        .filter(Boolean) as PalData[];

    // 1. Combine newPal with itself and other newPals (j >= i to avoid duplicates/order)
    for (let i = 0; i < newPalObjs.length; i++) {
      const p1 = newPalObjs[i];
      for (let j = i; j < newPalObjs.length; j++) {
        const p2 = newPalObjs[j];
        if (checkPair(p1, p2, generation, visited, pathMap, nextGen, targetKey)) {
             return reconstructPath(targetKey, pathMap);
        }
      }
    }

    // 2. Combine newPal with all OLD pals
    for (const p1 of newPalObjs) {
        for (const p2 of oldPalObjs) {
            if (checkPair(p1, p2, generation, visited, pathMap, nextGen, targetKey)) {
                return reconstructPath(targetKey, pathMap);
            }
        }
    }

    if (nextGen.length === 0) break;

    // Prepare for next generation
    newPals = nextGen;
    currentPool = [...currentPool, ...nextGen];
    generation++;
  }

  return null;
}

function checkPair(
    p1: PalData,
    p2: PalData,
    generation: number,
    visited: Set<string>,
    pathMap: Map<string, { p1: string; p2: string; gen: number }>,
    nextGen: string[],
    targetKey: string
): boolean {
    const child = calculateBreedingResult(p1, p2, allPalsList);
    if (child && !visited.has(child.key)) {
        visited.add(child.key);
        pathMap.set(child.key, { p1: p1.key, p2: p2.key, gen: generation });
        nextGen.push(child.key);

        if (child.key === targetKey) return true;
    }
    return false;
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
