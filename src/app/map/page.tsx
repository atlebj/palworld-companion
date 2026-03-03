'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type LocationType = 'ore' | 'skill_fruit' | 'chest' | 'fast_travel' | 'alpha_pal';

interface MapLocation {
  id: string;
  type: LocationType;
  x: number; // Percentage 0-100
  y: number; // Percentage 0-100
  label: string;
  desc?: string;
}

// Updated locations to match the biome map layout
const locations: MapLocation[] = [
  // Forest / Starter (Windswept Hills)
  { id: '1', type: 'ore', x: 50, y: 58, label: 'Ore Cluster (x8)', desc: 'Desolate Church' },
  { id: '6', type: 'chest', x: 45, y: 50, label: 'Purple Chest', desc: 'Central Lake' },
  { id: '101', type: 'fast_travel', x: 52, y: 55, label: 'Plateau of Beginnings', desc: 'Starting Area' },
  { id: '201', type: 'alpha_pal', x: 48, y: 52, label: 'Mammorest', desc: 'Lv. 38 Field Boss' },

  // Volcano (Mount Obsidian) - SW
  { id: '2', type: 'ore', x: 15, y: 85, label: 'Coal & Ore', desc: 'Mount Obsidian Base Location' },
  { id: '5', type: 'ore', x: 12, y: 75, label: 'Sulfur Deposits', desc: 'Volcano Entrance' },
  { id: '102', type: 'fast_travel', x: 20, y: 80, label: 'Volcano Midpoint', desc: 'Dangerous Heat' },
  { id: '202', type: 'alpha_pal', x: 18, y: 88, label: 'Jetragon', desc: 'Lv. 50 Legendary' },

  // Snow (Astral Mountains) - NW
  { id: '3', type: 'skill_fruit', x: 25, y: 16, label: 'Skill Fruit Tree', desc: 'Snowy Mountain Peak' },

  // Sanctuary / Eastern Wild - East
  { id: '4', type: 'chest', x: 75, y: 58, label: 'Gold Chest', desc: 'Sanctuary Island' },
];

const typeConfig: Record<LocationType, { label: string; color: string; shadow: string; icon: string }> = {
  ore: { label: 'Ore/Coal Clusters', color: 'bg-amber-600', shadow: 'shadow-amber-500/20', icon: '💎' },
  skill_fruit: { label: 'Skill Fruit Trees', color: 'bg-green-500', shadow: 'shadow-green-500/20', icon: '🍎' },
  chest: { label: 'Treasure Chests', color: 'bg-purple-500', shadow: 'shadow-purple-500/20', icon: '🎁' },
  fast_travel: { label: 'Fast Travel', color: 'bg-sky-500', shadow: 'shadow-sky-500/20', icon: '🦅' },
  alpha_pal: { label: 'Alpha Pals', color: 'bg-red-600', shadow: 'shadow-red-600/20', icon: '💀' },
};

export default function ResourceMap() {
  const [filters, setFilters] = useState<Record<LocationType, boolean>>({
    ore: true,
    skill_fruit: true,
    chest: true,
    fast_travel: true,
    alpha_pal: true,
  });

  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);

  const toggleFilter = (type: LocationType) => {
    setFilters(prev => ({ ...prev, [type]: !prev[type] }));
  };

  const filteredLocations = locations.filter(loc => filters[loc.type]);

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 h-[calc(100vh-100px)] flex flex-col">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Interactive Resource Map</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Find key resources across Palpagos Islands.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {(Object.keys(typeConfig) as LocationType[]).map((type) => (
            <button
              key={type}
              onClick={() => toggleFilter(type)}
              className={`
                px-3 py-1.5 rounded-full text-sm font-medium border transition-all flex items-center gap-1.5
                ${filters[type]
                  ? `${typeConfig[type].color} text-white border-transparent shadow-lg ${typeConfig[type].shadow}`
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500'}
              `}
            >
              <span>{typeConfig[type].icon}</span>
              <span className="hidden sm:inline">{typeConfig[type].label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 relative bg-slate-900 rounded-xl border border-slate-700 overflow-hidden shadow-2xl">
        {/* Map Background */}
        <div className="absolute inset-0 bg-[#0f172a]">
          <Image
            src="/images/map-placeholder.svg"
            alt="Palpagos Islands Map"
            fill
            className="object-cover opacity-80"
          />
        </div>

        <div className="absolute top-4 left-4 text-slate-500 text-xs font-mono bg-slate-900/50 px-2 py-1 rounded border border-slate-700/50 backdrop-blur-sm z-10">
            PALPAGOS_NAV // ONLINE
        </div>

        {/* Pins */}
        {filteredLocations.map((loc) => (
          <button
            key={loc.id}
            style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
            className={`
              absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center
              transition-transform hover:scale-125 hover:z-50 group
              ${typeConfig[loc.type].color} shadow-lg shadow-black/50 border-2 border-white/20
            `}
            onClick={() => setSelectedLocation(loc)}
          >
            <span className="text-lg filter drop-shadow-md">{typeConfig[loc.type].icon}</span>

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-slate-800 text-slate-200 text-xs rounded-lg p-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-xl border border-slate-600 z-50">
              <div className="font-bold text-white mb-1">{loc.label}</div>
              <div className="opacity-80">{loc.desc}</div>
              <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45 border-r border-b border-slate-600"></div>
            </div>
          </button>
        ))}

        {/* Selected Info Panel (Mobile friendly) */}
        {selectedLocation && (
          <div className="absolute bottom-4 left-4 right-4 md:right-auto md:w-80 bg-slate-800/90 backdrop-blur-md p-4 rounded-xl border border-slate-600 shadow-2xl animate-in fade-in slide-in-from-bottom-4 z-50">
            <button
                onClick={() => setSelectedLocation(null)}
                className="absolute top-2 right-2 text-slate-400 hover:text-white"
            >
                ×
            </button>
            <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-2xl ${typeConfig[selectedLocation.type].color}`}>
                    {typeConfig[selectedLocation.type].icon}
                </div>
                <div>
                    <h3 className="font-bold text-white">{selectedLocation.label}</h3>
                    <div className="text-xs text-sky-400 font-mono">COORDS: {selectedLocation.x}, {selectedLocation.y}</div>
                </div>
            </div>
            <p className="text-sm text-slate-300">{selectedLocation.desc}</p>
          </div>
        )}
      </div>
    </div>
  );
}
