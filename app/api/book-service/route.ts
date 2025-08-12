import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json()

    // Here you would typically save to a database
    // For now, we'll just log the data and send emails

    console.log("New service booking:", bookingData)

    // In a real application, you would:
    // 1. Save booking data to database
    // 2. Send confirmation email to customer
    // 3. Send notification email to admin

    // Simulate email sending (replace with actual email service)
    const adminEmailContent = `
      New Service Booking Received:
      
      Name: ${bookingData.fullName}
      Phone: ${bookingData.phone}
      Email: ${bookingData.email}
      Service: ${bookingData.serviceType}
      Date: ${bookingData.preferredDate}
      Time: ${bookingData.preferredTime}
      Address: ${bookingData.address}
      Description: ${bookingData.description}
    `

    const customerEmailContent = `
      Dear ${bookingData.fullName},
      
      Thank you for booking our service. We have received your request for ${bookingData.serviceType} on ${bookingData.preferredDate} at ${bookingData.preferredTime}.
      
      We will contact you soon to confirm your appointment.
      
      Best regards,
      OPEYEMI TECHNOLOGY Team
    `

    console.log("Admin notification:", adminEmailContent)
    console.log("Customer confirmation:", customerEmailContent)

    return NextResponse.json({
      success: true,
      message: "Booking submitted successfully",
    })
  } catch (error) {
    console.error("Error processing booking:", error)
    return NextResponse.json({ success: false, message: "Error processing booking" }, { status: 500 })
  }
}
