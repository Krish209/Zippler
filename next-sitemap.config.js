/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://zippler-pi.vercel.app",
  generateRobotsTxt: true, // (optional) generates robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: ["https://zippler-pi.vercel.app/sitemap.xml"],
  },
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as https://example.com/path
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  // Additional configuration for specific pages
  additionalPaths: async (config) => [
    await config.transform(config, "/about", {
      changefreq: "monthly",
      priority: 0.8,
    }),
    await config.transform(config, "/contact", {
      changefreq: "monthly",
      priority: 0.8,
    }),
    // Add all your calculator pages
    ...[
      "/age-calculator",
      "/pet-age-calculator",
      "/anniversary-countdown",
      "/birthday-countdown",
      "/date-calculator",
      "/leap-year-checker",
      "/night-calculator",
      "/sleep-calculator",
      "/sleep-checker",
      "/stopwatch",
      "/time-calculator",
      "/weekday-finder",
    ].map((path) =>
      config.transform(config, path, {
        changefreq: "weekly",
        priority:
          path === "/age-calculator" ||
          path === "/date-calculator" ||
          path === "/time-calculator"
            ? 0.9
            : 0.8,
      })
    ),
  ],
};
