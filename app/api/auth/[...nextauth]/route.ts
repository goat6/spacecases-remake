import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { redirect } from "next/dist/server/api-utils";

const authOptions:NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    })
  ]
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }
