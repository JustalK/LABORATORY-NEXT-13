"use client";

import { useState } from "react";

export default function Home({ date, fn }: any) {
  const [counter] = useState(0);

  return (
    <div>
      <div>{date}</div>
      <div>{counter}</div>
      <button onClick={() => fn()}>Trigger FN</button>
    </div>
  );
}
