"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { NumberField } from "../../../components/ui/NumberField";
import { ResultCard } from "../../../components/ui/ResultCard";

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function numFromParam(v: string | null, fallback: number) {
  if (v === null || v === "") return fallback;
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

function round1(n: number) {
  return Math.round(n * 10) / 10;
}

function computePerWorker(
  baselinePerHour: number,
  workSpeedBonus: number,
  uptime: number,
  taskSwitchPenalty: number
) {
  const wsMultiplier = 1 + workSpeedBonus / 100; // +50 => 1.5
  const uptimeMultiplier = uptime / 100; // 75 => 0.75
  const penaltyMultiplier = 1 - taskSwitchPenalty / 100; // 10 => 0.9
  return baselinePerHour * wsMultiplier * uptimeMultiplier * penaltyMultiplier;
}

function pctGain(base: number, improved: number) {
  if (base <= 0) return 0;
  return Math.max(0, Math.round(((improved - base) / base) * 100));
}

export default function WorkSpeedClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [baselinePerHour, setBaselinePerHour] = useState<number>(() => clamp(numFromParam(searchParams.get("b"), 60), 1, 100000));
  const [workSpeedBonus, setWorkSpeedBonus] = useState<number>(() => clamp(numFromParam(searchParams.get("ws"), 0), 0, 400));
  const [uptime, setUptime] = useState<number>(() => clamp(numFromParam(searchParams.get("u"), 75), 0, 100));
  const [workers, setWorkers] = useState<number>(() => clamp(numFromParam(searchParams.get("w"), 1), 1, 999));
  const [taskSwitchPenalty, setTaskSwitchPenalty] = useState<number>(() => clamp(numFromParam(searchParams.get("p"), 0), 0, 80));

  const [copied, setCopied] = useState(false);

  // Sync URL for sharing
  useEffect(() => {
    const p = new URLSearchParams();
    p.set("b", String(baselinePerHour));
    p.set("ws", String(workSpeedBonus));
    p.set("u", String(uptime));
    p.set("w", String(workers));
    p.set("p", String(taskSwitchPenalty));
    router.replace(`${pathname}?${p.toString()}`);
  }, [baselinePerHour, workSpeedBonus, uptime, workers, taskSwitchPenalty, router, pathname]);

  const results = useMemo(() => {
    const perWorkerRaw = computePerWorker(
      baselinePerHour,
      workSpeedBonus,
      uptime,
      taskSwitchPenalty
    );

    const perWorker = round1(perWorkerRaw);
    const total = round1(perWorkerRaw * workers);

    const relativePct = Math.round((perWorkerRaw / baselinePerHour) * 100);

    const mainLimiter =
      uptime < 60
        ? "Uptime is low — role clarity/pathing will beat more Work Speed."
        : taskSwitchPenalty >= 15
          ? "Task switching is hurting output — consider dedicated workers + transporters."
          : workSpeedBonus < 20
            ? "Work Speed bonus is modest — passives/food/condensing could help."
            : "Looks solid — next gains usually come from layout + storage placement.";

    // --- Impact analysis: “What should I change first?”
    const base = perWorkerRaw;

    // Small, realistic “next step” deltas
    const wsDelta = 20;          // +20% work speed
    const uptimeDelta = 10;      // +10% uptime
    const penaltyDelta = 10;     // -10% task switching penalty
    const workersDelta = 1;      // +1 worker

    const wsImproved = computePerWorker(
      baselinePerHour,
      clamp(workSpeedBonus + wsDelta, 0, 400),
      uptime,
      taskSwitchPenalty
    );

    const uptimeImproved = computePerWorker(
      baselinePerHour,
      workSpeedBonus,
      clamp(uptime + uptimeDelta, 0, 100),
      taskSwitchPenalty
    );

    const penaltyImproved = computePerWorker(
      baselinePerHour,
      workSpeedBonus,
      uptime,
      clamp(taskSwitchPenalty - penaltyDelta, 0, 80)
    );

    const workerAddedTotal = base * (workers + workersDelta);

    const impacts = [
      {
        key: "uptime",
        label: `Increase uptime by +${uptimeDelta}%`,
        gainPct: pctGain(base, uptimeImproved),
        note:
          "Usually improved by roles, shorter paths, closer storage, fewer overlaps.",
      },
      {
        key: "penalty",
        label: `Reduce task switching penalty by -${penaltyDelta}%`,
        gainPct: pctGain(base, penaltyImproved),
        note:
          "Usually improved by dedicated workers and having transporters handle hauling.",
      },
      {
        key: "workspeed",
        label: `Increase Work Speed by +${wsDelta}%`,
        gainPct: pctGain(base, wsImproved),
        note:
          "Usually improved by passives, food, condensing, and picking higher suitability.",
      },
      {
        key: "workers",
        label: `Add +${workersDelta} worker`,
        gainPct: pctGain(base * workers, workerAddedTotal),
        note:
          "Only helps if stations, paths, and storage can support more traffic.",
      },
    ].sort((a, b) => b.gainPct - a.gainPct);

    const top = impacts[0];

    return {
      perWorker,
      total,
      relativePct,
      mainLimiter,
      impacts,
      topRecommendation: top,
    };
  }, [baselinePerHour, workSpeedBonus, uptime, workers, taskSwitchPenalty]);

  return (
    <div className="max-w-3xl p-6">
      <Link href="/calculators" className="underline underline-offset-4 text-sm">
        ← Back to Calculators
      </Link>

      <h1 className="text-3xl font-bold mt-4 mb-2">Work Speed Estimator</h1>
      <p className="opacity-80 mb-6">
        Estimates <strong>relative throughput</strong> for base tasks. Use it to compare setups
        (Work Speed vs uptime vs task switching), not to claim exact hidden formulas.
      </p>

      {/* Inputs */}
      <div className="border rounded-2xl p-5 grid gap-5 mb-8">
        <NumberField
          label="Baseline items/hour (per worker)"
          value={baselinePerHour}
          min={1}
          onChange={(n) => setBaselinePerHour(clamp(n, 1, 100000))}
        />

        <div className="grid md:grid-cols-2 gap-4">
          <NumberField
            label="Work speed bonus (%)"
            value={workSpeedBonus}
            min={0}
            max={400}
            onChange={(n) => setWorkSpeedBonus(clamp(n, 0, 400))}
          />
          <NumberField
            label="Uptime (%)"
            value={uptime}
            min={0}
            max={100}
            onChange={(n) => setUptime(clamp(n, 0, 100))}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <NumberField
            label="Workers"
            value={workers}
            min={1}
            max={999}
            onChange={(n) => setWorkers(clamp(n, 1, 999))}
          />
          <NumberField
            label="Task switching penalty (%)"
            value={taskSwitchPenalty}
            min={0}
            max={80}
            onChange={(n) => setTaskSwitchPenalty(clamp(n, 0, 80))}
          />
        </div>
      </div>

      {/* Results */}
      <div className="border rounded-2xl p-5">
        <h2 className="font-semibold mb-4">Results</h2>

        <div className="grid md:grid-cols-3 gap-4 mb-5">
          <ResultCard title="Per worker" value={`${results.perWorker}`} sub="items/hour" />
          <ResultCard title="Total (all workers)" value={`${results.total}`} sub="items/hour" />
          <ResultCard title="Relative to baseline" value={`${results.relativePct}%`} sub="of baseline output" />
        </div>

        <p className="text-sm opacity-80 mb-6">{results.mainLimiter}</p>

        {/* ✅ What should I change first */}
        <div className="border rounded-2xl p-4 mb-5">
          <div className="font-semibold mb-2">What should I change first?</div>
          <div className="text-lg">
            <strong>{results.topRecommendation.label}</strong>{" "}
            <span className="opacity-80">
              (≈ +{results.topRecommendation.gainPct}% throughput)
            </span>
          </div>
          <p className="text-sm opacity-80 mt-2">{results.topRecommendation.note}</p>

          <div className="mt-4">
            <div className="text-sm font-semibold mb-2 opacity-80">Next best improvements</div>
            <ul className="text-sm space-y-2 list-disc list-inside">
              {results.impacts.slice(1, 4).map((i) => (
                <li key={i.key}>
                  {i.label}{" "}
                  <span className="opacity-70">(≈ +{i.gainPct}% throughput)</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          className="border rounded-lg px-3 py-2 text-sm transition-all duration-200"
          onClick={async () => {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
        >
          {copied ? "Copied!" : "Copy shareable link"}
        </button>

        <p className="text-sm opacity-80 mt-4">
          Want the explanation? Read{" "}
          <Link href="/mechanics/work-speed" className="underline underline-offset-4">
            Work Speed explained
          </Link>{" "}
          and{" "}
          <Link href="/bases/worker-roles" className="underline underline-offset-4">
            Worker roles explained
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
