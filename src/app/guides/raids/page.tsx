import Link from "next/link";

export default function RaidGuides() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Raid Strategy Guides</h1>
      <p className="text-slate-400 mb-8">Detailed walkthroughs for high-level raid bosses and dungeons.</p>

      <div className="space-y-4">
        <Link href="/guides/raids/libero" className="block p-6 rounded-xl bg-slate-800 border border-slate-700 hover:border-red-500 hover:shadow-red-500/10 transition-all group">
            <h2 className="text-xl font-bold text-red-400 group-hover:text-red-300">Bellanoir Libero</h2>
            <p className="text-slate-400 mt-2 text-sm">
                Master the ultra-difficult dark element raid boss. Recommended level 50.
            </p>
            <div className="mt-4 flex gap-2">
                <span className="text-xs bg-red-900/50 text-red-200 px-2 py-1 rounded border border-red-800">Lv. 50</span>
                <span className="text-xs bg-slate-900 text-slate-300 px-2 py-1 rounded border border-slate-700">Dark Element</span>
            </div>
        </Link>

        <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 border-dashed text-slate-500">
           More raids (Blazamut Ryu) coming soon...
        </div>
      </div>
    </div>
  );
}
