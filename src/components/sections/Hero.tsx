"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Shield, Star, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=1920&q=80"
          alt="Professional painter applying fresh coat of paint"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f4c75]/95 via-[#0f4c75]/80 to-[#0f4c75]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 md:mb-8"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 md:px-5 py-1.5 md:py-2 rounded-full text-white/90 text-xs md:text-sm">
              <Shield className="w-3 h-3 md:w-4 md:h-4 text-[#00b894]" />
              Licensed, Bonded & Insured | Serving Since 2009
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 md:mb-6"
          >
            Transform Your{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#f9a45a]">Space</span>
              <span className="absolute bottom-1 md:bottom-2 left-0 right-0 h-2 md:h-3 bg-[#00b894]/30 -z-0" />
            </span>{" "}
            with Expert Painting
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-base md:text-lg lg:text-xl mb-6 md:mb-10 leading-relaxed max-w-xl"
          >
            Bring new life to your home or business with our professional painting services. 
            Trusted by 500+ happy customers across Central Illinois with a 5-star reputation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12"
          >
            <Link
              href="/quote"
              className="group inline-flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-[#3282b8] to-[#0f4c75] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base hover:shadow-2xl hover:shadow-[#3282b8]/40 transition-all duration-300 hover:-translate-y-1"
            >
              Get Free Estimate 
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-sm md:text-base"
            >
              <span>View Our Work</span>
              <span className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-[#fdcb6e] text-[#fdcb6e]" />
                ))}
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 md:gap-6 lg:gap-10"
          >
            {[
              { icon: Check, text: "Free Estimates" },
              { icon: Shield, text: "Quality Guaranteed" },
              { icon: Clock, text: "On-Time Delivery" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 md:gap-3 text-white/90 group">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#00b894]/20 flex items-center justify-center group-hover:bg-[#00b894]/40 transition-colors">
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-[#00b894]" />
                </div>
                <span className="text-xs md:text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/60">
          <span className="text-[10px] md:text-xs uppercase tracking-widest mb-1 md:mb-2">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/30 rounded-full flex justify-center pt-1.5 md:pt-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-1 md:w-1.5 md:h-1.5 bg-white rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
