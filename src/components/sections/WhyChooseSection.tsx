"use client";

import { motion } from "framer-motion";
import { Shield, Award, Clock, Users, Check } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Projects Completed" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Shield, value: "100%", label: "Licensed & Insured" },
  { icon: Clock, value: "5-Star", label: "Average Rating" },
];

const benefits = [
  "Premium quality paints and materials",
  "Detailed surface preparation",
  "Clean, professional painters",
  "Clear communication throughout",
  "Worksite left spotless",
  "Satisfaction guaranteed",
];

export default function WhyChooseSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#0f4c75] to-[#3282b8] overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4 md:p-8">
                  <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-3xl md:text-5xl font-bold text-white">P</span>
                  </div>
                  <p className="text-white/80 text-sm md:text-lg">
                    Trusted by homeowners and businesses across the region
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 bg-[#00b894] text-white p-4 md:p-6 rounded-xl shadow-xl hidden md:block">
              <p className="text-2xl md:text-3xl font-bold">15+</p>
              <p className="text-xs md:text-sm opacity-90">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-[#3282b8] font-semibold text-xs md:text-sm uppercase tracking-widest mb-4 px-3 py-1.5 bg-[#3282b8]/10 rounded-full">
              Why Choose Us
            </span>
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f4c75] mt-2 md:mt-4 mb-4 md:mb-6">
              Experience the Pramod Paint Difference
            </h2>
            <p className="text-slate-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
              We don&apos;t just paint walls — we transform spaces. Our commitment to quality, 
              transparency, and customer satisfaction sets us apart.
            </p>

            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start md:items-center gap-3"
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#00b894] flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-0">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <span className="text-slate-700 text-sm md:text-base">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16 pt-12 md:pt-16 border-t border-slate-100"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-4"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 rounded-xl bg-[#0f4c75]/5 flex items-center justify-center">
                <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-[#0f4c75]" />
              </div>
              <p className="text-xl md:text-3xl font-bold text-[#0f4c75]">{stat.value}</p>
              <p className="text-slate-500 text-xs md:text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
