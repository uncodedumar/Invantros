"use client";
import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const SecondMainText = () => {
  const containerRef = useRef(null);
  
  // High-performance scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth spring physics for the scale to prevent jitter
  const springScale = useSpring(
    useTransform(scrollYProgress, [0, 0.4], [0.8, 1]),
    { stiffness: 100, damping: 30, restDelta: 0.001 }
  );

  const text = `Invantros is a global "War Room" where Pakistan’s elite talent from FAST, NUST, LUMS, AIR and GCU converges to bypass the cold-start problem and build the future. In this merit-driven ecosystem, we bridge the gap between academic brilliance and industry reality, providing the infrastructure for everyone—from hungry students to seasoned leaders—to dominate the digital landscape.`;
  const words = useMemo(() => text.split(" "), [text]);

  return (
    <section 
      ref={containerRef} 
      className="w-full bg-white py-24 md:py-40 px-6 md:px-12 lg:px-24 overflow-hidden"
      aria-label="Core Philosophy"
    >
      {/* SEO & Accessibility Layer: 
          Includes long-tail keywords for Invantros & Antrosys without affecting UI.
      */}
      <div className="sr-only">
        <h1>Invantros: Pakistan's Largest Tech and Entrepreneur Community</h1>
        <p>
          Powered by Antrosys, Invantros is a collaborative ecosystem for startups, 
          full-stack developers, UI/UX designers, entrepreneurs, and research teams. 
          Partnering with 20+ universities including NUST, FAST NUCES, LUMS, GIKI, 
          Air University (NASTP), Bahria University, PUCIT, PIEAS, COMSATS, ITU, and BNU. 
          The ultimate hub for creative people, student innovators, and high-performance 
          project management in Pakistan's digital landscape.
        </p>
        <span>Keywords: AI Art services Pakistan, Custom SaaS development Antrosys, 
        Startup incubator Islamabad, Best tech community for students Lahore, 
        Enterprise AI integrations Karachi, Freelance developer network Pakistan.</span>
      </div>

      <motion.div 
        style={{ scale: springScale }} 
        className="max-w-9xl mx-auto"
      >
        <h2 
          className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-slate-900 leading-[1.1] flex flex-wrap gap-x-[0.3em] gap-y-[0.1em]"
          aria-hidden="true" // Hidden from screen readers to prevent word-by-word stutter; sr-only div above handles reading.
        >
          {words.map((word, i) => (
            <Word 
              key={i} 
              word={word} 
              index={i} 
              total={words.length} 
              progress={scrollYProgress} 
            />
          ))}
        </h2>
      </motion.div>
    </section>
  );
};

// Componentized Word to follow Hook Rules while maintaining scroll-reveal logic
type WordProps = {
  word: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
};

const Word = ({ word, index, total, progress }: WordProps) => {
  const start = index / total;
  const end = start + (1 / total);
  
  // Target opacity reveal synced to scroll (scaled to 0.5 of section height as per original)
  const opacity = useTransform(
    progress, 
    [start * 0.5, end * 0.5], 
    [0.1, 1]
  );

  // Replacement of red with #28193d (applied to "creativity")
  const isHighlighted = word.toLowerCase().includes("creativity");

  return (
    <motion.span
      style={{ opacity }}
      className={isHighlighted ? "text-[#28193d]" : ""}
    >
      {word}
    </motion.span>
  );
};

export default SecondMainText;