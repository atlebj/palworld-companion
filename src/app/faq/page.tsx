import type { Metadata } from "next";
import { HelpCircle, GitMerge, Database } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ & Help",
  description:
    "Common Palworld Companion questions: how the breeding pathfinder works, where game data comes from, calculator accuracy, and how to report issues.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | Palworld Companion",
    description:
      "Answers to the most common questions about the calculators and tools.",
    url: "/faq",
    type: "article",
  },
};

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">Frequently Asked Questions</h1>
        <p className="text-slate-600 text-lg">
          Learn how to get the most out of Palworld Companion tools.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Breeding Pathfinder */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-sky-900/30 rounded-lg text-sky-400">
              <GitMerge size={24} />
            </div>
            <h2 className="text-xl font-bold text-slate-200">Breeding Pathfinder</h2>
          </div>

          <div className="space-y-4">
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between font-medium text-slate-300 hover:text-sky-300 transition-colors">
                <span>Why does it say &quot;No breeding necessary&quot;?</span>
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-2 text-slate-400 text-sm leading-relaxed pl-4 border-l-2 border-slate-700">
                This message appears when the &quot;Target Pal&quot; you selected is already in your &quot;Available Pals&quot; list (either in your saved box or added as a temporary Pal). The tool assumes you want to acquire a new species, so if you already have it, no path is needed.
              </div>
            </details>

            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between font-medium text-slate-300 hover:text-sky-300 transition-colors">
                <span>How do I see the full family tree?</span>
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-2 text-slate-400 text-sm leading-relaxed pl-4 border-l-2 border-slate-700">
                After finding a path, look for the toggle buttons (List/Tree icon) near the top right of the result card. Switching to &quot;Tree View&quot; visualizes the entire lineage required to breed your target.
              </div>
            </details>

            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between font-medium text-slate-300 hover:text-sky-300 transition-colors">
                <span>What does the Export button do?</span>
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-2 text-slate-400 text-sm leading-relaxed pl-4 border-l-2 border-slate-700">
                The &quot;Export&quot; button copies a text summary of the breeding steps to your clipboard. This format is optimized for sharing on Discord or Reddit.
              </div>
            </details>
          </div>
        </div>

        {/* General & Data */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-purple-900/30 rounded-lg text-purple-400">
              <Database size={24} />
            </div>
            <h2 className="text-xl font-bold text-slate-200">General & Data</h2>
          </div>

          <div className="space-y-4">
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between font-medium text-slate-300 hover:text-sky-300 transition-colors">
                <span>Where does the data come from?</span>
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-2 text-slate-400 text-sm leading-relaxed pl-4 border-l-2 border-slate-700">
                We use community-verified datamined values for breeding power and stats. Images are based on official assets or placeholders if not available.
              </div>
            </details>

            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between font-medium text-slate-300 hover:text-sky-300 transition-colors">
                <span>How do I report a bug?</span>
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <div className="mt-2 text-slate-400 text-sm leading-relaxed pl-4 border-l-2 border-slate-700">
                If you find incorrect calculations or broken features, please verify your game version matches our patch notes. You can report issues via our repository.
              </div>
            </details>
          </div>
        </div>
      </div>

      <div className="mt-12 p-8 bg-slate-900/50 rounded-2xl border border-slate-800 text-center">
        <h3 className="text-xl font-bold text-slate-200 mb-2">Still have questions?</h3>
        <p className="text-slate-400 mb-6">
          Check out our detailed guides for in-depth strategies.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-lg transition-colors">
          <HelpCircle size={20} /> Browse Guides
        </Link>
      </div>
    </div>
  );
}
