// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { MongoDBAdapter } from "@auth/mongodb-adapter";
// import CredentialProviders from "next-auth/providers/credentials";
// import bcryptjs from "bcryptjs";
// import { userModel } from "./models/user-model";
// import { clientPromise } from "./database/client-promise";
// import { connectMongo } from "./database/connection";

// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut,
// } = NextAuth({
//   adapter: MongoDBAdapter(clientPromise, {
//     databaseName: process.env.ENVIRONMENT,
//   }),
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialProviders({
//       credentials: {
//         email: {},
//         password: {},
//       },
//       async authorize(credentials) {
//         if (credentials === null) return null;
//         await connectMongo();

//         try {
//           const user = await userModel.findOne({
//             email: credentials?.email,
//           });
//           if (user) {
//             const isMatch = await bcryptjs.compare(
//               credentials.password,
//               user.password
//             );
//             if (isMatch) {
//               return user;
//             } else {
//               throw new Error("ইমেইল বা পাসওয়ার্ড সঠিক নয়।");
//             }
//           } else {
//             throw new Error("ইউজার খুঁজে পাওয়া যায় নি।");
//           }
//         } catch (err) {
//           throw new Error(err);
//         }
//       },
//     }),
//     GoogleProvider({
//       clientId: process.env.CLIENT_ID,
//       clientSecret: process.env.CLIENT_SECRET,
//       allowDangerousEmailAccountLinking: true,
//     }),
//   ],
// });
