import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  console.log("[v0] Auth callback triggered")

  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get("code")
  const next = searchParams.get("next") ?? "/dashboard"

  console.log("[v0] Callback params:", { code: code ? "present" : "missing", next, origin })

  if (!code) {
    console.log("[v0] No verification code provided")
    return NextResponse.redirect(`${origin}/auth/verification-error?error=no_code`)
  }

  try {
    const supabase = await createClient()
    console.log("[v0] Supabase client created, exchanging code for session")

    const { data, error } = await supabase.auth.exchangeCodeForSession(code)

    if (error) {
      console.log("[v0] Auth exchange error:", error.message)
      return NextResponse.redirect(`${origin}/auth/verification-error?error=${encodeURIComponent(error.message)}`)
    }

    if (data?.user) {
      console.log("[v0] User verified successfully:", data.user.email)

      const { error: profileError } = await supabase.from("user_profiles").upsert({
        id: data.user.id,
        email: data.user.email,
        full_name: data.user.user_metadata?.full_name || "",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })

      if (profileError) {
        console.log("[v0] Profile creation error:", profileError.message)
      }

      return NextResponse.redirect(`${origin}/auth/verification-success`)
    }

    console.log("[v0] No user data returned after verification")
    return NextResponse.redirect(`${origin}/auth/verification-error?error=no_user_data`)
  } catch (error) {
    console.log("[v0] Unexpected error in auth callback:", error)
    return NextResponse.redirect(`${origin}/auth/verification-error?error=server_error`)
  }
}
