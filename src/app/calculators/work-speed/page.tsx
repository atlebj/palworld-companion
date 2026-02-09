import { Suspense } from "react";
import WorkSpeedClient from "./WorkSpeedClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="max-w-3xl p-6">Loading…</div>}>
      <WorkSpeedClient />
    </Suspense>
  );
}
