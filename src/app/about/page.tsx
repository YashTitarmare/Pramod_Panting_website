import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Users, Target, Heart, Shield, ThumbsUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Pramod",
    description: "Every brushstroke is deliberate. We measure twice, prep thoroughly, and paint with exactness.",
  },
  {
    icon: Users,
    title: "Integrity",
    description: "Honest estimates, transparent communication, and no hidden fees. We do what we say.",
  },
  {
    icon: Heart,
    title: "Craftsmanship",
    description: "We take pride in our work. It shows in the details and in our 5-star reputation.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "On-time, on-budget, every time. We respect your schedule and your property.",
  },
];

const milestones = [
  { year: "2009", event: "Pramod Paint Co. founded" },
  { year: "2012", event: "Reached 100 completed projects" },
  { year: "2015", event: "Expanded to commercial services" },
  { year: "2018", event: "500+ happy clients milestone" },
  { year: "2021", event: "Launched specialty finishes division" },
  { year: "2024", event: "Celebrating 15 years of excellence" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-4">
            About Pramod Paint Co.
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            For over 15 years, we&apos;ve been transforming spaces and exceeding expectations 
            across Central Illinois.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#ed8936] font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#1a365d] mt-2 mb-6">
                Built on Quality, Driven by Customers
              </h2>
              <div className="space-y-4 text-[#718096] leading-relaxed">
                <p>
                  Pramod Paint Co. started in 2009 with a simple mission: deliver 
                  exceptional painting services with unmatched attention to detail. What 
                  began as a two-person operation has grown into Central Illinois&apos; most 
                  trusted painting company.
                </p>
                <p>
                  We believe that a fresh coat of paint does more than beautify—it protects, 
                  transforms, and reinvigorates. Whether it&apos;s your family home or a 
                  commercial property, we approach every project with the same dedication 
                  to excellence.
                </p>
                <p>
                  Our team of skilled professionals brings decades of combined experience, 
                  continuous training, and a genuine passion for the craft. We use 
                  premium materials and proven techniques to ensure lasting results.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                  alt="Professional painting team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#ed8936] text-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm opacity-90">Years in Business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f7fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#ed8936] font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#1a365d] mt-2">
              What Drives Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="w-14 h-14 rounded-xl bg-[#ed8936]/10 flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-[#ed8936]" />
                </div>
                <h3 className="font-semibold text-xl text-[#1a365d] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#718096] text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#ed8936] font-semibold text-sm uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#1a365d] mt-2">
              Milestones
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="flex gap-6 pb-8 relative"
              >
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-[#ed8936]" />
                  {index !== milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-200 absolute top-4 left-1.5" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-[#ed8936] font-bold">{milestone.year}</span>
                  <p className="text-[#2d3748] font-medium mt-1">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Pramod Paint for their 
            painting projects.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-[#ed8936] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#dd6b20] transition-colors"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
