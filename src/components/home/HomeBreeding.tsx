'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { SelectField } from '../ui/SelectField';
import Link from 'next/link';
import { pals } from '../../data/pals';
import { calculateBreedingResult } from '../../data/breeding';
import { ArrowRight, Calculator, CheckSquare, Target } from 'lucide-react';

export function HomeBreeding() {
  const [parent1, setParent1] = useState<string>('');
  const [parent2, setParent2] = useState<string>('');
  const router = useRouter();

  const palOptions = useMemo(() => {
    const options = pals.map(p => [p.key, p.name] as [string, string]);
    options.sort((a, b) => a[1].localeCompare(b[1]));
    return [['', 'Select a Pal...'] as [string, string], ...options];
  }, []);

  const p1Data = useMemo(() => pals.find(p => p.key === parent1), [parent1]);
  const p2Data = useMemo(() => pals.find(p => p.key === parent2), [parent2]);
  const result = useMemo(() => {
    if (p1Data && p2Data) {
      return calculateBreedingResult(p1Data, p2Data, pals);
    }
    return null;
  }, [p1Data, p2Data]);

  const handleCalculate = () => {
    if (parent1 && parent2) {
      router.push(`/calculators/breeding-simulator?parent1=${parent1}&parent2=${parent2}`);
    } else {
      router.push(`/calculators/breeding-simulator`);
    }
  };

  return (
    <div className="card max-w-2xl mx-auto p-6 md:p-8 flex flex-col gap-6 text-left">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <SelectField
            label="Parent 1"
            value={parent1}
            onChange={setParent1}
            options={palOptions}
          />
        </div>
        <div>
          <SelectField
            label="Parent 2"
            value={parent2}
            onChange={setParent2}
            options={palOptions}
          />
        </div>
      </div>

      <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-800 text-center flex flex-col items-center justify-center min-h-[100px]">
        {result ? (
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-slate-400">Result</span>
            <div className="flex items-center gap-3">
              {result.image && (
                <div className="w-12 h-12 bg-slate-800 rounded p-1">
                  <img src={result.image} alt={result.name} className="w-full h-full object-contain" />
                </div>
              )}
              <span className="font-bold text-lg text-slate-200">{result.name}</span>
            </div>
          </div>
        ) : (
          <span className="text-slate-500 text-sm">Select two parents to see the result</span>
        )}
      </div>

      <button
        onClick={handleCalculate}
        className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-bold transition-colors shadow-lg flex items-center justify-center gap-2"
      >
        Get Best Result <ArrowRight className="w-5 h-5" />
      </button>

      {/* Next Step Chaining links (only if result exists) */}
      {result && (
        <div className="flex flex-col gap-2 pt-2 border-t border-slate-800">
          <p className="text-sm font-bold text-slate-300">Next Steps:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <Link
              href={`/pals/${result.key}`}
              className="flex items-center gap-2 text-xs bg-slate-900/50 hover:bg-slate-800 p-2 rounded-lg border border-slate-800 text-slate-300 transition-colors group"
            >
              <Target className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              View best passives
            </Link>
            <Link
              href="/calculators/iv"
              className="flex items-center gap-2 text-xs bg-slate-900/50 hover:bg-slate-800 p-2 rounded-lg border border-slate-800 text-slate-300 transition-colors group"
            >
              <Calculator className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
              Optimize stats
            </Link>
            <Link
              href="/my-pals"
              className="flex items-center gap-2 text-xs bg-slate-900/50 hover:bg-slate-800 p-2 rounded-lg border border-slate-800 text-slate-300 transition-colors group"
            >
              <CheckSquare className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
              Add to Pal Box
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
