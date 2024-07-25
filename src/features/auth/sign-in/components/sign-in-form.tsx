import { signInAction } from "../actions";

export function SignInForm({ error }: { error?: string }) {
  return (
    <form className="grid gap-8" action={signInAction}>
      {error && (
        <div className="p-4 border border-current text-red-600 rounded-md">
          {error}
        </div>
      )}

      <label className="grid gap-4">
        <span>Email</span>
        <input
          className="border border-gray-400 p-2 rounded-md outline-none"
          name="email"
          type="email"
        />
      </label>
      <label className="grid gap-4">
        <span>Password</span>
        <input
          className="border border-gray-400 p-2 rounded-md outline-none"
          name="password"
          type="password"
        />
      </label>

      <button className="bg-sky-500 text-white py-4 px-4 rounded-md place-self-start min-w-40">
        Sign In
      </button>
    </form>
  );
}
