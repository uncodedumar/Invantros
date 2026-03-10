'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

/**
 * Enhanced variants for a buttery smooth "reveal" effect.
 * Optimized for hardware acceleration.
 */
const sectionVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 20,
  },
  onscreen: (custom: number = 0.5) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      delay: custom,
      ease: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier
    },
  }),
};

const InvanTrosSection: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen bg-white text-black px-6 py-20 font-sans grid items-center overflow-hidden"
      aria-labelledby="invantros-heading"
    >
      {/* SEO KEYWORD CLOUD (Hidden from UI, visible to crawlers) */}
      <div className="sr-only">
        <h2>InvanTros: Pakistan's Largest Tech and Entrepreneur Community</h2>
        <p>
          Collaborating with Air University, NASTP, FAST NUCES, NUST, Bahria University, LUMS, PUCIT, PIEAS, GIKI, COMSATS, ITU, BNU. 
          A hub for startup incubation in Pakistan, freelance developers, UI/UX designers, creative researchers, and project management for entrepreneurs. 
          Powered by Antrosys, specializing in enterprise AI integration, custom SaaS development, and digital transformation in Lahore, Islamabad, and Karachi.
          Join the elite network of Pakistani tech students and professional software engineers.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-row">
        {/* Left Spacer - Preserving exact UI layout */}
        <div className="hidden md:block md:w-1/3 lg:w-1/2" aria-hidden="true" />

        {/* Text and Border Container */}
        <motion.div
          className="border-l-2 pl-8 md:pl-12 lg:pl-16 space-y-12"
          style={{ borderColor: '#28193d' }} // Replaced red with Brand Color
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, margin: "-10%" }}
        >
          {/* Paragraph 1 */}
          <motion.p
            variants={sectionVariants}
            custom={0.2}
            className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-normal tracking-tight text-zinc-900"
          >
            <span style={{ color: '#28193d' }} className="font-bold">InvanTros</span> is Pakistan’s largest tech and entrepreneurship community, 
            a powerhouse for students, developers, and researchers. In collaboration with over 20 elite 
            universities—including students from <span className="font-medium">NUST, FAST, LUMS & NASTP</span>—we bridge the gap 
            between academic brilliance and industrial evolution.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            variants={sectionVariants}
            custom={0.5}
            className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-normal tracking-tight text-zinc-800"
          >
            Powered by <span className="font-semibold italic">Passionates</span>, we provide the infrastructure 
            for startups to stand tall. From the halls of <span className="font-medium">Air University and NASTP</span> to 
            the global digital landscape, we empower creative minds to build disruptive projects, 
            master AI integrations, and dominate the next generation of SaaS.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default InvanTrosSection;