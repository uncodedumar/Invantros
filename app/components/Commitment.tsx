"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const DecryptText = ({ label }: { label: string }) => {
  const [displayText, setDisplayText] = useState(label);
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startScrambling = () => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

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
        if (intervalRef.current) clearInterval(intervalRef.current);
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
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section 
      ref={containerRef}
      /* Changed min-h-screen to h-auto and tightened padding for mobile */
      className="h-auto bg-white flex flex-col justify-center px-6 md:px-16 py-10 md:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative">
        
        {/* Top Right Small Description - Reduced margin bottom */}
        <div className="flex justify-end mb-2 md:mb-4">
          <p className="max-w-[220px] md:max-w-[280px] text-[10px] md:text-[11px] leading-tight text-gray-800 font-medium uppercase tracking-tighter text-right">
            We aren’t just a provider; we’re an ecosystem. 
            From curious students to elite developers, 
            we build the infrastructure for our global 
            community to innovate and scale together.
          </p>
        </div>

        {/* Main Heading - Tightened leading and responsive sizing */}
        <motion.div 
          style={{ scale, opacity }}
          className="flex flex-col leading-[0.8] font-black tracking-tighter text-black select-none"
        >
          <h2 className="text-[14vw] md:text-[10vw] m-0 p-0">
            <DecryptText label="READY FOR" />
          </h2>
          <h2 className="text-[14vw] md:text-[10vw] m-0 p-0">
            <DecryptText label="COMMITMENT?" />
          </h2>
        </motion.div>
      </div>
    </section>
  );
}