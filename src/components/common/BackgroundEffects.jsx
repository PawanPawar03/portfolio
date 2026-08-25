import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Orb 1 - Top Left (Violet Aurora) */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-500/20 via-purple-400/15 to-transparent blur-[100px] dark:from-violet-600/20 dark:via-purple-800/10"
      />

      {/* Orb 2 - Top Right (Cyan & Sky Light) */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 60, -40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 -right-24 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-sky-400/20 via-cyan-300/15 to-transparent blur-[110px] dark:from-sky-500/15 dark:via-cyan-900/10"
      />

      {/* Orb 3 - Center Left (Rose & Fuchsia Wave) */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-2/3 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-pink-400/15 via-rose-300/10 to-transparent blur-[120px] dark:from-pink-600/10 dark:via-rose-900/10"
      />

      {/* Orb 4 - Bottom Right (Indigo Glow) */}
      <motion.div
        animate={{
          x: [0, -40, 40, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-20 -right-20 w-[550px] h-[550px] rounded-full bg-gradient-to-tl from-indigo-500/20 via-violet-400/15 to-transparent blur-[100px] dark:from-indigo-600/20 dark:via-violet-900/10"
      />
    </div>
  );
};
