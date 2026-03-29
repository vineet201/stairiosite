"use client"

import { motion } from 'framer-motion'
import { Check, X, Search, Clock, Shield, Smartphone, TrendingUp, Globe } from 'lucide-react'

export function ComparisonSectionWebsiteBuilder() {
  const comparisonData = [
    {
      feature: "Search Discoverability",
      withoutWebsite: "Invisible to 97% of consumers who research a business online before visiting in person",
      withWebsite: "Indexed in local search results where purchase intent is highest and competition is decided",
      icon: Search,
    },
    {
      feature: "Business Credibility",
      withoutWebsite: "75% of users judge business credibility from the website alone — no site signals no legitimacy",
      withWebsite: "Professional presence establishes authority and trust before any direct contact occurs",
      icon: Shield,
    },
    {
      feature: "Revenue Hours",
      withoutWebsite: "Revenue generation is bounded by physical operating hours and manual availability",
      withWebsite: "Enquiries, bookings, and brand engagement continue uninterrupted around the clock",
      icon: Clock,
    },
    {
      feature: "Mobile Reach",
      withoutWebsite: "Missed by the 76% of consumers who use smartphones to discover and evaluate local services",
      withWebsite: "Optimised for 700M+ Indians who make purchasing decisions on mobile before visiting",
      icon: Smartphone,
    },
    {
      feature: "Lead Pipeline",
      withoutWebsite: "Dependent on referrals and physical footfall — high volatility, impossible to scale",
      withWebsite: "Inbound enquiries operate independently of manual sales effort and compound over time",
      icon: TrendingUp,
    },
    {
      feature: "Competitive Position",
      withoutWebsite: "Conceding search visibility to competitors — with no mechanism to differentiate online",
      withWebsite: "SEO and content create durable discoverability advantages that widen month over month",
      icon: Globe,
    },
  ]

  const insights = [
    {
      stat: "97%",
      context: "of consumers search online to find and evaluate a local business before visiting in person",
      source: "BrightLocal Consumer Survey",
    },
    {
      stat: "39%",
      context: "more revenue growth observed in small businesses with a professional digital presence",
      source: "Deloitte Digital Report",
    },
    {
      stat: "88%",
      context: "of local mobile searches lead to a phone call or store visit within 24 hours",
      source: "Google Search Research",
    },
  ]

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">

        {/* Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="h-px w-8 bg-neutral-700" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-neutral-500 font-medium">
              Competitive Analysis
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-white tracking-tight max-w-2xl leading-snug"
          >
            The Business Case for a Professional Web Presence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-base mt-4 max-w-2xl leading-relaxed"
          >
            Research consistently shows that digital visibility determines which local businesses grow and which stagnate. The performance gap between businesses with and without an online presence compounds with time.
          </motion.p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl border border-white/[0.08] overflow-hidden"
        >
          {/* Column Headers */}
          <div className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-white/[0.08] bg-white/[0.02]">
            <div className="px-6 py-4 text-[10px] uppercase tracking-[0.26em] text-neutral-600 font-medium">
              Dimension
            </div>
            <div className="px-6 py-4 border-l border-white/[0.06] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0" />
              <span className="text-[10px] uppercase tracking-[0.26em] text-red-500/60 font-medium">
                Without Stairio
              </span>
            </div>
            <div className="px-6 py-4 border-l border-white/[0.06] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5DDF18]/70 shrink-0" />
              <span className="text-[10px] uppercase tracking-[0.26em] text-[#5DDF18]/70 font-medium">
                With Stairio
              </span>
            </div>
          </div>

          {/* Rows */}
          <div>
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index }}
                className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-white/[0.04] last:border-0 hover:bg-white/[0.015] transition-colors"
              >
                {/* Feature */}
                <div className="px-6 py-5 flex items-start gap-3">
                  <div className="mt-0.5 w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center shrink-0">
                    <row.icon className="w-4 h-4 text-neutral-500" />
                  </div>
                  <span className="text-sm font-medium text-white pt-1.5 leading-snug">{row.feature}</span>
                </div>

                {/* Without */}
                <div className="px-6 py-5 border-l border-white/[0.04] flex items-start gap-2.5">
                  <X className="w-3.5 h-3.5 text-red-500/40 mt-0.5 shrink-0" />
                  <p className="text-sm text-neutral-500 leading-relaxed">{row.withoutWebsite}</p>
                </div>

                {/* With */}
                <div className="px-6 py-5 border-l border-white/[0.04] flex items-start gap-2.5">
                  <Check className="w-3.5 h-3.5 text-[#5DDF18]/60 mt-0.5 shrink-0" />
                  <p className="text-sm text-neutral-300 leading-relaxed">{row.withWebsite}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Net Outcome Row */}
          <div className="grid grid-cols-[1.1fr_1fr_1fr] border-t border-white/[0.08] bg-white/[0.015]">
            <div className="px-6 py-5">
              <span className="text-[10px] uppercase tracking-[0.26em] text-neutral-600 font-medium">
                Net Outcome
              </span>
            </div>
            <div className="px-6 py-5 border-l border-white/[0.06]">
              <p className="text-sm font-semibold text-red-400/70 leading-snug">
                Compounding visibility loss to digitally-present competitors
              </p>
            </div>
            <div className="px-6 py-5 border-l border-white/[0.06]">
              <p className="text-sm font-semibold text-[#5DDF18]/80 leading-snug">
                Sustainable lead generation independent of manual outreach
              </p>
            </div>
          </div>
        </motion.div>

        {/* Research Data */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {insights.map((item, i) => (
            <div key={i} className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.07]">
              <div className="text-4xl font-bold text-white tracking-tight mb-3">{item.stat}</div>
              <p className="text-sm text-neutral-400 leading-relaxed mb-5">{item.context}</p>
              <div className="flex items-center gap-2">
                <div className="h-px flex-1 bg-white/[0.06]" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 shrink-0">
                  {item.source}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
