import { BUSINESS } from "@/lib/business-config";

interface Props {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  duration?: string;
}

const SERVICE_AREAS = [
  "North Port, FL",
  "Port Charlotte, FL",
  "Venice, FL",
  "Englewood, FL",
  "Punta Gorda, FL",
  "Sarasota, FL",
  "Osprey, FL",
  "Nokomis, FL",
];

export default function ServiceSchema({ name, description, url, serviceType, duration }: Props) {
  const fullUrl = `${BUSINESS.siteUrl}${url}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${fullUrl}/#service`,
    name,
    description,
    url: fullUrl,
    serviceType: serviceType ?? "AutomotiveService",
    category: "Automotive",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BUSINESS.siteUrl}/#localbusiness`,
      name: BUSINESS.name,
      telephone: BUSINESS.phone.e164,
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
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "https://schema.org/Monday",
          "https://schema.org/Tuesday",
          "https://schema.org/Wednesday",
          "https://schema.org/Thursday",
          "https://schema.org/Friday",
          "https://schema.org/Saturday",
          "https://schema.org/Sunday",
        ],
        opens: "07:00",
        closes: "19:00",
      },
    },
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "City",
      name: area,
    })),
    ...(duration
      ? {
          offers: {
            "@type": "Offer",
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "USD",
            },
            availability: "https://schema.org/InStock",
            validFrom: "2024-01-01",
          },
        }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
