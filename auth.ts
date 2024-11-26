import NextAuth from "next-auth"
import { PrismaClient } from "@prisma/client"
import Credentials from "next-auth/providers/credentials"
import type { Provider } from "next-auth/providers"
import { verifyPassword } from "./lib/utils"

const prisma = new PrismaClient()
const providers: Provider[] = [
  Credentials({
    credentials: {
      email: { type: 'email', name: 'email', placeholder: 'anamaria@gmail.com' },
      password: { type: 'password', name: 'password' },
    },
    authorize: async (credentials) => {
      try {
        const user = await prisma.user.findFirst({
          where: {
            email: credentials?.email as string,
          }
        })

        if (!user) {
          return null
        }

        const isValid = await verifyPassword(
          credentials?.password as string,
          user.password!
        )

        if (!isValid) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          institutionId: user.institutionId
        }
      } catch (error) {
        return null
      }
    },
  }),
]

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider()
      return { id: providerData.id, name: providerData.name }
    } else {
      return { id: provider.id, name: provider.name }
    }
  })
  .filter((provider) => provider.id !== "credentials")

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
})