import {
  BarChart3,
  Bot,
  BrainCircuit,
  Building2,
  Layers3,
  Rocket,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type CoreItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
};

const technologyCore: CoreItem[] = [
  {
    title: "AI Workflow Engine",
    description:
      "Reusable workflow logic for bookings, follow-ups, approvals, support, and operator tasks.",
    icon: Workflow,
    accent: "#D8B4FE",
  },
  {
    title: "Agent Layer",
    description:
      "Voice, chat, and task agents designed around business context instead of generic prompts.",
    icon: Bot,
    accent: "#FF9132",
  },
  {
    title: "Business Data Layer",
    description:
      "Structured records for guests, leads, rooms, invoices, activity, and revenue signals.",
    icon: Layers3,
    accent: "#5DDF18",
  },
  {
    title: "Decision Dashboards",
    description:
      "Operational views that help owners see revenue, workload, demand, and next actions.",
    icon: BarChart3,
    accent: "#7DD3FC",
  },
];

const impactItems: CoreItem[] = [
  {
    title: "Digitize MSME Operations",
    description:
      "Move high-frequency service business workflows from calls, spreadsheets, and manual handoffs into one system.",
    icon: Building2,
    accent: "#D8B4FE",
  },
  {
    title: "Reduce Manual Coordination",
    description:
      "Automate repetitive guest, lead, payment, reminder, and staff coordination workflows.",
    icon: BrainCircuit,
    accent: "#FF9132",
  },
  {
    title: "Improve Revenue Visibility",
    description:
      "Give operators clearer signals across occupancy, pipeline, pricing, follow-ups, and conversion.",
    icon: BarChart3,
    accent: "#5DDF18",
  },
];

const roadmap = [
  {
    phase: "01",
    title: "PoC",
    description: "Validate one painful workflow with a focused AI-enabled product slice.",
  },
  {
    phase: "02",
    title: "Trials",
    description: "Test with real operators, collect feedback, and improve the workflow loop.",
  },
  {
    phase: "03",
    title: "Market Entry",
    description: "Package the product, onboarding, support, pricing, and success metrics.",
  },
  {
    phase: "04",
    title: "Scale",
    description: "Repeat the system across similar businesses, sectors, and product modules.",
  },
];

function SectionBadge({ label }: { label: string }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2">
      <div className="h-1.5 w-1.5 rounded-full bg-[#5DDF18] animate-pulse" />
      <span className="text-xs font-medium uppercase tracking-wide text-neutral-400">
        {label}
      </span>
    </div>
  );
}

function CoreCard({ item }: { item: CoreItem }) {
  const Icon = item.icon;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-neutral-900/80 to-neutral-950 p-6 transition-all duration-300 hover:border-white/[0.16] hover:bg-white/[0.04]">
      <div
        className="absolute inset-x-0 top-0 h-px opacity-70"
        style={{
          background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)`,
        }}
      />
      <div className="relative">
        <div
          className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border"
          style={{
            borderColor: `${item.accent}33`,
            backgroundColor: `${item.accent}14`,
            color: item.accent,
          }}
        >
          <Icon className="h-5 w-5" strokeWidth={1.7} />
        </div>
        <h3 className="mb-3 text-lg font-semibold text-white">{item.title}</h3>
        <p className="text-sm leading-relaxed text-neutral-400">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export function HomeProductPositioning() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mb-10 text-center sm:mb-14">
          <SectionBadge label="Technology Core" />
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            <span className="text-white">Reusable AI infrastructure for </span>
            <span className="bg-gradient-to-r from-[#D8B4FE] via-[#FF9132] to-[#D8B4FE] bg-clip-text text-transparent">
              real business workflows
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            Stairio products share a common technical core: workflow automation,
            AI agents, business data, and decision dashboards built for service
            operators.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technologyCore.map((item) => (
            <CoreCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0d0d0d]/80 p-7 backdrop-blur-xl sm:p-9">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <SectionBadge label="Impact Thesis" />
            <h2 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Built for Indian businesses still running on manual work.
            </h2>
            <p className="text-base leading-relaxed text-neutral-400">
              Many service businesses already have demand, customers, and daily
              operational pressure. Stairio focuses on productizing the systems
              that help these businesses capture demand, coordinate work, and
              make better decisions without adding more manual overhead.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {["Hospitality", "Sales Teams", "Service MSMEs", "Operators"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm font-medium text-neutral-300"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="grid gap-4">
            {impactItems.map((item) => (
              <CoreCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-10 text-center">
          <SectionBadge label="Commercialization Roadmap" />
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            From focused prototype to repeatable product.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            The website should communicate a fundable path: prove one workflow,
            test it with operators, package it for market, then scale through
            repeatable product modules.
          </p>
        </div>

        <div className="relative grid gap-4 md:grid-cols-4">
          {roadmap.map((item, index) => (
            <div
              key={item.phase}
              className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-neutral-900/80 to-neutral-950 p-6"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
                  Phase {item.phase}
                </span>
                {index === 0 ? (
                  <Sparkles className="h-4 w-4 text-[#D8B4FE]" />
                ) : (
                  <Rocket className="h-4 w-4 text-[#FF9132]" />
                )}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
