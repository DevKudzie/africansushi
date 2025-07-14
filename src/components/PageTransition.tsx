"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

// Animation variants for different transition types
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02,
  },
};

const pageTransition = {
  type: "tween" as const,
  ease: "easeInOut" as const, // Premium easing
  duration: 0.5,
};

// Stagger animation for child elements
const containerVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full"
      >
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="in"
          exit="out"
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Export a loading component for enhanced transitions
export function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-16 h-16 bg-black flex items-center justify-center sharp-edges mb-4 mx-auto"
        >
          <span className="text-white font-syne font-bold text-xl">AP</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="font-manrope text-gray-600 text-sm"
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
}

// Export animation variants for reuse in other components
export { pageVariants, pageTransition, containerVariants }; 