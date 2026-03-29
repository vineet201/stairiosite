import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type InfoSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

interface InfoPageShellProps {
  badge: string;
  title: string;
  description: string;
  sections: InfoSection[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export function InfoPageShell({
  badge,
  title,
  description,
  sections,
  ctaTitle = "Need help from the Stairio team?",
  ctaDescription = "If you have questions about our services, products, policies, or next steps, we are happy to help.",
  ctaHref = "/quote",
  ctaLabel = "Contact Us",
}: InfoPageShellProps) {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-40 bg-gradient-to-b from-[#D8B4FE]/50 to-transparent" />
        <div className="absolute top-40 left-[10%] w-[420px] h-[420px] bg-[#D8B4FE]/[0.08] rounded-full blur-[120px]" />
        <div className="absolute top-[24rem] right-[10%] w-[420px] h-[420px] bg-[#FF9132]/[0.08] rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-1/3 w-[360px] h-[360px] bg-[#5DDF18]/[0.05] rounded-full blur-[120px]" />
      </div>

      <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5DDF18] animate-pulse" />
            <span className="text-xs font-medium text-neutral-400 tracking-wide uppercase">{badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-5">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-neutral-400">
              {title}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </section>

      <section className="relative pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Card className="rounded-[2rem] bg-[#0d0d0d]/85 border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_-20px_rgba(0,0,0,0.65)] backdrop-blur-xl overflow-hidden">
            <CardContent className="relative p-6 sm:p-8 md:p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D8B4FE]/[0.05] via-transparent to-[#FF9132]/[0.05] pointer-events-none" />
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="relative z-10 space-y-10">
                {sections.map((section) => (
                  <div key={section.title} className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-white">{section.title}</h2>
                    <div className="space-y-3">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {section.bullets && (
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="rounded-2xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-neutral-300"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="relative pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Card className="rounded-[2rem] bg-[#0d0d0d]/85 border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl overflow-hidden">
            <CardContent className="relative p-8 sm:p-10 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D8B4FE]/[0.06] via-transparent to-[#FF9132]/[0.06] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{ctaTitle}</h2>
                <p className="text-neutral-400 text-base leading-relaxed max-w-2xl mx-auto mb-6">
                  {ctaDescription}
                </p>
                <Button asChild size="lg" className="rounded-full">
                  <Link href={ctaHref}>
                    {ctaLabel}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
