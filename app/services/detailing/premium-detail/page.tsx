import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business-config";
import ServiceSchema from "@/components/schema/ServiceSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Premium Car Detail in North Port, FL | Full Interior + Hand Wax",
  description:
    "Premium car detail at North Port Car Wash — full interior deep clean, leather or fabric cleaning, hand carnauba wax, wheel detail, and window cleaning. Most popular package. North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/detailing/premium-detail` },
};

const INCLUDED = [
  "Full interior vacuum — seats, mats, cargo area, door pockets",
  "Dashboard, console, and door panel wipe-down with UV protectant",
  "Leather seat cleaning and conditioning (or fabric spot clean for cloth seats)",
  "Interior window and windshield cleaning",
  "Air vent cleaning with compressed air",
  "Cup holder and crevice detail",
  "Hand carnauba wax application and buff",
  "Wheel and rim detail (brake dust removal)",
  "Tire shine dressing",
  "Exterior window cleaning",
  "Door jamb wipe-down",
];

const FAQS = [
  {
    question: "How long does the Premium Detail take?",
    answer: "Typically 2.5 to 3.5 hours depending on the vehicle size and current condition. We do thorough work — this is not a rushed service.",
  },
  {
    question: "What is the difference between Premium and Full Detail?",
    answer:
      "The Premium Detail gives you a thorough interior and exterior clean with hand wax and wheel detail. The Full Detail adds carpet shampooing, engine bay cleaning, clay bar decontamination, paint sealant, undercarriage wash, and trim restoration — it is a more complete, longer-duration service.",
  },
  {
    question: "Is this the right choice for regular maintenance?",
    answer:
      "Yes — our Premium Detail is the most popular choice for customers who want a thorough, professional clean on a regular schedule (every 6–12 weeks). It covers all the bases without the extended time commitment of the Full Detail.",
  },
  {
    question: "Do you do the leather cleaning even if I have cloth seats?",
    answer:
      "We adapt the service to your vehicle's interior. For cloth/fabric seats we do spot cleaning and fabric surface care. For full upholstery shampoo on fabric seats, that can be added as an upgrade — call to discuss.",
  },
];

export default function PremiumDetailPage() {
  return (
    <>
      <ServiceSchema
        name="Premium Detail"
        description="Full interior and exterior car detailing at North Port Car Wash. Includes vacuum, leather care, hand carnauba wax, wheel detail, and tire shine. Most popular detailing package."
        url="/services/detailing/premium-detail"
      />
      <BreadcrumbSchema items={[{ name: "Services", href: "/services" }, { name: "Premium Detail", href: "/services/detailing/premium-detail" }]} />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-[#8C95A6] mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <span>/</span>
          <span className="text-white">Premium Detail</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block text-xs text-[#00C2FF] uppercase tracking-widest font-semibold px-3 py-1 bg-[#00C2FF]/10 rounded-full border border-[#00C2FF]/20">
                Most Popular · By Appointment
              </span>
            </div>
            <h1 className="font-['Barlow',sans-serif] font-black text-4xl sm:text-5xl text-white mb-3">Premium Detail</h1>
            <p className="text-base text-[#A8B5C8] font-medium mb-4">A complete interior + exterior detail — our most popular package.</p>
            <p className="text-lg text-[#8C95A6] leading-relaxed mb-8">
              The Premium Detail is our most requested package — a thorough clean inside and out that covers everything most vehicle owners need on a regular maintenance schedule. It goes well beyond an express refresh with full interior deep cleaning, leather care, hand carnauba wax, and a proper wheel detail.
            </p>

            <div className="glass-card p-6 mb-6">
              <h2 className="font-['Barlow',sans-serif] font-bold text-xl text-white mb-4">What&apos;s Included</h2>
              <ul className="space-y-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#8C95A6]">
                    <svg className="w-4 h-4 text-[#00C2FF] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 mb-6">
              <h2 className="font-['Barlow',sans-serif] font-bold text-lg text-white mb-3">Want the Full Treatment?</h2>
              <p className="text-sm text-[#8C95A6] mb-3">For carpet shampoo, engine bay, clay bar, sealant, and undercarriage:</p>
              <Link href="/services/detailing/full-detail-package" className="text-[#00C2FF] hover:underline text-sm font-medium">
                See the Full Detail Package →
              </Link>
            </div>

            <div className="flex items-center gap-3 p-4 glass-card">
              <svg className="w-5 h-5 text-[#00C2FF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-[#8C95A6]">Estimated time: <span className="text-white font-medium">2.5–3.5 hours</span></span>
            </div>
          </div>

          <div>
            <div className="glass-card p-6 sticky top-24">
              <h3 className="font-['Barlow',sans-serif] font-bold text-lg text-white mb-1">Book Premium Detail</h3>
              <p className="text-sm text-[#8C95A6] mb-4">By appointment. Call to check availability and schedule.</p>
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
            <div className="mt-4 glass-card p-5">
              <p className="text-xs text-[#8C95A6] uppercase tracking-wider font-medium mb-3">Compare Packages</p>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services/detailing/express-detail" className="text-[#8C95A6] hover:text-[#00C2FF] transition-colors">Express Detail (1–1.5 hrs)</Link></li>
                <li><span className="text-[#00C2FF]">Premium Detail ← You are here</span></li>
                <li><Link href="/services/detailing/full-detail-package" className="text-[#8C95A6] hover:text-[#00C2FF] transition-colors">Full Detail Package (4–6 hrs)</Link></li>
                <li><Link href="/services/detailing/ceramic-coating-package" className="text-[#8C95A6] hover:text-[#00C2FF] transition-colors">Ceramic Coating Package</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <FaqSection faqs={FAQS} withSchema title="Premium Detail — Common Questions" />
      </div>
    </>
  );
}
