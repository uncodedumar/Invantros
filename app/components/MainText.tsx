"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * InvanTros & Antrosys Refined MainText Component
 * 100% Responsive | Accessible | Smooth | SEO Optimized
 */
const MainText: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Smooth scroll progress using useSpring for extra fluidity
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const fullText = "Where Pakistan’s Brightest Minds Build the Future.";
  
  // Adjusted thresholds for smoother character revealing
  const charactersToDisplay = useTransform(smoothProgress, [0.1, 0.45], [0, fullText.length]);
  const roundedCharacters = useTransform(charactersToDisplay, (latest) => Math.round(latest));
  
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    return roundedCharacters.on("change", (v) => {
      setDisplayText(fullText.slice(0, v));
    });
  }, [roundedCharacters]);

  return (
    <section 
      ref={containerRef}
      aria-label="InvanTros Introduction"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-white font-sans text-black selection:bg-[#28193d] selection:text-white overflow-hidden"
    >
      {/* --- SEO KEYWORD METADATA (Visually Hidden) --- */}
      <div className="sr-only">
        <h2>InvanTros: Pakistan's Largest Tech and Entrepreneur Community</h2>
        <p>
          Collaborating with 20+ universities including NUST, LUMS, FAST NUCES, GIKI, and NASTP. 
          Empowering startups in Pakistan, creative designers, full-stack developers, and researchers.
          Powered by Antrosys - elite AI art, custom SaaS development, and enterprise AI integrations.
          Keywords: Pakistan startup ecosystem, tech community for students, 
          entrepreneurship at Air University, Bahria University incubation, 
          PUCIT developers, COMSATS tech projects, ITU research teams, BNU creative arts, 
          growth analytics for Pakistani startups, AWS cloud infrastructure for local businesses, 
          marketing automation in Lahore, Islamabad tech talent, Karachi entrepreneurship network.
        </p>
      </div>

      {/* --- GRID LINES (Responsive Positioning) --- */}
      <div className="absolute top-[5%] left-0 h-[1px] w-full bg-black/10" aria-hidden="true" />
      <div className="absolute bottom-[5%] left-0 h-[1px] w-full bg-black/10" aria-hidden="true" />
      <div className="absolute left-[5%] top-0 h-full w-[1px] bg-black/10" aria-hidden="true" />
      <div className="absolute right-[5%] top-0 h-full w-[1px] bg-black/10" aria-hidden="true" />

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 w-full max-w-[90%] md:w-[85%] lg:max-w-6xl px-4 sm:px-8 py-[5%] text-left">
        
        {/* Top Tagline */}
        <div className="relative mb-6 inline-flex flex-col items-start">
          <div className="mb-2 h-5 w-5 sm:h-6 sm:w-6">
          <svg 
  viewBox="0 0 44 54" 
  fill="none" 
  className="h-full w-full" 
  xmlns="http://www.w3.org/2000/svg" 
  aria-hidden="true"
>
  {/* Main Center Figure */}
  <path 
    d="M22 22C26.4183 22 30 18.4183 30 14C30 9.58172 26.4183 6 22 6C17.5817 6 14 9.58172 14 14C14 18.4183 17.5817 22 22 22Z" 
    stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
  />
  <path 
    d="M6 46C6 38.268 13.1634 32 22 32C30.8366 32 38 38.268 38 46" 
    stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
  />
  
  {/* Left Supporting Figure */}
  <path 
    d="M12 28C14.7614 28 17 25.7614 17 23C17 20.2386 14.7614 18 12 18C9.23858 18 7 20.2386 7 23C7 25.7614 9.23858 28 12 28Z" 
    stroke="black" strokeWidth="2"
  />
  <path 
    d="M2 42C2 37.5817 5.58172 34 10 34" 
    stroke="black" strokeWidth="2" strokeLinecap="round"
  />

  {/* Right Supporting Figure */}
  <path 
    d="M32 28C34.7614 28 37 25.7614 37 23C37 20.2386 34.7614 18 32 18C29.2386 18 27 20.2386 27 23C27 25.7614 29.2386 28 32 28Z" 
    stroke="black" strokeWidth="2"
  />
  <path 
    d="M34 34C38.4183 34 42 37.5817 42 42" 
    stroke="black" strokeWidth="2" strokeLinecap="round"
  />
</svg></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] sm:text-[11px]">
          More Than a Community. An Engine for Innovation.          </span>
        </div>

        {/* Main Headline */}
        <h1 
          className="mb-6 text-3xl font-black leading-[1.1] tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl uppercase"
          aria-label={fullText}
        >
          <span className="relative">
            {displayText}
            <motion.span 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-[3px] h-[0.8em] bg-[#28193d] ml-1 align-middle"
            />
          </span>
        </h1>

        {/* Supporting Description */}
        <p className="w-full text-sm font-medium leading-relaxed text-gray-600 sm:text-base md:text-lg">
  The ultimate ecosystem for startups, developers, designers, and researchers. In collaboration with 20+ premier universities, Invantros is the heartbeat of Pakistan’s tech revolution.
</p>
      </div>

      {/* --- BOTTOM RIGHT INTERACTIVE CIRCLE --- */}
      <button 
        className="absolute bottom-[5%] right-[5%] translate-x-1/2 translate-y-1/2 z-20 outline-none focus-visible:ring-2 focus-visible:ring-[#28193d] rounded-full"
        aria-label="Explore Projects"
      >
        <div className="relative group cursor-pointer">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-gray-200 flex items-center justify-center relative overflow-hidden bg-[#28193d]/5 transition-colors duration-300">
            
            {/* Themed Circle Animation */}
            <div className="absolute inset-0 bg-[#28193d] scale-0 group-hover:scale-100 transition-transform duration-500 ease-out rounded-full" />
            
            {/* Arrow Icon */}
            <span className="relative z-10 text-xl group-hover:text-white transition-colors duration-300">
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="currentColor" // Changed to fill for a solid bolt look
    className="w-8 h-8 md:w-10 md:h-10"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M13 2L3 14H12L11 22L21 10H12L13 2Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
</span>
          </div>
        </div>
      </button>
    </section>
  );
};

export default MainText;