import Credentials from "next-auth/providers/credentials";

import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

import { query } from '@/src/lib/db';
import { cookies } from "next/headers";


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
          const {email, password} = credentials as {
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
            console.log(result.rows)
              // Successful login logic (e.g., creating a session)
              return result.rows as any
              // return  NextResponse.json({ message: 'Login successful!' }, {status: 200});
          } else {
            return null
            // return  NextResponse.json({ message: 'Invalid credentials' }, {status: 400});
          }
      } catch (error) {
          console.error('Database query error:', error);
          return null
          // return NextResponse.json({ message: 'Internal server error' }, {status: 400});
      }

      }
      
    }),
  ],
  // Add this to your NextAuth configuration
// cookies: {
//   sessionToken: {
//     name: 'next-auth.session-token',
//     options: {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'lax',
//       path: '/',
//     },
//   },
// },
  
  callbacks: {
    async jwt({ token, user }: any) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (user && user[0]) {
        token.role = user[0].role?.toString()
        token.id = user[0].id.toString()
        token.email = user[0].email.toString()
        token.company_name = user[0].company_name?.toString()
      }
      return token
    },
    
    async session({ session, token }: any) {
      // Send properties to the client, from a provider.
      if(token){
        session.user.role = token.role
        session.user.id = token.id
        session.user.email = token.email
        session.user.company_name = token.company_name
      }
      return session
    },
    // async redirect({ url, baseUrl } : any) {
    //   if (url.startsWith("/")) return `${baseUrl}${url}`
    //   else if (new URL(url).origin === baseUrl) return url
    //   return baseUrl
    // },

    debug: process.env.NODE_ENV !== "production",
  },
  pages: {
    signIn: "/login"  // Custom login page
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
}
