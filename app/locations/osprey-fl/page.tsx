import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business-config";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Car Wash Near Osprey, FL | North Port Car Wash",
  description:
    "North Port Car Wash is approximately 15–20 minutes from Osprey, FL via US-41. Tunnel wash, free vacuums, and professional detailing for South Sarasota County drivers.",
  alternates: { canonical: `${BUSINESS.siteUrl}/locations/osprey-fl` },
};

const FAQS = [
  {
    question: "How far is North Port Car Wash from Osprey, FL?",
    answer:
      "Osprey is one of the closest communities to North Port Car Wash — approximately 15–20 minutes south on US-41 (Tamiami Trail). From near Oscar Scherer State Park or the Osprey area along the Trail, simply head south and look for us at 14164 S Tamiami Trail in North Port.",
  },
  {
    question: "Is there a full-service car wash near Osprey?",
    answer:
      "North Port Car Wash on US-41 is one of the most accessible full-service options for Osprey residents — offering a tunnel wash, free vacuums, and professional detailing by appointment. We are approximately 15–20 minutes south, making us a practical choice for the Osprey corridor.",
  },
  {
    question: "Can I get detailing done the same day near Osprey?",
    answer:
      "Same-day express detailing is sometimes available — call (941) 564-6447 to check availability. For more extensive services like ceramic coating or full detail packages, we recommend booking a few days in advance. We are open daily 7 AM – 7 PM.",
  },
];

export default function OspreyPage() {
  return (
    <>
      <LocalBusinessSchema areaServed={["Osprey, FL", "North Port, FL", "Sarasota County, FL"]} />
      <BreadcrumbSchema items={[{ name: "Locations", href: "/#service-area" }, { name: "Car Wash Near Osprey FL", href: "/locations/osprey-fl" }]} />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-[#8C95A6] mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Car Wash Near Osprey, FL</span>
        </nav>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#00C2FF]" />
            <span className="text-xs text-[#00C2FF] uppercase tracking-widest font-semibold">Serving Osprey, FL</span>
          </div>
          <h1 className="font-['Barlow',sans-serif] font-black text-4xl sm:text-5xl text-white mb-4">
            Car Wash Near Osprey, FL
          </h1>
          <p className="text-lg text-[#8C95A6] leading-relaxed max-w-2xl">
            Osprey sits along US-41 (Tamiami Trail) just 15–20 minutes north of North Port Car Wash. Osprey residents who travel south on the Trail — near Oscar Scherer State Park, the Osprey Junction area, or the South Creek corridor — pass directly through our zone. We offer a tunnel wash, free vacuums, and professional detailing at 14164 S Tamiami Trail in North Port.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          <div>
            <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-4">Getting Here from Osprey</h2>
            <p className="text-[#8C95A6] leading-relaxed mb-4">
              From the Osprey area on US-41, simply continue south on the Tamiami Trail through Nokomis and Laurel into North Port. We are at 14164 S Tamiami Trail — approximately 15–20 minutes from the Osprey corridor.
            </p>
            <p className="text-[#8C95A6] leading-relaxed mb-6">
              Osprey&apos;s location between Little Sarasota Bay and the Gulf means coastal salt air is a constant presence. Vehicles near the water accumulate salt residue on paint and in door jams faster than inland areas — regular washing and paint protection help maintain your vehicle&apos;s appearance and resale value.
            </p>
            <div className="glass-card p-5">
              <address className="not-italic text-sm text-[#8C95A6] space-y-1">
                <p className="font-medium text-white">{BUSINESS.name}</p>
                <p>{BUSINESS.address.street}</p>
                <p>{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</p>
                <p className="mt-2"><a href={BUSINESS.phone.href} className="text-[#00C2FF] hover:underline">{BUSINESS.phone.display}</a></p>
                <p className="text-xs mt-1">Open Daily 7 AM – 7 PM · Touchless: 24/7</p>
              </address>
              <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-sm text-[#00C2FF] hover:underline">
                Directions from Osprey →
              </a>
            </div>
          </div>
          <div>
            <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-4">Services for Osprey Drivers</h2>
            <ul className="space-y-3">
              {[
                "Tunnel car wash — quick in-and-out, no appointment",
                "24/7 touchless bay — available any time",
                "Free self-serve vacuums included with every wash",
                "Unlimited monthly membership for frequent washers",
                "Professional detailing — interior, exterior, full packages",
                "Ceramic coating for long-term coastal protection",
                "Paint correction to remove oxidation and water spots",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#8C95A6]">
                  <svg className="w-4 h-4 text-[#00C2FF] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <FaqSection faqs={FAQS} withSchema title="Osprey FL Car Wash — Common Questions" />

        <div className="mt-8 glass-card p-8 text-center">
          <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-2">Visit Us from Osprey</h2>
          <p className="text-[#8C95A6] mb-6">About 15–20 minutes south on US-41. Open daily 7 AM – 7 PM.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-xl bg-[#00C2FF] text-black font-bold hover:bg-[#00AADE] transition-colors">Get Directions</a>
            <a href={BUSINESS.phone.href} className="px-8 py-3 rounded-xl bg-white/5 border border-white/15 text-white hover:bg-white/10 transition-colors">{BUSINESS.phone.display}</a>
          </div>
        </div>
      </div>
    </>
  );
}
