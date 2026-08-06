import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, REVIEWS } from "@/lib/business-config";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import StarRating from "@/components/ui/StarRating";

export const metadata: Metadata = {
  title: "About North Port Car Wash | Local Car Wash on Tamiami Trail",
  description:
    "Learn about North Port Car Wash — a locally operated car wash on the Tamiami Trail serving North Port, FL and Sarasota County. Meet our team and learn what makes us different.",
  alternates: { canonical: `${BUSINESS.siteUrl}/about` },
};

export default function AboutPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "About", href: "/about" }]} />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#00C2FF]" />
            <span className="text-xs text-[#00C2FF] uppercase tracking-widest font-semibold">Our Story</span>
          </div>
          <h1 className="font-['Barlow',sans-serif] font-black text-4xl sm:text-5xl text-white mb-6">
            About North Port Car Wash
          </h1>
          <p className="text-lg text-[#8C95A6] leading-relaxed max-w-2xl">
            North Port Car Wash is a locally operated car wash serving drivers on and around the S Tamiami Trail (US-41) in North Port, FL. We have been serving Sarasota and Charlotte County residents who want a reliable, honest car wash — without the chain-brand price tags or the indifferent service that often comes with them.
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-4">Built on the Tamiami Trail</h2>
            <p className="text-[#8C95A6] leading-relaxed mb-4">
              Our location at 14164 S Tamiami Trail puts us right in the flow of daily North Port life — accessible from the neighborhoods along Toledo Blade Boulevard, the Warm Mineral Springs corridor, and the Gulf Cove border area, as well as commuters traveling between North Port and Port Charlotte.
            </p>
            <p className="text-[#8C95A6] leading-relaxed mb-4">
              We built this wash with the belief that a clean car should not be complicated or expensive. That is why we include free vacuum stations with every wash, run our touchless bay 24 hours a day, and price our services fairly relative to what the market demands.
            </p>
            <p className="text-[#8C95A6] leading-relaxed">
              Over time, we have grown from a simple wash and vacuum operation into a full-service car care business — adding professional interior detailing, exterior paint correction, ceramic coating, and custom detailing packages for customers who want more than a rinse.
            </p>
          </div>
          <div className="glass-card p-8">
            <div className="text-center mb-6">
              <StarRating rating={BUSINESS.rating.value} size="lg" />
              <div className="mt-2">
                <span className="text-3xl font-bold text-white">{BUSINESS.rating.value}</span>
                <span className="text-[#8C95A6] ml-2">out of 5</span>
              </div>
              <p className="text-sm text-[#8C95A6] mt-1">{BUSINESS.rating.count} Google reviews</p>
            </div>
            <div className="space-y-4">
              {REVIEWS.slice(0, 3).map((r) => (
                <div key={r.id} className="border-t border-white/5 pt-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-white">{r.author}</span>
                    <StarRating rating={r.rating} size="sm" />
                  </div>
                  <p className="text-xs text-[#8C95A6] leading-relaxed">&ldquo;{r.text.slice(0, 120)}...&rdquo;</p>
                </div>
              ))}
            </div>
            <Link href="/reviews" className="mt-4 block text-center text-sm text-[#00C2FF] hover:underline">
              Read all reviews →
            </Link>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-6">Our Team</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="glass-card p-6">
              <div className="w-14 h-14 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/20 flex items-center justify-center mb-4">
                <span className="font-['Barlow',sans-serif] font-black text-2xl text-[#00C2FF]">O</span>
              </div>
              <h3 className="font-semibold text-white text-lg mb-2">Owen — Crew Lead</h3>
              <p className="text-sm text-[#8C95A6] leading-relaxed">
                Owen sets the tone for how we work. He has been with North Port Car Wash long enough to know most of our regular customers by name, and his approach to the job — thorough, good-natured, and genuinely invested in results — is reflected in the reviews we consistently receive about our staff.
              </p>
              <p className="text-sm text-[#8C95A6] mt-2">
                When customers mention &ldquo;friendly staff&rdquo; in their Google reviews, they are usually talking about Owen and the standard he has set for the whole crew.
              </p>
            </div>
            <div className="glass-card p-6">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-[#8C95A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white text-lg mb-2">The Rest of the Crew</h3>
              <p className="text-sm text-[#8C95A6] leading-relaxed">
                Our full team handles everything from the tunnel operations and vacuum bay maintenance to professional detailing appointments. We take pride in running a clean, well-maintained facility — because a car wash that looks neglected is not exactly the best advertisement for what we do.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-6">What We Stand For</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "Fair Pricing", desc: "We price services to be competitive with the North Port and Port Charlotte market — not inflated to subsidize a chain operation." },
              { title: "Honest Service", desc: "We tell you what you need, not what makes us the most margin. If your car does not need a full detail, we will say so." },
              { title: "Consistent Quality", desc: "The same standard of work, every visit. Our repeat customers come back because they know what to expect." },
            ].map((v) => (
              <div key={v.title} className="glass-card p-5">
                <div className="w-1.5 h-6 rounded-full bg-[#00C2FF] mb-3" />
                <h3 className="font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-[#8C95A6] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card p-8 text-center">
          <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-2">Come See Us</h2>
          <p className="text-[#8C95A6] mb-6 max-w-md mx-auto">
            We are open 7 days a week on the Tamiami Trail. No appointment needed for the tunnel wash.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-xl bg-[#00C2FF] text-black font-bold hover:bg-[#00AADE] transition-colors">
              Get Directions
            </a>
            <a href={BUSINESS.phone.href} className="px-8 py-3 rounded-xl bg-white/5 border border-white/15 text-white hover:bg-white/10 transition-colors">
              {BUSINESS.phone.display}
            </a>
          </div>
          <p className="mt-4 text-sm text-[#8C95A6]">{BUSINESS.address.full}</p>
        </div>
      </div>
    </>
  );
}
