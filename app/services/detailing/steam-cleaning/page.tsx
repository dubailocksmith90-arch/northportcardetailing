import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business-config";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Interior Steam Cleaning | North Port Car Wash Detailing",
  description:
    "Professional interior steam cleaning at North Port Car Wash. High-temperature vapor sanitizes dashboard crevices, vents, door jambs, and upholstery without harsh chemicals. North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/detailing/steam-cleaning` },
};

export default function SteamCleaningPage() {
  return (
    <ServiceDetailPage
      slug="steam-cleaning"
      category="detailing"
      badge="Interior Detailing · By Appointment"
      name="Interior Steam Cleaning"
      tagline="High-temperature vapor sanitizes and deep-cleans surfaces where chemicals cannot reach."
      description="Steam cleaning uses high-temperature vapor to break down grime, sanitize surfaces, and deodorize without harsh chemical residue. It is particularly effective on dashboard crevices, air vents, door jambs, and upholstered surfaces where bacteria and allergens accumulate. The steam's heat also kills mold spores and dust mites — making it an excellent option for allergy sufferers or vehicles used by children."
      included={[
        "Steam treatment of dashboard and instrument cluster crevices",
        "Air vent and HVAC duct steam cleaning",
        "Door jambs, handles, and sill plates",
        "Steering wheel and gear shifter sanitization",
        "Fabric seat surface steam treatment",
        "Headliner spot treatment as needed",
        "Wipe-down of all steamed surfaces after treatment",
      ]}
      notIncluded={[
        { label: "Carpet Shampoo & Extraction →", href: "/services/detailing/carpet-floor-mat-cleaning" },
        { label: "Leather Conditioning →", href: "/services/detailing/leather-seat-cleaning" },
        { label: "Full Interior Detail →", href: "/services/detailing/full-interior-detail" },
      ]}
      notIncludedNote="Steam cleaning is an excellent sanitizing treatment but does not replace deep extraction for heavily soiled carpets or leather conditioning. Consider pairing with:"
      duration="1–2 hours"
      ctaType="appointment"
      faqTitle="Interior Steam Cleaning — Common Questions"
      faqs={[
        {
          question: "Is steam cleaning safe for car electronics?",
          answer:
            "When applied carefully by a trained detailer, steam is safe around vehicle electronics. We direct steam at surfaces rather than directly into electronic modules, control panels, or connectors. Our team is trained to avoid sensitive areas including infotainment screens and speaker grilles.",
        },
        {
          question: "Does steam cleaning disinfect the interior?",
          answer:
            "Yes — steam at sufficient temperature (above 212°F) kills most bacteria, viruses, and mold spores on contact. This makes it a genuine sanitizing treatment, not just a cleaning method. It is especially beneficial for vehicles where hygiene matters — family cars, vehicles used by medical workers, or recently purchased used vehicles.",
        },
        {
          question: "Is steam cleaning good for allergy sufferers?",
          answer:
            "Absolutely. Steam cleaning kills dust mites and removes their waste products — a primary trigger for indoor allergies. It also removes pet dander and mold spores without the chemical residues that some cleaning products leave behind. Many customers with allergies find their symptoms are notably reduced after a steam treatment.",
        },
        {
          question: "Does steam cleaning leave the interior wet?",
          answer:
            "Steam cleaning is a low-moisture process compared to carpet shampooing — surfaces are damp rather than wet, and most areas dry within 30–60 minutes. Fabric surfaces may take slightly longer. The vehicle is typically ready to use within an hour of the treatment finishing.",
        },
      ]}
      relatedServices={[
        { label: "Full Interior Detail", href: "/services/detailing/full-interior-detail" },
        { label: "Odor Removal & Ozone Treatment", href: "/services/detailing/odor-removal-ozone-treatment" },
        { label: "Leather Seat Cleaning", href: "/services/detailing/leather-seat-cleaning" },
        { label: "Upholstery Shampoo", href: "/services/detailing/upholstery-shampoo" },
      ]}
    />
  );
}
