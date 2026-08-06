import Link from "next/link";
import { WASH_SERVICES, DETAILING_PACKAGES } from "@/lib/business-config";

const ICONS: Record<string, React.ReactNode> = {
  droplets: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c0 0-7.5 8.25-7.5 13.5a7.5 7.5 0 0015 0C19.5 10.5 12 2.25 12 2.25z" />
    </svg>
  ),
  wind: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
    </svg>
  ),
  sparkles: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  ),
  infinity: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  ),
  gift: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
    </svg>
  ),
};

const DETAILING_TIER_COLORS = ["#8C95A6", "#00C2FF", "#A8B5C8", "#E8B94F"];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Express Wash Track */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-0.5 bg-[#00C2FF]" />
          <span className="text-xs text-[#00C2FF] uppercase tracking-widest font-semibold">Express Lane</span>
        </div>
        <h2 className="font-['Barlow',sans-serif] font-bold text-3xl sm:text-4xl text-white mb-2">
          Wash Services
        </h2>
        <p className="text-[#8C95A6] mb-8 max-w-xl">
          Drive up and drive away cleaner. No appointment needed — our tunnel wash is ready when you are, with free vacuums every visit.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WASH_SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/wash/${service.slug}`}
              className="group glass-card p-6 glow-border hover:border-[#00C2FF]/30 hover:shadow-[0_4px_24px_rgba(0,0,0,0.6),0_0_20px_rgba(0,194,255,0.08)] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#00C2FF]/10 flex items-center justify-center text-[#00C2FF] group-hover:bg-[#00C2FF]/15 transition-colors">
                  {ICONS[service.icon]}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1 group-hover:text-[#00C2FF] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-[#8C95A6] leading-relaxed">{service.tagline}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs text-[#00C2FF] font-medium">
                Learn more
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Detailing Track */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-0.5 bg-[#A8B5C8]" />
          <span className="text-xs text-[#A8B5C8] uppercase tracking-widest font-semibold">By Appointment</span>
        </div>
        <h2 className="font-['Barlow',sans-serif] font-bold text-3xl sm:text-4xl text-white mb-2">
          Detailing Packages
        </h2>
        <p className="text-[#8C95A6] mb-8 max-w-xl">
          Scheduled, appointment-based detailing from a quick express refresh to a full ceramic coating treatment. Call or fill out our quote form to book.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DETAILING_PACKAGES.map((pkg, i) => (
            <Link
              key={pkg.slug}
              href={`/services/detailing/${pkg.slug}`}
              className={`group relative glass-card p-6 glow-border transition-all duration-300 ${pkg.popular ? "ring-1 ring-[#00C2FF]/30" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00C2FF] text-black text-xs font-bold px-3 py-0.5 rounded-full">
                  Most Popular
                </div>
              )}
              <div
                className="w-2 h-2 rounded-full mb-4"
                style={{ backgroundColor: DETAILING_TIER_COLORS[i] }}
              />
              <h3 className="font-['Barlow',sans-serif] font-bold text-lg text-white mb-1 group-hover:text-[#00C2FF] transition-colors">
                {pkg.name}
              </h3>
              <p className="text-sm text-[#8C95A6] mb-3">{pkg.tagline}</p>
              <p className="text-xs text-[#8C95A6]">⏱ {pkg.duration}</p>
              <div className="mt-4 flex items-center gap-1 text-xs text-[#A8B5C8] font-medium">
                View details
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-[#8C95A6] hover:text-[#00C2FF] transition-colors"
          >
            View all 30+ detailing services
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
