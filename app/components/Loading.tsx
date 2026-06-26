"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface LoadingScreenProps {
  children: React.ReactNode;
}

const LoadingScreen = ({ children }: LoadingScreenProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const primaryColor = "#2D1B36";

  const columnVariants: Variants = {
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
    <>
      {/* Children render IMMEDIATELY — not blocked by animation */}
      {children}

      {/* Loader overlays on top, then exits */}
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[9999] flex overflow-hidden"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={columnVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                onAnimationComplete={() => {
                  if (i === 4) setIsLoaded(true);
                }}
                className="relative h-full flex-1"
                style={{ backgroundColor: primaryColor }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LoadingScreen;