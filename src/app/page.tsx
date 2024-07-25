import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <h1 className="text-2xl">Hello World</h1>

      <ul>
        <li>
          <Link href="/auth/signin">Sign In</Link>
        </li>

        <li>
          <Link href="/protected">Protected</Link>
        </li>
      </ul>
    </main>
  );
}
