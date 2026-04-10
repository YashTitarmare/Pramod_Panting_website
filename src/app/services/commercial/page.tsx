import Image from "next/image";
import Link from "next/link";
import { Check, Clock, Building, Users, Briefcase, ArrowRight } from "lucide-react";

const services = [
  "Office buildings and workspaces",
  "Retail stores and shopping centers",
  "Warehouses and industrial facilities",
  "Medical and dental offices",
  "Restaurants and hospitality",
  "Educational institutions",
  "Government buildings",
  "Multi-family residential complexes",
];

const benefits = [
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "We work around your business hours, including nights and weekends, to minimize disruption.",
  },
  {
    icon: Users,
    title: "Trained Professionals",
    description: "Our commercial team is trained in safety protocols and professional conduct.",
  },
  {
    icon: Building,
    title: "Scalable Teams",
    description: "From small retail spaces to large office buildings, we have the crew to meet your timeline.",
  },
  {
    icon: Briefcase,
    title: "Project Management",
    description: "Dedicated project manager ensures clear communication and on-time delivery.",
  },
];

export default function CommercialPage() {
  return (
    <>
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Commercial painting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/90 via-[#1a365d]/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[#ed8936] font-semibold text-sm uppercase tracking-wider">
              Commercial Painting
            </span>
            <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Professional Business Solutions
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Your commercial space represents your brand. We deliver high-quality 
              painting services that minimize downtime and maximize impact for 
              businesses of all sizes.
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
                Industries We Serve
              </h2>
              <p className="text-[#718096] mb-6">
                With years of commercial painting experience, we understand the 
                unique requirements of different industries. Every project is 
                tailored to your specific needs and schedule.
              </p>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#38a169] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#2d3748]">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="font-semibold text-xl text-[#1a365d]">
                The Commercial Advantage
              </h3>
              <div className="grid gap-4">
                {benefits.map((item) => (
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
            Ready to Refresh Your Commercial Space?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Get a free commercial painting estimate. We&apos;ll work with your 
            schedule to minimize business disruption.
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
