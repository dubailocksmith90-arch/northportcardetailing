import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business-config";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Trim & Plastic Restoration | Faded Bumper Restoration North Port FL",
  description:
    "Plastic trim and bumper restoration at North Port Car Wash. Revives faded, chalky, gray plastic trim to a rich dark finish. Florida UV protection included. North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/detailing/trim-restoration` },
};

export default function TrimRestorationPage() {
  return (
    <ServiceDetailPage
      slug="trim-restoration"
      category="detailing"
      badge="Exterior Detailing · By Appointment"
      name="Trim & Plastic Restoration"
      tagline="Bring back the rich dark finish that Florida's UV has faded to gray."
      description="Florida's sun fades and chalks unpainted black plastic trim, rubber moldings, and bumper panels rapidly — sometimes within a year or two of purchase. Our trim restoration treatment uses penetrating polymer compounds designed specifically for oxidized plastic to restore the original rich, dark appearance. We then apply a UV-protective coat to slow future fading."
      included={[
        "Surface cleaning of all affected plastic and rubber trim",
        "Oxidation removal and surface preparation",
        "Professional plastic restoration compound application",
        "Buffing to an even, dark finish",
        "UV-protective coat to extend results",
        "Door moldings, bumper trim, wheel arch surrounds, and side mirror housings",
      ]}
      notIncluded={[
        { label: "Painted plastic (different process — call to confirm)", href: "/contact" },
        { label: "Chrome and metal trim (see full detail package)", href: "/services/detailing/full-detail-package" },
      ]}
      notIncludedNote="This service covers unpainted black/gray plastic and rubber trim:"
      duration="45–90 minutes (varies by extent)"
      ctaType="appointment"
      faqTitle="Trim Restoration — Common Questions"
      faqs={[
        {
          question: "Can faded plastic trim really be restored?",
          answer:
            "In most cases, yes — significantly. Plastic trim that looks faded gray and chalky typically still has good material underneath the oxidized surface. Professional restoration compounds penetrate the plastic and restore a rich, dark finish. The more aggressively faded the trim, the more dramatic the improvement.",
        },
        {
          question: "How long do results last?",
          answer:
            "With the UV protective coat we apply after restoration, results typically last 6–12 months in Florida's climate before the trim begins to show fading again. Annual treatment maintains the appearance. Some customers prefer to use a quick trim dressing between professional treatments.",
        },
        {
          question: "Does it work on textured plastic?",
          answer:
            "Yes — most factory plastic trim is textured, and the restoration process works well on textured surfaces. We work the product into the texture for even coverage and a consistent finish.",
        },
        {
          question: "Is trim restoration worth it vs. replacing the trim?",
          answer:
            "In most cases, restoration is much more cost-effective than replacement — especially for OEM trim pieces that can be expensive and difficult to find for older vehicles. If the trim is cracked or physically damaged, replacement may be necessary, but for UV fading and oxidation alone, restoration delivers excellent results.",
        },
      ]}
      relatedServices={[
        { label: "Headlight Restoration", href: "/services/detailing/headlight-restoration" },
        { label: "Wheel & Rim Detailing", href: "/services/detailing/wheel-rim-detailing" },
        { label: "Full Detail Package", href: "/services/detailing/full-detail-package" },
        { label: "Pre-Sale / Trade-In Detail", href: "/services/detailing/pre-sale-trade-in-detail" },
      ]}
    />
  );
}
