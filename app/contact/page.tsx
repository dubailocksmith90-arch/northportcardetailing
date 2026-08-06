"use client";

import { useState } from "react";
import Link from "next/link";
import { BUSINESS, HOURS_DISPLAY } from "@/lib/business-config";

const DAY_LABELS = [
  ["Monday", HOURS_DISPLAY.monday],
  ["Tuesday", HOURS_DISPLAY.tuesday],
  ["Wednesday", HOURS_DISPLAY.wednesday],
  ["Thursday", HOURS_DISPLAY.thursday],
  ["Friday", HOURS_DISPLAY.friday],
  ["Saturday", HOURS_DISPLAY.saturday],
  ["Sunday", HOURS_DISPLAY.sunday],
] as const;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-0.5 bg-[#00C2FF]" />
          <span className="text-xs text-[#00C2FF] uppercase tracking-widest font-semibold">Get in Touch</span>
        </div>
        <h1 className="font-['Barlow',sans-serif] font-black text-4xl sm:text-5xl text-white mb-4">Contact Us</h1>
        <p className="text-lg text-[#8C95A6] max-w-xl leading-relaxed">
          Questions about services? Want to schedule a detailing appointment? Call us or send a message and we will get back to you promptly.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <div className="glass-card p-6 mb-6">
            <h2 className="font-['Barlow',sans-serif] font-bold text-xl text-white mb-5">Visit or Call</h2>

            <div className="space-y-5">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#00C2FF]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#00C2FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#8C95A6] uppercase tracking-wider mb-0.5">Address</p>
                  <address className="not-italic text-sm text-white leading-relaxed">
                    {BUSINESS.address.street}<br />
                    {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                  </address>
                  <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-[#00C2FF] hover:underline mt-1 inline-block">
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#00C2FF]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#00C2FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#8C95A6] uppercase tracking-wider mb-0.5">Phone</p>
                  <a href={BUSINESS.phone.href} className="text-white text-sm font-medium hover:text-[#00C2FF] transition-colors">
                    {BUSINESS.phone.display}
                  </a>
                  <p className="text-xs text-[#8C95A6] mt-0.5">Best for scheduling detailing appointments</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h2 className="font-['Barlow',sans-serif] font-bold text-xl text-white mb-4">Business Hours</h2>
            <div className="space-y-2">
              {DAY_LABELS.map(([day, hours]) => (
                <div key={day} className="flex items-center justify-between text-sm">
                  <span className="text-[#8C95A6]">{day}</span>
                  <span className="text-white">{hours}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/5">
              <p className="text-xs text-[#00C2FF]">Touchless self-serve bay: Open 24/7</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          {submitted ? (
            <div className="glass-card p-10 text-center h-full flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/30 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#00C2FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-2">Message Sent!</h2>
              <p className="text-[#8C95A6] mb-6 max-w-sm">
                Thank you for reaching out. We will get back to you as soon as possible. For immediate assistance, call us at {BUSINESS.phone.display}.
              </p>
              <Link href="/" className="text-[#00C2FF] hover:underline text-sm">← Back to Home</Link>
            </div>
          ) : (
            <div className="glass-card p-6">
              <h2 className="font-['Barlow',sans-serif] font-bold text-xl text-white mb-5">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#8C95A6] uppercase tracking-wider mb-1.5" htmlFor="name">Name *</label>
                    <input
                      id="name"
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-[#8C95A6]/50 focus:border-[#00C2FF]/50 focus:outline-none transition-colors text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#8C95A6] uppercase tracking-wider mb-1.5" htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-[#8C95A6]/50 focus:border-[#00C2FF]/50 focus:outline-none transition-colors text-sm"
                      placeholder="(941) 000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-[#8C95A6] uppercase tracking-wider mb-1.5" htmlFor="email">Email *</label>
                  <input
                    id="email"
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-[#8C95A6]/50 focus:border-[#00C2FF]/50 focus:outline-none transition-colors text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#8C95A6] uppercase tracking-wider mb-1.5" htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white focus:border-[#00C2FF]/50 focus:outline-none transition-colors text-sm"
                  >
                    <option value="" className="bg-[#111114]">Select a service...</option>
                    <option value="express-wash" className="bg-[#111114]">Express Tunnel Wash</option>
                    <option value="unlimited-membership" className="bg-[#111114]">Unlimited Membership</option>
                    <option value="express-detail" className="bg-[#111114]">Express Detail</option>
                    <option value="premium-detail" className="bg-[#111114]">Premium Detail</option>
                    <option value="full-detail" className="bg-[#111114]">Full Detail Package</option>
                    <option value="ceramic-coating" className="bg-[#111114]">Ceramic Coating Package</option>
                    <option value="interior-detail" className="bg-[#111114]">Interior Detailing</option>
                    <option value="exterior-detail" className="bg-[#111114]">Exterior Detailing</option>
                    <option value="fleet" className="bg-[#111114]">Fleet / Commercial</option>
                    <option value="other" className="bg-[#111114]">Other / General Question</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-[#8C95A6] uppercase tracking-wider mb-1.5" htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-[#8C95A6]/50 focus:border-[#00C2FF]/50 focus:outline-none transition-colors text-sm resize-none"
                    placeholder="Tell us what you need..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#00C2FF] text-black font-bold hover:bg-[#00AADE] transition-colors"
                >
                  Send Message
                </button>
                <p className="text-xs text-[#8C95A6] text-center">
                  For fastest response, call us at{" "}
                  <a href={BUSINESS.phone.href} className="text-[#00C2FF] hover:underline">{BUSINESS.phone.display}</a>
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
