"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// ✅ Literal unions via const tuples (prevents "string not assignable" errors)
const STATUS_VALUES = ["none", "minor", "strong"] as const;
const SPHERE_VALUES = ["basic", "better", "advanced", "best"] as const;
const DIFFICULTY_VALUES = ["easy", "medium", "hard", "very-hard"] as const;

type Status = (typeof STATUS_VALUES)[number];
type Sphere = (typeof SPHERE_VALUES)[number];
type Difficulty = (typeof DIFFICULTY_VALUES)[number];

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function numFromParam(v: string | null, fallback: number) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

// ✅ Generic helper that returns the exact union type from the allowed tuple
function oneOf<const A extends readonly string[]>(
  v: string | null,
  allowed: A,
  fallback: A[number]
): A[number] {
  return v && (allowed as readonly string[]).includes(v) ? (v as A[number]) : fallback;
}

export default function CaptureChanceClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [hp, setHp] = useState<number>(30);
  const [status, setStatus] = useState<Status>("none");
  const [sphere, setSphere] = useState<Sphere>("better");
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");

  // Load once from URL
  useEffect(() => {
    setHp(clamp(numFromParam(searchParams.get("hp"), 30), 0, 100));
    setStatus(oneOf(searchParams.get("st"), STATUS_VALUES, "none"));
    setSphere(oneOf(searchParams.get("sp"), SPHERE_VALUES, "better"));
    setDifficulty(oneOf(searchParams.get("d"), DIFFICULTY_VALUES, "medium"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync URL (shareable link)
  useEffect(() => {
    const p = new URLSearchParams();
    p.set("hp", String(hp));
    p.set("st", status);
    p.set("sp", sphere);
    p.set("d", difficulty);
    router.replace(`${pathname}?${p.toString()}`);
  }, [hp, status, sphere, difficulty, router, pathname]);

  const result = useMemo(() => {
    let score = 0;

    // HP: lower is better
    score += hp <= 5 ? 45 : hp <= 15 ? 35 : hp <= 30 ? 25 : hp <= 50 ? 15 : 5;

    // Status
    score += status === "strong" ? 30 : status === "minor" ? 15 : 0;

    // Sphere
    score +=
      sphere === "best"
        ? 25
        : sphere === "advanced"
          ? 18
          : sphere === "better"
            ? 10
            : 5;

    // Difficulty penalty
    score -=
      difficulty === "medium"
        ? 10
        : difficulty === "hard"
          ? 20
          : difficulty === "very-hard"
            ? 30
            : 0;

    score = clamp(score, 0, 100);

    const verdict =
      score >= 70
        ? "Good attempt"
        : score >= 50
          ? "Decent, but improvable"
          : score >= 30
            ? "Low odds — improve setup"
            : "Very low — don’t waste spheres";

    return { score, verdict };
  }, [hp, status, sphere, difficulty]);

  return (
    <div className="max-w-3xl p-6">
      <Link href="/calculators" className="underline underline-offset-4 text-sm">
        ← Back to Calculators
      </Link>

      <h1 className="text-3xl font-bold mt-4 mb-2">Capture Chance Helper</h1>
      <p className="opacity-80 mb-6">
        A <strong>decision helper</strong>, not an exact probability calculator.
      </p>

      {/* Inputs */}
      <div className="grid gap-4 border rounded-2xl p-5 mb-8">
        <NumberField
          label="Target HP (%)"
          value={hp}
          min={0}
          max={100}
          onChange={(n) => setHp(clamp(n, 0, 100))}
        />

        <SelectField<Status>
          label="Status effect"
          value={status}
          onChange={setStatus}
          options={[
            ["none", "None"],
            ["minor", "Minor debuff"],
            ["strong", "Strong (sleep/freeze/stun)"],
          ]}
        />

        <SelectField<Sphere>
          label="Sphere tier"
          value={sphere}
          onChange={setSphere}
          options={[
            ["basic", "Basic"],
            ["better", "Better"],
            ["advanced", "Advanced"],
            ["best", "Best"],
          ]}
        />

        <SelectField<Difficulty>
          label="Target difficulty"
          value={difficulty}
          onChange={setDifficulty}
          options={[
            ["easy", "Easy"],
            ["medium", "Medium"],
            ["hard", "Hard"],
            ["very-hard", "Very hard"],
          ]}
        />
      </div>

      {/* Results */}
      <div className="border rounded-2xl p-5 grid gap-3">
        <h2 className="font-semibold">Result</h2>
        <div className="text-3xl font-bold">{result.score}/100</div>
        <div className="text-lg">{result.verdict}</div>

        <button
          className="border rounded-lg px-3 py-2 text-sm w-fit"
          onClick={async () => {
            await navigator.clipboard.writeText(window.location.href);
          }}
        >
          Copy shareable link
        </button>

        <p className="text-sm opacity-80">
          Full explanation:{" "}
          <Link href="/mechanics/capture-chance" className="underline underline-offset-4">
            Capture Chance explained
          </Link>
        </p>
      </div>
    </div>
  );
}

function NumberField({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="grid gap-1">
      <span className="font-semibold text-sm">{label}</span>
      <input
        type="number"
        className="border rounded-lg p-2"
        value={value}
        min={min}
        max={max}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </label>
  );
}

function SelectField<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: Array<[T, string]>;
}) {
  return (
    <label className="grid gap-1">
      <span className="font-semibold text-sm">{label}</span>
      <select
        className="border rounded-lg p-2"
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
      >
        {options.map(([v, l]) => (
          <option key={v} value={v}>
            {l}
          </option>
        ))}
      </select>
    </label>
  );
}
