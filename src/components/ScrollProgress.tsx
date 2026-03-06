'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-zinc-800/50 z-[100]">
      <motion.div
        className="h-full w-full origin-left bg-gradient-to-r from-[#00ff88] to-[#00d26a]"
        style={{ scaleX }}
      />
    </div>
  );
}
