"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ArrowRight,
  Play,
  Type,
  Image as ImageIcon,
  MapPin,
  Star,
  Globe,
  Sparkles,
  Layers,
  Rocket,
  Phone,
  Menu,
  Clock,
  Users,
  Award,
  Smartphone,
  TrendingUp,
} from "lucide-react";

const buildSteps = [
  { id: "hero", label: "Hero", icon: <Sparkles className="w-4 h-4" />, color: "#FF9132", duration: 1200 },
  { id: "about", label: "About", icon: <Type className="w-4 h-4" />, color: "#D8B4FE", duration: 1000 },
  { id: "gallery", label: "Gallery", icon: <ImageIcon className="w-4 h-4" />, color: "#5DDF18", duration: 1400 },
  { id: "menu", label: "Menu", icon: <Menu className="w-4 h-4" />, color: "#8ab4f8", duration: 1300 },
  { id: "reviews", label: "Reviews", icon: <Star className="w-4 h-4" />, color: "#FF9132", duration: 1100 },
  { id: "contact", label: "Contact", icon: <Phone className="w-4 h-4" />, color: "#D8B4FE", duration: 900 },
];

const foodImages = [
  { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80", alt: "Pizza" },
  { src: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=80", alt: "Pasta" },
  { src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80", alt: "Salad" },
  { src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80", alt: "Pancakes" },
  { src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&q=80", alt: "Cocktail" },
  { src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&q=80", alt: "Toast" },
];

const menuItems = [
  { name: "Margherita Pizza", price: "$18", desc: "Fresh tomatoes, mozzarella, basil" },
  { name: "Spaghetti Carbonara", price: "$22", desc: "Creamy egg sauce, pancetta, parmesan" },
  { name: "Tiramisu", price: "$12", desc: "Classic Italian dessert" },
  { name: "House Wine", price: "$8", desc: "Glass of red or white" },
];

const reviewData = [
  { name: "Sarah Mitchell", rating: 5, text: "Best Italian food I've had in years!", avatar: "/images/randomprople/women/17.jpg" },
  { name: "James Chen", rating: 5, text: "Amazing atmosphere and service", avatar: "/images/randomprople/men/12.jpg" },
  { name: "Emily Rodriguez", rating: 5, text: "The pasta was incredible", avatar: "/images/randomprople/women/37.jpg" },
  { name: "Michael Park", rating: 5, text: "Will definitely come back!", avatar: "/images/randomprople/men/45.jpg" },
];

const stats = [
  { icon: <Clock className="w-5 h-5" />, value: "10-14", label: "Days to Launch" },
  { icon: <TrendingUp className="w-5 h-5" />, value: "95+", label: "PageSpeed Score" },
  { icon: <Users className="w-5 h-5" />, value: "500+", label: "Happy Customers" },
  { icon: <Award className="w-5 h-5" />, value: "100%", label: "Ownership" },
];

export function DemoShowcaseWebsiteBuilder() {
  const [isBuilding, setIsBuilding] = useState(false);
  const [builtSections, setBuiltSections] = useState<string[]>([]);
  const [currentBuildingIndex, setCurrentBuildingIndex] = useState(-1);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleBuild = useCallback(() => {
    setIsBuilding(true);
    setBuiltSections([]);
    setCurrentBuildingIndex(0);
  }, []);

  const handleReset = useCallback(() => {
    setIsBuilding(false);
    setBuiltSections([]);
    setCurrentBuildingIndex(-1);
  }, []);

  useEffect(() => {
    if (isBuilding && currentBuildingIndex < buildSteps.length) {
      const step = buildSteps[currentBuildingIndex];
      const timer = setTimeout(() => {
        setBuiltSections(prev => [...prev, step.id]);
        if (currentBuildingIndex === buildSteps.length - 1) {
          setIsBuilding(false);
        }
        setCurrentBuildingIndex(prev => prev + 1);
      }, step.duration);
      return () => clearTimeout(timer);
    }
  }, [isBuilding, currentBuildingIndex]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const builderProgress = (builtSections.length / buildSteps.length) * 100;

  return (
    <section ref={containerRef} className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#080808] to-[#030303]" />
      <motion.div
        animate={{ x: mousePos.x - 300, y: mousePos.y - 200 }}
        transition={{ type: "spring", damping: 30, stiffness: 80 }}
        className="absolute w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(216,180,254,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 rounded-full bg-gradient-to-r from-[#FF9132] to-[#D8B4FE]"
            />
            <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Live Demo</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Watch it <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF9132] via-[#D8B4FE] to-[#5DDF18]">build itself</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto">
            Click start and watch our AI builder create a stunning website in real-time
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Build Progress + Preview Side by Side */}
          <div className="grid lg:grid-cols-5 gap-6 items-start">
            {/* Left - Build Progress */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 rounded-2xl border border-white/[0.08] bg-[#0A0A0A]/80 backdrop-blur-xl p-5"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-[#FF9132]" />
                  Build Progress
                  {isBuilding && (
                    <span className="ml-2 text-xs text-[#5DDF18] font-mono">{Math.round(builderProgress)}%</span>
                  )}
                </h3>
              </div>

              {isBuilding && (
                <div className="h-1 bg-white/5 rounded-full mb-5 overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${builderProgress}%` }} className="h-full bg-gradient-to-r from-[#FF9132] via-[#D8B4FE] to-[#5DDF18] rounded-full" />
                </div>
              )}

              <div className="space-y-2">
                {buildSteps.map((step, index) => {
                  const isBuilt = builtSections.includes(step.id);
                  const isCurrent = index === currentBuildingIndex && isBuilding;
                  const isPending = !isBuilt && !isCurrent;
                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: isPending ? 0.5 : 1, x: 0 }}
                      className={`relative flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${isCurrent ? "bg-white/[0.05] border border-white/[0.1]" : isBuilt ? "bg-white/[0.02]" : ""}`}
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors shrink-0"
                        style={{
                          backgroundColor: isBuilt ? `${step.color}20` : isCurrent ? `${step.color}30` : "rgba(255,255,255,0.05)",
                          color: isBuilt || isCurrent ? step.color : "#666"
                        }}
                      >
                        {isBuilt ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : isCurrent ? (
                          <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
                            {step.icon}
                          </motion.div>
                        ) : (
                          step.icon
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className={`text-sm font-medium block ${isBuilt ? "text-white" : isCurrent ? "text-white/80" : "text-neutral-500"}`}>{step.label}</span>
                        {isCurrent && <span className="text-[10px] font-mono text-neutral-500">{(step.duration / 1000).toFixed(1)}s</span>}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-4 border-t border-white/[0.06]">
                {!isBuilding && builtSections.length === 0 ? (
                  <Button onClick={handleBuild} className="w-full bg-gradient-to-r from-[#FF9132] via-[#D8B4FE] to-[#5DDF18] text-black font-bold py-5 rounded-xl hover:opacity-90 transition-all">
                    <Play className="mr-2 w-5 h-5" fill="currentColor" />Start Demo
                  </Button>
                ) : isBuilding ? (
                  <Button onClick={handleReset} variant="outline" className="w-full border-white/10 text-white hover:bg-white/5 py-5">Reset Demo</Button>
                ) : (
                  <Button onClick={handleBuild} className="w-full bg-gradient-to-r from-[#FF9132] via-[#D8B4FE] to-[#5DDF18] text-black font-bold py-5">
                    <Play className="mr-2 w-4 h-4" fill="currentColor" />Replay Demo
                  </Button>
                )}
              </div>
            </motion.div>

            {/* Right - Website Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="flex justify-center">
                <div className="w-full max-w-sm">
                  {/* Monitor Stand */}
                  <div className="flex justify-center">
                    <div className="w-16 h-5 bg-gradient-to-b from-[#3a3a3a] to-[#1a1a1a] rounded-b-lg shadow-lg" />
                  </div>
                  <div className="flex justify-center -mt-0.5">
                    <div className="w-24 h-2.5 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-b-xl" />
                  </div>
                  <div className="flex justify-center mt-0.5">
                    <div className="w-32 h-1 bg-[#151515] rounded-full" />
                  </div>

                  {/* Monitor Screen */}
                  <div className="mt-2 rounded-xl bg-gradient-to-b from-[#2d2d2d] to-[#1f1f1f] p-2 shadow-xl shadow-black/50 border border-[#3d3d3d]">
                    <div className="rounded-lg bg-[#0D0D0D] overflow-hidden border border-white/[0.05] shadow-inner">
                      {/* Browser Chrome */}
                      <div className="flex items-center justify-between px-2 py-1.5 border-b border-white/[0.04] bg-[#1a1a1a]">
                        <div className="flex items-center gap-1.5">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                            <div className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
                            <div className="w-2 h-2 rounded-full bg-[#28C840]" />
                          </div>
                          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#0d0d0d] border border-white/[0.05]">
                            <Globe className="w-2 h-2 text-[#666]" />
                            <span className="text-[9px] text-[#888]">bellaitalia.com</span>
                          </div>
                        </div>
                        <div className="w-4 h-3 rounded-sm bg-[#2a2a2a] border border-white/5 flex items-center justify-center">
                          <Smartphone className="w-2 h-2 text-[#555]" />
                        </div>
                      </div>

                      {/* Website Content */}
                      <div className="relative min-h-[500px] overflow-y-auto">
                    {/* HERO SECTION */}
                    <AnimatePresence>
                      {builtSections.includes("hero") && (
                        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative h-72 sm:h-80">
                          <div className="absolute inset-0">
                            <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80" alt="Restaurant Interior" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent" />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-2 h-2 rounded-full bg-[#5DDF18] animate-pulse" />
                              <span className="text-xs text-white/60">Now Open</span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Bella Italia</h1>
                            <p className="text-neutral-300 text-sm mb-3 max-w-md">Authentic Italian cuisine in the heart of downtown.</p>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-[#FF9132]" fill="#FF9132" />
                                <span className="text-sm font-semibold text-white">4.9</span>
                              </div>
                              <div className="h-4 w-px bg-white/20" />
                              <span className="text-sm text-neutral-300">$$ Italian</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* ABOUT SECTION */}
                    <AnimatePresence>
                      {builtSections.includes("about") && (
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="p-6 border-t border-white/[0.04]">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#D8B4FE]" />
                            <span className="text-xs text-neutral-500 uppercase tracking-wider">Our Story</span>
                          </div>
                          <h2 className="text-xl font-bold text-white mb-2">About Bella Italia</h2>
                          <p className="text-neutral-400 text-sm leading-relaxed">Founded in 2010, bringing authentic Italian cuisine to your table.</p>
                          <div className="grid grid-cols-3 gap-3 mt-4">
                            {[{ value: "14+", label: "Years" }, { value: "50K+", label: "Customers" }, { value: "100%", label: "Fresh" }].map((stat, i) => (
                              <div key={i} className="text-center p-2 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                                <div className="text-base font-bold text-[#D8B4FE]">{stat.value}</div>
                                <div className="text-[10px] text-neutral-500">{stat.label}</div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* GALLERY SECTION */}
                    <AnimatePresence>
                      {builtSections.includes("gallery") && (
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="p-6 border-t border-white/[0.04]">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#5DDF18]" />
                            <span className="text-xs text-neutral-500 uppercase tracking-wider">Gallery</span>
                          </div>
                          <h2 className="text-xl font-bold text-white mb-3">Our Dishes</h2>
                          <div className="grid grid-cols-3 gap-2">
                            {foodImages.map((food, i) => (
                              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.08 }} className="relative aspect-square rounded-lg overflow-hidden group">
                                <Image src={food.src} alt={food.alt} fill className="object-cover" />
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* MENU SECTION */}
                    <AnimatePresence>
                      {builtSections.includes("menu") && (
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="p-6 border-t border-white/[0.04]">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#8ab4f8]" />
                            <span className="text-xs text-neutral-500 uppercase tracking-wider">Menu</span>
                          </div>
                          <h2 className="text-xl font-bold text-white mb-3">Popular Dishes</h2>
                          <div className="space-y-2">
                            {menuItems.map((item, i) => (
                              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                                <div>
                                  <div className="font-medium text-white text-sm">{item.name}</div>
                                  <div className="text-[10px] text-neutral-500">{item.desc}</div>
                                </div>
                                <div className="text-[#5DDF18] font-semibold text-sm">{item.price}</div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* REVIEWS SECTION */}
                    <AnimatePresence>
                      {builtSections.includes("reviews") && (
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="p-6 border-t border-white/[0.04]">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FF9132]" />
                            <span className="text-xs text-neutral-500 uppercase tracking-wider">Reviews</span>
                            <span className="ml-auto text-xs text-neutral-500">4.9</span>
                          </div>
                          <h2 className="text-xl font-bold text-white mb-3">What People Say</h2>
                          <div className="grid grid-cols-2 gap-2">
                            {reviewData.map((review, i) => (
                              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-2 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                                <div className="flex items-start gap-2">
                                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10">
                                    <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-xs font-medium text-white">{review.name}</div>
                                    <div className="flex gap-0.5 mb-1">
                                      {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-2 h-2 text-[#FF9132]" fill="#FF9132" />)}
                                    </div>
                                    <p className="text-[10px] text-neutral-400 leading-relaxed">{review.text}</p>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* CONTACT SECTION */}
                    <AnimatePresence>
                      {builtSections.includes("contact") && (
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="p-6 border-t border-white/[0.04]">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#D8B4FE]" />
                            <span className="text-xs text-neutral-500 uppercase tracking-wider">Contact</span>
                          </div>
                          <h2 className="text-xl font-bold text-white mb-3">Get in Touch</h2>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                              <MapPin className="w-4 h-4 text-[#FF9132]" />
                              <div className="text-xs text-white">123 Main Street, Downtown</div>
                            </div>
                            <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                              <Phone className="w-4 h-4 text-[#D8B4FE]" />
                              <div className="text-xs text-white">(555) 123-4567</div>
                            </div>
                            <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                              <Clock className="w-4 h-4 text-[#5DDF18]" />
                              <div className="text-xs text-white">Open Daily: 11AM - 11PM</div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Empty State */}
                    {builtSections.length === 0 && !isBuilding && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#FF9132]/20 to-[#D8B4FE]/20 border border-white/10 flex items-center justify-center mb-4">
                          <Layers className="w-10 h-10 text-[#FF9132]" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-white mb-2">Your Website</h3>
                        <p className="text-neutral-500 text-xs mb-4 max-w-xs">Watch the magic happen as we build a stunning restaurant website</p>
                        <Button onClick={handleBuild} className="bg-gradient-to-r from-[#FF9132] to-[#D8B4FE] text-black font-bold text-sm px-6 py-3">
                          <Play className="mr-2 w-4 h-4" fill="currentColor" />Start Demo
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 + i * 0.1 }} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-[#D8B4FE]">{stat.icon}</span>
                <span className="text-2xl font-bold text-white">{stat.value}</span>
              </div>
              <div className="text-sm text-neutral-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 }} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing">
            <Button size="lg" className="bg-gradient-to-r from-[#FF9132] via-[#D8B4FE] to-[#5DDF18] text-black font-bold text-lg px-10 py-6 rounded-xl">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
          <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 text-lg px-10 py-6 rounded-xl">View Plans</Button>
        </motion.div>
      </div>
    </div>
    </section>
  );
}
