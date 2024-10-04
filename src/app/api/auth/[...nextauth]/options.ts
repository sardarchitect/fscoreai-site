import Credentials from "next-auth/providers/credentials";

import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

import { query } from '@/src/lib/db';


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
          // const result = await query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);
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
  pages: {
    signIn: "/login"  // Custom login page
  },
  secret: process.env.AUTH_SECRET,

  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV !== "production",
};
