import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business-config";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Paint Sealant Add-On | North Port Car Wash",
  description:
    "Add a synthetic paint sealant to your car wash at North Port Car Wash. Longer-lasting hydrophobic paint protection than wax — applied in the tunnel, no appointment needed. North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/wash/sealant` },
};

export default function SealantPage() {
  return (
    <ServiceDetailPage
      slug="sealant"
      category="wash"
      badge="Express Wash Add-On · Best Protection"
      name="Paint Sealant"
      tagline="Synthetic polymer protection that lasts significantly longer than wax."
      description="Our in-tunnel paint sealant applies a synthetic polymer formula that bonds to your vehicle's clear coat, creating a durable hydrophobic barrier that repels water, resists UV damage, and helps prevent environmental contaminants from sticking to your paint. It lasts 2–3 months — several times longer than a standard wax pass."
      included={[
        "Synthetic polymer sealant application during wash cycle",
        "Hydrophobic water-sheeting protection",
        "UV blocking and paint fade resistance",
        "Chemical and environmental contaminant resistance",
        "Enhanced gloss finish",
        "Safe for all factory paint colors and finishes",
      ]}
      notIncluded={[
        { label: "Hand-Applied Paint Sealant Detail →", href: "/services/detailing/paint-sealant" },
        { label: "Ceramic Coating (years of protection) →", href: "/services/detailing/ceramic-coating" },
        { label: "Paint Correction (remove swirls first) →", href: "/services/detailing/paint-correction" },
      ]}
      notIncludedNote="For maximum durability and professional-grade results, our detailing team offers:"
      duration="Included in tunnel wash time"
      ctaType="drive-in"
      faqTitle="Paint Sealant — Common Questions"
      faqs={[
        {
          question: "What's the difference between sealant and wax?",
          answer:
            "Wax is a natural product (carnauba-based) that provides a warm gloss and short-term protection — typically 2–4 weeks. Sealant is a synthetic polymer that chemically bonds to your clear coat for a harder, longer-lasting shield — typically 2–3 months. Sealant also handles Florida's heat and UV exposure better.",
        },
        {
          question: "Is sealant safe for new cars?",
          answer:
            "Yes — our sealant formula is safe for all factory paint finishes including metallic, pearl, and matte. It bonds to the clear coat without altering the paint's chemistry. If your vehicle has an aftermarket coating (ceramic or PPF), check compatibility first.",
        },
        {
          question: "Does it work on dark-colored paint?",
          answer:
            "Absolutely. Paint sealant works on all colors and tends to be especially noticeable on dark or black paint, where it adds depth and a slick, reflective quality while making water bead and sheet off clearly.",
        },
        {
          question: "How is this different from a professional paint sealant detail?",
          answer:
            "The in-tunnel sealant is applied automatically as part of the wash cycle. A hand-applied professional paint sealant from our detailing team is applied section by section and cured properly, resulting in longer durability (4–6 months) and more even coverage than the automated application.",
        },
      ]}
      relatedServices={[
        { label: "Car Waxing Add-On", href: "/services/wash/car-waxing" },
        { label: "Professional Paint Sealant", href: "/services/detailing/paint-sealant" },
        { label: "Ceramic Coating", href: "/services/detailing/ceramic-coating" },
        { label: "Unlimited Membership", href: "/services/wash/unlimited-wash-plans" },
      ]}
    />
  );
}
