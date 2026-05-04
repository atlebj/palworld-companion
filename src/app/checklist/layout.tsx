import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily & Weekly Checklist",
  description:
    "Track Palworld daily and weekly tasks — egg incubation, raid resets, oil rig runs, and breeding goals.",
  alternates: { canonical: "/checklist" },
  robots: { index: true, follow: true },
};

export default function ChecklistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
