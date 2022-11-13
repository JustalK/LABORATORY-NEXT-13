"use client";

import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Increase number</button>
    </div>
  );
}
