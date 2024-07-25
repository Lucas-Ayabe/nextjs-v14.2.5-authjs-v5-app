import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { signIn, UserNotFoundError } from "../config";

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
      let message = "Invalid credentials";

      if (error.cause?.err instanceof UserNotFoundError) {
        message = "User not found";
      }

      const search = new URLSearchParams({ error: message });
      return redirect(`/auth/signin?${search}`);
    }

    throw error;
  }
};
