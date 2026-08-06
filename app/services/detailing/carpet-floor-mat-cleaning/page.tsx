import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business-config";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Carpet & Floor Mat Deep Cleaning | North Port Car Wash",
  description:
    "Deep carpet and floor mat cleaning at North Port Car Wash. Removes sand, dirt, and moisture from vehicle flooring with shampoo and hot water extraction. North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/detailing/carpet-floor-mat-cleaning` },
};

export default function CarpetFloorMatCleaningPage() {
  return (
    <ServiceDetailPage
      slug="carpet-floor-mat-cleaning"
      category="detailing"
      badge="Interior Detailing · By Appointment"
      name="Carpet & Floor Mat Deep Cleaning"
      tagline="Remove the sand, dirt, and moisture that accumulates in Florida vehicle flooring."
      description="Deep carpet and floor mat cleaning removes the sand, dirt, and moisture that builds up in your vehicle's flooring — especially after beach trips near Venice or Englewood, rainy commutes on US-41, or daily use. We shampoo and extract all carpeted surfaces including mats, trunk carpet, and floor channels that regular vacuuming cannot reach."
      included={[
        "Floor mat removal and individual cleaning with carpet shampoo",
        "Carpet pre-spray and agitation on all floor surfaces",
        "Hot water extraction to pull out shampoo and debris",
        "Trunk carpet and cargo liner cleaning",
        "Floor channel and under-seat crevice cleaning",
        "Deodorizing treatment during extraction",
        "Mats returned and properly repositioned",
      ]}
      notIncluded={[
        { label: "Fabric Seat Upholstery Shampoo →", href: "/services/detailing/upholstery-shampoo" },
        { label: "Pet Hair Removal →", href: "/services/detailing/pet-hair-removal" },
        { label: "Odor Removal / Ozone Treatment →", href: "/services/detailing/odor-removal-ozone-treatment" },
      ]}
      notIncludedNote="For a complete interior refresh, consider pairing carpet cleaning with:"
      duration="1.5–2.5 hours + 4–6 hours drying"
      ctaType="appointment"
      faqTitle="Carpet & Floor Mat Cleaning — Common Questions"
      faqs={[
        {
          question: "Do you clean rubber floor mats too?",
          answer:
            "Yes — rubber mats are removed, cleaned with appropriate cleaners, scrubbed, rinsed, and dried separately from carpet mats. We treat them differently from fabric mats to ensure thorough cleaning without damage.",
        },
        {
          question: "How do I prevent mold in my car carpets in Florida?",
          answer:
            "Florida's humidity means wet floor mats and carpets can develop mold and mildew surprisingly quickly, especially if the car sits parked in heat. After a deep cleaning, keep your A/C running on recirculate to reduce cabin humidity, and address any water leaks promptly. We can also apply a fabric protectant that resists moisture absorption.",
        },
        {
          question: "How long do the carpets take to dry?",
          answer:
            "In Florida's warm climate, carpets are typically dry within 4–6 hours when left with windows slightly cracked or the vehicle parked in the sun. Running the A/C with outside air (not recirculate) also speeds drying. We recommend not driving the vehicle until fully dry to avoid re-soiling the damp surface.",
        },
        {
          question: "Can you remove sand from all the crevices?",
          answer:
            "We specifically target the hard-to-reach areas where sand accumulates — floor channels, seat track rails, door sill seams, and under the seats. It is nearly impossible to remove every grain of sand, but our extraction and compressed air treatment gets the vast majority of it out.",
        },
      ]}
      relatedServices={[
        { label: "Upholstery Shampoo", href: "/services/detailing/upholstery-shampoo" },
        { label: "Full Interior Detail", href: "/services/detailing/full-interior-detail" },
        { label: "Odor Removal & Ozone Treatment", href: "/services/detailing/odor-removal-ozone-treatment" },
        { label: "Full Detail Package", href: "/services/detailing/full-detail-package" },
      ]}
    />
  );
}
