'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { pals } from '../../../data/pals';
import { passives } from '../../../data/passives';
import { SelectField } from '../../../components/ui/SelectField';
import { NumberField } from '../../../components/ui/NumberField';
import { ResultCard } from '../../../components/ui/ResultCard';

/**
 * Stat Planner.
 *
 * This used to be an "IV reverse calculator" with a made-up formula. Real
 * Palworld IVs are hidden integers per stat that don't reverse-engineer
 * cleanly from observed stats — the in-game formula combines base, level,
 * IV, condense rank, and active passives, plus a few pieces (food buff,
 * Pal Soul) that aren't observable here.
 *
 * Instead this tool now does the honest forward direction: given a Pal,
 * a level, an IV setting, a condense rank, and a passive loadout, compute
 * the resulting stats so you can compare loadouts side-by-side.
 */

const CONDENSE_BONUS: number[] = [0, 0.03, 0.06, 0.10, 0.15]; // ranks 0–4 → +0/3/6/10/15%

function applyStatFormula(base: number, level: number, ivPct: number, passivePct: number, condensePct: number): number {
  // Forward formula (community-aligned approximation):
  //   stat ≈ base * (1 + (level - 1) * 0.04) * (1 + IV%) * (1 + passive%) * (1 + condense%)
  // The level multiplier is the part that's still community-estimated; the
  // rest is well-documented multiplicative behavior. Treat numbers as
  // *relative* indicators when comparing two loadouts.
  const levelMult = 1 + (level - 1) * 0.04;
  return Math.round(base * levelMult * (1 + ivPct / 100) * (1 + passivePct) * (1 + condensePct));
}

export default function StatPlanner() {
  const [palKey, setPalKey] = useState(pals[0].key);
  const [level, setLevel] = useState(50);
  const [ivAttack, setIvAttack] = useState(70);
  const [ivDefense, setIvDefense] = useState(70);
  const [ivHp, setIvHp] = useState(70);
  const [condenseRank, setCondenseRank] = useState(0);
  const [selectedPassiveKeys, setSelectedPassiveKeys] = useState<string[]>(['', '', '', '']);

  const palData = pals.find((p) => p.key === palKey);

  // Aggregate active passive bonuses across the 4 slots.
  const passiveBonus = useMemo(() => {
    const total = { attack: 0, defense: 0, workSpeed: 0, moveSpeed: 0 };
    for (const name of selectedPassiveKeys) {
      const p = passives.find((x) => x.name === name);
      if (!p) continue;
      total.attack += p.stats.attack ?? 0;
      total.defense += p.stats.defense ?? 0;
      total.workSpeed += p.stats.workSpeed ?? 0;
      total.moveSpeed += p.stats.moveSpeed ?? 0;
    }
    return total;
  }, [selectedPassiveKeys]);

  const condensePct = CONDENSE_BONUS[condenseRank] ?? 0;

  const result = useMemo(() => {
    if (!palData) return null;
    const base = palData.stats;
    return {
      hp: applyStatFormula(base.hp, level, ivHp, 0, condensePct),
      attack: applyStatFormula(base.attack.melee, level, ivAttack, passiveBonus.attack, condensePct),
      defense: applyStatFormula(base.defense, level, ivDefense, passiveBonus.defense, condensePct),
      // For work/move speed we compare against a baseline of "1.0" — these are
      // multipliers rather than raw stats in-game.
      workSpeedMult: 1 * (1 + passiveBonus.workSpeed) * (1 + condensePct),
      moveSpeedMult: 1 * (1 + passiveBonus.moveSpeed) * (1 + condensePct),
    };
  }, [palData, level, ivAttack, ivDefense, ivHp, passiveBonus, condensePct]);

  // Baseline for comparison: same Pal at level, no IVs, no passives, rank 0.
  const baseline = useMemo(() => {
    if (!palData) return null;
    const base = palData.stats;
    return {
      hp: applyStatFormula(base.hp, level, 0, 0, 0),
      attack: applyStatFormula(base.attack.melee, level, 0, 0, 0),
      defense: applyStatFormula(base.defense, level, 0, 0, 0),
    };
  }, [palData, level]);

  const palOptions: [string, string][] = pals.map((p) => [p.key, p.name]);
  const passiveOptions: [string, string][] = [
    ['', 'None'],
    ...passives.map<[string, string]>((p) => [p.name, `${p.name} — ${p.description}`]),
  ];

  const updatePassive = (idx: number, val: string) => {
    setSelectedPassiveKeys((prev) => prev.map((p, i) => (i === idx ? val : p)));
  };

  const pctDelta = (improved: number, base: number) =>
    base === 0 ? 0 : Math.round(((improved - base) / base) * 100);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Stat Planner</h1>
        <p className="text-[var(--color-brand-text-secondary)]">
          See how IVs, condensing, and passive skills change your Pal&apos;s stats.
          Compare loadouts to decide what&apos;s worth grinding for.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6 card p-6">
          <h2 className="text-xl font-bold text-[var(--color-brand-primary)]">Loadout</h2>

          <SelectField
            label="Species"
            value={palKey}
            onChange={setPalKey}
            options={palOptions}
          />

          <NumberField
            label="Level"
            value={level}
            onChange={setLevel}
            min={1}
            max={60}
          />

          <div>
            <label className="block text-sm font-semibold mb-2 text-[var(--color-brand-text-primary)]">
              Individual Values (0–100)
            </label>
            <div className="grid grid-cols-3 gap-3">
              <NumberField label="HP IV" value={ivHp} onChange={setIvHp} min={0} max={100} />
              <NumberField label="ATK IV" value={ivAttack} onChange={setIvAttack} min={0} max={100} />
              <NumberField label="DEF IV" value={ivDefense} onChange={setIvDefense} min={0} max={100} />
            </div>
            <p className="text-xs text-[var(--color-brand-text-muted)] mt-1.5">
              Hidden in-game. 0 = floor, 100 = ceiling. Use 70 if you don&apos;t know.
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-[var(--color-brand-text-primary)]">
              Condense Rank
            </label>
            <div className="flex gap-2">
              {[0, 1, 2, 3, 4].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setCondenseRank(r)}
                  className={`flex-1 py-2 rounded-md text-sm font-bold border transition-colors ${
                    condenseRank === r
                      ? 'bg-[var(--color-brand-primary)] text-white border-[var(--color-brand-primary)]'
                      : 'bg-[var(--color-brand-bg-main)] text-[var(--color-brand-text-secondary)] border-[var(--color-brand-border)] hover:border-[var(--color-brand-primary)]/50'
                  }`}
                >
                  {r === 0 ? '★0' : `★${r}`}
                </button>
              ))}
            </div>
            <p className="text-xs text-[var(--color-brand-text-muted)] mt-1.5">
              Each rank adds +{Math.round((CONDENSE_BONUS[1] - CONDENSE_BONUS[0]) * 100)}–
              {Math.round((CONDENSE_BONUS[4] - CONDENSE_BONUS[3]) * 100)}% to all stats.
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-[var(--color-brand-text-primary)]">
              Passives
            </label>
            <div className="grid gap-3">
              {[0, 1, 2, 3].map((i) => (
                <SelectField
                  key={i}
                  label={`Slot ${i + 1}`}
                  value={selectedPassiveKeys[i]}
                  onChange={(val) => updatePassive(i, val)}
                  options={passiveOptions}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {result && baseline && (
            <>
              <div className="card p-6">
                <h2 className="text-xl font-bold text-[var(--color-brand-primary)] mb-4">Projected Stats</h2>
                <div className="space-y-3">
                  <ResultCard title="HP" value={result.hp.toLocaleString()} sub={`${pctDelta(result.hp, baseline.hp)}% vs base`} />
                  <ResultCard title="Attack" value={result.attack.toLocaleString()} sub={`${pctDelta(result.attack, baseline.attack)}% vs base`} />
                  <ResultCard title="Defense" value={result.defense.toLocaleString()} sub={`${pctDelta(result.defense, baseline.defense)}% vs base`} />
                  <ResultCard
                    title="Work Speed"
                    value={`${result.workSpeedMult.toFixed(2)}×`}
                    sub={result.workSpeedMult === 1 ? 'no bonus' : `+${Math.round((result.workSpeedMult - 1) * 100)}% vs unmodified`}
                  />
                  <ResultCard
                    title="Move Speed"
                    value={`${result.moveSpeedMult.toFixed(2)}×`}
                    sub={result.moveSpeedMult === 1 ? 'no bonus' : `+${Math.round((result.moveSpeedMult - 1) * 100)}% vs unmodified`}
                  />
                </div>
              </div>

              <div className="card p-4 text-sm text-[var(--color-brand-text-secondary)] border-amber-700/40">
                <p className="font-semibold text-[var(--color-brand-text-primary)] mb-1">
                  About these numbers
                </p>
                <p>
                  Use these to <strong>compare loadouts</strong> against each other,
                  not as exact in-game readouts. The level scaling is community-
                  estimated and Palworld&apos;s exact formula varies a few percent
                  depending on stat type. Read the{' '}
                  <Link href="/mechanics/work-speed" className="text-[var(--color-brand-primary)] underline">
                    mechanics explainer
                  </Link>{' '}
                  for the full breakdown.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
