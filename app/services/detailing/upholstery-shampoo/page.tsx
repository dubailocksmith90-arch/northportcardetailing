import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business-config";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Fabric & Cloth Upholstery Shampoo | North Port Car Wash",
  description:
    "Professional fabric and cloth upholstery shampoo with hot water extraction at North Port Car Wash. Removes stains, odors, and embedded dirt. By appointment in North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/detailing/upholstery-shampoo` },
};

export default function UpholsteryShampoPage() {
  return (
    <ServiceDetailPage
      slug="upholstery-shampoo"
      category="detailing"
      badge="Interior Detailing · By Appointment"
      name="Fabric & Cloth Upholstery Shampoo"
      tagline="Hot water extraction removes stains and embedded dirt from cloth seats and panels."
      description="Our fabric upholstery shampoo service uses professional-grade carpet shampoo solution and hot water extraction to lift embedded dirt, food stains, drink spills, and body oils from cloth seats, fabric door panels, and headliners. The results typically look and smell remarkably close to new, even on seats that appear heavily soiled."
      included={[
        "Pre-treatment of visible stains with targeted spot cleaner",
        "Upholstery shampoo application and soft-brush agitation",
        "Hot water extraction to pull shampoo and loosened dirt out",
        "Deodorizing treatment during the extraction process",
        "Drying time guidance for optimal results",
        "Fabric door panel and headliner spot treatment as needed",
      ]}
      notIncluded={[
        { label: "Leather Seat Cleaning →", href: "/services/detailing/leather-seat-cleaning" },
        { label: "Carpet & Floor Mat Deep Cleaning →", href: "/services/detailing/carpet-floor-mat-cleaning" },
        { label: "Pet Hair Removal →", href: "/services/detailing/pet-hair-removal" },
        { label: "Odor Removal / Ozone Treatment →", href: "/services/detailing/odor-removal-ozone-treatment" },
      ]}
      notIncludedNote="Upholstery shampoo covers fabric seat surfaces. For a complete treatment, consider pairing with:"
      duration="1.5–2.5 hours + drying time (allow 4–6 hours before using vehicle)"
      ctaType="appointment"
      faqTitle="Upholstery Shampoo — Common Questions"
      faqs={[
        {
          question: "How long until the seats dry after shampooing?",
          answer:
            "Drying time is typically 4–6 hours in Florida's warm climate. We recommend leaving windows slightly open and parking in the sun if possible to speed drying. Avoid sitting on the seats until fully dry to prevent new staining from clothing transfer.",
        },
        {
          question: "Can you remove coffee or juice stains from fabric seats?",
          answer:
            "We can significantly reduce or completely remove most food and beverage stains, especially if they have not been set for too long. Fresh stains respond best. Old, heat-set stains (from a hot car) are harder to remove but we will do our best with targeted pre-treatment.",
        },
        {
          question: "Is upholstery shampooing safe for children's car seats?",
          answer:
            "We do not shampoo installed car seats — we recommend removing them before your appointment and washing them per the manufacturer's instructions. We can shampoo the seat surface underneath once the car seat is removed.",
        },
        {
          question: "Does shampooing remove odors from the seats?",
          answer:
            "Yes — we include a deodorizing treatment in the extraction process, which eliminates many common odors. For severe odors (cigarette smoke, mildew, or persistent pet smell) that have soaked into the foam beneath the fabric, our ozone treatment may be the more effective solution.",
        },
      ]}
      relatedServices={[
        { label: "Carpet & Floor Mat Cleaning", href: "/services/detailing/carpet-floor-mat-cleaning" },
        { label: "Pet Hair Removal", href: "/services/detailing/pet-hair-removal" },
        { label: "Odor Removal & Ozone Treatment", href: "/services/detailing/odor-removal-ozone-treatment" },
        { label: "Full Interior Detail", href: "/services/detailing/full-interior-detail" },
      ]}
    />
  );
}
