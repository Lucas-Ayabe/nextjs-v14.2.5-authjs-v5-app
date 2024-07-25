import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { signInSchema as schema } from "@/features/auth/sign-in";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = await schema.parseAsync(credentials);
          const [name] = email.split("@");

          return {
            name,
            email,
            password,
          };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
});
