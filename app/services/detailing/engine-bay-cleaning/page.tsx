import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business-config";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Engine Bay Cleaning & Degreasing | North Port Car Wash",
  description:
    "Professional engine bay cleaning and degreasing at North Port Car Wash. Removes built-up grime, oil residue, and road debris. Great for pre-sale prep. North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/detailing/engine-bay-cleaning` },
};

export default function EngineBayCleaningPage() {
  return (
    <ServiceDetailPage
      slug="engine-bay-cleaning"
      category="detailing"
      badge="Exterior Detailing · By Appointment"
      name="Engine Bay Cleaning & Degreasing"
      tagline="A clean engine bay makes issues easier to spot and makes any car look better."
      description="A professionally cleaned engine bay makes fluid leaks and mechanical issues significantly easier to detect, helps prevent premature component wear from grime buildup, and presents dramatically better during pre-sale inspections. Our engine bay cleaning uses a careful low-pressure rinse and professional degreaser to lift years of road grime, oil residue, and debris — without damaging electrical components."
      included={[
        "Low-pressure degreaser application to all accessible surfaces",
        "Soft detailing brush agitation on engine covers, brackets, and hoses",
        "Careful low-pressure rinse (avoiding sensitive electronics)",
        "Rubber and plastic dressing for a clean, dark finish",
        "Under-hood area and firewall cleaning",
        "Final dry and inspection",
      ]}
      notIncluded={[
        { label: "Mechanical repair of leaks or damage", href: "/contact" },
        { label: "Electrical system work", href: "/contact" },
      ]}
      notIncludedNote="Engine cleaning is cosmetic and surface-level — any mechanical leaks discovered should be addressed by a mechanic:"
      duration="1–1.5 hours"
      ctaType="appointment"
      faqTitle="Engine Bay Cleaning — Common Questions"
      faqs={[
        {
          question: "Is engine bay cleaning safe for modern cars?",
          answer:
            "Yes — when done carefully by a trained detailer with appropriate pressure and targeted rinsing. Modern vehicles have well-sealed electronics, but we are careful to avoid direct water contact with fuse boxes, alternators, and exposed connectors. We have safely cleaned hundreds of modern vehicles with no electrical issues.",
        },
        {
          question: "Can engine cleaning void my warranty?",
          answer:
            "A professional, low-pressure exterior engine cleaning done by an experienced detailer will not void your warranty under normal circumstances. High-pressure washing of an engine bay by an untrained person could cause issues, but a professional degreasing service does not fall into that category.",
        },
        {
          question: "How often should I clean my engine bay?",
          answer:
            "For most vehicles, once or twice per year is appropriate. More frequent cleaning is beneficial for vehicles with active oil seeps, vehicles used off-road, or those being prepared for sale. A clean engine bay also makes your own visual inspections much easier.",
        },
        {
          question: "Is engine cleaning good for pre-sale prep?",
          answer:
            "Absolutely — a clean engine bay signals that the vehicle was cared for, which buyers and inspectors notice. It is one of the most impactful things you can do before a private sale or trade-in, as it removes the impression of a neglected vehicle even when the car is mechanically sound.",
        },
      ]}
      relatedServices={[
        { label: "Full Detail Package (includes engine bay)", href: "/services/detailing/full-detail-package" },
        { label: "Pre-Sale / Trade-In Detail", href: "/services/detailing/pre-sale-trade-in-detail" },
        { label: "Wheel & Rim Detailing", href: "/services/detailing/wheel-rim-detailing" },
        { label: "Undercarriage Wash", href: "/services/detailing/full-detail-package" },
      ]}
    />
  );
}
