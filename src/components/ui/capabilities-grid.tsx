"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

// ── Types ────────────────────────────────────────────────────────────────────

type CapabilityCard = {
  id: string
  name: string
  tagline: string
  description: string
  tags: string[]
  href: string
  image: string
  status?: "Live" | "Beta"
  statusColor?: string
}

// ── Data ─────────────────────────────────────────────────────────────────────

const products: CapabilityCard[] = [
  {
    id: "hoteloS",
    name: "Hotelify",
    tagline: "AI Hospitality Operating System",
    description:
      "Unified PMS, booking engine, and AI sales agents for hotels.",
    tags: ["PMS", "Booking Engine", "AI Agents"],
    href: "/hotelify",
    image: "/images/showcase/Dashboard Overview.png",
    status: "Live",
    statusColor: "#5DDF18",
  },
  {
    id: "fitos",
    name: "FitOS",
    tagline: "Fitness Business Operating System",
    description:
      "Memberships, scheduling, and payments for gyms and studios.",
    tags: ["Members", "Classes", "Payments"],
    href: "#fitos",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop&q=80",
    status: "Beta",
    statusColor: "#FF9132",
  },
  {
    id: "agaas",
    name: "AI Agents",
    tagline: "AGAAS — Agents as a Service",
    description:
      "Voice and messaging agents for sales, support, and lead conversion.",
    tags: ["Voice AI", "Chat", "24/7"],
    href: "#agaas",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&q=80",
    status: "Live",
    statusColor: "#5DDF18",
  },
]

const services: CapabilityCard[] = [
  {
    id: "websites",
    name: "SmartSite",
    tagline: "Professional Web Presence",
    description:
      "Custom-designed, SEO-optimised websites. Live in 10–14 days.",
    tags: ["Design", "SEO", "CMS"],
    href: "/website-builder",
    image: "/images/buildershowcase/HotelShowcase.png",
  },
  {
    id: "custom-ai",
    name: "Custom AI",
    tagline: "Bespoke AI Engineering",
    description:
      "AI systems built around your specific workflows and operations.",
    tags: ["LLM", "Automation", "Analytics"],
    href: "/quote",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop&q=80",
  },
  {
    id: "fullstack",
    name: "Full-Stack Dev",
    tagline: "End-to-End Engineering",
    description:
      "Web apps, mobile platforms, and cloud infrastructure at scale.",
    tags: ["Web Apps", "Mobile", "APIs"],
    href: "/quote",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop&q=80",
  },
]

// ── Card ─────────────────────────────────────────────────────────────────────

function ShowcaseCard({
  item,
  accentColor,
}: {
  item: CapabilityCard
  accentColor: string
}) {
  return (
    <Link
      href={item.href}
      className="group flex-shrink-0 w-[280px] sm:w-[300px] lg:w-[320px] rounded-xl overflow-hidden bg-white/[0.03] border border-white/[0.06] transition-all duration-400 hover:border-white/[0.14] hover:-translate-y-0.5"
    >
      {/* Image */}
      <div className="relative h-[140px] sm:h-[155px] lg:h-[170px] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="320px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent" />

        {item.status && (
          <div className="absolute top-3 right-3 z-10">
            <span
              className="text-[8px] font-semibold uppercase tracking-[0.18em] px-2 py-0.5 rounded-full border backdrop-blur-sm"
              style={{
                color: item.statusColor,
                borderColor: `${item.statusColor}35`,
                backgroundColor: `${item.statusColor}12`,
              }}
            >
              {item.status}
            </span>
          </div>
        )}
      </div>

      {/* Metadata */}
      <div className="p-4 pt-2.5">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h3 className="text-[15px] font-semibold text-white tracking-tight leading-tight">
            {item.name}
          </h3>
          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0" />
        </div>
        <p
          className="text-[10px] font-medium uppercase tracking-[0.16em] mb-2"
          style={{ color: `${accentColor}80` }}
        >
          {item.tagline}
        </p>
        <p className="text-xs text-neutral-500 leading-relaxed line-clamp-1 mb-3">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] text-neutral-600 border border-white/[0.05] px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

// ── Marquee row ──────────────────────────────────────────────────────────────

function MarqueeRow({
  items,
  direction,
  accentColor,
  label,
}: {
  items: CapabilityCard[]
  direction: "left" | "right"
  accentColor: string
  label: string
}) {
  const cls =
    direction === "left" ? "cap-marquee-left" : "cap-marquee-right"

  return (
    <div>
      {/* Row label */}
      <div className="flex items-center gap-2.5 px-6 md:px-8 mb-4">
        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
        <span className="text-[10px] uppercase tracking-[0.28em] text-neutral-600 font-medium">
          {label}
        </span>
      </div>

      {/* Scroll track */}
      <div className="relative overflow-hidden">
        <div className={`flex gap-4 ${cls}`} style={{ width: "max-content" }}>
          {[0, 1, 2].map((set) =>
            items.map((item) => (
              <ShowcaseCard
                key={`${set}-${item.id}`}
                item={item}
                accentColor={accentColor}
              />
            ))
          )}
        </div>

        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none z-10" />
      </div>
    </div>
  )
}

// ── Section ──────────────────────────────────────────────────────────────────

export function CapabilitiesGrid() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      {/* Marquee CSS */}
      <style jsx>{`
        @keyframes capLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes capRight {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .cap-marquee-left {
          animation: capLeft 50s linear infinite;
        }
        .cap-marquee-right {
          animation: capRight 50s linear infinite;
        }
        .cap-marquee-left:hover,
        .cap-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D8B4FE] animate-pulse" />
            <span className="text-xs font-medium text-neutral-400 tracking-wide uppercase">
              Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-3">
            Products &amp; Services
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base max-w-lg mx-auto">
            Proprietary platforms and client engineering — both held to the same standard of execution.
          </p>
        </motion.div>

        {/* Container box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl lg:rounded-3xl border border-white/[0.08] bg-[#0a0a0a]"
        >
          {/* Subtle accent glow */}
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#D8B4FE]/[0.02] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#FF9132]/[0.02] rounded-full blur-[100px] pointer-events-none" />

          <div className="relative py-8 space-y-8">
            {/* Products row */}
            <MarqueeRow
              items={products}
              direction="left"
              accentColor="#D8B4FE"
              label="Products"
            />

            {/* Divider */}
            <div className="mx-6 md:mx-8 border-t border-white/[0.04]" />

            {/* Services row */}
            <MarqueeRow
              items={services}
              direction="right"
              accentColor="#FF9132"
              label="Services"
            />
          </div>

          {/* Bottom bar */}
          <div className="px-6 md:px-8 py-5 border-t border-white/[0.06] flex items-center justify-between bg-white/[0.01]">
            <p className="text-xs text-neutral-600">
              Have a custom requirement?
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
            >
              Start a conversation
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
