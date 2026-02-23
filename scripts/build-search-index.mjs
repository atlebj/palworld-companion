import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

async function getFiles(dir) {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = path.resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files).flat();
}

async function buildSearchIndex() {
  const contentDir = path.join(process.cwd(), 'content');
  const files = await getFiles(contentDir);
  const index = [];

  for (const file of files) {
    if (!file.endsWith('.mdx')) continue;

    const raw = await fs.readFile(file, 'utf8');
    const { data } = matter(raw);

    // Construct slug from file path relative to content dir
    const relPath = path.relative(contentDir, file);
    // Remove .mdx and normalize slashes
    let slug = relPath.replace(/\\/g, '/').replace(/\.mdx$/, '');

    // Handle index or root files if needed, though usually Next.js handles them.
    // For now, assume slug matches file path structure.
    slug = '/' + slug;

    index.push({
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
    });
  }

  const outPath = path.join(process.cwd(), 'public', 'search-index.json');
  await fs.writeFile(outPath, JSON.stringify(index, null, 2));
  console.log(`Generated search index with ${index.length} entries.`);
}

buildSearchIndex();
