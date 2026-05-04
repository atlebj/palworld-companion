import type { Metadata } from 'next';
import { UserBox } from '../../components/UserBox';

export const metadata: Metadata = {
  title: "My Pal Box",
  description:
    "Track the Pals you've caught and use them as inputs for the breeding pathfinder, IV calculator, and team planner.",
  alternates: { canonical: "/my-pals" },
  robots: { index: false, follow: true },
};

export default function MyPalsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">My Pal Box</h1>
        <p className="text-slate-400">
          Manage your collection of Pals for breeding calculations and team planning.
        </p>
      </div>
      <UserBox />
    </div>
  );
}
