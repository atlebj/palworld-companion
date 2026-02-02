"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Status =
  | "none"
  | "minor"
  | "strong"; // keep generic (sleep/freeze/stun)

type Sphere =
  | "basic"
  | "better"
  | "advanced"
  | "best";

type Difficulty =
  | "easy"
  | "medium"
  | "hard"
  | "very-hard";

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function labelStatus(s: Status) {
  if (s === "none") return "None";
  if (s === "minor") return "Minor (short / weak debuff)";
  return "Strong (sleep/freeze/stun-like)";
}

function labelSphere(s: Sphere) {
  if (s === "basic") return "Basic / cheap";
  if (s === "better") return "Better";
  if (s === "advanced") return "Advanced";
  return "Best you’re willing to spend";
}

export default function CaptureChanceHelper() {
  const [hpPercent, setHpPercent] = useState(35); // target HP%
  const [status, setStatus] = useState<Status>("none");
  const [sphere, setSphere] = useState<Sphere>("better");
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");

  const result = useMemo(() => {
    // Score components (0–100). This is a "decision score", not a true probability.
    // HP: lower HP => higher score
    const hp = clamp(hpPercent, 1, 100);
    let hpScore = 0;

    if (hp <= 5) hpScore = 45;
    else if (hp <= 15) hpScore = 38;
    else if (hp <= 30) hpScore = 28;
    else if (hp <= 50) hpScore = 18;
    else if (hp <= 75) hpScore = 8;
    else hpScore = 2;

    const statusScore =
      status === "strong" ? 28 : status === "minor" ? 14 : 0;

    const sphereScore =
      sphere === "best" ? 22 :
      sphere === "advanced" ? 16 :
      sphere === "better" ? 10 :
      4;

    // Difficulty reduces effective score
    const diffPenalty =
      difficulty === "easy" ? 0 :
      difficulty === "medium" ? 8 :
      difficulty === "hard" ? 18 :
      28;

    const raw = hpScore + statusScore + sphereScore - diffPenalty;
    const score = clamp(raw, 0, 100);

    // Recommendation tier
    const tier =
      score >= 70 ? "Good attempt" :
      score >= 50 ? "Decent, but you can improve" :
      score >= 30 ? "Low odds — improve setup first" :
      "Very low — don’t waste spheres";

    const suggestions: string[] = [];

    if (hpPercent > 30) suggestions.push("Lower HP further before throwing.");
    if (status === "none") suggestions.push("Apply a strong status effect if possible.");
    if (sphere === "basic" && (difficulty === "hard" || difficulty === "very-hard"))
      suggestions.push("Use a better sphere tier for hard targets.");
    if (difficulty === "very-hard" && status !== "strong")
      suggestions.push("For very hard targets, strong status + very low HP is usually required.");
    if (suggestions.length === 0)
      suggestions.push("You’re set. Throw now and commit a few attempts.");

    return { score, tier, suggestions };
  }, [hpPercent, status, sphere, difficulty]);

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <Link href="/calculators" className="underline underline-offset-4 text-sm">
          ← Back to Calculators
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-2">Capture Chance Helper</h1>
      <p className="mb-6 opacity-80">
        This is a <strong>practical decision helper</strong>, not an exact probability calculator.
        It scores your current setup (HP, status, sphere tier, target difficulty) and tells you what
        to improve before you waste spheres.
      </p>

      <div className="grid gap-4 border rounded-2xl p-5 mb-8">
        <label className="grid gap-1">
          <span className="text-sm font-semibold">Target HP (%)</span>
          <span className="text-xs opacity-70">
            Lower HP usually matters more than people think. Try 5–15% for hard targets.
          </span>
          <input
            className="border rounded-lg p-2"
            type="number"
            min={1}
            max={100}
            value={hpPercent}
            onChange={(e) => setHpPercent(Number(e.target.value))}
          />
        </label>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="grid gap-1">
            <span className="text-sm font-semibold">Status effect</span>
            <span className="text-xs opacity-70">
              Strong statuses (sleep/freeze/stun-like) usually give the biggest boost.
            </span>
            <select
              className="border rounded-lg p-2"
              value={status}
              onChange={(e) => setStatus(e.target.value as Status)}
            >
              <option value="none">{labelStatus("none")}</option>
              <option value="minor">{labelStatus("minor")}</option>
              <option value="strong">{labelStatus("strong")}</option>
            </select>
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-semibold">Sphere tier</span>
            <span className="text-xs opacity-70">
              Don’t throw your best spheres at full HP targets.
            </span>
            <select
              className="border rounded-lg p-2"
              value={sphere}
              onChange={(e) => setSphere(e.target.value as Sphere)}
            >
              <option value="basic">{labelSphere("basic")}</option>
              <option value="better">{labelSphere("better")}</option>
              <option value="advanced">{labelSphere("advanced")}</option>
              <option value="best">{labelSphere("best")}</option>
            </select>
          </label>
        </div>

        <label className="grid gap-1">
          <span className="text-sm font-semibold">Target difficulty</span>
          <span className="text-xs opacity-70">
            Use this as a “how stubborn is this Pal” slider: level gap, rarity, boss-like behavior, etc.
          </span>
          <select
            className="border rounded-lg p-2"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as Difficulty)}
          >
            <option value="easy">Easy (common / low level)</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            <option value="very-hard">Very hard (boss-like / huge level gap)</option>
          </select>
        </label>
      </div>

      <div className="grid gap-4 border rounded-2xl p-5">
        <h2 className="text-lg font-semibold">Result</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="border rounded-xl p-4">
            <div className="text-xs opacity-70 mb-1">Setup score</div>
            <div className="text-2xl font-bold">{result.score}/100</div>
            <div className="text-xs opacity-70">higher = better attempt</div>
          </div>

          <div className="border rounded-xl p-4 md:col-span-2">
            <div className="text-xs opacity-70 mb-1">Recommendation</div>
            <div className="text-xl font-bold">{result.tier}</div>
            <ul className="mt-2 list-disc list-inside text-sm opacity-80 space-y-1">
              {result.suggestions.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-sm opacity-80 mt-2">
          Want the full explanation? Read{" "}
          <Link className="underline underline-offset-4" href="/mechanics/capture-chance">
            Capture Chance explained
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
