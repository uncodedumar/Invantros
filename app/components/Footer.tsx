"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#28193d] text-white w-full font-sans uppercase text-[12px] font-medium tracking-wider">
      <div className="max-w-[1800px] mx-auto border-t border-white/20">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
          
          {/* Left Column: Subscription & Socials */}
          <div className="col-span-1 md:col-span-5 p-6 sm:p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/20 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-[14px]">Subscribe to stay in touch.</h3>
              <form className="relative max-w-sm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="email-subscribe" className="sr-only">Email Address</label>
                <input 
                  id="email-subscribe"
                  type="email" 
                  placeholder="ENTER EMAIL ADDRESS.." 
                  className="w-full bg-transparent border border-white rounded-full py-3 px-6 placeholder:text-white/70 focus:outline-none focus:ring-1 focus:ring-white"
                  required
                />
                <button 
                  type="submit"
                  aria-label="Submit subscription"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xl hover:translate-x-1 transition-transform"
                >
                  →
                </button>
              </form>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-x-16 lg:gap-x-24 mt-12">
              <nav className="flex flex-col space-y-2" aria-label="Social Media">
                <a href="#" className="hover:opacity-70 transition-opacity">LinkedIn —&gt;</a>
                <a href="#" className="hover:opacity-70 transition-opacity">Instagram —&gt;</a>
                <a href="#" className="hover:opacity-70 transition-opacity">Behance —&gt;</a>
              </nav>
              <div className="flex flex-col space-y-2">
                <a href="#" className="hover:opacity-70 transition-opacity">Start A Project</a>
                <p className="tabular-nums">Text or Call: +1 (415) 840 4427</p>
                <a href="mailto:hello@invantros.com" className="hover:opacity-70 lowercase transition-opacity">hello@invantros.com</a>
              </div>
            </div>
          </div>

          {/* Right Section: Navigation Grid */}
          <div className="col-span-1 md:col-span-7 flex flex-col">
            <div className="p-6 sm:p-8 md:p-12 border-b border-white/20">
              <h3 className="text-[14px]">Navigation</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-grow">
              {/* Home Column */}
              <nav className="p-6 sm:p-8 md:p-12 border-b sm:border-b-0 sm:border-r border-white/20 space-y-3" aria-label="Footer Main">
                <p className="font-bold mb-4 md:mb-6 text-[14px]">Home</p>
                <ul className="space-y-3">
                  <li><a href="/Work" className="hover:opacity-70 transition-opacity block">Projects</a></li>
                  <li><a href="/about" className="hover:opacity-70 transition-opacity block">About</a></li>
                  <li><a href="/Events" className="hover:opacity-70 transition-opacity block">Events</a></li>
                  <li><a href="/Contact" className="hover:opacity-70 transition-opacity block">Contact</a></li>
                </ul>
              </nav>

              {/* Industries Column */}
              <nav className="p-6 sm:p-8 md:p-12 border-b sm:border-b-0 lg:border-r border-white/20 space-y-3" aria-label="Industries">
                <p className="font-bold mb-4 md:mb-6 text-[14px]">Industries</p>
                <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-3">
                  <ul className="space-y-3">
                    <li><a href="#" className="hover:opacity-70 transition-opacity block">AI</a></li>
                    <li><a href="#" className="hover:opacity-70 transition-opacity block">Alt Medicine</a></li>
                    <li><a href="#" className="hover:opacity-70 transition-opacity block">B2B</a></li>
                    <li><a href="#" className="hover:opacity-70 transition-opacity block">Clinics & Hospitals</a></li>
                    <li><a href="#" className="hover:opacity-70 transition-opacity block">Consumer Health</a></li>
                  </ul>
                  <ul className="space-y-3">
                    <li><a href="#" className="hover:opacity-70 transition-opacity block">Financial Services</a></li>
                    <li><a href="#" className="hover:opacity-70 transition-opacity block">Fintech</a></li>
                    <li><a href="#" className="hover:opacity-70 transition-opacity block">HealthTech</a></li>
                    <li><a href="#" className="hover:opacity-70 transition-opacity block">Real Estate</a></li>
                    <li><a href="#" className="hover:opacity-70 transition-opacity block">Tech</a></li>
                  </ul>
                </div>
              </nav>

              {/* Copyright Column */}
              <div className="p-6 sm:p-8 md:p-12 relative min-h-[100px] lg:min-h-0">
                <span className="static lg:absolute top-10 right-10 text-[12px] font-bold block text-left lg:text-right">
                  ©INVANTROS2026
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Policies */}
        <div className="border-y border-white/20 py-8 px-6 sm:px-8 md:px-12 md:ml-[41.66%]">
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-[11px] sm:text-[12px]">
            <a href="#" className="hover:opacity-70 transition-opacity whitespace-nowrap">Privacy Policy</a>
            <a href="#" className="hover:opacity-70 transition-opacity whitespace-nowrap">Cookies</a>
            <a href="#" className="hover:opacity-70 transition-opacity whitespace-nowrap">Terms and Conditions</a>
            <a href="https://www.antrosys.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity whitespace-nowrap">
              Designed & Developed by Antrosys.com
            </a>
          </div>
        </div>

        {/* Big Massive Wordmark */}
        <div className="w-full overflow-hidden py-4 sm:py-8">
          <h1 className="text-[18vw] font-black leading-[0.8] tracking-tighter text-center select-none">
            INVANTROS
          </h1>
        </div>

        {/* SEO Metadata Section (Visually hidden but Crawlable) */}
        <section className="sr-only" aria-hidden="true">
          <h2>Invantros: Pakistan's Largest Tech and Entrepreneur Community</h2>
          <p>
            Invantros is a leading ecosystem for startups, developers, designers, entrepreneurs, and researchers in Pakistan. 
            In collaboration with 20+ prestigious universities including NUST, LUMS, GIKI, FAST NUCES, Air University, NASTP, 
            Bahria University, PUCIT, PIEAS, COMSATS, ITU, and BNU.
          </p>
          <ul>
            <li>Pakistan tech community for university students and researchers</li>
            <li>Collaborative startup ecosystem for Pakistani entrepreneurs</li>
            <li>Best community for UI/UX designers and full-stack developers in Pakistan</li>
            <li>Tech incubation and project collaboration for Air University and NASTP students</li>
            <li>Networking for NUST and LUMS alumni and startup founders</li>
            <li>Pakistan's premier platform for creative professionals and AI researchers</li>
            <li>Digital transformation and entrepreneurial growth at FAST NUCES and GIKI</li>
            <li>Innovation hub for COMSATS, ITU, and BNU creative projects</li>
            <li>Skill development for student-led projects and tech teams in Lahore, Karachi, Islamabad</li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;