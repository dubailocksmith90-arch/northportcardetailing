const STEPS = [
  {
    number: "01",
    title: "Pull In",
    description: "Drive up to the tunnel entrance on S Tamiami Trail. No appointment needed for express wash — just pull in any time we're open.",
  },
  {
    number: "02",
    title: "Choose Your Wash",
    description: "Select your wash level at the kiosk — add wax, sealant, or other upgrades. Our staff is always around to help if you have questions.",
  },
  {
    number: "03",
    title: "Sit Back & Relax",
    description: "Ride through the tunnel and let our brush-and-jet combo do the work. The whole wash takes just a few minutes.",
  },
  {
    number: "04",
    title: "Vacuum & Go",
    description: "Pull into a free vacuum bay for a complimentary interior clean-out. Drive away with a car that looks and feels fresh from the inside out.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="w-8 h-0.5 bg-[#00C2FF]" />
          <span className="text-xs text-[#00C2FF] uppercase tracking-widest font-semibold">The Process</span>
          <div className="w-8 h-0.5 bg-[#00C2FF]" />
        </div>
        <h2 className="font-['Barlow',sans-serif] font-bold text-3xl sm:text-4xl text-white">
          How It Works
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STEPS.map((step, i) => (
          <div key={step.number} className="relative">
            {i < STEPS.length - 1 && (
              <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-[#00C2FF]/30 to-transparent z-0" />
            )}
            <div className="relative z-10 glass-card p-6">
              <div className="font-['Barlow',sans-serif] font-black text-5xl text-[#00C2FF]/15 leading-none mb-4">
                {step.number}
              </div>
              <h3 className="font-semibold text-white text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-[#8C95A6] leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
