"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export async function signUp(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      data: {
        full_name: formData.get("full_name") as string,
      },
    },
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/", "layout")
  redirect("/auth/verify-email")
}

export async function signIn(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/", "layout")
  redirect("/dashboard")
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  revalidatePath("/", "layout")
  redirect("/")
}

export async function getCurrentUser() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return null

  const { data: profile } = await supabase.from("user_profiles").select("*").eq("id", user.id).single()

  return { ...user, profile }
}

export async function updateProfile(formData: FormData) {
  const supabase = await createClient()
  const user = await getCurrentUser()

  if (!user) {
    throw new Error("Not authenticated")
  }

  const updates = {
    full_name: formData.get("full_name") as string,
    phone: formData.get("phone") as string,
    address: formData.get("address") as string,
    updated_at: new Date().toISOString(),
  }

  const { error } = await supabase.from("user_profiles").update(updates).eq("id", user.id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath("/dashboard")
}
