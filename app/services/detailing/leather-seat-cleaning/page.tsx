import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business-config";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Leather Seat Cleaning & Conditioning | North Port Car Wash",
  description:
    "Professional leather seat cleaning and conditioning at North Port Car Wash. Removes grime, restores suppleness, and protects against Florida UV damage. By appointment in North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/detailing/leather-seat-cleaning` },
};

export default function LeatherSeatCleaningPage() {
  return (
    <ServiceDetailPage
      slug="leather-seat-cleaning"
      category="detailing"
      badge="Interior Detailing · By Appointment"
      name="Leather Seat Cleaning & Conditioning"
      tagline="Restore and protect your leather interior against Florida's heat and UV."
      description="Professional leather seat cleaning removes built-up body oils, surface grime, and stains from your vehicle's leather surfaces — then conditions the leather to restore suppleness and prevent cracking. Florida's combination of intense UV exposure and high humidity is especially harsh on untreated leather. Regular cleaning and conditioning significantly extends the life and look of your leather interior."
      included={[
        "pH-balanced leather cleaner application to all leather surfaces",
        "Soft-bristle brush agitation to lift embedded grime",
        "Thorough wipe-down and rinse",
        "Leather conditioner treatment to restore moisture and flexibility",
        "UV protectant finish to resist sun fading",
        "Leather stitching and seam cleaning",
      ]}
      notIncluded={[
        { label: "Fabric/Cloth Upholstery Shampoo →", href: "/services/detailing/upholstery-shampoo" },
        { label: "Full Interior Detail →", href: "/services/detailing/full-interior-detail" },
      ]}
      notIncludedNote="This service covers leather surfaces only. For cloth/fabric seats or a complete interior clean:"
      duration="45–90 minutes (as a standalone or add-on)"
      ctaType="appointment"
      faqTitle="Leather Seat Cleaning — Common Questions"
      faqs={[
        {
          question: "How often should leather be conditioned in Florida?",
          answer:
            "In Florida's climate, we recommend conditioning leather seats every 3–4 months. The combination of UV exposure through windows and the heat inside a parked car accelerates leather drying and cracking faster than in cooler climates. Conditioning regularly keeps leather soft and prevents irreversible damage.",
        },
        {
          question: "Can you remove dark stains from light-colored leather?",
          answer:
            "We can reduce or remove many stains from light leather using professional cleaners and targeted treatment. Results depend on how long the stain has set, the type of stain, and the leather type. Dye transfer stains (from dark denim) are among the most difficult to remove completely.",
        },
        {
          question: "Is leather conditioner safe for perforated seats?",
          answer:
            "Yes — we use conditioners that are safe for perforated and ventilated leather. We avoid heavy oil-based products that could clog perforations, using lighter penetrating formulas instead.",
        },
        {
          question: "Can this service fix cracked leather?",
          answer:
            "Conditioning can improve the appearance of mildly dried leather and prevent further cracking. However, leather that is already significantly cracked or split may need repair or replacement — conditioning cannot reverse structural damage, only maintain and protect healthy leather.",
        },
      ]}
      relatedServices={[
        { label: "Full Interior Detail", href: "/services/detailing/full-interior-detail" },
        { label: "Upholstery Shampoo", href: "/services/detailing/upholstery-shampoo" },
        { label: "Steam Cleaning", href: "/services/detailing/steam-cleaning" },
        { label: "Premium Detail Package", href: "/services/detailing/premium-detail" },
      ]}
    />
  );
}
