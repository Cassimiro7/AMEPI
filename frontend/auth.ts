import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  // 👇 É ESTA LINHA QUE VAI DESTRAVAR O SEU LOGIN NA AWS
  trustHost: true,
})