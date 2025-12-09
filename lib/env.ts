// Environment variables validation
export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  NEXT_PUBLIC_HOTJAR_ID: process.env.NEXT_PUBLIC_HOTJAR_ID,
  DATABASE_URL: process.env.DATABASE_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  EMAIL_SERVER_HOST: process.env.EMAIL_SERVER_HOST,
  EMAIL_SERVER_PORT: process.env.EMAIL_SERVER_PORT,
  EMAIL_SERVER_USER: process.env.EMAIL_SERVER_USER,
  EMAIL_SERVER_PASSWORD: process.env.EMAIL_SERVER_PASSWORD,
  EMAIL_FROM: process.env.EMAIL_FROM || "opeyemitechnology@gmail.com",
} as const

// Validate required environment variables
export function validateEnv() {
  const requiredEnvVars = ["NEXT_PUBLIC_APP_URL"]

  for (const envVar of requiredEnvVars) {
    if (!env[envVar as keyof typeof env]) {
      throw new Error(`Missing required environment variable: ${envVar}`)
    }
  }
}
