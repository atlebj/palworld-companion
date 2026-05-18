'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { pals } from '../../data/pals';
import { LayoutGrid, List as ListIcon, Search } from 'lucide-react';

const StatBar = ({ label, value, max = 200, color }: { label: string, value: number, max?: number, color: string }) => (
  <div className="flex items-center gap-2 text-xs">
    <span className="w-8 font-bold text-slate-400 uppercase">{label}</span>
    <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full ${color}`}
        style={{ width: `${Math.min((value / max) * 100, 100)}%` }}
      />
    </div>
    <span className="w-6 text-right font-mono text-slate-300">{value}</span>
  </div>
);

const TypeBadge = ({ type }: { type: string }) => {
    const colors: Record<string, string> = {
        Neutral: 'bg-neutral-600',
        Fire: 'bg-red-600',
        Water: 'bg-blue-600',
        Grass: 'bg-green-600',
        Electric: 'bg-yellow-600',
        Ice: 'bg-cyan-600',
        Ground: 'bg-amber-700',
        Dark: 'bg-purple-900',
        Dragon: 'bg-indigo-600',
    };
    return (
        <span className={`${colors[type] || 'bg-slate-600'} text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full shadow-sm`}>
            {type}
        </span>
    );
};

export default function PaldeckPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');
  const [search, setSearch] = useState('');
  const [filterElement, setFilterElement] = useState<string | null>(null);
  const [filterWork, setFilterWork] = useState<string | null>(null);

  const elements = ["Neutral", "Fire", "Water", "Grass", "Electric", "Ice", "Ground", "Dark", "Dragon"];
  const works = ["kindling", "watering", "planting", "generating_electricity", "handiwork", "gathering", "lumbering", "mining", "medicine_production", "cooling", "transporting", "farming"];

  const filteredPals = pals.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesElement = filterElement ? p.types.includes(filterElement) : true;
    const matchesWork = filterWork ? (p.suitability[filterWork as keyof typeof p.suitability] ?? 0) > 0 : true;
    return matchesSearch && matchesElement && matchesWork;
  });

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-100">Paldeck</h1>
          <p className="text-slate-400">Database of all known Pals and their stats.</p>
        </div>

        <div className="flex items-center gap-4 card p-2">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-brand-text-muted)]" />
                <input
                    type="text"
                    placeholder="Search by name..."
                    className="pl-9 pr-4 py-2 bg-[var(--color-brand-bg)] border border-[var(--color-brand-border)] rounded-lg text-sm text-[var(--color-brand-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] w-full md:w-64 transition-all"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
            <div className="hidden md:block h-6 w-px bg-[var(--color-brand-border)]"></div>
            <div className="flex bg-slate-800 rounded-lg p-1">
                <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-slate-700 text-sky-400 shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
                    title="Grid View"
                >
                    <LayoutGrid size={18} />
                </button>
                <button
                    onClick={() => setViewMode('compact')}
                    className={`p-1.5 rounded-md transition-colors ${viewMode === 'compact' ? 'bg-slate-700 text-sky-400 shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
                    title="Compact List"
                >
                    <ListIcon size={18} />
                </button>
            </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <button
            onClick={() => setFilterElement(null)}
            className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${filterElement === null ? 'bg-[var(--color-brand-primary)] text-white' : 'bg-[var(--color-brand-card)] text-[var(--color-brand-text-secondary)] hover:bg-[var(--color-brand-border)]'}`}
        >
            All Elements
        </button>
        {elements.map(el => (
            <button
                key={el}
                onClick={() => setFilterElement(filterElement === el ? null : el)}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${filterElement === el ? 'bg-sky-600 text-white' : 'bg-[var(--color-brand-card)] text-[var(--color-brand-text-secondary)] hover:bg-[var(--color-brand-border)]'}`}
            >
                {el}
            </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <button
            onClick={() => setFilterWork(null)}
            className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${filterWork === null ? 'bg-[var(--color-brand-primary)] text-white' : 'bg-[var(--color-brand-card)] text-[var(--color-brand-text-secondary)] hover:bg-[var(--color-brand-border)]'}`}
        >
            All Work
        </button>
        {works.map(w => (
            <button
                key={w}
                onClick={() => setFilterWork(filterWork === w ? null : w)}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-colors capitalize ${filterWork === w ? 'bg-amber-600 text-white' : 'bg-[var(--color-brand-card)] text-[var(--color-brand-text-secondary)] hover:bg-[var(--color-brand-border)]'}`}
            >
                {w.replace('_', ' ')}
            </button>
        ))}
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredPals.map(pal => (
            <Link
                href={`/pals/${pal.key}`}
                key={pal.key}
                className="card group overflow-hidden hover:border-[var(--color-brand-primary)]/50 transition-all duration-300 hover:-translate-y-1 relative"
            >
                {pal.isVariant && (
                    <span className="absolute top-2 left-1/2 -translate-x-1/2 z-10 bg-[var(--color-brand-border)] text-[var(--color-brand-text-muted)] text-[10px] px-2 py-0.5 rounded-full font-bold shadow-md uppercase tracking-widest whitespace-nowrap">
                        Variant
                    </span>
                )}
                {!pal.id && (
                     <span className="absolute top-2 left-1/2 -translate-x-1/2 z-10 bg-purple-600/80 text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-md uppercase tracking-widest whitespace-nowrap">
                        Collab
                    </span>
                )}

                <div className="relative h-32 bg-[var(--color-brand-bg)] flex items-center justify-center p-4">
                    <span className="absolute top-2 left-2 font-mono text-[var(--color-brand-text-muted)] text-[10px] font-bold">
                        {pal.id ? `#${pal.id.toString().padStart(3, '0')}` : ''}
                    </span>
                    <div className="absolute top-2 right-2 flex flex-col gap-1 items-end">
                        {pal.types.map(t => <TypeBadge key={t} type={t} />)}
                    </div>
                    <div className="w-20 h-20 relative drop-shadow-xl group-hover:scale-110 transition-transform duration-300">
                         {pal.image && (
                           <Image
                             src={pal.image}
                             alt={pal.name}
                             fill
                             sizes="80px"
                             className="object-contain"
                           />
                         )}
                    </div>
                </div>

                <div className="p-3 border-t border-[var(--color-brand-border)]">
                    <h2 className="font-bold text-sm text-[var(--color-brand-text-primary)] group-hover:text-[var(--color-brand-primary)] transition-colors truncate">{pal.name}</h2>
                    <div className="mt-2 flex flex-wrap gap-1">
                        {Object.entries(pal.suitability)
                            .filter(([_, level]) => (level ?? 0) > 0)
                            .sort((a, b) => (b[1] ?? 0) - (a[1] ?? 0))
                            .slice(0, 3)
                            .map(([work, level]) => (
                                <span key={work} className="text-[10px] bg-[var(--color-brand-bg)] border border-[var(--color-brand-border)] text-[var(--color-brand-text-secondary)] px-1.5 py-0.5 rounded-md flex items-center gap-1">
                                    <span className="capitalize">{work.substring(0, 3)}</span>
                                    <span className="text-[var(--color-brand-primary)] font-bold">{level}</span>
                                </span>
                            ))
                        }
                    </div>
                </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-slate-400 uppercase bg-slate-950/50 border-b border-slate-800">
                        <tr>
                            <th className="px-6 py-3 font-medium">ID</th>
                            <th className="px-6 py-3 font-medium">Pal</th>
                            <th className="px-6 py-3 font-medium">Type</th>
                            <th className="px-6 py-3 font-medium text-right">HP</th>
                            <th className="px-6 py-3 font-medium text-right">Attack</th>
                            <th className="px-6 py-3 font-medium text-right">Defense</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                        {filteredPals.map(pal => (
                            <tr key={pal.key} className="hover:bg-slate-800/50 transition-colors group cursor-pointer">
                                <td className="px-6 py-4 font-mono text-slate-500">#{pal.id.toString().padStart(3, '0')}</td>
                                <td className="px-6 py-4 font-medium text-slate-200 group-hover:text-sky-400">
                                    <Link href={`/pals/${pal.key}`} className="flex items-center gap-3">
                                        <div className="w-8 h-8 relative bg-slate-800 rounded p-1">
                                            {pal.image && (
                                              <Image
                                                src={pal.image}
                                                alt=""
                                                fill
                                                sizes="32px"
                                                className="object-contain p-1"
                                              />
                                            )}
                                        </div>
                                        {pal.name}
                                    </Link>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-1">
                                        {pal.types.map(t => <TypeBadge key={t} type={t} />)}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right font-mono text-slate-300">{pal.stats.hp}</td>
                                <td className="px-6 py-4 text-right font-mono text-slate-300">{pal.stats.attack.melee}</td>
                                <td className="px-6 py-4 text-right font-mono text-slate-300">{pal.stats.defense}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      )}
    </div>
  );
}
