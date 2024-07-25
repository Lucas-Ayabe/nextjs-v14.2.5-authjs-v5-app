import { redirect } from "next/navigation";
import { auth } from "../config";

export const authorize = async (orRedirectTo = "/auth/signin") => {
  const session = await auth();

  if (!session?.user) {
    redirect(orRedirectTo);
  }

  return session;
};
