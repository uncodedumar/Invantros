"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { 
  Instagram, 
  Menu, 
  X as CloseIcon, 
  Linkedin, 
  Users,
  Twitter
} from "lucide-react";
import Link from "next/link";

// --- Fullscreen Menu Component ---
const FullscreenMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const columns = [0, 1, 2, 3, 4];
  
  const columnVariants: Variants = {
    initial: { height: "0%" },
    animate: (i: number) => ({
      height: "100%",
      transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1], delay: i * 0.05 },
    }),
    exit: (i: number) => ({
      height: "0%",
      transition: { duration: 0.6, ease: [0.45, 0, 0.55, 1], delay: (columns.length - i) * 0.05 },
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.6 } },
  };

  const industries = ["AI", "B2B", "Health", "Finance", "HealthTech", "Real Estate", "Tech"];

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "WORK", href: "/Work" },
    { name: "EVENTS & UPDATES", href: "/Events" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/Contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex overflow-hidden w-full h-screen" role="dialog" aria-modal="true">
          {columns.map((i) => (
            <motion.div
              key={i}
              custom={i}
              variants={columnVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 bg-white border-r border-slate-100 last:border-none"
            />
          ))}

          <motion.div 
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute inset-0 z-10 grid grid-cols-1 md:grid-cols-12 p-6 md:p-12 font-sans w-full h-full"
          >
            {/* Nav Links */}
            <div className="md:col-span-5 flex flex-col justify-center space-y-4 md:space-y-6">
              {navLinks.map((item) => (
                <Link 
                  href={item.href}
                  key={item.name} 
                  onClick={onClose}
                  className="text-4xl md:text-7xl font-bold text-left transition-colors text-slate-300 hover:text-[#28193d] uppercase tracking-tight outline-none"
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" onClick={onClose} className="pt-4">
                <button className="bg-[#28193d] text-white font-black py-4 md:py-6 px-8 md:px-12 rounded-sm w-full md:w-fit text-lg md:text-xl uppercase tracking-[0.15em] hover:bg-slate-900 transition-all shadow-xl active:scale-95">
                  Work With Us
                </button>
              </Link>
            </div>

            {/* Industry Grid */}
            <div className="md:col-span-4 hidden md:flex items-center justify-center">
                <div className="grid grid-cols-2 border-l border-t border-slate-200 w-full">
                {industries.map((ind) => (
                    <div key={ind} className="border-r border-b border-slate-200 p-8 flex items-center justify-center text-sm font-medium hover:bg-slate-50 cursor-pointer transition-colors uppercase tracking-widest text-slate-700 hover:text-[#28193d]">
                    {ind}
                    </div>
                ))}
                </div>
            </div>

            {/* Socials & Close */}
            <div className="md:col-span-3 flex flex-col justify-between items-end py-4">
              <button 
                onClick={onClose} 
                className="p-3 md:p-4 bg-slate-100 rounded-full hover:bg-[#28193d] hover:text-white transition-all"
              >
                <CloseIcon size={24} className="md:w-8 md:h-8" />
              </button>
              
              <div className="flex flex-col items-end w-full">
                <div className="flex items-center gap-4 md:gap-6 mb-8 text-slate-400">
                  <Link href="https://instagram.com" target="_blank"><Instagram size={22} className="hover:text-[#28193d] transition-colors" /></Link>
                  <Link href="https://whatsapp.com" target="_blank"><FaWhatsapp size={22} className="hover:text-[#28193d] transition-colors" /></Link>
                  <Link href="/community"><Users size={22} className="hover:text-[#28193d] transition-colors" /></Link>
                  <Link href="https://x.com" target="_blank"><Twitter size={22} className="hover:text-[#28193d] transition-colors" /></Link>
                  <Link href="https://linkedin.com" target="_blank"><Linkedin size={22} className="hover:text-[#28193d] transition-colors" /></Link>
                </div>
                
                <div className="text-right w-full">
                  <p className="text-xs md:text-sm font-bold border-t border-slate-200 pt-6 w-full tracking-widest uppercase text-slate-900">
                    connect@antrosys.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- Main Navbar Component ---
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtFooter, setIsAtFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setIsScrolled(scrollY > 50);
      setIsAtFooter(scrollY + windowHeight >= documentHeight - 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <section className="sr-only">
        <h1>Invantros - Pakistan's Largest Tech and Entrepreneur Community</h1>
      </section>

      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: isAtFooter ? -120 : 0,
          opacity: isAtFooter ? 0 : 1,
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.8)" : "rgb(255, 255, 255)",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 h-20 md:h-24 flex items-center justify-between border-b border-transparent box-border"
      >
        {/* Left: Logo - Centered Vertically */}
        <div className="flex-1 flex items-center justify-start">
          <Link href="/" aria-label="Antrosys Home" className="block">
            <img src="/Logo.svg" alt="Logo" className="w-16 h-16 md:w-30 md:h-30 object-contain" />
          </Link>
        </div>

        {/* Center: Slogan - Centered Vertically */}
        <div className={`hidden lg:flex flex-1 items-center justify-center transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
          <p className="uppercase tracking-[0.3em] text-[10px] font-black text-slate-900 whitespace-nowrap">
            Engineering the Future of Intelligence.
          </p>
        </div>

        {/* Right: Menu Button - Centered Vertically */}
        <div className="flex-1 flex items-center justify-end">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-2 md:gap-3 bg-slate-900 text-white px-5 py-2.5 md:px-6 md:py-3.5 rounded-full hover:bg-[#28193d] transition-all shadow-md active:scale-95"
          >
            <Menu size={16} />
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest">Menu</span>
          </button>
        </div>
      </motion.nav>

      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}