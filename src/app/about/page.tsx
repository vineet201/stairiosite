import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  CheckCircle2,
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
    "Learn how Stairio builds AI-native products for Indian service businesses, MSMEs, hospitality operators, and modern teams.",
};

const principles = [
  {
    title: "AI-Native Thinking",
    description:
      "We design products, workflows, and operating layers around useful intelligence from the start.",
    icon: BrainCircuit,
  },
  {
    title: "Measurable Outcomes",
    description:
      "Every product direction is tied to clearer operations, better conversion, or less manual work.",
    icon: Rocket,
  },
  {
    title: "Products With Depth",
    description:
      "From SmartSite to Hotelify, we build experiences that feel polished on the surface and resilient underneath.",
    icon: Layers3,
  },
  {
    title: "Responsible AI",
    description:
      "AI should support operators with clear data ownership, human oversight, and practical guardrails.",
    icon: ShieldCheck,
  },
];

const timeline = [
  {
    step: "01",
    title: "Prototype",
    description:
      "Shape the product wedge, core workflow, and first useful AI layer around a real operator problem.",
  },
  {
    step: "02",
    title: "Validate",
    description:
      "Test the workflow with demos, interviews, pilot targets, and evidence that the solution is usable.",
  },
  {
    step: "03",
    title: "Commercialize",
    description:
      "Package the product, pricing, onboarding, and support model so customers can adopt it repeatedly.",
  },
  {
    step: "04",
    title: "Scale",
    description:
      "Improve the shared technology core, integrations, analytics, and deployment playbooks across products.",
  },
];

const stats = [
  { value: "India-first", label: "Built around hospitality, service MSMEs, sales teams, and operators" },
  { value: "Product-led", label: "Reusable platforms supported by AI agents, workflows, and dashboards" },
  { value: "Pilot-ready", label: "Structured for prototypes, product trials, market entry, and scale" },
];

const thesisPillars = [
  {
    title: "Vertical SaaS",
    description:
      "Focused product systems for categories such as hospitality, service businesses, fitness, and sales operations.",
  },
  {
    title: "AI Agents",
    description:
      "Voice, chat, follow-up, and workflow agents that reduce repetitive work while keeping operators in control.",
  },
  {
    title: "Workflow Automation",
    description:
      "Booking, lead, customer, revenue, and internal process flows that move work through a repeatable system.",
  },
  {
    title: "Data Layer",
    description:
      "Dashboards, customer records, activity history, and insights that make business operations easier to measure.",
  },
];

const companyFacts = [
  "AI-native product company focused on Indian service businesses.",
  "Current product directions include Hotelify, SmartSite, AI Voice Agent, Kore, and SalesPro.",
  "Technology focus areas include AI agents, workflow automation, dashboards, and integrations.",
  "Public claims avoid unverified DPIIT, funding, revenue, customer-count, or certification statements.",
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
                India-first AI products
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
              Stairio builds AI-native products for Indian service businesses that still depend on
              manual work, fragmented tools, and disconnected customer journeys.
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
                    We exist to make AI useful for operators, not just impressive in demos.
                  </h2>
                  <div className="space-y-4 text-neutral-400 leading-relaxed">
                    <p>
                      Many Indian hotels, gyms, agencies, clinics, local service businesses, and
                      sales teams still run on calls, spreadsheets, manual follow-ups, and isolated
                      software.
                    </p>
                    <p>
                      Stairio was created to turn those repeated problems into deployable product
                      systems: vertical software, AI agents, workflow automation, and dashboards
                      that can be piloted, measured, improved, and scaled.
                    </p>
                    <p>
                      Our first wedge is hospitality and service MSMEs, where better direct revenue
                      capture, faster response times, and cleaner operations can create visible
                      business impact.
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
                    Productized AI systems such as Hotelify, SmartSite, AI Voice Agent, Kore, and
                    SalesPro, supported by shared workflow, data, and automation layers.
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
                    Indian service operators, MSMEs, founders, and sales teams that need practical
                    technology adoption without enterprise complexity.
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
                Company Thesis
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Vertical products, </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D8B4FE] via-[#FF9132] to-[#D8B4FE]">
                reusable AI core
              </span>
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              Stairio is structured as a product studio with shared technology primitives that can
              support multiple service-business categories over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
            {thesisPillars.map((pillar) => (
              <Card
                key={pillar.title}
                className="rounded-3xl bg-[#0d0d0d]/80 border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl"
              >
                <CardContent className="p-6 sm:p-7">
                  <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-5 h-5 text-[#5DDF18]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{pillar.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <Card className="rounded-3xl bg-[#0d0d0d]/80 border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl">
              <CardContent className="p-7 sm:p-9">
                <div className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 tracking-wide uppercase mb-5">
                  <Rocket className="w-4 h-4 text-[#FF9132]" />
                  Mission
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Make AI deployable for everyday Indian business operations.
                </h2>
                <p className="text-neutral-400 leading-relaxed">
                  We want operators to use AI inside real workflows: responding to leads, managing
                  bookings, following up with customers, tracking revenue, and reducing repetitive
                  manual work.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl bg-[#0d0d0d]/80 border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl">
              <CardContent className="p-7 sm:p-9">
                <div className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 tracking-wide uppercase mb-5">
                  <Sparkles className="w-4 h-4 text-[#D8B4FE]" />
                  Vision
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Build category-defining AI-native operating systems.
                </h2>
                <p className="text-neutral-400 leading-relaxed">
                  Our long-term direction is a portfolio of focused products that help service
                  businesses digitize, automate, commercialize, and grow with software-led leverage.
                </p>
              </CardContent>
            </Card>
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
                Prototype, validate, commercialize, and scale.
              </h2>
              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-xl">
                Our working model keeps product depth, market validation, and deployment readiness
                visible at each stage.
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

      <section className="relative py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Card className="rounded-3xl bg-[#0d0d0d]/80 border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl overflow-hidden">
            <CardContent className="relative p-7 sm:p-9">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-10">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 tracking-wide uppercase mb-5">
                    <Building2 className="w-4 h-4 text-[#5DDF18]" />
                    Company Facts
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                    Factual positioning, without unverified claims.
                  </h2>
                  <p className="text-neutral-400 leading-relaxed">
                    These are the public facts this page can safely communicate until incorporation,
                    DPIIT, customer, revenue, or certification details are confirmed by the founder.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {companyFacts.map((fact) => (
                    <div
                      key={fact}
                      className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 text-sm text-neutral-300 leading-relaxed"
                    >
                      {fact}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
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
                  If you are exploring a product pilot, service-business automation, or an
                  AI-native workflow, we would love to shape it with you.
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
