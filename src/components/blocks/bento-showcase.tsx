"use client"

import Image from "next/image"
import { Calendar, Users, Sparkles, MousePointer2, LayoutDashboard, BookOpen, DollarSign, BarChart3, Users2, Brush, Wrench, Settings, TrendingUp, CheckCircle2, XCircle, Clock } from "lucide-react"

export function BentoShowcase() {
    return (
        <section className="py-16 md:py-24 bg-black">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-12 text-center">
                    <p className="text-sm font-medium uppercase tracking-widest text-[#D8B4FE] mb-3">See it in action</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">Built for Modern Hotels</h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 auto-rows-[220px] gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
                    {/* Dashboard - Large hero - ANIMATED */}
                    <div className="row-span-2 group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d12] sm:col-span-2 md:col-span-3">
                        {/* Dashboard CSS Animations */}
                        <style jsx>{`
                            @keyframes lineChart {
                                0%, 100% { stroke-dashoffset: 1000; }
                                50% { stroke-dashoffset: 0; }
                            }
                            @keyframes fadeInUp {
                                0% { opacity: 0; transform: translateY(10px); }
                                100% { opacity: 1; transform: translateY(0); }
                            }
                            @keyframes numberPulse {
                                0%, 100% { transform: scale(1); }
                                50% { transform: scale(1.05); }
                            }
                            @keyframes sparkline {
                                0%, 100% { stroke-dashoffset: 100; }
                                50% { stroke-dashoffset: 0; }
                            }
                            @keyframes donutRotate {
                                0% { stroke-dasharray: 0 100; }
                                50% { stroke-dasharray: 82 100; }
                                100% { stroke-dasharray: 82 100; }
                            }
                            @keyframes pulse {
                                0%, 100% { opacity: 1; transform: scale(1); }
                                50% { opacity: 0.6; transform: scale(1.2); }
                            }
                            @keyframes slideIn {
                                0% { opacity: 0; transform: translateX(-10px); }
                                100% { opacity: 1; transform: translateX(0); }
                            }
                            @keyframes dataUpdate {
                                0%, 90% { opacity: 1; }
                                95% { opacity: 0.5; }
                                100% { opacity: 1; }
                            }
                            @keyframes chartGlow {
                                0%, 100% { filter: drop-shadow(0 0 2px rgba(216,180,254,0.3)); }
                                50% { filter: drop-shadow(0 0 8px rgba(216,180,254,0.6)); }
                            }
                            @keyframes activitySlide {
                                0%, 45% { transform: translateY(0); opacity: 1; }
                                50% { transform: translateY(-100%); opacity: 0; }
                                55% { transform: translateY(100%); opacity: 0; }
                                60%, 100% { transform: translateY(0); opacity: 1; }
                            }
                            .line-anim { stroke-dasharray: 1000; animation: lineChart 8s ease-in-out infinite; }
                            .fade-in { animation: fadeInUp 0.5s ease-out forwards; }
                            .fade-in-1 { animation: fadeInUp 0.5s ease-out 0.1s forwards; opacity: 0; }
                            .fade-in-2 { animation: fadeInUp 0.5s ease-out 0.2s forwards; opacity: 0; }
                            .fade-in-3 { animation: fadeInUp 0.5s ease-out 0.3s forwards; opacity: 0; }
                            .sparkline-anim { stroke-dasharray: 100; animation: sparkline 4s ease-in-out infinite; }
                            .donut-anim { animation: donutRotate 6s ease-out infinite; }
                            .pulse-dot { animation: pulse 2s ease-in-out infinite; }
                            .slide-in { animation: slideIn 0.4s ease-out forwards; }
                            .number-pulse { animation: numberPulse 3s ease-in-out infinite; }
                            .data-update { animation: dataUpdate 5s ease-in-out infinite; }
                            .chart-glow { animation: chartGlow 4s ease-in-out infinite; }
                            .activity-anim { animation: activitySlide 10s ease-in-out infinite; }
                        `}</style>
                        
                        <div className="absolute inset-0 flex">
                            {/* Sidebar */}
                            <div className="flex w-[58px] flex-col gap-1 border-r border-white/5 bg-[#0a0a0f] p-2 sm:w-[140px] sm:p-3">
                                {/* Active - Dashboard */}
                                <div className="flex items-center justify-center gap-2 rounded-lg border border-[#D8B4FE]/20 bg-gradient-to-r from-[#D8B4FE]/20 to-[#D8B4FE]/5 px-2 py-2 sm:justify-start sm:px-2.5 slide-in">
                                    <LayoutDashboard className="w-4 h-4 text-[#D8B4FE]" />
                                    <span className="hidden text-[10px] font-medium text-white sm:inline">Dashboard</span>
                                </div>
                                {/* Other nav items */}
                                {[
                                    { icon: BookOpen, label: "Bookings" },
                                    { icon: DollarSign, label: "Revenue" },
                                    { icon: BarChart3, label: "Occupancy" },
                                    { icon: Users2, label: "Guests" },
                                    { icon: Brush, label: "Housekeeping" },
                                    { icon: Wrench, label: "Maintenance" },
                                    { icon: Settings, label: "Settings" },
                                ].map((item, i) => (
                                    <div key={i} className="flex cursor-pointer items-center justify-center gap-2 rounded-lg px-2 py-1.5 transition-colors hover:bg-white/5 sm:justify-start sm:px-2.5" style={{ animationDelay: `${(i + 1) * 0.1}s` }}>
                                        <item.icon className="w-3.5 h-3.5 text-neutral-500" />
                                        <span className="hidden text-[9px] text-neutral-400 sm:inline">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Main Content */}
                            <div className="flex-1 p-4 overflow-hidden">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-sm font-semibold text-white">Booking Statistics</h3>
                                    <span className="text-[9px] text-neutral-500 data-update">Oct 28, 2023, 10:50 AM</span>
                                </div>
                                
                                {/* Stats Cards Row */}
                                <div className="grid grid-cols-3 gap-3 mb-3">
                                    {/* New Bookings */}
                                    <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16162a] rounded-xl p-3 border border-[#D8B4FE]/10 fade-in-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[9px] text-neutral-400">New Bookings (Today)</span>
                                            <span className="text-[8px] text-neutral-600">•••</span>
                                        </div>
                                        <div className="flex items-end justify-between">
                                            <div>
                                                <span className="text-2xl font-bold text-white number-pulse">24</span>
                                                <span className="text-xs text-[#D8B4FE] ml-1">↑</span>
                                                <p className="text-[8px] text-emerald-400 mt-1">+12% from yesterday</p>
                                            </div>
                                            <svg className="w-16 h-8" viewBox="0 0 50 25">
                                                <path d="M0,20 Q10,18 15,15 T25,12 T35,8 T50,5" fill="none" stroke="#D8B4FE" strokeWidth="1.5" className="sparkline-anim chart-glow" />
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    {/* Confirmed Bookings */}
                                    <div className="bg-gradient-to-br from-[#1a2a1a] to-[#162a16] rounded-xl p-3 border border-emerald-500/10 fade-in-2">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[9px] text-neutral-400">Confirmed Bookings</span>
                                            <span className="text-[8px] text-neutral-600">•••</span>
                                        </div>
                                        <div className="flex items-end justify-between">
                                            <div className="flex items-center gap-1">
                                                <span className="text-2xl font-bold text-white number-pulse">185</span>
                                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                            </div>
                                            <svg className="w-16 h-8" viewBox="0 0 50 25">
                                                <path d="M0,20 Q8,19 12,17 T22,15 T32,10 T42,8 T50,4" fill="none" stroke="#22c55e" strokeWidth="1.5" className="sparkline-anim" style={{ animationDelay: '0.5s' }} />
                                            </svg>
                                        </div>
                                        <p className="text-[8px] text-emerald-400 mt-1">Active</p>
                                    </div>
                                    
                                    {/* Cancelled Bookings */}
                                    <div className="bg-gradient-to-br from-[#2a1a1a] to-[#2a1616] rounded-xl p-3 border border-red-500/10 fade-in-3">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[9px] text-neutral-400">Cancelled Bookings</span>
                                            <span className="text-[8px] text-neutral-600">•••</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="text-2xl font-bold text-white">3</span>
                                            <XCircle className="w-4 h-4 text-red-400 pulse-dot" />
                                        </div>
                                        <p className="text-[8px] text-red-400 mt-1">-3% from last week</p>
                                    </div>
                                </div>
                                
                                {/* Revenue & Occupancy Section */}
                                <div className="flex items-center justify-between mb-2 mt-3">
                                    <h3 className="text-xs font-semibold text-white">Revenue & Occupancy</h3>
                                </div>
                                
                                <div className="grid grid-cols-5 gap-3">
                                    {/* Monthly Revenue Chart */}
                                    <div className="col-span-3 bg-[#12121a] rounded-xl p-3 border border-white/5">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[10px] font-medium text-white">Monthly Revenue</span>
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center gap-1">
                                                    <div className="w-3 h-0.5 bg-[#D8B4FE] rounded"></div>
                                                    <span className="text-[8px] text-neutral-500">Current Year</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="w-3 h-0.5 bg-neutral-600 rounded border-dashed"></div>
                                                    <span className="text-[8px] text-neutral-500">Last Year</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Chart Area */}
                                        <div className="relative h-[90px]">
                                            {/* Y-axis labels */}
                                            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[7px] text-neutral-600 pr-1">
                                                <span>₹750</span>
                                                <span>₹200</span>
                                                <span>₹150</span>
                                                <span>₹100</span>
                                                <span>₹0</span>
                                            </div>
                                            
                                            {/* Chart SVG */}
                                            <svg className="ml-6 w-[calc(100%-24px)] h-full chart-glow" viewBox="0 0 200 70" preserveAspectRatio="none">
                                                {/* Grid lines */}
                                                <line x1="0" y1="14" x2="200" y2="14" stroke="#222" strokeWidth="0.5" />
                                                <line x1="0" y1="28" x2="200" y2="28" stroke="#222" strokeWidth="0.5" />
                                                <line x1="0" y1="42" x2="200" y2="42" stroke="#222" strokeWidth="0.5" />
                                                <line x1="0" y1="56" x2="200" y2="56" stroke="#222" strokeWidth="0.5" />
                                                
                                                {/* Last year line (dashed) */}
                                                <path d="M0,55 Q20,52 40,48 T80,42 T120,35 T160,30 T200,25" fill="none" stroke="#444" strokeWidth="1" strokeDasharray="3,3" />
                                                
                                                {/* Current year line */}
                                                <path d="M0,58 Q20,55 40,50 T80,40 T120,30 T160,18 T200,12" fill="none" stroke="#D8B4FE" strokeWidth="2" className="line-anim" />
                                                
                                                {/* Highlight point */}
                                                <circle cx="160" cy="18" r="4" fill="#D8B4FE" className="pulse-dot" />
                                                
                                                {/* Tooltip */}
                                                <rect x="125" y="0" width="50" height="18" rx="3" fill="#1a1a2e" stroke="#D8B4FE" strokeWidth="0.5" className="data-update" />
                                                <text x="150" y="7" textAnchor="middle" className="text-[5px] fill-neutral-400">October</text>
                                                <text x="150" y="14" textAnchor="middle" className="text-[6px] fill-white font-bold">₹18,800,000</text>
                                            </svg>
                                            
                                            {/* X-axis labels */}
                                            <div className="ml-6 flex justify-between text-[7px] text-neutral-600 mt-1">
                                                <span>Feb</span>
                                                <span>Mar</span>
                                                <span>Apr</span>
                                                <span>May</span>
                                                <span>Jun</span>
                                                <span>Jul</span>
                                                <span>Sep</span>
                                                <span>Oct</span>
                                                <span>Nov</span>
                                            </div>
                                        </div>
                                        
                                        {/* Bottom Stats */}
                                        <div className="flex justify-between mt-2 pt-2 border-t border-white/5">
                                            <div className="data-update">
                                                <p className="text-[7px] text-neutral-500">Total Revenue</p>
                                                <p className="text-[9px] text-white font-semibold">₹196,000,000 <span className="text-emerald-400">↗</span></p>
                                            </div>
                                            <div className="data-update" style={{ animationDelay: '0.5s' }}>
                                                <p className="text-[7px] text-neutral-500">RevPAR</p>
                                                <p className="text-[9px] text-white font-semibold">₹9,600 <span className="text-emerald-400">↗</span></p>
                                            </div>
                                            <div className="data-update" style={{ animationDelay: '1s' }}>
                                                <p className="text-[7px] text-neutral-500">ADR</p>
                                                <p className="text-[9px] text-white font-semibold">₹12,000 <span className="text-emerald-400">↗</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Current Occupancy Donut */}
                                    <div className="col-span-2 bg-[#12121a] rounded-xl p-3 border border-white/5">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[10px] font-medium text-white">Current Occupancy</span>
                                            <span className="text-[8px] text-neutral-600">•••</span>
                                        </div>
                                        
                                        <div className="flex items-center gap-3">
                                            {/* Donut Chart */}
                                            <div className="relative w-20 h-20">
                                                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                                    <circle cx="18" cy="18" r="14" fill="none" stroke="#1a1a1a" strokeWidth="3" />
                                                    {/* Vacant segment */}
                                                    <circle cx="18" cy="18" r="14" fill="none" stroke="#374151" strokeWidth="3" strokeDasharray="8 100" strokeDashoffset="0" />
                                                    {/* Reserved segment */}
                                                    <circle cx="18" cy="18" r="14" fill="none" stroke="#f97316" strokeWidth="3" strokeDasharray="10 100" strokeDashoffset="-8" />
                                                    {/* Occupied segment */}
                                                    <circle cx="18" cy="18" r="14" fill="none" stroke="#22c55e" strokeWidth="3" className="donut-anim" strokeDashoffset="-18" />
                                                </svg>
                                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                    <span className="text-base font-bold text-white number-pulse">82%</span>
                                                    <span className="text-[6px] text-neutral-500">Occupied Rooms</span>
                                                </div>
                                                {/* Percentage labels */}
                                                <span className="absolute top-0 right-0 text-[7px] text-emerald-400 pulse-dot">9%</span>
                                                <span className="absolute top-3 -right-1 text-[7px] text-orange-400">10%</span>
                                            </div>
                                            
                                            {/* Legend */}
                                            <div className="space-y-1.5">
                                                <div className="flex items-center gap-1.5">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                                                    <span className="text-[8px] text-neutral-400">Occupied</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
                                                    <span className="text-[8px] text-neutral-400">Reserved</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
                                                    <span className="text-[8px] text-neutral-400">Vacant</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Room Status */}
                                        <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between">
                                            <span className="text-[8px] text-neutral-500">Room Status</span>
                                            <span className="text-[9px] text-white font-medium data-update">100/220 Rooms</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Bottom Row - Recent Activity & Upcoming */}
                                <div className="grid grid-cols-2 gap-3 mt-3">
                                    {/* Recent Activity */}
                                    <div className="bg-[#12121a] rounded-xl p-3 border border-white/5">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[10px] font-medium text-white">Recent Activity</span>
                                            <span className="text-[8px] text-neutral-600">•••</span>
                                        </div>
                                        <div className="space-y-2 overflow-hidden">
                                            <div className="flex items-center gap-2 activity-anim">
                                                <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                                                    <Clock className="w-2.5 h-2.5 text-orange-400" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-[8px] text-white truncate"><span className="text-orange-400">Vikram Roy</span> - Room 302, John Doe (via Expedia)</p>
                                                </div>
                                                <span className="text-[7px] text-neutral-500 flex-shrink-0">11:57 AM</span>
                                            </div>
                                            <div className="flex items-center gap-2 activity-anim" style={{ animationDelay: '5s' }}>
                                                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-[8px] text-white truncate">Room 105, Sarah Smith</p>
                                                </div>
                                                <span className="text-[7px] text-neutral-500 flex-shrink-0">12:52 PM</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Upcoming Arrivals */}
                                    <div className="bg-[#12121a] rounded-xl p-3 border border-white/5">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[10px] font-medium text-white">Upcoming Arrivals</span>
                                            <span className="text-[8px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full pulse-dot">View All</span>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between data-update">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-5 h-5 rounded-full bg-[#D8B4FE]/20 flex items-center justify-center">
                                                        <Users className="w-2.5 h-2.5 text-[#D8B4FE]" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[8px] text-white font-medium">Ravi Verma</p>
                                                        <p className="text-[6px] text-neutral-500">Booking ID: 562301</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-[6px] text-neutral-400">Room No1</p>
                                                    <p className="text-[5px] text-neutral-500">302 • 10:30 AM</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between data-update" style={{ animationDelay: '2s' }}>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center">
                                                        <Users className="w-2.5 h-2.5 text-orange-400" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[8px] text-white font-medium">Deepa Reddy</p>
                                                        <p className="text-[6px] text-neutral-500">Booking ID: 562302</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-[8px] text-neutral-400">Room No2</p>
                                                    <p className="text-[6px] text-neutral-500">303 • 10:30 AM</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Bottom overlay with label */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 z-10">
                            <p className="text-white font-semibold">Dashboard Overview</p>
                            <p className="text-neutral-400 text-sm">Complete control at your fingertips</p>
                        </div>
                    </div>

                    {/* Booking Widget - Tall - Animated Code Widget */}
                    <div className="row-span-2 group relative flex flex-col overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] p-4 sm:col-span-1">
                        {/* CSS Keyframes */}
                        <style jsx>{`
                            @keyframes cursorMove {
                                0%, 10% { transform: translate(0, 0); opacity: 1; }
                                40%, 50% { transform: translate(70px, 380px); opacity: 1; }
                                52% { transform: translate(70px, 380px) scale(0.9); }
                                54% { transform: translate(70px, 380px) scale(1); }
                                60%, 100% { transform: translate(70px, 380px); opacity: 0; }
                            }
                            @keyframes buttonPress {
                                0%, 38% { transform: scale(1); background: white; color: black; }
                                40%, 50% { transform: scale(1); background: #22c55e; color: white; }
                                52% { transform: scale(0.95); background: #16a34a; color: white; }
                                54% { transform: scale(1); background: #22c55e; color: white; }
                                58%, 100% { transform: scale(1); background: white; color: black; }
                            }
                            @keyframes successOverlay {
                                0%, 54% { opacity: 0; visibility: hidden; }
                                58%, 95% { opacity: 1; visibility: visible; }
                                100% { opacity: 0; visibility: hidden; }
                            }
                            @keyframes checkCircle {
                                0%, 54% { transform: scale(0); opacity: 0; }
                                58% { transform: scale(0); opacity: 0; }
                                68% { transform: scale(1.1); opacity: 1; }
                                75% { transform: scale(1); opacity: 1; }
                                95% { transform: scale(1); opacity: 1; }
                                100% { transform: scale(0); opacity: 0; }
                            }
                            @keyframes checkMark {
                                0%, 68% { stroke-dashoffset: 24; }
                                80%, 95% { stroke-dashoffset: 0; }
                                100% { stroke-dashoffset: 24; }
                            }
                            @keyframes textFade {
                                0%, 70% { opacity: 0; transform: translateY(10px); }
                                80%, 92% { opacity: 1; transform: translateY(0); }
                                100% { opacity: 0; transform: translateY(10px); }
                            }
                            .animate-cursor {
                                animation: cursorMove 5s ease-in-out infinite;
                            }
                            .animate-button {
                                animation: buttonPress 5s ease-in-out infinite;
                            }
                            .animate-overlay {
                                animation: successOverlay 5s ease-in-out infinite;
                            }
                            .animate-check-circle {
                                animation: checkCircle 5s ease-out infinite;
                            }
                            .animate-check-mark {
                                stroke-dasharray: 24;
                                stroke-dashoffset: 24;
                                animation: checkMark 5s ease-out infinite;
                            }
                            .animate-text {
                                animation: textFade 5s ease-out infinite;
                            }
                        `}</style>
                        
                        {/* Subtle decorative glow */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#D8B4FE]/15 rounded-full blur-3xl" />
                        <div className="absolute bottom-20 left-0 w-16 h-16 bg-white/5 rounded-full blur-2xl" />
                        
                        {/* Header */}
                        <div className="relative z-10 flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D8B4FE] via-[#c4a5f7] to-[#9b7fe6] flex items-center justify-center shadow-lg shadow-[#D8B4FE]/20 ring-1 ring-white/20">
                                <Sparkles className="w-4.5 h-4.5 text-white drop-shadow-sm" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-sm tracking-tight">Book Your Stay</span>
                                <span className="text-neutral-500 text-[9px] uppercase tracking-wider">Instant Confirmation</span>
                            </div>
                        </div>
                        
                        {/* Check-in / Check-out */}
                        <div className="relative z-10 space-y-2 flex-1">
                            <div className="bg-white/[0.08] rounded-xl p-2.5 border border-white/15 shadow-sm">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-3.5 h-3.5 text-[#D8B4FE]" />
                                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-medium">Check-in</span>
                                </div>
                                <p className="text-white text-sm font-semibold mt-0.5">Mar 28, 2026</p>
                            </div>
                            
                            <div className="bg-white/[0.08] rounded-xl p-2.5 border border-white/15 shadow-sm">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-3.5 h-3.5 text-[#D8B4FE]" />
                                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-medium">Check-out</span>
                                </div>
                                <p className="text-white text-sm font-semibold mt-0.5">Mar 31, 2026</p>
                            </div>
                            
                            {/* Guests */}
                            <div className="bg-white/[0.08] rounded-xl p-2.5 border border-white/15 shadow-sm">
                                <div className="flex items-center gap-2">
                                    <Users className="w-3.5 h-3.5 text-[#D8B4FE]" />
                                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-medium">Guests</span>
                                </div>
                                <p className="text-white text-sm font-semibold mt-0.5">2 Adults, 1 Child</p>
                            </div>
                            
                            {/* Price indicator */}
                            <div className="flex items-center justify-between pt-1 px-1">
                                <span className="text-[10px] text-neutral-400 font-medium">3 nights</span>
                                <span className="text-[#D8B4FE] font-bold text-sm">₹12,500</span>
                            </div>
                        </div>
                        
                        {/* Book Button */}
                        <div className="relative z-10 w-full mt-2 py-2.5 rounded-xl bg-white text-black text-sm font-bold text-center animate-button shadow-lg shadow-white/10">
                            Book Now
                        </div>
                        
                        {/* Label */}
                        <div className="relative z-10 mt-2 text-center">
                            <p className="text-neutral-500 text-xs font-medium">Booking Widget</p>
                        </div>
                        
                        {/* Animated Mouse Cursor */}
                        <div className="absolute top-4 left-2 z-30 animate-cursor">
                            <MousePointer2 className="w-7 h-7 text-white fill-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                        </div>
                        
                        {/* Success Overlay */}
                        <div className="absolute inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center rounded-2xl animate-overlay opacity-0 invisible">
                            {/* Animated Check Circle */}
                            <div className="relative animate-check-circle">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                                        <path 
                                            d="M5 13l4 4L19 7" 
                                            stroke="white" 
                                            strokeWidth="3" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                            className="animate-check-mark"
                                        />
                                    </svg>
                                </div>
                                {/* Ripple effect */}
                                <div className="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping" />
                            </div>
                            
                            {/* Success Text */}
                            <div className="mt-4 text-center animate-text">
                                <p className="text-emerald-400 text-xs font-medium uppercase tracking-wider mb-1">Payment Received</p>
                                <p className="text-white text-2xl font-bold">₹12,500</p>
                            </div>
                        </div>
                    </div>

                    {/* Hotel Website */}
                    <div className="row-span-2 group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111] sm:col-span-2">
                        <Image
                            src="/images/showcase/Hotel Website.png"
                            alt="Hotel Website"
                            fill
                            className="object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                        <div className="absolute bottom-4 left-4 z-10">
                            <p className="text-white font-semibold">Hotel Website</p>
                            <p className="text-neutral-400 text-sm">Worth ₹32,999 - Free</p>
                        </div>
                    </div>

                    {/* Mobile */}
                    <div className="row-span-2 group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111] sm:col-span-1">
                        <Image
                            src="/images/showcase/Mobile Ready.png"
                            alt="Mobile Ready"
                            fill
                            className="object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                        <div className="absolute bottom-3 left-3 z-10">
                            <p className="text-white text-sm font-semibold">Mobile</p>
                        </div>
                    </div>

                    {/* Room Status */}
                    <div className="row-span-1 group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111] sm:col-span-1">
                        <Image
                            src="/images/showcase/Room Status.png"
                            alt="Room Status"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                        <div className="absolute bottom-3 left-3 z-10">
                            <p className="text-white text-sm font-semibold">Room Status</p>
                        </div>
                    </div>

                    {/* Analytics - Animated Multi-Screen Widget */}
                    <div className="row-span-1 group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-[#151515] via-[#1a1a1a] to-[#0d0d0d] p-3 sm:col-span-1">
                        {/* CSS Keyframes for Analytics */}
                        <style jsx>{`
                            @keyframes screenFade {
                                0%, 22% { opacity: 1; transform: scale(1); }
                                25%, 97% { opacity: 0; transform: scale(0.95); }
                                100% { opacity: 1; transform: scale(1); }
                            }
                            @keyframes screenFade2 {
                                0%, 22% { opacity: 0; transform: scale(0.95); }
                                25%, 47% { opacity: 1; transform: scale(1); }
                                50%, 100% { opacity: 0; transform: scale(0.95); }
                            }
                            @keyframes screenFade3 {
                                0%, 47% { opacity: 0; transform: scale(0.95); }
                                50%, 72% { opacity: 1; transform: scale(1); }
                                75%, 100% { opacity: 0; transform: scale(0.95); }
                            }
                            @keyframes screenFade4 {
                                0%, 72% { opacity: 0; transform: scale(0.95); }
                                75%, 97% { opacity: 1; transform: scale(1); }
                                100% { opacity: 0; transform: scale(0.95); }
                            }
                            @keyframes barGrow { 
                                0% { transform: scaleY(0); } 
                                100% { transform: scaleY(1); } 
                            }
                            @keyframes numberCount {
                                0% { opacity: 0; transform: translateY(5px); }
                                100% { opacity: 1; transform: translateY(0); }
                            }
                            @keyframes shimmer {
                                0% { background-position: -100% 0; }
                                100% { background-position: 100% 0; }
                            }
                            @keyframes glow {
                                0%, 100% { box-shadow: 0 0 10px rgba(216,180,254,0.3); }
                                50% { box-shadow: 0 0 20px rgba(216,180,254,0.5); }
                            }
                            @keyframes dotActive1 { 0%, 22% { background: white; } 25%, 100% { background: rgba(255,255,255,0.3); } }
                            @keyframes dotActive2 { 0%, 22% { background: rgba(255,255,255,0.3); } 25%, 47% { background: white; } 50%, 100% { background: rgba(255,255,255,0.3); } }
                            @keyframes dotActive3 { 0%, 47% { background: rgba(255,255,255,0.3); } 50%, 72% { background: white; } 75%, 100% { background: rgba(255,255,255,0.3); } }
                            @keyframes dotActive4 { 0%, 72% { background: rgba(255,255,255,0.3); } 75%, 97% { background: white; } 100% { background: rgba(255,255,255,0.3); } }
                            .analytics-screen-1 { animation: screenFade 16s ease-in-out infinite; }
                            .analytics-screen-2 { animation: screenFade2 16s ease-in-out infinite; }
                            .analytics-screen-3 { animation: screenFade3 16s ease-in-out infinite; }
                            .analytics-screen-4 { animation: screenFade4 16s ease-in-out infinite; }
                            .bar-anim { transform-origin: bottom; animation: barGrow 0.8s ease-out forwards; }
                            .number-anim { animation: numberCount 0.5s ease-out forwards; }
                            .shimmer-effect { 
                                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
                                background-size: 200% 100%;
                                animation: shimmer 2s infinite;
                            }
                            .glow-effect { animation: glow 2s ease-in-out infinite; }
                            .dot-1 { animation: dotActive1 16s ease-in-out infinite; }
                            .dot-2 { animation: dotActive2 16s ease-in-out infinite; }
                            .dot-3 { animation: dotActive3 16s ease-in-out infinite; }
                            .dot-4 { animation: dotActive4 16s ease-in-out infinite; }
                        `}</style>
                        
                        {/* Decorative glows */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-[#D8B4FE]/15 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-12 h-12 bg-emerald-500/10 rounded-full blur-2xl" />
                        
                        {/* Screen 1: Revenue Chart - Premium Design */}
                        <div className="absolute inset-3 analytics-screen-1">
                            <div className="flex items-center justify-between mb-1.5">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[#D8B4FE] to-[#a78bfa] flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                    <span className="text-[10px] text-white font-semibold">Revenue</span>
                                </div>
                                <span className="text-[8px] text-emerald-400 font-bold bg-emerald-400/15 px-1.5 py-0.5 rounded-full border border-emerald-400/20">↑ 28%</span>
                            </div>
                            <div className="bg-white/[0.03] rounded-lg p-2 border border-white/5">
                                <div className="flex items-end justify-between h-[50px] gap-1.5">
                                    <div className="flex-1 flex flex-col items-center gap-0.5">
                                        <div className="w-full bg-gradient-to-t from-[#D8B4FE]/40 to-[#D8B4FE] rounded-t bar-anim" style={{height: '35%'}}></div>
                                        <span className="text-[7px] text-neutral-500">Jan</span>
                                    </div>
                                    <div className="flex-1 flex flex-col items-center gap-0.5">
                                        <div className="w-full bg-gradient-to-t from-[#D8B4FE]/50 to-[#D8B4FE] rounded-t bar-anim" style={{height: '55%', animationDelay: '0.1s'}}></div>
                                        <span className="text-[7px] text-neutral-500">Feb</span>
                                    </div>
                                    <div className="flex-1 flex flex-col items-center gap-0.5">
                                        <div className="w-full bg-gradient-to-t from-[#D8B4FE]/60 to-[#D8B4FE] rounded-t bar-anim" style={{height: '75%', animationDelay: '0.2s'}}></div>
                                        <span className="text-[7px] text-neutral-500">Mar</span>
                                    </div>
                                    <div className="flex-1 flex flex-col items-center gap-0.5">
                                        <div className="w-full bg-gradient-to-t from-emerald-500/70 to-emerald-400 rounded-t bar-anim glow-effect" style={{height: '95%', animationDelay: '0.3s'}}></div>
                                        <span className="text-[7px] text-emerald-400 font-medium">Apr</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-1.5 flex items-center justify-between">
                                <span className="text-[8px] text-neutral-500">Total: <span className="text-white font-semibold">₹4.2L</span></span>
                                <div className="flex items-center gap-1">
                                    <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></div>
                                    <span className="text-[7px] text-neutral-500">Live</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Screen 2: Occupancy - Enhanced Donut */}
                        <div className="absolute inset-3 analytics-screen-2 opacity-0">
                            <div className="flex items-center justify-between mb-1.5">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-5 h-5 rounded-md bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <span className="text-[10px] text-white font-semibold">Occupancy</span>
                                </div>
                                <div className="flex items-center gap-1 bg-[#D8B4FE]/10 px-1.5 py-0.5 rounded-full">
                                    <div className="w-1 h-1 rounded-full bg-[#D8B4FE] animate-pulse"></div>
                                    <span className="text-[8px] text-[#D8B4FE] font-medium">Real-time</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="relative w-16 h-16">
                                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                        <circle cx="18" cy="18" r="14" fill="none" stroke="#1a1a1a" strokeWidth="3"/>
                                        <circle cx="18" cy="18" r="14" fill="none" stroke="#2a2a2a" strokeWidth="3"/>
                                        <circle cx="18" cy="18" r="14" fill="none" stroke="url(#occupancyGrad)" strokeWidth="3" strokeDasharray="72 100" strokeLinecap="round" className="drop-shadow-[0_0_6px_rgba(34,197,94,0.5)]"/>
                                        <defs>
                                            <linearGradient id="occupancyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#22c55e"/>
                                                <stop offset="100%" stopColor="#D8B4FE"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-white text-base font-bold number-anim">82%</span>
                                        <span className="text-[7px] text-neutral-500">filled</span>
                                    </div>
                                </div>
                                <div className="flex-1 space-y-1.5">
                                    <div className="flex items-center justify-between bg-white/[0.03] rounded-md px-2 py-1 border border-white/5">
                                        <div className="flex items-center gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                                            <span className="text-[8px] text-neutral-400">Occupied</span>
                                        </div>
                                        <span className="text-[9px] text-white font-semibold">164</span>
                                    </div>
                                    <div className="flex items-center justify-between bg-white/[0.03] rounded-md px-2 py-1 border border-white/5">
                                        <div className="flex items-center gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#D8B4FE]"></div>
                                            <span className="text-[8px] text-neutral-400">Available</span>
                                        </div>
                                        <span className="text-[9px] text-white font-semibold">36</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Screen 3: Today's Dashboard - Premium Stats */}
                        <div className="absolute inset-3 analytics-screen-3 opacity-0">
                            <div className="flex items-center justify-between mb-1.5">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-5 h-5 rounded-md bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span className="text-[10px] text-white font-semibold">Today</span>
                                </div>
                                <span className="text-[8px] text-blue-400 font-medium">Mar 26</span>
                            </div>
                            <div className="grid grid-cols-2 gap-1.5">
                                <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-lg p-2 border border-emerald-500/20 relative overflow-hidden">
                                    <div className="shimmer-effect absolute inset-0"></div>
                                    <p className="text-emerald-400 text-lg font-bold number-anim relative z-10">24</p>
                                    <p className="text-[7px] text-emerald-400/70 uppercase font-medium relative z-10">Check-ins</p>
                                </div>
                                <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-lg p-2 border border-orange-500/20 relative overflow-hidden">
                                    <div className="shimmer-effect absolute inset-0"></div>
                                    <p className="text-orange-400 text-lg font-bold number-anim relative z-10">18</p>
                                    <p className="text-[7px] text-orange-400/70 uppercase font-medium relative z-10">Check-outs</p>
                                </div>
                            </div>
                            <div className="mt-1.5 bg-gradient-to-r from-[#D8B4FE]/10 via-[#D8B4FE]/5 to-transparent rounded-lg px-2 py-1.5 border border-[#D8B4FE]/20 flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                    <span className="text-[8px] text-[#D8B4FE]">Today&apos;s Revenue</span>
                                </div>
                                <span className="text-[11px] text-white font-bold">₹1,24,500</span>
                            </div>
                        </div>
                        
                        {/* Screen 4: Performance Trends */}
                        <div className="absolute inset-3 analytics-screen-4 opacity-0">
                            <div className="flex items-center justify-between mb-1.5">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[#D8B4FE] to-purple-600 flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <span className="text-[10px] text-white font-semibold">Weekly</span>
                                </div>
                                <span className="text-[8px] text-emerald-400 font-bold">↑ 15%</span>
                            </div>
                            <div className="bg-white/[0.02] rounded-lg p-1.5 border border-white/5">
                                <div className="h-[45px] flex items-end gap-0.5 relative">
                                    {/* Line chart effect */}
                                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                                        <polyline
                                            fill="none"
                                            stroke="url(#lineGrad)"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            points="5,40 20,35 35,38 50,25 65,28 80,18 95,20 110,12 125,15 140,8"
                                            className="drop-shadow-[0_0_4px_rgba(216,180,254,0.5)]"
                                        />
                                        <defs>
                                            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#D8B4FE"/>
                                                <stop offset="100%" stopColor="#22c55e"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    {[25, 35, 30, 50, 45, 65, 60, 80, 75, 90].map((h, i) => (
                                        <div key={i} className="flex-1 bg-gradient-to-t from-[#D8B4FE]/20 to-[#D8B4FE]/5 rounded-t" style={{height: `${h}%`}}></div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-1 flex items-center justify-between px-0.5">
                                <div className="flex items-center gap-1">
                                    <span className="text-[7px] text-neutral-500">Mon</span>
                                    <span className="text-[7px] text-neutral-600">•</span>
                                    <span className="text-[7px] text-neutral-500">Sun</span>
                                </div>
                                <span className="text-[8px] text-white font-semibold">₹8.5L <span className="text-neutral-500 font-normal">total</span></span>
                            </div>
                        </div>
                        
                        {/* Bottom Label */}
                        <div className="absolute bottom-2 left-3 z-10">
                            <p className="text-white text-[11px] font-bold tracking-tight">Analytics</p>
                        </div>
                        
                        {/* Animated Progress Dots */}
                        <div className="absolute bottom-2 right-3 flex gap-1 z-10">
                            <div className="w-1.5 h-1.5 rounded-full dot-1 transition-colors"></div>
                            <div className="w-1.5 h-1.5 rounded-full dot-2 transition-colors"></div>
                            <div className="w-1.5 h-1.5 rounded-full dot-3 transition-colors"></div>
                            <div className="w-1.5 h-1.5 rounded-full dot-4 transition-colors"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
