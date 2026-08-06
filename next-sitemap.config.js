/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://northportcarwash.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [],
  },
  additionalPaths: async (config) => [
    // Wash services
    await config.transform(config, "/services/wash/touchless-car-wash"),
    await config.transform(config, "/services/wash/interior-vacuuming"),
    await config.transform(config, "/services/wash/car-waxing"),
    await config.transform(config, "/services/wash/sealant"),
    await config.transform(config, "/services/wash/unlimited-wash-plans"),
    await config.transform(config, "/services/wash/gift-cards"),
    // Interior detailing
    await config.transform(config, "/services/detailing/full-interior-detail"),
    await config.transform(config, "/services/detailing/leather-seat-cleaning"),
    await config.transform(config, "/services/detailing/upholstery-shampoo"),
    await config.transform(config, "/services/detailing/carpet-floor-mat-cleaning"),
    await config.transform(config, "/services/detailing/odor-removal-ozone-treatment"),
    await config.transform(config, "/services/detailing/pet-hair-removal"),
    await config.transform(config, "/services/detailing/steam-cleaning"),
    // Exterior detailing
    await config.transform(config, "/services/detailing/hand-wash"),
    await config.transform(config, "/services/detailing/clay-bar-treatment"),
    await config.transform(config, "/services/detailing/paint-correction"),
    await config.transform(config, "/services/detailing/ceramic-coating"),
    await config.transform(config, "/services/detailing/carnauba-wax"),
    await config.transform(config, "/services/detailing/paint-sealant"),
    await config.transform(config, "/services/detailing/headlight-restoration"),
    await config.transform(config, "/services/detailing/wheel-rim-detailing"),
    await config.transform(config, "/services/detailing/engine-bay-cleaning"),
    await config.transform(config, "/services/detailing/trim-restoration"),
    // Detailing packages
    await config.transform(config, "/services/detailing/express-detail"),
    await config.transform(config, "/services/detailing/premium-detail"),
    await config.transform(config, "/services/detailing/full-detail-package"),
    await config.transform(config, "/services/detailing/ceramic-coating-package"),
    await config.transform(config, "/services/detailing/pre-sale-trade-in-detail"),
    await config.transform(config, "/services/detailing/fleet-commercial-detailing"),
    // Location pages
    await config.transform(config, "/locations/port-charlotte"),
    await config.transform(config, "/locations/venice-fl"),
    await config.transform(config, "/locations/englewood-fl"),
    await config.transform(config, "/locations/punta-gorda"),
    await config.transform(config, "/locations/sarasota"),
    await config.transform(config, "/locations/osprey-fl"),
    await config.transform(config, "/locations/nokomis-fl"),
  ],
  transform: async (config, path) => {
    // Boost priority for key pages
    const highPriority = ["/", "/services", "/contact"];
    const mediumHighPriority = [
      "/locations/port-charlotte",
      "/locations/sarasota",
      "/services/detailing/ceramic-coating",
      "/services/detailing/full-detail-package",
      "/services/wash/touchless-car-wash",
      "/services/wash/unlimited-wash-plans",
    ];

    let priority = config.priority;
    if (highPriority.includes(path)) priority = 1.0;
    else if (mediumHighPriority.includes(path)) priority = 0.85;
    else if (path.startsWith("/locations/")) priority = 0.8;
    else if (path.startsWith("/services/")) priority = 0.75;

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
