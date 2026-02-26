export function NumberField({
  label,
  value,
  onChange,
  min = 0,
  max = 1000,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <label className="grid gap-1">
      <span className="font-semibold text-sm text-[var(--color-brand-text-secondary)]">{label}</span>
      <input
        type="number"
        className="w-full px-3 py-2 bg-[var(--color-brand-bg-main)] border border-[var(--color-brand-border)] rounded-lg text-[var(--color-brand-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] transition-colors placeholder-[var(--color-brand-text-muted)]"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        max={max}
      />
    </label>
  );
}
