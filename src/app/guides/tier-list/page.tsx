import React from 'react';
import Link from 'next/link';
import { pals } from '../../../data/pals';
import { TypeBadge } from '../../../components/ui/TypeBadge';

// Mock Tier List Data - In a real app this might be dynamic or more extensive
const tiers = [
  {
    category: 'Best Base Workers',
    description: 'Top picks for mining, handiwork, and transporting.',
    items: [
      { rank: 'S', palKey: 'anubis', note: 'King of Handiwork (Lv4) & Mining (Lv3)' },
      { rank: 'S', palKey: 'jormuntide', note: 'Best Watering (Lv4)' },
      { rank: 'A', palKey: 'cattiva', note: 'Great early game generalist' },
    ]
  },
  {
    category: 'Best Flying Mounts',
    description: 'Fastest aerial travel options.',
    items: [
      { rank: 'S', palKey: 'jetragon', note: 'Fastest mount in the game' },
      { rank: 'A', palKey: 'frostallion_noct', note: 'Fast & enhances Dark attacks' },
    ]
  },
  {
    category: 'Best Combat Pals',
    description: 'Highest DPS and utility for boss fights.',
    items: [
      { rank: 'S', palKey: 'jetragon', note: 'Massive AoE damage' },
      { rank: 'S', palKey: 'frostallion_noct', note: 'Freeze utility + High Dark dmg' },
      { rank: 'A', palKey: 'anubis', note: 'Ground attacks destroy Electric bosses' },
    ]
  }
];

export default function TierListPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-20">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-slate-100">Pal Tier List & Meta</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          The best Pals for every job. Based on base stats, move sets, and work suitability.
        </p>
      </div>

      <div className="space-y-12">
        {tiers.map((tier) => (
          <div key={tier.category} className="space-y-6">
            <div className="border-b border-slate-700 pb-2">
              <h2 className="text-2xl font-bold text-sky-400">{tier.category}</h2>
              <p className="text-slate-400">{tier.description}</p>
            </div>

            <div className="grid gap-4">
              {tier.items.map((item) => {
                const pal = pals.find(p => p.key === item.palKey);
                if (!pal) return null;

                return (
                  <div key={item.palKey} className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-sky-500/50 transition-colors">
                    <div className={`
                      w-12 h-12 flex items-center justify-center rounded-lg font-bold text-xl shadow-lg
                      ${item.rank === 'S' ? 'bg-gradient-to-br from-yellow-500 to-amber-600 text-white' :
                        item.rank === 'A' ? 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white' :
                        'bg-slate-700 text-slate-300'}
                    `}>
                      {item.rank}
                    </div>

                    <div className="w-16 h-16 bg-slate-900 rounded-lg p-1 shrink-0">
                      <img src={pal.image} alt={pal.name} className="w-full h-full object-contain" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Link href={`/pals/${pal.key}`} className="font-bold text-lg text-slate-200 hover:text-sky-400 hover:underline truncate">
                          {pal.name}
                        </Link>
                        <div className="flex gap-1">
                            {pal.types.map(t => <TypeBadge key={t} type={t} />)}
                        </div>
                      </div>
                      <p className="text-sm text-slate-400">{item.note}</p>
                    </div>

                    <div className="hidden sm:block text-right">
                       <Link
                          href={`/pals/${pal.key}`}
                          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-bold rounded-lg border border-slate-600 transition-colors"
                        >
                          View Stats
                        </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
