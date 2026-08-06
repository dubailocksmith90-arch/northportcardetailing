import Link from "next/link";
import { SERVICE_AREA_CITIES, BUSINESS } from "@/lib/business-config";

export default function LocationsSection() {
  return (
    <section id="service-area" className="py-20 bg-[#0D0D10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-0.5 bg-[#00C2FF]" />
              <span className="text-xs text-[#00C2FF] uppercase tracking-widest font-semibold">Service Area</span>
            </div>
            <h2 className="font-['Barlow',sans-serif] font-bold text-3xl sm:text-4xl text-white mb-4">
              Serving Sarasota &amp; Charlotte County
            </h2>
            <p className="text-[#8C95A6] mb-6 leading-relaxed">
              North Port Car Wash sits right on the S Tamiami Trail (US-41), making it easy to reach from throughout Sarasota and Charlotte counties. Whether you&apos;re coming from Port Charlotte, Venice, or anywhere between, we&apos;re just a short drive away.
            </p>

            <div className="grid grid-cols-2 gap-2 mb-8">
              {SERVICE_AREA_CITIES.map((city) => (
                <Link
                  key={city.slug}
                  href={city.primary ? "/" : `/locations/${city.slug}`}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm transition-colors ${
                    city.primary
                      ? "bg-[#00C2FF]/10 border border-[#00C2FF]/30 text-[#00C2FF] font-medium"
                      : "bg-white/5 border border-white/10 text-[#8C95A6] hover:text-white hover:border-white/20"
                  }`}
                >
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {city.name}, {city.state}
                  {city.primary && <span className="ml-auto text-xs opacity-70">← We&apos;re here</span>}
                </Link>
              ))}
            </div>

            <div className="p-4 bg-[#00C2FF]/5 border border-[#00C2FF]/15 rounded-xl text-sm text-[#8C95A6]">
              <p>
                <span className="text-white font-medium">📍 {BUSINESS.address.full}</span>
                <br />
                Conveniently located on US-41, just off I-75 at the North Port exits. Look for us on the Tamiami Trail near Warm Mineral Springs Park.
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] bg-[#111114] flex items-center justify-center">
            {/* Map embed placeholder — replace with real Google Maps embed */}
            <div className="text-center text-[#8C95A6] p-8">
              <svg className="w-12 h-12 mx-auto mb-3 text-[#00C2FF]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-sm mb-3">14164 S Tamiami Trl, North Port, FL 34287</p>
              <a
                href={BUSINESS.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00C2FF] text-black text-sm font-semibold hover:bg-[#00AADE] transition-colors"
              >
                Open in Google Maps
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
