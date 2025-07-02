/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://zippler-pi.vercel.app',
  generateRobotsTxt: true,
  
  // Disable automatic sitemap splitting
  sitemapSize: 50000, // Set very high to prevent multiple sitemaps
  
  // Configure robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      }
    ],
    // Remove additionalSitemaps since we're using single sitemap
  },
  
  // Default settings for all pages
  changefreq: 'weekly',
  priority: 0.7,
  autoLastmod: true,
  
  // Customize specific pages
  transform: async (config, path) => {
    // Skip special paths
    if (path.startsWith('/_next') || path.startsWith('/api')) return null;
    
    return {
      loc: path,
      changefreq: getChangeFreq(path),
      priority: getPriority(path),
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
  
  // Explicitly include important pages
  additionalPaths: async (config) => {
    const paths = [
      '/about',
      '/contact',
      '/age-calculator',
      '/pet-age-calculator',
      '/anniversary-countdown',
      '/birthday-countdown',
      '/date-calculator',
      '/leap-year-checker',
      '/night-calculator',
      '/sleep-calculator',
      '/sleep-checker',
      '/stopwatch',
      '/time-calculator',
      '/weekday-finder'
    ];
    
    return Promise.all(
      paths.map(path => config.transform(config, path))
    );
  }
};

// Helper functions
function getChangeFreq(path) {
  if (path === '/') return 'weekly';
  if (path.includes('calculator')) return 'weekly';
  return 'monthly';
}

function getPriority(path) {
  if (path === '/') return 1.0;
  if (path.includes('calculator')) return 0.9;
  return 0.7;
}