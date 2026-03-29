import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { Card } from "@/components/ui/card";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { PixelDissolveText } from "@/components/ui/pixel-dissolve-text";
import { Typewriter } from "@/components/ui/typewriter";
import { ProductsSection } from "@/components/ui/products-section";
import AnimatedServiceCardDemo from "@/components/ui/services-card-demo";

const testimonials = [
  {
    quote: "Stairio's AI-native solutions completely overhauled our operational workflow. Accuracy is up, and costs are down.",
    name: "Alex Sterling",
    designation: "CTO, FutureCorp",
    src: "/images/AI IMAGE/1.png"
  },
  {
    quote: "With their autonomous systems, we accelerated our idea-to-execution pipeline by 300%. The future really is here.",
    name: "Samantha Wright",
    designation: "VP of Engineering, Nexa",
    src: "/images/AI IMAGE/2.png"
  },
  {
    quote: "Their team built a highly scalable AI-enabled platform that makes intelligent decision-making feel effortless.",
    name: "Michael Chen",
    designation: "Operations Director, Synth AI",
    src: "/images/AI IMAGE/3.png"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Hero Section with Background Image */}
      <section 
        className="relative h-screen md:min-h-screen flex flex-col"
        style={{
          backgroundImage: 'url(/images/hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center calc(100% + 15px)',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Mobile-only gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90 md:hidden pointer-events-none" />
        
        {/* Mobile-only ambient glow effects */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[250px] h-[250px] bg-[#D8B4FE]/[0.08] rounded-full blur-[80px] md:hidden pointer-events-none" />
        <div className="absolute bottom-[25%] left-1/2 -translate-x-1/2 w-[350px] h-[150px] bg-[#FF9132]/[0.06] rounded-full blur-[60px] md:hidden pointer-events-none" />
        
        {/* Mobile Layout - Ultimate Premium Design */}
        <div className="flex-1 flex flex-col md:hidden relative z-10 overflow-hidden">
          {/* Header spacer */}
          <div className="h-12" />
          
          {/* AI Badge with glow */}
          <div className="flex justify-center mb-4 animate-[fadeInUp_0.5s_ease-out]">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D8B4FE]/25 rounded-full blur-lg scale-150" />
              <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] backdrop-blur-sm">
                <div className="relative flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5DDF18]" />
                  <div className="absolute w-1.5 h-1.5 rounded-full bg-[#5DDF18] animate-ping opacity-75" />
                </div>
                <span className="text-[9px] font-medium text-white/80 tracking-[0.12em]">AI-NATIVE PLATFORM</span>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div className="px-5 text-center animate-[fadeInUp_0.5s_ease-out_0.08s_both]">
            <h1 className="text-[2.2rem] font-bold tracking-[-0.025em] leading-[1.1]">
              <span className="block text-white">The future</span>
              <span className="block text-white">isn't coming.</span>
            </h1>
          </div>

          {/* Animated Headline */}
          <div className="px-5 mt-2 text-center animate-[fadeInUp_0.5s_ease-out_0.12s_both]">
            <div className="text-[2.2rem] font-bold tracking-[-0.025em] leading-[1.1]">
              <PixelDissolveText
                texts={["It's already here.", "It's built on AI.", "It's built by Stairio."]}
                className="text-white"
                interval={5000}
              />
            </div>
          </div>

          {/* Tagline */}
          <div className="px-5 mt-4 text-center animate-[fadeInUp_0.5s_ease-out_0.16s_both]">
            <p className="text-[0.85rem] text-neutral-300 leading-[1.6] italic">
              At Stairio, we build AI-first systems that transform how businesses{" "}
              <span className="inline-block w-[65px] text-center font-semibold text-white not-italic">
                <AnimatedTextCycle
                  words={["operate", "scale", "innovate", "succeed"]}
                  interval={4000}
                  className="text-white"
                />
              </span>
              {" "}— from automation to decision-making at scale.
            </p>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Stats Row */}
          <div className="px-6 mb-6 animate-[fadeInUp_0.5s_ease-out_0.2s_both]">
            <div className="flex justify-between max-w-[260px] mx-auto">
              <div className="text-center">
                <div className="text-[1.2rem] font-bold text-white">10x</div>
                <div className="text-[8px] text-neutral-500 uppercase tracking-wide">Faster</div>
              </div>
              <div className="w-px bg-white/10 self-stretch my-1" />
              <div className="text-center">
                <div className="text-[1.2rem] font-bold text-white">99%</div>
                <div className="text-[8px] text-neutral-500 uppercase tracking-wide">Automated</div>
              </div>
              <div className="w-px bg-white/10 self-stretch my-1" />
              <div className="text-center">
                <div className="text-[1.2rem] font-bold text-white">24/7</div>
                <div className="text-[8px] text-neutral-500 uppercase tracking-wide">Active</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons - Inline */}
          <div className="px-4 mb-2 animate-[fadeInUp_0.5s_ease-out_0.24s_both]">
            <div className="flex flex-row gap-3 justify-center">
              <LiquidMetalButton label="Start Building" />
              <LiquidMetalButton label="Explore" />
            </div>
          </div>

          {/* Trust indicator */}
          <div className="px-6 pb-24 pt-1 animate-[fadeInUp_0.5s_ease-out_0.28s_both]">
            <div className="flex items-center justify-center gap-1.5 text-[9px] text-neutral-500">
              <svg className="w-2.5 h-2.5 text-[#5DDF18]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Trusted by 500+ companies</span>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original design (UNCHANGED) */}
        <div className="hidden md:flex flex-col items-center justify-between flex-1">
          {/* Large Heading - Top Area */}
          <div className="flex items-start justify-center pt-16">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-center px-4 leading-tight">
              The future isn't coming. <br />
              <PixelDissolveText
                texts={["It's already here.", "It's built on AI.", "It's built by Stairio."]}
                className="text-white"
                interval={5000}
              />
            </h1>
          </div>

          {/* Spacer to push content down */}
          <div className="flex-1" />

          {/* Description & Buttons - Bottom Area */}
          <div className="flex flex-col items-center text-center px-6 pb-24">
            <p className="text-lg text-neutral-200 max-w-3xl mb-3 italic leading-relaxed">
              At Stairio, we build AI-first systems that transform how businesses{" "}
              <span className="inline-block w-[70px] text-left">
                <AnimatedTextCycle
                  words={["operate", "scale", "innovate", "succeed"]}
                  interval={4000}
                  className="text-white"
                />
              </span>
              — from automation to decision-making at scale.
            </p>
            <div className="w-full flex justify-center mb-4">
              <p className="text-sm text-neutral-500 max-w-2xl text-left min-h-[2.5em]">
                <Typewriter
                  text={["Not just AI-enabled. AI-native. Every product, every system, built for the next generation of business."]}
                  speed={10}
                  className="text-neutral-500"
                  waitTime={5000}
                  deleteSpeed={5}
                  cursorChar={""}
                />
              </p>
            </div>

            <div className="flex gap-4">
              <LiquidMetalButton label="Start Building" />
              <LiquidMetalButton label="Explore Services" />
            </div>
          </div>
        </div>
      </section>

      {/* 3D Spline Interactive Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12" data-spline-container>
        <div className="relative liquid-glass-card">
          {/* Main Card */}
          <Card className="relative w-full h-auto md:h-[480px] overflow-hidden flex flex-col md:flex-row rounded-3xl bg-[#0d0d0d]/80 border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_20px_50px_-15px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            
            {/* Noise texture overlay */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")'}} />
            
            {/* Glass gradient layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D8B4FE]/[0.03] via-transparent to-[#FF9132]/[0.03] pointer-events-none" />
            
            {/* Top highlight line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            {/* Floating orbs for depth */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-[#D8B4FE]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-40 w-96 h-96 bg-[#FF9132]/10 rounded-full blur-3xl pointer-events-none" />
            
            {/* Content */}
            <div className="flex-1 p-6 sm:p-8 md:p-12 relative z-10 flex flex-col justify-center pointer-events-none order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-3 sm:mb-4">What Is Stairio?</h2>
              <p className="text-sm sm:text-base text-neutral-400 mb-5 sm:mb-6 leading-relaxed max-w-xl">
                Stairio transforms any business into an AI-powered organization with full-stack innovation across intelligent systems, scalable software, and automation-driven solutions. By accelerating the entire operational workflow, Stairio helps ideas move to execution faster - with greater accuracy, efficiency, and system performance, all while reducing overall costs across platforms and applications.
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-3 sm:mb-4">
                Not just AI-enabled.<br/><span className="bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-flow bg-[linear-gradient(90deg,#60a5fa,#a78bfa,#f472b6,#fb923c,#60a5fa)]">AI-native.</span>
              </h2>
              <p className="text-base sm:text-lg text-neutral-400">
                Every product, every system, built for the next generation of business.
              </p>
            </div>
            <div className="flex-1 relative min-h-[320px] sm:min-h-[350px] md:h-full order-1 md:order-2 flex items-center justify-center">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full scale-125 sm:scale-110 md:scale-100"
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Products Section */}
      <ProductsSection />

      <AnimatedServiceCardDemo />

      {/* Solutions - Redesigned */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5DDF18] animate-pulse" />
            <span className="text-xs font-medium text-neutral-400 tracking-wide uppercase">Why Stairio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Built for </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D8B4FE] via-[#FF9132] to-[#D8B4FE]">Impact</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto">
            Three pillars that power every solution we build
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1 - Optimizing Operations */}
          <div className="group relative p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-neutral-900/80 to-neutral-950 border border-white/[0.08] overflow-hidden transition-all duration-500 hover:border-[#D8B4FE]/30 hover:shadow-[0_0_40px_-10px_rgba(216,180,254,0.2)]">
            {/* Gradient orb */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D8B4FE]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Icon */}
            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D8B4FE]/20 to-[#D8B4FE]/5 border border-[#D8B4FE]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-[#D8B4FE]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            
            {/* Number badge */}
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
              <span className="text-xs font-medium text-neutral-500">01</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white group-hover:text-[#D8B4FE] transition-colors duration-300">
              Optimizing Operations
            </h3>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Streamline your entire business workflow to boost efficiency and lower operational costs across all departments.
            </p>
            
            {/* Feature tags */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-white/[0.03] border border-white/[0.06] text-neutral-500">Automation</span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/[0.03] border border-white/[0.06] text-neutral-500">Efficiency</span>
            </div>
          </div>

          {/* Card 2 - Intelligent Platforms */}
          <div className="group relative p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-neutral-900/80 to-neutral-950 border border-white/[0.08] overflow-hidden transition-all duration-500 hover:border-[#FF9132]/30 hover:shadow-[0_0_40px_-10px_rgba(255,145,50,0.2)]">
            {/* Gradient orb */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FF9132]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Icon */}
            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF9132]/20 to-[#FF9132]/5 border border-[#FF9132]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-[#FF9132]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>
            
            {/* Number badge */}
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
              <span className="text-xs font-medium text-neutral-500">02</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white group-hover:text-[#FF9132] transition-colors duration-300">
              Intelligent Platforms
            </h3>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Power your software with scalable, AI-native architectures designed for the next generation of business.
            </p>
            
            {/* Feature tags */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-white/[0.03] border border-white/[0.06] text-neutral-500">AI-Native</span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/[0.03] border border-white/[0.06] text-neutral-500">Scalable</span>
            </div>
          </div>

          {/* Card 3 - Decision-making */}
          <div className="group relative p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-neutral-900/80 to-neutral-950 border border-white/[0.08] overflow-hidden transition-all duration-500 hover:border-[#5DDF18]/30 hover:shadow-[0_0_40px_-10px_rgba(93,223,24,0.2)]">
            {/* Gradient orb */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#5DDF18]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Icon */}
            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#5DDF18]/20 to-[#5DDF18]/5 border border-[#5DDF18]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-[#5DDF18]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
              </svg>
            </div>
            
            {/* Number badge */}
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
              <span className="text-xs font-medium text-neutral-500">03</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white group-hover:text-[#5DDF18] transition-colors duration-300">
              Decision-making
            </h3>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Automate complex decision-making and accelerate the jump from idea to execution with data-driven insights.
            </p>
            
            {/* Feature tags */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-white/[0.03] border border-white/[0.06] text-neutral-500">Analytics</span>
              <span className="px-3 py-1 text-xs rounded-full bg-white/[0.03] border border-white/[0.06] text-neutral-500">Speed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection testimonials={testimonials} />
    </main>
  );
}
