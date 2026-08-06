import type { Metadata } from "next";
import { BUSINESS, REVIEWS } from "@/lib/business-config";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import StarRating from "@/components/ui/StarRating";

export const metadata: Metadata = {
  title: "Customer Reviews | North Port Car Wash North Port FL",
  description:
    "Read what customers say about North Port Car Wash. 4.2 stars across 295 Google reviews — friendly staff, free vacuums, fair prices, and professional service.",
  alternates: { canonical: `${BUSINESS.siteUrl}/reviews` },
};

export default function ReviewsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Reviews", href: "/reviews" }]} />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#00C2FF]" />
            <span className="text-xs text-[#00C2FF] uppercase tracking-widest font-semibold">What Customers Say</span>
            <div className="w-8 h-0.5 bg-[#00C2FF]" />
          </div>
          <h1 className="font-['Barlow',sans-serif] font-black text-4xl sm:text-5xl text-white mb-4">
            Customer Reviews
          </h1>

          {/* Aggregate rating */}
          <div className="inline-flex flex-col items-center glass-card px-8 py-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-['Barlow',sans-serif] font-black text-5xl text-white">{BUSINESS.rating.value}</span>
              <div>
                <StarRating rating={BUSINESS.rating.value} size="lg" />
                <p className="text-sm text-[#8C95A6] mt-1">{BUSINESS.rating.count} Google Reviews</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <svg className="w-4 h-4 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm text-[#8C95A6]">Verified Google Reviews</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {REVIEWS.map((review) => (
            <div key={review.id} className="glass-card p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-white">{review.author}</p>
                  <StarRating rating={review.rating} size="sm" />
                </div>
                <span className="text-xs text-[#8C95A6]">
                  {new Date(review.date).toLocaleDateString("en-US", { year: "numeric", month: "long" })}
                </span>
              </div>
              <p className="text-sm text-[#8C95A6] leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center gap-1.5 text-xs text-[#8C95A6] pt-2 border-t border-white/5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="11" fill="#4285F4" opacity="0.15"/>
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google Review — {BUSINESS.name}
              </div>
            </div>
          ))}
        </div>

        {/* Leave a review CTA */}
        <div className="glass-card p-8 text-center border border-[#00C2FF]/10">
          <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-2">Visited Us Recently?</h2>
          <p className="text-[#8C95A6] mb-6 max-w-md mx-auto">
            Your review helps other North Port and Port Charlotte area drivers find a trustworthy car wash. It also means a lot to our team.
          </p>
          <a
            href={BUSINESS.social.googleBusinessProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[#00C2FF] text-black font-bold hover:bg-[#00AADE] transition-colors"
          >
            Leave a Google Review
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
