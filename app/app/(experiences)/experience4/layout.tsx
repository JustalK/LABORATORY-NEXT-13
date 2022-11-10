import Loading from "./loading";
import { Suspense } from "react";
import Page from "./page";

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <span>LAYOUT</span>
      <Suspense fallback={<Loading />}>
        <Page />
      </Suspense>
    </div>
  );
}
