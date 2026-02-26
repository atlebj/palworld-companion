'use client';

import React, { useState, useMemo } from 'react';
import { pals } from '../../../data/pals';
import { calculateBreedingResult, findPossibleParents } from '../../../data/breeding';
import { SelectField } from '../../../components/ui/SelectField';
import { Calculator, Dna, Search } from 'lucide-react';
import Link from 'next/link';

export default function BreedingSimulatorPage() {
  const [activeTab, setActiveTab] = useState<'direct' | 'reverse'>('direct');

  // Direct Breeding State
  const [parent1, setParent1] = useState<string>('');
  const [parent2, setParent2] = useState<string>('');

  // Reverse Breeding State
  const [targetChild, setTargetChild] = useState<string>('');

  const palOptions = useMemo(() => pals.map(p => [p.key, p.name] as [string, string]).sort((a, b) => a[1].localeCompare(b[1])), []);

  // Derived State: Direct Result
  const p1Data = useMemo(() => pals.find(p => p.key === parent1), [parent1]);
  const p2Data = useMemo(() => pals.find(p => p.key === parent2), [parent2]);
  const directResult = useMemo(() => (p1Data && p2Data) ? calculateBreedingResult(p1Data, p2Data, pals) : null, [p1Data, p2Data]);

  // Derived State: Reverse Results
  const reverseResults = useMemo(() => targetChild ? findPossibleParents(targetChild, pals) : [], [targetChild]);

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-slate-100 flex items-center justify-center gap-3">
          <Dna className="text-sky-400" size={32} />
          Breeding Simulator
        </h1>
        <p className="text-slate-400">
          Calculate breeding outcomes or find parents for a specific Pal.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex p-1 bg-slate-800 rounded-xl">
        <button
          onClick={() => setActiveTab('direct')}
          className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${
            activeTab === 'direct'
              ? 'bg-sky-600 text-white shadow-lg'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Calculator size={16} /> Breeding Calculator
          </div>
        </button>
        <button
          onClick={() => setActiveTab('reverse')}
          className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${
            activeTab === 'reverse'
              ? 'bg-sky-600 text-white shadow-lg'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <Search size={16} /> Parent Finder
          </div>
        </button>
      </div>

      {activeTab === 'direct' ? (
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Inputs */}
          <div className="md:col-span-1 space-y-6 bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
            <h2 className="font-bold text-slate-200 mb-4">Select Parents</h2>
            <SelectField
              label="Parent 1"
              value={parent1}
              onChange={setParent1}
              options={palOptions}
            />
            <div className="flex justify-center text-slate-500 font-bold">+</div>
            <SelectField
              label="Parent 2"
              value={parent2}
              onChange={setParent2}
              options={palOptions}
            />
          </div>

          {/* Result */}
          <div className="md:col-span-2">
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 flex flex-col items-center justify-center min-h-[300px] text-center relative overflow-hidden">
               {directResult ? (
                 <div className="animate-in zoom-in duration-300 flex flex-col items-center gap-4 relative z-10">
                   <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Resulting Child</div>
                   <div className="relative w-40 h-40">
                      <img
                        src={directResult.image || ''}
                        alt={directResult.name}
                        className="w-full h-full object-contain drop-shadow-2xl"
                      />
                   </div>
                   <h3 className="text-3xl font-extrabold text-white">{directResult.name}</h3>
                   <div className="flex gap-2">
                     {directResult.types.map(t => (
                       <span key={t} className="px-3 py-1 rounded-full bg-slate-700 text-xs font-bold text-slate-300 border border-slate-600">
                         {t}
                       </span>
                     ))}
                   </div>
                   <Link
                      href={`/pals/${directResult.key}`}
                      className="mt-4 text-sky-400 hover:text-sky-300 text-sm font-bold underline"
                   >
                     View Stats →
                   </Link>
                 </div>
               ) : (
                 <div className="text-slate-500 flex flex-col items-center">
                   <Dna size={48} className="mb-4 opacity-20" />
                   <p>Select two parents to see the offspring.</p>
                 </div>
               )}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
           <div className="max-w-md mx-auto bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
            <h2 className="font-bold text-slate-200 mb-4 text-center">Select Target Child</h2>
            <SelectField
              label="Target Pal"
              value={targetChild}
              onChange={setTargetChild}
              options={palOptions}
            />
          </div>

          {targetChild && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-200">
                Possible Parent Combinations ({reverseResults.length})
              </h3>

              {reverseResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {reverseResults.map(([p1, p2], idx) => (
                    <div key={idx} className="flex items-center justify-between bg-slate-800 p-4 rounded-xl border border-slate-700">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-900 rounded-lg p-1">
                             <img src={p1.image} alt={p1.name} className="w-full h-full object-contain" />
                        </div>
                        <span className="font-bold text-slate-200 text-sm">{p1.name}</span>
                      </div>
                      <span className="text-slate-500 font-bold">+</span>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-900 rounded-lg p-1">
                             <img src={p2.image} alt={p2.name} className="w-full h-full object-contain" />
                        </div>
                        <span className="font-bold text-slate-200 text-sm">{p2.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                 <div className="text-center p-8 bg-slate-900/50 rounded-xl border border-slate-800 text-slate-400">
                    No combinations found from the currently known Pals.
                 </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
