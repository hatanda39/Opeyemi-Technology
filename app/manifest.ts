import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Opeyemi Technology - Professional Web Design & Development",
    short_name: "Opeyemi Tech",
    description:
      "Professional web design and development services. Creating beautiful, responsive websites that help businesses grow and succeed online.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#3B82F6",
    orientation: "portrait-primary",
    categories: ["business", "productivity", "technology"],
    lang: "en-US",
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
