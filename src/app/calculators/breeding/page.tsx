'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useUserPals } from '../../../hooks/useUserPals';
import { pals } from '../../../data/pals';
import { findBreedingPath, PathStep } from '../../../utils/breedingPathfinder';
import { SelectField } from '../../../components/ui/SelectField';

export default function BreedingPathfinder() {
  const { pals: savedPals } = useUserPals();
  const [tempPals, setTempPals] = useState<string[]>([]);
  const [targetKey, setTargetKey] = useState<string>(pals[0].key);
  const [path, setPath] = useState<PathStep[] | null>(null);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const availableKeys = Array.from(new Set([
    ...savedPals.map(p => p.palKey),
    ...tempPals
  ]));

  const handleSearch = () => {
    setSearching(true);
    setError(null);
    setPath(null);

    // Allow UI to update before blocking
    setTimeout(() => {
      try {
        const result = findBreedingPath(availableKeys, targetKey);
        if (result && result.length > 0) {
          setPath(result);
        } else {
          setError('No breeding path found within 5 generations. Try adding more variety to your available Pals.');
        }
      } catch (e) {
        console.error(e);
        setError('An unexpected error occurred.');
      } finally {
        setSearching(false);
      }
    }, 50);
  };

  const palOptions: [string, string][] = pals.map(p => [p.key, p.name]);

  // Options for temp add
  const addOptions = palOptions.filter(([k]) => !tempPals.includes(k));

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Breeding Pathfinder</h1>
        <p className="text-slate-400">
          Find the shortest breeding chain to get your dream Pal using Pals you already own.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left Column: Input */}
        <div className="lg:col-span-1 space-y-6 bg-slate-800 p-6 rounded-lg border border-slate-700 h-fit">
          <div>
            <h2 className="text-xl font-bold text-sky-400 mb-4 flex items-center gap-2">
              <span>Your Roster</span>
              <span className="text-xs bg-slate-700 text-slate-200 px-2 py-0.5 rounded-full">{availableKeys.length}</span>
            </h2>

            <div className="text-sm text-slate-300 mb-4 flex items-center justify-between">
              <span>Includes {savedPals.length} from your box.</span>
              <Link href="/my-pals" className="text-sky-400 hover:text-sky-300 underline font-semibold text-xs">
                Manage Box →
              </Link>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Add Temporary Pal</label>
              <select
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-100 focus:ring-2 focus:ring-sky-500"
                onChange={(e) => {
                  const val = e.target.value;
                  if (val && !tempPals.includes(val)) {
                    setTempPals([...tempPals, val]);
                  }
                }}
                value=""
              >
                <option value="">+ Add Species...</option>
                {addOptions.map(([k, n]) => (
                  <option key={k} value={k}>{n}</option>
                ))}
              </select>

              {tempPals.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3 p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                  {tempPals.map(k => {
                    const p = pals.find(x => x.key === k);
                    return (
                      <span key={k} className="inline-flex items-center gap-1.5 bg-slate-800 text-xs px-2 py-1 rounded border border-slate-700">
                        {p?.name}
                        <button
                          onClick={() => setTempPals(tempPals.filter(x => x !== k))}
                          className="hover:text-red-400 font-bold ml-1"
                        >
                          ×
                        </button>
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-700">
            <SelectField
              label="Target Pal"
              value={targetKey}
              onChange={setTargetKey}
              options={palOptions}
            />
          </div>

          <button
            onClick={handleSearch}
            disabled={searching || availableKeys.length === 0}
            className={`
              w-full py-3 px-4 font-bold rounded-lg shadow-lg transition-all transform active:scale-95
              ${availableKeys.length === 0 ? 'bg-slate-700 text-slate-400 cursor-not-allowed' :
                searching ? 'bg-sky-700 text-sky-300 cursor-wait' :
                'bg-sky-600 hover:bg-sky-500 text-white shadow-sky-900/20'}
            `}
          >
            {searching ? 'Calculating...' : 'Find Breeding Path'}
          </button>
        </div>

        {/* Right Column: Result */}
        <div className="lg:col-span-2">
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 min-h-[500px]">
            <h2 className="text-xl font-bold text-sky-400 mb-6 border-b border-slate-700 pb-4">
              Breeding Chain
            </h2>

            {error && (
              <div className="p-4 bg-red-900/20 border border-red-700/50 rounded-lg text-red-200 flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <div className="font-bold">Path Not Found</div>
                  <div className="text-sm opacity-80">{error}</div>
                </div>
              </div>
            )}

            {!path && !searching && !error && (
              <div className="flex flex-col items-center justify-center h-[300px] text-slate-300">
                <div className="text-4xl mb-4 opacity-30">🧬</div>
                <p>Select your available Pals and a target to start.</p>
              </div>
            )}

            {searching && (
              <div className="flex flex-col items-center justify-center h-[300px] text-sky-400 animate-pulse">
                <div className="text-4xl mb-4">🔍</div>
                <p>Searching for optimal breeding path...</p>
              </div>
            )}

            {path && (
              <div className="space-y-6 relative ml-4 pl-8 border-l-2 border-slate-700 py-2">
                {path.map((step, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[43px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center font-bold text-slate-400 group-hover:border-sky-500 group-hover:text-sky-400 transition-colors z-10">
                      {idx + 1}
                    </div>

                    <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700 shadow-sm hover:border-sky-500/30 transition-colors">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                        {/* Parents */}
                        <div className="flex items-center gap-3 flex-1 justify-end md:justify-start w-full md:w-auto">
                          <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-700/50">
                            <span className="w-2 h-2 rounded-full bg-slate-500"></span>
                            <span className="font-semibold text-slate-200">{step.parent1?.name}</span>
                          </div>
                          <span className="text-slate-400 font-bold text-lg">+</span>
                          <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-700/50">
                            <span className="w-2 h-2 rounded-full bg-slate-500"></span>
                            <span className="font-semibold text-slate-200">{step.parent2?.name}</span>
                          </div>
                        </div>

                        {/* Arrow */}
                        <div className="rotate-90 md:rotate-0 text-slate-600">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </div>

                        {/* Result */}
                        <div className="flex items-center gap-3 flex-1 justify-start w-full md:w-auto">
                          <div className="flex items-center gap-2 bg-sky-900/20 px-4 py-2 rounded-lg border border-sky-500/30 w-full md:w-auto justify-center md:justify-start">
                            <span className="text-xl">🥚</span>
                            <span className="font-bold text-sky-300">{step.result.name}</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                ))}

                <div className="relative mt-8">
                   <div className="absolute -left-[43px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-green-900/50 border-2 border-green-500 flex items-center justify-center font-bold text-green-400 z-10">
                      ✓
                   </div>
                   <div className="bg-green-900/10 border border-green-500/20 p-4 rounded-xl text-green-400 font-bold flex items-center gap-3">
                      <span>Target Reached!</span>
                      <span className="text-sm opacity-70 font-normal">Now breed for passives.</span>
                   </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
