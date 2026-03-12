"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion'; // Added Variants type
import { Plane, Users, Bot, Briefcase } from 'lucide-react';

const AntrosysMembership = () => {
  // Animation Variants with explicit Typing to resolve the red error
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    }),
  };

  const cards = [
    {
      title: "Architectural Access",
      desc: "Direct pathways to founders and operators from FAST, NUST, and LUMS.",
      icon: <Plane className="w-6 h-6" />,
      img: "/Images/Architectural Access.jpg",
    },
    {
      title: "Elite Infrastructure",
      desc: "Next-gen AI tools and creative resources to bypass the cold-start problem.",
      icon: <Bot className="w-6 h-6" />,
      img: "/Images/Elite Infrastructure.jpg",
    },
    {
      title: "The War Room",
      desc: "Real-time intelligence on market failures and high-stakes growth tactics.",
      icon: <Users className="w-6 h-6" />,
      img: "/Images/The War Room.avif",
    },
    {
      title: "Merit-Driven Growth",
      desc: `A high-velocity network that rewards "Proof of Work" over empty networking.`,
      icon: <Briefcase className="w-6 h-6" />,
      img: "/Images/Merit-Driven Growth.jpg",
    },
  ];

  return (
    <section className="min-h-screen bg-white text-black py-24 px-6 font-['Poppins',sans-serif] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <motion.p 
              custom={0} initial="hidden" animate="visible" variants={fadeInUp}
              className="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-6 font-semibold"
            >
              Membership, Reimagined for Invantros
            </motion.p>
            <motion.h1 
              custom={1} initial="hidden" animate="visible" variants={fadeInUp}
              className="text-5xl md:text-7xl font-light tracking-tight leading-[1.1] text-zinc-900"
            >
              The  <span className="text-zinc-400 italic">Architecture</span>, <br />
              of  <span className="font-medium">Success.</span>
            </motion.h1>
          </div>
          
          <motion.div 
            custom={2} initial="hidden" animate="visible" variants={fadeInUp}
            className="lg:col-span-4 pb-2"
          >
            <p className="text-zinc-500 text-lg leading-relaxed border-l border-zinc-200 pl-6">
            A membership at Invantros is a strategic investment in elite access, battle-tested intelligence, and the infrastructure required to dominate the next-gen digital landscape.            </p>
          </motion.div>
        </header>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              custom={index + 3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group relative h-[550px] overflow-hidden rounded-lg bg-zinc-100 flex flex-col justify-end p-8 border border-zinc-200 hover:border-zinc-300 transition-colors cursor-pointer"
            >
              {/* Background Image with Color Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={card.img} 
                  alt={card.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/5 backdrop-blur-md border border-black/10 text-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-medium mb-3 text-zinc-900 group-hover:translate-x-1 transition-transform duration-300">
                  {card.title}
                </h3>
                <p className="text-zinc-900 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AntrosysMembership;
