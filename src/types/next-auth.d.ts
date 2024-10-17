import NextAuth from "next-auth"

declare module "next-auth" {

  export interface User {
    role : string,
    id : string,
    email : string,
    company_name : string,
    sessionExtend : string,
  }

  interface Session {
    user: {
      role : string,
      id : string,
      email : string,
      company_name : string,
    sessionExtend : string,
    } & DefaultSession["user"]
    sessionExtend : string,
  }

  interface JWT {
    role : string,
    id : string,
    email : string,
    company_name : string,
    sessionExtend : string,
  }
}