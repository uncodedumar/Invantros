"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MessageCircle, Users, Instagram, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

// Best Practice: Defined Types for better DX and stability
interface SocialRow {
  id: number;
  platform: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  icon: React.ReactNode;
  btnText: string;
}

const socialData: SocialRow[] = [
  {
    id: 1,
    platform: "WhatsApp Channel",
    title: "The Antrosys Feed",
    description: "Get real-time updates on AI art drops, custom model releases, and exclusive design insights directly from Umar Riaz.",
    imageUrl: "/WAchannel.png",
    link: "https://whatsapp.com/channel/0029Vb6yA9DATRSgFD2X9b2B",
    btnText: "Join Channel",
    icon: <MessageCircle className="text-[#25D366]" size={32} aria-hidden="true" />,
  },
  {
    id: 2,
    platform: "WhatsApp Community",
    title: "AI Innovators Hub",
    description: "A collaborative space for founders and creators to discuss enterprise AI integrations and full-stack development.",
    imageUrl: "/WAcomm.png",
    link: "https://chat.whatsapp.com/KbQVaFYWuoa24yYsl71rwQ",
    btnText: "Join Community",
    icon: <Users className="text-[#25D366]" size={32} aria-hidden="true" />,
  },
  {
    id: 3,
    platform: "Instagram",
    title: "Visual Excellence",
    description: "Experience the aesthetic side of Antrosys. Behind-the-scenes of our UI/UX process and high-performance AI art.",
    imageUrl: "/ig.png",
    link: "https://www.instagram.com/invantros",
    btnText: "Follow Us",
    // REPLACED RED WITH #28193d
    icon: <Instagram className="text-[#28193d]" size={32} aria-hidden="true" />,
  },
  {
    id: 4,
    platform: "LinkedIn",
    title: "Professional Network",
    description: "Industry leadership, BPO solutions, and deep dives into the technical architecture of our SaaS platforms.",
    imageUrl: "/linkedin.png",
    link: "https://www.linkedin.com/company/invantros",
    btnText: "Connect Now",
    icon: <Linkedin className="text-[#0A66C2]" size={32} aria-hidden="true" />,
  },
  {
    id: 5,
    platform: "X (Twitter)",
    title: "Tech Pulse",
    description: "Fast-paced tech updates, dev logs for our AWS infrastructure, and snapshots of the digital landscape.",
    imageUrl: "/x.png",
    link: "https://www.x.com/invantros",
    btnText: "Follow @Antrosys",
    icon: <Twitter className="text-[#000000]" size={32} aria-hidden="true" />,
  },
];

const SocialRowComponent = ({ item }: { item: SocialRow }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth scroll transitions
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.9, 1]);
  const springScale = useSpring(scale, { stiffness: 100, damping: 20 });

  return (
    <motion.article
      ref={containerRef}
      style={{ opacity, y }}
      className="w-full border-b-[0.5px] border-black overflow-hidden bg-white"
    >
      <div className="flex flex-col md:flex-row items-center w-full min-h-[400px]">
        
        {/* Text Section */}
        <div className="flex-1 px-6 py-12 sm:px-12 md:px-[10%] lg:px-[15%] flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            {item.icon}
            <span className="text-sm font-bold uppercase tracking-widest text-gray-500">
              {item.platform}
            </span>
          </div>

          <motion.h2 
            style={{ scale: springScale }}
            className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 origin-left leading-tight text-black"
          >
            {item.title}
          </motion.h2>

          <p className="text-gray-600 max-w-xl text-base sm:text-lg mb-8 leading-relaxed">
            {item.description}
          </p>

          <a 
            href={item.link} 
            aria-label={`${item.btnText} on ${item.platform}`}
            className="flex items-center gap-2 group/btn w-fit px-6 py-3 bg-black text-white rounded-full transition-all hover:bg-gray-800 focus:ring-2 focus:ring-[#28193d] focus:ring-offset-2 outline-none"
          >
            <span className="font-medium">{item.btnText}</span>
            <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" aria-hidden="true" />
          </a>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-[0.5px] bg-black self-stretch shrink-0" />

        {/* Image Section */}
        <div className="w-full md:w-[350px] lg:w-[450px] p-8 lg:p-16 flex items-center justify-center bg-[#fafafa] md:bg-transparent">
          <div className="relative w-full aspect-square overflow-hidden rounded-[15px] shadow-sm">
            <Image
              src={item.imageUrl}
              alt={`Visual representation for ${item.title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 350px, 450px"
              className="object-cover transition-all duration-700 hover:scale-105"
              priority={item.id === 1}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default function SocialScrollSection() {
  return (
    <section className="bg-white w-full relative" aria-labelledby="social-heading">
      <h1 id="social-heading" className="sr-only">Invantros Social Communities and Antrosys Updates</h1>
      
      {/* SEO Long-Tail Keyword Cluster - Hidden from UI but visible to Crawlers */}
      <div className="sr-only">
        <p>Invantros: Pakistan's largest tech and entrepreneur community. Connecting startups, developers, designers, and researchers.</p>
        <p>Strategic collaboration with 20+ universities: Air University, NASTP, FAST NUCES, NUST, Bahria University, LUMS, PUCIT, PEAS, GIKI, COMSATS, ITU, BNU.</p>
        <p>Powered by Antrosys: Expert UI/UX design, Custom AI Model development, SaaS engineering, and growth analytics for Pakistani entrepreneurs.</p>
        <h2>Keywords: Pakistan startup ecosystem, AI development Islamabad, tech communities for students Lahore, university entrepreneurship Karachi, full-stack development services Pakistan, custom AI solutions for startups.</h2>
      </div>

      <div className="w-full border-t-[0.5px] border-black" />
      
      {socialData.map((item) => (
        <SocialRowComponent key={item.id} item={item} />
      ))}
    </section>
  );
}