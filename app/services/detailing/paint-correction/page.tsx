import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business-config";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Paint Correction in North Port, FL | Swirl & Scratch Removal",
  description:
    "Professional paint correction and swirl mark removal at North Port Car Wash. Machine polishing restores glossy, clear-coat clarity on faded and swirled paint. North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/detailing/paint-correction` },
};

export default function PaintCorrectionPage() {
  return (
    <ServiceDetailPage
      slug="paint-correction"
      category="detailing"
      badge="Exterior Detailing · By Appointment"
      name="Paint Correction — Swirl & Scratch Removal"
      tagline="Restore true paint clarity by removing surface defects with machine polishing."
      description="Paint correction is a multi-stage machine polishing process that removes microscopic surface defects — swirl marks from automatic car washes, light scratches, water spots, and oxidation — by carefully leveling the clear coat surface to eliminate the light-scattering defects causing dull or hazy appearance. The result is paint with depth and clarity that looks genuinely better than a simple wash or wax ever could achieve."
      included={[
        "Paint inspection and depth measurement to assess correction potential",
        "Panel-by-panel machine polishing with appropriate compound",
        "Swirl mark and fine scratch removal",
        "Water spot and light oxidation treatment",
        "Progress checking under specialized lighting at each stage",
        "Final wipe-down with paint prep solution",
      ]}
      notIncluded={[
        { label: "Deep scratches or chips through to primer (require touch-up/respray)", href: "/contact" },
        { label: "Ceramic Coating (recommended after correction) →", href: "/services/detailing/ceramic-coating" },
        { label: "Carnauba Wax (apply after correction) →", href: "/services/detailing/carnauba-wax" },
      ]}
      notIncludedNote="Paint correction removes clear coat defects. For protection after correction:"
      duration="4–8 hours (depending on severity and panel count)"
      ctaType="appointment"
      faqTitle="Paint Correction — Common Questions"
      faqs={[
        {
          question: "Is paint correction permanent?",
          answer:
            "The correction itself is permanent — the swirl marks and scratches that are removed will not return on their own. However, unprotected corrected paint will accumulate new defects over time. Protecting corrected paint with ceramic coating or regular wax dramatically slows re-defecting.",
        },
        {
          question: "How many stages of correction do I need?",
          answer:
            "Most vehicles need a one or two-stage correction. A single-stage polish addresses light swirling and haziness. A two-stage process uses a more aggressive cut compound first, then a finishing polish to refine the surface. Heavily defected vehicles may need a third stage. We assess this at the start of the job.",
        },
        {
          question: "Can paint correction fix car wash swirl marks?",
          answer:
            "Yes — swirl marks from automatic car washes are exactly the type of defect paint correction addresses. They are the most common request we see, especially on dark-colored vehicles that show swirling very visibly.",
        },
        {
          question: "What's the difference between paint correction and polish?",
          answer:
            "A polish or glaze fills and hides swirl marks temporarily with fillers — the effect fades within weeks. Paint correction physically removes the defects by leveling the clear coat. The result is a permanent improvement in paint condition, not a temporary fill.",
        },
      ]}
      relatedServices={[
        { label: "Clay Bar Treatment (do first)", href: "/services/detailing/clay-bar-treatment" },
        { label: "Ceramic Coating (protect after)", href: "/services/detailing/ceramic-coating" },
        { label: "Ceramic Coating Package", href: "/services/detailing/ceramic-coating-package" },
        { label: "Carnauba Wax (lighter option)", href: "/services/detailing/carnauba-wax" },
      ]}
    />
  );
}
