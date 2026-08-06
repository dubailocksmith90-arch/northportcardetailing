import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business-config";
import ServiceSchema from "@/components/schema/ServiceSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Full Detail Package in North Port, FL | Complete Car Detailing",
  description:
    "Complete bumper-to-bumper car detailing at North Port Car Wash. Full interior, exterior, engine bay, clay bar, sealant, undercarriage, and trim restoration. North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/detailing/full-detail-package` },
};

const INTERIOR_ITEMS = [
  "Full vacuum — all seats, floor mats, cargo, door pockets, trunk",
  "Carpet and floor mat deep shampoo and hot water extraction",
  "Dashboard, console, and all panels with UV protectant",
  "Leather cleaning and conditioning (or fabric shampoo)",
  "Interior windows and windshield",
  "Air vents, cup holders, and all interior crevices",
  "Trunk/cargo area cleaning and carpet treatment",
  "Deodorizing treatment",
];

const EXTERIOR_ITEMS = [
  "Hand wash or pre-clean before detailing process",
  "Clay bar decontamination of all painted surfaces",
  "Bug and tar removal",
  "Hand paint sealant application",
  "Engine bay cleaning and degreasing",
  "Wheel and rim detail with brake dust removal",
  "Tire shine dressing",
  "Exterior glass and windshield cleaning",
  "Trim and plastic restoration",
  "Door jambs and exterior trim wipe-down",
  "Undercarriage wash",
];

const FAQS = [
  {
    question: "How long does the Full Detail take?",
    answer:
      "Plan for 4 to 6 hours. For larger vehicles (trucks, SUVs, vans) or vehicles in significantly neglected condition, it may extend to 7–8 hours. We take the time needed to do the job properly.",
  },
  {
    question: "Should I drop off my car for the full detail?",
    answer:
      "Yes — for the Full Detail, we strongly recommend dropping off your vehicle. It is not a wait-while-you-watch service. We will call you when it is ready, typically within the same business day.",
  },
  {
    question: "Is the Full Detail worth it for a high-mileage vehicle?",
    answer:
      "Often yes — a full detail dramatically improves the comfort, appearance, and perceived value of high-mileage vehicles. Many customers use the Full Detail when purchasing a used vehicle, before a long road trip, or after years of neglecting professional cleaning.",
  },
  {
    question: "Do you include undercarriage washing?",
    answer:
      "Yes — undercarriage wash is included in the Full Detail Package. We rinse the undercarriage to remove accumulated road grime, salt deposits, and mud, which is particularly valuable for vehicles in Florida's coastal areas.",
  },
];

export default function FullDetailPage() {
  return (
    <>
      <ServiceSchema
        name="Full Detail Package"
        description="Complete bumper-to-bumper car detailing at North Port Car Wash — full interior deep clean, exterior hand wax, engine bay, clay bar, paint sealant, undercarriage, and trim restoration."
        url="/services/detailing/full-detail-package"
      />
      <BreadcrumbSchema items={[{ name: "Services", href: "/services" }, { name: "Full Detail Package", href: "/services/detailing/full-detail-package" }]} />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-[#8C95A6] mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <span>/</span>
          <span className="text-white">Full Detail Package</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <span className="inline-block text-xs text-[#A8B5C8] uppercase tracking-widest font-semibold mb-3 px-3 py-1 bg-white/5 rounded-full border border-white/10">
              Complete Treatment · By Appointment
            </span>
            <h1 className="font-['Barlow',sans-serif] font-black text-4xl sm:text-5xl text-white mb-3">Full Detail Package</h1>
            <p className="text-base text-[#A8B5C8] font-medium mb-4">Complete bumper-to-bumper restoration — inside, outside, and underneath.</p>
            <p className="text-lg text-[#8C95A6] leading-relaxed mb-8">
              Our Full Detail Package is the most comprehensive single-day detailing service we offer. It covers every interior and exterior surface of your vehicle — from shampooed carpets and conditioned leather to a clay-barred, sealed exterior, clean engine bay, and undercarriage wash. If you have been putting off a serious detail, this is the one.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="glass-card p-6">
                <h2 className="font-['Barlow',sans-serif] font-bold text-lg text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00C2FF]" />
                  Interior
                </h2>
                <ul className="space-y-2">
                  {INTERIOR_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#8C95A6]">
                      <svg className="w-3.5 h-3.5 text-[#00C2FF] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card p-6">
                <h2 className="font-['Barlow',sans-serif] font-bold text-lg text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#A8B5C8]" />
                  Exterior
                </h2>
                <ul className="space-y-2">
                  {EXTERIOR_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#8C95A6]">
                      <svg className="w-3.5 h-3.5 text-[#A8B5C8] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 glass-card mb-6">
              <svg className="w-5 h-5 text-[#00C2FF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-[#8C95A6]">Estimated time: <span className="text-white font-medium">4–6 hours</span> · Drop-off recommended</span>
            </div>

            <div className="glass-card p-6 border border-[#00C2FF]/10">
              <h2 className="font-['Barlow',sans-serif] font-bold text-lg text-white mb-2">Need Multi-Year Paint Protection?</h2>
              <p className="text-sm text-[#8C95A6] mb-3">After a Full Detail, ceramic coating is the logical next step for long-term paint protection. See our Ceramic Coating Package.</p>
              <Link href="/services/detailing/ceramic-coating-package" className="text-[#00C2FF] hover:underline text-sm font-medium">
                Ceramic Coating Package →
              </Link>
            </div>
          </div>

          <div>
            <div className="glass-card p-6 sticky top-24">
              <h3 className="font-['Barlow',sans-serif] font-bold text-lg text-white mb-1">Book Full Detail</h3>
              <p className="text-sm text-[#8C95A6] mb-4">Drop off service. Call to check availability — we often book 1–3 days ahead.</p>
              <div className="flex flex-col gap-3">
                <a href={BUSINESS.phone.href} className="flex items-center justify-center py-3 rounded-xl bg-[#00C2FF] text-black font-bold hover:bg-[#00AADE] transition-colors">
                  Call {BUSINESS.phone.display}
                </a>
                <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center py-3 rounded-xl bg-white/5 border border-white/15 text-white hover:bg-white/10 transition-colors">
                  Get Directions
                </a>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-[#8C95A6] space-y-1">
                <p>{BUSINESS.address.street}</p>
                <p>{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</p>
              </div>
            </div>
          </div>
        </div>

        <FaqSection faqs={FAQS} withSchema title="Full Detail Package — Common Questions" />
      </div>
    </>
  );
}
