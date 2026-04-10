"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "Springfield, IL",
    rating: 5,
    quote: "Precision Paint transformed our dated living room into a modern masterpiece. The team was professional, clean, and finished ahead of schedule. I couldn't be happier with the results! They helped us choose the perfect color that ties our whole home together.",
    service: "Interior Painting",
  },
  {
    id: 2,
    name: "James Rodriguez",
    location: "Chatham, IL",
    rating: 5,
    quote: "We hired them for our office building - 15,000 sq ft of commercial space. They worked around our business hours and delivered flawless results. Minimal disruption to our operations and the quality exceeded our expectations.",
    service: "Commercial Painting",
  },
  {
    id: 3,
    name: "Emily Thompson",
    location: "Rochester, IL",
    rating: 5,
    quote: "The attention to detail is incredible. They helped us choose the perfect colors and the faux finish on our accent wall is absolutely stunning. True craftspeople who take pride in their work.",
    service: "Specialty Finishes",
  },
  {
    id: 4,
    name: "Michael Chen",
    location: "Sherman, IL",
    rating: 5,
    quote: "Our exterior looks brand new! They fixed peeling paint, addressed wood damage, and the new color scheme has our neighbors asking for recommendations. Great value for the quality delivered.",
    service: "Exterior Painting",
  },
  {
    id: 5,
    name: "Jennifer Williams",
    location: "Williamsville, IL",
    rating: 5,
    quote: "I've used Precision Paint three times now over the years. Consistent quality, fair pricing, and they stand behind their work. My go-to recommendation for anyone needing painting services.",
    service: "Interior Painting",
  },
  {
    id: 6,
    name: "Robert Davis",
    location: "Riverton, IL",
    rating: 5,
    quote: "The cabinet refinishing was incredible. They look better than new! The team was respectful of our home and cleaned up perfectly each day. Highly recommend for kitchen projects.",
    service: "Interior Painting",
  },
];

export default function TestimonialsPage() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-4">
            Customer Reviews
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            See what our satisfied customers have to say about their experience 
            with Precision Paint Co.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#f7fafc] rounded-xl p-6 relative"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-[#ed8936]/10" />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-[#ed8936] fill-[#ed8936]"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-[#2d3748] leading-relaxed mb-6 relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-[#1a365d]">{testimonial.name}</p>
                  <p className="text-[#718096] text-sm">{testimonial.location}</p>
                  <span className="inline-block mt-2 text-xs bg-[#1a365d]/10 text-[#1a365d] px-2 py-1 rounded">
                    {testimonial.service}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-[#ed8936] fill-[#ed8936]" />
              ))}
            </div>
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-white mb-4">
              5.0 Average Rating
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Based on 200+ verified customer reviews across Google, Yelp, and our website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1a365d] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Leave a Review on Google
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Leave a Review on Yelp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
