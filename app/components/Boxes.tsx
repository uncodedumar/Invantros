"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BentoGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section 
      className="min-h-fit bg-white pt-10 pb-0 px-4 overflow-hidden"
      aria-label="InvanTros Startup and Tech Showcase"
    >
      {/* SEO Keyword Cloud - Hidden from UI but visible to search engines */}
      <div className="sr-only">
        <h1>InvanTros - Pakistan's Largest Tech and Entrepreneur Community</h1>
        <p>
          Join InvanTros, the ultimate hub for startups, developers, designers, and creative people in Pakistan. 
          A collaborative ecosystem powered by Antrosys, connecting entrepreneurs, researchers, and project teams.
          In partnership with 20+ universities including Air University, NASTP, FAST NUCES, NUST, Bahria University, 
          LUMS, PUCIT, PIEAS, GIKI, COMSATS, ITU, BNU, and more. 
          Focusing on AI art, custom SaaS software development, ML/DL solutions, and digital transformation.
          Keywords: Pakistan startup community, tech networking Lahore Islamabad Karachi, university incubators Pakistan, 
          student entrepreneurs, freelance developers Pakistan, design agency collaborations, Antrosys AI integration.
        </p>
      </div>

      <motion.div 
        ref={containerRef}
        style={{ scale, opacity }}
        className="max-w-7xl mx-auto grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-3 auto-rows-[100px]"
      >
        {/* Brain Image (Left Tall) */}
        <div className="col-span-4 md:col-span-2 row-span-2 rounded-xl overflow-hidden shadow-sm border border-gray-100">
          <img 
            src="/antrosys.png" 
            className="w-full h-full object-cover" 
            alt="Advanced Neural AI Visualization - Antrosys Intelligence" 
            loading="lazy"
          />
        </div>
        {/* Brain Image (Left Tall) */}
        <div className="col-span-4 md:col-span-2 row-span-2 rounded-xl overflow-hidden shadow-sm border border-gray-100">
          <img 
            src="/devmach3d.png" 
            className="w-full h-full object-cover" 
            alt="Advanced Neural AI Visualization - Antrosys Intelligence" 
            loading="lazy"
          />
        </div>

        {/* Quote 1 */}
<div className="relative overflow-hidden col-span-2 md:col-span-2 row-span-1 p-4 rounded-xl flex flex-col justify-between border border-gray-100 group">
  
  {/* Blurred Background Layer */}
  <div 
    className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
    style={{ 
      backgroundImage: `url('/clouds.png')`,
      filter: 'blur(8px) brightness(0.9)' // Adjust blur and brightness here
    }}
  />

  {/* Optional Overlay to ensure text readability */}
  <div className="absolute inset-0 z-10 bg-white/40 backdrop-blur-[2px]" />

  {/* Content Layer */}
  <div className="relative z-20">
    <p className="text-[10px] font-bold leading-tight text-gray-900 drop-shadow-sm">
    Joining Invantros has been a game-changer. The community's focus on high-level ...</p>
    <div className="flex gap-2 text-[9px] mt-1 font-semibold text-gray-800" aria-label="Social engagement: 29 comments, 43 likes">
      <span role="img" aria-label="comments">💬</span> 29 
      <span role="img" aria-label="likes">😍</span> 43
    </div>
  </div>
</div>

        {/* Sequel Logo */}
        <div className="col-span-2 md:col-span-2 row-span-1 bg-blue-600 rounded-xl flex items-center justify-center p-4">
            <h2 className="text-white font-black text-xl tracking-tighter">MONOLITHIC</h2>
        </div>

        {/* L + E S + E Center Box */}
        <div className="col-span-4 md:col-span-4 row-span-1 bg-[#F28500] rounded-xl flex items-center justify-between px-10 text-xl font-light text-white">
          <div className="flex flex-col"><span>Algorithmic</span><span>Kinetic</span></div>
          <span className="text-2xl text-gray-300" aria-hidden="true"></span>
          <div className="flex flex-col"><span>Synthetic</span><span>Neural</span></div>
        </div>

        {/* Tropical Box Small */}
        <div className="col-span-2 md:col-span-2 row-span-1 rounded-xl overflow-hidden">
          <img 
            src="/Images/bo1.avif" 
            className="w-full h-full object-cover" 
            alt="Creative Digital Asset for InvanTros community" 
          />
        </div>

        {/* Eaz Logo */}
        <div className="col-span-2 md:col-span-2 row-span-1 bg-[#0047FF] rounded-xl flex items-center justify-center">
            <span className="text-cyan-300 text-3xl font-serif italic">Cerebral</span>
        </div>

        {/* Yellow Fork Box */}
        <div className="col-span-4 md:col-span-4 row-span-1 bg-[#FFD700] rounded-xl flex items-center justify-center overflow-hidden">
            <img 
              src="/Images/asterisk.png" 
              className="w-16 h-16 object-contain" 
              alt="Culinary Tech Innovation Symbol" 
            />
        </div>

        {/* Quote 2 (Wide) */}
        <div className="col-span-4 md:col-span-4 row-span-1 bg-gradient-to-r from-purple-300 to-blue-300 p-4 rounded-xl flex flex-col justify-center items-start border border-white">
          <blockquote className="text-xs font-semibold italic text-gray-800 leading-tight">
          Invantros didn't just expand my network—it elevated my entire approach to tech and design. The caliber of innovation here is unmatched.          </blockquote>
          <div className="flex gap-4 mt-2  opacity-60 text-[10px]">
            <span>🚀 23</span> <span>🦄 11</span> <span>🍊 43</span>
          </div>
        </div>

        {/* Video Column (Right Tall) */}
        <VideoItem src="/Videos/bbV.mp4" className="col-span-4 md:col-span-2 row-span-2" />

      {/* Pfizer Logo */}
<div className="col-span-2 md:col-span-2 row-span-1 bg-purple border border-gray-100 rounded-xl flex items-center justify-center p-4">
  <a href="www.instagram.com/invantros" target="_blank" rel="noopener noreferrer">
    <img src="/Images/instagram-brands-solid-full.svg" className="w-16 h-auto" alt="Pfizer Brand Partner" />
  </a>
</div>

{/* Discord Logo */}
<div className="col-span-2 md:col-span-2 row-span-1 bg-[#f7efdc] rounded-xl flex items-center justify-center p-4">
  <a href="https://www.whatsapp.com/channel/0029Vb6yA9DATRSgFD2X9b2B" target="_blank" rel="noopener noreferrer">
    <img src="/Images/whatsapp-brands-solid-full.svg" className="w-16 h-auto" alt="Join our Discord Community" />
  </a>
</div>

        {/* Branding Footer Bar */}
        <footer className="col-span-4 md:col-span-8 lg:col-span-12 h-[30px] flex items-center overflow-hidden">
            <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 w-full text-center whitespace-nowrap">
                Design & Development Excellence • Pakistan's Largest Tech Community • 2026 Innovation
            </p>
        </footer>
      </motion.div>
    </section>
  );
};

const VideoItem = ({ src, className }: { src: string, className: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleHover = async () => {
    try {
      if (videoRef.current) {
        await videoRef.current.play();
      }
    } catch (err) {
      console.log("Autoplay prevented by browser");
    }
  };

  const handleLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className={`${className} rounded-xl overflow-hidden relative cursor-pointer bg-gray-100`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <video 
        ref={videoRef}
        src={src}
        loop 
        muted 
        playsInline
        preload="metadata"
        className="w-full h-full object-cover pointer-events-none"
        title="Project Showcase Video"
      />
    </div>
  );
};

export default BentoGrid;