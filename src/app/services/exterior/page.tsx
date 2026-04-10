import Image from "next/image";
import Link from "next/link";
import { Check, Shield, Droplets, Sun, Wind, ArrowRight } from "lucide-react";

const features = [
  "Complete exterior painting and staining",
  "Surface preparation and power washing",
  "Siding repair and replacement",
  "Deck and fence staining/ painting",
  "Trim and soffit painting",
  "Caulking and weatherproofing",
  "Mildew and mold treatment",
  "Premium weather-resistant paints",
];

const whyChoose = [
  {
    icon: Shield,
    title: "Weather Protection",
    description: "Premium paints that withstand harsh Illinois weather, protecting your home for years.",
  },
  {
    icon: Droplets,
    title: "Moisture Barrier",
    description: "Proper sealing and priming prevents water damage, rot, and structural issues.",
  },
  {
    icon: Sun,
    title: "UV Resistance",
    description: "Fade-resistant colors that stay vibrant season after season.",
  },
  {
    icon: Wind,
    title: "Curb Appeal",
    description: "A fresh exterior transforms your home&apos;s appearance and increases value.",
  },
];

export default function ExteriorPage() {
  return (
    <>
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            alt="Exterior painting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/90 via-[#1a365d]/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[#ed8936] font-semibold text-sm uppercase tracking-wider">
              Exterior Painting
            </span>
            <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Protect and Beautify Your Home
            </h1>
            <p className="text-white/80 text-lg mb-8">
              First impressions matter. Our professional exterior painting services 
              enhance your home&apos;s appearance while providing essential protection 
              against the elements.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-[#ed8936] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#dd6b20] transition-colors"
            >
              Get Free Estimate <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#1a365d] mb-6">
                Complete Exterior Services
              </h2>
              <p className="text-[#718096] mb-6">
                Your home&apos;s exterior faces constant exposure to sun, rain, wind, and 
                temperature changes. Our comprehensive services ensure lasting beauty 
                and protection.
              </p>
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#38a169] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#2d3748]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="font-semibold text-xl text-[#1a365d]">
                Why Exterior Painting Matters
              </h3>
              <div className="grid gap-4">
                {whyChoose.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 bg-[#f7fafc] rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-[#ed8936]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#ed8936]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1a365d]">{item.title}</h4>
                      <p className="text-[#718096] text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-white mb-4">
            Ready to Update Your Home&apos;s Exterior?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for a free exterior painting estimate. 
            We&apos;ll assess your home and provide a detailed quote.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-[#ed8936] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#dd6b20] transition-colors"
          >
            Get Your Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
