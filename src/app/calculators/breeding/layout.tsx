import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Breeding Pathfinder",
  description:
    "Find the shortest breeding chain from the Pals you already own to your target Pal in Palworld — visualized as a tree or step list.",
  alternates: { canonical: "/calculators/breeding" },
  openGraph: {
    title: "Breeding Pathfinder | Palworld Companion",
    description:
      "Reach any Pal in fewer steps — the breeding pathfinder works from your roster.",
    url: "/calculators/breeding",
    type: "website",
  },
};

export default function BreedingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
