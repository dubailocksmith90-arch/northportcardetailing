import { BUSINESS } from "@/lib/business-config";

export default function WebsiteSchema() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${BUSINESS.siteUrl}/#website`,
      name: BUSINESS.name,
      url: BUSINESS.siteUrl,
      description: BUSINESS.description,
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BUSINESS.siteUrl}/services?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${BUSINESS.siteUrl}/#organization`,
      name: BUSINESS.name,
      alternateName: "North Port Car Wash & Detailing",
      url: BUSINESS.siteUrl,
      logo: {
        "@type": "ImageObject",
        "@id": `${BUSINESS.siteUrl}/#logo`,
        url: `${BUSINESS.siteUrl}/og-default.jpg`,
        width: 1200,
        height: 630,
        caption: "North Port Car Wash",
      },
      image: `${BUSINESS.siteUrl}/og-default.jpg`,
      telephone: BUSINESS.phone.e164,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.city,
        addressRegion: BUSINESS.address.state,
        postalCode: BUSINESS.address.zip,
        addressCountry: BUSINESS.address.country,
      },
      sameAs: [
        BUSINESS.social.googleBusinessProfile,
        BUSINESS.social.facebook,
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: BUSINESS.phone.e164,
        contactType: "customer service",
        areaServed: "US-FL",
        availableLanguage: "English",
        hoursAvailable: {
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
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
