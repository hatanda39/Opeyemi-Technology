import { type NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase/server"

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json()

    const dbBookingData = {
      full_name: bookingData.fullName,
      email: bookingData.email,
      phone: bookingData.phone,
      address: bookingData.address,
      service_type: bookingData.serviceType,
      preferred_date: bookingData.preferredDate || null,
      preferred_time: bookingData.preferredTime || null,
      problem_description: bookingData.description || null,
    }

    // Validate required fields
    if (!dbBookingData.full_name || !dbBookingData.email || !dbBookingData.phone || !dbBookingData.service_type) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const { data, error } = await supabaseAdmin.from("bookings").insert([dbBookingData]).select().single()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to save booking" }, { status: 500 })
    }

    // Send confirmation email to customer
    await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/send-notification`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: bookingData.email,
        subject: "Service Booking Confirmation - OPEYEMI TECHNOLOGY",
        message: `Dear ${bookingData.fullName},\n\nThank you for booking our ${bookingData.serviceType} service${bookingData.preferredDate ? ` on ${bookingData.preferredDate}` : ""}${bookingData.preferredTime ? ` at ${bookingData.preferredTime}` : ""}.\n\nWe have received your request and will contact you within 24 hours to confirm your appointment.\n\nService Details:\n- Service: ${bookingData.serviceType}\n- Address: ${bookingData.address}\n${bookingData.description ? `- Description: ${bookingData.description}\n` : ""}\nBest regards,\nOPEYEMI TECHNOLOGY Team\nPhone: +2348126989184`,
      }),
    })

    // Send notification email to admin
    await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/send-notification`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "opeyemitechnology@gmail.com",
        subject: "New Service Booking Received",
        message: `New Service Booking:\n\nName: ${bookingData.fullName}\nPhone: ${bookingData.phone}\nEmail: ${bookingData.email}\nService: ${bookingData.serviceType}\nPreferred Date: ${bookingData.preferredDate || "Not specified"}\nPreferred Time: ${bookingData.preferredTime || "Not specified"}\nAddress: ${bookingData.address}\nDescription: ${bookingData.description || "None provided"}`,
      }),
    })

    return NextResponse.json({
      success: true,
      message: "Booking submitted successfully",
      data,
    })
  } catch (error) {
    console.error("Error processing booking:", error)
    return NextResponse.json({ success: false, message: "Error processing booking" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin.from("bookings").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 })
    }

    return NextResponse.json({ bookings: data })
  } catch (error) {
    console.error("Fetch error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
