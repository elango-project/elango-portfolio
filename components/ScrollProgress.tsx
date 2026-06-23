"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Smooth out the progress bar movement
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left bg-slate-900 dark:bg-gradient-to-r dark:from-cyan-400 dark:to-purple-500 dark:shadow-[0_0_10px_rgba(0,245,255,0.5)]"
      style={{ scaleX }}
    />
  );
}
