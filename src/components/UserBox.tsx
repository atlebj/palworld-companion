'use client';

import React, { useState } from 'react';
import { useUserPals, SavedPal } from '../hooks/useUserPals';
import { pals } from '../data/pals';
import { passives } from '../data/passives';
import { NumberField } from './ui/NumberField';

export function UserBox() {
  const { pals: savedPals, addPal, removePal, isLoaded } = useUserPals();
  const [selectedPalKey, setSelectedPalKey] = useState(pals[0].key);
  const [nickname, setNickname] = useState('');
  const [level, setLevel] = useState(1);
  const [selectedPassives, setSelectedPassives] = useState<string[]>(['', '', '', '']);

  if (!isLoaded) {
    return <div className="p-4 text-slate-400">Loading box...</div>;
  }

  const handleAdd = () => {
    // Filter out empty passives
    const activePassives = selectedPassives.filter(p => p !== '');

    const newPal: SavedPal = {
      id: crypto.randomUUID(),
      palKey: selectedPalKey,
      nickname: nickname || undefined,
      level,
      passives: activePassives,
      gender: Math.random() > 0.5 ? 'Male' : 'Female',
    };
    addPal(newPal);
    setNickname('');
    setLevel(1);
    setSelectedPassives(['', '', '', '']);
  };

  // SelectField expects [value, label][]
  const palOptions: [string, string][] = pals.map(p => [p.key, p.name]);
  const passiveOptions: [string, string][] = [['', 'None'], ...passives.map((p): [string, string] => [p.name, p.name])];

  const handlePassiveChange = (index: number, value: string) => {
    const newPassives = [...selectedPassives];
    newPassives[index] = value;
    setSelectedPassives(newPassives);
  };

  return (
    <div className="space-y-8">
      <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
        <h3 className="text-xl font-bold text-sky-400 mb-4">Add to Box</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Pal Selection */}
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-sm text-slate-300">Species</span>
            <select
              className="px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 focus:ring-2 focus:ring-sky-500"
              value={selectedPalKey}
              onChange={(e) => setSelectedPalKey(e.target.value)}
            >
              {palOptions.map(([val, label]) => (
                <option key={val} value={val}>{label}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm text-slate-300">Nickname</label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Optional"
            />
          </div>

          <NumberField
            label="Level"
            value={level}
            onChange={setLevel}
            min={1}
            max={50}
          />
        </div>

        <div className="mt-4">
          <label className="text-sm font-semibold text-slate-300 block mb-2">Passives</label>
          <div className="grid grid-cols-2 gap-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-xs text-slate-400">Slot {i+1}</span>
                <select
                  className="px-2 py-1 bg-slate-900 border border-slate-700 rounded text-sm text-slate-100 focus:ring-1 focus:ring-sky-500"
                  value={selectedPassives[i]}
                  onChange={(e) => handlePassiveChange(i, e.target.value)}
                >
                  {passiveOptions.map(([val, label]) => (
                    <option key={val} value={val}>{label}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleAdd}
          className="mt-6 w-full py-2 px-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-lg transition-colors shadow-lg shadow-sky-900/20"
        >
          Add Pal
        </button>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-sky-400 flex items-center gap-2">
          My Box <span className="text-sm font-normal text-slate-400">({savedPals.length})</span>
        </h3>
        {savedPals.length === 0 ? (
          <p className="text-slate-400 italic">Your box is empty. Add some Pals above!</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {savedPals.map((saved) => {
              const palData = pals.find(p => p.key === saved.palKey);
              if (!palData) return null;

              const types = palData.types.join('/');

              return (
                <div key={saved.id} className="bg-slate-900/80 p-4 rounded-lg border border-slate-700 relative group hover:border-sky-500/50 transition-colors">
                  <button
                    onClick={() => removePal(saved.id)}
                    className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-red-900/50 hover:text-red-400 transition-colors"
                    title="Remove"
                  >
                    ×
                  </button>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-2xl border border-slate-700">
                      {palData.types[0] === 'Dragon' ? '🐉' : palData.types[0] === 'Water' ? '💧' : '🐾'}
                    </div>
                    <div>
                      <div className="font-bold text-slate-100">{saved.nickname || palData.name}</div>
                      <div className="text-xs text-sky-400 font-medium">Lv.{saved.level} {palData.name}</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider">{types}</div>
                    </div>
                  </div>

                  {saved.passives.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2 pt-2 border-t border-slate-800">
                      {saved.passives.map((p, i) => (
                        <span key={i} className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded border border-slate-700/50">
                          {p}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
