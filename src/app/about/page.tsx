import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Stairio",
  description:
    "Learn how Stairio designs AI-native products, automation systems, and modern software for ambitious businesses.",
};

const principles = [
  {
    title: "AI-Native Thinking",
    description:
      "We do not bolt AI onto old systems. We design products and workflows around intelligence from the start.",
    icon: BrainCircuit,
  },
  {
    title: "Execution Over Hype",
    description:
      "Every engagement is grounded in practical outcomes, measurable efficiency, and systems teams can actually use.",
    icon: Rocket,
  },
  {
    title: "Products With Depth",
    description:
      "From SmartSite to Hotelio, we build experiences that feel polished on the surface and resilient underneath.",
    icon: Layers3,
  },
  {
    title: "Trusted Delivery",
    description:
      "We care about clean execution, clear communication, and long-term reliability after launch.",
    icon: ShieldCheck,
  },
];

const timeline = [
  {
    step: "01",
    title: "Understand the business",
    description:
      "We start with how your team operates today, where friction lives, and what growth actually looks like.",
  },
  {
    step: "02",
    title: "Design the right system",
    description:
      "We shape the product, workflow, or automation around your business model instead of forcing a template.",
  },
  {
    step: "03",
    title: "Build with clarity",
    description:
      "Our team ships the platform, experience, or AI layer with a strong focus on usability, speed, and scale.",
  },
  {
    step: "04",
    title: "Improve continuously",
    description:
      "After launch, we keep refining the product based on performance, team feedback, and customer behavior.",
  },
];

const stats = [
  { value: "AI-first", label: "Products and services built with intelligence at the core" },
  { value: "Full-stack", label: "From interfaces and APIs to workflow and automation logic" },
  { value: "Outcome-led", label: "Focused on growth, speed, clarity, and operational leverage" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-40 bg-gradient-to-b from-[#D8B4FE]/50 to-transparent" />
        <div className="absolute top-40 left-[12%] w-[420px] h-[420px] bg-[#D8B4FE]/[0.08] rounded-full blur-[120px]" />
        <div className="absolute top-[28rem] right-[10%] w-[420px] h-[420px] bg-[#FF9132]/[0.08] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-1/3 w-[360px] h-[360px] bg-[#5DDF18]/[0.05] rounded-full blur-[120px]" />
      </div>

      <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-18 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#5DDF18] animate-pulse" />
              <span className="text-xs font-medium text-neutral-400 tracking-wide uppercase">
                About Stairio
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
              <span className="text-white">Building the next layer of </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D8B4FE] via-[#FF9132] to-[#D8B4FE]">
                AI-native business systems
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
              Stairio helps modern businesses design, launch, and scale products that feel
              intelligent from day one, from automation engines and agent workflows to polished
              software platforms and growth-focused digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mt-12 sm:mt-14">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="rounded-3xl bg-[#0d0d0d]/80 border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl"
              >
                <CardContent className="p-6 sm:p-7">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-8">
            <Card className="rounded-3xl bg-[#0d0d0d]/80 border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl overflow-hidden">
              <CardContent className="relative p-7 sm:p-9">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 tracking-wide uppercase mb-5">
                    <Sparkles className="w-4 h-4 text-[#D8B4FE]" />
                    Why we exist
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
                    We build systems that make teams faster, clearer, and more confident.
                  </h2>
                  <div className="space-y-4 text-neutral-400 leading-relaxed">
                    <p>
                      Businesses do not need more disconnected tools. They need products,
                      workflows, and experiences that work together cleanly.
                    </p>
                    <p>
                      Stairio was created to bridge that gap with AI-native thinking, sharp product
                      execution, and software that helps teams move from idea to execution without
                      unnecessary friction.
                    </p>
                    <p>
                      Whether we are building Hotelio, SmartSite, an automation workflow, or a
                      custom platform, the goal stays the same: make technology feel like leverage,
                      not overhead.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-6">
              <Card className="rounded-3xl bg-[#0d0d0d]/80 border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl">
                <CardContent className="p-7">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D8B4FE]/25 to-[#FF9132]/25 border border-white/10 flex items-center justify-center mb-5">
                    <Workflow className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">What we build</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    AI automation, business systems, agent workflows, full-stack software, and
                    modern web experiences designed for real growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl bg-[#0d0d0d]/80 border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl">
                <CardContent className="p-7">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#5DDF18]/20 to-[#D8B4FE]/20 border border-white/10 flex items-center justify-center mb-5">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Who we build for</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Founders, operators, and growing teams who want software and AI to create
                    momentum, not complexity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#5DDF18] animate-pulse" />
              <span className="text-xs font-medium text-neutral-400 tracking-wide uppercase">
                Our Principles
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">How we think, </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D8B4FE] via-[#FF9132] to-[#D8B4FE]">
                build, and deliver
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <Card
                  key={principle.title}
                  className="rounded-3xl bg-[#0d0d0d]/80 border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl"
                >
                  <CardContent className="p-6 sm:p-7">
                    <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{principle.title}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">{principle.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#5DDF18] animate-pulse" />
                <span className="text-xs font-medium text-neutral-400 tracking-wide uppercase">
                  How We Work
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Clear process, strong execution, better outcomes.
              </h2>
              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-xl">
                We keep our process collaborative and focused so teams know what is being built,
                why it matters, and how it supports business growth.
              </p>
            </div>

            <div className="space-y-4">
              {timeline.map((item) => (
                <Card
                  key={item.step}
                  className="rounded-3xl bg-[#0d0d0d]/80 border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl"
                >
                  <CardContent className="p-6 sm:p-7 flex gap-5">
                    <div className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 min-w-12">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Card className="rounded-[2rem] bg-[#0d0d0d]/85 border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_-20px_rgba(0,0,0,0.65)] backdrop-blur-xl overflow-hidden">
            <CardContent className="relative p-8 sm:p-10 md:p-12 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D8B4FE]/[0.06] via-transparent to-[#FF9132]/[0.06] pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#D8B4FE]/25 to-[#FF9132]/25 border border-white/10 flex items-center justify-center mb-6">
                  <Bot className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                  Ready to build with Stairio?
                </h2>
                <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                  If you are exploring a new product, a smarter digital experience, or an AI-native
                  workflow, we would love to shape it with you.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href="/quote">
                      Start a Project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.08]"
                  >
                    <Link href="/#products-section">Explore Products</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
