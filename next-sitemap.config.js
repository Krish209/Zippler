/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://zippler-pi.vercel.app',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // exclude the default if not using
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://zippler-pi.vercel.app/sitemap-0.xml',
    ],
  },
  // Prevent the default sitemap.xml from being generated as a sitemap
  transform: async (config, path) => {
    if (path === '/sitemap.xml') return null; // Skip the index file
    
    return {
      loc: path,
      changefreq: path === '/' ? 'weekly' : 'monthly',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/about'),
    await config.transform(config, '/contact'),
    // Add all your calculator pages with custom priorities
    ...['/age-calculator', '/pet-age-calculator'].map(
      path => config.transform(config, path, {
        changefreq: 'weekly',
        priority: 0.9,
      })
    ),
  ],
}