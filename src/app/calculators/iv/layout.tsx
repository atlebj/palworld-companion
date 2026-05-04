import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stat Planner — IVs, Condensing, Passives",
  description:
    "See how Individual Values, condense rank, and passive skills change your Palworld Pal's stats. Compare loadouts side-by-side to decide what's worth grinding.",
  alternates: { canonical: "/calculators/iv" },
  openGraph: {
    title: "Stat Planner | Palworld Companion",
    description:
      "Compare Palworld Pal stat loadouts: IVs, condensing, and passives stacked side-by-side.",
    url: "/calculators/iv",
    type: "website",
  },
};

export default function IVLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
