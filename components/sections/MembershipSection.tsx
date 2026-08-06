import { BUSINESS } from "@/lib/business-config";

export default function MembershipSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Unlimited Membership */}
        <div className="glass-card p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#00C2FF]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/20">
              <svg className="w-4 h-4 text-[#00C2FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-xs text-[#00C2FF] font-semibold">Most Value</span>
            </div>
            <h2 className="font-['Barlow',sans-serif] font-bold text-2xl sm:text-3xl text-white mb-3">
              Unlimited Wash Membership
            </h2>
            <p className="text-[#8C95A6] mb-6 leading-relaxed">
              One flat monthly rate. Wash your car as often as you like. Our unlimited membership is perfect for daily drivers, saltwater exposure, or anyone who just prefers a consistently clean car without thinking about per-wash costs.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Unlimited tunnel washes all month",
                "Free vacuums with every visit",
                "Wax or sealant add-on discounts for members",
                "No contracts — cancel anytime",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#8C95A6]">
                  <svg className="w-4 h-4 text-[#00C2FF] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={BUSINESS.phone.href}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00C2FF] text-black font-bold hover:bg-[#00AADE] transition-colors"
            >
              Call to Sign Up
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Punch Card */}
        <div className="glass-card p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#A8B5C8]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <svg className="w-4 h-4 text-[#A8B5C8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
              </svg>
              <span className="text-xs text-[#A8B5C8] font-semibold">No Sign-Up Required</span>
            </div>
            <h2 className="font-['Barlow',sans-serif] font-bold text-2xl sm:text-3xl text-white mb-3">
              Punch Card Program
            </h2>
            <p className="text-[#8C95A6] mb-6 leading-relaxed">
              Prefer pay-as-you-go? Our punch card is the simplest loyalty reward we offer — just bring it every time you visit. After 9 paid washes, your 10th is completely free. No app, no account, no catch.
            </p>

            {/* Visual punch card */}
            <div className="bg-gradient-to-br from-[#1a1a1f] to-[#111114] border border-white/10 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-[#8C95A6] font-medium">YOUR PUNCH CARD</span>
                <span className="text-xs text-[#00C2FF]">10th wash FREE</span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-lg flex items-center justify-center text-xs font-bold ${
                      i < 9
                        ? "bg-[#00C2FF]/10 border border-[#00C2FF]/20 text-[#00C2FF]"
                        : "bg-[#00C2FF] text-black"
                    }`}
                  >
                    {i < 9 ? i + 1 : "★"}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm text-[#8C95A6]">
              Ask for your punch card at the kiosk. Available to all customers at no extra cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
