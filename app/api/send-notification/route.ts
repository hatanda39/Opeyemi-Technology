import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { to, candidateName, action, course } = await request.json()

    // In a real application, you would integrate with an email service like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Nodemailer with SMTP

    // For demonstration, we'll simulate sending an email
    console.log("Sending notification email:", {
      to,
      candidateName,
      action,
      course,
    })

    // Simulate email content
    const emailContent = {
      to: to,
      from: "opeyemitechnology@gmail.com",
      subject:
        action === "approved" ? "Application Approved - OPEYEMI TECHNOLOGY" : "Application Update - OPEYEMI TECHNOLOGY",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b82f6, #10b981); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">OPEYEMI TECHNOLOGY</h1>
          </div>
          <div style="padding: 20px; background: #f9fafb;">
            <h2 style="color: #1f2937;">Dear ${candidateName},</h2>
            ${
              action === "approved"
                ? `
              <p style="color: #374151; line-height: 1.6;">
                Congratulations! Your application for <strong>${course}</strong> has been approved.
              </p>
              <p style="color: #374151; line-height: 1.6;">
                <strong>Next Steps:</strong><br>
                1. Complete your payment if not already done<br>
                2. Attend orientation session<br>
                3. Bring required materials on your first day
              </p>
              <p style="color: #374151; line-height: 1.6;">
                For any questions, please contact us at:<br>
                📞 +2348126989184<br>
                📧 opeyemitechnology@gmail.com
              </p>
            `
                : `
              <p style="color: #374151; line-height: 1.6;">
                Thank you for your interest in our <strong>${course}</strong> program. 
                We have received your application and will review it shortly.
              </p>
            `
            }
            <div style="margin-top: 30px; padding: 15px; background: #e5f3ff; border-radius: 8px;">
              <p style="margin: 0; color: #1e40af; font-weight: bold;">
                Thank you for choosing OPEYEMI TECHNOLOGY for your learning journey!
              </p>
            </div>
          </div>
        </div>
      `,
    }

    // Here you would actually send the email using your preferred service
    // For now, we'll just return success

    return NextResponse.json({
      success: true,
      message: "Notification sent successfully",
      emailContent,
    })
  } catch (error) {
    console.error("Error sending notification:", error)
    return NextResponse.json({ success: false, message: "Failed to send notification" }, { status: 500 })
  }
}
