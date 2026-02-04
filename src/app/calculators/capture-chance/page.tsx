import { Suspense } from "react";
import CaptureChanceClient from "./CaptureChanceClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="max-w-3xl p-6">Loading…</div>}>
      <CaptureChanceClient />
    </Suspense>
  );
}
