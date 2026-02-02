import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-4">Palworld Companion</h1>

      <p className="mb-4">
        Clear explanations of Palworld mechanics, breeding systems, base optimization,
        and hidden formulas.
      </p>

      <p className="mb-6">
        <Link href="/getting-started" className="underline underline-offset-4">
          Start here →
        </Link>
      </p>

      <ul className="space-y-2 list-disc list-inside">
        <li>
          <Link href="/mechanics/work-speed" className="underline underline-offset-4">
            Work Speed mechanics
          </Link>
        </li>
        <li>
          <Link href="/breeding/trait-inheritance" className="underline underline-offset-4">
            Breeding trait inheritance
          </Link>
        </li>
        <li>
          <Link href="/mechanics/capture-chance" className="underline underline-offset-4">
            Capture chance basics
          </Link>
        </li>
        <li>
          <Link href="/bases/worker-roles" className="underline underline-offset-4">
            Base efficiency and worker roles
          </Link>
        </li>
      </ul>
    </div>
  );
}
