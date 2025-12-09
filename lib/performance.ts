// Performance monitoring and optimization utilities

export const reportWebVitals = (metric: any) => {
  // Log to console in development
  if (process.env.NODE_ENV === "development") {
    console.log(metric)
  }

  // Send to analytics in production
  if (process.env.NODE_ENV === "production") {
    // Send to your analytics service
    // Example: sendToAnalytics(metric)
  }
}

// Lazy loading utility
export const lazyLoad = (callback: () => void, delay = 100) => {
  if (typeof window !== "undefined") {
    const timer = setTimeout(callback, delay)
    return () => clearTimeout(timer)
  }
}

// Image optimization helper
export const getOptimizedImageUrl = (src: string, width: number, height: number) => {
  if (src.startsWith("/placeholder.svg")) {
    return `${src}?height=${height}&width=${width}`
  }
  return src
}

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window !== "undefined") {
    // Preload critical fonts
    const fontLink = document.createElement("link")
    fontLink.rel = "preload"
    fontLink.href = "/fonts/inter-var.woff2"
    fontLink.as = "font"
    fontLink.type = "font/woff2"
    fontLink.crossOrigin = "anonymous"
    document.head.appendChild(fontLink)

    // Preload critical images
    const heroImage = new Image()
    heroImage.src = "/hero-image.webp"
  }
}

// Service Worker registration
export const registerServiceWorker = () => {
  if (typeof window !== "undefined" && "serviceWorker" in navigator && process.env.NODE_ENV === "production") {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration)
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError)
      })
  }
}
