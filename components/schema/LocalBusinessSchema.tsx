import { BUSINESS, HOURS, type DayKey, REVIEWS } from "@/lib/business-config";

const DAY_MAP: Record<DayKey, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

interface Props {
  areaServed?: string[];
  additionalType?: string;
}

export default function LocalBusinessSchema({ areaServed, additionalType }: Props) {
  const openingHoursSpec = (Object.entries(HOURS) as [DayKey, typeof HOURS[DayKey]][])
    .filter(([, h]) => !h.closed)
    .map(([day, h]) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${DAY_MAP[day]}`,
      opens: h.open,
      closes: h.close,
    }));

  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutomotiveBusiness"],
    ...(additionalType ? { additionalType } : {}),
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: BUSINESS.siteUrl,
    telephone: BUSINESS.phone.e164,
    priceRange: BUSINESS.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating.value,
      reviewCount: BUSINESS.rating.count,
      bestRating: BUSINESS.rating.max,
    },
    review: REVIEWS.slice(0, 3).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      datePublished: r.date,
      reviewBody: r.text,
    })),
    openingHoursSpecification: openingHoursSpec,
    areaServed: areaServed ?? [
      "North Port, FL",
      "Port Charlotte, FL",
      "Venice, FL",
      "Englewood, FL",
      "Punta Gorda, FL",
      "Sarasota, FL",
    ],
    sameAs: [BUSINESS.social.googleBusinessProfile, BUSINESS.social.facebook],
    hasMap: BUSINESS.mapUrl,
    paymentAccepted: "Cash, Credit Card, Debit Card",
    currenciesAccepted: "USD",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
