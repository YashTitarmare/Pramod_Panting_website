"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const areas = [
  "Springfield",
  "Chatham",
  "Rochester",
  "Sherman",
  "Williamsville",
  "Pawnee",
  "Riverton",
  "Auburn",
];

export default function ServiceAreasSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#3282b8] font-semibold text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4 px-3 py-1.5 bg-[#3282b8]/10 rounded-full">
              Service Area
            </span>
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f4c75] mt-2 md:mt-3 mb-4 md:mb-6">
              Proudly Serving Central Illinois
            </h2>
            <p className="text-slate-600 text-sm md:text-base mb-6 md:mb-8">
              We provide professional painting services throughout Central Illinois. 
              If you don&apos;t see your location listed, give us a call — we may still be able to help!
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
              {areas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-2 text-slate-700"
                >
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 text-[#3282b8]" />
                  <span className="text-xs md:text-sm">{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl md:rounded-2xl p-5 md:p-8"
          >
            <h3 className="font-semibold text-lg md:text-xl text-[#0f4c75] mb-4 md:mb-6">
              Get in Touch
            </h3>
            <div className="space-y-3 md:space-y-4">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#3282b8]/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#3282b8]" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-slate-500">Call Us</p>
                  <p className="font-semibold text-[#0f4c75] text-sm md:text-base">(555) 123-4567</p>
                </div>
              </a>
              <a
                href="mailto:info@pramodpaint.com"
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#3282b8]/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#3282b8]" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-slate-500">Email Us</p>
                  <p className="font-semibold text-[#0f4c75] text-sm md:text-base">info@pramodpaint.com</p>
                </div>
              </a>
              <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-white rounded-lg">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#3282b8]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#3282b8]" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-slate-500">Visit Us</p>
                  <p className="font-semibold text-[#0f4c75] text-sm md:text-base">
                    123 Painting Lane<br />
                    Springfield, IL 62701
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
