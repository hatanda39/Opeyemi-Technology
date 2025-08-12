import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Opeyemi Technology, Abeokuta - Computer Services & Training",
  description:
    "Professional computer repairs, laptop sales, software installation, networking services, and technology training courses in Abeokuta, Ogun State. Learn Microsoft Office, Graphics Design, and Coding.",
  keywords:
    "computer repair Abeokuta, laptop sales Ogun State, Microsoft Office training, graphics design course, coding bootcamp Nigeria, networking services, software installation",
  authors: [{ name: "Opeyemi Technology" }],
  creator: "Opeyemi Technology",
  publisher: "Opeyemi Technology",
  robots: "index, follow",
  openGraph: {
    title: "Opeyemi Technology, Abeokuta - Computer Services & Training",
    description: "Professional computer services and technology training in Abeokuta, Ogun State",
    type: "website",
    locale: "en_NG",
    siteName: "Opeyemi Technology",
  },
  twitter: {
    card: "summary_large_image",
    title: "Opeyemi Technology, Abeokuta - Computer Services & Training",
    description: "Professional computer services and technology training in Abeokuta, Ogun State",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
