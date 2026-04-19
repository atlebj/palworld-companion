'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { pals } from '../../data/pals';
import { LayoutGrid, List as ListIcon, Search } from 'lucide-react';
import { TypeBadge } from '../../components/ui/TypeBadge';
import { SelectField } from '../../components/ui/SelectField';

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

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';


// Collect all unique types and suitabilities for dropdowns
const allTypes = Array.from(new Set(pals.flatMap(p => p.types))).sort();
const allSuitabilities = Array.from(new Set(pals.flatMap(p => Object.keys(p.suitability)))).sort();

function PaldeckContent() {

  const searchParams = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');
  const [search, setSearch] = useState(initialSearch);
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedWork, setSelectedWork] = useState<string>('');

  const filteredPals = pals.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.types.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchesType = selectedType === '' || p.types.includes(selectedType);
    const matchesWork = selectedWork === '' || Object.keys(p.suitability).includes(selectedWork);
    return matchesSearch && matchesType && matchesWork;
  });

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-100">Paldeck</h1>
          <p className="text-slate-400">Database of all known Pals and their stats.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 bg-slate-900/50 p-2 rounded-xl border border-slate-800">
            <div className="relative flex-1 md:flex-none">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                    type="text"
                    placeholder="Filter Pals..."
                    className="pl-9 pr-4 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 w-full md:w-64"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>

            <div className="w-32">
              <SelectField
                label=""
                value={selectedType}
                onChange={val => setSelectedType(val)}
                options={[['', 'All Types'], ...allTypes.map(t => [t, t] as [string, string])]}
              />
            </div>

            <div className="w-40">
              <SelectField
                label=""
                value={selectedWork}
                onChange={val => setSelectedWork(val)}
                options={[['', 'All Work'], ...allSuitabilities.map(w => [w, w.replace('_', ' ')] as [string, string])]}
              />
            </div>

            <div className="h-6 w-px bg-slate-700 hidden md:block"></div>
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

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPals.map(pal => (
            <Link
                href={`/pals/${pal.key}`}
                key={pal.key}
                className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-900/10 transition-all duration-300 hover:-translate-y-1"
            >
                <div className="relative h-40 bg-slate-800/50 flex items-center justify-center p-4 group-hover:bg-slate-800 transition-colors">
                    <span className="absolute top-3 left-3 font-mono text-slate-500 text-xs font-bold">#{pal.id.toString().padStart(3, '0')}</span>
                    <div className="absolute top-3 right-3 flex gap-1">
                        {pal.types.map(t => <TypeBadge key={t} type={t} />)}
                    </div>
                    {/* Placeholder or Image */}
                    <div className="w-24 h-24 relative drop-shadow-xl group-hover:scale-110 transition-transform duration-300">
                         {/* Since we have generic paths, use a fallback or explicit image */}
                         <img src={pal.image} alt={pal.name} className="w-full h-full object-contain" />
                    </div>
                </div>

                <div className="p-4 space-y-4">
                    <h2 className="font-bold text-lg text-slate-200 group-hover:text-sky-400 transition-colors">{pal.name}</h2>

                    <div className="space-y-1.5">
                        <StatBar label="HP" value={pal.stats.hp} color="bg-green-500" />
                        <StatBar label="ATK" value={pal.stats.attack} color="bg-red-500" />
                        <StatBar label="DEF" value={pal.stats.defense} color="bg-blue-500" />
                    </div>

                    {Object.keys(pal.suitability).length > 0 && (
                      <div className="pt-3 mt-3 border-t border-slate-800">
                        <div className="flex flex-wrap gap-1">
                          {Object.entries(pal.suitability).map(([work, level]) => (
                            <span
                              key={work}
                              className="px-2 py-0.5 bg-slate-800 rounded text-xs text-slate-300 border border-slate-700"
                              title={work.replace('_', ' ')}
                            >
                              {work.substring(0, 3).toUpperCase()} {level as number}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
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
                                            <img src={pal.image} alt="" className="w-full h-full object-contain" />
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
                                <td className="px-6 py-4 text-right font-mono text-slate-300">{pal.stats.attack}</td>
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

export default function PaldeckPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-400">Loading Paldeck...</div>}>
      <PaldeckContent />
    </Suspense>
  );
}
