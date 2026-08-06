import { REVIEWS, BUSINESS } from "@/lib/business-config";
import StarRating from "@/components/ui/StarRating";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-[#0D0D10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-8 h-0.5 bg-[#00C2FF]" />
            <span className="text-xs text-[#00C2FF] uppercase tracking-widest font-semibold">What Customers Say</span>
            <div className="w-8 h-0.5 bg-[#00C2FF]" />
          </div>
          <h2 className="font-['Barlow',sans-serif] font-bold text-3xl sm:text-4xl text-white mb-4">
            Trusted by North Port Drivers
          </h2>
          <div className="flex items-center justify-center gap-3">
            <StarRating rating={BUSINESS.rating.value} size="lg" />
            <span className="text-2xl font-bold text-white">{BUSINESS.rating.value}</span>
            <span className="text-[#8C95A6]">·</span>
            <span className="text-[#8C95A6]">{BUSINESS.rating.count} Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((review) => (
            <div key={review.id} className="glass-card p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-white">{review.author}</p>
                  <StarRating rating={review.rating} size="sm" />
                </div>
                <span className="text-xs text-[#8C95A6]">
                  {new Date(review.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                </span>
              </div>
              <p className="text-sm text-[#8C95A6] leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center gap-1.5 text-xs text-[#8C95A6]">
                <svg className="w-3 h-3 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google Review
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={BUSINESS.social.googleBusinessProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/15 text-[#8C95A6] hover:text-white hover:border-white/25 transition-all duration-200 text-sm font-medium"
          >
            Leave a Google Review
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
