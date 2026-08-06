import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import { BUSINESS } from "@/lib/business-config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.siteUrl),
  title: {
    default: "North Port Car Wash | Touchless Wash & Detailing in North Port, FL",
    template: "%s | North Port Car Wash",
  },
  description:
    "North Port Car Wash on S Tamiami Trail offers touchless car wash, free vacuums, professional detailing, and unlimited wash memberships. Serving North Port, Port Charlotte, Venice & Sarasota County.",
  keywords: [
    "car wash North Port FL",
    "touchless car wash North Port",
    "car detailing North Port Florida",
    "car wash near me North Port",
    "unlimited car wash membership Sarasota County",
  ],
  authors: [{ name: "North Port Car Wash" }],
  creator: "North Port Car Wash",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BUSINESS.siteUrl,
    siteName: BUSINESS.name,
    title: "North Port Car Wash | Touchless Wash & Detailing in North Port, FL",
    description:
      "Touchless car wash, free interior vacuums, professional detailing, and unlimited membership plans on the Tamiami Trail in North Port, FL.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "North Port Car Wash — Touchless Wash & Detailing in North Port, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "North Port Car Wash | Touchless Wash & Detailing in North Port, FL",
    description:
      "Touchless car wash, free vacuums, and professional detailing in North Port, FL. Serving Sarasota & Charlotte County.",
    images: ["/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BUSINESS.siteUrl,
  },
  verification: {
    google: "ZTyG6iSh4kpg13RFzCL_Vll1G7_3GR6V0N1slX68k4Q",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@600;700;800;900&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0A0A0B] text-[#F0F2F5] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
