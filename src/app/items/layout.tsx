import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Palworld Item Database",
  description:
    "Search Palworld items, materials, weapons, and consumables — sources, crafting requirements, and uses.",
  alternates: { canonical: "/items" },
  openGraph: {
    title: "Palworld Item Database | Palworld Companion",
    description: "Every item, material, and crafting recipe in one searchable list.",
    url: "/items",
    type: "website",
  },
};

export default function ItemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
