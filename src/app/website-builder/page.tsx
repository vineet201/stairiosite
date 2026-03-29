"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";
import { HeroSectionWebsiteBuilder } from "@/components/ui/hero-website-builder";
import { BentoGridShowcase } from "@/components/ui/bento-product-features";
import { FeaturesWebsiteBuilder } from "@/components/blocks/features-website-builder";
import { BentoShowcaseWebsiteBuilder } from "@/components/blocks/bento-showcase-website-builder-v2";
import { StaggerTestimonialsWebsiteBuilder } from "@/components/blocks/stagger-testimonials-website-builder-v2";
import { ComparisonSectionWebsiteBuilder } from "@/components/blocks/comparison-section-website-builder";
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
  Globe, Smartphone, Search, LayoutDashboard, Zap, Palette,
  TrendingUp, Users, Database, Clock, CheckCircle, XCircle,
  Play, ChevronDown, Star, ArrowRight, Code, Settings2, Command, Plus,
  Layers, Monitor, Rocket,
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

// ── Page ─────────────────────────────────────────────────────────────────────

export default function WebsiteBuilderPage() {
  const heroRef = useRef(null);
  const problemRef = useRef(null);
  const roiRef = useRef(null);
  const processRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isProblemInView = useInView(problemRef, { once: true, margin: "-100px" });
  const isRoiInView = useInView(roiRef, { once: true, margin: "-100px" });
  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" });

  const processSteps = [
    { num: "01", title: "Share your vision", desc: "Tell us about your business and goals." },
    { num: "02", title: "We design & build", desc: "Our team creates your custom website." },
    { num: "03", title: "Launch & grow", desc: "Go live in 10-14 days. Start getting leads." },
  ];

  return (
    <main className="min-h-screen bg-[#030303] text-white relative overflow-hidden">

      {/* ── HERO SECTION ───────────────────────────────────────────────────── */}
      <HeroSectionWebsiteBuilder />

      {/* ── PRODUCT FEATURES BENTO GRID ─────────────────────────────────────── */}
      <section className="relative pt-24 pb-[15px] sm:pt-32 sm:pb-[15px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Introducing{" "}
              <span className="relative inline-block">
                SmartSite
                <span className="absolute -bottom-5 right-0 text-sm font-normal text-neutral-500 whitespace-nowrap">for your business</span>
              </span>
            </h2>
            <p className="mt-10 text-lg text-neutral-400 max-w-4xl mx-auto">
              <span className="font-semibold text-white">Everything</span> your business needs to shine online. Get a <span className="font-semibold text-white">professional website</span> with <MarkerUnderline>SEO optimization</MarkerUnderline>, <MarkerUnderline>mobile-first design</MarkerUnderline>, and a <span className="font-semibold text-white">conversion-focused</span> layout that turns visitors into customers.
            </p>
          </div>

          <BentoGridShowcase
            integration={
              <Card className="flex h-full flex-col bg-white/[0.03] border-white/[0.08] text-white">
                <CardHeader className="pb-4">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#D8B4FE]/20 to-[#FF9132]/20 border border-white/10">
                    <Globe className="h-6 w-6 text-[#D8B4FE]" />
                  </div>
                  <CardTitle className="text-white text-xl">SmartSite</CardTitle>
                  <CardDescription className="text-neutral-400 text-sm leading-relaxed">
                    Professional websites designed to convert visitors into customers. Perfect for restaurants, clinics, salons, coaches, and every business ready to grow online.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Custom Design",
                      "Mobile Responsive",
                      "SEO Optimized",
                      "Contact Forms",
                      "Fast Loading",
                      "SSL Security",
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
                      View Plans
                    </Button>
                  </a>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#5DDF18] font-medium">Now Live</span>
                    <Switch
                      checked={true}
                      className="data-[state=checked]:bg-[#5DDF18] cursor-not-allowed"
                      aria-label="Toggle status"
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
                      Mobile-First Design
                    </CardTitle>
                    <CardDescription className="text-neutral-400 mt-1 leading-relaxed text-xs">
                      70% of your visitors are on mobile. We design for phones first, then scale up to desktops.
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <Smartphone className="h-5 w-5 text-[#D8B4FE]" />
                    <span className="text-xs text-neutral-400 font-medium">100% Responsive</span>
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
                  <span className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">10-14</span>
                  <p className="text-xs text-neutral-500 mt-1">Days to go live</p>
                  <span className="mt-2 text-xs text-[#5DDF18]/80">
                    Fast turnaround guaranteed
                  </span>
                </CardContent>
              </Card>
            }
            focus={
              <Card className="h-full bg-white/[0.03] border-white/[0.08]">
                <CardContent className="flex h-full flex-col justify-between p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-base font-medium text-white">SEO Optimized</CardTitle>
                      <CardDescription className="text-neutral-400">Designed for Google</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-[#5DDF18]/50 text-[#5DDF18]">
                      Included
                    </Badge>
                  </div>
                  <div>
                    <span className="text-6xl font-bold text-white">95+</span>
                  </div>
                  <div className="flex justify-between text-xs text-neutral-500">
                    <span>Google PageSpeed Score</span>
                    <span>Out of 100</span>
                  </div>
                </CardContent>
              </Card>
            }
            productivity={
              <Card className="h-full bg-white/[0.03] border-white/[0.08]">
                <CardContent className="flex h-full flex-col justify-end p-6">
                  <CardTitle className="text-base font-medium text-white">
                    Easy Content Updates
                  </CardTitle>
                  <CardDescription className="text-neutral-400 mt-2 leading-relaxed">
                    Update your content anytime with our simple dashboard. No technical knowledge required.
                  </CardDescription>
                </CardContent>
              </Card>
            }
            shortcuts={
              <Card className="h-full bg-white/[0.03] border-white/[0.08] overflow-hidden">
                <CardContent className="flex h-full items-center gap-6 p-5">
                  {/* Left side - Text content */}
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base font-medium text-white mb-1">
                      Found on Google
                    </CardTitle>
                    <CardDescription className="text-neutral-400 text-sm">
                      Customers find you when they search for your services.
                    </CardDescription>
                  </div>
                  
                  {/* Right side - Google Search Mockup (compact) */}
                  <div className="flex-shrink-0 w-[320px] rounded-lg bg-[#202124] border border-white/[0.06] p-3 cursor-pointer hover:bg-[#2a2a2d] transition-all duration-200 group">
                    {/* Site info row */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#D8B4FE]/20 to-[#8ab4f8]/20 flex items-center justify-center border border-white/10 shrink-0">
                        <Globe className="w-2.5 h-2.5 text-[#D8B4FE]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[11px] text-[#e8eaed] truncate leading-none font-medium">Your Business Name</div>
                        <div className="flex items-center text-[9px] text-[#9aa0a6] truncate leading-none mt-0.5">
                          <span className="text-[#aecbfa]">yourbusiness.com</span>
                          <span className="mx-1 text-[#5f6368]">›</span>
                          <span>services</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Title and description */}
                    <h3 className="text-[13px] text-[#8ab4f8] group-hover:underline leading-tight font-normal mb-1">
                      Your Business - Best Services in City
                    </h3>
                    <p className="text-[10px] text-[#bdc1c6] leading-relaxed line-clamp-1">
                      ★★★★★ 4.9 · Trusted by 500+ customers · Book Now
                    </p>
                  </div>
                </CardContent>
              </Card>
            }
          />
        </div>
      </section>

      {/* ── FEATURES SECTION ─────────────────────────────────────────────── */}
      <FeaturesWebsiteBuilder />

      {/* ── BENTO SHOWCASE ─────────────────────────────────────────────────── */}
      <BentoShowcaseWebsiteBuilder />

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <StaggerTestimonialsWebsiteBuilder />

      {/* ── COMPARISON SECTION ─────────────────────────────────────────────────── */}
      <ComparisonSectionWebsiteBuilder />

      {/* ── PRICING ─────────────────────────────────────────────────────────── */}
      <div id="pricing">
        <PricingModule
          title="Simple, Transparent Pricing"
          subtitle="Choose a plan that fits your business needs."
          annualBillingLabel="Pay annually and save 20%"
          buttonLabel="Get Started"
          className="bg-[#0A0A0A]"
          annualDiscount={0.2}
          plans={[
            {
              id: "enterprise",
              name: "Enterprise",
              description: "For large businesses",
              icon: <Globe className="w-8 h-8 text-white" />,
              priceMonthly: 249999,
              users: "Unlimited pages",
              features: [
                { label: "Everything in Professional", included: true },
                { label: "Custom Web Application", included: true },
                { label: "E-commerce Integration", included: true },
                { label: "API Integrations", included: true },
                { label: "Multi-language Support", included: true },
                { label: "CRM Integration", included: true },
                { label: "Advanced Analytics", included: true },
                { label: "Custom Branding", included: true },
                { label: "Priority Support", included: true },
                { label: "Dedicated Manager", included: true },
                { label: "1 Year Support", included: true },
                { label: "Unlimited Revisions", included: true },
              ],
            },
            {
              id: "professional",
              name: "Professional",
              description: "For established businesses",
              icon: <Rocket className="w-8 h-8 text-[#5DDF18]" />,
              priceMonthly: 119999,
              users: "10-20 pages",
              features: [
                { label: "Everything in Growth", included: true },
                { label: "Blog Integration", included: true },
                { label: "Lead Generation Forms", included: true },
                { label: "WhatsApp Integration", included: true },
                { label: "Google Analytics Setup", included: true },
                { label: "Social Media Integration", included: true },
                { label: "Booking/Appointment System", included: true },
                { label: "Custom Features", included: true },
                { label: "6 Months Support", included: true },
                { label: "SEO Optimization", included: true },
                { label: "E-commerce Ready", included: false },
                { label: "API Integrations", included: false },
              ],
              recommended: true,
            },
            {
              id: "growth",
              name: "Growth",
              description: "For growing businesses",
              icon: <TrendingUp className="w-8 h-8 text-[#FF9132]" />,
              priceMonthly: 59999,
              users: "5-10 pages",
              features: [
                { label: "Everything in Starter", included: true },
                { label: "Premium Design", included: true },
                { label: "Contact Forms", included: true },
                { label: "Image Gallery", included: true },
                { label: "Google Maps Integration", included: true },
                { label: "Basic SEO Setup", included: true },
                { label: "Social Links", included: true },
                { label: "3 Months Support", included: true },
                { label: "Blog Integration", included: false },
                { label: "Lead Generation Forms", included: false },
                { label: "Booking System", included: false },
                { label: "WhatsApp Integration", included: false },
              ],
            },
            {
              id: "starter",
              name: "Starter",
              description: "For new businesses",
              icon: <Layers className="w-8 h-8 text-[#D8B4FE]" />,
              priceMonthly: 24999,
              users: "3-5 pages",
              features: [
                { label: "Professional Design", included: true },
                { label: "Mobile Responsive", included: true },
                { label: "Fast Loading Speed", included: true },
                { label: "SSL Security", included: true },
                { label: "Domain + Hosting (1 Year)", included: true },
                { label: "Basic Contact Form", included: true },
                { label: "1 Month Support", included: true },
                { label: "Google Business Setup", included: true },
                { label: "Premium Design", included: false },
                { label: "Image Gallery", included: false },
                { label: "Blog Integration", included: false },
                { label: "Booking System", included: false },
              ],
            },
          ]}
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
                  Your customers are searching <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D8B4FE] via-[#FF9132] to-[#5DDF18]">for you</span>
                </h3>
                <p className="text-neutral-400 text-sm">Go live in 10-14 days — no technical skills required</p>
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

      {/* ── DEMO SHOWCASE ──────────────────────────────────────────────────── */}
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
              Questions? We've got answers.
            </h2>
            <p className="text-neutral-400">Everything you need to know before getting started</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "How fast can my website go live?",
                a: "Most websites are ready within 10-14 working days after we receive your content (logo, photos, text). We handle all design, development, and setup."
              },
              {
                q: "What do you need from me to get started?",
                a: "Just your logo, business details, some photos, and any specific content you want. Don't worry if you don't have everything — we can help create content and source quality images."
              },
              {
                q: "Who owns the website?",
                a: "You own everything — 100%. The code, design, domain, and all content belongs to you. Full access and control, always."
              },
              {
                q: "Are there any hidden costs later?",
                a: "No hidden fees. Our pricing is all-inclusive. The only ongoing costs are domain renewal (~₹1,000/year) and hosting (~₹3,000/year), which we can manage for you."
              },
              {
                q: "Can I update the website myself?",
                a: "Yes! We make it simple with an easy-to-use dashboard. Change text, images, and basic content without any technical knowledge. We also provide training."
              },
              {
                q: "Do you redesign existing websites?",
                a: "Absolutely. We can modernize your current website or build a completely new one. We'll migrate your content and improve the design and functionality."
              },
              {
                q: "What if I need changes or have problems later?",
                a: "We provide ongoing support based on your plan. Something broken? We fix it. Need content updates? We help. Our goal is a long-term relationship, not a one-time sale."
              },
              {
                q: "Do I need any technical knowledge?",
                a: "Not at all. We handle everything — design, development, hosting, SSL, domain setup. You focus on your business, we handle the technical stuff."
              }
            ].map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} index={i} />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
