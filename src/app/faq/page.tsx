import type { Metadata } from "next";
import { HelpCircle, GitMerge, Database, Calculator, BookOpen, Map as MapIcon } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ & Help",
  description:
    "Common Palworld Companion questions: how the breeding pathfinder works, where game data comes from, calculator accuracy, the tier list, item database, map, and how to report issues.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | Palworld Companion",
    description:
      "Answers to the most common questions about the calculators and tools.",
    url: "/faq",
    type: "article",
  },
};

interface QA {
  q: string;
  a: React.ReactNode;
}

interface Section {
  title: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  items: QA[];
}

const sections: Section[] = [
  {
    title: "Breeding Pathfinder",
    icon: GitMerge,
    iconBg: "bg-sky-900/30",
    iconColor: "text-sky-400",
    items: [
      {
        q: 'Why does it say "No breeding necessary"?',
        a: 'This appears when the Target Pal is already in your Available Pals list (saved box or added temporarily). The tool assumes you want to acquire a new species, so if you already have it, no path is needed.',
      },
      {
        q: "How do I see the full family tree?",
        a: 'After finding a path, use the toggle buttons (List/Tree icon) near the top right of the result card. "Tree View" visualizes the entire lineage required to breed your target.',
      },
      {
        q: "What does the Export button do?",
        a: 'It copies a text summary of the breeding steps to your clipboard, formatted for sharing on Discord or Reddit.',
      },
      {
        q: "How accurate is the breeding data?",
        a: (
          <>
            The 9,453-pair lookup table is imported from{" "}
            <a href="https://github.com/mlg404/palworld-paldex-api" className="text-sky-400 hover:underline">
              mlg404/palworld-paldex-api
            </a>{" "}
            (MIT). For the listed pairs, results are exact. Variants and Sakurajima content
            fall back to the formula. See the{" "}
            <Link href="/breeding/trait-inheritance" className="text-sky-400 hover:underline">trait inheritance guide</Link>{" "}
            for the math.
          </>
        ),
      },
    ],
  },
  {
    title: "Calculators",
    icon: Calculator,
    iconBg: "bg-emerald-900/30",
    iconColor: "text-emerald-400",
    items: [
      {
        q: "How accurate is the Damage Calculator?",
        a: (
          <>
            It's an estimate, not a precise readout. Type matchups and base stats are exact, but
            crit chance, IVs, passive interactions, and damage variance all introduce error.
            See the{" "}
            <Link href="/mechanics/damage-formula" className="text-sky-400 hover:underline">damage formula explainer</Link>.
          </>
        ),
      },
      {
        q: "What's the Stat Planner for?",
        a: (
          <>
            The <Link href="/calculators/iv" className="text-sky-400 hover:underline">Stat Planner</Link> compares
            Pal stat loadouts forward — you tell it the IVs, condense rank, and passives,
            it shows you the projected stats. It does not reverse-engineer hidden IVs from
            visible stats (that data isn't exposed to players).
          </>
        ),
      },
      {
        q: "Why does the Base Efficiency tool show coverage, not hourly output?",
        a: 'In-game work speed depends on map position, terrain, pathing, and SAN — none of which the calculator can read. So it reports relative work-skill coverage across your crew (where you have gaps) rather than fake "X items/hour" numbers.',
      },
    ],
  },
  {
    title: "Items, Tier List & Tools",
    icon: BookOpen,
    iconBg: "bg-purple-900/30",
    iconColor: "text-purple-400",
    items: [
      {
        q: "How is the tier list calculated?",
        a: (
          <>
            The <Link href="/guides/tier-list" className="text-sky-400 hover:underline">tier list</Link> is
            data-derived. Each role uses a scoring expression over work suitability and base stats,
            then percentile-bucketed: S = top 5%, A = next 10%, B = next 25%, C = next 30%. Notes are
            editorial.
          </>
        ),
      },
      {
        q: "Why don't some items have descriptions?",
        a: (
          <>
            The <Link href="/items" className="text-sky-400 hover:underline">item database</Link> imports 676 items
            from the community paldex source, which doesn't carry descriptions for most entries.
            The 14 items we have hand-written descriptions for were curated before the bulk import.
            Submissions welcome.
          </>
        ),
      },
      {
        q: "Where does the data come from?",
        a: (
          <>
            Pal stats, breeding pairs, passives, and items: community-verified datamines from{" "}
            <a href="https://github.com/mlg404/palworld-paldex-api" className="text-sky-400 hover:underline">
              mlg404/palworld-paldex-api
            </a>{" "}
            (MIT). Map markers: {" "}
            <a href="https://github.com/fa0311/palworld-map" className="text-sky-400 hover:underline">
              fa0311/palworld-map
            </a>{" "}
            (MIT). Images are official game assets used under fair-use for community reference.
          </>
        ),
      },
    ],
  },
  {
    title: "Map, Patch Notes & General",
    icon: MapIcon,
    iconBg: "bg-amber-900/30",
    iconColor: "text-amber-400",
    items: [
      {
        q: "Why is the map labeled Beta?",
        a: (
          <>
            The <Link href="/map" className="text-sky-400 hover:underline">map</Link> uses 2,553
            markers across 7 categories. Marker accuracy is community-sourced; some locations
            (especially newer Sakurajima and Feybreak content) may be incomplete or slightly off.
            We're keeping the Beta tag until we've cross-validated against the latest patches.
          </>
        ),
      },
      {
        q: "How often are patch notes updated?",
        a: (
          <>
            We cover major content drops (Sakurajima, Feybreak, Tides of Terraria, etc.) with
            meta-shift analysis. See the{" "}
            <Link href="/patch-notes" className="text-sky-400 hover:underline">patch notes hub</Link>.
            For hotfixes and minor changes, the Steam news hub linked at the bottom of that page
            is more current.
          </>
        ),
      },
      {
        q: "How do I report a bug or wrong data?",
        a: 'Verify your game version matches the latest patch entry. If the issue persists, open an issue on the site repository. Specific feedback ("Anubis breeding power is X, you list Y, source: in-game screenshot") is far more useful than general reports.',
      },
      {
        q: "Is this site affiliated with Pocketpair?",
        a: "No. Palworld Companion is a community-built fan site. We use community-datamined values and official assets for reference under fair use.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-slate-100">Frequently Asked Questions</h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Answers to the most common questions about the calculators, data sources, and tools.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {sections.map((section) => (
          <div
            key={section.title}
            className="bg-slate-800 p-6 rounded-xl border border-slate-700 space-y-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`p-2 rounded-lg ${section.iconBg} ${section.iconColor}`}>
                <section.icon size={22} />
              </div>
              <h2 className="text-xl font-bold text-slate-200">{section.title}</h2>
            </div>

            <div className="space-y-3">
              {section.items.map((item, i) => (
                <details key={i} className="group">
                  <summary className="flex cursor-pointer items-start justify-between gap-2 font-medium text-slate-300 hover:text-sky-300 transition-colors">
                    <span>{item.q}</span>
                    <span className="transition-transform group-open:rotate-180 mt-1 shrink-0">▼</span>
                  </summary>
                  <div className="mt-2 text-slate-400 text-sm leading-relaxed pl-4 border-l-2 border-slate-700">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-8 bg-slate-900/50 rounded-2xl border border-slate-800 text-center">
        <h3 className="text-xl font-bold text-slate-200 mb-2">Still have questions?</h3>
        <p className="text-slate-400 mb-6">
          The guides cover more than the FAQ — start with the tier list or the progression
          guides for a deeper dive.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-lg transition-colors"
        >
          <HelpCircle size={20} /> Browse Guides
        </Link>
      </div>
    </div>
  );
}
