import DamageCalculator from "./DamageCalculator";

export const metadata = {
  title: "Damage Calculator | Palworld Companion",
  description: "Estimate damage output based on attack, defense, level, and type effectiveness.",
};

export default function DamageCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Damage Calculator</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Estimate damage output based on attack, defense, level, and type effectiveness.
        </p>
      </header>

      <DamageCalculator />

      <div className="mt-12 border-t pt-8">
        <h2 className="text-lg font-semibold mb-4">How it works</h2>
        <div className="prose dark:prose-invert">
          <p>
            Damage in Palworld is calculated using a standard formula that compares Attack vs Defense, then applies multipliers.
          </p>
          <ul>
            <li>
              <strong>Base Damage:</strong> Derived from (Attack * Power / Defense).
            </li>
            <li>
              <strong>Level Difference:</strong> Significant penalty if the attacker is lower level than the target.
            </li>
            <li>
              <strong>Type Effectiveness:</strong> 2x for effective, 0.5x or 0.25x for resisted.
            </li>
            <li>
              <strong>STAB:</strong> Same Type Attack Bonus adds ~20% damage.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
