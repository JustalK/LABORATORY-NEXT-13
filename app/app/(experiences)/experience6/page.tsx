import { Suspense } from "react";
import Child from "./Children";

export default async function Page() {
  return (
    <div>
      <Suspense fallback={<div>This is a fallback</div>}>
        <Child />
      </Suspense>
    </div>
  );
}
