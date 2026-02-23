import { UserBox } from '../../components/UserBox';

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
