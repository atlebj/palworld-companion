'use client';

import React from 'react';
import { Sword, Shield } from 'lucide-react';

const types = [
  'Neutral', 'Fire', 'Water', 'Grass', 'Electric', 'Ice', 'Ground', 'Dark', 'Dragon'
];

const typeColors: Record<string, string> = {
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

const effectiveness: Record<string, string[]> = {
    Fire: ['Grass', 'Ice'],
    Grass: ['Ground'],
    Ground: ['Electric'],
    Electric: ['Water'],
    Water: ['Fire'],
    Ice: ['Dragon'],
    Dragon: ['Dark'],
    Dark: ['Neutral'],
    Neutral: [],
};

const weakness: Record<string, string[]> = {
    Fire: ['Water'],
    Grass: ['Fire'],
    Ground: ['Grass'],
    Electric: ['Ground'],
    Water: ['Electric'],
    Ice: ['Fire'],
    Dragon: ['Ice'],
    Dark: ['Dragon'],
    Neutral: ['Dark'],
};

export default function TypeChartPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-slate-100">Type Effectiveness Chart</h1>
        <p className="text-slate-400">
          Identify weaknesses and resistances to maximize your damage.
        </p>
      </div>

      <div className="overflow-x-auto bg-slate-900 rounded-xl border border-slate-800 shadow-xl">
        <table className="w-full text-center border-collapse min-w-[600px]">
            <thead>
                <tr>
                    <th className="p-4 bg-slate-950/50 border-b border-r border-slate-800 text-slate-400 font-bold sticky left-0 z-10 backdrop-blur-sm">
                        <div className="flex flex-col items-center text-xs">
                            <span className="text-slate-500 mb-1">DEFENDER →</span>
                            <span>ATTACKER ↓</span>
                        </div>
                    </th>
                    {types.map(t => (
                        <th key={t} className="p-2 border-b border-slate-800 min-w-[80px]">
                            <div className={`${typeColors[t]} text-white text-xs font-bold py-1 px-2 rounded-full shadow-sm`}>
                                {t.slice(0, 3)}
                            </div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {types.map(attacker => (
                    <tr key={attacker} className="hover:bg-slate-800/30 transition-colors">
                        <th className="p-2 border-r border-slate-800 bg-slate-950/30 sticky left-0 z-10 backdrop-blur-sm">
                             <div className={`${typeColors[attacker]} text-white text-xs font-bold py-1 px-2 rounded-full w-20 mx-auto shadow-sm`}>
                                {attacker}
                            </div>
                        </th>
                        {types.map(defender => {
                            let val = 1;
                            // Attacker deals 2x if Defender is weak to Attacker
                            if (weakness[defender]?.includes(attacker)) val = 2;
                            // Attacker deals 0.5x if Attacker is weak to Defender (Simplified reciprocal rule often seen in Palworld simple charts, though actual logic is strictly defined by the loop)
                            // Actually, let's stick to the effectiveness map.
                            // If Attacker is in effectiveness list of Defender (meaning Defender is strong against Attacker), then Attacker deals 0.5x?
                            // No, let's look at the cycle. Fire > Grass. Grass < Fire.
                            // If Attacker (Fire) attacks Defender (Grass). Fire is in weakness[Grass]. So 2x.
                            // If Attacker (Grass) attacks Defender (Fire). Grass is NOT in weakness[Fire].
                            // Is Fire in weakness[Grass]? Yes.
                            // Usually: if A > B, then B < A (0.5x).

                            if (effectiveness[defender]?.includes(attacker)) val = 0.5;

                            return (
                                <td key={defender} className="p-2 border border-slate-800/50">
                                    {val !== 1 && (
                                        <span className={`
                                            inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm shadow-sm
                                            ${val > 1
                                                ? 'bg-red-500/20 text-red-400 border border-red-500/50'
                                                : 'bg-slate-800 text-slate-600 border border-slate-700'}
                                        `}>
                                            {val}x
                                        </span>
                                    )}
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg">
            <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                <Sword className="text-red-400" /> Strong Against (2.0x)
            </h3>
            <ul className="space-y-3">
                {Object.entries(effectiveness).map(([type, targets]) => targets.length > 0 && (
                    <li key={type} className="flex items-center gap-3 text-sm group">
                        <span className={`${typeColors[type]} px-2 py-0.5 rounded text-white font-bold w-16 text-center shadow-sm`}>{type}</span>
                        <span className="text-slate-400">deals double damage to</span>
                        <div className="flex gap-1">
                            {targets.map(t => (
                                <span key={t} className={`${typeColors[t]} px-2 py-0.5 rounded text-white font-bold shadow-sm`}>{t}</span>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>

         <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg">
            <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                <Shield className="text-green-400" /> Weakness (Takes 2.0x)
            </h3>
             <ul className="space-y-3">
                {Object.entries(weakness).map(([type, sources]) => sources.length > 0 && (
                    <li key={type} className="flex items-center gap-3 text-sm group">
                        <span className={`${typeColors[type]} px-2 py-0.5 rounded text-white font-bold w-16 text-center shadow-sm`}>{type}</span>
                        <span className="text-slate-400">takes double damage from</span>
                        <div className="flex gap-1">
                            {sources.map(t => (
                                <span key={t} className={`${typeColors[t]} px-2 py-0.5 rounded text-white font-bold shadow-sm`}>{t}</span>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
}
