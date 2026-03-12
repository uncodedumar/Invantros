"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform, animate } from 'framer-motion';

// --- Components ---

const CountUp = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Using motion value for smoother performance
  const count = useSpring(0, { mass: 1, stiffness: 50, damping: 30 });
  const [display, setDisplay] = useState("0" + suffix);

  useEffect(() => {
    if (isInView) {
      count.set(value);
    }
  }, [isInView, count, value]);

  useEffect(() => {
    return count.on("change", (latest) => {
      setDisplay(Math.round(latest).toLocaleString() + suffix);
    });
  }, [count, suffix]);

  return (
    <span ref={ref} role="status" aria-live="polite">
      {display}
    </span>
  );
};

const ProjectHero = () => {
  const stats = [
    { label: "AVERAGE YEAR OVER YEAR GROWTH", value: 2, suffix: "X" },
    { label: "AFFILIATIONS", value: 8, suffix: "+" },
    { label: "PLATFORMS", value: 10, suffix: "+" },
    { label: "YEARS SCALING AMBITIOUS BUSINESSES", value: 5, suffix: "+" },
    { label: "YAWNS IN THE BOARDROOM", value: 0, suffix: "" },
  ];

  return (
    <section className="bg-black text-white pt-32 pb-0 overflow-hidden w-full" aria-labelledby="hero-heading">
      
      {/* --- SEO KEYWORD CLOUD (Hidden from UI, visible to Crawlers) --- */}
      <div className="sr-only">
        <h1>Invantros: Pakistan's Largest Tech and Entrepreneur Community</h1>
        <p>
          Powered by Antrosys, Invantros is the premier ecosystem for startups, developers, designers, 
          entrepreneurs, teams, students, and researchers. A collaborative hub for creative people 
          and ambitious projects driving digital transformation in Pakistan.
        </p>
        <p>
          Partnered with 20+ prestigious universities including: Air University, NASTP, FAST NUCES, 
          NUST, Bahria University, LUMS, PUCIT, PIEAS, GIKI, COMSATS, ITU, BNU, and more. 
          Expertise in AI art, custom AI models, SaaS software development, and full-stack engineering.
        </p>
        <h2>Keywords:</h2>
        <ul>
            <li>Pakistan startup ecosystem and incubator</li>
            <li>Best community for developers and designers in Pakistan</li>
            <li>Entrepreneurship training for university students Pakistan</li>
            <li>Antrosys custom AI and machine learning solutions</li>
            <li>Tech collaboration between industry and academia Pakistan</li>
            <li>Full stack development and UI/UX design agency Pakistan</li>
            <li>Scaling ambitious businesses with digital transformation</li>
          </ul>
      </div>

      {/* Big Header Section */}
      <div className="container mx-auto px-6 mb-24 text-center">
        <motion.h1 
          id="hero-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-7xl md:text-9xl font-black tracking-tighter leading-none"
          style={{ color: 'white' }} // Applied brand color here
        >
          BELIEVE<br />THE<br />HYPE
        </motion.h1>
      </div>

      {/* Stats Grid with Full-Width Borders */}
      <div className="relative border-t border-white/20">
        <div className="grid grid-cols-2 md:grid-cols-5 w-full">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`
                p-8 md:p-12 flex flex-col justify-start items-start border-white/20
                /* Desktop Borders */
                md:border-r ${index === 4 ? 'md:border-r-0' : ''}
                /* Mobile Borders */
                ${index % 2 === 0 ? 'border-r' : ''} 
                ${index > 1 ? 'border-t md:border-t-0' : ''}
                /* Last item mobile fix: if odd total, make it full width or handle border */
                ${index === 4 ? 'col-span-2 md:col-span-1 border-t md:border-t-0 border-r-0' : ''}
              `}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-4 tabular-nums">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </h2>
              <p className="text-[10px] md:text-xs font-bold tracking-widest uppercase leading-tight max-w-[120px] opacity-80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Horizontal line extending full screen (Bottom) */}
        <div className="w-full h-[1px] bg-white/20" />
      </div>
      
      {/* Subtle Branding Footer for SEO Pathing */}
      <div className="py-4 text-center opacity-30 text-[8px] tracking-[0.2em] uppercase">
        Powered by Antrosys x Invantros Network
      </div>
    </section>
  );
};

export default ProjectHero;