"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <Link href="/experience3/page2">Page 2</Link>
      <div>Page 1</div>
      <div>{new Date().toLocaleTimeString()}</div>
      <button onClick={() => router.refresh()}>Invalidate cache</button>
    </div>
  );
}
