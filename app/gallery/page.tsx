import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business-config";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Car Wash Gallery | North Port Car Wash Photos",
  description:
    "Photos of North Port Car Wash — our wash tunnel, detailing bay, vacuum stations, and facility on S Tamiami Trail in North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/gallery` },
};

const GALLERY_SECTIONS = [
  {
    title: "Wash Tunnel",
    description: "Our drive-through tunnel wash facility on S Tamiami Trail.",
    placeholders: 4,
  },
  {
    title: "Detailing Work",
    description: "Before-and-after results from our professional detailing services.",
    placeholders: 6,
  },
  {
    title: "Our Facility",
    description: "The vacuum bays, entrance, and grounds at North Port Car Wash.",
    placeholders: 4,
  },
];

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Gallery", href: "/gallery" }]} />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#00C2FF]" />
            <span className="text-xs text-[#00C2FF] uppercase tracking-widest font-semibold">Photos</span>
          </div>
          <h1 className="font-['Barlow',sans-serif] font-black text-4xl sm:text-5xl text-white mb-4">Gallery</h1>
          <p className="text-lg text-[#8C95A6] max-w-xl">
            A look at our facility, the wash process, and results from our detailing services.
          </p>
          <p className="text-sm text-[#8C95A6]/60 mt-2">
            📸 Real photos coming soon — placeholder layouts shown below. Contact us to see before/after detailing results.
          </p>
        </div>

        <div className="space-y-14">
          {GALLERY_SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-2">{section.title}</h2>
              <p className="text-sm text-[#8C95A6] mb-5">{section.description}</p>
              <div className={`grid gap-3 ${section.placeholders === 6 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2 sm:grid-cols-4"}`}>
                {Array.from({ length: section.placeholders }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-video rounded-xl bg-[#111114] border border-white/5 flex flex-col items-center justify-center gap-2 group hover:border-[#00C2FF]/20 transition-colors"
                    aria-label={`${section.title} photo ${i + 1} — placeholder`}
                  >
                    <svg className="w-8 h-8 text-[#2A2A32] group-hover:text-[#00C2FF]/30 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <span className="text-xs text-[#2A2A32]">Photo {i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 glass-card p-8 text-center">
          <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-2">Want to See Detailing Results?</h2>
          <p className="text-[#8C95A6] mb-6 max-w-md mx-auto">
            Call us or visit our Google Business Profile to see before-and-after photos from our detailing customers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BUSINESS.social.googleBusinessProfile} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-[#00C2FF] text-black font-bold hover:bg-[#00AADE] transition-colors">
              View on Google Business
            </a>
            <Link href="/contact" className="px-6 py-3 rounded-xl bg-white/5 border border-white/15 text-white hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
