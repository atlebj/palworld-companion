import type { Metadata } from "next";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import Link from "next/link";
import { ArrowUpRight, Calendar, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Patch Notes & Meta Analysis",
  description:
    "Every Palworld update from v0.1.5 through Tides of Terraria and beyond — with meta-shift analysis explaining how each patch changes the game.",
  alternates: { canonical: "/patch-notes" },
  openGraph: {
    title: "Patch Notes & Meta Analysis | Palworld Companion",
    description:
      "Track Palworld updates and how each one changes the gameplay meta.",
    url: "/patch-notes",
    type: "article",
  },
};

interface PatchEntry {
  slug: string;
  title: string;
  description: string;
  updated: string;
}

async function loadPatchEntries(): Promise<PatchEntry[]> {
  const dir = path.join(process.cwd(), "content", "patch-notes");
  let files: string[] = [];
  try {
    files = await fs.readdir(dir);
  } catch {
    return [];
  }

  const entries = await Promise.all(
    files
      .filter((f) => f.endsWith(".mdx"))
      .map(async (f): Promise<PatchEntry> => {
        const raw = await fs.readFile(path.join(dir, f), "utf8");
        const { data } = matter(raw);
        return {
          slug: "/patch-notes/" + f.replace(/\.mdx$/, ""),
          title: (data.title as string) ?? f.replace(/\.mdx$/, ""),
          description: (data.description as string) ?? "",
          updated: (data.updated as string) ?? "1970-01-01",
        };
      })
  );

  // Sort newest first.
  entries.sort((a, b) => (a.updated < b.updated ? 1 : -1));
  return entries;
}

function formatDate(s: string): string {
  const d = new Date(s);
  if (Number.isNaN(d.getTime())) return s;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PatchNotesPage() {
  const entries = await loadPatchEntries();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-10">
      <div>
        <h1 className="text-4xl font-extrabold text-slate-100 mb-3">
          Patch Notes & Meta Analysis
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          Not just a changelog — each entry explains how the patch shifts the meta,
          what to do differently, and which calculators or guides you need to revisit.
        </p>
      </div>

      <div className="space-y-4">
        {entries.map((entry) => (
          <Link
            key={entry.slug}
            href={entry.slug}
            className="group block p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-sky-500/50 hover:bg-slate-800 transition-colors"
          >
            <div className="flex items-start gap-4">
              <FileText className="w-7 h-7 shrink-0 text-sky-400 mt-1" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center flex-wrap gap-x-3 gap-y-1 mb-2">
                  <h2 className="text-xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
                    {entry.title}
                  </h2>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-mono">
                    <Calendar className="w-3 h-3" /> {formatDate(entry.updated)}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{entry.description}</p>
              </div>
            </div>
          </Link>
        ))}

        {entries.length === 0 ? (
          <div className="text-slate-500 text-sm py-6 text-center">
            No patch notes yet. Add MDX files to <code>content/patch-notes/</code>.
          </div>
        ) : null}
      </div>

      <div className="pt-6 border-t border-slate-800">
        <a
          href="https://store.steampowered.com/news/app/1623730"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium py-4 px-6 rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-2"
        >
          For minor hotfixes, see official Steam patch notes
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
