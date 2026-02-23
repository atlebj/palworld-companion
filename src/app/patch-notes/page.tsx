import Link from "next/link";

export default function PatchNotes() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Patch Notes & Meta Analysis</h1>
      <p className="text-slate-600 mb-8">Not just changes—understand how updates impact the gameplay meta.</p>

      <div className="space-y-6">
        <Link href="/patch-notes/v0.1.5-meta" className="block group">
            <div className="bg-slate-800 border-l-4 border-sky-500 p-6 rounded-r-xl shadow-lg hover:bg-slate-700 transition-colors">
                <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-bold text-sky-400 group-hover:text-sky-300 mb-2">
                        v0.1.5 Meta Shift: Fire Pals Nerfed?
                    </h2>
                    <span className="text-xs bg-slate-900 text-slate-400 px-2 py-1 rounded">Mar 20, 2024</span>
                </div>
                <p className="text-slate-300">
                    Detailed analysis on the burn damage reduction and why Jormuntide Ignis is still king (but weaker). Plus: Oil Rig Stronghold strategies.
                </p>
            </div>
        </Link>

        {/* Placeholder for previous patches */}
        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 text-slate-400 italic text-center">
            Older patch analyses archived.
        </div>
      </div>
    </div>
  );
}
