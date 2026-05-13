"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  BedDouble,
  Bell,
  Bot,
  Brush,
  Building2,
  CalendarClock,
  ChartNoAxesCombined,
  ClipboardCheck,
  FileText,
  Globe2,
  Landmark,
  MessageSquareText,
  ReceiptText,
  RefreshCcw,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Tags,
  TrendingUp,
  UsersRound,
} from "lucide-react";

import { cn } from "@/lib/utils";

type Capability = {
  title: string;
  label: string;
  body: string;
  icon: React.ElementType;
  accent: string;
  points: string[];
};

type Metric = {
  label: string;
  value: string;
  accent: string;
};

const operations: Capability[] = [
  {
    title: "Booking Operations",
    label: "Front desk",
    body: "Handle every reservation path from one flow, including walk-ins and guest-led changes.",
    icon: ClipboardCheck,
    accent: "#D8B4FE",
    points: [
      "Walk-in booking creation",
      "Modify dates or room type",
      "Confirm to Check-in to Check-out",
    ],
  },
  {
    title: "Room & Staff Control",
    label: "Housekeeping",
    body: "Keep room inventory, staff access, and live housekeeping work aligned through the dashboard.",
    icon: Brush,
    accent: "#5DDF18",
    points: [
      "Room and room type management",
      "Role-based staff accounts",
      "Real-time housekeeping task board",
    ],
  },
  {
    title: "Guest CRM",
    label: "Retention",
    body: "Turn guest data ownership into repeat bookings, better service, and usable guest history.",
    icon: UsersRound,
    accent: "#FF9132",
    points: [
      "Profiles and stay history",
      "Preferences, notes, and ID records",
      "Lifetime value per guest",
    ],
  },
  {
    title: "Billing & Messages",
    label: "Automation",
    body: "Automate financial paperwork and guest communication before, during, and after the stay.",
    icon: ReceiptText,
    accent: "#D8B4FE",
    points: [
      "GST invoices for 5% and 18% slabs",
      "WhatsApp and email invoices",
      "Pre-arrival and post-checkout messages",
    ],
  },
];

const channelRows = [
  ["Booking.com", "Synced", "+8%"],
  ["MakeMyTrip", "Synced", "+5%"],
  ["Airbnb", "Synced", "0%"],
  ["Agoda", "Synced", "+6%"],
  ["Expedia", "Synced", "+7%"],
];

const pricingRules = [
  "Occupancy rule",
  "Seasonal rule",
  "Day-of-week rule",
  "Minimum-stay rule",
];

const enterpriseFeatures: Capability[] = [
  {
    title: "AI Guest Assistant",
    label: "24/7 chat",
    body: "Automated guest conversations for common questions, booking intent, and service requests.",
    icon: Bot,
    accent: "#D8B4FE",
    points: ["Guest chatbot", "Lead capture", "Live chat handoff"],
  },
  {
    title: "AI Revenue Advisor",
    label: "Pricing intelligence",
    body: "Use demand signals to understand price movement, booking pace, and revenue opportunities.",
    icon: Sparkles,
    accent: "#5DDF18",
    points: ["Demand heatmap", "What-if simulator", "Price sensitivity chart"],
  },
  {
    title: "Multi-Property HQ",
    label: "Group control",
    body: "Manage multiple hotels from a unified dashboard without losing property-level visibility.",
    icon: Building2,
    accent: "#FF9132",
    points: ["Unified dashboard", "Cross-property analytics", "Inventory management"],
  },
  {
    title: "Brand & Support Layer",
    label: "Enterprise",
    body: "Run the experience under your own brand with the operational support larger groups expect.",
    icon: ShieldCheck,
    accent: "#D8B4FE",
    points: ["White-label branding", "Loyalty program", "Dedicated account manager"],
  },
];

const metrics: Metric[] = [
  { label: "OTA inventory", value: "Live", accent: "#5DDF18" },
  { label: "Rate offsets", value: "5", accent: "#D8B4FE" },
  { label: "Restrictions", value: "3", accent: "#FF9132" },
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-[#D8B4FE]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-neutral-400 md:text-lg">
        {description}
      </p>
    </motion.div>
  );
}

function CapabilityCard({ item, index }: { item: Capability; index: number }) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.045]"
    >
      <div className="relative z-10">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl border"
            style={{
              borderColor: `${item.accent}33`,
              backgroundColor: `${item.accent}12`,
            }}
          >
            <Icon className="h-5 w-5" style={{ color: item.accent }} />
          </div>
          <span
            className="rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em]"
            style={{
              borderColor: `${item.accent}33`,
              color: item.accent,
              backgroundColor: `${item.accent}0F`,
            }}
          >
            {item.label}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
        <p className="mt-2 min-h-[72px] text-sm leading-6 text-neutral-400">
          {item.body}
        </p>
        <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
          {item.points.map((point) => (
            <div key={point} className="flex items-start gap-2 text-sm text-neutral-300">
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: item.accent }}
              />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function OperationsBoard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c10] p-5"
    >
      <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
            Today&apos;s control desk
          </p>
          <h3 className="mt-1 text-xl font-semibold text-white">Operations Live</h3>
        </div>
        <div className="rounded-full border border-[#5DDF18]/30 bg-[#5DDF18]/10 px-3 py-1 text-xs font-medium text-[#5DDF18]">
          18 active tasks
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {[
          { label: "Arrivals", value: "24", icon: CalendarClock, color: "#D8B4FE" },
          { label: "Walk-ins", value: "06", icon: BedDouble, color: "#FF9132" },
          { label: "Clean rooms", value: "41", icon: Brush, color: "#5DDF18" },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="mb-4 flex items-center justify-between">
                <Icon className="h-4 w-4" style={{ color: item.color }} />
                <span className="text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                  Live
                </span>
              </div>
              <p className="text-3xl font-semibold text-white">{item.value}</p>
              <p className="mt-1 text-xs text-neutral-400">{item.label}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-4 space-y-3">
        {[
          ["Room 203", "Check-in moved from Deluxe to Suite", "#D8B4FE"],
          ["Room 118", "Housekeeping assigned to Anita", "#5DDF18"],
          ["Guest KYC", "Passport record attached to booking", "#FF9132"],
        ].map(([title, detail, color]) => (
          <div
            key={title}
            className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/20 px-4 py-3"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: color }} />
              <div className="min-w-0">
                <p className="text-sm font-medium text-white">{title}</p>
                <p className="truncate text-xs text-neutral-500">{detail}</p>
              </div>
            </div>
            <span className="shrink-0 text-xs text-neutral-500">now</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ChannelManagerPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#D8B4FE]">
            Channel Manager
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            OTA sync without double bookings
          </h3>
        </div>
        <RefreshCcw className="h-6 w-6 text-[#5DDF18]" />
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-xl border border-white/10 bg-black/20 p-3">
            <p className="text-xs text-neutral-500">{metric.label}</p>
            <p className="mt-1 text-xl font-semibold" style={{ color: metric.accent }}>
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
        {channelRows.map(([channel, status, offset], index) => (
          <div
            key={channel}
            className={cn(
              "grid grid-cols-[1fr_90px_60px] items-center gap-3 px-4 py-3 text-sm",
              index !== channelRows.length - 1 && "border-b border-white/10"
            )}
          >
            <div className="flex min-w-0 items-center gap-2">
              <Globe2 className="h-4 w-4 shrink-0 text-neutral-500" />
              <span className="truncate text-neutral-200">{channel}</span>
            </div>
            <span className="text-xs text-[#5DDF18]">{status}</span>
            <span className="text-right text-xs text-neutral-400">{offset}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {["Stop-sell", "Close-to-arrival", "Min-stay"].map((item) => (
          <div key={item} className="rounded-lg bg-white/[0.04] px-3 py-2 text-center text-xs text-neutral-300">
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function RevenuePanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c10] p-5"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#FF9132]">
            Revenue Management
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            Price with demand, not guesswork
          </h3>
        </div>
        <TrendingUp className="h-6 w-6 text-[#FF9132]" />
      </div>

      <div className="rounded-xl border border-white/10 bg-black/20 p-4">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-medium text-white">Pickup pace</span>
          <span className="rounded-full bg-[#5DDF18]/10 px-2.5 py-1 text-xs text-[#5DDF18]">
            +18% this week
          </span>
        </div>
        <div className="flex h-28 items-end gap-2">
          {[32, 46, 38, 58, 64, 72, 84, 76, 92, 88].map((height, index) => (
            <div key={index} className="flex flex-1 flex-col items-center gap-1">
              <div
                className="w-full rounded-t bg-gradient-to-t from-[#D8B4FE]/30 to-[#FF9132]"
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {pricingRules.map((rule) => (
          <div key={rule} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-sm text-neutral-300">
            <SlidersHorizontal className="h-4 w-4 text-[#D8B4FE]" />
            {rule}
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {["Festival", "Conference", "Wedding", "Long weekend"].map((tag) => (
          <span key={tag} className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-neutral-300">
            <Tags className="h-3.5 w-3.5 text-[#FF9132]" />
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function HotelifyAdvancedFeatures() {
  return (
    <>
      <section className="bg-black py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Operations suite"
            title="Every daily workflow belongs in one PMS"
            description="The pricing plans now include operational tools that deserve visibility before checkout: front-desk flows, staff control, guest CRM, and automated communication."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {operations.map((item, index) => (
              <CapabilityCard key={item.title} item={item} index={index} />
            ))}
          </div>

          <div className="mt-5">
            <OperationsBoard />
          </div>
        </div>
      </section>

      <section className="bg-[#050505] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Channels and revenue"
            title="OTA control and pricing intelligence"
            description="Professional and Enterprise features move Hotelify beyond booking capture into inventory sync, rate controls, revenue management, and demand planning."
          />

          <div className="grid gap-5 lg:grid-cols-2">
            <ChannelManagerPanel />
            <RevenuePanel />
          </div>
        </div>
      </section>

      <section className="bg-black py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Enterprise layer"
            title="Built for groups, brands, and AI-led service"
            description="Enterprise plan capabilities now have a visible home: multi-property control, guest-facing AI, revenue guidance, white-label branding, loyalty, and support."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {enterpriseFeatures.map((item, index) => (
              <CapabilityCard key={item.title} item={item} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mt-5 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 md:grid-cols-4"
          >
            {[
              { icon: Landmark, label: "Google Free Booking Links" },
              { icon: MessageSquareText, label: "WhatsApp plus email alerts" },
              { icon: ChartNoAxesCombined, label: "Length-of-stay optimizer" },
              { icon: FileText, label: "24-hour priority support" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3">
                  <Icon className="h-5 w-5 shrink-0 text-[#D8B4FE]" />
                  <span className="text-sm text-neutral-300">{item.label}</span>
                </div>
              );
            })}
          </motion.div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              ["Lead pipeline", "Live chat inquiries, guest follow-ups, and direct booking leads stay inside the system.", Bell],
              ["Demand calendar", "Tag festivals, events, conferences, and high-demand dates before they hit your inventory.", CalendarClock],
              ["Manual overrides", "Change any date and any room type when local demand needs human judgment.", BarChart3],
            ].map(([title, body, Icon]) => (
              <div key={title as string} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <Icon className="mb-4 h-5 w-5 text-[#FF9132]" />
                <h3 className="text-base font-semibold text-white">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-400">{body as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
