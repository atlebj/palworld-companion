export function ResultCard({
  title,
  value,
  sub,
}: {
  title: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="card p-4">
      <div className="text-sm text-[var(--color-brand-text-secondary)] mb-1 uppercase tracking-wide font-semibold opacity-70">{title}</div>
      <div className="text-3xl font-bold leading-tight text-[var(--color-brand-text-primary)]">{value}</div>
      <div className="text-sm text-[var(--color-brand-text-secondary)] mt-1">{sub}</div>
    </div>
  );
}
