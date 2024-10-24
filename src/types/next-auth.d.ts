import NextAuth from "next-auth"

declare module "next-auth" {

  export interface User {
    role : string,
    id : string,
    email : string,
  }

  interface Session {
    user: {
      id : string,
      role : string,
      email : string,
    } & DefaultSession["user"]
  }

  // interface JWT {
  //   role : string,
  //   id : string,
  //   email : string,
  // }
}