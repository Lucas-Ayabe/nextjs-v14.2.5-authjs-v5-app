import { authorize, SignOut } from "@/features/auth";

export default async function SignIn() {
  const session = await authorize();

  return (
    <main className="container max-w-3xl py-20">
      <SignOut />

      <h1 className="text-3xl font-semibold mb-8">Protected Page</h1>
      <h2>Welcome back, {session.user?.name}!</h2>
    </main>
  );
}
