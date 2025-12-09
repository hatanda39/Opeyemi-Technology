// Enhanced analytics with error tracking and performance monitoring

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    hj: (...args: any[]) => void
  }
}

export const GA_TRACKING_ID =
  typeof window !== "undefined" ? process.env.NEXT_PUBLIC_GA_ID : process.env.NEXT_PUBLIC_GA_ID

// Initialize analytics
export const initAnalytics = () => {
  if (typeof window === "undefined") return

  if (GA_TRACKING_ID && GA_TRACKING_ID !== "undefined") {
    // Track initial page load
    pageview(window.location.pathname + window.location.search)

    // Track performance metrics
    trackWebVitals()
  }
}

// Log page views
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag && GA_TRACKING_ID && GA_TRACKING_ID !== "undefined") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
      custom_map: {
        custom_parameter_1: "page_type",
      },
    })
  }
}

export const event = ({
  action,
  category,
  label,
  value,
  custom_parameters = {},
}: {
  action: string
  category: string
  label?: string
  value?: number
  custom_parameters?: Record<string, any>
}) => {
  if (typeof window !== "undefined" && window.gtag && GA_TRACKING_ID && GA_TRACKING_ID !== "undefined") {
    try {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
        ...custom_parameters,
      })
    } catch (error) {
      console.warn("Analytics event failed:", error)
    }
  }
}

// Track contact form submissions
export const trackContactForm = (formData: {
  name: string
  email: string
  company?: string
}) => {
  event({
    action: "submit_form",
    category: "engagement",
    label: "contact_form",
    custom_parameters: {
      form_type: "contact",
      has_company: !!formData.company,
      user_type: formData.company ? "business" : "individual",
    },
  })

  // Track in Hotjar if available
  if (typeof window !== "undefined" && window.hj) {
    try {
      window.hj("event", "contact_form_submit")
    } catch (error) {
      console.warn("Hotjar tracking failed:", error)
    }
  }
}

// Track project creation
export const trackProjectCreation = (projectType: string) => {
  event({
    action: "create_project",
    category: "conversion",
    label: projectType,
    custom_parameters: {
      project_type: projectType,
    },
  })
}

// Track user registration
export const trackUserRegistration = (method = "email") => {
  event({
    action: "sign_up",
    category: "conversion",
    label: "user_registration",
    custom_parameters: {
      method: method,
    },
  })
}

// Track login
export const trackLogin = (method = "email") => {
  event({
    action: "login",
    category: "engagement",
    label: "user_login",
    custom_parameters: {
      method: method,
    },
  })
}

// Track portfolio interactions
export const trackPortfolioView = (projectName: string) => {
  event({
    action: "view_portfolio_item",
    category: "engagement",
    label: projectName,
    custom_parameters: {
      content_type: "portfolio_item",
    },
  })
}

// Track service interest
export const trackServiceInterest = (serviceName: string) => {
  event({
    action: "service_interest",
    category: "engagement",
    label: serviceName,
    custom_parameters: {
      service_type: serviceName,
    },
  })
}

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  event({
    action: "scroll",
    category: "engagement",
    label: `${percentage}%`,
    value: percentage,
    custom_parameters: {
      scroll_depth: percentage,
    },
  })
}

// Track errors
export const trackError = (error: Error, errorInfo?: any) => {
  event({
    action: "exception",
    category: "error",
    label: error.message,
    custom_parameters: {
      error_name: error.name,
      error_stack: error.stack?.substring(0, 500), // Limit stack trace length
      error_info: errorInfo ? JSON.stringify(errorInfo).substring(0, 500) : undefined,
    },
  })
}

export const trackWebVitals = () => {
  if (typeof window === "undefined" || !GA_TRACKING_ID || GA_TRACKING_ID === "undefined") return

  // Web vitals tracking disabled for now
  console.log("Web vitals tracking disabled")
}

// Track page performance
export const trackPagePerformance = () => {
  if (typeof window === "undefined" || !window.performance) return

  window.addEventListener("load", () => {
    setTimeout(() => {
      const perfData = window.performance.timing
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart
      const domReadyTime = perfData.domContentLoadedEventEnd - perfData.navigationStart

      event({
        action: "page_timing",
        category: "performance",
        label: "page_load_time",
        value: pageLoadTime,
        custom_parameters: {
          dom_ready_time: domReadyTime,
          page_load_time: pageLoadTime,
        },
      })
    }, 0)
  })
}
