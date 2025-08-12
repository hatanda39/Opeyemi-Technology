import { type NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase/server"

export async function POST(request: NextRequest) {
  try {
    const { id, type, action, candidateData } = await request.json()

    const tableName = type === "enrollment" ? "enrollments" : "bookings"
    const newStatus = action === "approve" ? "approved" : "rejected"

    // Update the record status
    const { data, error } = await supabaseAdmin
      .from(tableName)
      .update({ status: newStatus })
      .eq("id", id)
      .select()
      .single()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to update status" }, { status: 500 })
    }

    // Log the action
    await supabaseAdmin.from("action_logs").insert([
      {
        candidate_id: id,
        candidate_name: candidateData.full_name || candidateData.fullName,
        candidate_email: candidateData.email,
        action_type: action,
        action_details: {
          type,
          previous_status: candidateData.status || "pending",
          new_status: newStatus,
          timestamp: new Date().toISOString(),
        },
      },
    ])

    // Send notification to candidate
    const subject =
      action === "approve"
        ? `${type === "enrollment" ? "Course Enrollment" : "Service Booking"} Approved - OPEYEMI TECHNOLOGY`
        : `${type === "enrollment" ? "Course Enrollment" : "Service Booking"} Update - OPEYEMI TECHNOLOGY`

    const message =
      action === "approve"
        ? `Dear ${candidateData.full_name || candidateData.fullName},\n\nGreat news! Your ${type === "enrollment" ? "course enrollment" : "service booking"} has been approved.\n\nNext steps:\n- We will contact you within 24 hours with detailed information\n- Please keep your phone available for our call\n- Prepare any required documents\n\nThank you for choosing OPEYEMI TECHNOLOGY!\n\nBest regards,\nOPEYEMI TECHNOLOGY Team`
        : `Dear ${candidateData.full_name || candidateData.fullName},\n\nThank you for your interest in OPEYEMI TECHNOLOGY. After reviewing your ${type === "enrollment" ? "course enrollment" : "service booking"}, we need to discuss some details with you.\n\nWe will contact you shortly to provide more information.\n\nBest regards,\nOPEYEMI TECHNOLOGY Team`

    await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/send-notification`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: candidateData.email,
        subject,
        message,
      }),
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Approval error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
