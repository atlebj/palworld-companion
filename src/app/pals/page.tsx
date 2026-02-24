'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { pals, PalData, WorkSuitability } from '../../data/pals';
import { Search, Filter } from 'lucide-react';

const ELEMENTS = ['Neutral', 'Fire', 'Water', 'Grass', 'Electric', 'Ice', 'Ground', 'Dark', 'Dragon'];
const WORK_TYPES: (keyof WorkSuitability)[] = [
  'kindling', 'watering', 'planting', 'generating_electricity',
  'handiwork', 'gathering', 'lumbering', 'mining',
  'medicine_production', 'cooling', 'transporting', 'farming'
];

const typeColors: Record<string, string> = {
  Neutral: 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200',
  Fire: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-200 border-red-200 dark:border-red-800',
  Water: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200 border-blue-200 dark:border-blue-800',
  Grass: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-200 border-green-200 dark:border-green-800',
  Electric: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-200 border-yellow-200 dark:border-yellow-800',
  Ice: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-200 border-cyan-200 dark:border-cyan-800',
  Ground: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-200 border-amber-200 dark:border-amber-800',
  Dark: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-200 border-purple-200 dark:border-purple-800',
  Dragon: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-200 border-indigo-200 dark:border-indigo-800',
};

export default function PalList() {
  const [search, setSearch] = useState('');
  const [selectedElement, setSelectedElement] = useState<string | 'all'>('all');
  const [selectedWork, setSelectedWork] = useState<string | 'all'>('all');

  const filteredPals = pals.filter(pal => {
    const matchesSearch = pal.name.toLowerCase().includes(search.toLowerCase());
    const matchesElement = selectedElement === 'all' || pal.types.includes(selectedElement);
    const matchesWork = selectedWork === 'all' || (pal.suitability[selectedWork as keyof WorkSuitability] || 0) > 0;
    return matchesSearch && matchesElement && matchesWork;
  });

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
          Paldeck
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          Explore the complete list of Pals, their stats, drops, and abilities.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8 bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex gap-4 flex-wrap sm:flex-nowrap">
          <select
            className="flex-1 px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none cursor-pointer"
            value={selectedElement}
            onChange={(e) => setSelectedElement(e.target.value)}
          >
            <option value="all">All Elements</option>
            {ELEMENTS.map(el => <option key={el} value={el}>{el}</option>)}
          </select>

          <select
            className="flex-1 px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none cursor-pointer"
            value={selectedWork}
            onChange={(e) => setSelectedWork(e.target.value)}
          >
            <option value="all">All Work Types</option>
            {WORK_TYPES.map(work => (
              <option key={work} value={work}>
                {work.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPals.map((pal) => (
          <Link
            href={`/pals/${pal.key}`}
            key={pal.id}
            className="group block bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            <div className="aspect-square relative bg-slate-100 dark:bg-slate-900 p-6 flex items-center justify-center">
              <span className="absolute top-3 left-3 font-mono text-xs font-bold text-slate-400">
                #{pal.id.toString().padStart(3, '0')}
              </span>
              <Image
                src={pal.image}
                alt={pal.name}
                width={150}
                height={150}
                className="group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg"
              />
              <div className="absolute top-3 right-3 flex gap-1">
                {pal.types.map(type => (
                  <div
                    key={type}
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] border ${typeColors[type] || 'bg-slate-500 text-white'}`}
                    title={type}
                  >
                    {type[0]}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4">
              <h2 className="font-bold text-lg mb-1 text-slate-900 dark:text-slate-100">{pal.name}</h2>
              <div className="flex flex-wrap gap-2 mt-3">
                {Object.entries(pal.suitability).slice(0, 3).map(([key, level]) => (
                  <span
                    key={key}
                    className="inline-flex items-center gap-1 text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700/50 rounded text-slate-600 dark:text-slate-300"
                  >
                   {key.replace(/_/g, ' ').split(' ')[0]} <b className="text-sky-500">{level}</b>
                  </span>
                ))}
                {Object.keys(pal.suitability).length > 3 && (
                  <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700/50 rounded text-slate-500">
                    +{Object.keys(pal.suitability).length - 3} more
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredPals.length === 0 && (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
            <Search className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-200">No Pals Found</h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Try adjusting your search or filters to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
}
