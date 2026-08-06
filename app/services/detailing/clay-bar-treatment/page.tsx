import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business-config";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Clay Bar Treatment in North Port, FL | Paint Decontamination",
  description:
    "Professional clay bar treatment and paint decontamination at North Port Car Wash. Required before wax, sealant, or ceramic coating for best adhesion. North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/detailing/clay-bar-treatment` },
};

export default function ClayBarPage() {
  return (
    <ServiceDetailPage
      slug="clay-bar-treatment"
      category="detailing"
      badge="Exterior Detailing · By Appointment"
      name="Clay Bar Treatment & Paint Decontamination"
      tagline="Remove bonded contaminants that washing alone can never reach."
      description="A clay bar treatment physically removes bonded contaminants from your paint surface — industrial fallout, brake dust particles, rail dust, tree sap residue, and environmental deposits that have embedded into the clear coat over time. Washing removes surface dirt, but clay bar is the only method that restores a truly clean, contamination-free surface. It is required preparation before wax, sealant, or ceramic coating for optimal adhesion and results."
      included={[
        "Chemical decontamination spray applied across all painted panels",
        "Professional clay bar pass across all painted surfaces",
        "Lubrication to prevent scratching during clay process",
        "Post-clay rinse and inspection under lighting",
        "Silica dust and bonded residue removal",
      ]}
      notIncluded={[
        { label: "Paint Correction (fix swirls or scratches) →", href: "/services/detailing/paint-correction" },
        { label: "Carnauba Wax Application →", href: "/services/detailing/carnauba-wax" },
        { label: "Ceramic Coating →", href: "/services/detailing/ceramic-coating" },
      ]}
      notIncludedNote="Clay bar treatment prepares the surface — for full protection, follow with:"
      duration="1–2 hours"
      ctaType="appointment"
      faqTitle="Clay Bar Treatment — Common Questions"
      faqs={[
        {
          question: "How do I know if my car needs a clay bar treatment?",
          answer:
            "Run a clean fingertip in a plastic bag lightly across your paint surface after washing. If it feels rough or gritty rather than smooth, your paint has bonded contamination that regular washing cannot remove. Most vehicles driven in Florida more than 6 months will benefit from clay bar treatment.",
        },
        {
          question: "How often should I clay bar my car?",
          answer:
            "Typically once or twice per year for vehicles driven regularly in Florida. Environmental fallout, industrial particles from traffic on US-41 and I-75, and salt air from the Gulf accelerate contamination buildup compared to inland areas.",
        },
        {
          question: "Is clay bar safe for my clear coat?",
          answer:
            "Yes — when used correctly with adequate lubricant, clay bar is safe for factory and aftermarket clear coats. The clay physically picks up and removes embedded particles without abrading the clear coat, unlike sanding or compounding.",
        },
        {
          question: "Is clay bar required before wax or ceramic coating?",
          answer:
            "It is strongly recommended, and for ceramic coating it is typically required. Applying wax or ceramic coating over contaminated paint traps the contamination under the protective layer, reducing adhesion and long-term performance. Clay bar ensures the surface is chemically clean and mechanically smooth.",
        },
      ]}
      relatedServices={[
        { label: "Hand Wash (prep wash)", href: "/services/detailing/hand-wash" },
        { label: "Paint Correction", href: "/services/detailing/paint-correction" },
        { label: "Carnauba Wax", href: "/services/detailing/carnauba-wax" },
        { label: "Ceramic Coating Package", href: "/services/detailing/ceramic-coating-package" },
      ]}
    />
  );
}
