"use client";

import React from "react";

// Data arrays remain the same
const row1 = [
  { name: "Analog Services", src: "/Collabs/DEVMACH.png" },
  { name: "Sequel", src: "/Collabs/ANTROSYS.png" },
  { name: "UCSF", src: "/Collabs/BRICKLIX.png" },
  { name: "Lumanu", src: "/Collabs/CINQO.png" },
];

const row2 = [

  { name: "Grammarly", src: "/Collabs/cui.png" },
  { name: "Vividly", src: "/Collabs/must.png" },

  { name: "JetBrains", src: "/Collabs/kemu.png" },
  { name: "Henry", src: "/Collabs/gcu.png" },
  { name: "Superhuman", src: "/Collabs/glasgow.png" },
  { name: "Maze", src: "/Collabs/air.png" },
  { name: "Conduit", src: "/Collabs/bnu.png" },
  { name: "Vividly", src: "/Collabs/lums.png" },
  { name: "Lightstone Direct", src: "/Collabs/fast.png" },
  { name: "Vividly", src: "/Collabs/itu.png" },
  { name: "Vividly", src: "/Collabs/pu.png" },
  { name: "Vividly", src: "/Collabs/uol.webp" },
  { name: "Vividly", src: "/Collabs/uvas.webp" },

  { name: "Vividly", src: "/Collabs/nust.png" },
  { name: "Vividly", src: "/Collabs/uet.png" },



];

export default function TrustedBySection() {
  return (
    <section 
      className="bg-white py-16 flex flex-col items-center w-full px-4 md:px-10 overflow-hidden"
      aria-labelledby="trusted-by-heading"
    >
      {/* SEO KEYWORD CLOUD (Hidden from UI, visible to Search Engines) */}
      <div className="sr-only">
        <h1>Invantros - Pakistan's Largest Tech and Entrepreneur Community</h1>
        <p>
          Powered by Antrosys, Invantros is the premier ecosystem for startups, developers, designers, entrepreneurs, and researchers in Pakistan. 
          Our community facilitates collaboration between creative people, project teams, and students from top-tier institutions including:
          Air University, NASTP, FAST NUCES, NUST, Bahria University, LUMS, PUCIT, PIEAS, GIKI, COMSATS, ITU, BNU, and more.
          We provide resources for digital transformation, AI art, custom SaaS software development, and full-stack engineering.
          Join the most influential network of tech leaders and innovative startups in Lahore, Karachi, Islamabad, and across 20+ Pakistani universities.
        </p>
      </div>

      {/* 1. Header Text Container */}
      <div className="w-full max-w-[1400px] flex flex-col items-start mb-8 px-2">
        <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-semibold mb-2">
          Our Collaboration in the World
        </p>
        <div className="relative">
          <h2 id="trusted-by-heading" className="text-lg md:text-xl font-semibold text-slate-900">
            Bring students together from top-tier institutions to collaborate with seasoned entrepreneurs and creative visionaries..
          </h2>
          {/* Hand-drawn arrow */}
          <div className="absolute -bottom-8 right-[-30px] hidden lg:block" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 44 48" fill="none" className="rotate-[10deg] opacity-80">
              <path d="M5 2C5 2 12 25 38 32" stroke="currentColor" className="text-slate-800" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M30 35L38 32L34 25" stroke="currentColor" className="text-slate-800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* 2. Main Cloud Container (Background Image Added Here) */}
      <div 
        className="relative w-full max-w-[1400px] overflow-hidden rounded-[40px] py-20 md:py-32 flex flex-col gap-12 md:gap-20"
        style={{
          backgroundImage: `url('/clouds.avif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Row 1: Static / Centered */}
        <div className="relative z-10 flex justify-center items-center px-6 gap-4 md:gap-10 flex-wrap">
          {row1.map((logo, i) => (
            <img 
              key={`row1-${i}`} 
              src={logo.src} 
              alt={`${logo.name} logo`} 
              loading="lazy"
              className="mx-2 h-10 md:h-20 w-auto  object-contain " 
            />
          ))}
        </div>

        {/* Row 2: Smooth Marquee */}
        <div 
          className="relative z-10 flex overflow-x-hidden group"
          role="region" 
          aria-label="Scrolling brand logos"
        >
          <div className="animate-marquee flex whitespace-nowrap gap-12 md:gap-16 items-center">
            {[...row2, ...row2, ...row2].map((logo, i) => (
              <img 
                key={`row2-${i}`} 
                src={logo.src} 
                alt={`${logo.name} logo`}
                loading="lazy"
                className="mx-2 h-10 md:h-20 w-auto  object-contain " 
              />
            ))}
          </div>
        </div>

        {/* Subtle Overlay */}
        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[40px]"></div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: no-preference) {
          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
            overflow-x: auto;
            white-space: normal;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
