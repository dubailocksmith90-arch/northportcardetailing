const FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Open 7 Days",
    description: "We're open every day of the week, and the touchless wash bay runs 24/7 — so you can get a clean car on your schedule, not ours.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Free Vacuums, Every Visit",
    description: "Unlike most car washes, we include free self-serve vacuum stations with every wash. No hidden upsells — it's just part of the deal.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
      </svg>
    ),
    title: "Punch Card Loyalty",
    description: "Your 10th wash is always on us. Our punch card program is simple — no apps, no email sign-up, just a card in your wallet that earns a free wash.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Friendly, Skilled Staff",
    description: "Our team — including our crew lead Owen — takes genuine pride in the work. It shows in every car that leaves our lot.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Fair Local Pricing",
    description: "We price competitively for the North Port, Port Charlotte, and Venice area — quality results without the premium price tag of chain washes.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Brush + Touchless Combo",
    description: "Our tunnel wash pairs soft-touch brush action with high-pressure rinse jets for a thorough, paint-safe clean that handles both caked-on grime and light road dust.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#0D0D10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-8 h-0.5 bg-[#00C2FF]" />
            <span className="text-xs text-[#00C2FF] uppercase tracking-widest font-semibold">Our Difference</span>
            <div className="w-8 h-0.5 bg-[#00C2FF]" />
          </div>
          <h2 className="font-['Barlow',sans-serif] font-bold text-3xl sm:text-4xl text-white mb-3">
            Why North Port Drivers Choose Us
          </h2>
          <p className="text-[#8C95A6] max-w-xl mx-auto">
            More than a quick rinse — a car wash experience built around convenience, value, and genuine care for your vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="glass-card p-6 flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#00C2FF]/10 flex items-center justify-center text-[#00C2FF]">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1.5">{feature.title}</h3>
                <p className="text-sm text-[#8C95A6] leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
