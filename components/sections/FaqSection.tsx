"use client";

import { useState } from "react";
import FaqSchema from "@/components/schema/FaqSchema";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
  withSchema?: boolean;
}

export default function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
  subtitle,
  withSchema = true,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {withSchema && <FaqSchema faqs={faqs} />}

      <div className="text-center mb-12">
        <h2 className="font-['Barlow',sans-serif] font-bold text-3xl sm:text-4xl text-white mb-3">
          {title}
        </h2>
        {subtitle && <p className="text-[#8C95A6]">{subtitle}</p>}
      </div>

      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <div key={i} className="glass-card overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/[0.02] transition-colors min-h-[44px]"
              aria-expanded={openIndex === i}
            >
              <span className="font-medium text-white">{faq.question}</span>
              <svg
                className={`w-5 h-5 flex-shrink-0 text-[#00C2FF] transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === i && (
              <div className="px-5 pb-5 text-sm text-[#8C95A6] leading-relaxed border-t border-white/5 pt-4">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
