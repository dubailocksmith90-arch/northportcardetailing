import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business-config";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Car Odor Removal & Ozone Treatment | North Port Car Wash",
  description:
    "Professional car odor removal and ozone treatment at North Port Car Wash. Eliminates cigarette smoke, mildew, pet odors, and food smells at the molecular level. North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/detailing/odor-removal-ozone-treatment` },
};

export default function OdorRemovalPage() {
  return (
    <ServiceDetailPage
      slug="odor-removal-ozone-treatment"
      category="detailing"
      badge="Interior Detailing · By Appointment"
      name="Odor Removal & Ozone Treatment"
      tagline="Neutralizes odors at the molecular level — not just masks them."
      description="Our ozone odor elimination treatment neutralizes smells at the molecular level by generating ozone (O₃) gas inside the sealed vehicle. The ozone breaks down odor-causing molecules embedded in carpets, headliner foam, seat cushions, and HVAC systems — eliminating the source rather than covering it with fragrance. It is the most effective treatment for cigarette smoke, mildew, pet odors, and persistent food smells."
      included={[
        "Pre-treatment interior cleaning to remove odor sources",
        "Vehicle is sealed and ozone generator runs for a set dwell period",
        "Ozone reaches HVAC vents, headliner foam, and carpet backing",
        "Post-treatment airing of the vehicle",
        "Interior wipe-down after treatment is complete",
        "No masking fragrances — genuine odor neutralization",
      ]}
      notIncluded={[
        { label: "Mold remediation (requires specialist if mold is structural)", href: "/contact" },
        { label: "Mechanical odor repair (exhaust leaks, etc.)", href: "/contact" },
      ]}
      notIncludedNote="Ozone treatment eliminates airborne and surface odors but cannot fix odors caused by mechanical issues or active water leaks:"
      duration="2–4 hours total (including dwell time and airing)"
      ctaType="appointment"
      faqTitle="Odor Removal & Ozone Treatment — Common Questions"
      faqs={[
        {
          question: "How does ozone treatment work in a car?",
          answer:
            "Ozone (O₃) is an unstable oxygen molecule that reacts with and breaks down odor-causing compounds — including the chemicals from cigarette smoke, pet dander and urine residue, mildew spores, and food decomposition. By generating ozone inside a sealed vehicle, the gas penetrates fabrics, foam, and the HVAC system to neutralize odors at their source.",
        },
        {
          question: "Is ozone treatment safe for my car's interior?",
          answer:
            "When performed correctly for an appropriate duration, ozone treatment is safe for vehicle interiors. Extended or repeated overexposure at extremely high concentrations can affect rubber and some plastics over time, but a professionally applied treatment poses no risk to a normal vehicle interior.",
        },
        {
          question: "How long do results last?",
          answer:
            "If the source of the odor is removed (for example, the smoker no longer smokes in the vehicle), results can be permanent. If the odor source continues — pets riding regularly, moisture entering through a leaking seal — odors will return over time and may require re-treatment.",
        },
        {
          question: "Can ozone treatment remove cigarette smoke smell permanently?",
          answer:
            "Ozone treatment is one of the most effective methods for cigarette smoke, and for many vehicles produces a dramatic result. However, very heavily smoked vehicles may require multiple treatments and thorough cleaning of surfaces including headliner and carpet for full elimination.",
        },
        {
          question: "Is this treatment helpful for Florida mildew problems?",
          answer:
            "Yes — mildew from water intrusion, flooded floorboards (especially after hurricane season or heavy rain), or wet beach gear left in the car responds very well to ozone treatment. We recommend pairing it with a carpet extraction service to address both the moisture source and the resulting odor.",
        },
      ]}
      relatedServices={[
        { label: "Carpet & Floor Mat Deep Cleaning", href: "/services/detailing/carpet-floor-mat-cleaning" },
        { label: "Upholstery Shampoo", href: "/services/detailing/upholstery-shampoo" },
        { label: "Full Interior Detail", href: "/services/detailing/full-interior-detail" },
        { label: "Steam Cleaning", href: "/services/detailing/steam-cleaning" },
      ]}
    />
  );
}
