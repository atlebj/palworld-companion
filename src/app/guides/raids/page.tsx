import Link from "next/link";
import { Sword, Skull } from "lucide-react";

export default function RaidGuides() {
  const raids = [
    {
      title: "Bellanoir Libero",
      href: "/guides/raids/libero",
      level: 50,
      element: "Dark",
      elementColor: "bg-purple-900/50 text-purple-200 border-purple-800",
      desc: "Master the ultra-difficult dark element raid boss. Recommended for max-level players."
    },
    {
      title: "Bellanoir Libero Ultra",
      href: "/guides/raids/bellanoir-libero-ultra",
      level: 50,
      element: "Dark / Ice",
      elementColor: "bg-indigo-900/50 text-indigo-200 border-indigo-800",
      desc: "The ultimate challenge. 900k HP, phase changes, and essential end-game loot.",
      isNew: true
    },
    {
      title: "Blazamut Ryu",
      href: "/guides/raids/blazamut-ryu",
      level: 55,
      element: "Fire / Dragon",
      elementColor: "bg-orange-900/50 text-orange-200 border-orange-800",
      desc: "The Eternal Flame. Prepare for a brutal two-phase fight against Fire and Electric types.",
      isNew: true
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-[var(--color-brand-text-primary)]">Raid Strategy Guides</h1>
        <p className="text-[var(--color-brand-text-secondary)] text-lg">
          Detailed walkthroughs, drop tables, and counter-strategies for high-level raid bosses.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {raids.map((raid) => (
          <Link
            key={raid.href}
            href={raid.href}
            className="group block p-6 rounded-xl card hover:border-[var(--color-brand-primary)]/50 hover:shadow-[0_0_20px_rgba(91,124,255,0.1)] transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Skull size={120} />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-bold text-[var(--color-brand-text-primary)] group-hover:text-[var(--color-brand-primary)] transition-colors flex items-center gap-2">
                  <Sword size={20} className="text-[var(--color-brand-primary)]" />
                  {raid.title}
                </h2>
                {raid.isNew && (
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[var(--color-brand-primary)] text-white px-2 py-0.5 rounded-full shadow-lg shadow-indigo-500/20">
                    New
                  </span>
                )}
              </div>

              <p className="text-[var(--color-brand-text-secondary)] text-sm mb-6 leading-relaxed">
                {raid.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-mono font-bold bg-[var(--color-brand-bg-main)] text-[var(--color-brand-text-muted)] px-2 py-1 rounded border border-[var(--color-brand-border)]">
                  Lv. {raid.level}
                </span>
                <span className={`text-xs font-bold px-2 py-1 rounded border ${raid.elementColor}`}>
                  {raid.element}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
