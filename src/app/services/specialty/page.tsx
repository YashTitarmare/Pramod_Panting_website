import Image from "next/image";
import Link from "next/link";
import { Check, Palette, Sparkles, Brush, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Faux Finishes",
    description: "Marble, wood grain, Venetian plaster, and other decorative techniques.",
  },
  {
    icon: Brush,
    title: "Murals & Graphics",
    description: "Custom wall murals, children's room themes, and branded environments.",
  },
  {
    icon: Sparkles,
    title: "Textured Finishes",
    description: "Sand, knockdown, skip trowel, and other texture applications.",
  },
];

const features = [
  "Expert craftsmanship from trained artisans",
  "Premium materials and techniques",
  "Custom color matching and design",
  "Wallpaper removal and repair",
  "Accent walls and focal points",
  "Commercial decorative finishes",
  "Residential specialty applications",
];

export default function SpecialtyPage() {
  return (
    <>
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Specialty finishes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/90 via-[#1a365d]/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[#ed8936] font-semibold text-sm uppercase tracking-wider">
              Specialty Finishes
            </span>
            <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Beyond Ordinary Paint
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Make a statement with unique decorative finishes. From elegant 
              Venetian plaster to playful children&apos;s murals, we bring 
              artistry to your walls.
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
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#1a365d] mb-4">
              Specialty Services
            </h2>
            <p className="text-[#718096] max-w-2xl mx-auto">
              Explore our range of decorative painting options designed to add 
              character and personality to any space.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <div key={service.title} className="text-center p-6 bg-[#f7fafc] rounded-xl">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#ed8936]/10 flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-[#ed8936]" />
                </div>
                <h3 className="font-semibold text-xl text-[#1a365d] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#718096]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="font-semibold text-xl text-[#1a365d] mb-6 text-center">
              What&apos;s Included in Specialty Finishes
            </h3>
            <ul className="grid md:grid-cols-2 gap-4">
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
        </div>
      </section>

      <section className="py-20 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-white mb-4">
            Have a Unique Project in Mind?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            We love tackling creative challenges. Contact us to discuss your 
            specialty finish ideas.
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
