import React from 'react';
import { PalData } from '../../data/pals';
import { PathStep } from '../../utils/breedingPathfinder';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

interface BreedingTreeProps {
  steps: PathStep[];
  targetKey: string;
}

const PalNodeCard = ({ pal, isResult, isLeaf }: { pal: PalData; isResult?: boolean; isLeaf?: boolean }) => {
  return (
    <div className={`
      relative flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all w-32 md:w-40
      ${isResult
        ? 'bg-sky-900/40 border-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.3)]'
        : isLeaf
          ? 'bg-slate-800 border-slate-600'
          : 'bg-slate-800/80 border-slate-700'
      }
    `}>
      {/* Image Placeholder if image fails or doesn't exist */}
      <div className="w-12 h-12 md:w-16 md:h-16 mb-2 rounded-full overflow-hidden bg-slate-900 border border-slate-700 flex items-center justify-center relative">
        {pal.image ? (
            <Image
                src={pal.image}
                alt={pal.name}
                fill
                className="object-cover"
                onError={(e) => {
                    // Fallback to text or icon if image fails
                    e.currentTarget.style.display = 'none';
                }}
            />
        ) : null}
        <span className="text-2xl opacity-50 absolute">🐾</span>
      </div>

      <div className="text-center">
        <div className={`font-bold text-sm md:text-base leading-tight ${isResult ? 'text-sky-300' : 'text-slate-200'}`}>
          {pal.name}
        </div>
        {isLeaf && (
            <div className="text-[10px] uppercase tracking-wider text-slate-500 mt-1 font-bold">Base Pal</div>
        )}
      </div>
    </div>
  );
};

const TreeNode = ({ palKey, steps }: { palKey: string; steps: PathStep[] }) => {
  // Find the step that created this Pal
  const step = steps.find((s) => s.result.key === palKey);

  // If no step found, this is a base pal (leaf node)
  if (!step) {
    // We need the PalData. Since we only have the key, we need to find it from the steps context or imports.
    // However, the `steps` array contains PalData objects in parent1/parent2/result.
    // We can search the `steps` array for any mention of this key to get the object.
    // Or we can import `pals` but passed props are cleaner.
    // Optimization: find the object in steps.
    let palData: PalData | undefined;

    for (const s of steps) {
        if (s.result.key === palKey) palData = s.result;
        if (s.parent1?.key === palKey) palData = s.parent1;
        if (s.parent2?.key === palKey) palData = s.parent2;
        if (palData) break;
    }

    if (!palData) return null; // Should not happen

    return (
        <div className="flex flex-col items-center">
            <PalNodeCard pal={palData} isLeaf />
        </div>
    );
  }

  // If step found, render parents recursively
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-4 md:gap-8 mb-4 relative">
        {/* Connector Line Logic could go here, but simple flex gap works for now */}

        {step.parent1 && (
            <div className="flex flex-col items-center relative">
                <TreeNode palKey={step.parent1.key} steps={steps} />
                 {/* Connection lines would require absolute positioning or SVG overlay.
                     For MVP, we use simple layout. */}
            </div>
        )}

        {step.parent2 && (
            <div className="flex flex-col items-center relative">
                <TreeNode palKey={step.parent2.key} steps={steps} />
            </div>
        )}
      </div>

      {/* Downward Connector */}
      <div className="flex flex-col items-center -mt-4 mb-2 z-10">
         <div className="h-6 w-0.5 bg-slate-600"></div>
         <div className="bg-slate-700 rounded-full p-1 border border-slate-600 text-slate-400">
            <ArrowDown size={14} />
         </div>
         <div className="h-2 w-0.5 bg-slate-600"></div>
      </div>

      <PalNodeCard pal={step.result} isResult={true} />
    </div>
  );
};

export const BreedingTree = ({ steps, targetKey }: BreedingTreeProps) => {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="overflow-x-auto pb-8 pt-4">
      <div className="min-w-max flex justify-center p-4">
        <TreeNode palKey={targetKey} steps={steps} />
      </div>
    </div>
  );
};
