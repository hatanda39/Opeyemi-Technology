import { type NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const enrollmentData = {
      full_name: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      address: formData.get("address") as string,
      course: formData.get("course") as string,
      passport_url: (formData.get("passportUrl") as string) || null,
    }

    // Validate required fields
    if (!enrollmentData.full_name || !enrollmentData.email || !enrollmentData.phone || !enrollmentData.course) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Insert into database
    const { data, error } = await supabaseAdmin.from("enrollments").insert([enrollmentData]).select().single()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to save enrollment" }, { status: 500 })
    }

    // Send confirmation email to applicant
    await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/send-notification`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: enrollmentData.email,
        subject: "Course Enrollment Received - OPEYEMI TECHNOLOGY",
        message: `Dear ${enrollmentData.full_name},\n\nThank you for enrolling in our ${enrollmentData.course} course. We have received your application and will review it shortly.\n\nWe will contact you within 24-48 hours with next steps.\n\nBest regards,\nOPEYEMI TECHNOLOGY Team`,
      }),
    })

    // Send notification to admin
    await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/send-notification`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "opeyemitechnology@gmail.com",
        subject: "New Course Enrollment",
        message: `New enrollment received:\n\nName: ${enrollmentData.full_name}\nEmail: ${enrollmentData.email}\nPhone: ${enrollmentData.phone}\nCourse: ${enrollmentData.course}\nAddress: ${enrollmentData.address}`,
      }),
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Enrollment error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from("enrollments")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to fetch enrollments" }, { status: 500 })
    }

    return NextResponse.json({ enrollments: data })
  } catch (error) {
    console.error("Fetch error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
