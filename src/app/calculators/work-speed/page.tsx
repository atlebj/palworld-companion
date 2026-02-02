"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export default function WorkSpeedCalculator() {
  // Inputs
  const [baseItemsPerHour, setBaseItemsPerHour] = useState(60); // baseline at 0% work speed, 100% uptime
  const [workSpeedPercent, setWorkSpeedPercent] = useState(0);  // e.g. +50
  const [uptimePercent, setUptimePercent] = useState(75);       // time actually working vs walking/idle
  const [workers, setWorkers] = useState(1);                    // number of dedicated workers
  const [taskSwitchPenalty, setTaskSwitchPenalty] = useState(0); // % penalty due to task switching (0–50)

  const results = useMemo(() => {
    const ws = 1 + clamp(workSpeedPercent, -90, 500) / 100;
    const uptime = clamp(uptimePercent, 0, 100) / 100;
    const w = clamp(workers, 1, 50);

    const switchPenalty = 1 - clamp(taskSwitchPenalty, 0, 50) / 100;

    const perWorker = baseItemsPerHour * ws * uptime * switchPenalty;
    const total = perWorker * w;

    // Relative gain vs baseline (same workers, baseline ws=0, uptime=100, no penalty)
    const baseline = baseItemsPerHour * 1 * 1 * 1 * w;
    const relative = baseline > 0 ? total / baseline : 0;

    return {
      perWorker,
      total,
      relative,
    };
  }, [baseItemsPerHour, workSpeedPercent, uptimePercent, workers, taskSwitchPenalty]);

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <Link href="/calculators" className="underline underline-offset-4 text-sm">
          ← Back to Calculators
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-2">Work Speed Estimator</h1>
      <p className="mb-6 opacity-80">
        This estimates <strong>relative throughput</strong> for base tasks. The goal is to compare setups
        (work speed vs uptime vs task switching), not to claim exact hidden game formulas.
      </p>

      <div className="grid gap-4 border rounded-2xl p-5 mb-8">
        <label className="grid gap-1">
          <span className="text-sm font-semibold">Baseline items/hour (per worker)</span>
          <span className="text-xs opacity-70">
            Your station output at <strong>0% work speed bonus</strong>, with <strong>100% uptime</strong>.
            If you don’t know, keep the default (60) and use the tool for relative comparison.
          </span>
          <input
            className="border rounded-lg p-2"
            type="number"
            value={baseItemsPerHour}
            min={1}
            onChange={(e) => setBaseItemsPerHour(Number(e.target.value))}
          />
        </label>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="grid gap-1">
            <span className="text-sm font-semibold">Work speed bonus (%)</span>
            <span className="text-xs opacity-70">Example: +50 means 50% faster working.</span>
            <input
              className="border rounded-lg p-2"
              type="number"
              value={workSpeedPercent}
              onChange={(e) => setWorkSpeedPercent(Number(e.target.value))}
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-semibold">Uptime (%)</span>
            <span className="text-xs opacity-70">
              Time spent actually working (not walking, stuck, eating, idling). Most bases are 50–85%.
            </span>
            <input
              className="border rounded-lg p-2"
              type="number"
              value={uptimePercent}
              min={0}
              max={100}
              onChange={(e) => setUptimePercent(Number(e.target.value))}
            />
          </label>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="grid gap-1">
            <span className="text-sm font-semibold">Dedicated workers</span>
            <span className="text-xs opacity-70">
              Use dedicated crafters for best accuracy (mixed roles reduce uptime).
            </span>
            <input
              className="border rounded-lg p-2"
              type="number"
              value={workers}
              min={1}
              max={50}
              onChange={(e) => setWorkers(Number(e.target.value))}
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-semibold">Task switching penalty (%)</span>
            <span className="text-xs opacity-70">
              If workers constantly swap jobs, apply a penalty (0–30 is common in messy bases).
            </span>
            <input
              className="border rounded-lg p-2"
              type="number"
              value={taskSwitchPenalty}
              min={0}
              max={50}
              onChange={(e) => setTaskSwitchPenalty(Number(e.target.value))}
            />
          </label>
        </div>
      </div>

      <div className="grid gap-4 border rounded-2xl p-5">
        <h2 className="text-lg font-semibold">Results</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="border rounded-xl p-4">
            <div className="text-xs opacity-70 mb-1">Per worker</div>
            <div className="text-2xl font-bold">
              {results.perWorker.toFixed(1)}
            </div>
            <div className="text-xs opacity-70">items/hour</div>
          </div>

          <div className="border rounded-xl p-4">
            <div className="text-xs opacity-70 mb-1">Total (all workers)</div>
            <div className="text-2xl font-bold">
              {results.total.toFixed(1)}
            </div>
            <div className="text-xs opacity-70">items/hour</div>
          </div>

          <div className="border rounded-xl p-4">
            <div className="text-xs opacity-70 mb-1">Relative to baseline</div>
            <div className="text-2xl font-bold">
              {(results.relative * 100).toFixed(0)}%
            </div>
            <div className="text-xs opacity-70">of baseline output</div>
          </div>
        </div>

        <div className="text-sm opacity-80 mt-2">
          <p className="mb-2">
            <strong>Tip:</strong> If you want “real” numbers, measure a single station for 2–3 minutes,
            estimate items/hour, and plug it into the baseline field.
          </p>
          <p className="mb-0">
            Want the non-calculator explanation? Read{" "}
            <Link className="underline underline-offset-4" href="/mechanics/work-speed">
              Work Speed explained
            </Link>{" "}
            and{" "}
            <Link className="underline underline-offset-4" href="/bases/worker-roles">
              Worker roles explained
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
