import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IV Calculator",
  description:
    "Estimate your Palworld Pal's hidden Individual Values (IVs) from observed HP, Attack, and Defense at a given level — accounting for active passives.",
  alternates: { canonical: "/calculators/iv" },
  openGraph: {
    title: "IV Calculator | Palworld Companion",
    description:
      "Reverse-engineer your Pal's hidden IVs from current stats.",
    url: "/calculators/iv",
    type: "website",
  },
};

export default function IVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
