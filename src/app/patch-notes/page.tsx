import Link from "next/link";

export default function PatchNotes() {
  const patches = [
    {
      version: "v0.7.2",
      title: "Melee Weapon Rarity & Fixes",
      date: "Feb 15, 2025",
      description: "Added rarity variations for melee weapons (swords, katanas, beam swords). Addressed misalignment issues with Japanese-style buildings and fixed raid boss pathing bugs.",
      link: "/patch-notes/v0.7.2"
    },
    {
      version: "v0.7.0",
      title: "Home Sweet Home Update",
      date: "Dec 17, 2024",
      description: "Major update focusing on quality of life and existing features. Laying the groundwork for version 1.0. improved base building mechanics and optimization.",
      link: "/patch-notes/v0.7.0"
    },
    {
      version: "v0.6.9",
      title: "Critical Bug Fixes",
      date: "Oct 29, 2024",
      description: "Resolved freezing issues during Terraprism combat and fixed persistent map icons for supply crates.",
      link: "/patch-notes/v0.6.9"
    },
    {
      version: "v0.6.8",
      title: "Halloween Spooktacular",
      date: "Oct 23, 2024",
      description: "Added Zoe's Halloween costume and Depresso armor set. introduced 'Zoe's Sphere' mission to obtain Zoe & Grizzbolt.",
      link: "/patch-notes/v0.6.8"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Patch Notes & Meta Analysis</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8">Not just changes—understand how updates impact the gameplay meta.</p>

      <div className="space-y-6">
        {patches.map((patch) => (
          <Link href={patch.link} key={patch.version} className="block group">
            <div className="bg-slate-800 border-l-4 border-sky-500 p-6 rounded-r-xl shadow-lg hover:bg-slate-700 transition-colors">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold text-sky-400 group-hover:text-sky-300 mb-2">
                  {patch.version} Meta Shift: {patch.title}
                </h2>
                <span className="text-xs bg-slate-900 text-slate-300 px-2 py-1 rounded border border-slate-700">{patch.date}</span>
              </div>
              <p className="text-slate-300 mt-2">
                {patch.description}
              </p>
            </div>
          </Link>
        ))}

        {/* Archived Section */}
        <div className="mt-8">
            <button className="w-full bg-slate-700 hover:bg-slate-600 text-slate-200 font-medium py-4 px-6 rounded-xl border border-slate-600 transition-colors shadow-sm flex items-center justify-center">
                Older patch analyses archived
            </button>
            <p className="text-center text-slate-500 text-sm mt-2">
                Patches prior to October 2024 have been archived.
            </p>
        </div>
      </div>
    </div>
  );
}
