import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business-config";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Professional Paint Sealant | Long-Term Paint Protection",
  description:
    "Hand-applied synthetic paint sealant at North Port Car Wash. 3–6 months of durable hydrophobic paint protection. Longer-lasting than wax. By appointment in North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/detailing/paint-sealant` },
};

export default function PaintSealantPage() {
  return (
    <ServiceDetailPage
      slug="paint-sealant"
      category="detailing"
      badge="Exterior Detailing · By Appointment"
      name="Professional Paint Sealant Application"
      tagline="Synthetic polymer protection lasting 3–6 months — the practical middle ground."
      description="A hand-applied synthetic paint sealant provides 3–6 months of durable paint protection — lasting significantly longer than carnauba wax while being more affordable and flexible than ceramic coating. The polymer formula creates a hard, slick surface that resists UV rays, water spotting, and environmental contamination. It is the most popular protection choice for daily drivers who want real protection without the cost of full ceramic."
      included={[
        "Paint prep wipe with isopropyl solution",
        "Hand application of synthetic polymer sealant",
        "Section-by-section coverage for even bonding",
        "Cure time management during application",
        "Buffing off after cure to a clear, slick finish",
        "UV and hydrophobic protection active from first wash",
      ]}
      notIncluded={[
        { label: "Carnauba Wax (shorter protection, warmer gloss) →", href: "/services/detailing/carnauba-wax" },
        { label: "Ceramic Coating (years of protection) →", href: "/services/detailing/ceramic-coating" },
        { label: "Paint Correction (fix swirls before sealing) →", href: "/services/detailing/paint-correction" },
      ]}
      notIncludedNote="Paint sealant is a middle tier of protection. For more or less:"
      duration="1.5–2.5 hours (plus curing)"
      ctaType="appointment"
      faqTitle="Paint Sealant — Common Questions"
      faqs={[
        {
          question: "Paint sealant vs wax vs ceramic — what should I choose?",
          answer:
            "Wax: 4–8 weeks, warm gloss, lowest cost, natural product. Paint sealant: 3–6 months, harder finish, better UV resistance, synthetic. Ceramic coating: 2–5+ years, chemically bonded, most durable, highest upfront cost. Sealant is the practical sweet spot for daily drivers who want real protection without committing to a ceramic.",
        },
        {
          question: "How long does paint sealant last in Florida?",
          answer:
            "Typically 3–6 months in Florida's climate. Intense UV, frequent rain, and heat accelerate wear faster than in cooler states. Washing with pH-neutral soap and avoiding harsh automated wash brushes extends the sealant's lifespan.",
        },
        {
          question: "Does paint sealant protect against acid rain and water spots?",
          answer:
            "Yes — synthetic sealant is highly resistant to acid in rain water and prevents mineral deposits from bonding directly to the paint surface. The water beads and sheets off before it can etch. This is especially valuable in areas near the Gulf Coast where rain is frequent and intense.",
        },
        {
          question: "How is this different from the tunnel sealant add-on?",
          answer:
            "The tunnel sealant is applied in a single automated pass during the wash cycle. A hand-applied professional paint sealant is worked into each panel individually and cured properly, resulting in more even, thicker coverage and significantly better durability — 3–6 months vs 4–6 weeks for the tunnel version.",
        },
      ]}
      relatedServices={[
        { label: "Clay Bar Treatment (prep before sealing)", href: "/services/detailing/clay-bar-treatment" },
        { label: "Carnauba Wax (natural gloss option)", href: "/services/detailing/carnauba-wax" },
        { label: "Ceramic Coating (longer-term option)", href: "/services/detailing/ceramic-coating" },
        { label: "Premium Detail Package", href: "/services/detailing/premium-detail" },
      ]}
    />
  );
}
