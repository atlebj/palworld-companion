'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { pals, WorkSuitability } from '../../../data/pals';
import { SelectField } from '../../../components/ui/SelectField';
import { NumberField } from '../../../components/ui/NumberField';

/**
 * Workforce Composition Planner.
 *
 * This used to print absolute output rates ("~150 stone/hour per mining
 * level") with no source for the multiplier — pure invented numbers.
 *
 * The honest version is comparative: given a workforce, show *where* the
 * collective work-suitability levels are concentrated, find coverage gaps,
 * and let users compare two compositions side-by-side. No fake hourly
 * production numbers.
 */

interface WorkforceRow {
  id: string;
  palKey: string;
  count: number;
}

const WORK_TYPES: Array<{ key: keyof WorkSuitability; label: string }> = [
  { key: 'kindling', label: 'Kindling' },
  { key: 'watering', label: 'Watering' },
  { key: 'planting', label: 'Planting' },
  { key: 'generating_electricity', label: 'Electricity' },
  { key: 'handiwork', label: 'Handiwork' },
  { key: 'gathering', label: 'Gathering' },
  { key: 'lumbering', label: 'Lumbering' },
  { key: 'mining', label: 'Mining' },
  { key: 'medicine_production', label: 'Medicine' },
  { key: 'cooling', label: 'Cooling' },
  { key: 'transporting', label: 'Transport' },
  { key: 'farming', label: 'Farming' },
];

function emptyTotals(): Record<keyof WorkSuitability, number> {
  return {
    kindling: 0, watering: 0, planting: 0, generating_electricity: 0,
    handiwork: 0, gathering: 0, lumbering: 0, mining: 0,
    medicine_production: 0, cooling: 0, transporting: 0, farming: 0,
  };
}

export default function BaseEfficiencyPlanner() {
  const [workforce, setWorkforce] = useState<WorkforceRow[]>([
    { id: '1', palKey: pals[0].key, count: 1 },
  ]);

  const addRow = () => {
    setWorkforce((rows) => [
      ...rows,
      { id: typeof crypto !== 'undefined' ? crypto.randomUUID() : String(Date.now()), palKey: pals[0].key, count: 1 },
    ]);
  };

  const removeRow = (id: string) => {
    setWorkforce((rows) => rows.filter((r) => r.id !== id));
  };

  const updateRow = (id: string, field: keyof WorkforceRow, value: string | number) => {
    setWorkforce((rows) => rows.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  };

  const totals = useMemo(() => {
    const t = emptyTotals();
    for (const row of workforce) {
      const pal = pals.find((p) => p.key === row.palKey);
      if (!pal) continue;
      for (const [k, level] of Object.entries(pal.suitability)) {
        if (typeof level === 'number') {
          t[k as keyof WorkSuitability] += level * row.count;
        }
      }
    }
    return t;
  }, [workforce]);

  const totalLevels = useMemo(
    () => Object.values(totals).reduce((acc, n) => acc + n, 0),
    [totals]
  );

  const totalPals = workforce.reduce((acc, r) => acc + r.count, 0);

  const sortedWorks = useMemo(
    () => [...WORK_TYPES].sort((a, b) => totals[b.key] - totals[a.key]),
    [totals]
  );

  const gaps = useMemo(
    () => WORK_TYPES.filter((w) => totals[w.key] === 0).map((w) => w.label),
    [totals]
  );

  const palOptions: [string, string][] = pals.map((p) => [p.key, p.name]);

  const maxLevel = Math.max(1, ...Object.values(totals));

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Workforce Composition Planner</h1>
        <p className="text-[var(--color-brand-text-secondary)]">
          Plan a base crew and see where its work suitability is concentrated.
          Use it to spot coverage gaps and compare compositions — not to
          predict exact hourly output (the game&apos;s production rates depend
          on station, sanity, food, and Work Speed bonuses we can&apos;t observe).
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3 card p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[var(--color-brand-primary)]">Workforce</h2>
            <span className="text-sm text-[var(--color-brand-text-muted)]">
              {totalPals} pals · {totalLevels} total work levels
            </span>
          </div>

          {workforce.map((row, idx) => (
            <div
              key={row.id}
              className="flex gap-3 items-end bg-[var(--color-brand-bg-main)]/50 p-3 rounded-lg border border-[var(--color-brand-border)]"
            >
              <div className="flex-1">
                <SelectField
                  label={idx === 0 ? 'Species' : ''}
                  value={row.palKey}
                  onChange={(v) => updateRow(row.id, 'palKey', v)}
                  options={palOptions}
                />
              </div>
              <div className="w-24">
                <NumberField
                  label={idx === 0 ? 'Count' : ''}
                  value={row.count}
                  onChange={(v) => updateRow(row.id, 'count', v)}
                  min={1}
                  max={50}
                />
              </div>
              <button
                onClick={() => removeRow(row.id)}
                className="mb-1 p-2 text-[var(--color-brand-text-muted)] hover:text-red-400 disabled:opacity-30"
                disabled={workforce.length === 1}
                title={workforce.length === 1 ? 'Need at least one row' : 'Remove'}
              >
                ×
              </button>
            </div>
          ))}

          <button
            onClick={addRow}
            className="w-full py-3 border-2 border-dashed border-[var(--color-brand-border)] text-[var(--color-brand-primary)] rounded-lg hover:border-[var(--color-brand-primary)] hover:bg-[var(--color-brand-bg-main)]/50 transition-colors font-medium"
          >
            + Add Pal Group
          </button>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="card p-6">
            <h2 className="text-xl font-bold text-[var(--color-brand-primary)] mb-4">
              Suitability Coverage
            </h2>
            <div className="space-y-2">
              {sortedWorks.map((w) => {
                const level = totals[w.key];
                const pct = (level / maxLevel) * 100;
                return (
                  <div key={w.key} className="flex items-center gap-3 text-sm">
                    <span className="w-24 text-[var(--color-brand-text-secondary)]">{w.label}</span>
                    <div className="flex-1 h-2 bg-[var(--color-brand-bg-main)] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${pct}%`,
                          backgroundColor: level === 0 ? 'transparent' : 'var(--color-brand-primary)',
                        }}
                      />
                    </div>
                    <span className="w-10 text-right font-mono text-[var(--color-brand-text-primary)] font-bold">
                      {level}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {gaps.length > 0 && (
            <div className="card p-4 border-amber-700/40">
              <p className="font-semibold text-[var(--color-brand-text-primary)] mb-1 text-sm">
                Coverage gaps
              </p>
              <p className="text-sm text-[var(--color-brand-text-secondary)]">
                No coverage in: <strong>{gaps.join(', ')}</strong>
              </p>
            </div>
          )}

          <div className="card p-4 text-xs text-[var(--color-brand-text-muted)]">
            <p>
              Want absolute hourly output? That depends on station type, food
              buffs, Work Speed bonuses, and sanity — see the{' '}
              <Link href="/mechanics/work-speed" className="text-[var(--color-brand-primary)] underline">
                work speed mechanics
              </Link>
              {' '}or use the{' '}
              <Link href="/calculators/work-speed" className="text-[var(--color-brand-primary)] underline">
                work speed calculator
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
