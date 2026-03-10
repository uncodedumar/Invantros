"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// --- SEO KEYWORDS (Hidden from UI, visible to Bots) ---
const SEO_KEYWORDS = [
  "InvanTros startup community Pakistan", "Antrosys enterprise AI integrations", "Pakistan largest tech community for developers",
  "Air University startup incubator", "NASTP technology park collaborations", "FAST NUCES computer science projects",
  "NUST entrepreneurs network", "Bahria University innovation hub", "LUMS center for entrepreneurship",
  "PUCIT developer community", "PIEAS research and development teams", "GIKI engineering students projects",
  "COMSATS tech startup ecosystem", "ITU Lahore artificial intelligence research", "BNU creative arts and design community",
  "custom SaaS software development Pakistan", "best AI art agency for startups", "full-stack web development Islamabad",
  "mobile app development Lahore", "UI/UX design for Pakistani startups", "digital transformation consulting Antrosys",
  "networking for Pakistani researchers", "student developer programs Pakistan", "collaborative workspace for creative people"
].join(", ");

interface Project {
  id: number;
  type: "content" | "header" | "spacer";
  badge?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  bgColor?: string;
  gridSpan: string;
}

const projects: Project[] = [
  {
    id: 1,
    type: "header",
    title: "OUR PROJECTS",
    description: "Access a pipeline of elite talent and venture-ready resources.",
    gridSpan: "col-span-12 py-12 md:py-20",
  },
  {
    id: 2,
    type: "content",
    badge: "DISCORD",
    title: "Redefining a beloved platform",
    description: "How we helped Discord evolve into a place for everyone.",
    imageSrc: "/discord.jpg", 
    bgColor: "bg-[#5865F2]",
    gridSpan: "col-span-12 aspect-[16/9] md:aspect-[21/9]",
  },
  {
    id: 3,
    type: "content",
    badge: "SEQUEL",
    title: "The first tampon redesign in 80 years",
    imageSrc: "/sequel.jpg",
    bgColor: "bg-blue-600",
    gridSpan: "col-span-12 md:col-span-4 aspect-square",
  },
  {
    id: 4,
    type: "content",
    badge: "EATJOY",
    title: "Fueling the spirit of joy",
    imageSrc: "/eatjoy.jpg",
    bgColor: "bg-yellow-400",
    gridSpan: "col-span-12 md:col-span-3 aspect-square",
  },
  {
    id: 5,
    type: "content",
    badge: "CHECKMATE",
    title: "Saving you money while you shop",
    description: "The #1 tool for smart shoppers.",
    imageSrc: "/checkmate.jpg",
    bgColor: "bg-zinc-900",
    gridSpan: "col-span-12 md:col-span-5 aspect-square",
  },
  {
    id: 6,
    type: "content",
    badge: "LIGHTSTONE",
    title: "Direct to consumer insurance",
    imageSrc: "/lightstone.jpg",
    bgColor: "bg-[#28193d]", // UPDATED COLOR
    gridSpan: "col-span-12 md:col-span-9 aspect-[16/9] md:aspect-[16/7]",
  },
  {
    id: 7,
    type: "spacer",
    gridSpan: "hidden md:block md:col-span-3",
  },
];

const GridItem = ({ item }: { item: Project }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  if (item.type === "spacer") {
    return <div className={`${item.gridSpan} border-r border-b border-zinc-800`} aria-hidden="true" />;
  }

  if (item.type === "header") {
    return (
      <header className={`${item.gridSpan} border-r border-b border-zinc-800 flex flex-col justify-center px-6 md:px-10`}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter text-white"
        >
          {item.title}
        </motion.h2>
        <p className="text-zinc-500 text-xs md:text-sm mt-4 max-w-sm uppercase tracking-widest">{item.description}</p>
      </header>
    );
  }

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
      className={`${item.gridSpan} relative overflow-hidden group border-r border-b border-zinc-800 bg-black`}
    >
      <div className="absolute inset-0 w-full h-full">
        <div className={`absolute inset-0 z-[1] ${item.bgColor || "bg-zinc-900"} opacity-30 group-hover:opacity-40 transition-opacity duration-500`} />
        {item.imageSrc && (
          <motion.img
            src={item.imageSrc}
            alt={`${item.title} project showcase by Antrosys`}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-110 group-hover:blur-sm"
          />
        )}
      </div>

      <div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-10">
        <div>
          {item.badge && (
            <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white">
              {item.badge}
            </span>
          )}
        </div>

        <div className="max-w-xs transition-transform duration-500 group-hover:-translate-y-2">
          <h3 className="text-xl md:text-3xl font-medium text-white leading-tight mb-2">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-zinc-300 text-xs md:text-sm line-clamp-2 opacity-80">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default function BentoGrid() {
  return (
    <section className="bg-black min-h-screen w-full overflow-x-hidden" aria-labelledby="results-heading">
      {/* SCREEN READER ONLY SEO SECTION */}
      <div className="sr-only">
        <h1 id="results-heading">InvanTros - Pakistan's Largest Tech and Entrepreneur Community</h1>
        <p>Powered by Antrosys, InvanTros is a collaborative ecosystem for startups, designers, and developers across Pakistan. Partnered with 20+ universities including NUST, LUMS, and FAST.</p>
        <p>{SEO_KEYWORDS}</p>
      </div>

      <div className="max-w-[1600px] mx-auto grid grid-cols-12 border-l border-t border-zinc-800">
        {projects.map((item) => (
          <GridItem key={item.id} item={item} />
        ))}
      </div>
      
      {/* Footer Branding for SEO */}
      <div className="w-full py-6 text-center border-b border-zinc-800">
        <p className="text-zinc-600 text-[10px] tracking-widest uppercase">
        Collaborate on<span className="text-white">high-impact projects</span>  and master cutting-edge stacks.
        </p>
      </div>
    </section>
  );
}