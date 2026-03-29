"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Animation variants for the container to stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Animation variants for each grid item
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10,
    },
  },
};

/**
 * Props for the BentoGridShowcase component.
 * Each prop represents a "slot" in the grid.
 */
interface BentoGridShowcaseProps {
  /** Slot for the tall card (e.g., Integration) */
  integration: React.ReactNode;
  /** Slot for the top-middle card (e.g., Trackers) */
  trackers: React.ReactNode;
  /** Slot for the top-right card (e.g., Statistic) */
  statistic: React.ReactNode;
  /** Slot for the middle-middle card (e.g., Focus) */
  focus: React.ReactNode;
  /** Slot for the middle-right card (e.g., Productivity) */
  productivity: React.ReactNode;
  /** Slot for the wide bottom card (e.g., Shortcuts) */
  shortcuts: React.ReactNode;
  /** Optional class names for the grid container */
  className?: string;
}

/**
 * A responsive, animated bento grid layout component.
 * It arranges six content slots in the specific layout
 * seen in the "Product Features" UI.
 */
export const BentoGridShowcase = ({
  integration,
  trackers,
  statistic,
  focus,
  productivity,
  shortcuts,
  className,
}: BentoGridShowcaseProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        // Core grid layout: 1 col on mobile, 3 on desktop
        "grid w-full grid-cols-1 gap-4 md:grid-cols-3",
        // Defines 3 explicit rows on medium screens and up
        "md:grid-rows-[180px_180px_120px]",
        className
      )}
    >
      {/* Slot 1: Integration (Left column, spans ALL 3 rows) */}
      <motion.div variants={itemVariants} className="md:col-start-1 md:row-start-1 md:row-span-3">
        {integration}
      </motion.div>

      {/* Slot 2: Trackers (Top middle) */}
      <motion.div variants={itemVariants} className="md:col-start-2 md:row-start-1">
        {trackers}
      </motion.div>

      {/* Slot 3: Statistic (Top right) */}
      <motion.div variants={itemVariants} className="md:col-start-3 md:row-start-1">
        {statistic}
      </motion.div>

      {/* Slot 4: Focus (Middle center) */}
      <motion.div variants={itemVariants} className="md:col-start-2 md:row-start-2">
        {focus}
      </motion.div>

      {/* Slot 5: Productivity (Middle right) */}
      <motion.div variants={itemVariants} className="md:col-start-3 md:row-start-2">
        {productivity}
      </motion.div>

      {/* Slot 6: Shortcuts (Bottom, spans cols 2-3 only) */}
      <motion.div variants={itemVariants} className="md:col-start-2 md:col-span-2 md:row-start-3">
        {shortcuts}
      </motion.div>
    </motion.section>
  );
};
