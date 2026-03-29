"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PixelDissolveTextProps {
  texts: string[];
  className?: string;
  interval?: number;
}

interface CharacterProps {
  char: string;
  index: number;
  isExiting: boolean;
  totalChars: number;
}

function Character({ char, index, isExiting, totalChars }: CharacterProps) {
  // Stagger from center outward for wave effect
  const centerIndex = totalChars / 2;
  const distanceFromCenter = Math.abs(index - centerIndex);
  const staggerDelay = distanceFromCenter * 0.04;
  
  // Random values for organic feel
  const randomY = -30 - Math.random() * 40;
  const randomX = (Math.random() - 0.5) * 30;
  const randomRotate = (Math.random() - 0.5) * 20;

  return (
    <motion.span
      className="inline-block"
      style={{
        whiteSpace: char === " " ? "pre" : "normal",
        minWidth: char === " " ? "0.25em" : undefined,
      }}
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={
        isExiting
          ? {
              opacity: 0,
              y: randomY,
              x: randomX,
              scale: 0.5,
              rotate: randomRotate,
              filter: "blur(12px)",
            }
          : {
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
              rotate: 0,
              filter: "blur(0px)",
            }
      }
      transition={
        isExiting
          ? {
              duration: 0.8,
              delay: staggerDelay,
              ease: [0.4, 0, 0.2, 1],
            }
          : {
              duration: 0.4,
              delay: index * 0.03,
              ease: "easeOut",
            }
      }
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

export function PixelDissolveText({
  texts,
  className = "",
  interval = 5000,
}: PixelDissolveTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [key, setKey] = useState(0);

  const currentText = texts[currentIndex];
  const chars = useMemo(() => currentText.split(""), [currentText]);

  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const cycleText = () => {
      if (!isMounted.current) return;
      setIsExiting(true);
      timeoutId = setTimeout(() => {
        if (!isMounted.current) return;
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsExiting(false);
        setKey((k) => k + 1);
      }, 1000);
    };

    const timer = setInterval(cycleText, interval);
    return () => {
      clearInterval(timer);
      clearTimeout(timeoutId);
    };
  }, [texts.length, interval]);

  return (
    <span className={`inline-flex flex-wrap justify-center ${className}`}>
      <span key={`${currentIndex}-${key}`} className="inline-flex flex-wrap justify-center">
        {chars.map((char, index) => (
          <Character
            key={`${key}-${index}`}
            char={char}
            index={index}
            isExiting={isExiting}
            totalChars={chars.length}
          />
        ))}
      </span>
    </span>
  );
}

export default PixelDissolveText;
