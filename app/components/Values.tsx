"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
const principles = [
  {
    title: "We Engineer Critical Inflection Points",
    description: "From seed-stage pivots to enterprise-scale AI integrations. Invantros thrives where the stakes are highest, delivering the technical precision and strategic speed required to dominate a rapidly evolving digital landscape.",
  },
  {
    title: "Intelligent Design That Converts",
    description: "In an era of generative noise, pretty pictures are common—performance is rare. We fuse high-end UI/UX with data-driven ML models to ensure your brand identity and digital products don't just look elite, they drive measurable ROI.",
  },
  {
    title: "Architecting for the Long Haul",
    description: "We don't build one-offs; we engineer ecosystems. Whether it's robust AWS infrastructure or headless e-commerce, our solutions are designed to scale effortlessly, ensuring Invantros remains your lifelong partner in growth.",
  },
  {
    title: "Elite Collaboration, Exceptional Results",
    description: "Invantros is a community of world-class developers, designers, and visionaries. By partnering with the most ambitious companies and creators, we accelerate the intersection of human creativity and machine intelligence.",
  },
];

// Long-tail SEO keywords for InvanTros & Antrosys
const seoKeywords = [
  "Pakistan's largest tech and entrepreneur community",
  "InvanTros startup ecosystem for developers and designers",
  "Antrosys powered technology hub Pakistan",
  "collaborative research projects for Pakistani university students",
  "entrepreneurship programs at NUST FAST NUCES GIKI LUMS",
  "tech community for Air University and NASTP startups",
  "Bahria University and ITU student developer groups",
  "PUCIT and COMSATS technical innovation hub",
  "PEAS and BNU creative entrepreneurship network",
  "connecting Pakistani researchers with industry projects",
  "growth analytics and marketing automation for SaaS startups",
  "custom AI models and enterprise AI integrations Pakistan",
  "full-stack development and UI/UX design agency Antrosys"
];

const TypewriterText = ({ text }: { text: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const words = text.split(" ");

  return (
    <div ref={ref} className="relative">
      {/* Screen reader friendly full text */}
      <p className="sr-only">{text}</p>
      <p 
        aria-hidden="true"
        className="text-sm md:text-base leading-relaxed text-gray-500 transition-colors duration-500 hover:text-black hover:scale-[1.01] origin-left cursor-default"
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.2, delay: i * 0.03 }}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </p>
    </div>
  );
};

export default function PrinciplesSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const headerScale = useTransform(scrollYProgress, [0, 0.4], [0.9, 1]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section 
      ref={containerRef} 
      aria-label="InvanTros Core Principles"
      className="relative min-h-screen bg-white py-16 md:py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* Hidden SEO Keywords Block */}
      <div className="sr-only">
        {seoKeywords.join(", ")}
        <p>InvanTros is a community for startups, developers, designers, entrepreneurs, and researchers in collaboration with 20+ universities including NUST, LUMS, and GIKI, powered by Antrosys.</p>
      </div>

      {/* Heading */}
      <motion.header 
        style={{ scale: headerScale, opacity: headerOpacity }}
        className="text-center mb-16 md:mb-24"
      >
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black leading-tight">
          <span style={{ color: '#28193d' }}>Four Principles</span> We Never Get
          <br className="hidden md:block" />
          {" "}Bored Of Talking About
        </h2>
      </motion.header>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[400px] border-t md:border-t-0 border-l border-gray-200">
        {principles.map((item, index) => (
          <article
            key={index}
            className="relative p-8 md:p-10 lg:p-12 flex flex-col justify-end border-r border-b border-gray-200 group transition-all duration-300 hover:bg-gray-50/50"
          >
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 transition-transform duration-500 group-hover:translate-x-1 origin-left">
                {item.title}
              </h3>
              <TypewriterText text={item.description} />
            </div>
          </article>
        ))}
      </div>

      {/* Decorative vertical line - Hidden on mobile for better flow */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 w-[1px] h-32 bg-gray-200 hidden lg:block pointer-events-none" 
        aria-hidden="true" 
      />
    </section>
  );
}