'use client';

import { useState, useEffect } from 'react';

export interface SavedPal {
  id: string; // Unique ID for this instance (e.g., uuid)
  palKey: string;
  nickname?: string;
  level: number;
  passives: string[]; // Names of passives
  gender: 'Male' | 'Female';
  ivs?: { hp: number; attack: number; defense: number };
}

export function useUserPals() {
  const [pals, setPals] = useState<SavedPal[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('palworld-companion-box');
      if (stored) {
        try {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setPals(JSON.parse(stored));
        } catch (e) {
          console.error('Failed to parse saved pals:', e);
        }
      }
      setIsLoaded(true);
    }
  }, []);

  const saveToStorage = (newPals: SavedPal[]) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('palworld-companion-box', JSON.stringify(newPals));
    }
  };

  const addPal = (pal: SavedPal) => {
    const newPals = [...pals, pal];
    setPals(newPals);
    saveToStorage(newPals);
  };

  const updatePal = (id: string, updates: Partial<SavedPal>) => {
    const newPals = pals.map(p => p.id === id ? { ...p, ...updates } : p);
    setPals(newPals);
    saveToStorage(newPals);
  };

  const removePal = (id: string) => {
    const newPals = pals.filter(p => p.id !== id);
    setPals(newPals);
    saveToStorage(newPals);
  };

  return { pals, addPal, updatePal, removePal, isLoaded };
}
