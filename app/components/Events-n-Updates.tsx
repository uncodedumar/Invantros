"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Calendar, Clock, User } from "lucide-react";

// --- SEO KEYWORD CONSTANTS ---
const SEO_KEYWORDS = [
  "Invantros startup community Pakistan", "best tech community for developers Pakistan", 
  "Antrosys AI solutions for startups", "entrepreneurship network for Pakistani students",
  "Air University tech incubator", "NASTP aerospace and tech startups", "FAST NUCES computer science community",
  "NUST research and development projects", "LUMS entrepreneurship ecosystem", "Bahria University innovation hub",
  "PUCIT software engineering network", "PIEAS nuclear and tech researchers", "GIKI engineering community",
  "COMSATS IT development teams", "ITU Lahore tech innovators", "BNU creative arts and digital media",
  "Pakistan's largest tech collaboration", "university tech partnerships Pakistan", 
  "AI art and generative design community", "SaaS development for Pakistani entrepreneurs",
  "Full-stack development networking Pakistan", "creative professionals community Islamabad Karachi Lahore"
];

interface BaseRow {
  id: number;
  type: "Event" | "Update";
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface EventRow extends BaseRow {
  type: "Event";
  time: string;
  date: string;
  speakers: string[];
}

interface UpdateRow extends BaseRow {
  type: "Update";
}

type RowData = EventRow | UpdateRow;

const rowData: RowData[] = [
  {
    id: 1,
    type: "Event",
    title: "AI Art Mastery 2026",
    description: "Join Muhammad Umar Riaz for an exclusive deep dive into custom AI model training and generative aesthetics.",
    time: "10:00 AM",
    date: "March 15, 2026",
    speakers: ["Umar Riaz", "Sarah Chen"],
    imageUrl: "https://picsum.photos/400/400?random=1",
    link: "/events/ai-mastery",
  },
  {
    id: 2,
    type: "Update",
    title: "SaaS Engine v4.0",
    description: "We've deployed a major update to our core SaaS infrastructure, reducing latency by 40% for all enterprise clients.",
    imageUrl: "https://picsum.photos/400/400?random=2",
    link: "/updates/saas-v4",
  },
  {
    id: 3,
    type: "Event",
    title: "Invantros University Tour",
    description: "Bringing Pakistan's largest tech community to 20+ universities including NUST, FAST, and GIKI.",
    time: "11:00 AM",
    date: "April 02, 2026",
    speakers: ["Invantros Team", "University Leads"],
    imageUrl: "https://picsum.photos/400/400?random=3",
    link: "/events/uni-tour",
  },
  {
    id: 4,
    type: "Update",
    title: "Design Systems 2026",
    description: "Antrosys releases new UI/UX guidelines for high-performance cross-platform mobile applications.",
    imageUrl: "https://picsum.photos/400/400?random=4",
    link: "/updates/design-systems",
  },
  {
    id: 5,
    type: "Event",
    title: "Founder's Circle",
    description: "Exclusive networking for startup founders and researchers from Air University and NASTP.",
    time: "06:00 PM",
    date: "May 10, 2026",
    speakers: ["Umar Riaz"],
    imageUrl: "https://picsum.photos/400/400?random=5",
    link: "/events/founders-circle",
  },
];

const AnimatedRow = ({ row }: { row: RowData }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.8, 1.1]);
  const springScale = useSpring(scale, { stiffness: 100, damping: 20 });

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, y }}
      className="w-full border-b-[0.5px] border-black overflow-hidden bg-white"
    >
      <Link 
        href={row.link} 
        className="group flex flex-col md:flex-row items-center w-full focus:outline-none focus:bg-gray-50 transition-colors"
        aria-label={`${row.type}: ${row.title}`}
      >
        {/* Text Section */}
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
          <span 
            className="inline-block w-fit px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6 border"
            style={{ 
                borderColor: row.type === 'Event' ? '#28193d' : '#000000',
                color: row.type === 'Event' ? '#28193d' : '#000000' 
            }}
          >
            {row.type}
          </span>

          <motion.h2 
            style={{ scale: springScale }}
            className="text-4xl md:text-6xl font-light mb-6 origin-left leading-tight text-black"
          >
            {row.title}
          </motion.h2>

          <p className="text-gray-600 max-w-xl text-lg mb-8 leading-relaxed">
            {row.description}
          </p>

          {row.type === "Event" && (
            <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2" aria-label={`Date: ${row.date}`}>
                <Calendar size={16} style={{ color: '#28193d' }} /> {row.date}
              </div>
              <div className="flex items-center gap-2" aria-label={`Time: ${row.time}`}>
                <Clock size={16} style={{ color: '#28193d' }} /> {row.time}
              </div>
              <div className="flex items-center gap-2" aria-label={`Speakers: ${row.speakers.join(", ")}`}>
                <User size={16} style={{ color: '#28193d' }} /> {row.speakers.join(", ")}
              </div>
            </div>
          )}
        </div>

        {/* Vertical Divider Line */}
        <div className="hidden md:block w-[0.5px] h-[400px] self-stretch bg-black" />

        {/* Image Section */}
        <div className="w-full md:w-[400px] h-[400px] relative overflow-hidden bg-gray-100">
          <Image
            src={row.imageUrl}
            alt={`Visual representation of ${row.title}`}
            width={400}
            height={400}
            className="object-cover w-full h-full grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
            priority={row.id <= 2}
          />
        </div>
      </Link>
    </motion.div>
  );
};

export default function ScrollSection() {
  return (
    <section className="bg-white w-full relative" aria-labelledby="invantros-section-title">
      <h1 id="invantros-section-title" className="sr-only">
        Invantros - Pakistan's Largest Tech and Entrepreneur Community powered by Antrosys
      </h1>
      
      {/* Hidden SEO Keywords for Indexing */}
      <div className="sr-only">
        {SEO_KEYWORDS.map((keyword, index) => (
          <span key={index}>{keyword}, </span>
        ))}
        Invantros ecosystem powered by Antrosys and Muhammad Umar Riaz.
      </div>

      {/* Top Border for first item */}
      <div className="w-full border-t-[0.5px] border-black" />
      
      <div className="flex flex-col">
        {rowData.map((row) => (
          <AnimatedRow key={row.id} row={row} />
        ))}
      </div>
      
      {/* Visual Footer/Partner List hidden but accessible */}
      <footer className="sr-only">
        Collaborating with 20+ Universities: Air University, NASTP, FAST NUCES, NUST, Bahria University, LUMS, PUCIT, PIEAS, GIKI, COMSATS, ITU, BNU.
      </footer>
    </section>
  );
}