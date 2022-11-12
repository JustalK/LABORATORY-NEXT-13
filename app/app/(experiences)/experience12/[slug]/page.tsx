import { getRandom } from "./random";

export default function Page({ params }: any) {
  return (
    <div>
      <div>{getRandom(Number(params.slug))}</div>
      <div>{getRandom(Number(params.slug))}</div>
      <div>{getRandom(Number(params.slug) * 2)}</div>
    </div>
  );
}
