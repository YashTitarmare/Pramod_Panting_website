"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern Living Room",
    category: "interior",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    location: "Springfield, IL",
    description: "Complete interior repaint with custom accent wall",
  },
  {
    id: 2,
    title: "Craftsman Exterior",
    category: "exterior",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    location: "Chatham, IL",
    description: "Full exterior paint with trim restoration",
  },
  {
    id: 3,
    title: "Downtown Office",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    location: "Springfield, IL",
    description: "15,000 sq ft office building renovation",
  },
  {
    id: 4,
    title: "Master Bedroom Suite",
    category: "interior",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    location: "Rochester, IL",
    description: "Luxury bedroom with textured ceiling",
  },
  {
    id: 5,
    title: "Artisan Faux Finish",
    category: "specialty",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    location: "Springfield, IL",
    description: "Custom Venetian plaster accent wall",
  },
  {
    id: 6,
    title: "Ranch Style Home",
    category: "exterior",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
    location: "Sherman, IL",
    description: "Complete exterior makeover with new color scheme",
  },
  {
    id: 7,
    title: "Boutique Retail Store",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    location: "Springfield, IL",
    description: "Brand-focused interior design painting",
  },
  {
    id: 8,
    title: "Chef&apos;s Kitchen",
    category: "interior",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    location: "Chatham, IL",
    description: "Kitchen cabinets refinished with durable finish",
  },
  {
    id: 9,
    title: "Kid&apos;s Playroom Mural",
    category: "specialty",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    location: "Rochester, IL",
    description: "Custom illustrated mural for children",
  },
  {
    id: 10,
    title: "Victorian Restoration",
    category: "exterior",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
    location: "Williamsville, IL",
    description: "Historic home exterior restoration painting",
  },
  {
    id: 11,
    title: "Medical Office",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    location: "Springfield, IL",
    description: "Calming healthcare environment design",
  },
  {
    id: 12,
    title: "Open Floor Plan",
    category: "interior",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    location: "Riverton, IL",
    description: "Whole-home interior transformation",
  },
];

const categories = [
  { value: "all", label: "All Projects" },
  { value: "interior", label: "Interior" },
  { value: "exterior", label: "Exterior" },
  { value: "commercial", label: "Commercial" },
  { value: "specialty", label: "Specialty" },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const openLightbox = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % projects.length);
      setSelectedProject(projects[(projects.findIndex(p => p.id === selectedProject.id) + 1) % projects.length]);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
      setCurrentImageIndex((prev) => (currentIndex - 1 + projects.length) % projects.length);
      setSelectedProject(projects[(currentIndex - 1 + projects.length) % projects.length]);
    }
  };

  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-4">
            Our Portfolio
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Browse our collection of completed projects and see the quality 
            craftsmanship we bring to every job.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.value
                    ? "bg-[#1a365d] text-white"
                    : "bg-[#f7fafc] text-[#2d3748] hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                  onClick={() => openLightbox(project)}
                >
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white/80 text-sm flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {project.location}
                      </p>
                      <h3 className="text-white font-semibold" dangerouslySetInnerHTML={{ __html: project.title }} />
                    </div>
                    <span className="absolute top-3 left-3 bg-white/90 text-[#1a365d] text-xs font-medium px-2 py-1 rounded capitalize">
                      {project.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

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
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
              onClick={() => setSelectedProject(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <motion.div
              key={selectedProject.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
                <div className="flex items-center gap-2 text-white/80 text-sm mb-1">
                  <MapPin className="w-4 h-4" />
                  {selectedProject.location}
                </div>
                <h3 className="text-white font-semibold text-xl" dangerouslySetInnerHTML={{ __html: selectedProject.title }} />
                <p className="text-white/70 text-sm mt-1">{selectedProject.description}</p>
              </div>
            </motion.div>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
