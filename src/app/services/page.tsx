import Link from "next/link";
import Image from "next/image";
import { Home, Building2, Paintbrush, Sparkles, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Interior Painting",
    description: "Transform your living spaces with expert interior painting. From accent walls to complete home repaints.",
    href: "/services/interior",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
  {
    icon: Building2,
    title: "Exterior Painting",
    description: "Boost curb appeal and protect your home from the elements with professional exterior painting.",
    href: "/services/exterior",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    icon: Paintbrush,
    title: "Commercial Painting",
    description: "Minimal disruption, maximum impact. We paint offices, retail spaces, and industrial facilities.",
    href: "/services/commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    icon: Sparkles,
    title: "Specialty Finishes",
    description: "Faux techniques, murals, wallpaper removal, and decorative finishes for unique spaces.",
    href: "/services/specialty",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Comprehensive painting solutions for residential and commercial properties
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group block"
              >
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="w-12 h-12 rounded-xl bg-[#ed8936] flex items-center justify-center mb-3">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      {service.title}
                    </h2>
                  </div>
                </div>
                <p className="text-[#718096] mb-3">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-[#ed8936] font-medium group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f7fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#1a365d] mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-[#718096] mb-8 max-w-2xl mx-auto">
            Don&apos;t see what you&apos;re looking for? We offer custom painting solutions 
            for unique projects. Contact us to discuss your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#ed8936] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#dd6b20] transition-colors"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
