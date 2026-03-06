import {
  Rocket,
  FileText,
  Hammer,
  Swords,
  Zap,
  Crosshair,
  Calculator,
  Trophy,
  Droplet,
  Dna,
  UserCog,
  Map as MapIcon,
  CheckSquare,
  Search,
  LayoutTemplate,
  Package,
  Shield,
  ListOrdered,
  BookOpen
} from "lucide-react";
import React from "react";

export type NavLink = {
  href: string;
  label: string;
  icon?: React.ElementType;
  description?: string;
};

export type NavSection = {
  title: string;
  links: NavLink[];
};

export const sections: NavSection[] = [
  {
    title: "Start Here",
    links: [
      {
        href: "/getting-started",
        label: "Getting Started",
        icon: Rocket,
        description: "New to Palworld? Begin your journey here with essential tips."
      },
      {
        href: "/patch-notes",
        label: "Patch Notes & Meta",
        icon: FileText,
        description: "Stay up to date with the latest game updates and meta shifts."
      },
      {
        href: "/faq",
        label: "FAQ / Help",
        icon: CheckSquare,
        description: "Common questions and tool guides."
      },
    ],
  },
  {
    title: "Game Guides",
    links: [
      {
        href: "/guides/tier-list",
        label: "Tier List",
        icon: ListOrdered,
        description: "Top Pals for bases, combat, and travel."
      },
      {
        href: "/guides/building",
        label: "Build Guides & Architecture",
        icon: Hammer,
        description: "Learn how to construct efficient and beautiful bases."
      },
      {
        href: "/guides/raids",
        label: "Raid Strategy",
        icon: Swords,
        description: "Tactics to defend your base against powerful raids."
      },
      {
        href: "/guides/type-chart",
        label: "Type Chart",
        icon: Shield,
        description: "Strengths and weaknesses for every element."
      },
    ],
  },
  {
    title: "Mechanics",
    links: [
      {
        href: "/mechanics/work-speed",
        label: "Work Speed",
        icon: Zap,
        description: "Understanding how work speed affects production rates."
      },
      {
        href: "/mechanics/capture-chance",
        label: "Capture Chance",
        icon: Crosshair,
        description: "Maximize your odds of capturing high-level Pals."
      },
      {
        href: "/mechanics/damage-formula",
        label: "Damage Formula",
        icon: Calculator,
        description: "Deep dive into the math behind combat damage."
      },
      {
        href: "/mechanics/pvp-arena",
        label: "PvP Arena Meta",
        icon: Trophy,
        description: "Top strategies and Pal picks for player-vs-player combat."
      },
      {
        href: "/mechanics/oil-rig-stronghold",
        label: "Oil Rig Stronghold",
        icon: Droplet,
        description: "Guide to conquering the Oil Rig Stronghold."
      },
    ],
  },
  {
    title: "Breeding",
    links: [
      {
        href: "/breeding/trait-inheritance",
        label: "Trait Inheritance",
        icon: Dna,
        description: "How passive skills are passed down to offspring."
      },
      {
        href: "/breeding/passive-skills",
        label: "Passive Skills Info",
        icon: Search,
        description: "Complete list of passive skills and their effects."
      },
    ],
  },
  {
    title: "Bases",
    links: [
      {
        href: "/bases/worker-roles",
        label: "Worker Roles",
        icon: UserCog,
        description: "Optimize your base with the right Pals for the job."
      },
      {
        href: "/bases/pathing-ai",
        label: "Pathing & AI",
        icon: MapIcon, // Using MapIcon as a placeholder for pathing
        description: "Tips to prevent your Pals from getting stuck."
      },
    ],
  },
  {
    title: "Tools",
    links: [
      {
        href: "/pals",
        label: "Paldeck",
        icon: BookOpen,
        description: "Complete list of Pals with stats and drops."
      },
      {
        href: "/checklist",
        label: "Checklist",
        icon: CheckSquare,
        description: "Track your daily and weekly tasks."
      },
      {
        href: "/map",
        label: "Resource Map",
        icon: MapIcon,
        description: "Find ore, sulfur, and other valuable resources."
      },
      {
        href: "/items",
        label: "Item Database",
        icon: Package,
        description: "Search items and materials."
      },
      {
        href: "/calculators/damage",
        label: "Damage Calc",
        icon: Swords,
        description: "Calculate potential damage output."
      },
      {
        href: "/calculators/capture-chance",
        label: "Capture Calc",
        icon: Crosshair,
        description: "Estimate your capture success rate."
      },
      {
        href: "/calculators/work-speed",
        label: "Work Speed Calc",
        icon: Zap,
        description: "Calculate production times based on Pal stats."
      },
      {
        href: "/calculators/iv",
        label: "IV Calculator",
        icon: Calculator,
        description: "Determine your Pal's individual values."
      },
      {
        href: "/calculators/base-efficiency",
        label: "Base Efficiency",
        icon: LayoutTemplate,
        description: "Analyze your base's production efficiency."
      },
      {
        href: "/my-pals",
        label: "My Pal Box",
        icon: Package,
        description: "Manage your saved Pals for breeding."
      },
      {
        href: "/calculators/breeding",
        label: "Breeding Pathfinder",
        icon: Dna,
        description: "Find the shortest breeding path to your desired Pal."
      },
      {
        href: "/calculators/breeding-simulator",
        label: "Breeding Simulator",
        icon: Calculator,
        description: "Calculate outcomes and find parents."
      },
      {
        href: "/pals/passives",
        label: "Passives Search",
        icon: Search,
        description: "Search and filter passive skills."
      },
    ],
  },
];
