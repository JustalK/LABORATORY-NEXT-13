"use client";

import { useState } from "react";

export default function Home({ date, fn }: any) {
  const [counter] = useState(0);
  console.log(fn);

  return (
    <div>
      <div>{date}</div>
      <div>{counter}</div>
      <button onClick={() => JSON.parse(fn)()}>Trigger FN</button>
    </div>
  );
}
