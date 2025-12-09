const CACHE_NAME = "opeyemi-technology-v1.0.0"
const STATIC_CACHE_NAME = "opeyemi-static-v1.0.0"
const DYNAMIC_CACHE_NAME = "opeyemi-dynamic-v1.0.0"

// Assets to cache immediately
const STATIC_ASSETS = [
  "/",
  "/login",
  "/signup",
  "/manifest.json",
  "/favicon.ico",
  "/apple-touch-icon.png",
  "/images/ecommerce-sample.png",
  "/images/corporate-website-sample.png",
  "/images/portfolio-website-sample.png",
  "/images/restaurant-website-sample.png",
  "/images/saas-dashboard-sample.png",
  "/images/educational-platform-sample.png",
]

// Install event - cache static assets
self.addEventListener("install", (event) => {
  console.log("Service Worker installing...")
  event.waitUntil(
    caches
      .open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log("Caching static assets")
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => {
        return self.skipWaiting()
      }),
  )
})

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("Service Worker activating...")
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
              console.log("Deleting old cache:", cacheName)
              return caches.delete(cacheName)
            }
          }),
        )
      })
      .then(() => {
        return self.clients.claim()
      }),
  )
})

// Fetch event - serve from cache, fallback to network
self.addEventListener("fetch", (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== "GET") {
    return
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return
  }

  // Handle API requests differently
  if (url.pathname.startsWith("/api/")) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful API responses for a short time
          if (response.status === 200) {
            const responseClone = response.clone()
            caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
              cache.put(request, responseClone)
            })
          }
          return response
        })
        .catch(() => {
          // Return cached version if available
          return caches.match(request)
        }),
    )
    return
  }

  // Handle static assets and pages
  event.respondWith(
    caches
      .match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse
        }

        return fetch(request).then((response) => {
          // Don't cache non-successful responses
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response
          }

          // Clone the response
          const responseToCache = response.clone()

          // Cache the response
          caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache)
          })

          return response
        })
      })
      .catch(() => {
        // Return offline page for navigation requests
        if (request.mode === "navigate") {
          return caches.match("/")
        }
      }),
  )
})

// Background sync for form submissions
self.addEventListener("sync", (event) => {
  if (event.tag === "contact-form-sync") {
    event.waitUntil(
      // Handle offline form submissions
      syncContactForms(),
    )
  }
})

async function syncContactForms() {
  // Implementation for syncing offline form submissions
  console.log("Syncing contact forms...")
}

// Push notifications (if needed in the future)
self.addEventListener("push", (event) => {
  if (event.data) {
    const data = event.data.json()
    const options = {
      body: data.body,
      icon: "/android-chrome-192x192.png",
      badge: "/android-chrome-192x192.png",
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey,
      },
      actions: [
        {
          action: "explore",
          title: "View Details",
          icon: "/android-chrome-192x192.png",
        },
        {
          action: "close",
          title: "Close",
          icon: "/android-chrome-192x192.png",
        },
      ],
    }

    event.waitUntil(self.registration.showNotification(data.title, options))
  }
})
