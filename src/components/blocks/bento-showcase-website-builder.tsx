"use client"

import { LayoutDashboard, Palette, Type, Image, Settings, Layers, Code, Globe, Smartphone, Monitor, Search, TrendingUp, Users, MessageSquare, Star, CheckCircle2 } from "lucide-react"

export function BentoShowcaseWebsiteBuilder() {
    return (
        <section className="py-16 md:py-24 bg-black">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-12 text-center">
                    <p className="text-sm font-medium uppercase tracking-widest text-[#D8B4FE] mb-3">See it in action</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">Built for Modern Businesses</h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-3 md:gap-4">
                    {/* Website Editor - Large hero - ANIMATED */}
                    <div className="col-span-2 md:col-span-3 row-span-2 group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d12]">
                        {/* Editor CSS Animations */}
                        <style jsx>{`
                            @keyframes cursorBlink {
                                0%, 100% { opacity: 1; }
                                50% { opacity: 0; }
                            }
                            @keyframes typing {
                                0%, 100% { width: 0; }
                                50% { width: 100%; }
                            }
                            @keyframes slidePreview {
                                0%, 20% { transform: translateX(0); }
                                25%, 45% { transform: translateX(-100%); }
                                50%, 70% { transform: translateX(-200%); }
                                75%, 95% { transform: translateX(-100%); }
                                100% { transform: translateX(0); }
                            }
                            @keyframes fadeInScale {
                                0% { opacity: 0; transform: scale(0.95); }
                                100% { opacity: 1; transform: scale(1); }
                            }
                            @keyframes pulse {
                                0%, 100% { transform: scale(1); }
                                50% { transform: scale(1.05); }
                            }
                            @keyframes shimmer {
                                0% { background-position: -200% 0; }
                                100% { background-position: 200% 0; }
                            }
                            .cursor-blink { animation: cursorBlink 1s ease-in-out infinite; }
                            .typing-anim { animation: typing 4s ease-in-out infinite; overflow: hidden; white-space: nowrap; }
                            .slide-preview { animation: slidePreview 12s ease-in-out infinite; }
                            .fade-in-scale { animation: fadeInScale 0.5s ease-out forwards; }
                            .pulse-anim { animation: pulse 3s ease-in-out infinite; }
                            .shimmer { 
                                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
                                background-size: 200% 100%;
                                animation: shimmer 2s infinite;
                            }
                        `}</style>
                        
                        <div className="absolute inset-0 flex">
                            {/* Sidebar - Tools */}
                            <div className="w-[50px] bg-[#0a0a0f] border-r border-white/5 p-2 flex flex-col gap-1 items-center">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D8B4FE]/20 to-[#D8B4FE]/5 border border-[#D8B4FE]/20 flex items-center justify-center mb-2">
                                    <LayoutDashboard className="w-4 h-4 text-[#D8B4FE]" />
                                </div>
                                {[Layers, Type, Image, Palette, Code, Settings].map((Icon, i) => (
                                    <div key={i} className="w-7 h-7 rounded flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer">
                                        <Icon className="w-3.5 h-3.5 text-neutral-500" />
                                    </div>
                                ))}
                            </div>
                            
                            {/* Main Content */}
                            <div className="flex-1 flex flex-col">
                                {/* Top Bar */}
                                <div className="h-10 bg-[#0a0a0f] border-b border-white/5 flex items-center px-3 gap-3">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                                    </div>
                                    <div className="flex-1 h-6 bg-white/5 rounded flex items-center px-2 gap-1">
                                        <Globe className="w-3 h-3 text-neutral-500" />
                                        <span className="text-[9px] text-neutral-400">yourbusiness.com</span>
                                    </div>
                                    <div className="flex gap-1">
                                        <Monitor className="w-4 h-4 text-[#D8B4FE]" />
                                        <Smartphone className="w-4 h-4 text-neutral-500" />
                                    </div>
                                </div>
                                
                                {/* Preview Area */}
                                <div className="flex-1 p-4 overflow-hidden">
                                    <div className="h-full rounded-lg bg-white overflow-hidden relative">
                                        {/* Website Preview Slideshow */}
                                        <div className="absolute inset-0 flex slide-preview">
                                            {/* Page 1 - Restaurant */}
                                            <div className="min-w-full h-full p-3 flex flex-col">
                                                <div className="flex items-center justify-between mb-3">
                                                    <div className="h-4 w-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded" />
                                                    <div className="flex gap-2">
                                                        {[1,2,3,4].map((_, i) => (
                                                            <div key={i} className="h-2 w-10 bg-neutral-200 rounded" />
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="flex-1 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                                                    <div className="text-center">
                                                        <div className="h-6 w-40 bg-amber-500/30 rounded mx-auto mb-2" />
                                                        <div className="h-3 w-60 bg-amber-400/20 rounded mx-auto mb-3" />
                                                        <div className="h-8 w-24 bg-amber-500 rounded-full mx-auto pulse-anim" />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Page 2 - Clinic */}
                                            <div className="min-w-full h-full p-3 flex flex-col">
                                                <div className="flex items-center justify-between mb-3">
                                                    <div className="h-4 w-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded" />
                                                    <div className="flex gap-2">
                                                        {[1,2,3,4].map((_, i) => (
                                                            <div key={i} className="h-2 w-10 bg-neutral-200 rounded" />
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="flex-1 rounded-lg bg-gradient-to-br from-teal-50 to-cyan-100 flex items-center justify-center">
                                                    <div className="text-center">
                                                        <div className="h-6 w-36 bg-teal-500/30 rounded mx-auto mb-2" />
                                                        <div className="h-3 w-52 bg-teal-400/20 rounded mx-auto mb-3" />
                                                        <div className="h-8 w-28 bg-teal-500 rounded-full mx-auto pulse-anim" />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Page 3 - Salon */}
                                            <div className="min-w-full h-full p-3 flex flex-col">
                                                <div className="flex items-center justify-between mb-3">
                                                    <div className="h-4 w-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded" />
                                                    <div className="flex gap-2">
                                                        {[1,2,3,4].map((_, i) => (
                                                            <div key={i} className="h-2 w-10 bg-neutral-200 rounded" />
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="flex-1 rounded-lg bg-gradient-to-br from-pink-50 to-purple-100 flex items-center justify-center">
                                                    <div className="text-center">
                                                        <div className="h-6 w-32 bg-pink-500/30 rounded mx-auto mb-2" />
                                                        <div className="h-3 w-48 bg-pink-400/20 rounded mx-auto mb-3" />
                                                        <div className="h-8 w-24 bg-pink-500 rounded-full mx-auto pulse-anim" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right Panel - Properties */}
                            <div className="w-[140px] bg-[#0a0a0f] border-l border-white/5 p-3">
                                <p className="text-[9px] text-neutral-500 uppercase tracking-wider mb-2">Properties</p>
                                <div className="space-y-2">
                                    <div className="p-2 rounded bg-white/[0.03] border border-white/5">
                                        <p className="text-[8px] text-neutral-500 mb-1">Background</p>
                                        <div className="flex gap-1">
                                            {['#D8B4FE', '#FF9132', '#5DDF18', '#fff'].map((c, i) => (
                                                <div key={i} className="w-4 h-4 rounded border border-white/10" style={{ background: c }} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-2 rounded bg-white/[0.03] border border-white/5">
                                        <p className="text-[8px] text-neutral-500 mb-1">Typography</p>
                                        <div className="h-5 bg-white/5 rounded flex items-center px-2">
                                            <span className="text-[8px] text-neutral-400">Inter</span>
                                        </div>
                                    </div>
                                    <div className="p-2 rounded bg-white/[0.03] border border-white/5">
                                        <p className="text-[8px] text-neutral-500 mb-1">Button Style</p>
                                        <div className="h-6 bg-[#D8B4FE] rounded-full flex items-center justify-center">
                                            <span className="text-[8px] text-white font-medium">Get Started</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Label */}
                        <div className="absolute top-3 left-3 z-10">
                            <span className="text-[10px] font-medium text-[#D8B4FE] bg-[#D8B4FE]/10 px-2 py-1 rounded-full border border-[#D8B4FE]/20">
                                Website Editor
                            </span>
                        </div>
                    </div>
                    
                    {/* Small Grid Items */}
                    
                    {/* SEO Score Widget */}
                    <div className="col-span-1 row-span-1 group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#5DDF18]/5 to-transparent p-4">
                        <div className="flex flex-col h-full">
                            <div className="flex items-center gap-2 mb-3">
                                <Search className="w-4 h-4 text-[#5DDF18]" />
                                <span className="text-[10px] text-neutral-400">SEO Score</span>
                            </div>
                            <div className="flex-1 flex items-center justify-center">
                                <div className="relative">
                                    <svg className="w-20 h-20 -rotate-90">
                                        <circle cx="40" cy="40" r="35" fill="none" stroke="rgba(93,223,24,0.1)" strokeWidth="6" />
                                        <circle 
                                            cx="40" cy="40" r="35" 
                                            fill="none" 
                                            stroke="#5DDF18" 
                                            strokeWidth="6"
                                            strokeDasharray="220"
                                            strokeDashoffset="44"
                                            strokeLinecap="round"
                                            className="transition-all duration-1000"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-[#5DDF18]">98</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-[9px] text-center text-neutral-500">Optimized for Google</p>
                        </div>
                    </div>
                    
                    {/* Page Speed Widget */}
                    <div className="col-span-1 row-span-1 group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#FF9132]/5 to-transparent p-4">
                        <div className="flex flex-col h-full">
                            <div className="flex items-center gap-2 mb-3">
                                <TrendingUp className="w-4 h-4 text-[#FF9132]" />
                                <span className="text-[10px] text-neutral-400">Page Speed</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-center gap-2">
                                <div className="text-4xl font-bold text-[#FF9132]">0.8s</div>
                                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full w-[90%] bg-gradient-to-r from-[#5DDF18] to-[#FF9132] rounded-full" />
                                </div>
                            </div>
                            <p className="text-[9px] text-center text-neutral-500">Loads faster than 95% sites</p>
                        </div>
                    </div>
                    
                    {/* Mobile Preview Widget */}
                    <div className="col-span-1 row-span-1 group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#D8B4FE]/5 to-transparent p-4">
                        <div className="flex flex-col h-full items-center">
                            <span className="text-[10px] text-neutral-400 mb-2">Mobile Preview</span>
                            <div className="flex-1 flex items-center justify-center">
                                <div className="w-14 h-24 rounded-lg border-2 border-[#D8B4FE]/30 bg-[#D8B4FE]/5 p-1">
                                    <div className="w-full h-full rounded bg-white/80 flex flex-col p-1 gap-0.5">
                                        <div className="h-1.5 w-6 bg-[#D8B4FE]/40 rounded mx-auto" />
                                        <div className="flex-1 bg-gradient-to-b from-[#D8B4FE]/20 to-transparent rounded" />
                                        <div className="h-2 w-8 bg-[#D8B4FE] rounded-full mx-auto" />
                                    </div>
                                </div>
                            </div>
                            <p className="text-[9px] text-center text-neutral-500">100% Responsive</p>
                        </div>
                    </div>
                    
                    {/* Customer Reviews Widget */}
                    <div className="col-span-1 row-span-1 group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-yellow-500/5 to-transparent p-4">
                        <div className="flex flex-col h-full">
                            <div className="flex items-center gap-2 mb-3">
                                <MessageSquare className="w-4 h-4 text-yellow-500" />
                                <span className="text-[10px] text-neutral-400">Reviews</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-center">
                                <div className="flex gap-0.5 mb-2">
                                    {[1,2,3,4,5].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                    ))}
                                </div>
                                <span className="text-2xl font-bold text-white">4.9</span>
                            </div>
                            <p className="text-[9px] text-center text-neutral-500">Trusted by 500+ businesses</p>
                        </div>
                    </div>
                    
                    {/* Wide Bottom Card - Launch Timeline */}
                    <div className="col-span-2 md:col-span-4 row-span-1 group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#D8B4FE]/5 via-[#FF9132]/5 to-[#5DDF18]/5 p-5">
                        <div className="flex items-center justify-between h-full">
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">From Idea to Live Website</h3>
                                <p className="text-sm text-neutral-400">Your website goes live in just 4 simple steps</p>
                            </div>
                            <div className="flex items-center gap-4">
                                {[
                                    { step: "1", label: "Tell Us Your Vision", color: "#D8B4FE" },
                                    { step: "2", label: "Design & Strategy", color: "#FF9132" },
                                    { step: "3", label: "Build & Refine", color: "#5DDF18" },
                                    { step: "4", label: "Launch & Support", color: "#D8B4FE" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div 
                                            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                                            style={{ background: `${item.color}20`, color: item.color }}
                                        >
                                            {item.step}
                                        </div>
                                        <span className="text-xs text-neutral-300 hidden lg:block">{item.label}</span>
                                        {i < 3 && <div className="w-8 h-px bg-white/10 hidden lg:block" />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
