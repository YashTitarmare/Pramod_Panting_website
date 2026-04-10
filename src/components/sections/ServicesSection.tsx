"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Home, Building2, Paintbrush, Sparkles } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Interior Painting",
    description: "Transform your living spaces with flawless interior painting. From accent walls to complete room makeovers.",
    href: "/services/interior",
  },
  {
    icon: Building2,
    title: "Exterior Painting",
    description: "Boost curb appeal and protect your home with professional exterior painting services.",
    href: "/services/exterior",
  },
  {
    icon: Paintbrush,
    title: "Commercial Painting",
    description: "Minimal disruption, maximum impact. We paint offices, retail spaces, and industrial facilities.",
    href: "/services/commercial",
  },
  {
    icon: Sparkles,
    title: "Specialty Finishes",
    description: "Faux techniques, murals, wallpaper removal, and decorative finishes for unique spaces.",
    href: "/services/specialty",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block text-[#3282b8] font-semibold text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4 px-3 md:px-4 py-1.5 bg-[#3282b8]/10 rounded-full">
            What We Offer
          </span>
          <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-5xl font-bold text-[#0f4c75] mt-3 md:mt-4 mb-4 md:mb-6">
            Our Professional Services
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-lg px-4">
            From freshening up a single room to complete commercial transformations, 
            we deliver exceptional results on every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-[#3282b8]/10 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3282b8] to-[#0f4c75] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#3282b8]/10 to-[#0f4c75]/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 md:w-8 md:h-8 text-[#3282b8]" />
              </div>
              
              <h3 className="font-semibold text-lg md:text-xl text-[#0f4c75] mb-2 md:mb-4">
                {service.title}
              </h3>
              
              <p className="text-slate-600 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <Link
                href={service.href}
                className="inline-flex items-center gap-1 md:gap-2 text-[#3282b8] font-semibold text-xs md:text-sm group-hover:gap-2 md:group-hover:gap-3 transition-all"
              >
                Learn More 
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
