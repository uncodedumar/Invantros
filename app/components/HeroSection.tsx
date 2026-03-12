import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="w-full bg-white mt-16 md:mt-24 p-3 md:p-4"
      aria-labelledby="hero-heading"
    >
      {/* SEO BLOCK: Hidden from UI but optimized for Google/Bing crawlers.
          Focusing on Invantros, Antrosys, and Pakistan's Tech Ecosystem.
      */}
      <div className="sr-only">
        <h2>Invantros: Pakistan's Largest Tech and Entrepreneur Community</h2>
        <p>
          Powered by Antrosys, Invantros is a collaborative ecosystem for startups, 
          full-stack developers, UI/UX designers, creative researchers, and entrepreneurs. 
          In collaboration with 20+ prestigious universities including Air University, 
          NASTP, FAST NUCES, NUST, Bahria University, LUMS, PUCIT, PIEAS, GIKI, COMSATS, 
          ITU, and BNU. We empower student projects and professional teams with 
          cutting-edge AI art, custom SaaS software development, and enterprise AI integrations.
        </p>
        <ul>
          <li>Best startup community in Pakistan for developers and designers</li>
          <li>Top-tier technology consulting and digital transformation by Antrosys</li>
          <li>Collaborative research and development for Pakistani university students</li>
          <li>High-performance mobile and web application development for entrepreneurs</li>
          <li>Scaling Pakistani startups with AWS cloud infrastructure and ML/DL solutions</li>
        </ul>
      </div>

      {/* Main Hero Container */}
      <div className="relative h-[80vh] md:h-[88vh] w-full overflow-hidden rounded-[5px] shadow-sm">
        
        {/* Background Video - Optimized for responsiveness and smoothness */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          title="Invantros Community Background"
          className="absolute inset-0 w-full h-full object-cover scale-105 pointer-events-none"
        >
          <source src="/Videos/1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Refined Overlay: Backdrop blur for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-transparent backdrop-blur-[1.5px]" />

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-12">
          
          <h1 
            id="hero-heading"
            className="font-['Poppins'] font-black text-5xl md:text-8xl lg:text-9xl text-white uppercase tracking-[-0.04em] leading-[0.85] drop-shadow-sm"
          >
            Connecting <br /> 
            <span className="text-white">World-Class</span> <br />
            <span className="text-white">Talent.</span>
          </h1>
          
          <p className="font-['Poppins'] font-medium mt-10 max-w-3xl text-lg md:text-2xl text-white leading-relaxed tracking-tight">
          Invantros is the high-velocity ecosystem where ambitious founders, elite developers, and visionary creatives dissolve the barriers between bold ideas and global impact.
          </p>

          {/* Button: Now using #28193d as the primary action color 
              Added focus states for 100% accessibility compliance.
          */}
          <button 
            aria-label="Join the Invantros network"
            className="mt-12 px-10 py-5 bg-[#28193d] text-white text-sm md:text-base font-bold rounded-full 
                       hover:bg-black focus:outline-none focus:ring-4 focus:ring-[#28193d]/50
                       transition-all duration-300 transform hover:scale-105 hover:shadow-2xl 
                       tracking-widest uppercase"
          >
            Explore the Network
          </button>
        </div>

        {/* Bottom Shade: Adds depth without affecting functionality */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default HeroSection;