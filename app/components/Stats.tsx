"use client";

import React, { useEffect, useRef, useMemo } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

/**
 * SEO & Accessibility Note: 
 * - Added 'aria-label' and 'role' attributes for screen readers.
 * - Used semantic HTML5 tags (<section>, <figure>, <figcaption>).
 * - Implemented a large array of long-tail keywords in a hidden SEO-div for indexing.
 */

type CounterProps = {
  value: string;
  duration?: number;
};

const Counter = ({ value, duration = 2 }: CounterProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (value.includes(".") || value.toLowerCase().includes("bn")) {
      return latest.toFixed(1);
    }
    return Math.round(latest).toString();
  });
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
      const controls = animate(count, numericValue, { duration: duration, ease: [0.33, 1, 0.68, 1] });
      return controls.stop;
    }
  }, [isInView, count, value, duration]);

  const prefix = value.startsWith('$') ? '$' : '';
  const suffix = value.replace(/[0-9.$]/g, "");

  return (
    <span ref={ref} aria-hidden="true">
      {prefix}
      <motion.span>{rounded as unknown as number}</motion.span>
      {suffix}
    </span>
  );
};

const DataSection = () => {
  const stats = [
    { label: "Students Across Universities", value: "2000+" },
    { label: "Platforms", value: "10+" },
    { label: "Affiliations", value: "8+" },
  ];

  const fadeInVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 } 
    }
  };

  // SEO Keywords for Invantros / Antrosys
  const seoKeywords = [
    "Pakistan's largest tech and entrepreneur community", "Invantros startup incubator Pakistan", 
    "Antrosys AI enterprise solutions", "tech collaboration NUST FAST-NUCES LUMS GIKI", 
    "student entrepreneurship programs Pakistan", "startup networking for researchers and designers",
    "AI art and custom ML models Pakistan", "SaaS software development agency", 
    "full-stack mobile app development iOS Android Pakistan", "UI/UX design for creative professionals", 
    "AWS cloud infrastructure for startups", "marketing automation for emerging teams",
    "NASTP startup community", "Air University tech projects", "PUCIT developer network", 
    "Bahria University entrepreneur cell", "COMSATS research and development teams",
    "growth analytics for Pakistani startups", "headless WordPress and Shopify development Pakistan"
  ].join(", ");

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInVariants}
      className="relative bg-black text-white font-sans overflow-hidden border-b border-white/20"
      aria-labelledby="section-title"
    >
      {/* Visually Hidden SEO Section */}
      <div className="sr-only">
        <h2>Invantros: Pakistan's Premier Tech Ecosystem powered by Antrosys</h2>
        <p>Connecting startups, developers, designers, and researchers across 20+ universities including NUST, LUMS, FAST, and GIKI.</p>
        <p>{seoKeywords}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 border-t border-white/20">
        
        {/* Left Side: Main Heading */}
        <div className="md:col-span-1 border-r border-white/20 p-6 md:p-8 flex flex-col justify-start group">
          <motion.h2 
            id="section-title"
            variants={fadeInVariants}
            className="text-5xl lg:text-7xl font-bold leading-tight tracking-tighter uppercase transition-colors duration-500 text-gray-500 group-hover:text-[#28193d] cursor-default"
          >
            Not <br /> Like <br /> Others
          </motion.h2>
        </div>

        {/* Right Side: Stats and Quote */}
        <div className="md:col-span-3 flex flex-col">
          
          {/* Top Row Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-white/20">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className={`p-6 md:p-8 group transition-colors duration-500 hover:bg-[#28193d]/10 ${i !== 2 ? 'sm:border-r border-white/20' : ''} border-b sm:border-b-0 border-white/20`}
              >
                <div className="text-5xl lg:text-7xl font-bold mb-2 transition-colors duration-500 text-gray-500 group-hover:text-white">
                  <Counter value={stat.value} />
                </div>
                <div className="text-[10px] md:text-[11px] uppercase tracking-widest font-bold leading-tight max-w-[140px] opacity-80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Middle Row: Funding and Quote */}
          <div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/20">
            <div className="col-span-1 lg:border-r border-white/20 p-6 md:p-8 flex flex-col justify-center group transition-colors duration-500 hover:bg-[#28193d]/10">
               <div className="text-5xl lg:text-7xl font-bold transition-colors duration-500 text-gray-500 group-hover:text-white">
                <Counter value="500M" />
              </div>
              <div className="text-[10px] md:text-[11px] uppercase tracking-widest font-bold mt-2 opacity-80">
                FUNDING RAISED BY OUR PARTNERS
              </div>
            </div>
            
            {/* Quote Section */}
            <figure className="col-span-2 p-8 md:p-12 flex flex-col justify-center relative group transition-colors duration-500 hover:bg-[#28193d]/10">
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-bold uppercase leading-tight transition-colors duration-500 text-gray-500 group-hover:text-white">
                “INVANTROS IS A STRATEGIC GAME-CHANGER. THEIR METICULOUS BRIDGING OF ACADEMIC BRILLIANCE AND INDUSTRIAL EXCELLENCE CUTS THROUGH THE NOISE, SHAPING A TECH ECOSYSTEM THAT POSITIONS OUR STARTUPS FOR GLOBAL DOMINANCE.”
              </blockquote>
              <figcaption className="mt-6 text-sm font-bold tracking-widest uppercase text-white">
                Muhammad Umar Riaz <span className="text-gray-500 ml-2">| President</span>
              </figcaption>
            </figure>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3">
             <div className="col-span-1 sm:border-r border-white/20 p-6 md:p-8 group transition-colors duration-500 hover:bg-[#28193d]/10 border-b sm:border-b-0 border-white/20">
                <div className="text-5xl lg:text-7xl font-bold transition-colors duration-500 text-gray-500 group-hover:text-white">
                    <Counter value="20+" />
                </div>
                <div className="text-[10px] md:text-[11px] uppercase tracking-widest font-bold opacity-80">Startups WE&apos;VE HELPED SCALE</div>
             </div>
             <div className="col-span-1 sm:border-r border-white/20 p-6 md:p-8 group transition-colors duration-500 hover:bg-[#28193d]/10 border-b sm:border-b-0 border-white/20">
                <div className="text-5xl lg:text-7xl font-bold transition-colors duration-500 text-gray-500 group-hover:text-white">
                    <Counter value="5" />
                </div>
                <div className="text-[10px] md:text-[11px] uppercase tracking-widest font-bold opacity-80">YEARS SCALING AMBITIOUS STARUPS</div>
             </div>
             <div className="col-span-1 p-6 md:p-8 hidden sm:block"></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default DataSection;