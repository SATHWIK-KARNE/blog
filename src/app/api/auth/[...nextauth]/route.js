import { authOptions } from "@/utils/auth"
import NextAuth from "next-auth"

// while using nextJs route we should specify which method we are using
const handler=  NextAuth(authOptions)
export {handler as GET, handler as POST} 