import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://opeyemitechnology.com"),
  title: {
    default: "Opeyemi Technology - Professional Web Design & Development Services",
    template: "%s | Opeyemi Technology",
  },
  description:
    "Transform your business with stunning, responsive websites that captivate your audience and drive results. Professional web design services in Lagos, Nigeria, serving clients worldwide.",
  keywords: [
    "web design",
    "web development",
    "responsive design",
    "UI/UX design",
    "business websites",
    "e-commerce development",
    "SEO optimization",
    "Lagos web designer",
    "Nigeria web development",
    "professional websites",
    "custom web solutions",
    "mobile-friendly websites",
    "website redesign",
    "landing page design",
    "corporate websites",
  ],
  authors: [
    {
      name: "Opeyemi Technology",
      url: "https://opeyemitechnology.com",
    },
  ],
  creator: "Opeyemi Technology",
  publisher: "Opeyemi Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://opeyemitechnology.com",
    siteName: "Opeyemi Technology",
    title: "Professional Web Design & Development Services",
    description:
      "Transform your business with stunning, responsive websites that captivate your audience and drive results. Professional web design services serving clients worldwide.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Opeyemi Technology - Professional Web Design Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Web Design & Development Services",
    description:
      "Transform your business with stunning, responsive websites that captivate your audience and drive results.",
    images: ["/og-image.png"],
    creator: "@opeyemitech",
    site: "@opeyemitech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE,
  },
  alternates: {
    canonical: "https://opeyemitechnology.com",
  },
  category: "technology",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Microsoft Tile */}
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Opeyemi Technology",
              description: "Professional web design and development services",
              url: "https://opeyemitechnology.com",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+234-812-698-9184",
                contactType: "customer service",
                email: "opeyemitechnology@gmail.com",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
                addressCountry: "Nigeria",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
