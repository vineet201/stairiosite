"use client"

import { ArrowRight, CheckCircle2, Globe, HeartPulse, Hotel, Sparkles, type LucideIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type DemoProject = {
  name: string
  category: string
  summary: string
  accent: string
  icon: LucideIcon
  marketSignal: string
  indiaNeed: string
  features: string[]
  outcomes: string[]
  imageSrc: string
  imageAlt: string
  preview: {
    eyebrow: string
    headline: string
    copy: string
    primaryMetric: string
    primaryLabel: string
    secondaryMetrics: Array<{
      label: string
      value: string
    }>
    chips: string[]
  }
}

// Demo directions picked for current India-focused demand. Replace with your own projects when needed.
const demoProjects: DemoProject[] = [
  {
    name: "Hotel & Resort Direct Booking Website",
    category: "Hospitality",
    summary:
      "Built for boutique hotels, resorts, homestays, and serviced apartments that want to reduce OTA dependency through direct bookings, room showcases, and a branded guest experience.",
    accent: "#F59E0B",
    icon: Hotel,
    marketSignal: "India's hotel industry is projected to reach US$ 24.7 billion by 2030, driven by rising domestic and international tourism.",
    indiaNeed:
      "Travellers often discover properties on OTAs but switch to direct booking when a hotel's own website feels trustworthy, highlights exclusive rates, and makes reservations effortless.",
    features: ["Room galleries", "Direct booking", "Local attractions", "WhatsApp enquiry"],
    outcomes: [
      "Room pages need high-quality visuals, amenity lists, and clear rate advantages to justify booking direct",
      "The homepage must communicate property character and location story within the first scroll on mobile",
      "Enquiry, booking, and WhatsApp paths should all be reachable in one tap for last-minute travellers",
    ],
    imageSrc: "/images/buildershowcase/HotelShowcase.png",
    imageAlt: "Hotel and resort website showcase",
    preview: {
      eyebrow: "Hotel / resort / boutique stay",
      headline: "Direct-booking websites that make your property unforgettable",
      copy: "These demos are built around room showcases, destination storytelling, and frictionless booking — not generic hospitality brochures.",
      primaryMetric: "Book / Enquire / WhatsApp",
      primaryLabel: "Primary conversion path for hotel and hospitality demos",
      secondaryMetrics: [
        { label: "Best fit", value: "Hotels, resorts, homestays" },
        { label: "Build focus", value: "Trust + direct booking" },
      ],
      chips: ["Rooms", "Booking", "Gallery"],
    },
  },
  {
    name: "Clinic & Diagnostics Website",
    category: "Healthcare",
    summary:
      "Built for neighbourhood clinics, dental centres, skin practices, and diagnostics labs that need local discovery, doctor trust, and faster appointment capture.",
    accent: "#5DDF18",
    icon: HeartPulse,
    marketSignal: "India's digital health market is projected to grow to Rs. 4,11,275 crore by 2033.",
    indiaNeed:
      "Patients compare doctors, timings, reviews, and location before they call, so the website has to move quickly from search intent to booked visits.",
    features: ["Doctor profiles", "Appointment forms", "Google Maps SEO", "WhatsApp support"],
    outcomes: [
      "Doctor credibility, treatment pages, and patient FAQs need to be visible above the fold",
      "Mobile visitors should be able to call, book, or message in a single tap",
      "Local search pages matter because discovery often starts with nearby intent",
    ],
    imageSrc: "/images/buildershowcase/DentistShowcase.png",
    imageAlt: "Clinic and diagnostics website showcase",
    preview: {
      eyebrow: "Clinic / diagnostics / specialist practice",
      headline: "Trust-first pages that turn local intent into appointments",
      copy: "The build direction is simple: doctor trust, treatment clarity, quick actions, and map-driven discovery on mobile.",
      primaryMetric: "Book / Call / WhatsApp",
      primaryLabel: "Primary conversion path for healthcare demos in India",
      secondaryMetrics: [
        { label: "Best fit", value: "Clinic, dental, diagnostics" },
        { label: "Build focus", value: "Trust + local SEO" },
      ],
      chips: ["Appointments", "Reviews", "Maps"],
    },
  },
  {
    name: "Vedic Astrology & Spiritual Guidance Website",
    category: "Spirituality",
    summary:
      "Designed for astrologers, numerologists, tarot practitioners, and spiritual coaches who want a credible online presence that attracts sincere seekers and converts consultations at scale.",
    accent: "#A78BFA",
    icon: Sparkles,
    marketSignal: "India's astrology and spiritual wellness market is estimated to be worth over Rs. 2,00,000 crore, with online consultations growing rapidly post-pandemic.",
    indiaNeed:
      "Seekers look for practitioner credibility, testimonials, and a clear path to book a session before they share personal details — so the website must build trust before asking for anything.",
    features: ["Practitioner bio", "Consultation booking", "Service packages", "WhatsApp connect"],
    outcomes: [
      "The homepage should lead with expertise, tradition, and testimonials to earn trust before offering services",
      "Service pages need to explain what each reading or session covers and who it is meant for",
      "Booking and WhatsApp actions should be frictionless because enquiries are often time-sensitive",
    ],
    imageSrc: "/images/buildershowcase/Astrologer Showcase.png",
    imageAlt: "Astrology and spiritual guidance website showcase",
    preview: {
      eyebrow: "Astrology / numerology / spiritual coaching",
      headline: "Where ancient wisdom earns trust before it asks for anything",
      copy: "These demos are built around practitioner credibility, consultation clarity, and a seamless booking path — not mysticism-heavy layouts that bury the call to action.",
      primaryMetric: "Book / Consult / WhatsApp",
      primaryLabel: "Primary path for astrology and spiritual guidance demos",
      secondaryMetrics: [
        { label: "Best fit", value: "Astrologers, tarot, coaches" },
        { label: "Build focus", value: "Credibility + bookings" },
      ],
      chips: ["Consultations", "Services", "Testimonials"],
    },
  },
]

function DemoProjectPreview({ project, className = "" }: { project: DemoProject; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-[#08080b] p-3 ${className}`}>
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(circle at top right, ${project.accent}20 0%, transparent 42%)`,
        }}
      />

      <div className="relative h-full overflow-hidden rounded-[22px] border border-white/10 bg-[#111114]">
        {project.imageSrc ? (
          <img
            src={project.imageSrc}
            alt={project.imageAlt}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-3 p-6 text-center">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl border"
              style={{
                borderColor: `${project.accent}40`,
                backgroundColor: `${project.accent}10`,
              }}
            >
              <project.icon className="h-7 w-7" style={{ color: project.accent }} />
            </div>
            <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">Preview image coming soon</p>
          </div>
        )}
      </div>
    </div>
  )
}

function DemoProjectCard({ project, index }: { project: DemoProject; index: number }) {
  const Icon = project.icon
  const accentLine = `${project.accent}55`
  const accentFaint = `${project.accent}14`
  const reverseLayout = index % 2 === 1

  return (
    <article className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-4 md:p-6">
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at top right, ${project.accent}18 0%, transparent 42%)`,
        }}
      />

      <div className="relative grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div
          className={`flex flex-col rounded-[28px] border border-white/10 bg-black/30 p-6 md:p-8 ${
            reverseLayout ? "lg:order-2" : ""
          }`}
        >
          {/* Header row */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-2xl border"
                style={{ borderColor: accentLine, backgroundColor: accentFaint }}
              >
                <Icon className="h-5 w-5" style={{ color: project.accent }} />
              </div>
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.26em]"
                style={{ color: project.accent }}
              >
                {project.category}
              </span>
            </div>
            <span className="text-xs font-medium tracking-[0.28em] text-neutral-700">0{index + 1}</span>
          </div>

          {/* Title + summary */}
          <h3 className="mt-5 text-2xl font-semibold leading-snug tracking-tight text-white md:text-[1.75rem]">
            {project.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">{project.summary}</p>

          {/* Market signal callout */}
          <div
            className="mt-6 rounded-2xl border p-4"
            style={{ borderColor: accentLine, backgroundColor: accentFaint }}
          >
            <p className="text-[10px] uppercase tracking-[0.26em]" style={{ color: project.accent }}>
              Market opportunity
            </p>
            <p className="mt-2 text-sm font-medium leading-relaxed text-white">{project.marketSignal}</p>
            <p className="mt-2 text-xs leading-relaxed text-neutral-400">{project.indiaNeed}</p>
          </div>

          {/* Outcomes */}
          <div className="mt-6 space-y-2.5">
            {project.outcomes.map((outcome) => (
              <div key={outcome} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: project.accent }} />
                <p className="text-sm leading-relaxed text-neutral-300">{outcome}</p>
              </div>
            ))}
          </div>

          {/* Footer: chips + CTA */}
          <div className="mt-auto pt-7 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border px-3 py-1 text-[11px] font-medium text-neutral-300"
                  style={{ borderColor: accentLine, backgroundColor: accentFaint }}
                >
                  {feature}
                </span>
              ))}
            </div>
            <a
              href="/quote"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold transition-colors hover:bg-white/10"
              style={{ borderColor: accentLine, color: project.accent }}
            >
              Get a Similar Website
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <DemoProjectPreview project={project} className={reverseLayout ? "lg:order-1" : ""} />
      </div>
    </article>
  )
}

export function BentoShowcaseWebsiteBuilder() {
  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,180,254,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,145,50,0.12),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="border-[#D8B4FE]/25 bg-[#D8B4FE]/10 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[#D8B4FE]"
            >
              India Market-Led Demo Projects
            </Badge>

            <h2 className="mt-5 text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl">
              Built for Modern Businesses
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-400 md:text-lg">
              Three demo directions built for real Indian demand: hospitality brands reducing OTA dependency, healthcare
              practices turning local search into booked appointments, and spiritual practitioners building credibility
              online.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-neutral-500">Why these 3</p>
            <div className="mt-4 space-y-3 text-sm text-neutral-300">
              <p>Hospitality needs direct booking trust, room storytelling, and a clear alternative to OTA margins.</p>
              <p>Healthcare needs doctor credibility, local discovery, and one-tap appointment actions.</p>
              <p>Spirituality needs practitioner trust, service clarity, and a frictionless consultation path.</p>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-neutral-400">
              Each demo is tuned for India&apos;s mobile-first audience — where trust is earned before a single tap is
              asked for.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="bg-white text-black hover:bg-neutral-200">
                <a href="/quote">
                  Start a Similar Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button asChild variant="outline" className="border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.08]">
                <a href="#pricing">View Pricing</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {demoProjects.map((project, index) => (
            <DemoProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
