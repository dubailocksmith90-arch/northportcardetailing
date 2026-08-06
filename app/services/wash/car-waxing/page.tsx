import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business-config";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Car Wax Add-On | North Port Car Wash",
  description:
    "Add a protective wax coat to your tunnel wash at North Port Car Wash. UV protection, water-beading shine, and paint protection — applied automatically during the wash cycle. North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/wash/car-waxing` },
};

export default function CarWaxingPage() {
  return (
    <ServiceDetailPage
      slug="car-waxing"
      category="wash"
      badge="Express Wash Add-On"
      name="Car Waxing"
      tagline="Protective shine applied right in the tunnel — no extra stop required."
      description="Our in-tunnel car wax add-on coats your vehicle with a carnauba-blend wax formula during the wash cycle, adding a layer of paint protection that repels water, blocks UV rays, and leaves your car with a glossy finish. Simply select it at the kiosk when you drive in — no detailing appointment needed."
      included={[
        "Carnauba-blend wax application during wash cycle",
        "Water-beading hydrophobic protection",
        "UV ray blocking coat",
        "Enhanced gloss and shine",
        "Safe for all factory paint finishes",
      ]}
      notIncluded={[
        { label: "Hand-Applied Carnauba Wax Detail →", href: "/services/detailing/carnauba-wax" },
        { label: "Paint Sealant (longer-lasting) →", href: "/services/wash/sealant" },
        { label: "Ceramic Coating (multi-year protection) →", href: "/services/detailing/ceramic-coating" },
      ]}
      notIncludedNote="For deeper or longer-lasting protection, consider our hand-applied detailing options:"
      duration="Included in your tunnel wash time (adds ~1 minute)"
      ctaType="drive-in"
      faqTitle="Car Wax Add-On — Common Questions"
      faqs={[
        {
          question: "What type of wax is used in the tunnel?",
          answer:
            "We use a carnauba-blend liquid wax formulated for automatic wash application. It provides real protective benefits including water repellency and UV protection, though it has a shorter lifespan (2–4 weeks) compared to hand-applied waxes or sealants.",
        },
        {
          question: "How often should I wax my car in Florida?",
          answer:
            "Florida's intense UV exposure and salt air mean paint protection matters more here than in most states. For tunnel wax, we recommend adding it every 2–4 washes to maintain coverage. For longer-lasting protection, consider our hand carnauba detail or a synthetic paint sealant.",
        },
        {
          question: "What's the difference between tunnel wax and hand wax?",
          answer:
            "Tunnel wax is a liquid formula applied by the wash equipment during your wash cycle — fast and convenient, but not as thorough or durable as a hand application. Our hand-applied carnauba wax detail is applied section by section by a detailer and buffed to a deeper, more even finish that lasts 4–8 weeks.",
        },
        {
          question: "Is wax safe for wrapped or ceramic-coated cars?",
          answer:
            "For ceramic-coated vehicles, standard wax should generally be avoided as it can reduce the coating's hydrophobic properties over time. For vinyl-wrapped cars, check with the wrap manufacturer. When in doubt, call us and we can advise.",
        },
      ]}
      relatedServices={[
        { label: "Paint Sealant (longer-lasting)", href: "/services/wash/sealant" },
        { label: "Hand Carnauba Wax Detail", href: "/services/detailing/carnauba-wax" },
        { label: "Ceramic Coating", href: "/services/detailing/ceramic-coating" },
        { label: "Unlimited Membership", href: "/services/wash/unlimited-wash-plans" },
      ]}
    />
  );
}
