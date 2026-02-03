"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function numFromParam(value: string | null, fallback: number) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

export default function WorkSpeedCalculator() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // State
  const [baseItemsPerHour, setBaseItemsPerHour] = useState(60);
  const [workSpeedPercent, setWorkSpeedPercent] = useState(0);
  const [uptimePercent, setUptimePercent] = useState(75);
  const [workers, setWorkers] = useState(1);
  const [taskSwitchPenalty, setTaskSwitchPenalty] = useState(0);

  // Load from URL once
  useEffect(() => {
    setBaseItemsPerHour(numFromParam(searchParams.get("base"), 60));
    setWorkSpeedPercent(numFromParam(searchParams.get("ws"), 0));
    setUptimePercent(numFromParam(searchParams.get("up"), 75));
    setWorkers(numFromParam(searchParams.get("w"), 1));
    setTaskSwitchPenalty(numFromParam(searchParams.get("pen"), 0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync URL
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("base", String(baseItemsPerHour));
    params.set("ws", String(workSpeedPercent));
    params.set("up", String(uptimePercent));
    params.set("w", String(workers));
    params.set("pen", String(taskSwitchPenalty));
    router.replace(`${pathname}?${params.toString()}`);
  }, [baseItemsPerHour, workSpeedPercent, uptimePercent, workers, taskSwitchPenalty, router, pathname]);

  // Calculation
  const result = useMemo(() => {
    const ws = 1 + clamp(workSpeedPercent, -90, 500) / 100;
    const uptime = clamp(uptimePercent, 0, 100) / 100;
    const w = clamp(workers, 1, 50);
    const penalty = 1 - clamp(taskSwitchPenalty, 0, 50) / 100;

    const perWorker = baseItemsPerHour * ws * uptime * penalty;
    const total = perWorker * w;
    const baseline = baseItemsPerHour * w;
    const relative = baseline > 0 ? total / baseline : 0;

    return { perWorker, total, relative };
  }, [baseItemsPerHour, workSpeedPercent, uptimePercent, workers, taskSwitchPenalty]);

  return (
    <div className="max-w-3xl">
      <Link href="/calculators" className="underline underline-offset-4 text-sm">
        ← Back to Calculators
      </Link>

      <h1 className="text-3xl font-bold mt-4 mb-2">Work Speed Estimator</h1>
      <p className="opacity-80 mb-6">
        Estimates <strong>relative base throughput</strong>. This compares setups — it does not claim exact hidden formulas.
      </p>

      {/* Inputs */}
      <div className="grid gap-4 border rounded-2xl p-5 mb-8">
        <label className="grid gap-1">
          <span className="font-semibold text-sm">Baseline items/hour (per worker)</span>
          <span className="text-xs opacity-70">0% work speed, 100% uptime. Use estimates.</span>
          <input type="number" className="border rounded-lg p-2" value={baseItemsPerHour}
            onChange={(e) => setBaseItemsPerHour(Number(e.target.value))} />
        </label>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="grid gap-1">
            <span className="font-semibold text-sm">Work speed bonus (%)</span>
            <input type="number" className="border rounded-lg p-2" value={workSpeedPercent}
              onChange={(e) => setWorkSpeedPercent(Number(e.target.value))} />
          </label>

          <label className="grid gap-1">
            <span className="font-semibold text-sm">Uptime (%)</span>
            <input type="number" className="border rounded-lg p-2" value={uptimePercent}
              onChange={(e) => setUptimePercent(Number(e.target.value))} />
          </label>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="grid gap-1">
            <span className="font-semibold text-sm">Dedicated workers</span>
            <input type="number" className="border rounded-lg p-2" value={workers}
              onChange={(e) => setWorkers(Number(e.target.value))} />
          </label>

          <label className="grid gap-1">
            <span className="font-semibold text-sm">Task switching penalty (%)</span>
            <input type="number" className="border rounded-lg p-2" value={taskSwitchPenalty}
              onChange={(e) => setTaskSwitchPenalty(Number(e.target.value))} />
          </label>
        </div>
      </div>

      {/* Results */}
      <div className="grid gap-4 border rounded-2xl p-5">
        <h2 className="text-lg font-semibold">Results</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <Stat label="Per worker" value={`${result.perWorker.toFixed(1)} items/h`} />
          <Stat label="Total output" value={`${result.total.toFixed(1)} items/h`} />
          <Stat label="Relative output" value={`${(result.relative * 100).toFixed(0)}%`} />
        </div>

        <button
          className="border rounded-lg px-3 py-2 text-sm w-fit"
          onClick={() => navigator.clipboard.writeText(window.location.href)}
        >
          Copy shareable link
        </button>

        <p className="text-sm opacity-80">
          Learn more in{" "}
          <Link href="/mechanics/work-speed" className="underline underline-offset-4">
            Work Speed explained
          </Link>.
        </p>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border rounded-xl p-4">
      <div className="text-xs opacity-70 mb-1">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}
