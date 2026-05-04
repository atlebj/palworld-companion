import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Patch Notes & Meta Analysis",
  description:
    "Track Palworld game updates and how they shift the meta — buffs, nerfs, new Pals, and balance changes.",
  alternates: { canonical: "/patch-notes" },
  openGraph: {
    title: "Patch Notes & Meta Analysis | Palworld Companion",
    description:
      "How the latest Palworld updates shift the competitive and base-building meta.",
    url: "/patch-notes",
    type: "article",
  },
};

export default function PatchNotes() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-slate-100">Patch Notes & Meta Analysis</h1>
      <p className="text-slate-400 mb-8">Not just changes—understand how updates impact the gameplay meta. Official patch notes linked below.</p>

      <div className="space-y-6">

        {/* External Link to All Patches */}
        <div className="mt-8">
            <a
                href="https://store.steampowered.com/news/app/1623730"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-700 hover:bg-slate-600 text-slate-200 font-medium py-4 px-6 rounded-xl border border-slate-600 transition-colors shadow-sm flex items-center justify-center gap-2"
            >
                View All Recent Patches on Steam <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-center text-slate-500 text-sm mt-2">
                For the absolute latest hotfixes and minor updates, check the official Steam news hub.
            </p>
        </div>
      </div>
    </div>
  );
}
