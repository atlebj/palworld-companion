"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function numFromParam(v: string | null, fallback: number) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

export default function WorkSpeedClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Inputs (simple + practical, not “datamined exact”)
  const [baselinePerHour, setBaselinePerHour] = useState<number>(60); // items/hour at +0% and 100% uptime
  const [workSpeedBonus, setWorkSpeedBonus] = useState<number>(0); // e.g. 50 => 50% faster working
  const [uptime, setUptime] = useState<number>(75); // % of time actually working
  const [workers, setWorkers] = useState<number>(1); // number of workers doing this task
  const [taskSwitchPenalty, setTaskSwitchPenalty] = useState<number>(0); // % penalty (0–30 typical)

  // Load once from URL
  useEffect(() => {
    setBaselinePerHour(clamp(numFromParam(searchParams.get("b"), 60), 1, 100000));
    setWorkSpeedBonus(clamp(numFromParam(searchParams.get("ws"), 0), 0, 400));
    setUptime(clamp(numFromParam(searchParams.get("u"), 75), 0, 100));
    setWorkers(clamp(numFromParam(searchParams.get("w"), 1), 1, 999));
    setTaskSwitchPenalty(clamp(numFromParam(searchParams.get("p"), 0), 0, 80));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    // Baseline concept:
    // baselinePerHour assumes: 0% WS bonus, 100% uptime, no switching penalty, per worker.

    const wsMultiplier = 1 + workSpeedBonus / 100; // 50 => 1.5x working speed
    const uptimeMultiplier = uptime / 100; // 75% => 0.75
    const penaltyMultiplier = 1 - taskSwitchPenalty / 100; // 10% => 0.9

    const perWorker = baselinePerHour * wsMultiplier * uptimeMultiplier * penaltyMultiplier;
    const total = perWorker * workers;

    // Compare to “perfect baseline” (same baselinePerHour, 100% uptime, no penalties, 0% bonus)
    const baselinePerWorkerPerfect = baselinePerHour;
    const relative = baselinePerWorkerPerfect > 0 ? perWorker / baselinePerWorkerPerfect : 0;

    // Help text
    const mainLimiter =
      uptime < 60
        ? "Uptime is low — role clarity/pathing will beat more Work Speed."
        : taskSwitchPenalty >= 15
          ? "Task switching is hurting output — consider dedicated workers + transporters."
          : workSpeedBonus < 20
            ? "Work Speed bonus is modest — passives/food/condensing could help."
            : "Looks solid — next gains usually come from layout + storage placement.";

    return {
      perWorker: round1(perWorker),
      total: round1(total),
      relativePct: Math.round(relative * 100),
      mainLimiter,
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
          hint="Your station output at 0% work speed bonus, with 100% uptime. If unsure, keep default."
          value={baselinePerHour}
          min={1}
          onChange={(n) => setBaselinePerHour(clamp(n, 1, 100000))}
        />

        <div className="grid md:grid-cols-2 gap-4">
          <NumberField
            label="Work speed bonus (%)"
            hint="Example: +50 means 50% faster working."
            value={workSpeedBonus}
            min={0}
            max={400}
            onChange={(n) => setWorkSpeedBonus(clamp(n, 0, 400))}
          />
          <NumberField
            label="Uptime (%)"
            hint="Time spent actually working (not walking, stuck, eating, idling). Most bases are 50–85%."
            value={uptime}
            min={0}
            max={100}
            onChange={(n) => setUptime(clamp(n, 0, 100))}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <NumberField
            label="Workers"
            hint="How many Pals are doing this same job type in parallel."
            value={workers}
            min={1}
            max={999}
            onChange={(n) => setWorkers(clamp(n, 1, 999))}
          />
          <NumberField
            label="Task switching penalty (%)"
            hint="If workers constantly swap jobs, apply a penalty (0–30 is common in messy bases)."
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

        <p className="text-sm opacity-80 mb-4">{results.mainLimiter}</p>

        <button
          className="border rounded-lg px-3 py-2 text-sm"
          onClick={async () => {
            await navigator.clipboard.writeText(window.location.href);
          }}
        >
          Copy shareable link
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

function round1(n: number) {
  return Math.round(n * 10) / 10;
}

function NumberField({
  label,
  hint,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  hint?: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (n: number) => void;
}) {
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

function ResultCard({ title, value, sub }: { title: string; value: string; sub: string }) {
  return (
    <div className="border rounded-2xl p-4">
      <div className="text-sm opacity-70 mb-1">{title}</div>
      <div className="text-3xl font-bold leading-tight">{value}</div>
      <div className="text-sm opacity-70">{sub}</div>
    </div>
  );
}
