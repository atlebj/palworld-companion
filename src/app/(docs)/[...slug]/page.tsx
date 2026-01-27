import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

type RouteParams = { slug?: string[] };

async function getDoc(slugParts: string[]) {
  const relPath = slugParts.join("/") + ".mdx";
  const fullPath = path.join(process.cwd(), "content", relPath);

  console.log("MDX lookup:", { slugParts, relPath, fullPath });

  try {
    const raw = await fs.readFile(fullPath, "utf8");
    const { content, data } = matter(raw);

    return {
      content,
      frontmatter: {
        title: (data.title as string) ?? "Untitled",
        description: (data.description as string) ?? "",
        updated: (data.updated as string) ?? "",
      },
    };
  } catch {
    return null;
  }
}

export async function generateMetadata(
  { params }: { params: Promise<RouteParams> }
) {
  const { slug } = await params;
  const slugParts = slug ?? [];

  const doc = await getDoc(slugParts);
  if (!doc) return {};

  return {
    title: `${doc.frontmatter.title} | Palworld Companion`,
    description: doc.frontmatter.description,
  };
}

export default async function DocPage(
  { params }: { params: Promise<RouteParams> }
) {
  const { slug } = await params;
  const slugParts = slug ?? [];

  const doc = await getDoc(slugParts);
  if (!doc) return notFound();

  return (
    <article className="prose max-w-3xl">
      <h1>{doc.frontmatter.title}</h1>
      <MDXRemote source={doc.content} />
    </article>
  );
}
