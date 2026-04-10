"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Home, Building2 } from "lucide-react";

const steps = [
  { id: 1, title: "Contact Info", description: "Your basic information" },
  { id: 2, title: "Service Type", description: "What you need painted" },
  { id: 3, title: "Property Details", description: "About your space" },
  { id: 4, title: "Project Info", description: "Timeline and details" },
];

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    propertyType: "",
    address: "",
    squareFootage: "",
    timeline: "",
    description: "",
  });

  const updateForm = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <section className="pt-32 pb-20 bg-[#1a365d]" />
        <section className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#38a169]/10 border border-[#38a169] rounded-xl p-12"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-[#38a169] flex items-center justify-center mb-6">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#1a365d] mb-4">
                Quote Request Received!
              </h2>
              <p className="text-[#718096] text-lg mb-8">
                Thank you for your interest in Pramod Paint. We&apos;ll review your 
                request and contact you within 24 hours with a detailed estimate.
              </p>
              <div className="bg-white rounded-lg p-4 text-left">
                <p className="text-sm text-[#718096] mb-2">What happens next:</p>
                <ul className="space-y-2 text-[#2d3748]">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#38a169]" />
                    We&apos;ll review your project details
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#38a169]" />
                    A team member will call to confirm details
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#38a169]" />
                    You&apos;ll receive a detailed quote via email
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="pt-32 pb-20 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-4">
            Get a Free Quote
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll get back to you within 24 hours 
            with a detailed estimate.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#f7fafc]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-[#1a365d] p-6">
              <div className="flex justify-between items-center">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      currentStep >= step.id
                        ? "bg-[#ed8936] text-white"
                        : "bg-white/20 text-white"
                    }`}>
                      {currentStep > step.id ? <Check className="w-5 h-5" /> : step.id}
                    </div>
                    <div className="hidden sm:block ml-3">
                      <p className="text-white font-medium">{step.title}</p>
                      <p className="text-white/60 text-sm">{step.description}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`hidden sm:block w-16 h-0.5 mx-4 ${
                        currentStep > step.id ? "bg-[#ed8936]" : "bg-white/20"
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8">
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold text-[#1a365d] mb-6">
                      Contact Information
                    </h2>
                    <div>
                      <label className="block text-sm font-medium text-[#2d3748] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => updateForm("name", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ed8936] focus:ring-2 focus:ring-[#ed8936]/20 outline-none"
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
                        onChange={(e) => updateForm("email", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ed8936] focus:ring-2 focus:ring-[#ed8936]/20 outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2d3748] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => updateForm("phone", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ed8936] focus:ring-2 focus:ring-[#ed8936]/20 outline-none"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold text-[#1a365d] mb-6">
                      Service Type
                    </h2>
                    <div>
                      <label className="block text-sm font-medium text-[#2d3748] mb-3">
                        What type of service do you need? *
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => updateForm("serviceType", "interior")}
                          className={`p-6 rounded-xl border-2 text-left transition-all ${
                            formData.serviceType === "interior"
                              ? "border-[#ed8936] bg-[#ed8936]/5"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <Home className="w-8 h-8 text-[#ed8936] mb-3" />
                          <p className="font-semibold text-[#1a365d]">Interior Painting</p>
                          <p className="text-sm text-[#718096]">Walls, ceilings, trim</p>
                        </button>
                        <button
                          type="button"
                          onClick={() => updateForm("serviceType", "exterior")}
                          className={`p-6 rounded-xl border-2 text-left transition-all ${
                            formData.serviceType === "exterior"
                              ? "border-[#ed8936] bg-[#ed8936]/5"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <Building2 className="w-8 h-8 text-[#ed8936] mb-3" />
                          <p className="font-semibold text-[#1a365d]">Exterior Painting</p>
                          <p className="text-sm text-[#718096]">Siding, trim, decks</p>
                        </button>
                        <button
                          type="button"
                          onClick={() => updateForm("serviceType", "commercial")}
                          className={`p-6 rounded-xl border-2 text-left transition-all ${
                            formData.serviceType === "commercial"
                              ? "border-[#ed8936] bg-[#ed8936]/5"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <Building2 className="w-8 h-8 text-[#ed8936] mb-3" />
                          <p className="font-semibold text-[#1a365d]">Commercial</p>
                          <p className="text-sm text-[#718096]">Offices, retail, more</p>
                        </button>
                        <button
                          type="button"
                          onClick={() => updateForm("serviceType", "specialty")}
                          className={`p-6 rounded-xl border-2 text-left transition-all ${
                            formData.serviceType === "specialty"
                              ? "border-[#ed8936] bg-[#ed8936]/5"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <Home className="w-8 h-8 text-[#ed8936] mb-3" />
                          <p className="font-semibold text-[#1a365d]">Specialty Finishes</p>
                          <p className="text-sm text-[#718096]">Faux, murals, textures</p>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold text-[#1a365d] mb-6">
                      Property Details
                    </h2>
                    <div>
                      <label className="block text-sm font-medium text-[#2d3748] mb-3">
                        Property Type *
                      </label>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => updateForm("propertyType", "residential")}
                          className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                            formData.propertyType === "residential"
                              ? "border-[#ed8936] bg-[#ed8936]/5"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <Home className="w-6 h-6 mx-auto mb-2 text-[#ed8936]" />
                          <p className="font-medium text-[#1a365d]">Residential</p>
                        </button>
                        <button
                          type="button"
                          onClick={() => updateForm("propertyType", "commercial")}
                          className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                            formData.propertyType === "commercial"
                              ? "border-[#ed8936] bg-[#ed8936]/5"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <Building2 className="w-6 h-6 mx-auto mb-2 text-[#ed8936]" />
                          <p className="font-medium text-[#1a365d]">Commercial</p>
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2d3748] mb-2">
                        Property Address *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => updateForm("address", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ed8936] focus:ring-2 focus:ring-[#ed8936]/20 outline-none"
                        placeholder="123 Main St, Springfield, IL"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2d3748] mb-2">
                        Approximate Square Footage (optional)
                      </label>
                      <input
                        type="text"
                        value={formData.squareFootage}
                        onChange={(e) => updateForm("squareFootage", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ed8936] focus:ring-2 focus:ring-[#ed8936]/20 outline-none"
                        placeholder="e.g., 2000 sq ft"
                      />
                    </div>
                  </motion.div>
                )}

                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold text-[#1a365d] mb-6">
                      Project Details
                    </h2>
                    <div>
                      <label className="block text-sm font-medium text-[#2d3748] mb-3">
                        When do you need this completed? *
                      </label>
                      <select
                        required
                        value={formData.timeline}
                        onChange={(e) => updateForm("timeline", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ed8936] focus:ring-2 focus:ring-[#ed8936]/20 outline-none"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">As Soon as Possible</option>
                        <option value="within-week">Within 1 Week</option>
                        <option value="within-month">Within 1 Month</option>
                        <option value="flexible">Flexible / No Rush</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2d3748] mb-2">
                        Project Description *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.description}
                        onChange={(e) => updateForm("description", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#ed8936] focus:ring-2 focus:ring-[#ed8936]/20 outline-none resize-none"
                        placeholder="Tell us about your project. What rooms, what colors are you considering, any special requirements?"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-between mt-8 pt-6 border-t">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-2 text-[#718096] hover:text-[#1a365d] font-medium"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                  </button>
                ) : (
                  <div />
                )}
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-2 bg-[#ed8936] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#dd6b20] transition-colors"
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 bg-[#ed8936] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#dd6b20] transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
