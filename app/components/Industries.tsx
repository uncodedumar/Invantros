"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Service {
  id: number;
  title: string;
  videoSrc?: string;
}

const services: Service[] = [
  { id: 1, title: "Artificial Intelligence", videoSrc: "/videos/ai.mp4" },
  { id: 2, title: "Computer Science", videoSrc: "/videos/cs.mp4" },
  { id: 3, title: "High-Growth Startups", videoSrc: "/videos/startups.mp4" },
  { id: 4, title: "Academic Researchers", videoSrc: "/videos/researchers.mp4" },
  { id: 5, title: "Engineers & Developers", videoSrc: "/videos/developers.mp4" },
  { id: 6, title: "UI/UX & Visual Designers", videoSrc: "/videos/designers.mp4" },
  { id: 7, title: "Medical & Health Tech", videoSrc: "/videos/med-students.mp4" },
  { id: 8, title: "Enterprise Teams", videoSrc: "/videos/teams.mp4" },
  { id: 9, title: "Collaborative Groups", videoSrc: "/videos/groups.mp4" },
  { id: 10, title: "Creative Innovators", videoSrc: "/videos/creative-ppl.mp4" },
  { id: 11, title: "Global Companies", videoSrc: "/videos/companies.mp4" },
  { id: 12, title: "Next-Gen Students", videoSrc: "/videos/students.mp4" },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white text-black min-h-screen font-sans overflow-x-hidden" aria-labelledby="services-heading">
      
      {/* --- SEO KEYWORD BANK (Hidden from UI, visible to Crawlers/Screen Readers) --- */}
      <div className="sr-only">
        <h1>Invantros: Pakistan's Largest Tech and Entrepreneur Community</h1>
        <p>A collaborative initiative powered by Antrosys for startups, developers, designers, and researchers.</p>
        <p>Partnered with 20+ universities including NUST, FAST NUCES, LUMS, GIKI, UET, Air University, NASTP, Bahria University, PUCIT, PIEAS, COMSATS, ITU, BNU, and more.</p>
        <ul>
          <li>Startup incubation and mentorship in Pakistan</li>
          <li>Creative design and full-stack development projects</li>
          <li>Entrepreneurship ecosystem for Pakistani students and teams</li>
          <li>AI art and custom machine learning integrations by Antrosys</li>
          <li>Tech networking for researchers and digital creators</li>
        </ul>
      </div>

      {/* Header Section */}
      <div className="grid grid-cols-4 border-b border-gray-300">
        <div className="col-span-1 border-r border-gray-300 h-32 md:h-48 hidden sm:block"></div>
        <div className="col-span-4 sm:col-span-2 flex items-center px-6 md:px-12 py-8 sm:py-0">
          <h2 id="services-heading" className="text-3xl md:text-5xl font-medium leading-tight">
            Powering the world’s most ambitious sectors, to ignite your next leap forward.
          </h2>
        </div>
        <div className="col-span-4 sm:col-span-1 flex justify-center items-center border-t sm:border-t-0 sm:border-l border-gray-300 py-6 sm:py-0">
            {/* The Rotating "View All" Button */}
            <button 
              className="relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#28193d] rounded-full"
              aria-label="View all services"
            >
               <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-gray-200 flex items-center justify-center relative overflow-hidden transition-transform duration-500 group-hover:rotate-45">
                  <div 
                    className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"
                    style={{ backgroundColor: '#28193d' }}
                  ></div>
                  <span className="relative z-10 text-xl md:text-2xl group-hover:text-white transition-colors">→</span>
               </div>
            </button>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
      role="button"
      aria-label={`Learn more about ${service.title}`}
      className="relative h-48 md:h-64 border-b border-r border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer group outline-none focus:bg-gray-50"
    >
      {/* Background Video/GIF Layer */}
      <AnimatePresence>
        {isHovered && service.videoSrc && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-2 z-0 rounded-lg overflow-hidden"
          >
            <video
              src={service.videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Layer */}
      <div className={`relative z-10 transition-all duration-300 ease-in-out ${isHovered && service.videoSrc ? 'text-white font-bold drop-shadow-lg scale-110' : 'text-gray-800'}`}>
        <p className="text-lg md:text-xl text-center px-4 tracking-tight">{service.title}</p>
      </div>

      {/* Fallback Hover for No-Video items using the new Brand Color */}
      {!service.videoSrc && (
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10"
          style={{ backgroundColor: '#28193d' }}
        ></div>
      )}
    </div>
  );
}