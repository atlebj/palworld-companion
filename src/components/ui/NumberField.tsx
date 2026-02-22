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
