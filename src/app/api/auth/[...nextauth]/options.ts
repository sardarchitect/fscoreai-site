import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import { query } from '@/src/lib/db';
import { Session, SessionOptions, User } from "next-auth";
import { JWT } from "next-auth/jwt";


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
 
  callbacks: {
    async jwt({ token, user }:  { token: JWT; user?: User }) {
      if (user) {
        token.id = user.id.toString()
        token.role = user.role.toString()
        token.email = user.email.toString()
      }
      return token
    },

    async session({ session, token }:  { session: Session; token: JWT }) {
      if (token) {
        session.user.id = token.id
        session.user.role = token.role
        session.user.email = token.email
      }
      return session
    },
    // async redirect({ url, baseUrl } : any) {
    //   if (url.startsWith("/")) return `${baseUrl}${url}`
    //   else if (new URL(url).origin === baseUrl) return url
    //   return baseUrl
    // },

    debug: process.env.NODE_ENV !== "production"

  },
  pages: {
    signIn: "/login"
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt"
    // maxAge: 7 * 60 * 60 * 24
  }
}

