"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const DecryptText = ({ label }: { label: string }) => {
  const [displayText, setDisplayText] = useState(label);
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startScrambling = () => {
    let iteration = 0;
    clearInterval(intervalRef.current!);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((_, index) => {
            if (index < iteration) return label[index];
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= label.length) {
        clearInterval(intervalRef.current!);
      }
      iteration += 1 / 3;
    }, 30);
  };

  return (
    <span onMouseEnter={startScrambling} className="cursor-default">
      {displayText}
    </span>
  );
};

export default function CommitmentSection() {
  const containerRef = useRef(null);
  
  // Hooking into scroll for scaling effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scales text from 0.8 to 1.2 based on scroll position
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section 
      ref={containerRef}
      className="min-h-screen bg-white flex flex-col justify-center px-8 md:px-16 py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative">
        
        {/* Top Right Small Description */}
        <div className="flex justify-end mb-4">
  <p className="max-w-[280px] text-[11px] leading-tight text-gray-800 font-medium uppercase tracking-tighter">
    We aren’t just a provider; we’re an ecosystem. 
    From curious students to elite developers, 
    we build the infrastructure for our global 
    community to innovate and scale together.
  </p>
</div>

        {/* Main Heading with Scroll Scale and Hover Decryption */}
        <motion.div 
          style={{ scale, opacity }}
          className="flex flex-col leading-[0.85] font-black tracking-tighter text-black select-none"
        >
          <h2 className="text-[12vw] md:text-[10vw]">
            <DecryptText label="READY FOR" />
          </h2>
          <h2 className="text-[12vw] md:text-[10vw]">
            <DecryptText label="COMMITMENT?" />
          </h2>
        </motion.div>
      </div>
    </section>
  );
}