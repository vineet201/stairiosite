"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";
import { HeroSection } from "@/components/ui/hero-3";
import { BentoGridShowcase } from "@/components/ui/bento-product-features";
import { Features } from "@/components/blocks/features-4";
import { BentoShowcase } from "@/components/blocks/bento-showcase";
import { HotelifyAdvancedFeatures } from "@/components/blocks/hotelify-advanced-features";
import { StaggerTestimonials } from "@/components/blocks/stagger-testimonials";
import { ComparisonSection } from "@/components/blocks/comparison-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Building2, CreditCard, Smartphone, LayoutDashboard, RefreshCw, Bot,
  TrendingUp, Users, Database, Clock, CheckCircle, XCircle,
  Play, ChevronDown, Zap, Star, ArrowRight, Hotel, Settings2, Command, Plus,
  Layers, Monitor,
} from "lucide-react";
import { PricingModule } from "@/components/ui/pricing-module";

// ── Helpers ──────────────────────────────────────────────────────────────────

function FloatingOrb({ color, size, top, left, delay = 0 }: { color: string; size: number; top: string; left: string; delay?: number }) {
  return (
    <motion.div
      animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1], y: [-20, 20, -20], x: [-10, 10, -10] }}
      transition={{ duration: 8 + delay * 2, repeat: Infinity, delay, ease: "easeInOut" }}
      className="absolute rounded-full pointer-events-none"
      style={{ width: size, height: size, top, left, background: `radial-gradient(circle, ${color}40, transparent 70%)`, filter: "blur(40px)" }}
    />
  );
}

function GlowCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#D8B4FE]/0 via-[#D8B4FE]/50 to-[#FF9132]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#D8B4FE]/0 via-[#D8B4FE]/30 to-[#FF9132]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {children}
    </div>
  );
}

function SectionBadge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D8B4FE]/10 to-[#FF9132]/10 border border-[#D8B4FE]/20 mb-8 backdrop-blur-sm">
      <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-[#5DDF18] shadow-[0_0_10px_#5DDF18]" />
      <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#D8B4FE] to-[#FF9132] tracking-wide uppercase">{text}</span>
    </div>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300"
      >
        <div className="flex items-center justify-between gap-4">
          <span className="text-white font-medium">{question}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0"
          >
            <ChevronDown className="w-5 h-5 text-neutral-400" />
          </motion.div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="pt-4 text-neutral-400 text-sm leading-relaxed border-t border-white/[0.06] mt-4">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
}

function MarkerUnderline({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      {children}
      <svg
        className="absolute left-0 w-full"
        style={{ bottom: "-4px", height: "8px" }}
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,5.5 C8,3.5 16,6.5 25,5 C34,3.5 42,6 52,4.5 C62,3 70,6 80,4.5 C88,3 94,5.5 100,4.5"
          stroke="rgba(255,255,255,0.88)"
          strokeWidth="2.8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function PainPoint({ icon: Icon, title, body, color, inView, delay }: {
  icon: React.ElementType; title: string; body: string; color: string; inView: boolean; delay: number;
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }} className="relative group">
      <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${color}50, transparent)` }} />
      <div className="relative p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 backdrop-blur-sm h-full">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: `${color}20` }}>
          <Icon className="w-7 h-7" style={{ color }} />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-neutral-400 leading-relaxed text-sm whitespace-pre-line">{body}</p>
      </div>
    </motion.div>
  );
}

// ── Savings Calculator Modal ─────────────────────────────────────────────────

function SavingsCalculatorModal({ onClose }: { onClose: () => void }) {
  const [otaBookings, setOtaBookings] = useState(30);
  const [avgStayDays, setAvgStayDays] = useState(2);
  const [rate, setRate] = useState(3000);
  const [commission, setCommission] = useState(20);

  // Calculate: bookings × days × rate × commission % × 12 months
  const yearlySaving = Math.round((otaBookings * avgStayDays * rate * (commission / 100) * 12));
  const formattedSaving = yearlySaving >= 100000
    ? `₹${(yearlySaving / 100000).toFixed(1)}L`
    : `₹${(yearlySaving / 1000).toFixed(0)}K`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl rounded-2xl bg-[#0d0d0d] border border-white/[0.08] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* top glow */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D8B4FE]/60 to-transparent" />

        <div className="relative p-6">
          {/* Header row */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-[10px] text-[#D8B4FE] font-medium uppercase tracking-widest mb-0.5">Savings Calculator</p>
              <h2 className="text-xl font-bold text-white">See How Much You Can Save</h2>
            </div>
            <button
              onClick={onClose}
              className="w-7 h-7 flex items-center justify-center rounded-full bg-white/[0.06] hover:bg-white/[0.12] transition-colors text-neutral-400 hover:text-white text-sm"
            >
              ✕
            </button>
          </div>

          {/* Main content - horizontal layout */}
          <div className="flex flex-col gap-4 items-stretch md:flex-row md:gap-6">
            {/* Left: 2x2 grid of inputs */}
            <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
              {/* Monthly OTA bookings */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs text-neutral-400">Monthly bookings</label>
                  <span className="text-xs font-bold text-white bg-white/[0.1] px-2 py-0.5 rounded">{otaBookings}</span>
                </div>
                <input
                  type="range"
                  min={1} max={200} step={1}
                  value={otaBookings}
                  onChange={(e) => setOtaBookings(Number(e.target.value))}
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #D8B4FE ${((otaBookings - 1) / (200 - 1)) * 100}%, rgba(255,255,255,0.08) 0%)`,
                  }}
                />
              </div>

              {/* Average stay duration */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs text-neutral-400">Avg. stay</label>
                  <span className="text-xs font-bold text-white bg-white/[0.1] px-2 py-0.5 rounded">{avgStayDays} nights</span>
                </div>
                <input
                  type="range"
                  min={1} max={7} step={1}
                  value={avgStayDays}
                  onChange={(e) => setAvgStayDays(Number(e.target.value))}
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #FF9132 ${((avgStayDays - 1) / (7 - 1)) * 100}%, rgba(255,255,255,0.08) 0%)`,
                  }}
                />
              </div>

              {/* Average room rate */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs text-neutral-400">Room rate/night</label>
                  <span className="text-xs font-bold text-white bg-white/[0.1] px-2 py-0.5 rounded">₹{rate.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={500} max={15000} step={250}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #5DDF18 ${((rate - 500) / (15000 - 500)) * 100}%, rgba(255,255,255,0.08) 0%)`,
                  }}
                />
              </div>

              {/* OTA commission */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs text-neutral-400">OTA commission</label>
                  <span className="text-xs font-bold text-[#FF6B6B] bg-[#FF6B6B]/10 px-2 py-0.5 rounded">{commission}%</span>
                </div>
                <input
                  type="range"
                  min={10} max={45} step={1}
                  value={commission}
                  onChange={(e) => setCommission(Number(e.target.value))}
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #FF6B6B ${((commission - 10) / (45 - 10)) * 100}%, rgba(255,255,255,0.08) 0%)`,
                  }}
                />
              </div>
            </div>

            {/* Right: Results */}
            <div className="flex w-full flex-col md:w-72">
              {/* Main result */}
              <div className="flex-1 p-5 rounded-xl bg-gradient-to-br from-[#5DDF18]/10 via-transparent to-[#D8B4FE]/10 border border-[#5DDF18]/20 flex flex-col items-center justify-center text-center">
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Yearly savings</p>
                <motion.p
                  key={yearlySaving}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#5DDF18] to-[#D8B4FE]"
                >
                  {formattedSaving}
                </motion.p>
                <p className="mt-1 text-[11px] text-neutral-500">with direct bookings</p>
              </div>

              {/* CTA */}
              <button className="mt-3 w-full py-3 rounded-xl bg-gradient-to-r from-[#5DDF18] to-[#5DDF18]/80 text-black text-sm font-semibold transition-all duration-300 hover:scale-[1.02]">
                Start Saving — Free
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Inline Savings Calculator ────────────────────────────────────────────────

function SavingsCalculatorInline() {
  const [otaBookings, setOtaBookings] = useState(30);
  const [avgStayDays, setAvgStayDays] = useState(2);
  const [rate, setRate] = useState(3000);
  const [commission, setCommission] = useState(20);

  const yearlySaving = Math.round((otaBookings * avgStayDays * rate * (commission / 100) * 12));
  const monthlySaving = Math.round(yearlySaving / 12);
  const formattedSaving = yearlySaving >= 100000
    ? `₹${(yearlySaving / 100000).toFixed(1)}L`
    : `₹${(yearlySaving / 1000).toFixed(0)}K`;

  return (
    <div className="rounded-2xl bg-[#0A0A0A] border border-white/[0.08] overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left: Inputs */}
        <div className="flex-1 p-4 sm:p-5">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {/* Monthly Bookings */}
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-neutral-400">Monthly Bookings</span>
                <span className="text-sm font-semibold text-white">{otaBookings}</span>
              </div>
              <input
                type="range"
                min={5} max={200} step={5}
                value={otaBookings}
                onChange={(e) => setOtaBookings(Number(e.target.value))}
                className="w-full h-1 rounded-full appearance-none cursor-pointer bg-white/[0.06]"
                style={{
                  background: `linear-gradient(to right, #D8B4FE ${((otaBookings - 5) / 195) * 100}%, rgba(255,255,255,0.06) 0%)`,
                }}
              />
            </div>

            {/* Average Stay */}
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-neutral-400">Avg. Stay (nights)</span>
                <span className="text-sm font-semibold text-white">{avgStayDays}</span>
              </div>
              <input
                type="range"
                min={1} max={7} step={1}
                value={avgStayDays}
                onChange={(e) => setAvgStayDays(Number(e.target.value))}
                className="w-full h-1 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #FF9132 ${((avgStayDays - 1) / 6) * 100}%, rgba(255,255,255,0.06) 0%)`,
                }}
              />
            </div>

            {/* Room Rate */}
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-neutral-400">Room Rate</span>
                <span className="text-sm font-semibold text-white">₹{rate.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={500} max={15000} step={250}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-1 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #5DDF18 ${((rate - 500) / 14500) * 100}%, rgba(255,255,255,0.06) 0%)`,
                }}
              />
            </div>

            {/* OTA Commission */}
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-neutral-400">OTA Commission</span>
                <span className="text-sm font-semibold text-red-400">{commission}%</span>
              </div>
              <input
                type="range"
                min={10} max={45} step={1}
                value={commission}
                onChange={(e) => setCommission(Number(e.target.value))}
                className="w-full h-1 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #EF4444 ${((commission - 10) / 35) * 100}%, rgba(255,255,255,0.06) 0%)`,
                }}
              />
            </div>
          </div>

          {/* Stats Row */}
          <div className="mt-3 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-3">
            <div className="text-center">
              <p className="text-base font-bold text-white sm:text-lg">{otaBookings * 12}</p>
              <p className="text-[9px] text-neutral-500">bookings/year</p>
            </div>
            <div className="text-center">
              <p className="text-base font-bold text-white sm:text-lg">{otaBookings * avgStayDays * 12}</p>
              <p className="text-[9px] text-neutral-500">room nights</p>
            </div>
            <div className="text-center">
              <p className="text-base font-bold text-white sm:text-lg">₹{((otaBookings * avgStayDays * rate * 12) / 100000).toFixed(1)}L</p>
              <p className="text-[9px] text-neutral-500">revenue</p>
            </div>
          </div>
        </div>

        {/* Right: Results Panel */}
        <div className="flex w-full shrink-0 flex-col justify-center bg-[#5DDF18] p-5 lg:w-72">
          <p className="text-[10px] text-black/60 uppercase tracking-wider font-medium mb-1">Your Yearly Savings</p>
          <motion.p
            key={yearlySaving}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="text-4xl md:text-5xl font-bold text-black mb-1"
          >
            {formattedSaving}
          </motion.p>
          <p className="text-xs text-black/70 mb-4">by switching to direct bookings</p>

          <div className="mb-4 grid grid-cols-2 gap-3">
            <div>
              <p className="text-xl font-bold text-black">₹{monthlySaving.toLocaleString()}</p>
              <p className="text-[9px] text-black/60">per month</p>
            </div>
            <div>
              <p className="break-words text-xl font-bold text-black">₹{yearlySaving.toLocaleString()}</p>
              <p className="text-[9px] text-black/60">per year</p>
            </div>
          </div>

          <button className="w-full py-2.5 rounded-lg bg-black text-white font-semibold text-sm transition-all hover:bg-black/90 flex items-center justify-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Start Saving Now
          </button>
          <p className="text-center text-[9px] text-black/50 mt-1.5">No credit card • Live in 7 days</p>
        </div>
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HotelSaasPage() {
  const heroRef = useRef(null);
  const problemRef = useRef(null);
  const painRef = useRef(null);
  const solutionRef = useRef(null);
  const featuresRef = useRef(null);
  const compareRef = useRef(null);
  const roiRef = useRef(null);
  const processRef = useRef(null);
  const brandRef = useRef(null);

  const [isCalcOpen, setIsCalcOpen] = useState(false);

  const isHeroInView = useInView(heroRef, { once: true });
  const isProblemInView = useInView(problemRef, { once: true, margin: "-100px" });
  const isPainInView = useInView(painRef, { once: true, margin: "-100px" });
  const isSolutionInView = useInView(solutionRef, { once: true, margin: "-100px" });
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const isCompareInView = useInView(compareRef, { once: true, margin: "-100px" });
  const isRoiInView = useInView(roiRef, { once: true, margin: "-100px" });
  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" });
  const isBrandInView = useInView(brandRef, { once: true, margin: "-100px" });

  const features = [
    { icon: Building2, title: "0% Commission Direct Bookings", desc: "Guests book directly from your website. You keep 100% of the revenue.", color: "#D8B4FE" },
    { icon: CreditCard, title: "Instant Payments", desc: "Money goes directly to your account. No 7–15 day delays.", color: "#5DDF18" },
    { icon: Smartphone, title: "Mobile-Friendly Website", desc: "Fast, modern website designed to convert visitors into bookings.", color: "#FF9132" },
    { icon: LayoutDashboard, title: "Owner Dashboard", desc: "Manage bookings, pricing, and guests from your phone.", color: "#D8B4FE" },
    { icon: RefreshCw, title: "No Double Booking System", desc: "Sync across platforms with real-time availability updates.", color: "#5DDF18" },
    { icon: Bot, title: "AI Concierge (Coming Soon)", desc: "Automatically reply to guests and convert enquiries into bookings.", color: "#FF9132" },
  ];

  const processSteps = [
    { num: "01", title: "Choose your plan", desc: "Pick the plan that fits your hotel size and goals." },
    { num: "02", title: "We build & set everything", desc: "Our team builds your site and booking engine — you relax." },
    { num: "03", title: "Start receiving direct bookings", desc: "Go live in 7 days. Guests book directly. Revenue is yours." },
  ];

  return (
    <main className="min-h-screen bg-[#030303] text-white relative overflow-hidden">


      {/* ── HERO SECTION ───────────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── PRODUCT FEATURES BENTO GRID ─────────────────────────────────────── */}
      <section className="relative pt-24 pb-[15px] sm:pt-32 sm:pb-[15px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Introducing{" "}
              <span className="relative inline-block">
                Hotelify
                <span className="absolute -bottom-5 right-0 text-sm font-normal text-neutral-500 whitespace-nowrap">powered by Stairio</span>
              </span>
            </h2>
            <p className="mt-10 text-lg text-neutral-400 max-w-4xl mx-auto">
              <span className="font-semibold text-white">Everything</span> Your Hotel Require in One Solution. Get <span className="font-semibold text-white">Direct Booking Engine</span> with payment gateway at <span className="font-semibold text-white">0% commission</span>, ALL in one Property Management System <span className="font-semibold text-white">(PMS)</span> with <MarkerUnderline>Admin Control</MarkerUnderline>, <MarkerUnderline>OTA integration</MarkerUnderline> and a World Class <span className="font-semibold text-white">Full Stack Website</span> that Showcase you in front of the world.
            </p>
          </div>

          <BentoGridShowcase
            integration={
              <Card className="flex h-full flex-col bg-white/[0.03] border-white/[0.08] text-white">
                <CardHeader className="pb-4">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#D8B4FE]/20 to-[#FF9132]/20 border border-white/10">
                    <Hotel className="h-6 w-6 text-[#D8B4FE]" />
                  </div>
                  <CardTitle className="text-white text-xl">Hotelify</CardTitle>
                  <CardDescription className="text-neutral-400 text-sm leading-relaxed">
                    A smart software solution designed for independent hotels to simplify and automate operations. Get direct bookings, full access to guest data, instant payments without commission, and manage daily tasks efficiently—so you can focus on delivering a better guest experience.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Direct Booking Engine",
                      "PMS",
                      "Channel Management",
                      "Guest Management (CRM)",
                      "Automations",
                      "Billing & Payments",
                      "Analytics Dashboard"
                    ].map((feature) => (
                      <span
                        key={feature}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.05] text-neutral-300 border border-white/[0.08]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto flex items-center justify-between">
                  <a href="#pricing">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      <Settings2 className="mr-2 h-4 w-4" />
                      Configure plans
                    </Button>
                  </a>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-red-400 font-medium">Life is On</span>
                    <Switch
                      checked={true}
                      className="data-[state=checked]:bg-red-500 cursor-not-allowed"
                      aria-label="Toggle integration"
                    />
                  </div>
                </CardFooter>
              </Card>
            }
            trackers={
              <Card className="h-full bg-white/[0.03] border-white/[0.08]">
                <CardContent className="flex h-full flex-col justify-between p-6">
                  <div>
                    <CardTitle className="text-base font-medium text-white">
                      Your Own Booking Engine
                    </CardTitle>
                    <CardDescription className="text-neutral-400 mt-1 leading-relaxed text-xs">
                      You will get your own Booking Engine that will enable guests to book directly from your website, reducing dependencies and providing you 100% of your earnings.
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <img
                      src="https://razorpay.com/favicon.ico"
                      alt="Razorpay"
                      className="h-5 w-5 rounded"
                    />
                    <span className="text-xs text-neutral-400 font-medium">Powered by Razorpay</span>
                  </div>
                </CardContent>
              </Card>
            }
            statistic={
              <Card className="relative h-full w-full overflow-hidden bg-white/[0.03] border-white/[0.08]">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                />
                <CardContent className="relative z-10 flex h-full flex-col items-center justify-center gap-1 p-6 text-center">
                  <span className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">₹1.6L</span>
                  <p className="text-xs text-neutral-500 mt-1">Expected yearly saving</p>
                  <button
                    onClick={() => setIsCalcOpen(true)}
                    className="mt-2 text-xs text-[#D8B4FE]/80 hover:text-[#D8B4FE] transition-colors underline underline-offset-2 decoration-[#D8B4FE]/30 hover:decoration-[#D8B4FE]"
                  >
                    Calculate your saving now →
                  </button>
                </CardContent>
              </Card>
            }
            focus={
              <Card className="h-full bg-white/[0.03] border-white/[0.08]">
                <CardContent className="flex h-full flex-col justify-between p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-base font-medium text-white">AI enabled PMS</CardTitle>
                      <CardDescription className="text-neutral-400">That manages more than</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-[#5DDF18]/50 text-[#5DDF18]">
                      AI Enabled
                    </Badge>
                  </div>
                  <div>
                    <span className="text-6xl font-bold text-white">90%</span>
                  </div>
                  <div className="flex justify-between text-xs text-neutral-500">
                    <span>of your hotel management Tasks</span>
                    <span>Monthly Focus</span>
                  </div>
                </CardContent>
              </Card>
            }
            productivity={
              <Card className="h-full bg-white/[0.03] border-white/[0.08]">
                <CardContent className="flex h-full flex-col justify-end p-6">
                  <CardTitle className="text-base font-medium text-white">
                    Automations Included
                  </CardTitle>
                  <CardDescription className="text-neutral-400 mt-2 leading-relaxed">
                    From Complete booking cycle to Automated Billing and Invoicing, the system is designed to reduce your workload while you focus on business
                  </CardDescription>
                </CardContent>
              </Card>
            }
            shortcuts={
              <Card className="h-full bg-white/[0.03] border-white/[0.08] overflow-hidden">
                <CardContent className="flex h-full flex-col items-start gap-4 p-5 sm:flex-row sm:items-center sm:gap-6">
                  {/* Left side - Text content */}
                  <div className="min-w-0 flex-1">
                    <CardTitle className="text-base font-medium text-white mb-1">
                      Your Online Land Acquired
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-neutral-400">
                      Make you discoverable directly from anywhere in the world.
                    </CardDescription>
                  </div>
                  
                  {/* Right side - Google Search Mockup (compact) */}
                  <div className="w-full rounded-lg bg-[#202124] border border-white/[0.06] p-3 cursor-pointer hover:bg-[#2a2a2d] transition-all duration-200 group sm:w-[320px] sm:flex-shrink-0">
                    {/* Site info row */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#D8B4FE]/20 to-[#8ab4f8]/20 flex items-center justify-center border border-white/10 shrink-0">
                        <Hotel className="w-2.5 h-2.5 text-[#D8B4FE]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[11px] text-[#e8eaed] truncate leading-none font-medium">Your Hotel Name</div>
                        <div className="flex items-center text-[9px] text-[#9aa0a6] truncate leading-none mt-0.5">
                          <span className="text-[#aecbfa]">yourhotel.com</span>
                          <span className="mx-1 text-[#5f6368]">›</span>
                          <span>book</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Title and description */}
                    <h3 className="text-[13px] text-[#8ab4f8] group-hover:underline leading-tight font-normal mb-1">
                      Your Hotel - Best Hotel in City
                    </h3>
                    <p className="text-[10px] text-[#bdc1c6] leading-relaxed line-clamp-1">
                      ★★★★★ 4.9 · Direct booking · 0% commission
                    </p>
                  </div>
                </CardContent>
              </Card>
            }
          />
        </div>
      </section>

      {/* ── FEATURES SECTION ─────────────────────────────────────────────── */}
      <Features />

      {/* ── BENTO SHOWCASE ─────────────────────────────────────────────────── */}
      <BentoShowcase />

      {/* ── ADVANCED HOTELIFY FEATURES ─────────────────────────────────────── */}
      <HotelifyAdvancedFeatures />

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <StaggerTestimonials />

      {/* ── COMPARISON SECTION ─────────────────────────────────────────────────── */}
      <ComparisonSection />

      {/* ── SAVINGS CALCULATOR ─────────────────────────────────────────────── */}
      <section ref={roiRef} className="relative py-24 sm:py-36 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isRoiInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
              Calculate your savings
            </h2>
            <p className="text-neutral-400 text-lg">See how much you could save with Hotelify</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={isRoiInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <SavingsCalculatorInline />
          </motion.div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────────────────── */}
      <div id="pricing">
        <PricingModule
          title="Simple, Transparent Pricing"
          subtitle="Choose a plan that fits your hotel's needs."
          annualBillingLabel="Pay annually and save 20%"
          buttonLabel="Get Started"
          className="bg-[#0A0A0A]"
          defaultAnnual
          annualDiscount={0.2}
          plans={[
            {
              id: "starter",
              name: "Starter",
              description: "For small hotels getting started",
              icon: <Layers className="w-8 h-8 text-[#D8B4FE]" />,
              priceMonthly: 1499,
              users: "Up to 10 rooms",
              checkoutUrl: "https://subscription.stairio.com/checkout/hotelify/starter-12m",
              features: [
                { label: "0% Commission Direct Booking Engine", included: true },
                { label: "Real-Time Availability Calendar", included: true },
                { label: "Razorpay Payment Integration", included: true },
                { label: "Same-Day Bank Settlement", included: true },
                { label: "Full & Advance Payment Options", included: true },
                { label: "Guest Self-Service Booking Portal", included: true },
                { label: "Domain + Hosting + SSL", included: true },
                { label: "Guest Data Ownership", included: true },
                { label: "15-Page Professional Website — FREE (worth ₹32,999)", included: true },
                { label: "Live Dashboard (Occupancy, Revenue, Arrivals)", included: true },
                { label: "Walk-In Booking Creation", included: true },
                { label: "Full Booking Lifecycle (Confirm → Check-In → Check-Out)", included: true },
                { label: "Staff Management (Up to 3 Accounts, 5 Roles)", included: true },
              ],
            },
            {
              id: "growth",
              name: "Growth",
              description: "For growing hotels",
              icon: <Monitor className="w-8 h-8 text-[#FF9132]" />,
              priceMonthly: 2999,
              users: "Up to 30 rooms",
              checkoutUrl: "https://subscription.stairio.com/checkout/hotelify/growth-12m",
              features: [
                { label: "Everything in Starter", included: true },
                { label: "Unlimited Staff Accounts", included: true },
                { label: "Custom Branded Domain (yourhotel.com)", included: true },
                { label: "Google Analytics + SEO Integration", included: true },
                { label: "Multi-Room Types", included: true },
                { label: "Booking Modification (Change Dates / Room Type)", included: true },
                { label: "Advanced Reports (Custom Date Range)", included: true },
                { label: "CSV / Excel Export", included: true },
                { label: "Guest Preferences & Detailed Notes", included: true },
                { label: "ID Verification Records (Aadhaar, Passport, Voter ID, PAN)", included: true },
                { label: "Lifetime Value Dashboard per Guest", included: true },
                { label: "Pre-Arrival & Post-Checkout Automated Messages", included: true },
                { label: "Priority Email Support", included: true },
                { label: "No-Code Website Editor (Edit from Dashboard)", included: true },
                { label: "Room & Room Type Management", included: true },
                { label: "Housekeeping Task Board (Real-Time)", included: true },
                { label: "Guest CRM (Profiles, Stay History)", included: true },
                { label: "Lead Management + Live Chat with Guests", included: true },
                { label: "Automated GST Invoicing (5% / 18% Slabs)", included: true },
                { label: "Analytics & Reports", included: true },
              ],
            },
            {
              id: "professional",
              name: "Professional",
              description: "For established hotels",
              icon: <Users className="w-8 h-8 text-[#5DDF18]" />,
              priceMonthly: 7499,
              users: "Up to 50 rooms",
              checkoutUrl: "https://subscription.stairio.com/checkout/hotelify/professional-12m",
              features: [
                { label: "Everything in Growth", included: true },
                { label: "Channel Manager (Booking.com, MakeMyTrip, Airbnb, Agoda, Expedia & more)", included: true },
                { label: "Real-Time Bidirectional OTA Inventory Sync", included: true },
                { label: "OTA Bookings Auto-Imported to PMS", included: true },
                { label: "Per-Channel Rate Offsets", included: true },
                { label: "Double Booking Prevention", included: true },
                { label: "Dynamic Pricing — 4 Rule Types (Occupancy, Seasonal, Day-of-Week, Min-Stay)", included: true },
                { label: "Manual Price Override (Any Date, Any Room Type)", included: true },
                { label: "Demand Diary (Tag Festivals, Events & Conferences)", included: true },
                { label: "Inventory Restrictions (Stop-Sell, Close-to-Arrival, Min-Stay)", included: true },
                { label: "Group Displacement Calculator", included: true },
                { label: "Invoice Delivery via WhatsApp + Email", included: true },
                { label: "WhatsApp + Email Booking Notifications", included: true },
                { label: "Price Sensitivity & Elasticity Chart", included: true },
                { label: "Pickup Pace Chart (Booking Velocity)", included: true },
                { label: "Length-of-Stay Optimizer", included: true },
                { label: "Custom Branding", included: true },
              ],
              recommended: true,
            },
            {
              id: "enterprise",
              name: "Enterprise",
              description: "For hotel chains",
              icon: <Building2 className="w-8 h-8 text-white" />,
              priceMonthly: 18999,
              users: "Unlimited rooms",
              checkoutUrl: "https://subscription.stairio.com/checkout/hotelify/enterprise-12m",
              features: [
                { label: "Everything in Professional", included: true },
                { label: "AI Chat Assistant (Automated Guest Chatbot — 24/7)", included: true },
                { label: "Guest Loyalty Program", included: true },
                { label: "Multi-Property Management (Unified Dashboard)", included: true },
                { label: "Cross-Property Revenue & Occupancy Analytics", included: true },
                { label: "White-Label (Remove Hotelify Branding)", included: true },
                { label: "Google Free Booking Links Integration", included: true },
                { label: "Dedicated Account Manager", included: true },
                { label: "24/7 Support", included: true },
                { label: "AI Powered Revenue Advisor", included: true },
                { label: "Demand Calendar Heatmap", included: true },
                { label: "What-If Price Simulator", included: true },
                { label: "24-Hour Priority Support", included: true },
                { label: "Inventory Management", included: true },
              ],
            },
          ].reverse()}
      />
      </div>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section ref={processRef} className="relative py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-white/10 bg-gradient-to-r from-[#D8B4FE]/5 via-[#FF9132]/5 to-[#5DDF18]/5 backdrop-blur-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#D8B4FE]/10 via-transparent to-[#5DDF18]/10" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF9132]/50 to-transparent" />

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 p-6 sm:p-8">
              {/* Left: CTA Message */}
              <div className="text-center lg:text-left shrink-0">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  Your guests are searching <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D8B4FE] via-[#FF9132] to-[#5DDF18]">for you</span>
                </h3>
                <p className="text-neutral-400 text-sm">Go live in 7 days — no technical skills required</p>
              </div>

              {/* Center: Process Steps */}
              <div className="hidden md:flex flex-wrap items-center justify-center gap-4">
                {processSteps.map((step, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-[#D8B4FE] via-[#FF9132] to-[#5DDF18] text-[9px] font-bold text-black shrink-0">
                      {step.num}
                    </span>
                    <span className="text-xs text-neutral-400 whitespace-nowrap">{step.title}</span>
                    {i < processSteps.length - 1 && (
                      <ArrowRight className="w-3 h-3 text-neutral-600 ml-1" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ SECTION ─────────────────────────────────────────────────────── */}
      <section className="relative py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Questions? We&apos;ve got answers.
            </h2>
            <p className="text-neutral-400">Everything you need to know before getting started</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "Do I need any technical knowledge to use this?",
                a: "Not at all. We handle everything — setup, customisation, deployment. Your admin panel is designed to be as simple as using WhatsApp. If you can use a smartphone, you can manage your bookings."
              },
              {
                q: "Is this a one-time payment or are there monthly fees?",
                a: "The system is a one-time investment. No hidden monthly fees. The only ongoing costs are standard ones like domain renewal (yearly) and hosting, which we can help manage."
              },
              {
                q: "How long does it take to get started?",
                a: "Most properties go live within 7–10 working days after we receive your content (photos, room details, rates). We handle all setup, customisation, and testing."
              },
              {
                q: "Can I still use OTAs alongside this?",
                a: "Absolutely, and we recommend it. This system complements your existing channels. The goal is to gradually build your direct booking channel while continuing to use platforms that bring guests."
              },
              {
                q: "What if I need changes or have problems later?",
                a: "We provide ongoing support. Something breaks? We fix it. Need a rate change or new room type? We help. Our goal is a long-term relationship, not a one-time sale."
              },
              {
                q: "What about the daily cost? Is it worth it?",
                a: "Over 3 years, the daily cost is less than ₹50/day. Just 1–2 direct bookings per month saves more than the entire investment. Most properties see ROI within the first year."
              }
            ].map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isCalcOpen && <SavingsCalculatorModal onClose={() => setIsCalcOpen(false)} />}
      </AnimatePresence>
    </main>
  );
}
