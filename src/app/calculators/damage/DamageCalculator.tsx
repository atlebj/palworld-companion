'use client';

import { useState, useMemo } from 'react';
import { NumberField } from '../../../components/ui/NumberField';
import { SelectField } from '../../../components/ui/SelectField';
import { ResultCard } from '../../../components/ui/ResultCard';

export default function DamageCalculator() {
  const [attack, setAttack] = useState(100);
  const [power, setPower] = useState(30);
  const [defense, setDefense] = useState(100);
  const [attackerLevel, setAttackerLevel] = useState(1);
  const [targetLevel, setTargetLevel] = useState(1);
  const [typeEffectiveness, setTypeEffectiveness] = useState("1.0");
  const [stab, setStab] = useState("false");

  const damage = useMemo(() => {
    // Basic Palworld Damage Estimation Formula
    // Based on community data:
    // Damage = (Attack * Power / Defense) / 2 * LevelCorrection * Type * STAB

    // Level Correction is roughly:
    // If Attacker Level < Target Level: Damage decreases significantly.
    // If Attacker Level > Target Level: Damage increases slightly.

    const atk = Math.max(attack, 1);
    const pwr = Math.max(power, 1);
    const def = Math.max(defense, 1);

    // Base Calculation
    const base = (atk * pwr / def) / 2;

    // Level Difference Modifier
    let levelMod = 1;
    if (attackerLevel < targetLevel) {
      // Penalty for being under-leveled
      const diff = targetLevel - attackerLevel;
      // Exponential decay or steep linear penalty?
      // Assuming roughly 2% per level?
      levelMod = Math.max(0.1, 1 - (diff * 0.05));
    } else {
      // Bonus for being over-leveled
      const diff = attackerLevel - targetLevel;
      levelMod = 1 + (diff * 0.01);
    }

    // Multipliers
    const typeMod = parseFloat(typeEffectiveness);
    const stabMod = stab === "true" ? 1.2 : 1.0;

    return Math.floor(base * levelMod * typeMod * stabMod);
  }, [attack, power, defense, attackerLevel, targetLevel, typeEffectiveness, stab]);

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-6">
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-800">
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">Attacker Stats</h2>
          <div className="space-y-4">
            <NumberField label="Attack Stat" value={attack} onChange={setAttack} min={1} />
            <NumberField label="Move Power" value={power} onChange={setPower} min={1} />
            <NumberField label="Attacker Level" value={attackerLevel} onChange={setAttackerLevel} min={1} max={60} />
            <SelectField
              label="Same Type Attack Bonus (STAB)"
              value={stab}
              onChange={setStab}
              options={[
                ["false", "No"],
                ["true", "Yes (+20%)"],
              ]}
            />
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-800">
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">Defender Stats</h2>
          <div className="space-y-4">
            <NumberField label="Defense Stat" value={defense} onChange={setDefense} min={1} />
            <NumberField label="Target Level" value={targetLevel} onChange={setTargetLevel} min={1} max={60} />
            <SelectField
              label="Type Effectiveness"
              value={typeEffectiveness}
              onChange={setTypeEffectiveness}
              options={[
                ["0.25", "Resisted (0.25x)"],
                ["0.5", "Resisted (0.5x)"],
                ["1.0", "Neutral (1.0x)"],
                ["2.0", "Effective (2.0x)"],
                ["4.0", "Very Effective (4.0x)"],
              ]}
            />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <ResultCard
          title="Estimated Damage"
          value={damage.toLocaleString()}
          sub="damage per hit"
        />

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded text-sm text-yellow-800 dark:text-yellow-200 space-y-2">
          <p>
            <strong>Estimate, not a readout.</strong> The level-difference
            constants are community-estimated and the in-game formula has
            randomization (±5–10%) plus a few hidden modifiers we
            can’t observe. Expect roughly ±10–20% variance against
            actual hits.
          </p>
          <p className="text-xs opacity-80">
            Use it to compare loadouts, not to predict exact damage.
            <a href="/mechanics/damage-formula" className="underline ml-1">
              Read the full mechanics breakdown
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
