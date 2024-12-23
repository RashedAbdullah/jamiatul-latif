import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import CredentialProviders from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";
import { userModel } from "./models/user-model";
import { connectMongo } from "./database/connection";
import { clientPromise } from "./database/client-promise";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: process.env.ENVIRONMENT,
  }),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialProviders({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials === null) return null;
        await connectMongo();

        try {
          const user = await userModel.findOne({ email: credentials.email });

          if (user) {
            const isMatch = await bcryptjs.compare(
              credentials.password,
              user.password
            );
            if (isMatch) {
              return {
                id: user._id,
                email: user.email,
                name: user.name,
                role: user.role,
              };
            } else {
              throw new Error("Email or Password is not correct");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Attach user role to the token if it exists
      if (user) {
        token.role = user.role; // Attach role to the token
      }
      return token;
    },
    async session({ session, token }) {
      // Attach token role to the session
      if (token) {
        session.user.role = token.role; // Attach role to session.user
      }
      return session;
    },
  },
  secret: process.env.JWT_SECRET,
});
