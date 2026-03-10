"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Animation variants for the columns
  // Typed as any to stay flexible with Framer Motion's evolving Variant API
  const columnVariants: any = {
    initial: { height: "0%" },
    animate: (i: number) => ({
      height: "100%",
      transition: {
        duration: 1.2,
        ease: [0.45, 0, 0.55, 1],
        delay: i * 0.1,
      },
    }),
    exit: (i: number) => ({
      height: "0%",
      transition: {
        duration: 0.8,
        ease: [0.45, 0, 0.55, 1],
        delay: i * 0.1,
      },
    }),
  };

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          // Highest z-index to stay above nav/footer
          className="fixed inset-0 z-[9999] flex overflow-hidden bg-transparent pointer-events-none"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={columnVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              // Only the last column triggers the removal of the component
              onAnimationComplete={() => {
                if (i === 4) setIsLoaded(true);
              }}
              className="relative h-full flex-1 pointer-events-auto"
              style={{ backgroundColor: "#68507B" }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;