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

type Preset = {
  name: string;
  baseItemsPerHour: number;
  workSpeedPercent: number;
  uptimePercent: number;
  workers: number;
  taskSwitchPenalty: number;
};

const PRESETS: Preset[] = [
  {
    name: "Early game (messy base)",
    baseItemsPerHour: 60,
    workSpeedPercent: 0,
    uptimePercent: 55,
    workers: 1,
    taskSwitchPenalty: 15,
  },
  {
    name: "Mid game (decent roles)",
    baseItemsPerHour: 60,
    workSpeedPercent: 30,
    uptimePercent: 75,
    workers: 2,
    taskSwitchPenalty: 5,
  },
  {
    name: "Late game (specialized factory)",
    baseItemsPerHour: 60,
    workSpeedPercent: 80,
    uptimePercent: 90,
    workers: 3,
    taskSwitchPenalty: 0,
  },
];

export default function WorkSpeedClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [baseItemsPerHour, setBaseItemsPerHour] = useState<number>(60);
  const [workSpeedPercent, setWorkSpeedPercent] = useState<number>(0);
  const [uptimePercent, setUptimePercent] = useState<number>(75);
  const [workers, setWorkers] = useState<number>(1);
  const [taskSwitchPenalty, setTaskSwitchPenalty] = useState<number>(0);

  // Load from URL once
  useEffect(() => {
    const base = clamp(numFromParam(searchParams.get("base"), 60), 1, 100000);
    const ws = clamp(numFromParam(searchParams.get("ws"), 0), -90, 500);
    const up = clamp(numFromParam(searchParams.get("up"), 75), 0, 100);
    const w = clamp(numFromParam(searchParams.get("w"), 1), 1, 50);
    const pen = clamp(numFromParam(searchParams.get("pen"), 0), 0, 50);

    setBaseItemsPerHour(base);
    setWorkSpeedPercent(ws);
    setUptimePercent(up);
    setWorkers(w);
    setTaskSwitchPenalty(pen);

    // Intentionally run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync URL
  useEffect(() => {
    const p = new URLSearchParams();
    p.set("base", String(baseItemsPerHour));
    p.set("ws", String(workSpeedPercent));
    p.set("up", String(uptimePercent));
    p.set("w", String(workers));
    p.set("pen", String(taskSwitchPenalty));
    router.replace(`${pathname}?${p.toString()}`);
  }, [baseItemsPerHour, workSpeedPercent, uptimePercent, workers, taskSwitchPenalty, router, pathname]);

  const result = useMemo(() => {
    const base = clamp(baseItemsPerHour, 1, 100000);
    const wsMult = 1 + clamp(workSpeedPercent, -90, 500) / 100;
    const uptimeMult = clamp(uptimePercent, 0, 100) / 100;
    const w = clamp(workers, 1, 50);
    const penaltyMult = 1 - clamp(taskSwitchPenalty, 0, 50) / 100;

    const perWorker = base * wsMult * uptimeMult * penaltyMult;
    const total = perWorker * w;

    const baselineTotal = base * w; // ws=0, uptime=100, penalty=0
    const relative = baselineTotal > 0 ? total / baselineTotal : 0;

    return { perWorker, total, relative, wsMult, uptimeMult, penaltyMult };
  }, [baseItemsPerHour, workSpeedPercent, uptimePercent, workers, taskSwitchPenalty]);

  function applyPreset(p: Preset) {
    setBaseItemsPerHour(p.baseItemsPerHour);
    setWorkSpeedPercent(p.workSpeedPercent);
    setUptimePercent(p.uptimePercent);
    setWorkers(p.workers);
    setTaskSwitchPenalty(p.taskSwitchPenalty);
  }

  return (
    <div className="max-w-3xl">
      <Link href="/calculators" className="underline underline-offset-4 text-sm">
        ← Back to Calculators
      </Link>

      <h1 className="text-3xl font-bold mt-4 mb-2">Work Speed Estimator</h1>
      <p className="opacity-80 mb-6">
        Estimates <strong>relative base throughput</strong>. The point is comparing setups (work speed vs uptime vs task
        switching), not claiming exact hidden formulas.
      </p>

      <div className="mb-6">
        <div className="text-sm font-semibold mb-2 opacity-80">Quick presets</div>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.name}
              type="button"
              className="border rounded-lg px-3 py-2 text-sm hover:opacity-80"
              onClick={() => applyPreset(p)}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 border rounded-2xl p-5 mb-8">
        <NumberInput
          label="Baseline items/hour (per worker)"
          hint="Your station output at 0% work speed bonus, 100% uptime. If you don’t know, keep 60 and use this as a relative tool."
          value={baseItemsPerHour}
          min={1}
          onChange={(v) => setBaseItemsPerHour(clamp(v, 1, 100000))}
        />

        <div className="grid md:grid-cols-2 gap-4">
          <NumberInput
            label="Work speed bonus (%)"
            hint="Example: +50 means 50% faster when actually working."
            value={workSpeedPercent}
            onChange={(v) => setWorkSpeedPercent(clamp(v, -90, 500))}
          />

          <NumberInput
            label="Uptime (%)"
            hint="Time spent actually working (not walking/stuck/eating/idle). Many bases are 50–85%."
            value={uptimePercent}
            min={0}
            max={100}
            onChange={(v) => setUptimePercent(clamp(v, 0, 100))}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <NumberInput
            label="Dedicated workers"
            hint="Use dedicated crafters for better results (mixed roles reduce uptime)."
            value={workers}
            min={1}
            max={50}
            onChange={(v) => setWorkers(clamp(v, 1, 50))}
          />

          <NumberInput
            label="Task switching penalty (%)"
            hint="If workers constantly swap jobs, apply a penalty (0–30 is common in messy bases)."
            value={taskSwitchPenalty}
            min={0}
            max={50}
            onChange={(v) => setTaskSwitchPenalty(clamp(v, 0, 50))}
          />
        </div>
      </div>

      <div className="grid gap-4 border rounded-2xl p-5">
        <h2 className="text-lg font-semibold">Results</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <Stat label="Per worker" value={`${result.perWorker.toFixed(1)} items/hour`} />
          <Stat label="Total output" value={`${result.total.toFixed(1)} items/hour`} />
          <Stat label="Relative to baseline" value={`${(result.relative * 100).toFixed(0)}%`} />
        </div>

        <div className="text-sm opacity-80">
          <p className="mb-2">
            Multipliers used: Work speed <strong>{result.wsMult.toFixed(2)}×</strong>, Uptime{" "}
            <strong>{result.uptimeMult.toFixed(2)}×</strong>, Task switching{" "}
            <strong>{result.penaltyMult.toFixed(2)}×</strong>.
          </p>
          <p className="mb-0">
            Tip: if you want real numbers, time one station for 2–3 minutes and estimate items/hour as your baseline.
          </p>
        </div>

        <button
          className="border rounded-lg px-3 py-2 text-sm w-fit"
          onClick={() => navigator.clipboard.writeText(window.location.href)}
        >
          Copy shareable link
        </button>

        <p className="text-sm opacity-80">
          Want the explanation? Read{" "}
          <Link className="underline underline-offset-4" href="/mechanics/work-speed">
            Work Speed explained
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

function Stat(props: { label: string; value: string }) {
  return (
    <div className="border rounded-xl p-4">
      <div className="text-xs opacity-70 mb-1">{props.label}</div>
      <div className="text-2xl font-bold">{props.value}</div>
    </div>
  );
}

function NumberInput(props: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  hint?: string;
  min?: number;
  max?: number;
}) {
  const { label, value, onChange, hint, min, max } = props;

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
