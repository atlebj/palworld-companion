import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Breeding Simulator",
  description:
    "Calculate Palworld breeding outcomes from any two parents, or work backwards to find every parent pair that produces a target child.",
  alternates: { canonical: "/calculators/breeding-simulator" },
  openGraph: {
    title: "Breeding Simulator | Palworld Companion",
    description:
      "Simulate any Palworld breeding pair, or reverse-search to find parents for a target Pal.",
    url: "/calculators/breeding-simulator",
    type: "website",
  },
};

export default function BreedingSimulatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
