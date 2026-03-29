"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
  company?: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D8B4FE]/[0.03] rounded-full blur-[150px]" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#FF9132]/[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#5DDF18]/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] mb-6">
              <Quote className="w-3.5 h-3.5 text-[#D8B4FE]" />
              <span className="text-xs font-medium text-neutral-400 tracking-wide uppercase">Client Stories</span>
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            <span className="text-white">Breakthroughs </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D8B4FE] via-[#FF9132] to-[#D8B4FE]">Made Possible</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Hear from the leaders who transformed their businesses with Stairio
          </motion.p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-5xl mx-auto">
          {/* Large Quote Icon */}
          <div className="absolute -top-8 left-8 sm:left-12 z-20">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#D8B4FE] to-[#FF9132] flex items-center justify-center shadow-xl shadow-[#D8B4FE]/20">
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="white" />
            </div>
          </div>

          {/* Card */}
          <div className="relative rounded-3xl bg-gradient-to-b from-neutral-900/90 to-neutral-950 border border-white/[0.08] overflow-hidden">
            {/* Top gradient line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D8B4FE]/50 to-transparent" />
            
            {/* Glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-[#D8B4FE]/10 blur-3xl" />

            <div className="relative p-8 sm:p-12 lg:p-16 pt-14 sm:pt-16">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
                >
                  {/* Quote Content */}
                  <div className="flex-1 order-2 lg:order-1">
                    <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-relaxed mb-8">
                      &ldquo;{testimonials[activeIndex].quote}&rdquo;
                    </blockquote>
                    
                    <div className="flex items-center gap-4">
                      {/* Mobile avatar */}
                      <div className="lg:hidden relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#D8B4FE]/30">
                        <Image
                          src={testimonials[activeIndex].src}
                          alt={testimonials[activeIndex].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-white">
                          {testimonials[activeIndex].name}
                        </h4>
                        <p className="text-neutral-400">
                          {testimonials[activeIndex].designation}
                        </p>
                      </div>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex gap-1 mt-6">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-[#FF9132]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Desktop Image */}
                  <div className="hidden lg:block order-1 lg:order-2 flex-shrink-0">
                    <div className="relative">
                      {/* Glow behind image */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#D8B4FE]/30 to-[#FF9132]/30 rounded-2xl blur-2xl scale-110" />
                      
                      <div className="relative w-48 h-48 xl:w-56 xl:h-56 rounded-2xl overflow-hidden border-2 border-white/10">
                        <Image
                          src={testimonials[activeIndex].src}
                          alt={testimonials[activeIndex].name}
                          fill
                          className="object-cover"
                        />
                        
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10 pt-8 border-t border-white/[0.06]">
                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > activeIndex ? 1 : -1);
                        setActiveIndex(index);
                      }}
                      className={`transition-all duration-300 rounded-full ${
                        index === activeIndex
                          ? "w-8 h-2 bg-gradient-to-r from-[#D8B4FE] to-[#FF9132]"
                          : "w-2 h-2 bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.08] hover:border-[#D8B4FE]/30 transition-all duration-300"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.08] hover:border-[#D8B4FE]/30 transition-all duration-300"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Company Logos / Trust Indicators */}
          <div className="mt-12 sm:mt-16">
            <p className="text-center text-xs text-neutral-500 uppercase tracking-wider mb-6">
              Trusted by innovative companies worldwide
            </p>
            
            {/* Infinite Marquee */}
            <div className="relative overflow-hidden">
              {/* Left fade */}
              <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
              {/* Right fade */}
              <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
              
              <div className="flex animate-marquee">
                {/* First set */}
                <div className="flex items-center gap-12 sm:gap-16 px-8 shrink-0">
                  <div className="flex items-center gap-3 opacity-50 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white/60 font-bold text-sm">A</div>
                    <span className="text-sm text-neutral-300 font-medium whitespace-nowrap">Apex Systems</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-50 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white/60 font-bold text-sm">N</div>
                    <span className="text-sm text-neutral-300 font-medium whitespace-nowrap">NovaTech</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-50 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white/60 font-bold text-sm">S</div>
                    <span className="text-sm text-neutral-300 font-medium whitespace-nowrap">Synth AI</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-50 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white/60 font-bold text-sm">V</div>
                    <span className="text-sm text-neutral-300 font-medium whitespace-nowrap">Velocity Labs</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-50 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white/60 font-bold text-sm">Q</div>
                    <span className="text-sm text-neutral-300 font-medium whitespace-nowrap">Quantum Works</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-50 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white/60 font-bold text-sm">F</div>
                    <span className="text-sm text-neutral-300 font-medium whitespace-nowrap">FutureCorp</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-50 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white/60 font-bold text-sm">Z</div>
                    <span className="text-sm text-neutral-300 font-medium whitespace-nowrap">Zenith Digital</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-50 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white/60 font-bold text-sm">P</div>
                    <span className="text-sm text-neutral-300 font-medium whitespace-nowrap">Pulse Tech</span>
                  </div>
                </div>
                
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-12 sm:gap-16 px-8 shrink-0">
                  <div className="flex items-center gap-3 opacity-50 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white/60 font-bold text-sm">A</div>
                    <span className="text-sm text-neutral-300 font-medium whitespace-nowrap">Apex Systems</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-50 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white/60 font-bold text-sm">N</div>
                    <span className="text-sm text-neutral-300 font-medium whitespace-nowrap">NovaTech</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-50 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white/60 font-bold text-sm">S</div>
                    <span className="text-sm text-neutral-300 font-medium whitespace-nowrap">Synth AI</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-50 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white/60 font-bold text-sm">V</div>
                    <span className="text-sm text-neutral-300 font-medium whitespace-nowrap">Velocity Labs</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-50 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white/60 font-bold text-sm">Q</div>
                    <span className="text-sm text-neutral-300 font-medium whitespace-nowrap">Quantum Works</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-50 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white/60 font-bold text-sm">F</div>
                    <span className="text-sm text-neutral-300 font-medium whitespace-nowrap">FutureCorp</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-50 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white/60 font-bold text-sm">Z</div>
                    <span className="text-sm text-neutral-300 font-medium whitespace-nowrap">Zenith Digital</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-50 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white/60 font-bold text-sm">P</div>
                    <span className="text-sm text-neutral-300 font-medium whitespace-nowrap">Pulse Tech</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
