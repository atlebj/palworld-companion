import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, Sprout, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Palworld Progression Guides",
  description:
    "Level-by-level playbook for Palworld — early-game survival (Lv 1-15) and endgame checklist (Lv 50).",
  alternates: { canonical: "/guides/progression" },
  openGraph: {
    title: "Palworld Progression Guides | Palworld Companion",
    description:
      "Where to focus at each level. Early-game survival tips through endgame raid checklists.",
    url: "/guides/progression",
    type: "article",
  },
};

const guides = [
  {
    title: "Early Game Survival (Lv 1-15)",
    href: "/guides/progression/early-game",
    desc: "First hours playbook. Where to land, what to capture, when to fight the first tower boss.",
    icon: Sprout,
    accent: "text-emerald-400",
  },
  {
    title: "Endgame Checklist (Lv 50)",
    href: "/guides/progression/endgame-checklist",
    desc: "Max level punch list. Condense your roster, grind passives, gear up, and clear raids in order.",
    icon: Trophy,
    accent: "text-amber-400",
  },
];

export default function ProgressionGuides() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3 text-slate-100 flex items-center gap-3">
          <TrendingUp className="text-sky-400" /> Progression Guides
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          Level-by-level playbook. Knowing what to prioritize at each stage cuts hours of trial and error.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {guides.map(({ title, href, desc, icon: Icon, accent }) => (
          <Link
            key={href}
            href={href}
            className="group block p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-sky-500/50 hover:bg-slate-800 transition-colors"
          >
            <div className="flex items-start gap-4">
              <Icon className={`w-8 h-8 shrink-0 ${accent}`} />
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
                  {title}
                </h2>
                <p className="text-slate-400 mt-2 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
