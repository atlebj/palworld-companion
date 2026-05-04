import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paldeck — Every Palworld Pal",
  description:
    "Browse the complete Palworld Paldeck: stats, types, work suitabilities, drops, and breeding power for every Pal and variant.",
  alternates: { canonical: "/pals" },
  openGraph: {
    title: "Paldeck — Every Palworld Pal | Palworld Companion",
    description:
      "Search and filter every Palworld Pal by type, work role, and stats.",
    url: "/pals",
    type: "website",
  },
};

export default function PalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
