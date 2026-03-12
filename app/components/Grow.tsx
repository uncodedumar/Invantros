"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Link from 'next/link'; // Added Link import

const GrowSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth, high-performance transform logic
  const scaleValue = useTransform(scrollYProgress, [0, 0.4], [0.8, 1.0]);
  // Fallback for users with reduced motion preferences
  const scale = shouldReduceMotion ? 1 : scaleValue;

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-white font-sans overflow-hidden border-b border-black"
      aria-labelledby="grow-heading"
    >
      {/* --- SEO KEYWORD CLOUD (Hidden from UI, visible to crawlers) --- */}
      <div className="sr-only">
        <h2>InvanTros: Pakistan's Largest Tech and Entrepreneur Community</h2>
        <p>
          Join InvanTros, the premier ecosystem for startups in Pakistan, developers, UI/UX designers, 
          creative entrepreneurs, and research teams. Powered by Antrosys, we collaborate with 20+ universities 
          including NUST, FAST NUCES, LUMS, GIKI, and UET to bridge the gap between academia and industry. 
          The best community for student entrepreneurs in Islamabad, Lahore, and Karachi. 
          Incubation programs for NASTP startups, Air University projects, and Bahria University innovators. 
          Full-stack development workshops, AI art collectives, and technology consulting for Pakistani students.
          Connecting PUCCIT developers, COMSATS researchers, and ITU engineers with global opportunities.
          BNU creative arts community and PEAS engineering projects powered by Antrosys digital transformation.
        </p>
      </div>

      {/* Warning Text & Arrow - Positioned to the right */}
      <div className="flex justify-end pr-10 pt-4" aria-hidden="true">
        <div className="flex flex-col items-center">
          <p className="text-[10px] font-bold uppercase tracking-tight text-black select-none">
            WARNING: This button changes lives
          </p>
          <svg 
            width="30" 
            height="20" 
            viewBox="0 0 50 40" 
            fill="none" 
            className="mt-1 translate-x-6"
            role="presentation"
          >
            <path 
              d="M5 5C15 5 25 15 35 30M35 30L25 28M35 30L38 20" 
              stroke="black" 
              strokeWidth="3" 
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Main Grid Structure */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_350px] border-t border-black">
        
        {/* Left Side: Scaling Text */}
        <div className="flex items-center px-6 py-4 md:px-10 overflow-hidden">
          <motion.h2 
            id="grow-heading"
            style={{ scale, originX: 0 }}
            className="text-6xl md:text-[7rem] font-medium tracking-tighter text-black leading-[0.8] will-change-transform"
          >
            Grow Today
          </motion.h2>
        </div>

        {/* Right Side: #28193d CTA Button */}
        <div className="border-t md:border-t-0 md:border-l border-black p-4 flex items-center justify-center">
          
          <Link href="/Contact" className="w-full">
            <button
              className="bg-[#28193d] text-white w-full h-[120px] md:h-[150px] rounded-xl flex items-center justify-center transition-all duration-300 hover:brightness-125 focus:outline-none focus:ring-2 focus:ring-[#28193d] focus:ring-offset-2 active:scale-[0.98]"
              aria-label="Work with Antrosys and join the InvanTros community"
            >
              <span className="text-[10px] md:text-xs font-bold tracking-widest">
                WORK WITH US
              </span>
            </button>
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default GrowSection;