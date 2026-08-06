import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business-config";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Full Interior Detail in North Port, FL | North Port Car Wash",
  description:
    "Professional full interior detail at North Port Car Wash — complete vacuum, panel wipe-down, dashboard cleaning, interior windows, air vents, and more. By appointment. North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/detailing/full-interior-detail` },
};

export default function FullInteriorDetailPage() {
  return (
    <ServiceDetailPage
      slug="full-interior-detail"
      category="detailing"
      badge="Interior Detailing · By Appointment"
      name="Full Interior Detail"
      tagline="A comprehensive deep-clean of every interior surface in your vehicle."
      description="Our full interior detail covers everything inside your vehicle — a thorough vacuum of all seating and cargo areas, wipe-down of all plastic and vinyl panels, dashboard and console cleaning with UV protectant, interior window cleaning, air vent detailing, cup holder cleaning, and trunk treatment. It is the most thorough interior-only service we offer, ideal for vehicles that have not been professionally cleaned in months or that show visible buildup, pet hair, or grime."
      included={[
        "Full vacuum: seats, floor mats, carpet, cargo area, and door pockets",
        "Dashboard, console, and instrument cluster wipe-down with UV protectant",
        "Door panels and interior trim cleaning",
        "Interior window and windshield cleaning",
        "Air vent cleaning (compressed air and brush)",
        "Cup holders, center console, and crevice detailing",
        "Trunk and cargo area cleaning",
        "Deodorizing treatment",
      ]}
      notIncluded={[
        { label: "Leather Seat Conditioning →", href: "/services/detailing/leather-seat-cleaning" },
        { label: "Fabric Upholstery Shampoo →", href: "/services/detailing/upholstery-shampoo" },
        { label: "Carpet Deep Shampoo →", href: "/services/detailing/carpet-floor-mat-cleaning" },
        { label: "Odor Removal / Ozone Treatment →", href: "/services/detailing/odor-removal-ozone-treatment" },
      ]}
      notIncludedNote="For a full deep clean including fabric shampoo and leather conditioning, consider our Premium or Full Detail Package — or add these as individual services:"
      duration="2–3 hours"
      ctaType="appointment"
      faqTitle="Full Interior Detail — Common Questions"
      faqs={[
        {
          question: "How is a full interior detail different from just vacuuming?",
          answer:
            "A full interior detail goes far beyond vacuuming. Our detailers clean every surface inside the vehicle using appropriate products — degreasers for plastics, glass cleaner for windows, UV protectants for dashboards, and compressed air for vents. It takes 2–3 hours and leaves the interior looking and smelling noticeably better.",
        },
        {
          question: "Do you clean the trunk?",
          answer:
            "Yes. Our full interior detail includes the trunk and cargo area — vacuum, wipe-down of side panels, and cleaning of the floor carpet or liner.",
        },
        {
          question: "Can you clean around a car seat without removing it?",
          answer:
            "We can clean around car seats, but for best results in the area underneath, we recommend removing car seats before your appointment if possible. We do not remove or reinstall car seats ourselves.",
        },
        {
          question: "Is this the same as a full detail package?",
          answer:
            "No — our Full Interior Detail covers the inside only. Our Full Detail Package includes both complete interior and exterior detailing, plus engine bay and trim. See the Full Detail Package page for everything that is included.",
        },
      ]}
      relatedServices={[
        { label: "Leather Seat Cleaning", href: "/services/detailing/leather-seat-cleaning" },
        { label: "Odor Removal & Ozone Treatment", href: "/services/detailing/odor-removal-ozone-treatment" },
        { label: "Pet Hair Removal", href: "/services/detailing/pet-hair-removal" },
        { label: "Full Detail Package", href: "/services/detailing/full-detail-package" },
      ]}
    />
  );
}
