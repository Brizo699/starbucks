import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        "677363323402-psiuldbnjuaksmu6enmo1et5cvj2gai3.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
  // Custom page
  // pages: {
  //   signIn: "/signin",
  // },
});
