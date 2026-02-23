'use client';

import React, { useState, useEffect } from 'react';

type ChecklistItem = {
  id: string;
  label: string;
  resetTime: string; // e.g., "Daily", "Weekly", "1 Hour"
  checked: boolean;
};

const defaultItems: ChecklistItem[] = [
  { id: 'merchant_restock', label: 'Visit Wandering Merchants (Restock)', resetTime: 'Daily', checked: false },
  { id: 'black_marketeer', label: 'Visit Black Marketeer (New Pals)', resetTime: 'Daily', checked: false },
  { id: 'oil_rig', label: 'Oil Rig Stronghold Chests', resetTime: '30 Mins', checked: false },
  { id: 'meteor_shower', label: 'Check Meteor Shower Locations', resetTime: '3 Hours', checked: false },
  { id: 'dungeons', label: 'Clear High-Level Dungeons', resetTime: '1 Hour', checked: false },
  { id: 'skill_fruit', label: 'Harvest Skill Fruit Trees', resetTime: 'Respawn varies', checked: false },
  { id: 'raid_slabs', label: 'Farm Raid Boss Slabs (Libero/Blazamut)', resetTime: 'Always', checked: false },
];

export default function ChecklistPage() {
  const [items, setItems] = useState<ChecklistItem[]>(defaultItems);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('palworld-checklist');
      if (stored) {
        try {
          const savedState: Record<string, boolean> = JSON.parse(stored);
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setItems(defaultItems.map(item => ({
            ...item,
            checked: savedState[item.id] ?? false
          })));
        } catch (e) {
          console.error('Failed to parse checklist:', e);
        }
      }
      setIsLoaded(true);
    }
  }, []);

  const toggleItem = (id: string) => {
    const newItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(newItems);

    if (typeof window !== 'undefined') {
      const state = newItems.reduce((acc, item) => ({ ...acc, [item.id]: item.checked }), {});
      localStorage.setItem('palworld-checklist', JSON.stringify(state));
    }
  };

  const resetAll = () => {
    const newItems = items.map(item => ({ ...item, checked: false }));
    setItems(newItems);
    if (typeof window !== 'undefined') {
      localStorage.setItem('palworld-checklist', JSON.stringify({}));
    }
  };

  if (!isLoaded) return <div className="p-8 text-slate-400">Loading checklist...</div>;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Daily/Weekly Checklist</h1>
          <p className="text-slate-600">
            Keep track of limited-time activities and resets.
          </p>
        </div>
        <button
          onClick={resetAll}
          className="text-sm text-sky-500 hover:text-sky-600 font-medium"
        >
          Reset All
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={`
              flex items-center p-4 rounded-xl border cursor-pointer transition-all hover:scale-[1.01]
              ${item.checked
                ? 'bg-slate-900/40 border-slate-800 opacity-60'
                : 'bg-slate-800/60 border-slate-700 hover:border-sky-500/50 shadow-lg'}
            `}
          >
            <div className={`
              w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center transition-colors
              ${item.checked
                ? 'bg-sky-500 border-sky-500 text-white'
                : 'border-slate-500 group-hover:border-sky-400'}
            `}>
              {item.checked && (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>

            <div className="flex-1">
              <h3 className={`font-semibold ${item.checked ? 'text-slate-400 line-through' : 'text-slate-100'}`}>
                {item.label}
              </h3>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mt-0.5">
                Resets: {item.resetTime}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
