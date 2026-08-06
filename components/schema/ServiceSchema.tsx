import { BUSINESS } from "@/lib/business-config";

interface Props {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}

export default function ServiceSchema({ name, description, url, serviceType }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BUSINESS.siteUrl}${url}`,
    serviceType: serviceType ?? "AutomotiveService",
    provider: {
      "@type": "LocalBusiness",
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
    },
    areaServed: {
      "@type": "City",
      name: "North Port",
      containedInPlace: { "@type": "State", name: "Florida" },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
