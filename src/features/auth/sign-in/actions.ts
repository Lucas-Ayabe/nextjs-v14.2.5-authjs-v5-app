import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { signIn } from "../config";

export const signInAction = async (formData: FormData) => {
  "use server";
  try {
    await signIn("credentials", {
      ...Object.fromEntries(formData),
      redirectTo: "/protected",
      redirect: true,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      const search = new URLSearchParams({
        error: "Invalid credentials",
      });

      return redirect(`/auth/signin?${search}`);
    }

    throw error;
  }
};
