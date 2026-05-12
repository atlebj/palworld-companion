import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { pals } from '../../../data/pals';
import { tiers, type Tier, type TierEntry } from '../../../data/tiers';
import { TypeBadge } from '../../../components/ui/TypeBadge';

export const metadata: Metadata = {
  title: 'Palworld Tier List',
  description:
    'Data-derived tier rankings across 8 roles — mining, handiwork, lumbering, kindling, watering, melee, ranged, and tank. Scores combine work suitability with base stats; notes explain each pick.',
  alternates: { canonical: '/guides/tier-list' },
  openGraph: {
    title: 'Palworld Tier List | Palworld Companion',
    description:
      'S/A/B tiers across base work and combat roles, derived from pal stats and suitability data.',
    url: '/guides/tier-list',
    type: 'article',
  },
};

const TIER_STYLES: Record<Tier, string> = {
  S: 'bg-gradient-to-br from-yellow-500 to-amber-600 text-white',
  A: 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white',
  B: 'bg-gradient-to-br from-sky-600 to-blue-700 text-white',
  C: 'bg-slate-700 text-slate-300',
  D: 'bg-slate-800 text-slate-400',
};

function PalRow({ entry }: { entry: TierEntry }) {
  const pal = pals.find((p) => p.key === entry.key);
  if (!pal) return null;

  return (
    <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-sky-500/50 transition-colors">
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-lg font-bold text-xl shadow-lg shrink-0 ${TIER_STYLES[entry.rank]}`}
        title={`Score: ${entry.score}`}
      >
        {entry.rank}
      </div>

      <div className="w-16 h-16 bg-slate-900 rounded-lg p-1 shrink-0 relative">
        {pal.image && (
          <Image
            src={pal.image}
            alt={pal.name}
            fill
            sizes="64px"
            className="object-contain p-1"
          />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <Link
            href={`/pals/${pal.key}`}
            className="font-bold text-lg text-slate-200 hover:text-sky-400 hover:underline truncate"
          >
            {pal.name}
          </Link>
          <div className="flex gap-1">
            {pal.types.map((t) => (
              <TypeBadge key={t} type={t} />
            ))}
          </div>
        </div>
        {entry.note ? <p className="text-sm text-slate-400">{entry.note}</p> : null}
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
}

export default function TierListPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-20">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-slate-100">Pal Tier List</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Best Pals for every role — derived from work suitability and base stats, then
          curated with notes that explain each pick.
        </p>
      </div>

      <nav aria-label="Tier list categories" className="flex flex-wrap gap-2 justify-center text-sm">
        {tiers.map((t) => (
          <a
            key={t.key}
            href={`#${t.key}`}
            className="px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
          >
            {t.category}
          </a>
        ))}
      </nav>

      <div className="space-y-12">
        {tiers.map((tier) => (
          <section key={tier.key} id={tier.key} className="space-y-6 scroll-mt-20">
            <div className="border-b border-slate-700 pb-2">
              <h2 className="text-2xl font-bold text-sky-400">{tier.category}</h2>
              <p className="text-slate-400">{tier.description}</p>
            </div>

            <div className="grid gap-4">
              {tier.entries.map((entry) => (
                <PalRow key={`${tier.key}:${entry.key}`} entry={entry} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="text-xs text-slate-500 text-center max-w-2xl mx-auto">
        Tiers are auto-derived from in-game data: work suitability levels weighted heavily,
        with base stats breaking ties. Notes are editorial. Bucketing is percentile-based —
        S = top 5%, A = next 10%, B = next 25%, C = next 30% of each role&apos;s eligible Pals.
      </p>
    </div>
  );
}
