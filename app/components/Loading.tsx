

﻿"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface LoadingScreenProps {
  children: React.ReactNode;
}

const LoadingScreen = ({ children }: LoadingScreenProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Darkened version of your original color
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
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[9999] flex overflow-hidden bg-transparent"
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
                  // Once the 5th column finished animating UP, 
                  // we mark the loader as finished.
                  if (i === 4) {
                    setIsLoaded(true);
                    setShowContent(true);
                  }
                }}
                className="relative h-full flex-1"
                style={{ backgroundColor: primaryColor }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* This ensures that 'children' (your site) are only rendered 
          once the loading animation is complete. 
      */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

export default LoadingScreen;