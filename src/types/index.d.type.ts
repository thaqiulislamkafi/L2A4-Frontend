declare module "better-auth" {
  interface Session {
    user?: {
      role?: "admin" | "user"
      isPremium?: boolean
    } 
  }
}