// @ts-nocheck
import { getRandom } from "./random";

export default function Page({ params }: any) {
  return (
    <div>
      <div>{getRandom(params.slug)}</div>
      <div>{getRandom(params.slug)}</div>
      <div>{getRandom(params.slug + "a")}</div>
    </div>
  );
}
