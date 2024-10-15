"use client"

import Link from "next/link";

export default function Error() {
  return (
    <>
      <main>
        <div>
          <p>Oops</p>
          <h1>Something went wrong</h1>
          <p>There was an error processing your request.</p>
          <Link href="/">Back to home</Link>
        </div>
      </main>
    </>
  );
}
