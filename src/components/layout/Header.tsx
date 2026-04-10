"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ShieldCheck, Award } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-lg shadow-lg shadow-slate-200/50 py-2"
          : "bg-gradient-to-b from-black/50 to-transparent py-3 md:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className={`relative w-14 h-10 md:w-20 md:h-12 lg:w-24 lg:h-14 rounded-lg md:rounded-xl overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300 ${
              isScrolled ? "bg-white border border-slate-200" : "bg-white/95 border border-white/50"
            }`}>
              <Image
                src="/save.jpeg"
                alt="Pramod Painting Logo"
                fill
                className="object-contain p-0.5 md:p-1"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight hidden sm:flex">
              <span className={`whitespace-nowrap font-['Playfair_Display'] text-base md:text-xl lg:text-2xl font-bold tracking-wide transition-all duration-300 ${
                isScrolled 
                  ? "text-[#0f4c75] drop-shadow-sm" 
                  : "text-white drop-shadow-lg"
              }`}>
                Pramod<span className="text-[#3282b8]"> Painting</span>
              </span>
              <span className={`text-[8px] md:text-[10px] lg:text-xs font-medium tracking-widest uppercase flex items-center gap-1 ${
                isScrolled ? "text-[#3282b8]" : "text-white/80"
              }`}>
                <ShieldCheck className="w-2.5 h-2.5 md:w-3 md:h-3" /> Trusted Since 2009
              </span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                  isScrolled ? "text-slate-700 hover:text-[#3282b8]" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3282b8] transition-all duration-300 hover:w-full`} />
              </Link>
            ))}
          </nav>

            <a
              href="tel:+15551234567"
              className={`flex items-center gap-2 text-xs md:text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                isScrolled ? "text-[#0f4c75]" : "text-white"
              }`}
            >
            <Phone className=" hidden w-3 h-3 md:w-4 md:h-4" />
              <span className=" hidden sm:inline">+91 8788118802</span>
            </a>
            <Link
              href="/quote"
              className="bg-gradient-to-r from-[#3282b8] to-[#0f4c75] text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full font-medium text-xs md:text-sm hover:shadow-xl hover:shadow-[#3282b8]/30 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Get Free Quote
            </Link>
            { /* Modile view button  */}
                   <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`xl:hidden p-1 rounded-lg transition-colors ${
              isScrolled ? "text-[#0f4c75] hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Menu className="w-5 h-5 md:w-6 md:h-6" />}
          </button>
        </div>
          </div>
      

{ /* menu items */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-md border-t shadow-xl z-50">
          <div className="px-4 py-4 md:py-6 space-y-2 md:space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-slate-700 font-medium py-2 md:py-3 border-b border-slate-100 hover:text-[#3282b8] transition-colors text-sm md:text-base"
               >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 md:pt-4 space-y-3 md:space-y-4">
              <a
                href="tel:+918788118802"
                className="flex items-center gap-2  text-black font-semibold text-sm "
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                +91 8788118802
              </a>
           
              <Link
                href="/quote"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-[#3282b8] to-[#0f4c75] text-white px-4 md:px-5 py-2.5 md:py-3 rounded-full font-semibold shadow-lg text-sm md:text-base"
              >
                Get Free Quote
              </Link> 

            </div>
          </div>
        </div>
      )}
    </header>
  );
}
