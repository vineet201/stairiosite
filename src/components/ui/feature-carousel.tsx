"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Building03Icon,
  Dumbbell01Icon,
  Message01Icon,
  AiCloud02Icon,
  SourceCodeIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

// Stairio Products & Services
const FEATURES = [
  {
    id: "yatrione",
    label: "YatriOne",
    icon: Building03Icon,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200",
    description: "All-in-one platform combining PMS, SmartSite, booking engine, and AI sales agents for modern hospitality businesses.",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    ctaText: "Explore",
    ctaLink: "#yatrione",
  },
  {
    id: "kore",
    label: "Kore",
    icon: Dumbbell01Icon,
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200",
    description: "Complete management system for gyms, studios, and fitness centers. Handle memberships, scheduling, and payments effortlessly.",
    gradient: "from-[#5DDF18] via-[#5DDF18]/80 to-[#FF9132]",
    ctaText: "Explore",
    ctaLink: "#kore",
  },
  {
    id: "conversa",
    label: "Conversa",
    icon: Message01Icon,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
    description: "Deploy intelligent AI agents that handle sales calls, support queries, and customer conversations around the clock.",
    gradient: "from-[#D8B4FE] via-[#D8B4FE]/80 to-[#FF9132]",
    ctaText: "Explore",
    ctaLink: "#conversa",
  },
  {
    id: "custom-ai",
    label: "Custom AI",
    icon: AiCloud02Icon,
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200",
    description: "Bespoke AI solutions tailored to your unique challenges—from automation pipelines to predictive analytics models.",
    gradient: "from-[#D8B4FE] via-[#FF9132] to-[#D8B4FE]",
    ctaText: "Get Quote",
    ctaLink: "/quote",
  },
  {
    id: "fullstack",
    label: "Full-Stack Dev",
    icon: SourceCodeIcon,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
    description: "Web apps, mobile platforms, APIs—scalable software engineered to grow with your business needs.",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    ctaText: "Get Quote",
    ctaLink: "/quote",
  },
];

const AUTO_PLAY_INTERVAL = 4000;
const ITEM_HEIGHT = 56;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function FeatureCarousel() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isMounted = React.useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const currentIndex =
    ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;

  const nextStep = useCallback(() => {
    if (!isMounted.current) return;
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + FEATURES.length) % FEATURES.length;
    if (diff > 0 && isMounted.current) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (isMounted.current) nextStep();
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = FEATURES.length;

    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
      <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl flex flex-col lg:flex-row min-h-[450px] lg:h-[500px] border border-white/[0.08] bg-[#0a0a0a]">
        {/* Left Panel - Dark theme, thinner */}
        <div className="w-full lg:w-[280px] xl:w-[320px] min-h-[280px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-6 md:px-8 py-8 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-neutral-900 to-transparent z-40" />
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-neutral-900 to-transparent z-40" />
          
          {/* Subtle gradient accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl" />
          
          <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20">
            {FEATURES.map((feature, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(
                -(FEATURES.length / 2),
                FEATURES.length / 2,
                distance
              );

              return (
                <motion.div
                  key={feature.id}
                  style={{
                    height: ITEM_HEIGHT,
                    width: "fit-content",
                  }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.3,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 22,
                    mass: 1,
                  }}
                  className="absolute flex items-center justify-start"
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "relative flex items-center gap-3 px-5 py-3 rounded-full transition-all duration-500 text-left group border",
                      isActive
                        ? "bg-white text-black border-white z-10 shadow-lg shadow-white/10"
                        : "bg-transparent text-neutral-400 border-white/10 hover:border-white/25 hover:text-white"
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center justify-center transition-colors duration-500",
                        isActive ? "text-black" : "text-neutral-500"
                      )}
                    >
                      <HugeiconsIcon
                        icon={feature.icon}
                        size={16}
                        strokeWidth={2}
                      />
                    </div>

                    <span className="font-medium text-xs tracking-wide whitespace-nowrap uppercase">
                      {feature.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Panel - Cards */}
        <div className="flex-1 min-h-[350px] lg:h-full relative bg-[#0c0c0c] flex items-center justify-center py-10 md:py-12 px-6 md:px-10 overflow-hidden">
          <div className="relative w-full max-w-[320px] aspect-[3/4] flex items-center justify-center">
            {FEATURES.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -80 : isNext ? 80 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.88 : 0.75,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.5 : 0,
                    rotate: isPrev ? -2 : isNext ? 2 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 28,
                    mass: 0.8,
                  }}
                  className="absolute inset-0 rounded-2xl overflow-hidden border border-white/[0.08] bg-[#111] origin-center"
                >
                  <img
                    src={feature.image}
                    alt={feature.label}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-700",
                      isActive
                        ? "grayscale-0 blur-0"
                        : "grayscale blur-[2px] brightness-75"
                    )}
                  />

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute inset-x-0 bottom-0 p-6 pt-24 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col justify-end"
                      >
                        <div className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider w-fit mb-2 border border-white/20">
                          {index + 1} • {feature.label}
                        </div>
                        <p className="text-white font-normal text-sm md:text-base leading-snug mb-4">
                          {feature.description}
                        </p>
                        
                        {/* CTA Button */}
                        <Link
                          href={feature.ctaLink}
                          className={cn(
                            "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg w-fit",
                            "bg-gradient-to-r text-white font-semibold text-sm",
                            "hover:opacity-90 active:scale-[0.98] transition-all duration-200",
                            feature.gradient
                          )}
                        >
                          {feature.ctaText}
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                          </svg>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;
