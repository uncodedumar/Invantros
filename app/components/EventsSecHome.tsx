"use client";
import React from 'react';

const EventsSection = () => {
  // SEO Long-tail Keywords for Invantros & Antrosys
  const seoKeywords = [
    "Pakistan's largest tech and entrepreneur community",
    "Invantros startup networking Pakistan",
    "collaborative ecosystem for developers and designers",
    "Air University tech events",
    "NASTP startup incubator collaboration",
    "FAST NUCES computer science community",
    "NUST entrepreneurship wing",
    "LUMS Center for Entrepreneurship projects",
    "GIKI engineering and innovation hub",
    "COMSATS student startup initiatives",
    "ITU research and development community",
    "PUCIT developer network",
    "Antrosys enterprise AI integrations",
    "custom SaaS software development Pakistan",
    "full-stack web and mobile application development",
    "growth analytics and marketing automation for startups",
    "Pakistani student researcher community",
    "creative people and digital transformation leaders"
  ].join(", ");

  return (
    <div className="px-4 md:px-10 py-10 w-full overflow-hidden">
      {/* Hidden SEO Metadata for Crawlers */}
      <section className="sr-only">
        <h1>Invantros: Pakistan's Premier Tech & Entrepreneur Community</h1>
        <p>Powered by Antrosys. In collaboration with 20+ universities including NUST, FAST, LUMS, GIKI, and Air University.</p>
        <p>{seoKeywords}</p>
      </section>

      <section 
        className="relative w-full py-24 bg-white overflow-hidden border-2 border-black flex flex-col justify-center min-h-[500px]"
        aria-labelledby="events-heading"
      >
        
        {/* Background Grid - Precision border logic */}
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
          aria-hidden="true"
        />

        {/* Scrolling Marquee Text (Sync Scroll) */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-full overflow-hidden whitespace-nowrap pointer-events-none opacity-[0.03] select-none"
          aria-hidden="true"
        >
          <div className="inline-block animate-scroll text-[150px] md:text-[250px] font-black uppercase leading-none">
            Events • Experiences • Innovation • Events • Experiences • Innovation • Antrosys •&nbsp;
            Events • Experiences • Innovation • Events • Experiences • Innovation • Antrosys •
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between relative z-10">
          
          {/* Text Content */}
          <div className="flex flex-col">
            <h2 
              id="events-heading"
              className="text-[60px] sm:text-[80px] md:text-[140px] font-black leading-[0.85] uppercase tracking-tighter text-black mb-4"
            >
              Events & <br className="block md:hidden" /> Updates
            </h2>
            <div className="flex items-center gap-4">
               <span className="h-px w-12 bg-black hidden md:block" aria-hidden="true"></span>
               <p className="text-gray-600 text-xs md:text-sm font-bold tracking-widest uppercase max-w-md leading-relaxed">
                A few of the outcomes we're proud to <br className="hidden sm:block" />
                have delivered... we've saved you a spot.
              </p>
            </div>
          </div>

          {/* Action Button - Responsive and Accessible */}
          <div className="mt-12 md:mt-0">
            <button 
              className="relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#28193d] rounded-full p-0 border-none bg-transparent"
              aria-label="View all events and community updates"
            >
              <div className="w-28 h-28 md:w-40 md:h-40 rounded-full border-2 border-black flex items-center justify-center relative overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95">
                {/* Solid fill animation - Using #28193d */}
                <div className="absolute inset-0 bg-[#28193d] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                
                {/* Arrow Icon */}
                <span className="relative z-10 text-3xl md:text-4xl text-black group-hover:text-white transition-colors duration-300">
                  →
                </span>
              </div>
            </button>
          </div>

        </div>

        {/* Optimized CSS for Performance */}
        <style jsx>{`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: inline-block;
            animation: scroll 40s linear infinite;
            will-change: transform;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-scroll {
              animation: none;
            }
          }
        `}</style>
      </section>
    </div>
  );
};

export default EventsSection;