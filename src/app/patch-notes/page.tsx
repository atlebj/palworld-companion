import { ArrowUpRight } from "lucide-react";

export default function PatchNotes() {
  const patches = [
    {
      version: "v0.3.1",
      title: "Sakurajima Update (Major Content)",
      date: "Jun 27, 2024",
      description: "New island, new Pals, increased level cap to 55, Oil Rig Stronghold, and dedicated servers for Xbox.",
      link: "https://store.steampowered.com/news/app/1623730/view/4177730135016130026"
    },
    {
      version: "v0.2.0.6",
      title: "Raid Boss Update: Bellanoir",
      date: "Apr 4, 2024",
      description: "Introduction of the first Raid Boss, new items, and significant base management improvements.",
      link: "https://store.steampowered.com/news/app/1623730/view/4177723865220790754"
    },
    {
      version: "v0.1.5.0",
      title: "Major Bug Fixes & QoL",
      date: "Feb 27, 2024",
      description: "Addressed critical save issues, improved Pal AI pathing, and added key configuration options.",
      link: "https://store.steampowered.com/news/app/1623730/view/4177717468603681428"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-slate-100">Patch Notes & Meta Analysis</h1>
      <p className="text-slate-400 mb-8">Not just changes—understand how updates impact the gameplay meta. Official patch notes linked below.</p>

      <div className="space-y-6">
        {patches.map((patch) => (
          <a
            href={patch.link}
            key={patch.version}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="bg-slate-800 border-l-4 border-sky-500 p-6 rounded-r-xl shadow-lg hover:bg-slate-700 transition-colors">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold text-sky-400 group-hover:text-sky-300 mb-2">
                    {patch.version}: {patch.title}
                    </h2>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-sky-300 transition-colors" />
                </div>
                <span className="text-xs bg-slate-900 text-slate-300 px-2 py-1 rounded border border-slate-700 whitespace-nowrap">{patch.date}</span>
              </div>
              <p className="text-slate-300 mt-2">
                {patch.description}
              </p>
            </div>
          </a>
        ))}

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
