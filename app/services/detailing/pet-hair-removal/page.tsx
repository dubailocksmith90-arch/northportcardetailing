import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business-config";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Pet Hair Removal from Car Interior | North Port Car Wash",
  description:
    "Specialist pet hair removal service at North Port Car Wash. Removes embedded dog and cat hair from seats, carpet, and cargo areas using professional tools. North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/detailing/pet-hair-removal` },
};

export default function PetHairRemovalPage() {
  return (
    <ServiceDetailPage
      slug="pet-hair-removal"
      category="detailing"
      badge="Interior Detailing · By Appointment"
      name="Pet Hair Removal"
      tagline="Specialized tools for the hair that a regular vacuum simply cannot reach."
      description="Pet hair embeds deep into fabric fibers and weaves into carpet pile in a way that a standard vacuum cannot fully extract. Our pet hair removal service uses specialized rubber and electrostatic tools designed to lift pet hair from seat fabric, carpet, cargo liners, and crevices — followed by thorough vacuuming to remove the loosened hair completely."
      included={[
        "Specialized rubber grooming tool pass over all fabric seats",
        "Carpet and floor mat pet hair extraction with rubber tools",
        "Cargo area and trunk liner treatment",
        "Thorough vacuum pass after tool extraction",
        "Seat crevice and back-of-seat cleaning",
        "Door panel fabric treatment if applicable",
      ]}
      notIncluded={[
        { label: "Fabric Upholstery Shampoo →", href: "/services/detailing/upholstery-shampoo" },
        { label: "Odor Removal / Ozone Treatment →", href: "/services/detailing/odor-removal-ozone-treatment" },
        { label: "Full Interior Detail →", href: "/services/detailing/full-interior-detail" },
      ]}
      notIncludedNote="For the best result on a heavily pet-used vehicle, pair pet hair removal with:"
      duration="45–90 minutes (varies by amount of hair and vehicle size)"
      ctaType="appointment"
      faqTitle="Pet Hair Removal — Common Questions"
      faqs={[
        {
          question: "Can you get dog hair out of deep carpet pile?",
          answer:
            "Yes — our rubber extraction tools create static friction that lifts embedded hair from carpet fibers, including hair that has worked its way into the base of the pile. After tool extraction, we vacuum thoroughly to remove all the loosened hair. Results are significantly better than vacuuming alone.",
        },
        {
          question: "Is it safe for velour or microfiber seats?",
          answer:
            "We use tools and techniques appropriate for the seat fabric type. Velour and microfiber require a lighter touch than regular cloth. Please let us know the fabric type when you call so we can use the right tools for your interior.",
        },
        {
          question: "Can pet hair removal eliminate pet odor too?",
          answer:
            "Removing pet hair is an important step in reducing pet odor, but hair is only part of the source. Dander and oils embedded in fabric also contribute to smell. For complete odor elimination, we recommend pairing pet hair removal with our upholstery shampoo or ozone treatment.",
        },
        {
          question: "My dog is in the car every day — how often should I do this?",
          answer:
            "For daily dog passengers, professional pet hair removal every 2–3 months helps prevent significant buildup. Regular vacuuming between appointments helps maintain the results. An all-weather rubber floor mat set can also reduce how deeply hair embeds in the carpet.",
        },
      ]}
      relatedServices={[
        { label: "Upholstery Shampoo", href: "/services/detailing/upholstery-shampoo" },
        { label: "Odor Removal & Ozone Treatment", href: "/services/detailing/odor-removal-ozone-treatment" },
        { label: "Carpet & Floor Mat Cleaning", href: "/services/detailing/carpet-floor-mat-cleaning" },
        { label: "Full Interior Detail", href: "/services/detailing/full-interior-detail" },
      ]}
    />
  );
}
