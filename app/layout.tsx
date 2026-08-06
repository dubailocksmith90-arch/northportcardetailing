import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import WebsiteSchema from "@/components/schema/WebsiteSchema";
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
    "ceramic coating North Port FL",
    "car detailing Tamiami Trail",
  ],
  authors: [{ name: "North Port Car Wash" }],
  creator: "North Port Car Wash",
  publisher: "North Port Car Wash",
  category: "Automotive",
  applicationName: "North Port Car Wash",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
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
        type: "image/jpeg",
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
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/manifest.json",
  other: {
    // Geo meta tags — parsed by Bing, local SEO tools, and older crawlers
    "geo.region": "US-FL",
    "geo.placename": "North Port, Florida",
    "geo.position": `${BUSINESS.geo.latitude};${BUSINESS.geo.longitude}`,
    ICBM: `${BUSINESS.geo.latitude}, ${BUSINESS.geo.longitude}`,
    // Business info for aggregators
    "business:contact_data:street_address": BUSINESS.address.street,
    "business:contact_data:locality": BUSINESS.address.city,
    "business:contact_data:region": BUSINESS.address.state,
    "business:contact_data:postal_code": BUSINESS.address.zip,
    "business:contact_data:country_name": "United States",
    "business:contact_data:phone_number": BUSINESS.phone.display,
    "business:contact_data:website": BUSINESS.siteUrl,
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
        {/* DNS prefetch as HTTP/1.1 fallback for preconnect */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        {/* Preconnect for font origin negotiation */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Barlow display font — preload critical weights */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@700;800;900&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Theme color for mobile browser chrome */}
        <meta name="theme-color" content="#00C2FF" />
        <meta name="msapplication-TileColor" content="#0A0A0B" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="bg-[#0A0A0B] text-[#F0F2F5] antialiased">
        <WebsiteSchema />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
