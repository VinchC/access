import Link from "next/link";

export default async function Home() {
  return (
    <>
      <p>Hello (homepage content)</p>
      <Link href="/dashboard/">Dashboard</Link>
    </>
  );
}
