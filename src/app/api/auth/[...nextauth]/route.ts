import NextAuth, {NextAuthOptions} from "next-auth";
import { authOptions } from "./options";

const handlers = NextAuth(authOptions as NextAuthOptions);

export { handlers as GET, handlers as POST };
