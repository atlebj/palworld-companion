'use client';

import React, { useState } from 'react';
import { passives } from '../../../data/passives';

export default function PassiveSearch() {
  const [search, setSearch] = useState('');
  const [tierFilter, setTierFilter] = useState<number | 'all'>('all');

  const filteredPassives = passives.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
                          p.description.toLowerCase().includes(search.toLowerCase());
    const matchesTier = tierFilter === 'all' || p.tier === tierFilter;
    return matchesSearch && matchesTier;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Passive Skills</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Search and filter passive skills to find the perfect traits for your Pals.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 bg-white dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
        <input
          type="text"
          placeholder="Search passives..."
          className="flex-1 px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
          value={tierFilter}
          onChange={(e) => setTierFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
        >
          <option value="all">All Tiers</option>
          <option value="3">Tier 3 (Legendary)</option>
          <option value="2">Tier 2 (Gold)</option>
          <option value="1">Tier 1 (White)</option>
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredPassives.map((passive) => (
          <div
            key={passive.name}
            className={`
              p-4 rounded-lg border transition-all hover:scale-[1.02]
              ${passive.tier === 3 ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-500/50 shadow-yellow-900/10' :
                passive.tier === 2 ? 'bg-slate-50 dark:bg-slate-800/80 border-amber-200/50 dark:border-amber-200/30' :
                'bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700'}
            `}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className={`font-bold ${
                passive.tier === 3 ? 'text-yellow-700 dark:text-yellow-400' :
                passive.tier === 2 ? 'text-amber-700 dark:text-amber-200' :
                'text-slate-900 dark:text-slate-200'
              }`}>
                {passive.name}
              </h3>
              <span className={`text-[10px] px-1.5 py-0.5 rounded border ${
                passive.tier === 3 ? 'bg-yellow-100 dark:bg-yellow-900/40 border-yellow-300 dark:border-yellow-700 text-yellow-800 dark:text-yellow-200' :
                passive.tier === 2 ? 'bg-amber-100 dark:bg-amber-900/30 border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-200' :
                'bg-slate-100 dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-400'
              }`}>
                Tier {passive.tier}
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 min-h-[40px]">
              {passive.description}
            </p>

            <div className="space-y-1 pt-3 border-t border-slate-200 dark:border-white/5">
              {Object.entries(passive.stats).map(([stat, val]) => (
                <div key={stat} className="flex justify-between text-xs">
                  <span className="capitalize text-slate-500 dark:text-slate-400">{stat.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span className={`font-mono font-bold ${val! > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {val! > 0 ? '+' : ''}{val! * 100}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredPassives.length === 0 && (
        <div className="text-center py-12 text-slate-500 dark:text-slate-400">
          No passives found matching &quot;{search}&quot;
        </div>
      )}
    </div>
  );
}
