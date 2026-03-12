"use client";
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

interface BentoItemProps {
  src: string;
  sizeClass: string;
  alt: string;
}

const BentoItem = ({ src, sizeClass, alt }: BentoItemProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();

  // Smooth out the tilt transition with optimized spring physics
  const mouseX = useSpring(x, { stiffness: 150, damping: 25 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 25 });

  // Map mouse position to rotation degrees - subtle and professional
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Custom cubic-bezier for smoothness
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role="img"
      aria-label={alt}
      style={{
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden border border-[#28193d]/10 rounded-xl shadow-sm bg-[#28193d]/5 perspective-1000 group ${sizeClass}`}
    >
      <img 
        src={src} 
        alt={alt} 
        loading="lazy"
        className="w-full h-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105" 
      />
      {/* Subtle overlay to pull in the brand color */}
      <div className="absolute inset-0 bg-[#28193d] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
    </motion.div>
  );
};

const BentoSection = () => {
  const items = [
    { id: 1, size: 'col-span-1 md:col-span-5 md:row-span-5', src: '/Images/1b.png', alt: 'Invantros Startup Collaboration Hub' },
    { id: 2, size: 'col-span-1 md:col-span-4 md:row-span-4', src: '/Images/2b.avif', alt: 'Pakistan Tech Community Networking' },
    { id: 3, size: 'col-span-1 md:col-span-1 md:row-span-1', src: '/Images/3b.avif', alt: 'Developer Resources Antrosys' },
    { id: 4, size: 'col-span-1 md:col-span-4 md:row-span-4', src: '/Images/4b.avif', alt: 'Entrepreneurship Ecosystem Pakistan' },
    { id: 5, size: 'col-span-1 md:col-span-1 md:row-span-1', src: '/Images/5b.avif', alt: 'Creative Projects Showcase' },
  ];

  return (
    <section className="bg-white py-20 px-4 overflow-hidden" aria-labelledby="invantros-heading">
      <div className="max-w-7xl mx-auto">
        {/* Screen Reader Only SEO content */}
        <div className="sr-only">
          <h2 id="invantros-heading">Invantros: Pakistan's Largest Tech and Entrepreneur Community</h2>
          <p>
            Powered by Antrosys, Invantros is the premier hub for startups, full-stack developers, 
            UI/UX designers, and researchers. In collaboration with 20+ universities including 
            NUST, FAST NUCES, GIKI, LUMS, and NASTP, we bridge the gap between academia and industry.
            Join the elite community of Pakistani entrepreneurs and creative teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-10 gap-4 auto-rows-[200px] md:auto-rows-[100px]">
          {items.map((item) => (
            <BentoItem 
              key={item.id} 
              src={item.src} 
              sizeClass={item.size} 
              alt={item.alt} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoSection;