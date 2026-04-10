import Image from "next/image";
import Link from "next/link";
import { Check, Clock, Shield, Star, ArrowRight } from "lucide-react";

const features = [
  "Complete room and whole-home interior painting",
  "Color consultation and design advice",
  "Trim, doors, and baseboard painting",
  "Ceiling painting and repairs",
  "Cabinet painting and refinishing",
  "Drywall repair and patching",
  " wallpaper removal",
  "Low-VOC and eco-friendly paint options",
];

const process = [
  { step: 1, title: "Consultation", description: "We discuss your vision, preferences, and provide a detailed estimate." },
  { step: 2, title: "Preparation", description: "Furniture covered, surfaces prepped, repairs made, surfaces cleaned." },
  { step: 3, title: "Priming", description: "Premium primer applied for optimal paint adhesion and coverage." },
  { step: 4, title: "Painting", description: "Multiple coats applied with precision using premium brushes and rollers." },
  { step: 5, title: "Inspection", description: "Thorough walkthrough to ensure flawless results before final approval." },
  { step: 6, title: "Cleanup", description: "Worksite thoroughly cleaned, furniture returned, debris removed." },
];

export default function InteriorPage() {
  return (
    <>
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
            alt="Interior painting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/90 via-[#1a365d]/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[#ed8936] font-semibold text-sm uppercase tracking-wider">
              Interior Painting
            </span>
            <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Transform Your Living Spaces
            </h1>
            <p className="text-white/80 text-lg mb-8">
              From cozy bedrooms to stunning living rooms, we bring your vision to life 
              with precision and care. Professional interior painting that refreshes, 
              protects, and transforms.
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
                What&apos;s Included
              </h2>
              <p className="text-[#718096] mb-6">
                Our interior painting service covers every aspect of your project, 
                from initial consultation to final cleanup. We handle it all so 
                you can focus on enjoying your newly transformed space.
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
            <div className="bg-[#f7fafc] rounded-2xl p-8">
              <h3 className="font-semibold text-xl text-[#1a365d] mb-6">
                Why Choose Our Interior Services?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ed8936]/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-[#ed8936]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a365d]">Premium Paints</h4>
                    <p className="text-[#718096] text-sm">
                      We use top-quality, low-VOC paints from trusted brands like Benjamin Moore and Sherwin-Williams.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ed8936]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#ed8936]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a365d]">On-Time Completion</h4>
                    <p className="text-[#718096] text-sm">
                      We respect your schedule and provide realistic timelines—we deliver on our promises.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ed8936]/10 flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-[#ed8936]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a365d]">5-Star Rated</h4>
                    <p className="text-[#718096] text-sm">
                      Our customers consistently rate us 5 stars for quality, communication, and professionalism.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f7fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#1a365d]">
              Our Process
            </h2>
            <p className="text-[#718096] mt-2">
              A systematic approach that ensures exceptional results every time
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#ed8936] text-white flex items-center justify-center font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg text-[#1a365d] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#718096] text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-white mb-4">
            Ready to Refresh Your Interiors?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Get a free estimate for your interior painting project. 
            We&apos;ll help you choose the perfect colors and finish.
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
