import Link from "next/link";
import { BUSINESS } from "@/lib/business-config";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="text-center max-w-lg">
        <div className="font-['Barlow',sans-serif] font-black text-8xl text-[#00C2FF]/15 leading-none mb-4">404</div>
        <h1 className="font-['Barlow',sans-serif] font-black text-3xl sm:text-4xl text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-[#8C95A6] mb-8 leading-relaxed">
          The page you are looking for does not exist or may have moved. Try heading back to the homepage or exploring our services.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link href="/" className="px-8 py-3 rounded-xl bg-[#00C2FF] text-black font-bold hover:bg-[#00AADE] transition-colors">
            Back to Home
          </Link>
          <Link href="/services" className="px-8 py-3 rounded-xl bg-white/5 border border-white/15 text-white hover:bg-white/10 transition-colors">
            Browse Services
          </Link>
        </div>
        <div className="glass-card p-5 text-sm text-[#8C95A6]">
          <p>Need help? Call us at <a href={BUSINESS.phone.href} className="text-[#00C2FF] hover:underline">{BUSINESS.phone.display}</a></p>
          <p className="mt-1">{BUSINESS.address.street} · North Port, FL · Open Daily 7 AM – 7 PM</p>
        </div>
      </div>
    </div>
  );
}
