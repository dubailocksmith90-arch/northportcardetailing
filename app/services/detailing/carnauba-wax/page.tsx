import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business-config";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Carnauba Hand Wax Application | North Port Car Wash Detailing",
  description:
    "Hand-applied carnauba wax detailing at North Port Car Wash. Deep gloss finish, section-by-section application, buff to shine. Better results than automated tunnel wax. North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/detailing/carnauba-wax` },
};

export default function CarnaubaWaxPage() {
  return (
    <ServiceDetailPage
      slug="carnauba-wax"
      category="detailing"
      badge="Exterior Detailing · By Appointment"
      name="Carnauba Hand Wax Application"
      tagline="The warm, deep gloss that car enthusiasts have trusted for decades."
      description="Hand-applied carnauba wax delivers a warm, reflective gloss finish that many enthusiasts prefer over synthetic sealants — especially on darker paint colors. Unlike the automated wax applied in a tunnel wash, our detailers apply carnauba wax by hand, panel by panel, and buff it to a brilliant finish that lasts 4–8 weeks. It is the classic wax treatment done right."
      included={[
        "Exterior surface preparation and wipe-down",
        "Carnauba wax application by hand with applicator pad",
        "Section-by-section work for even coverage",
        "Buffing to a high-gloss finish with clean microfiber",
        "Trim masking to prevent wax residue on plastic trim",
        "Glass and exterior chrome cleanup post-wax",
      ]}
      notIncluded={[
        { label: "Paint Correction (fix swirls before waxing) →", href: "/services/detailing/paint-correction" },
        { label: "Synthetic Paint Sealant (lasts longer) →", href: "/services/detailing/paint-sealant" },
        { label: "Ceramic Coating (multi-year protection) →", href: "/services/detailing/ceramic-coating" },
      ]}
      notIncludedNote="Carnauba wax protects for 4–8 weeks. For longer protection:"
      duration="1.5–2.5 hours"
      ctaType="appointment"
      faqTitle="Carnauba Wax — Common Questions"
      faqs={[
        {
          question: "What makes carnauba wax different from the tunnel wax?",
          answer:
            "Tunnel wax is a liquid carnauba blend applied automatically by the wash equipment — fast and convenient, but thin coverage and shorter lasting. Hand-applied carnauba wax is worked into each panel by a detailer and buffed for more even, thorough coverage. The result is noticeably deeper shine and better durability than the tunnel wax add-on.",
        },
        {
          question: "Carnauba wax vs ceramic coating — which should I choose?",
          answer:
            "Carnauba wax delivers a warmer, richer gloss that many enthusiasts love, particularly on classic, luxury, or show cars. It lasts 4–8 weeks. Ceramic coating is a modern polymer that lasts years and requires less frequent reapplication, but has a different aesthetic — cleaner and more glass-like. Many owners use carnauba for show prep and ceramic for daily driver protection.",
        },
        {
          question: "How often should I wax in Florida?",
          answer:
            "With hand-applied carnauba wax, every 4–8 weeks is ideal in Florida's climate. UV intensity and summer rain accelerate wax wear faster than in cooler states. Many customers on our detailing schedule do a fresh wax every 6–8 weeks.",
        },
        {
          question: "Is carnauba wax safe for black or dark paint?",
          answer:
            "Carnauba wax is excellent for dark paint — it adds depth and warmth that shows especially well on black, dark blue, and burgundy finishes. The key is having clean, defect-free paint first — any swirls or scratches will be more visible after waxing than before on dark colors.",
        },
      ]}
      relatedServices={[
        { label: "Clay Bar Treatment (prep before waxing)", href: "/services/detailing/clay-bar-treatment" },
        { label: "Paint Correction (fix swirls first)", href: "/services/detailing/paint-correction" },
        { label: "Paint Sealant (longer-lasting option)", href: "/services/detailing/paint-sealant" },
        { label: "Premium Detail Package", href: "/services/detailing/premium-detail" },
      ]}
    />
  );
}
