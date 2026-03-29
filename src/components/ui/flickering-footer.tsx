"use client";

import { cn } from "@/lib/utils";
import { ChevronRight, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type FooterLink = {
  id: number;
  title: string;
  url: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

const footerConfig = {
  description:
    "Stairio builds AI-native systems that automate operations, sharpen decision-making, and move ideas into production faster.",
  trustMarks: [
    {
      label: "AI Automation",
      icon: Sparkles,
    },
    {
      label: "Secure Delivery",
      icon: ShieldCheck,
    },
    {
      label: "Workflow Design",
      icon: Workflow,
    },
  ],
  columns: [
    {
      title: "Company",
      links: [
        { id: 1, title: "About Stairio", url: "#" },
        { id: 2, title: "Our Team", url: "/team" },
        { id: 3, title: "Capabilities", url: "#" },
        { id: 4, title: "Case Studies", url: "#" },
        { id: 5, title: "Contact", url: "#" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { id: 6, title: "AI Systems", url: "#" },
        { id: 7, title: "Automation", url: "#" },
        { id: 8, title: "Platform Engineering", url: "#" },
        { id: 9, title: "Advisory", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { id: 10, title: "Insights", url: "#" },
        { id: 11, title: "News", url: "#" },
        { id: 12, title: "Careers", url: "#" },
        { id: 13, title: "Support", url: "#" },
      ],
    },
  ] satisfies FooterColumn[],
};

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const update = () => setMatches(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, [query]);

  return matches;
}

type FlickeringGridProps = {
  className?: string;
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  maxOpacity?: number;
  color?: string;
  text?: string;
  fontSize?: number;
  fontWeight?: number;
};

function FlickeringGrid({
  className,
  squareSize = 3,
  gridGap = 3,
  flickerChance = 0.08,
  maxOpacity = 0.18,
  color = "99, 102, 241",
  text = "",
  fontSize = 88,
  fontWeight = 700,
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let frameId = 0;
    let isVisible = true;
    let resizeObserver: ResizeObserver | null = null;
    let intersectionObserver: IntersectionObserver | null = null;
    let isAnimating = false;

    let dpr = 1;
    let width = 0;
    let height = 0;
    let cssWidth = 0;
    let cssHeight = 0;
    let cols = 0;
    let rows = 0;
    let opacities = new Float32Array();
    let textMask: Uint8ClampedArray | null = null;
    let textLevels = new Uint8Array();

    const getCellTextLevel = (cellX: number, cellY: number) => {
      if (!textMask) {
        return 0;
      }

      let hits = 0;
      const endX = Math.min(cssWidth, cellX + squareSize);
      const endY = Math.min(cssHeight, cellY + squareSize);

      for (let scanY = cellY; scanY < endY; scanY += 1) {
        for (let scanX = cellX; scanX < endX; scanX += 1) {
          const alphaIndex = (scanY * cssWidth + scanX) * 4 + 3;
          if (textMask[alphaIndex] > 18) {
            hits += 1;
            if (hits >= Math.max(2, squareSize - 1)) {
              return 3;
            }
          }
        }
      }

      const glowInset = squareSize + gridGap + 2;
      const glowStartX = Math.max(0, cellX - glowInset);
      const glowStartY = Math.max(0, cellY - glowInset);
      const glowEndX = Math.min(cssWidth, cellX + squareSize + glowInset);
      const glowEndY = Math.min(cssHeight, cellY + squareSize + glowInset);

      for (let scanY = glowStartY; scanY < glowEndY; scanY += 1) {
        for (let scanX = glowStartX; scanX < glowEndX; scanX += 1) {
          const alphaIndex = (scanY * cssWidth + scanX) * 4 + 3;
          if (textMask[alphaIndex] > 18) {
            return 2;
          }
        }
      }

      const farGlowInset = glowInset * 2;
      const farGlowStartX = Math.max(0, cellX - farGlowInset);
      const farGlowStartY = Math.max(0, cellY - farGlowInset);
      const farGlowEndX = Math.min(cssWidth, cellX + squareSize + farGlowInset);
      const farGlowEndY = Math.min(cssHeight, cellY + squareSize + farGlowInset);

      for (let scanY = farGlowStartY; scanY < farGlowEndY; scanY += 2) {
        for (let scanX = farGlowStartX; scanX < farGlowEndX; scanX += 2) {
          const alphaIndex = (scanY * cssWidth + scanX) * 4 + 3;
          if (textMask[alphaIndex] > 18) {
            return 1;
          }
        }
      }

      return 0;
    };

    const createTextMask = () => {
      if (!text) {
        textMask = null;
        return;
      }

      const maskCanvas = document.createElement("canvas");
      maskCanvas.width = cssWidth;
      maskCanvas.height = cssHeight;
      const maskContext = maskCanvas.getContext("2d");

      if (!maskContext) {
        textMask = null;
        return;
      }

      // Split text by newlines for multi-line support
      const lines = text.split('\n');
      let resolvedFontSize = fontSize;
      const maxTextWidth = cssWidth * 0.92;

      maskContext.font = `${fontWeight} ${resolvedFontSize}px "Geist", Arial, Helvetica, sans-serif`;
      
      // Find the longest line to check for width
      const longestLine = lines.reduce((a, b) => 
        maskContext.measureText(a).width > maskContext.measureText(b).width ? a : b
      );
      
      while (
        resolvedFontSize > 12 &&
        maskContext.measureText(longestLine).width > maxTextWidth
      ) {
        resolvedFontSize -= 2;
        maskContext.font = `${fontWeight} ${resolvedFontSize}px "Geist", Arial, Helvetica, sans-serif`;
      }

      maskContext.clearRect(0, 0, cssWidth, cssHeight);
      maskContext.fillStyle = "#ffffff";
      maskContext.textAlign = "center";
      maskContext.textBaseline = "bottom";
      maskContext.font = `${fontWeight} ${resolvedFontSize}px "Geist", Arial, Helvetica, sans-serif`;
      
      // Draw each line with proper spacing
      const lineHeight = resolvedFontSize * (cssWidth < 600 ? 1.3 : 1.2);
      const totalHeight = lineHeight * lines.length;
      const startY = cssHeight * 0.85 - totalHeight + lineHeight;
      
      lines.forEach((line, index) => {
        const y = startY + (index * lineHeight);
        maskContext.fillText(line, cssWidth / 2, y);
      });

      textMask = maskContext.getImageData(0, 0, cssWidth, cssHeight).data;
    };

    const setupCanvas = () => {
      const bounds = container.getBoundingClientRect();
      dpr = window.devicePixelRatio || 1;
      cssWidth = Math.max(1, Math.floor(bounds.width));
      cssHeight = Math.max(1, Math.floor(bounds.height));
      width = Math.max(1, Math.floor(cssWidth * dpr));
      height = Math.max(1, Math.floor(cssHeight * dpr));

      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${cssWidth}px`;
      canvas.style.height = `${cssHeight}px`;

      cols = Math.ceil(cssWidth / (squareSize + gridGap));
      rows = Math.ceil(cssHeight / (squareSize + gridGap));

      opacities = new Float32Array(cols * rows);
      textLevels = new Uint8Array(cols * rows);
      for (let index = 0; index < opacities.length; index += 1) {
        opacities[index] = Math.random();
      }

      createTextMask();

      for (let col = 0; col < cols; col += 1) {
        for (let row = 0; row < rows; row += 1) {
          const index = col * rows + row;
          const x = Math.floor(col * (squareSize + gridGap));
          const y = Math.floor(row * (squareSize + gridGap));
          textLevels[index] = getCellTextLevel(x, y);
        }
      }
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (let col = 0; col < cols; col += 1) {
        for (let row = 0; row < rows; row += 1) {
          const index = col * rows + row;

          if (Math.random() < flickerChance) {
            opacities[index] = Math.random();
          }

          const x = Math.floor(col * (squareSize + gridGap));
          const y = Math.floor(row * (squareSize + gridGap));
          const widthPx = Math.max(1, Math.floor(squareSize * dpr));
          const heightPx = Math.max(1, Math.floor(squareSize * dpr));
          
          // Calculate distance from bottom (normalized 0-1, where 1 is bottom)
          const distanceFromBottom = 1 - (y / cssHeight);
          
          // Create wave emergence effect from bottom
          // Pixels closer to bottom are more likely to appear and have higher opacity
          const emergenceThreshold = 0.15; // Bottom 15% has the wave effect
          const waveIntensity = distanceFromBottom < emergenceThreshold 
            ? Math.pow(distanceFromBottom / emergenceThreshold, 0.5) 
            : 1;
          
          // Add some horizontal wave variation for more organic look
          const wavePhase = Math.sin(col * 0.3 + Date.now() * 0.0005) * 0.15;
          const adjustedWaveIntensity = Math.max(0, waveIntensity + wavePhase);
          
          // Check if this square has text based on pre-computed mask
          const hasText = textMask && checkTextAtPosition(x, y, squareSize);

          const noise = opacities[index];
          
          // Skip rendering some pixels in the wave zone for emergence effect
          const shouldRender = distanceFromBottom < emergenceThreshold
            ? Math.random() < adjustedWaveIntensity * 0.9
            : true;
            
          if (!shouldRender) continue;
          
          // Calculate final opacity
          let finalOpacity: number;
          
          if (hasText) {
            // Text is bright and clear - boost for smaller screens
            const textBoost = cssWidth < 600 ? 0.25 : 0;
            finalOpacity = Math.min(1, noise * 1.0 + 0.75 + textBoost);
          } else if (distanceFromBottom < emergenceThreshold) {
            // Wave zone - more visible, emerging pixels
            const waveOpacity = adjustedWaveIntensity * maxOpacity * 3;
            finalOpacity = noise * waveOpacity + (waveOpacity * 0.3);
          } else {
            // Normal background
            finalOpacity = noise * maxOpacity;
          }

          context.fillStyle = `rgba(${color}, ${finalOpacity})`;
          context.fillRect(Math.floor(x * dpr), Math.floor(y * dpr), widthPx, heightPx);
        }
      }

      if (isVisible) {
        frameId = window.requestAnimationFrame(draw);
      } else {
        isAnimating = false;
      }
    };

    const checkTextAtPosition = (x: number, y: number, size: number): boolean => {
      if (!textMask) return false;
      
      // Sample multiple points in the square to detect text
      let textPixels = 0;
      const samplePoints = Math.max(2, size);
      
      for (let sy = 0; sy < samplePoints; sy++) {
        for (let sx = 0; sx < samplePoints; sx++) {
          const sampleX = Math.min(cssWidth - 1, Math.floor(x + (sx / samplePoints) * size));
          const sampleY = Math.min(cssHeight - 1, Math.floor(y + (sy / samplePoints) * size));
          const idx = (sampleY * cssWidth + sampleX) * 4;
          
          if (textMask[idx] > 128) { // Check red channel
            textPixels++;
          }
        }
      }
      
      // If more than 25% of samples hit text, consider this square as text
      return textPixels > (samplePoints * samplePoints * 0.25);
    };

    const startAnimation = () => {
      if (isAnimating) {
        return;
      }

      isAnimating = true;
      frameId = window.requestAnimationFrame(draw);
    };

    const stopAnimation = () => {
      isAnimating = false;
      window.cancelAnimationFrame(frameId);
    };

    setupCanvas();
    startAnimation();

    resizeObserver = new ResizeObserver(() => {
      setupCanvas();
    });
    resizeObserver.observe(container);

    intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        startAnimation();
      } else {
        stopAnimation();
      }
    });
    intersectionObserver.observe(container);

    return () => {
      stopAnimation();
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
    };
  }, [color, flickerChance, fontSize, fontWeight, gridGap, maxOpacity, squareSize, text]);

  return (
    <div ref={containerRef} className={cn("h-full w-full", className)}>
      <canvas ref={canvasRef} className="pointer-events-none h-full w-full" />
    </div>
  );
}

function BrandMark() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#D8B4FE]/30 bg-[#D8B4FE]/10 shadow-[0_0_30px_rgba(216,180,254,0.18)]">
      <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none">
        {/* Stylized "S" logo mark */}
        <path 
          d="M22 9C22 9 19 6 14 7.5C9 9 7.5 13.5 10.5 16.5C13.5 19.5 19.5 18 19.5 21C19.5 24 15 25.5 10 24" 
          stroke="url(#stairio-footer-gradient)" 
          strokeWidth="2.5" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Small accent dot */}
        <circle cx="24" cy="8" r="2" fill="#5DDF18" />
        <defs>
          <linearGradient id="stairio-footer-gradient" x1="8" y1="8" x2="24" y2="24">
            <stop offset="0%" stopColor="#D8B4FE" />
            <stop offset="100%" stopColor="#FF9132" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function FlickeringFooter() {
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const footerWordmark = isTablet ? "Stairio\nTechnologies" : "Stairio Technologies";

  return (
    <footer
      id="footer"
      className="relative mt-16 overflow-hidden border-t border-white/10 bg-black text-white"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D8B4FE]/70 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-14 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-10">
        <div className="space-y-6">
          <Link href="/" className="inline-flex items-center gap-3">
            <BrandMark />
            <div>
              <p className="text-xl font-semibold tracking-tight">Stairio</p>
              <p className="text-sm text-white/45">AI-native systems</p>
            </div>
          </Link>

          <p className="max-w-xl text-base leading-7 text-white/65 md:text-lg">
            {footerConfig.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {footerConfig.trustMarks.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-sm"
                >
                  <Icon className="h-4 w-4 text-[#D8B4FE]" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerConfig.columns.map((column) => (
            <div key={column.title}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white/40">
                {column.title}
              </p>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.url}
                      className="group inline-flex items-center gap-2 text-[15px] text-white/62 transition-colors duration-200 hover:text-white"
                    >
                      <span>{link.title}</span>
                      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/5 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
                        <ChevronRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-64 md:h-80">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-transparent" />
        <div className="absolute inset-x-6 top-6 h-[70%] md:inset-x-10 md:top-8">
          <FlickeringGrid
            text={footerWordmark}
            fontSize={isTablet ? 58 : 96}
            fontWeight={800}
            squareSize={isTablet ? 2 : 3}
            gridGap={isTablet ? 2 : 3}
            color={isTablet ? "220, 225, 235" : "190, 195, 210"}
            maxOpacity={isTablet ? 0.03 : 0.06}
            flickerChance={isTablet ? 0.06 : 0.12}
            className="opacity-100"
          />
        </div>

        <div className="absolute inset-x-6 bottom-6 flex flex-col gap-2 text-sm text-white/45 md:inset-x-10 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Stairio. Built for faster AI execution.</p>
          <p>Automation, platform engineering, and decision systems.</p>
        </div>
      </div>
    </footer>
  );
}
