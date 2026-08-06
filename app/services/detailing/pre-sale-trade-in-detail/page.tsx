import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business-config";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Pre-Sale & Trade-In Detail in North Port, FL | Maximize Your Car's Value",
  description:
    "Pre-sale and trade-in car detailing at North Port Car Wash. A thorough detail before selling or trading in your vehicle can significantly increase its perceived value. North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/detailing/pre-sale-trade-in-detail` },
};

export default function PreSaleDetailPage() {
  return (
    <ServiceDetailPage
      slug="pre-sale-trade-in-detail"
      category="detailing"
      badge="Detailing Package · By Appointment"
      name="Pre-Sale / Trade-In Detail"
      tagline="Maximize your vehicle's perceived value before sale or trade-in."
      description="A thorough professional detail before selling or trading in your vehicle can meaningfully increase the price a buyer is willing to pay or the trade-in credit a dealer offers. First impressions matter enormously in car sales — a vehicle that smells fresh, looks clean, and has restored trim and clear headlights presents far better than the same car in neglected condition. Our pre-sale detail covers all the high-impact areas that buyers and inspectors notice first."
      included={[
        "Full interior deep clean — vacuum, shampoo, wipe-down",
        "Leather conditioning or fabric spot treatment",
        "Dashboard and console UV protectant",
        "Odor treatment (deodorizing spray or ozone — your choice)",
        "Exterior hand wash and clay bar",
        "Headlight restoration (if applicable)",
        "Trim and plastic restoration",
        "Wheel and rim detail",
        "Tire shine and dressing",
        "Exterior paint sealant application",
        "All glass cleaned inside and out",
        "Engine bay light clean and dressing",
      ]}
      notIncluded={[
        { label: "Paint correction (available as upgrade — ask about pricing) →", href: "/services/detailing/paint-correction" },
        { label: "Ceramic coating (available if you prefer to stay in the vehicle) →", href: "/services/detailing/ceramic-coating" },
      ]}
      notIncludedNote="Optional upgrades that further increase vehicle presentation:"
      duration="4–6 hours · Drop-off recommended"
      ctaType="appointment"
      faqTitle="Pre-Sale Detail — Common Questions"
      faqs={[
        {
          question: "How much can a detail increase my trade-in value?",
          answer:
            "This depends on the vehicle's starting condition, but dealers consistently evaluate clean, well-maintained vehicles higher than those with visible neglect. A $200–$400 detail investment on a $15,000+ vehicle can often yield $500–$1,500 or more in improved trade-in credit or sale price — especially for vehicles with pet odors, stained interiors, or faded trim.",
        },
        {
          question: "When should I schedule the pre-sale detail?",
          answer:
            "Ideally 1–3 days before your showing or dealer appointment, so the car looks its best but does not have time to accumulate new dust or minor marks. If photographing for a private sale listing, bring it in the day before or morning of the photo session.",
        },
        {
          question: "Do you work on older or high-mileage vehicles?",
          answer:
            "Absolutely — in fact, older and high-mileage vehicles often show the most dramatic improvement from a professional detail. We work on vehicles of all ages and conditions.",
        },
        {
          question: "Is this different from the Full Detail Package?",
          answer:
            "The Pre-Sale Detail is customized specifically for sale preparation — we prioritize the cosmetic elements that buyers and inspectors notice most, and we make sure the vehicle presents as favorably as possible. It covers a similar scope to the Full Detail but is optimized for maximum first-impression impact.",
        },
      ]}
      relatedServices={[
        { label: "Full Detail Package", href: "/services/detailing/full-detail-package" },
        { label: "Paint Correction", href: "/services/detailing/paint-correction" },
        { label: "Headlight Restoration", href: "/services/detailing/headlight-restoration" },
        { label: "Odor Removal & Ozone Treatment", href: "/services/detailing/odor-removal-ozone-treatment" },
      ]}
    />
  );
}
