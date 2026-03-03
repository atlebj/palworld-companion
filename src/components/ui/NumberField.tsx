export function NumberField({
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
      <div className="flex justify-between items-baseline">
        <span className="font-semibold text-sm text-slate-300">{label}</span>
        {hint ? <span className="text-xs text-slate-400 opacity-70">{hint}</span> : null}
      </div>
      <input
        type="number"
        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors"
        value={value}
        min={min}
        max={max}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </label>
  );
}
