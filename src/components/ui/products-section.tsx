"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import {
  Building03Icon,
  Dumbbell01Icon,
  Message01Icon,
  SourceCodeIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  gradient: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  icon: unknown;
  badge?: string;
}

const products: Product[] = [
  {
    id: "hotelos",
    name: "Hotelify",
    tagline: "AI Hospitality Operating System",
    description:
      "All-in-one platform for hotels combining PMS, SmartSite, and booking engine. Eliminate multiple tools and run your entire hospitality business from a single AI-powered dashboard.",
    features: ["Property Management", "SmartSite", "Booking Engine", "AI Sales Agents"],
    gradient: "from-amber-500 via-orange-500 to-red-500",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&q=80",
    ctaText: "Explore Hotelify",
    ctaLink: "/hotelify",
    icon: Building03Icon,
    badge: "Most Popular",
  },
  {
    id: "ai-voice-calling-agent",
    name: "AI Voice Calling Agent CRM",
    tagline: "Automated Voice Outreach System",
    description:
      "An AI calling agent that handles outbound calls, follow-ups, appointment scheduling, and lead qualification at scale.",
    features: ["Voice Outreach", "Lead Qualification", "Follow-ups", "Scheduling"],
    gradient: "from-[#D8B4FE] via-[#FF9132] to-[#D8B4FE]",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&h=600&fit=crop&q=80",
    ctaText: "Discuss Voice Agent",
    ctaLink: "/quote",
    icon: Message01Icon,
    badge: "AI Agent",
  },
  {
    id: "smart-website",
    name: "SmartSite",
    tagline: "AI-Powered Website Experience",
    description:
      "A modern website solution built to increase trust, improve discoverability, and convert more visitors into leads.",
    features: ["Responsive Design", "SEO Ready", "Fast Loading", "Lead Capture"],
    gradient: "from-sky-400 via-cyan-400 to-blue-500",
    image: "/images/buildershowcase/DentistShowcase.png?v=3",
    ctaText: "Explore SmartSite",
    ctaLink: "/website-builder",
    icon: SourceCodeIcon,
  },
  {
    id: "kore",
    name: "Kore",
    tagline: "Your Gym Manager",
    description:
      "A gym and fitness management platform for memberships, scheduling, payments, and day-to-day business operations.",
    features: ["Member Management", "Class Scheduling", "Payment Processing", "Progress Tracking"],
    gradient: "from-[#5DDF18] via-[#5DDF18]/80 to-[#FF9132]",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
    ctaText: "Discuss Kore",
    ctaLink: "/quote",
    icon: Dumbbell01Icon,
    badge: "Roadmap",
  },
  {
    id: "salespro",
    name: "SalesPro",
    tagline: "AI Powered Sales Management Software",
    description:
      "A smart sales management platform built to organise pipelines, automate follow-ups, and improve sales visibility across teams.",
    features: ["Sales Pipeline", "Lead Tracking", "Automation", "Revenue Visibility"],
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=600&fit=crop&q=80",
    ctaText: "Discuss SalesPro",
    ctaLink: "/quote",
    icon: SourceCodeIcon,
    badge: "Roadmap",
  },
];

// Product card - larger design matching original
function ProductCard({ product }: { product: Product }) {
  const IconComponent = product.icon as Parameters<typeof HugeiconsIcon>[0]['icon'];
  
  return (
    <div className="flex-shrink-0 w-[340px] sm:w-[360px] lg:w-[380px] group">
      <div className="relative h-full rounded-xl overflow-hidden bg-gradient-to-b from-neutral-900/80 to-neutral-950 border border-white/[0.08] hover:border-white/[0.15] transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/5">
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 right-4 z-20">
            <span className={`px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-gradient-to-r ${product.gradient} text-white shadow-lg`}>
              {product.badge}
            </span>
          </div>
        )}
        
        {/* Image with gradient overlay */}
        <div className="relative h-40 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
          
          {/* Icon overlay */}
          <div className={`absolute bottom-4 left-5 w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg`}>
            <HugeiconsIcon icon={IconComponent} size={22} className="text-white" strokeWidth={2} />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative p-5 pt-3">
          {/* Title & Tagline */}
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all duration-300">
            {product.name}
          </h3>
          <p className={`text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r ${product.gradient} mb-3`}>
            {product.tagline}
          </p>

          {/* Description - 2 lines */}
          <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-2">
            {product.description}
          </p>
          
          {/* Features - 2 column grid */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-neutral-500">
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient}`} />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href={product.ctaLink}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-white font-medium text-sm hover:bg-white/[0.10] hover:border-white/[0.18] transition-all duration-300 group/btn"
          >
            <span>{product.ctaText}</span>
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ProductsSection() {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  // Auto-play for left panel
  const nextStep = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, 4000);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const handleChipClick = (index: number) => {
    const product = products[index];
    if (product.ctaLink.startsWith("/")) {
      router.push(product.ctaLink);
      return;
    }

    setCurrentIndex(index);
    // Scroll to the corresponding card
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      const cardWidth = 404; // card width (380px) + gap (24px)
      const scrollPosition = index * cardWidth;
      scrollElement.scrollTo({ left: scrollPosition, behavior: "smooth" });
    }
  };

  const handleScrollNext = () => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    scrollElement.scrollBy({ left: 404, behavior: "smooth" });
  };

  // Track scroll progress
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollElement;
      const maxScroll = Math.max(scrollWidth - clientWidth, 1);
      const progress = scrollLeft / maxScroll;
      setScrollProgress(Math.min(progress, 1));
      setCanScrollNext(scrollLeft < maxScroll - 8);
      setCurrentIndex(
        Math.min(
          Math.round(scrollLeft / 404),
          products.length - 1,
        ),
      );
    };

    handleScroll();
    scrollElement.addEventListener("scroll", handleScroll);
    return () => scrollElement.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="products-section" ref={sectionRef} className="relative scroll-mt-20 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background gradient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-[#D8B4FE]/50 to-transparent" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#D8B4FE]/[0.02] rounded-full blur-[150px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF9132]/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#5DDF18] animate-pulse" />
              <span className="text-xs font-medium text-neutral-400 tracking-wide uppercase">Our Products & Services</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-white">What We </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D8B4FE] via-[#FF9132] to-[#D8B4FE]">Build</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-400 text-base sm:text-lg max-w-xl mx-auto"
          >
            AI-native products and service systems for Indian businesses
          </motion.p>
        </div>

        {/* Main Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl flex flex-col lg:flex-row min-h-[580px] lg:h-[560px] border border-white/[0.08] bg-[#0a0a0a]">
            
            {/* Left Panel - Animated vertical buttons */}
            <div className="w-full lg:w-[280px] xl:w-[300px] min-h-[380px] lg:h-full relative z-30 flex flex-col items-start justify-start overflow-hidden px-6 md:px-8 py-8 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
              
              {/* Subtle gradient accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl" />
              
              {/* Title and description */}
              <div className="relative z-50 mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">Our Solutions</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Productized platforms and AI systems built around hospitality, lead conversion, sales, and daily operations.
                </p>
              </div>
              
              {/* Static list of buttons */}
              <div className="relative w-full flex flex-col gap-3 z-20">
                {products.map((product, index) => {
                  const isActive = index === currentIndex;

                  return (
                    <motion.button
                      key={product.id}
                      onClick={() => handleChipClick(index)}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      animate={{
                        scale: isActive ? 1 : 0.98,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      className={cn(
                        "relative flex items-center gap-3 px-5 py-3 rounded-full transition-all duration-300 text-left border w-fit",
                        isActive
                          ? "bg-white text-black border-white shadow-lg shadow-white/10"
                          : "bg-transparent text-neutral-400 border-white/10 hover:border-white/25 hover:text-white"
                      )}
                    >
                      <div
                        className={cn(
                          "flex items-center justify-center transition-colors duration-300",
                          isActive ? "text-black" : "text-neutral-500"
                        )}
                      >
                        <HugeiconsIcon
                          icon={product.icon as Parameters<typeof HugeiconsIcon>[0]['icon']}
                          size={18}
                          strokeWidth={2}
                        />
                      </div>

                      <span className="font-medium text-sm tracking-wide whitespace-nowrap uppercase">
                        {product.name}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Right Panel - Scrollable cards */}
            <div className="flex-1 flex flex-col bg-[#0c0c0c] min-h-0 overflow-hidden">
              {/* Scrollable area wrapper */}
              <div className="flex-1 relative min-h-0 overflow-hidden">
                {/* Right blur/fade overlay */}
                <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-28 lg:w-36 bg-gradient-to-l from-[#0c0c0c] via-[#0c0c0c]/80 to-transparent z-10 pointer-events-none" />

                <button
                  type="button"
                  onClick={handleScrollNext}
                  disabled={!canScrollNext}
                  aria-label="Next solutions"
                  className={cn(
                    "absolute right-3 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border-0 bg-transparent p-0 text-white transition-opacity duration-300",
                    canScrollNext ? "opacity-100" : "pointer-events-none opacity-0",
                  )}
                >
                  <span className="absolute inset-0 rounded-full border border-white/16 bg-white/8 shadow-[0_10px_24px_rgba(0,0,0,0.2)] backdrop-blur-md" />
                  <span className="absolute inset-[1px] rounded-full bg-white/[0.04]" />
                  <span className="relative z-10 flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]" />
                  </span>
                </button>

                {/* Scrollable area */}
                <div
                  ref={scrollRef}
                  className="products-scroll flex gap-6 p-6 lg:p-8 h-full overflow-x-auto overflow-y-hidden items-start"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  {products.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className="flex-shrink-0"
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}

                  {/* End spacer for blur area */}
                  <div className="flex-shrink-0 w-20 lg:w-32" />
                </div>
              </div>

              {/* Bottom scroll indicator */}
              <div className="flex-shrink-0 px-6 py-4 bg-[#0c0c0c] border-t border-white/[0.04]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-neutral-500 text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                    <span>Scroll to explore</span>
                  </div>
                </div>
                <div className="w-full h-1 bg-white/[0.08] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-white rounded-full"
                    style={{ width: `${Math.max(20, scrollProgress * 100)}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-neutral-600 uppercase tracking-wider mt-2">
                  <span>Products</span>
                  <span>Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10 sm:mt-14 px-4"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-5 p-3 sm:p-2 sm:pl-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <span className="text-neutral-400 text-sm">Have a custom project?</span>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors"
            >
              Let&apos;s Talk
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
