"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Status = "none" | "minor" | "strong";
type Sphere = "basic" | "better" | "advanced" | "best";
type Difficulty = "easy" | "medium" | "hard" | "very-hard";

const STATUS_OPTIONS = ["none", "minor", "strong"] as const;
const SPHERE_OPTIONS = ["basic", "better", "advanced", "best"] as const;
const DIFFICULTY_OPTIONS = ["easy", "medium", "hard", "very-hard"] as const;

type SelectOption<T extends string> = readonly [T, string];

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function numFromParam(v: string | null, fallback: number) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

function oneOf<T extends string>(v: string | null, allowed: readonly T[], fallback: T): T {
  if (v && (allowed as readonly string[]).includes(v)) return v as T;
  return fallback;
}

function statusLabel(s: Status) {
  switch (s) {
    case "none":
      return "None";
    case "minor":
      return "Minor debuff";
    case "strong":
      return "Strong (sleep/freeze/stun)";
  }
}

function sphereLabel(s: Sphere) {
  switch (s) {
    case "basic":
      return "Basic";
    case "better":
      return "Better";
    case "advanced":
      return "Advanced";
    case "best":
      return "Best";
  }
}

function difficultyLabel(d: Difficulty) {
  switch (d) {
    case "easy":
      return "Easy";
    case "medium":
      return "Medium";
    case "hard":
      return "Hard";
    case "very-hard":
      return "Very hard";
  }
}

export default function CaptureChanceHelper() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [hp, setHp] = useState<number>(30);
  const [status, setStatus] = useState<Status>("none");
  const [sphere, setSphere] = useState<Sphere>("better");
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");

  // Load from URL once
  useEffect(() => {
    const hpFromUrl = clamp(numFromParam(searchParams.get("hp"), 30), 1, 100);
    setHp(hpFromUrl);

    setStatus(oneOf(searchParams.get("st"), STATUS_OPTIONS, "none"));
    setSphere(oneOf(searchParams.get("sp"), SPHERE_OPTIONS, "better"));
    setDifficulty(oneOf(searchParams.get("d"), DIFFICULTY_OPTIONS, "medium"));

    // Intentionally run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync URL whenever inputs change
  useEffect(() => {
    const p = new URLSearchParams();
    p.set("hp", String(clamp(hp, 1, 100)));
    p.set("st", status);
    p.set("sp", sphere);
    p.set("d", difficulty);
    router.replace(`${pathname}?${p.toString()}`);
  }, [hp, status, sphere, difficulty, router, pathname]);

  const result = useMemo(() => {
    const hpClamped = clamp(hp, 1, 100);
    let score = 0;

    // HP contributes heavily
    score += hpClamped <= 5 ? 45 : hpClamped <= 15 ? 35 : hpClamped <= 30 ? 25 : hpClamped <= 50 ? 15 : 5;

    // Status boosts attempt quality
    score += status === "strong" ? 30 : status === "minor" ? 15 : 0;

    // Sphere tier boost
    score += sphere === "best" ? 25 : sphere === "advanced" ? 18 : sphere === "better" ? 10 : 5;

    // Difficulty reduces effective score
    score -= difficulty === "medium" ? 10 : difficulty === "hard" ? 20 : difficulty === "very-hard" ? 30 : 0;

    score = clamp(score, 0, 100);

    const verdict =
      score >= 70
        ? "Good attempt"
        : score >= 50
          ? "Decent, but improvable"
          : score >= 30
            ? "Low odds — improve setup"
            : "Very low — don’t waste spheres";

    const suggestions: string[] = [];
    if (hpClamped > 30) suggestions.push("Lower HP further before throwing.");
    if (status === "none") suggestions.push("Apply a strong status effect if possible.");
    if (difficulty === "very-hard" && status !== "strong") {
      suggestions.push("Very hard targets usually need strong status + very low HP.");
    }
    if (sphere === "basic" && (difficulty === "hard" || difficulty === "very-hard")) {
      suggestions.push("Use a better sphere tier for hard targets.");
    }
    if (suggestions.length === 0) suggestions.push("Your setup looks good — throw now.");

    return { score, verdict, suggestions };
  }, [hp, status, sphere, difficulty]);

  const shareUrl = useMemo(() => {
    // window is only available client-side; this component is client, so OK.
    return typeof window !== "undefined" ? window.location.href : "";
  }, [hp, status, sphere, difficulty]);

  const statusOptions: SelectOption<Status>[] = STATUS_OPTIONS.map((s) => [s, statusLabel(s)]);
  const sphereOptions: SelectOption<Sphere>[] = SPHERE_OPTIONS.map((s) => [s, sphereLabel(s)]);
  const difficultyOptions: SelectOption<Difficulty>[] = DIFFICULTY_OPTIONS.map((d) => [d, difficultyLabel(d)]);

  return (
    <div className="max-w-3xl">
      <Link href="/calculators" className="underline underline-offset-4 text-sm">
        ← Back to Calculators
      </Link>

      <h1 className="text-3xl font-bold mt-4 mb-2">Capture Chance Helper</h1>
      <p className="opacity-80 mb-6">
        A <strong>decision helper</strong>, not an exact probability calculator. It scores your attempt quality and tells you what to improve.
      </p>

      {/* Inputs */}
      <div className="grid gap-4 border rounded-2xl p-5 mb-8">
        <NumberInput
          label="Target HP (%)"
          value={hp}
          min={1}
          max={100}
          onChange={(v) => setHp(clamp(v, 1, 100))}
          hint="Lower HP usually matters more than people think. Try 5–15% for hard targets."
        />

        <SelectInput<Status>
          label="Status effect"
          value={status}
          options={statusOptions}
          onChange={setStatus}
          hint="Strong statuses (sleep/freeze/stun-like) are usually the biggest boost."
        />

        <SelectInput<Sphere>
          label="Sphere tier"
          value={sphere}
          options={sphereOptions}
          onChange={setSphere}
          hint="Don’t throw your best spheres at full HP targets."
        />

        <SelectInput<Difficulty>
          label="Target difficulty"
          value={difficulty}
          options={difficultyOptions}
          onChange={setDifficulty}
          hint="Use this as a 'how stubborn is this Pal' slider: level gap, rarity, boss-like behavior."
        />
      </div>

      {/* Results */}
      <div className="border rounded-2xl p-5 grid gap-3">
        <h2 className="font-semibold">Result</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="border rounded-xl p-4">
            <div className="text-xs opacity-70 mb-1">Setup score</div>
            <div className="text-3xl font-bold">{result.score}/100</div>
            <div className="text-xs opacity-70">higher = better attempt</div>
          </div>

          <div className="border rounded-xl p-4 md:col-span-2">
            <div className="text-xs opacity-70 mb-1">Recommendation</div>
            <div className="text-xl font-bold">{result.verdict}</div>
            <ul className="mt-2 list-disc list-inside text-sm opacity-80 space-y-1">
              {result.suggestions.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <button
          className="border rounded-lg px-3 py-2 text-sm w-fit"
          onClick={() => navigator.clipboard.writeText(shareUrl)}
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

function NumberInput(props: {
  label: string;
  value: number;
  min?: number;
  max?: number;
  hint?: string;
  onChange: (v: number) => void;
}) {
  const { label, value, min, max, hint, onChange } = props;

  return (
    <label className="grid gap-1">
      <span className="font-semibold text-sm">{label}</span>
      {hint ? <span className="text-xs opacity-70">{hint}</span> : null}
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

function SelectInput<T extends string>(props: {
  label: string;
  value: T;
  options: ReadonlyArray<SelectOption<T>>;
  hint?: string;
  onChange: (v: T) => void;
}) {
  const { label, value, options, hint, onChange } = props;

  return (
    <label className="grid gap-1">
      <span className="font-semibold text-sm">{label}</span>
      {hint ? <span className="text-xs opacity-70">{hint}</span> : null}
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
