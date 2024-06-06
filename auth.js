import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import CredentialProviders from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";
import { userModel } from "./models/user-model";
import { databseConnection } from "./database/connection";
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
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (credentials === null) return null;
        await databseConnection();

        try {
          const user = await userModel.findOne({
            email: credentials?.email,
          });
          if (user) {
            const isMatch = await bcryptjs.compare(
              credentials.password,
              user.password
            );
            if (isMatch) {
              return user;
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
    GoogleProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    FacebookProvider({
      clientId: process.env.FB_CLIENT_ID,
      clientSecret: process.env.FB_CLIENT_SECRET,
    }),
  ],
});
