"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern Living Room",
    category: "interior",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    location: "Springfield, IL",
  },
  {
    id: 2,
    title: "Craftsman Exterior",
    category: "exterior",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    location: "Chatham, IL",
  },
  {
    id: 3,
    title: "Downtown Office",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    location: "Springfield, IL",
  },
  {
    id: 4,
    title: "Master Bedroom",
    category: "interior",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    location: "Rochester, IL",
  },
  {
    id: 5,
    title: "Faux Finishes",
    category: "specialty",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    location: "Springfield, IL",
  },
  {
    id: 6,
    title: "Ranch Style Home",
    category: "exterior",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
    location: "Sherman, IL",
  },
];

const categories = [
  { value: "all", label: "All Projects" },
  { value: "interior", label: "Interior" },
  { value: "exterior", label: "Exterior" },
  { value: "commercial", label: "Commercial" },
  { value: "specialty", label: "Specialty" },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="inline-block text-[#3282b8] font-semibold text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4 px-3 md:px-4 py-1.5 bg-[#3282b8]/10 rounded-full">
            Our Work
          </span>
          <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f4c75] mt-2 md:mt-3 mb-3 md:mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base px-4">
            Browse our portfolio of completed projects and see the precision 
            that goes into every job.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                activeCategory === cat.value
                  ? "bg-[#0f4c75] text-white"
                  : "bg-white text-slate-600 hover:bg-slate-100 shadow-sm"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] rounded-lg md:rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white/80 text-xs md:text-sm">{project.location}</p>
                    <h3 className="text-white font-semibold text-sm md:text-lg">{project.title}</h3>
                  </div>
                  <span className="absolute top-2 md:top-3 left-2 md:left-3 bg-white/90 text-[#0f4c75] text-[10px] md:text-xs font-medium px-2 md:px-3 py-1 rounded capitalize">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full z-10"
              onClick={() => setSelectedProject(null)}
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 md:p-6 rounded-b-lg">
                <p className="text-white/80 text-xs md:text-sm">{selectedProject.location}</p>
                <h3 className="text-white font-semibold text-lg md:text-xl">{selectedProject.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
