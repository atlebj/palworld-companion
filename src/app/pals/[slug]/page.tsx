import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pals, PalData } from '../../../data/pals';
import { ArrowLeft, Swords, Shield, Heart, Utensils, Zap } from 'lucide-react';

export async function generateStaticParams() {
  return pals.map((pal) => ({
    slug: pal.key,
  }));
}

export default function PalDetail({ params }: { params: Promise<{ slug: string }> }) {
  // Await params in Next.js 15+ (and 16)
  const resolvedParams = React.use(params);
  const pal = pals.find((p) => p.key === resolvedParams.slug);

  if (!pal) {
    return notFound();
  }

  const typeColors: Record<string, string> = {
    Neutral: 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200',
    Fire: 'bg-red-500 text-white shadow-red-500/50',
    Water: 'bg-blue-500 text-white shadow-blue-500/50',
    Grass: 'bg-green-500 text-white shadow-green-500/50',
    Electric: 'bg-yellow-500 text-white shadow-yellow-500/50',
    Ice: 'bg-cyan-500 text-white shadow-cyan-500/50',
    Ground: 'bg-amber-600 text-white shadow-amber-600/50',
    Dark: 'bg-purple-600 text-white shadow-purple-600/50',
    Dragon: 'bg-indigo-600 text-white shadow-indigo-600/50',
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <Link
        href="/pals"
        className="inline-flex items-center gap-2 text-slate-500 hover:text-sky-500 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Paldeck
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Image & Basic Info */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8 flex items-center justify-center relative border border-slate-200 dark:border-slate-700 shadow-xl">
            <div className="absolute top-4 left-4 font-mono text-slate-400 font-bold text-lg">
              #{pal.id.toString().padStart(3, '0')}
            </div>
            <Image
              src={pal.image}
              alt={pal.name}
              width={250}
              height={250}
              className="drop-shadow-2xl animate-in fade-in zoom-in duration-500"
              priority
            />
          </div>

          <div className="bg-white dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Utensils className="w-4 h-4 text-orange-500" /> Food Consumption
            </h3>
            <div className="flex gap-1">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className={`h-2 flex-1 rounded-full ${i < pal.food ? 'bg-orange-500' : 'bg-slate-200 dark:bg-slate-700'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white">{pal.name}</h1>
              <div className="flex gap-2">
                {pal.types.map(type => (
                  <span
                    key={type}
                    className={`px-3 py-1 rounded-full text-sm font-bold shadow-lg ${typeColors[type] || 'bg-slate-500 text-white'}`}
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              {pal.description}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center">
              <Heart className="w-6 h-6 text-green-500 mb-1" />
              <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white">{pal.stats.hp}</div>
              <div className="text-xs text-slate-500 uppercase font-bold">HP</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center">
              <Swords className="w-6 h-6 text-red-500 mb-1" />
              <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white">{pal.stats.attack}</div>
              <div className="text-xs text-slate-500 uppercase font-bold">Attack</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center">
              <Shield className="w-6 h-6 text-blue-500 mb-1" />
              <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white">{pal.stats.defense}</div>
              <div className="text-xs text-slate-500 uppercase font-bold">Defense</div>
            </div>
          </div>

          {/* Work Suitability */}
          <div className="bg-white dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" /> Work Suitability
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {Object.entries(pal.suitability).map(([work, level]) => (
                <div key={work} className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-100 dark:border-slate-700/50">
                  <span className="text-sm capitalize text-slate-600 dark:text-slate-400">
                    {work.replace(/_/g, ' ')}
                  </span>
                  <span className={`font-bold font-mono ${
                    level === 4 ? 'text-purple-500' :
                    level === 3 ? 'text-sky-500' :
                    level === 2 ? 'text-green-500' : 'text-slate-500'
                  }`}>
                    Lv {level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Partner Skill */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-indigo-100 dark:border-indigo-800">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-500/20 rounded-lg">
                <Image src="/images/pals/lamball.svg" width={32} height={32} className="opacity-50 grayscale" alt="Skill" />
                {/* Placeholder icon since we don't have skill icons yet, using generic or maybe just an svg icon */}
              </div>
              <div>
                <h3 className="font-bold text-indigo-900 dark:text-indigo-100 mb-1">
                  Partner Skill: {pal.partnerSkill.name}
                </h3>
                <p className="text-indigo-700 dark:text-indigo-300 text-sm leading-relaxed">
                  {pal.partnerSkill.description}
                </p>
              </div>
            </div>
          </div>

          {/* Drops */}
          {pal.drops && pal.drops.length > 0 && (
            <div className="bg-white dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
               <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4">Possible Drops</h3>
               <div className="flex flex-wrap gap-2">
                 {pal.drops.map(drop => (
                   <span key={drop} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-medium">
                     {drop}
                   </span>
                 ))}
               </div>
            </div>
          )}

          {/* Actions */}
          <div className="pt-4">
            <Link
              href={`/calculators/breeding?parent1=${pal.key}`}
              className="inline-flex w-full items-center justify-center gap-2 px-6 py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40"
            >
              Breed {pal.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
