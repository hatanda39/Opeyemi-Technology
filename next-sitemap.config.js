/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://opeyemitechnology.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/dashboard/*", "/api/*", "/admin/*", "/private/*", "/server-sitemap.xml"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard/", "/api/", "/admin/", "/private/", "/_next/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/dashboard/", "/api/", "/admin/", "/private/"],
      },
    ],
    additionalSitemaps: ["https://opeyemitechnology.com/server-sitemap.xml"],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    const customConfig = {
      "/": {
        priority: 1.0,
        changefreq: "weekly",
      },
      "/login": {
        priority: 0.8,
        changefreq: "monthly",
      },
      "/signup": {
        priority: 0.8,
        changefreq: "monthly",
      },
      "/api-docs": {
        priority: 0.6,
        changefreq: "monthly",
      },
      "/forgot-password": {
        priority: 0.3,
        changefreq: "yearly",
      },
    }

    const pageConfig = customConfig[path] || {
      priority: 0.7,
      changefreq: "weekly",
    }

    return {
      loc: path,
      lastmod: new Date().toISOString(),
      priority: pageConfig.priority,
      changefreq: pageConfig.changefreq,
    }
  },
}
