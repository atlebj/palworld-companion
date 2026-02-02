import Link from "next/link";

export default function CalculatorsPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-4">Calculators</h1>

      <p className="mb-6 opacity-80">
        Practical tools to compare setups. These calculators estimate relative efficiency,
        not exact hidden formulas.
      </p>

      <ul className="space-y-3 list-disc list-inside">
        <li>
          <Link
            className="underline underline-offset-4"
            href="/calculators/work-speed"
          >
            Work Speed / Base Throughput Estimator
          </Link>
        </li>
        <li className="opacity-60">Capture Chance Helper (next)</li>
        <li className="opacity-60">Breeding Planner (later)</li>
      </ul>
    </div>
  );
}
