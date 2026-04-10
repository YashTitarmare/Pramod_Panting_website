"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Check } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Reach out and 
            we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#1a365d] mb-6">
                Send Us a Message
              </h2>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#38a169]/10 border border-[#38a169] rounded-xl p-8 text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#38a169] flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl text-[#1a365d] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#718096]">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#2d3748] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ed8936] focus:ring-2 focus:ring-[#ed8936]/20 outline-none transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2d3748] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ed8936] focus:ring-2 focus:ring-[#ed8936]/20 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#2d3748] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ed8936] focus:ring-2 focus:ring-[#ed8936]/20 outline-none transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2d3748] mb-2">
                        Subject *
                      </label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ed8936] focus:ring-2 focus:ring-[#ed8936]/20 outline-none transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="quote">Request a Quote</option>
                        <option value="service">Service Question</option>
                        <option value="support">Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2d3748] mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ed8936] focus:ring-2 focus:ring-[#ed8936]/20 outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 bg-[#ed8936] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#dd6b20] transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-[#f7fafc] rounded-xl p-6">
                <h3 className="font-semibold text-lg text-[#1a365d] mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a href="tel:+918788118802" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-[#ed8936]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ed8936] transition-colors">
                      <Phone className="w-5 h-5 text-[#ed8936] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-[#718096]">Phone</p>
                      <p className="font-medium text-[#1a365d]">+91 8788118802</p>
                    </div>
                  </a>
                  <a href="mailto:info@Pramodpaint.com" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-[#ed8936]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ed8936] transition-colors">
                      <Mail className="w-5 h-5 text-[#ed8936] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-[#718096]">Email</p>
                      <p className="font-medium text-[#1a365d]">info@Pramodpaint.com</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#ed8936]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#ed8936]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#718096]">Address</p>
                      <p className="font-medium text-[#1a365d]">
                        123 Painting Lane<br />
                        Springfield, IL 62701
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#ed8936]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#ed8936]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#718096]">Business Hours</p>
                      <p className="font-medium text-[#1a365d]">
                        Mon-Fri: 7AM - 6PM<br />
                        Sat: 8AM - 2PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a365d] rounded-xl p-6 text-white">
                <h3 className="font-semibold text-lg mb-2">Emergency Service?</h3>
                <p className="text-white/80 text-sm mb-4">
                  For urgent painting needs, call our emergency line.
                </p>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center gap-2 bg-[#ed8936] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#dd6b20] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
