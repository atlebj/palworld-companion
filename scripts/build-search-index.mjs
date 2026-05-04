import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

async function getFiles(dir) {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((d) => {
      const res = path.resolve(dir, d.name);
      return d.isDirectory() ? getFiles(res) : res;
    })
  );
  return Array.prototype.concat(...files).flat();
}

async function indexMdx(contentDir) {
  const files = await getFiles(contentDir);
  const out = [];
  for (const file of files) {
    if (!file.endsWith('.mdx')) continue;
    const raw = await fs.readFile(file, 'utf8');
    const { data } = matter(raw);
    const rel = path.relative(contentDir, file).replace(/\\/g, '/');
    const slug = '/' + rel.replace(/\.mdx$/, '');
    out.push({
      type: 'doc',
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
    });
  }
  return out;
}

async function loadPalsData(palsTsPath) {
  const raw = await fs.readFile(palsTsPath, 'utf8');
  const startMarker = 'export const pals: PalData[] =';
  const startIdx = raw.indexOf(startMarker);
  if (startIdx === -1) throw new Error('Could not locate pals export');
  const equalsIdx = raw.indexOf('=', startIdx + startMarker.length - 1);
  const arrayStart = raw.indexOf('[', equalsIdx);
  const arrayEnd = raw.lastIndexOf('];');
  if (equalsIdx === -1 || arrayStart === -1 || arrayEnd === -1) {
    throw new Error('Malformed pals array');
  }
  const literal = raw.slice(arrayStart, arrayEnd + 1);
  return JSON.parse(literal);
}

function indexPals(palsArr) {
  return palsArr.map((pal) => {
    const types = Array.isArray(pal.types) ? pal.types : [];
    let works = [];
    if (pal.suitability) {
      works = Object.entries(pal.suitability)
        .filter((entry) => typeof entry[1] === 'number' && entry[1] > 0)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map((entry) => ({ name: entry[0].replace(/_/g, ' '), level: entry[1] }));
    }
    const typeLabel = types.length ? types.join('/') + ' type' : '';
    const workLabel = works.slice(0, 2).map((w) => w.name + ' ' + w.level).join(', ');
    const description = [typeLabel, workLabel].filter(Boolean).join(' • ');
    return {
      type: 'pal',
      slug: '/pals/' + pal.key,
      title: pal.name,
      description,
      types,
      works: works.map((w) => w.name),
    };
  });
}

const STATIC_ROUTES = [
  { type: 'tool',  slug: '/pals',                              title: 'Paldeck',                       description: 'Browse every Pal with stats, types, and work suitabilities.' },
  { type: 'tool',  slug: '/pals/passives',                     title: 'Passive Skills Search',         description: 'Search and filter every Palworld passive skill.' },
  { type: 'tool',  slug: '/items',                             title: 'Item Database',                 description: 'Search items, materials, and crafting requirements.' },
  { type: 'tool',  slug: '/map',                               title: 'Resource Map',                  description: 'Find ore, sulfur, dungeons, and tower locations.' },
  { type: 'tool',  slug: '/checklist',                         title: 'Daily & Weekly Checklist',      description: 'Track daily and weekly Palworld tasks.' },
  { type: 'tool',  slug: '/my-pals',                           title: 'My Pal Box',                    description: 'Save Pals to feed into the breeding pathfinder and other tools.' },
  { type: 'tool',  slug: '/calculators/damage',                title: 'Damage Calculator',             description: 'Estimate damage from attack, defense, level, and type matchups.' },
  { type: 'tool',  slug: '/calculators/capture-chance',        title: 'Capture Chance Calculator',     description: 'Calculate capture odds by sphere, HP, and level.' },
  { type: 'tool',  slug: '/calculators/work-speed',            title: 'Work Speed Calculator',         description: 'Estimate base production times from a Pal work stats.' },
  { type: 'tool',  slug: '/calculators/iv',                    title: 'Stat Planner (IVs, Condense, Passives)', description: 'Compare Pal stat loadouts: see how IVs, condense rank, and passive skills change projected stats.' },
  { type: 'tool',  slug: '/calculators/breeding',              title: 'Breeding Pathfinder',           description: 'Find the shortest breeding chain to a target Pal.' },
  { type: 'tool',  slug: '/calculators/breeding-simulator',    title: 'Breeding Simulator',            description: 'Simulate any breeding pair or reverse-search for parents.' },
  { type: 'tool',  slug: '/calculators/base-efficiency',       title: 'Workforce Composition Planner', description: 'Plan a base crew and see where its work suitability is concentrated.' },
  { type: 'guide', slug: '/guides/tier-list',                  title: 'Palworld Tier List',            description: 'S/A/B rankings for base, combat, and mount roles.' },
  { type: 'guide', slug: '/guides/building',                   title: 'Build Guides',                  description: 'Optimized base layouts that do not break pathing.' },
  { type: 'guide', slug: '/guides/raids',                      title: 'Raid Strategies',               description: 'Team comps and base defense for Bellanoir, Blazamut, and others.' },
  { type: 'guide', slug: '/guides/type-chart',                 title: 'Type Chart',                    description: 'Strengths and weaknesses for every element.' },
  { type: 'doc',   slug: '/faq',                               title: 'FAQ & Help',                    description: 'Common questions about the calculators and tools.' },
  { type: 'doc',   slug: '/patch-notes',                       title: 'Patch Notes & Meta',            description: 'How recent updates shift the meta.' },
];

async function buildSearchIndex() {
  const root = process.cwd();
  const contentDir = path.join(root, 'content');
  const palsTsPath = path.join(root, 'src', 'data', 'pals.ts');

  const docs = await indexMdx(contentDir);
  const palsArr = await loadPalsData(palsTsPath);
  const palEntries = indexPals(palsArr);
  const index = STATIC_ROUTES.concat(docs).concat(palEntries);

  const outPath = path.join(root, 'public', 'search-index.json');
  await fs.writeFile(outPath, JSON.stringify(index));

  const counts = {};
  for (const e of index) counts[e.type] = (counts[e.type] || 0) + 1;
  const summary = Object.keys(counts).map((k) => k + '=' + counts[k]).join(', ');
  console.log('Generated search index with ' + index.length + ' entries: ' + summary);
}

buildSearchIndex().catch((err) => {
  console.error('build-search-index failed:', err);
  process.exit(1);
});
