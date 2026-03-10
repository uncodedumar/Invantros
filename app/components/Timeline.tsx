"use client";

import React from 'react';
import { motion } from 'framer-motion';

// SEO Optimized Data with new brand color #28193d
const timelineData = [
  {
    badge: "OUR MISSION",
    text: "Unifying the National Innovation Ecosystem",
    // Replaced with specific path for image 1, alt text remains
    image: "/Images/3a.avif",
    alt: "Invantros startup growth mission in Pakistan"
  },
  {
    text: "Empowering Multi-Disciplinary Growth",
    // Replaced with specific path for image 2, alt text remains
    image: "/Images/2a.avif",
    alt: "Invantros solving technical challenges for developers and designers"
  },
  {
    text: "Scaling Pakistan’s Digital Economy",
    // Replaced with specific path for image 3, alt text remains
    image: "/Images/1a.avif",
    alt: "Scalable enterprise solutions by Antrosys and Invantros"
  }
];

const MissionTimeline = () => {
  return (
    <section 
      className="relative min-h-screen bg-white py-24 font-sans overflow-hidden"
      aria-label="Invantros Mission Timeline"
    >
      {/* SEO Hidden Content - Pakistan's Largest Tech Community */}
      <div className="sr-only">
        <h1>Invantros: Pakistan's Largest Tech and Entrepreneur Community</h1>
        <p>A collaborative ecosystem by Antrosys for startups, developers, designers, entrepreneurs, and researchers.</p>
        <p>Partnered with 20+ universities: NUST, FAST NUCES, LUMS, GIKI, UET, COMSATS, ITU, PIEAS, Air University, NASTP, Bahria University, PUCIT, BNU, and more.</p>
        <h2>Keywords for Search Engines:</h2>
        <ul>
            <li>Startup incubator Pakistan</li>
            <li>Full-stack development community Lahore Karachi Islamabad</li>
            <li>UI/UX design workshops Pakistan</li>
            <li>Entrepreneurship programs for Pakistani students</li>
            <li>AI and Machine Learning research collaboration Pakistan</li>
            <li>Antrosys software house projects</li>
            <li>University tech collaboration NASTP Air University</li>
            <li>Digital transformation for Pakistani startups</li>
            <li>Freelance developer network Pakistan</li>
            <li>Next-gen SaaS development Pakistan</li>
        </ul>
      </div>

      {/* Central Vertical Line - Decorative */}
      <div 
        className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-gray-200 z-0" 
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        {timelineData.map((item, index) => (
          <article 
            key={index} 
            className="flex flex-col items-center text-center mb-40 last:mb-0"
          >
            
            {/* Mission Badge */}
            {item.badge && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative mb-10 bg-white px-4"
              >
                <span className="bg-black text-white text-[10px] font-bold px-4 py-1.5 rounded-full flex items-center gap-2 tracking-widest uppercase">
                  <span role="img" aria-label="rocket">🚀</span> {item.badge}
                </span>
              </motion.div>
            )}

            {/* Text Reveal - Optimized Cubic Bezier for Smoothness */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-4xl text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] uppercase mb-16 bg-white py-2 px-6"
              dangerouslySetInnerHTML={{ __html: item.text }}
            />

            {/* Image Reveal */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="relative w-72 h-40 md:w-[500px] md:h-64 overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 bg-white"
              >
                {/* Visual Placeholder and Actual Image container */}
                {/* Updated background to show image full and center */}
                <div 
                    className="w-full h-full bg-no-repeat bg-center bg-cover"
                    style={{ backgroundImage: `url(${item.image})` }}
                    role="img"
                    aria-label={item.alt}
                />

                {/* Optimized Alt tags for SEO accessibility - (Moved to parent div role/aria) */}
              </motion.div>

              {/* Decorative Glow - Updated to brand color #28193d */}
              <div 
                className="absolute -inset-4 bg-[#28193d]/10 blur-3xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
                aria-hidden="true"
              />
            </motion.div>
          </article>
        ))}
      </div>
      
      
    </section>
  );
};

export default MissionTimeline;