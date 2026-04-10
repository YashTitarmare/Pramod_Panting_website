"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#3282b8] to-[#0f4c75] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiPjxyZWN0IHg9IjMwIiB5PSIzMCIgd2lkdGg9IjIiIGhlaWdodD0iMiIvPjwvZz48L2c+PC9zdmc+')] repeat" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block bg-white/20 text-white px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
            Free Estimates Available
          </span>
          
          <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 md:mb-6 px-4">
            Ready to Transform Your Space?
          </h2>
          
          <p className="text-white/90 text-sm md:text-lg lg:text-xl mb-8 md:mb-10 max-w-2xl mx-auto px-4">
            Get a free, no-obligation estimate today. Our team is ready to bring your vision to life with quality craftsmanship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Link
              href="/quote"
              className="group inline-flex items-center justify-center gap-2 md:gap-3 bg-white text-[#0f4c75] px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-sm md:text-lg hover:bg-slate-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              Get Your Free Quote 
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+15551234567"
              className="group inline-flex items-center justify-center gap-2 md:gap-3 bg-transparent border-2 border-white text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-sm md:text-lg hover:bg-white hover:text-[#0f4c75] transition-all duration-300"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              Call (555) 123-4567
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
