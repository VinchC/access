import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>Hello (homepage content)</p>
      <Link href="/dashboard/">Dashboard</Link>
    </>
  );
}
