import re

with open('src/app/pals/page.tsx', 'r') as f:
    content = f.read()

# Add SelectField import
content = content.replace("import { TypeBadge } from '../../components/ui/TypeBadge';", "import { TypeBadge } from '../../components/ui/TypeBadge';\nimport SelectField from '../../components/ui/SelectField';")

# Add options generator
options_code = """
// Collect all unique types and suitabilities for dropdowns
const allTypes = Array.from(new Set(pals.flatMap(p => p.types))).sort();
const allSuitabilities = Array.from(new Set(pals.flatMap(p => Object.keys(p.suitability)))).sort();

function PaldeckContent() {
"""
content = content.replace("function PaldeckContent() {", options_code)

# Update state and filter logic
old_state_logic = """  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');
  const [search, setSearch] = useState(initialSearch);

  const filteredPals = pals.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.types.some(t => t.toLowerCase().includes(search.toLowerCase()))
  );"""

new_state_logic = """  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');
  const [search, setSearch] = useState(initialSearch);
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedWork, setSelectedWork] = useState<string>('');

  const filteredPals = pals.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.types.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchesType = selectedType === '' || p.types.includes(selectedType);
    const matchesWork = selectedWork === '' || Object.keys(p.suitability).includes(selectedWork);
    return matchesSearch && matchesType && matchesWork;
  });"""

content = content.replace(old_state_logic, new_state_logic)

# Update header area
old_header = """      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-100">Paldeck</h1>
          <p className="text-slate-400">Database of all known Pals and their stats.</p>
        </div>

        <div className="flex items-center gap-4 bg-slate-900/50 p-2 rounded-xl border border-slate-800">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                    type="text"
                    placeholder="Filter Pals..."
                    className="pl-9 pr-4 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 w-40 md:w-64"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
            <div className="h-6 w-px bg-slate-700"></div>"""

new_header = """      <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-100">Paldeck</h1>
          <p className="text-slate-400">Database of all known Pals and their stats.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 bg-slate-900/50 p-2 rounded-xl border border-slate-800">
            <div className="relative flex-1 md:flex-none">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                    type="text"
                    placeholder="Filter Pals..."
                    className="pl-9 pr-4 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 w-full md:w-64"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>

            <div className="w-32">
              <SelectField
                label=""
                value={selectedType}
                onChange={e => setSelectedType(e.target.value)}
                options={[{ value: '', label: 'All Types' }, ...allTypes.map(t => ({ value: t, label: t }))]}
              />
            </div>

            <div className="w-40">
              <SelectField
                label=""
                value={selectedWork}
                onChange={e => setSelectedWork(e.target.value)}
                options={[{ value: '', label: 'All Work' }, ...allSuitabilities.map(w => ({ value: w, label: w.replace('_', ' ') }))]}
              />
            </div>

            <div className="h-6 w-px bg-slate-700 hidden md:block"></div>"""

content = content.replace(old_header, new_header)

# Add badges
old_badges = """                        <StatBar label="DEF" value={pal.stats.defense} color="bg-blue-500" />
                    </div>
                </div>
            </Link>"""

new_badges = """                        <StatBar label="DEF" value={pal.stats.defense} color="bg-blue-500" />
                    </div>

                    {Object.keys(pal.suitability).length > 0 && (
                      <div className="pt-3 mt-3 border-t border-slate-800">
                        <div className="flex flex-wrap gap-1">
                          {Object.entries(pal.suitability).map(([work, level]) => (
                            <span
                              key={work}
                              className="px-2 py-0.5 bg-slate-800 rounded text-xs text-slate-300 border border-slate-700"
                              title={work.replace('_', ' ')}
                            >
                              {work.substring(0, 3).toUpperCase()} {level as number}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
            </Link>"""

content = content.replace(old_badges, new_badges)

with open('src/app/pals/page.tsx', 'w') as f:
    f.write(content)
