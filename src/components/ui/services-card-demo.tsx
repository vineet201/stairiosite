"use client";

import Link from "next/link";

import {
  ServiceCarousel,
  type Service,
} from "@/components/ui/services-card";
import { stairioServices } from "@/lib/services";

const services: Service[] = stairioServices;

export default function AnimatedServiceCardDemo() {
  return (
    <section className="w-full bg-background px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto mb-12 w-full max-w-6xl text-center sm:mb-16">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2">
          <div className="h-1.5 w-1.5 rounded-full bg-[#5DDF18] animate-pulse" />
          <span className="text-xs font-medium uppercase tracking-wide text-neutral-400">
            Stairio Labs
          </span>
        </div>

        <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
          <span className="text-white">What We </span>
          <span className="bg-gradient-to-r from-[#D8B4FE] via-[#FF9132] to-[#D8B4FE] bg-clip-text text-transparent">
            Deliver
          </span>
        </h2>

        <p className="mx-auto max-w-2xl text-base text-neutral-400 sm:text-lg">
          The engineering and automation capabilities behind our products,
          prototypes, and custom AI systems.
        </p>
      </div>
      <ServiceCarousel services={services} />

      <div className="mt-10 text-center sm:mt-14">
        <div className="inline-flex flex-col items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 sm:flex-row sm:gap-5 sm:p-2 sm:pl-5">
          <span className="text-sm text-neutral-400">
            Have a custom project?
          </span>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-neutral-200"
          >
            Let&apos;s Talk
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
