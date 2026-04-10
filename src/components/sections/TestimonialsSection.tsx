"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "Springfield, IL",
    rating: 5,
    quote: "Pramod Paint transformed our dated living room into a modern masterpiece. The team was professional, clean, and finished ahead of schedule. I couldn't be happier with the results!",
  },
  {
    id: 2,
    name: "James Rodriguez",
    location: "Chatham, IL",
    rating: 5,
    quote: "We hired them for our office building - 15,000 sq ft of commercial space. They worked around our business hours and delivered flawless results. Highly recommend for any commercial project.",
  },
  {
    id: 3,
    name: "Emily Thompson",
    location: "Rochester, IL",
    rating: 5,
    quote: "The attention to detail is incredible. They helped us choose the perfect colors and the faux finish on our accent wall is absolutely stunning. True craftspeople!",
  },
  {
    id: 4,
    name: "Michael Chen",
    location: "Sherman, IL",
    rating: 5,
    quote: "Our exterior looks brand new! They fixed peeling paint, addressed wood damage, and the new color scheme has our neighbors asking for recommendations. Great value.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-gradient-to-br from-[#0f4c75] to-[#0f4c75]/95 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#3282b8] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00b894] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#00b894] font-semibold text-sm uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-white mt-2">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#fdcb6e] text-[#fdcb6e]" />
            ))}
            <span className="text-white/80 ml-2 text-sm">5.0 Rating from 200+ Reviews</span>
          </div>
        </motion.div>

        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative"
              >
                <div className="absolute -top-4 left-12">
                  <Quote className="w-12 h-12 text-[#3282b8]/20" />
                </div>
                
                <p className="text-slate-700 text-lg md:text-xl leading-relaxed mb-8 relative z-10">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#0f4c75] text-lg">
                      {testimonials[current].name}
                    </p>
                    <p className="text-slate-500 text-sm">
                      {testimonials[current].location}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonials[current].rating
                            ? "text-[#fdcb6e] fill-[#fdcb6e]"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-slate-50 hover:scale-110 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-[#0f4c75]" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-slate-50 hover:scale-110 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-[#0f4c75]" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current ? "bg-[#00b894] w-8" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
