import NextAuth from "next-auth"

declare module "next-auth" {

  interface User {
    role : string,
    id : string,
    email : string,
    company_name : string,
  }

  interface Session {
    user: {
      role : string,
      id : string,
      email : string,
      company_name : string,
    } & DefaultSession["user"]
  }

  interface JWT {
    role : string,
    id : string,
    email : string,
    company_name : string,
  }
}