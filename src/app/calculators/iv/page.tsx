'use client';

import React, { useState } from 'react';
import { pals } from '../../../data/pals';
import { passives } from '../../../data/passives';
import { SelectField } from '../../../components/ui/SelectField';
import { NumberField } from '../../../components/ui/NumberField';
import { ResultCard } from '../../../components/ui/ResultCard';

export default function IVCalculator() {
  const [selectedPalKey, setSelectedPalKey] = useState(pals[0].key);
  const [level, setLevel] = useState(1);
  const [hp, setHp] = useState(100);
  const [attack, setAttack] = useState(100);
  const [defense, setDefense] = useState(100);

  // Only account for passives that affect stats
  const statPassives = passives.filter(p => p.stats.attack || p.stats.defense || p.stats.workSpeed);
  const [selectedPassiveKeys, setSelectedPassiveKeys] = useState<string[]>(['', '', '', '']);

  const palData = pals.find(p => p.key === selectedPalKey);

  // Simplified IV Calculation Logic (Mock)
  // Real formula: Stat = (Base * LevelScaling * (1 + IV/100)) * (1 + PassiveBuf)
  // IV = (Stat / (Base * LevelScaling * (1 + PassiveBuf)) - 1) * 100

  const calculateIV = (stat: number, baseStat: number, passiveBonus: number) => {
    if (!baseStat || level === 0) return 0;

    // Simplified scaling factor (e.g., Level/10 + 1) to mimic growth
    const levelScaling = (level * 0.1) + 1;

    const passiveMultiplier = 1 + passiveBonus;
    const rawIV = (stat / (baseStat * levelScaling * passiveMultiplier) - 1) * 100;

    // Clamp between 0 and 30 (standard IV range)
    return Math.max(0, Math.min(30, Math.round(rawIV)));
  };

  const getPassiveBonus = (type: 'attack' | 'defense') => {
    let bonus = 0;
    selectedPassiveKeys.forEach(key => {
      const passive = passives.find(p => p.name === key);
      if (passive && passive.stats[type]) {
        bonus += passive.stats[type]!;
      }
    });
    return bonus;
  };

  const hpIV = calculateIV(hp, palData?.stats.hp || 100, 0); // HP usually doesn't have % passives in this simplified model
  const attackIV = calculateIV(attack, palData?.stats.attack.melee || 100, getPassiveBonus('attack'));
  const defenseIV = calculateIV(defense, palData?.stats.defense || 100, getPassiveBonus('defense'));

  // Prepare options for SelectField
  const palOptions: [string, string][] = pals.map(p => [p.key, p.name]);
  const passiveOptions: [string, string][] = [['', 'None'], ...statPassives.map((p): [string, string] => [p.name, p.name])];

  const handlePassiveChange = (index: number, value: string) => {
    const newPassives = [...selectedPassiveKeys];
    newPassives[index] = value;
    setSelectedPassiveKeys(newPassives);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">IV Calculator</h1>
        <p className="text-slate-400">
          Estimate your Pal&apos;s hidden Individual Values (IVs). Higher IVs mean better stats at max level.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6 bg-slate-800/50 p-6 rounded-lg border border-slate-700">
          <h2 className="text-xl font-bold text-sky-400">Pal Details</h2>

          <SelectField
            label="Species"
            value={selectedPalKey}
            onChange={setSelectedPalKey}
            options={palOptions}
          />

          <NumberField
            label="Level"
            value={level}
            onChange={setLevel}
            min={1}
            max={50}
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <NumberField label="Current HP" value={hp} onChange={setHp} />
            <NumberField label="Current Attack" value={attack} onChange={setAttack} />
            <NumberField label="Current Defense" value={defense} onChange={setDefense} />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Passives (Affect Stats)</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[0, 1, 2, 3].map((i) => (
                <SelectField
                  key={i}
                  label={`Passive Slot ${i + 1}`}
                  value={selectedPassiveKeys[i]}
                  onChange={(val) => handlePassiveChange(i, val)}
                  options={passiveOptions}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 h-full">
            <h2 className="text-xl font-bold text-sky-400 mb-6">Estimated IVs</h2>

            <div className="grid gap-4">
              <ResultCard
                title="HP IV"
                value={`${hpIV}%`}
                sub={hpIV > 25 ? 'Perfect' : hpIV > 15 ? 'Good' : 'Average'}
              />
              <ResultCard
                title="Attack IV"
                value={`${attackIV}%`}
                sub={attackIV > 25 ? 'Perfect' : attackIV > 15 ? 'Good' : 'Average'}
              />
              <ResultCard
                title="Defense IV"
                value={`${defenseIV}%`}
                sub={defenseIV > 25 ? 'Perfect' : defenseIV > 15 ? 'Good' : 'Average'}
              />
            </div>

            <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg text-sm text-yellow-200/80">
              <strong>Note:</strong> This is a simplified estimation. Exact IVs require complex formulas involving condensation rank and soul upgrades not covered here.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
