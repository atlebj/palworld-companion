export function SelectField<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: Array<[T, string]>;
}) {
  return (
    <label className="grid gap-1">
      <span className="font-semibold text-sm text-[var(--color-brand-text-secondary)]">{label}</span>
      <select
        className="w-full px-3 py-2 bg-[var(--color-brand-bg-main)] border border-[var(--color-brand-border)] rounded-lg text-[var(--color-brand-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] transition-colors"
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
