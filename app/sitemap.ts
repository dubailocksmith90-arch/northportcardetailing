import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/business-config";

const BASE = BUSINESS.siteUrl;
const NOW = new Date().toISOString();

const WASH_SLUGS = [
  "touchless-car-wash",
  "interior-vacuuming",
  "unlimited-wash-plans",
  "car-waxing",
  "sealant",
  "gift-cards",
];

const HIGH_VALUE_DETAILING = [
  "ceramic-coating",
  "ceramic-coating-package",
  "full-detail-package",
  "premium-detail",
  "paint-correction",
  "express-detail",
];

const STANDARD_DETAILING = [
  "full-interior-detail",
  "leather-seat-cleaning",
  "hand-wash",
  "clay-bar-treatment",
  "paint-sealant",
  "carnauba-wax",
  "upholstery-shampoo",
  "carpet-floor-mat-cleaning",
  "odor-removal-ozone-treatment",
  "pet-hair-removal",
  "steam-cleaning",
  "headlight-restoration",
  "wheel-rim-detailing",
  "engine-bay-cleaning",
  "trim-restoration",
  "pre-sale-trade-in-detail",
  "fleet-commercial-detailing",
];

const LOCATION_SLUGS = [
  "port-charlotte",
  "venice-fl",
  "englewood-fl",
  "punta-gorda",
  "sarasota",
  "osprey-fl",
  "nokomis-fl",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Tier 1: Homepage ──────────────────────────────────────────────────
    {
      url: `${BASE}/`,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // ── Tier 2: Core conversion pages ────────────────────────────────────
    {
      url: `${BASE}/services`,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE}/contact`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // ── Tier 3: Location pages (high local SEO value) ─────────────────────
    ...LOCATION_SLUGS.map((slug) => ({
      url: `${BASE}/locations/${slug}`,
      lastModified: NOW,
      changeFrequency: "monthly" as const,
      priority: 0.88,
    })),

    // ── Tier 4: High-value wash service pages ────────────────────────────
    ...WASH_SLUGS.map((slug, i) => ({
      url: `${BASE}/services/wash/${slug}`,
      lastModified: NOW,
      changeFrequency: "monthly" as const,
      // Touchless and unlimited get a slight boost
      priority: i < 2 ? 0.85 : 0.8,
    })),

    // ── Tier 5: High-value detailing pages ───────────────────────────────
    ...HIGH_VALUE_DETAILING.map((slug) => ({
      url: `${BASE}/services/detailing/${slug}`,
      lastModified: NOW,
      changeFrequency: "monthly" as const,
      priority: 0.82,
    })),

    // ── Tier 6: Standard detailing pages ─────────────────────────────────
    ...STANDARD_DETAILING.map((slug) => ({
      url: `${BASE}/services/detailing/${slug}`,
      lastModified: NOW,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),

    // ── Tier 7: Supporting pages ──────────────────────────────────────────
    {
      url: `${BASE}/about`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${BASE}/reviews`,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE}/faq`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/gallery`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
