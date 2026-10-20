"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = [
  "Hello",
  "नमस्ते",
  "வணக்கம்",
  "ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ",
  "Building for Bharat",
  "TechUtsav India",
];

export function IntroPreloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (index === WORDS.length - 1) {
      const exitTimer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(exitTimer);
    }

    const interval = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 240);

    return () => clearTimeout(interval);
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curveVariants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  const slideUpVariants = {
    initial: {
      top: 0,
    },
    exit: {
      top: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.15 },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          variants={slideUpVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d1117] text-white cursor-wait select-none overflow-hidden"
        >
          {dimension.width > 0 && (
            <>
              {/* Words Animation */}
              <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#9BE600] animate-pulse" />
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white"
                  >
                    {WORDS[index]}
                  </motion.p>
                </div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.45 }}
                  transition={{ delay: 0.3 }}
                  className="mt-3 text-[11px] font-mono uppercase tracking-[0.25em] text-slate-400"
                >
                  Tech Community • India
                </motion.span>
              </div>

              {/* Curved SVG Exit Wave */}
              <svg className="absolute top-0 left-0 w-full h-[calc(100%+300px)] pointer-events-none fill-[#0d1117]">
                <motion.path
                  variants={curveVariants}
                  initial="initial"
                  exit="exit"
                />
              </svg>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
