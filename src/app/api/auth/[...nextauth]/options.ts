import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import { query } from '@/src/lib/db';
import { JWT, Session, SessionOptions, User } from "next-auth";
import { signOut } from "next-auth/react";


export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string,
          password: string,
        };

        if (!email || !password) {
          return null;
          // throw new Error('Email and password are required')
        }

        try {
          const result = await query('SELECT * FROM users WHERE email = $1', [email]);

          // Verify the password

          if (result.rows.length > 0) {
            const passwordMatch = await bcrypt.compare(password, result.rows[0].password);
            if (!passwordMatch) {
              // throw new Error('Invalid email or password');
              return null
            }
            // Successful login logic (e.g., creating a session)
            return result.rows[0] as any
          } else {
            return null
          }
        } catch (error) {
          console.error('Database query error:', error);
          return null
        }

      }

    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 7 * 60 * 60 * 24
  },
 
  callbacks: {
    async jwt({ token, user }:  { token: JWT; user?: User }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (user) {
        token.role = user.role?.toString()
        token.id = user.id.toString()
        token.email = user.email.toString()
        token.company_name = user.company_name?.toString()
      }
      return token
    },

    async session({ session, token }:  { session: Session; token: JWT }) {
      // Send properties to the client, from a provider.
      if (token) {
        session.user.role = token.role
        session.user.id = token.id
        session.user.email = token.email
        session.user.company_name = token.company_name
      }
      // console.log(session)

      return session
    },
    // async redirect({ url, baseUrl } : any) {
    //   if (url.startsWith("/")) return `${baseUrl}${url}`
    //   else if (new URL(url).origin === baseUrl) return url
    //   return baseUrl
    // },

    debug: process.env.NODE_ENV !== "production",
    // refetchInterval: 1 * 24 * 60 * 60,

  },
  pages: {
    signIn: "/login",  // Custom login page
  },
  secret: process.env.NEXTAUTH_SECRET,
}

