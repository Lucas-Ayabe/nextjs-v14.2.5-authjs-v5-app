import { SignInForm } from "@/features/auth";

export default async function SignInPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className="container max-w-3xl py-20">
      <h1 className="text-3xl font-semibold mb-8">Enter in your account</h1>
      <SignInForm error={searchParams?.error?.toString()} />
    </main>
  );
}
