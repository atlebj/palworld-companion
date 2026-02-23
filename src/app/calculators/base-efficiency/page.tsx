'use client';

import React, { useState } from 'react';
import { pals, WorkSuitability } from '../../../data/pals';
import { SelectField } from '../../../components/ui/SelectField';
import { NumberField } from '../../../components/ui/NumberField';
import { ResultCard } from '../../../components/ui/ResultCard';

interface BasePal {
  id: string;
  palKey: string;
  count: number;
}

export default function BaseEfficiency() {
  const [basePals, setBasePals] = useState<BasePal[]>([
    { id: '1', palKey: pals[0].key, count: 1 }
  ]);

  const addRow = () => {
    setBasePals([...basePals, { id: crypto.randomUUID(), palKey: pals[0].key, count: 1 }]);
  };

  const removeRow = (id: string) => {
    setBasePals(basePals.filter(p => p.id !== id));
  };

  const updateRow = (id: string, field: keyof BasePal, value: string | number) => {
    setBasePals(basePals.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  // Calculate Totals
  const totals: Record<keyof WorkSuitability, number> = {
    kindling: 0, watering: 0, planting: 0, generating_electricity: 0,
    handiwork: 0, gathering: 0, lumbering: 0, mining: 0,
    medicine_production: 0, cooling: 0, transporting: 0, farming: 0
  };

  basePals.forEach(bp => {
    const palData = pals.find(p => p.key === bp.palKey);
    if (!palData) return;

    // Simplified: Total Work Speed = Sum of (Level * Count)
    // Real game: Work Speed stat matters significantly. We assume base work speed for the level.
    // Level 1 = 1x, Level 2 = 3x, Level 3 = 10x roughly?
    // Let's stick to simple "Total Levels" for now as per prompt request "With 3 Anubis...".

    Object.entries(palData.suitability).forEach(([key, level]) => {
      if (level) {
        totals[key as keyof WorkSuitability] += level * bp.count;
      }
    });
  });

  // Rough Estimations (Arbitrary constants for demo)
  const stonePerHour = totals.mining * 150;
  const woodPerHour = totals.lumbering * 150;
  const cropsPerHour = (totals.planting + totals.watering + totals.gathering) * 20;

  const palOptions: [string, string][] = pals.map(p => [p.key, p.name]);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Base Efficiency Dashboard</h1>
        <p className="text-slate-400">
          Plan your base workforce and estimate resource output.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6 bg-slate-800/50 p-6 rounded-lg border border-slate-700">
          <h2 className="text-xl font-bold text-sky-400 mb-4">Workforce</h2>

          <div className="space-y-4">
            {basePals.map((bp, index) => (
              <div key={bp.id} className="flex gap-4 items-end bg-slate-900/50 p-3 rounded border border-slate-800">
                <div className="flex-1">
                  <SelectField
                    label={index === 0 ? "Pal Species" : ""}
                    value={bp.palKey}
                    onChange={(v) => updateRow(bp.id, 'palKey', v)}
                    options={palOptions}
                  />
                </div>
                <div className="w-24">
                  <NumberField
                    label={index === 0 ? "Count" : ""}
                    value={bp.count}
                    onChange={(v) => updateRow(bp.id, 'count', v)}
                    min={1}
                    max={20}
                  />
                </div>
                <button
                  onClick={() => removeRow(bp.id)}
                  className="mb-1 p-2 text-slate-500 hover:text-red-400"
                  title="Remove"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={addRow}
            className="w-full py-3 border-2 border-dashed border-slate-700 text-slate-400 rounded-lg hover:border-sky-500 hover:text-sky-500 transition-colors"
          >
            + Add Pal Group
          </button>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 h-full">
            <h2 className="text-xl font-bold text-sky-400 mb-6">Estimated Output</h2>

            <div className="space-y-4">
              <ResultCard
                title="Mining (Stone/Ore)"
                value={`~${stonePerHour}/hr`}
                sub={`Total Level: ${totals.mining}`}
              />
              <ResultCard
                title="Lumbering (Wood)"
                value={`~${woodPerHour}/hr`}
                sub={`Total Level: ${totals.lumbering}`}
              />
              <ResultCard
                title="Farming (Crops)"
                value={`~${cropsPerHour}/hr`}
                sub={`Combined Plant/Water/Gather: ${totals.planting + totals.watering + totals.gathering}`}
              />
              <ResultCard
                title="Handiwork"
                value={`Lv. ${totals.handiwork}`}
                sub="Crafting Speed"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
