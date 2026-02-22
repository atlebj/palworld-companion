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
    <div className="border rounded-2xl p-4">
      <div className="text-sm opacity-70 mb-1">{title}</div>
      <div className="text-3xl font-bold leading-tight">{value}</div>
      <div className="text-sm opacity-70">{sub}</div>
    </div>
  );
}
