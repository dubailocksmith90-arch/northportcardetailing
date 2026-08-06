import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business-config";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import MembershipSection from "@/components/sections/MembershipSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import LocationsSection from "@/components/sections/LocationsSection";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "North Port Car Wash | Touchless Wash & Detailing in North Port, FL",
  description:
    "North Port Car Wash offers touchless car wash, free interior vacuums, professional detailing, and unlimited membership plans on S Tamiami Trail in North Port, FL. Serving Sarasota and Charlotte County.",
  alternates: { canonical: BUSINESS.siteUrl },
};

const HOME_FAQS = [
  {
    question: "How much is a car wash in North Port, FL?",
    answer:
      "North Port Car Wash offers competitively priced wash packages on the Tamiami Trail, ranging from a basic exterior wash to premium wax and sealant combinations. Pricing is available at the kiosk. Call us at (941) 564-6447 for current pricing details.",
  },
  {
    question: "Is North Port Car Wash open on Sundays?",
    answer:
      "Yes — North Port Car Wash is open 7 days a week. Our staffed wash hours run daily until 7:00 PM. The touchless self-serve bay is available 24/7, including Sundays and holidays.",
  },
  {
    question: "Does North Port Car Wash offer free vacuums?",
    answer:
      "Yes. Free self-serve vacuum stations are included with every wash visit at no extra charge. Pull into any open vacuum bay after your tunnel wash and use them for as long as you need.",
  },
  {
    question: "Do I need an appointment for a car wash?",
    answer:
      "No appointment is needed for our express tunnel wash — just drive in during business hours or use the 24/7 touchless bay. Detailing services (full interior/exterior detail, ceramic coating, paint correction) are appointment-based. Call (941) 564-6447 to schedule.",
  },
  {
    question: "What is the punch card program?",
    answer:
      "Our punch card gives you a free 10th wash after every 9 paid washes. Pick up a card at the kiosk — no sign-up, no app required. It's our way of saying thank you to regular customers.",
  },
  {
    question: "Does North Port Car Wash offer unlimited wash memberships?",
    answer:
      "Yes. Our unlimited wash membership lets you wash your car as often as you like for one flat monthly rate. There are no contracts and you can cancel any time. Call us to learn about current membership tiers and pricing.",
  },
  {
    question: "Where is North Port Car Wash located?",
    answer:
      "We are at 14164 S Tamiami Trail (US-41), North Port, FL 34287 — easily accessible from North Port, Port Charlotte, Venice, Englewood, and surrounding areas. We are near Warm Mineral Springs Park on the Tamiami Trail corridor.",
  },
  {
    question: "Does North Port Car Wash offer detailing services?",
    answer:
      "Yes. In addition to our express tunnel wash, we offer a full range of professional detailing services including interior detail, exterior hand wash, clay bar treatment, paint correction, ceramic coating, and detailing packages from Express to Full Detail. Call to book an appointment.",
  },
];

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[]} />

      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <HowItWorks />
      <MembershipSection />

      {/* Gift Card CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-card p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-1">
              Gift Cards Available
            </h2>
            <p className="text-[#8C95A6]">
              Give the gift of a clean car — perfect for birthdays, Father&apos;s Day, or any occasion. Available in any amount.
            </p>
          </div>
          <a
            href={BUSINESS.phone.href}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00C2FF]/10 border border-[#00C2FF]/30 text-[#00C2FF] font-semibold hover:bg-[#00C2FF]/20 transition-colors whitespace-nowrap"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
            </svg>
            Ask About Gift Cards
          </a>
        </div>
      </section>

      <ReviewsSection />
      <LocationsSection />
      <FaqSection faqs={HOME_FAQS} />

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(0,194,255,0.08)_0%,transparent_70%)]" />
        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="font-['Barlow',sans-serif] font-black text-4xl sm:text-5xl text-white mb-4">
            Ready for a{" "}
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#A8B5C8] bg-clip-text text-transparent">
              Cleaner Car?
            </span>
          </h2>
          <p className="text-[#8C95A6] mb-8 text-lg">
            No appointment needed for express wash. Drive in any time — we&apos;re open daily on the Tamiami Trail.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BUSINESS.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00C2FF] text-black font-bold text-lg hover:bg-[#00AADE] transition-colors shadow-[0_0_30px_rgba(0,194,255,0.3)]"
            >
              Get Directions
            </a>
            <a
              href={BUSINESS.phone.href}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/15 text-white font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              {BUSINESS.phone.display}
            </a>
          </div>
          <p className="mt-6 text-sm text-[#8C95A6]">
            {BUSINESS.address.street} · North Port, FL 34287 · Open Daily until 7 PM
          </p>
        </div>
      </section>
    </>
  );
}
