import React from 'react';
import {
  Flame,
  Droplet,
  Sprout,
  Zap,
  Snowflake,
  Mountain, // Ground
  Moon, // Dark
  Ghost, // Dragon (Closest approximation in Lucide, or Sparkles/Skull)
  Circle, // Neutral
  Globe
} from 'lucide-react';

interface TypeBadgeProps {
  type: string;
}

const typeConfig: Record<string, { color: string; icon: React.ElementType }> = {
  Neutral: { color: 'bg-neutral-600', icon: Circle },
  Fire: { color: 'bg-red-600', icon: Flame },
  Water: { color: 'bg-blue-600', icon: Droplet },
  Grass: { color: 'bg-green-600', icon: Sprout },
  Electric: { color: 'bg-yellow-600', icon: Zap },
  Ice: { color: 'bg-cyan-600', icon: Snowflake },
  Ground: { color: 'bg-amber-700', icon: Mountain },
  Dark: { color: 'bg-purple-900', icon: Moon },
  Dragon: { color: 'bg-indigo-600', icon: Ghost },
};

export const TypeBadge: React.FC<TypeBadgeProps> = ({ type }) => {
  const config = typeConfig[type] || { color: 'bg-slate-600', icon: Globe };
  const Icon = config.icon;

  return (
    <span
      className={`${config.color} text-white text-xs uppercase font-bold px-2 py-0.5 rounded-full shadow-sm inline-flex items-center gap-1`}
    >
      <Icon size={12} strokeWidth={3} />
      {type}
    </span>
  );
};
