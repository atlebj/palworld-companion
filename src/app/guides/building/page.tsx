import Link from "next/link";

export default function BuildingGuides() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Build Guides & Architecture</h1>
      <p className="text-slate-400 mb-8">Master base building with optimized layouts and aesthetic designs.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/guides/building/ore-farm" className="block group">
          <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-sky-500 transition-colors">
            <div className="h-48 bg-slate-700 flex items-center justify-center text-slate-500">
               {/* Placeholder Image */}
               <span className="text-4xl">🏭</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
                Automated Ore Farm
              </h2>
              <p className="text-slate-400 mt-2 text-sm">
                Maximize your ore production with this efficient base layout using Digtoise and Anubis.
              </p>
            </div>
          </div>
        </Link>

        {/* Placeholder for more guides */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex items-center justify-center text-slate-600 border-dashed">
           <p>More guides coming soon...</p>
        </div>
      </div>
    </div>
  );
}
