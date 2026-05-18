'use client';

import React, { useMemo, useState } from 'react';
import { passives } from '../../../data/passives';

type TierFilter = 'all' | 'positive' | 'negative' | number;
type StatFilter = 'all' | 'attack' | 'defense' | 'workSpeed' | 'moveSpeed';

const STAT_LABEL: Record<Exclude<StatFilter, 'all'>, string> = {
  attack: 'Attack',
  defense: 'Defense',
  workSpeed: 'Work Speed',
  moveSpeed: 'Move Speed',
};

export default function PassiveSearch() {
  const [search, setSearch] = useState('');
  const [tierFilter, setTierFilter] = useState<TierFilter>('all');
  const [statFilter, setStatFilter] = useState<StatFilter>('all');

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return passives.filter((p) => {
      if (q && !p.name.toLowerCase().includes(q) && !p.description.toLowerCase().includes(q)) {
        return false;
      }
      if (tierFilter === 'positive' && p.tier <= 0) return false;
      if (tierFilter === 'negative' && p.tier >= 0) return false;
      if (typeof tierFilter === 'number' && p.tier !== tierFilter) return false;
      if (statFilter !== 'all' && !p.stats[statFilter]) return false;
      return true;
    });
  }, [search, tierFilter, statFilter]);

  const grouped = useMemo(() => {
    // Group by tier (highest first), so legendaries appear at the top.
    const byTier = new Map<number, typeof passives>();
    for (const p of filtered) {
      const arr = byTier.get(p.tier) ?? [];
      arr.push(p);
      byTier.set(p.tier, arr);
    }
    return Array.from(byTier.entries())
      .sort(([a], [b]) => b - a)
      .map(([tier, items]) => [
        tier,
        items.slice().sort((a, b) => a.name.localeCompare(b.name)),
      ] as const);
  }, [filtered]);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2 text-[var(--color-brand-text-primary)]">
          Passive Skills
        </h1>
        <p className="text-[var(--color-brand-text-secondary)]">
          {passives.length} passives — filter by tier, stat effect, or search by name.
        </p>
      </div>

      <div className="card p-4 grid gap-3 sm:grid-cols-3">
        <input
          type="text"
          placeholder="Search by name or effect..."
          className="sm:col-span-3 px-3 py-2 bg-[var(--color-brand-bg-main)] border border-[var(--color-brand-border)] rounded-lg text-[var(--color-brand-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="px-3 py-2 bg-[var(--color-brand-bg-main)] border border-[var(--color-brand-border)] rounded-lg text-[var(--color-brand-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]"
          value={String(tierFilter)}
          onChange={(e) => {
            const v = e.target.value;
            if (v === 'all' || v === 'positive' || v === 'negative') {
              setTierFilter(v);
            } else {
              setTierFilter(Number(v));
            }
          }}
        >
          <option value="all">All tiers</option>
          <option value="positive">Positive only</option>
          <option value="negative">Negative only</option>
          <option value="3">Tier 3 (Legendary)</option>
          <option value="2">Tier 2</option>
          <option value="1">Tier 1</option>
          <option value="-1">Tier −1</option>
          <option value="-2">Tier −2</option>
          <option value="-3">Tier −3</option>
        </select>

        <select
          className="px-3 py-2 bg-[var(--color-brand-bg-main)] border border-[var(--color-brand-border)] rounded-lg text-[var(--color-brand-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]"
          value={statFilter}
          onChange={(e) => setStatFilter(e.target.value as StatFilter)}
        >
          <option value="all">Any stat effect</option>
          <option value="attack">Affects Attack</option>
          <option value="defense">Affects Defense</option>
          <option value="workSpeed">Affects Work Speed</option>
          <option value="moveSpeed">Affects Move Speed</option>
        </select>

        <button
          onClick={() => {
            setSearch('');
            setTierFilter('all');
            setStatFilter('all');
          }}
          className="px-3 py-2 bg-[var(--color-brand-bg-main)] border border-[var(--color-brand-border)] rounded-lg text-[var(--color-brand-text-secondary)] hover:text-[var(--color-brand-text-primary)] hover:border-[var(--color-brand-primary)]/50 transition-colors text-sm"
        >
          Reset filters
        </button>
      </div>

      {filtered.length === 0 ? (
        <div className="card p-12 text-center text-[var(--color-brand-text-muted)]">
          No passives match the current filters.
        </div>
      ) : (
        <div className="space-y-8">
          {grouped.map(([tier, items]) => (
            <section key={tier}>
              <h2 className="text-sm font-bold text-[var(--color-brand-text-muted)] uppercase tracking-wider mb-3">
                {tier > 0
                  ? `Tier ${tier}${tier === 3 ? ' — Legendary' : ''}`
                  : tier === 0
                    ? 'Neutral'
                    : `Tier ${tier} — Negative`}{' '}
                <span className="text-[var(--color-brand-text-muted)]/60 font-normal">
                  ({items.length})
                </span>
              </h2>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => {
                  const isNeg = p.tier < 0 || p.negative;
                  const isLegendary = p.tier === 3;
                  return (
                    <div
                      key={p.name}
                      className={`p-4 rounded-lg border transition-colors ${
                        isLegendary
                          ? 'bg-yellow-500/5 border-yellow-500/40 hover:border-yellow-500/70'
                          : isNeg
                            ? 'bg-red-500/5 border-red-500/30 hover:border-red-500/60'
                            : p.tier === 2
                              ? 'bg-amber-500/5 border-amber-500/30 hover:border-amber-500/60'
                              : 'card hover:border-[var(--color-brand-primary)]/50'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3
                          className={`font-bold text-[var(--color-brand-text-primary)] ${
                            isLegendary ? 'text-yellow-300' : isNeg ? 'text-red-300' : ''
                          }`}
                        >
                          {p.name}
                        </h3>
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded border shrink-0 ${
                            isLegendary
                              ? 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30'
                              : isNeg
                                ? 'bg-red-500/15 text-red-300 border-red-500/30'
                                : p.tier === 2
                                  ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                                  : 'bg-[var(--color-brand-bg-main)] text-[var(--color-brand-text-secondary)] border-[var(--color-brand-border)]'
                          }`}
                        >
                          T{p.tier > 0 ? p.tier : p.tier === 0 ? '0' : `${p.tier}`}
                        </span>
                      </div>

                      <p className="text-sm text-[var(--color-brand-text-secondary)] mb-3 min-h-[40px]">
                        {p.description || '—'}
                      </p>

                      {Object.keys(p.stats).length > 0 && (
                        <div className="space-y-1 pt-3 border-t border-[var(--color-brand-border)]">
                          {Object.entries(p.stats).map(([stat, val]) => (
                            <div key={stat} className="flex justify-between text-xs">
                              <span className="text-[var(--color-brand-text-muted)]">
                                {STAT_LABEL[stat as keyof typeof STAT_LABEL] ?? stat}
                              </span>
                              <span
                                className={`font-mono font-bold ${
                                  (val ?? 0) > 0
                                    ? 'text-emerald-400'
                                    : 'text-red-400'
                                }`}
                              >
                                {(val ?? 0) > 0 ? '+' : ''}
                                {Math.round((val ?? 0) * 100)}%
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
