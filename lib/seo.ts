import type { Metadata } from "next"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
}

export function generateSEO({
  title,
  description = "Transform your business with stunning, responsive websites that captivate your audience and drive results. Professional web design services serving clients worldwide.",
  keywords = [],
  image = "/og-image.png",
  url = "",
  type = "website",
  publishedTime,
  modifiedTime,
}: SEOProps = {}): Metadata {
  const baseUrl = "https://opeyemitechnology.com"
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl

  const defaultKeywords = [
    "web design",
    "web development",
    "responsive design",
    "UI/UX design",
    "business websites",
    "e-commerce development",
    "SEO optimization",
    "Lagos web designer",
    "Nigeria web development",
  ]

  const allKeywords = [...defaultKeywords, ...keywords]

  return {
    title: title
      ? `${title} | Opeyemi Technology`
      : "Opeyemi Technology - Professional Web Design & Development Services",
    description,
    keywords: allKeywords,
    openGraph: {
      type,
      locale: "en_US",
      url: fullUrl,
      siteName: "Opeyemi Technology",
      title: title || "Professional Web Design & Development Services",
      description,
      images: [
        {
          url: `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title || "Opeyemi Technology - Professional Web Design Services",
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: title || "Professional Web Design & Development Services",
      description,
      images: [`${baseUrl}${image}`],
      creator: "@opeyemitech",
      site: "@opeyemitech",
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}

// Page-specific SEO configurations
export const pageSEO = {
  home: generateSEO({
    title: "Professional Web Design & Development Services",
    description:
      "Transform your business with stunning, responsive websites that captivate your audience and drive results. Professional web design services in Lagos, Nigeria, serving clients worldwide.",
    keywords: ["professional web design", "business websites", "responsive design", "Lagos web designer"],
  }),

  login: generateSEO({
    title: "Login to Your Account",
    description: "Access your Opeyemi Technology dashboard to manage your web design projects and track progress.",
    url: "/login",
  }),

  signup: generateSEO({
    title: "Create Your Account",
    description: "Join Opeyemi Technology to start your web design project. Professional websites that drive results.",
    url: "/signup",
  }),

  dashboard: generateSEO({
    title: "Project Dashboard",
    description: "Manage your web design projects, track progress, and collaborate with our team.",
    url: "/dashboard",
  }),

  apiDocs: generateSEO({
    title: "API Documentation",
    description:
      "Integrate Opeyemi Technology's web development services into your applications with our comprehensive API.",
    url: "/api-docs",
    keywords: ["API documentation", "web development API", "integration"],
  }),
}
