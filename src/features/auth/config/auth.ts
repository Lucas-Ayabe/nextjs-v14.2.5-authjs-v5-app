import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { signInSchema as schema } from "@/features/auth/sign-in";

export class UserNotFoundError extends CredentialsSignin {
  code = "User Not Found";
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = await schema.parseAsync(credentials);
        const [name] = email.split("@");

        if (name === "unknow") {
          throw new UserNotFoundError();
        }

        if (name === "error") {
          return null;
        }

        return {
          name,
          email,
          password,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
});
