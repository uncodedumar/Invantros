"use client";

import React from "react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { Linkedin } from "lucide-react";
import Image from "next/image";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700"],
  display: 'swap'
});

const team = [
  { id: 1, name: "Muhammad Umar Riaz", title: "President", img: "/umar.webp" },
  { id: 2, name: "Ahmad Aziz", title: "Vice President", img: "/ahmad.avif" },
  { id: 3, name: "Amna Imran", title: "Cheif Operations Officer", img: "/amna.webp" },
  { id: 4, name: "Zoya Umar", title: "Cheif Strategist Officer", img: "/zoya.avif" },
  { id: 5, name: "Ahlam Amjad", title: "Cheif Creative Officer", img: "/ahlam.webp" },
  { id: 6, name: "Hassnian Imran", title: "Cheif Information Security Officer", img: "/hassnain.webp" },
  { id: 7, name: "Fatir Bin Irfan", title: "Head Of Organized Chaos", img: "/fatir.avif" },
];

export default function LeadershipSection() {
  return (
    <section 
      aria-labelledby="leadership-heading"
      className={`bg-white ${poppins.className} py-20 overflow-hidden`}
    >
      {/* SEO Long-Tail Keyword Injection (Screen Reader Only) */}
      <div className="sr-only">
        <h1>Invantros: Pakistan's Largest Tech and Entrepreneur Community</h1>
        <p>A collaborative ecosystem for startups, developers, designers, and researchers powered by Antrosys.</p>
        <ul>
          <li>Startup incubation in Pakistan for students and entrepreneurs</li>
          <li>AI development and design community in collab with NUST, LUMS, and FAST NUCES</li>
          <li>Tech networking for Air University, NASTP, and GIKI researchers</li>
          <li>Best software engineering projects for university students in Pakistan</li>
          <li>Entrepreneurship workshops at Bahria University, PUCIT, and PIEAS</li>
          <li>Creative design and full-stack development community Pakistan</li>
          <li>Innovation hub for COMSATS, ITU, BNU, and UET teams</li>
          <li>Pakistan national tech talent accelerator powered by Antrosys</li>
        </ul>
      </div>

      {/* 1. Header Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 
            id="leadership-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-left"
          >
            Leadership
          </h2>
          <p className="max-w-3xl text-lg text-gray-600 leading-relaxed">
          At Invantros, leadership is defined by the collective synergy of Pakistan’s largest tech and entrepreneurship ecosystem. By uniting over 20 premier universities—including NUST, FAST-NUCES, LUMS, and NASTP—our community provides the technical mastery and creative infrastructure needed to empower startups, developers, and researchers. Together, we are not just managing projects; we are pioneering the digital frontier by turning academic potential into global innovation.
          </p>
        </motion.div>
      </div>

      {/* 2. Grid Container */}
      <div className="w-full px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12">
          {team.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col border-t border-l border-b border-black group
                ${(index + 1) % 4 === 0 ? "lg:border-r" : ""} 
                ${(index + 1) % 2 === 0 ? "md:border-r" : ""}
                max-md:border-r
              `}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden p-4 bg-gray-50">
                <Image
                  src={person.img}
                  alt={`Portrait of ${person.name}, ${person.title} at Antrosys`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover  transition-all duration-700 ease-in-out group-hover:scale-105"
                  priority={index < 4}
                  fetchPriority={index < 4 ? "high" : "auto"}
                />
              </div>
              
              {/* Info Section */}
              <div className="p-6 border-t border-black bg-white flex-grow">
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-tight">
                  {person.name}
                </h3>
                <div className="flex justify-between items-end mt-2">
                  <p className="text-sm text-gray-500 font-medium">
                    {person.title}
                  </p>
                  <a 
                    href={`#${person.name.replace(/\s+/g, '-').toLowerCase()}`} 
                    aria-label={`Visit ${person.name}'s LinkedIn profile`}
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-black hover:bg-[#28193d] hover:border-[#28193d] hover:text-white transition-all duration-300"
                  >
                    <Linkedin size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}