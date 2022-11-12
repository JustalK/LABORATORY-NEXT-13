import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link href="/experience3/page1">Page 1</Link>
      <Link href="/experience3/page3" prefetch={false}>
        Page 3
      </Link>
      <div>Page 2</div>
    </div>
  );
}
