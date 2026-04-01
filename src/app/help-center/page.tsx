import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, FileText, Globe, HelpCircle, ShieldCheck, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Help Center | Stairio",
  description: "Get quick help with Stairio products, services, policies, and support-related questions.",
};

const helpTopics = [
  {
    title: "Product questions",
    description: "Learn more about SmartSite, Hotelify, automation workflows, and Stairio delivery models.",
    icon: Globe,
    href: "/about",
  },
  {
    title: "Legal and policy questions",
    description: "Review our terms, privacy approach, and refund handling guidelines.",
    icon: ShieldCheck,
    href: "/terms-of-service",
  },
  {
    title: "Billing and quote help",
    description: "Need clarity on project scope, budgeting, or next steps? Start with a quote request.",
    icon: Wallet,
    href: "/quote",
  },
];

const faqs = [
  {
    question: "How do I start a project with Stairio?",
    answer:
      "The easiest path is to submit your requirements through the quote page. From there, Stairio reviews the scope and responds with the next step.",
  },
  {
    question: "Can Stairio build both products and custom services?",
    answer:
      "Yes. Stairio offers both productized solutions like Hotelify and SmartSite, as well as custom AI, automation, and software engagements.",
  },
  {
    question: "Where can I find policy information?",
    answer:
      "You can access the Terms of Service, Privacy Policy, and Refund Policy directly from the Company menu in the header.",
  },
];

export default function HelpCenterPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-40 bg-gradient-to-b from-[#D8B4FE]/50 to-transparent" />
        <div className="absolute top-28 left-[12%] w-[420px] h-[420px] bg-[#D8B4FE]/[0.08] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-[10%] w-[420px] h-[420px] bg-[#FF9132]/[0.08] rounded-full blur-[120px]" />
      </div>

      <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5DDF18] animate-pulse" />
            <span className="text-xs font-medium text-neutral-400 tracking-wide uppercase">Help Center</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
            <span className="text-white">Find the right answer </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D8B4FE] via-[#FF9132] to-[#D8B4FE]">
              faster
            </span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Whether you need guidance on products, policies, project planning, or support, this
            page gives you a clean starting point.
          </p>
        </div>
      </section>

      <section className="relative pb-10 sm:pb-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {helpTopics.map((topic) => {
              const Icon = topic.icon;
              return (
                <Card
                  key={topic.title}
                  className="rounded-3xl bg-[#0d0d0d]/80 border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl"
                >
                  <CardContent className="p-6 sm:p-7">
                    <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-xl font-semibold text-white mb-3">{topic.title}</h2>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-5">{topic.description}</p>
                    <Button asChild variant="outline" className="rounded-full border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.08]">
                      <Link href={topic.href}>
                        Open
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Card className="rounded-[2rem] bg-[#0d0d0d]/85 border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl overflow-hidden">
            <CardContent className="relative p-8 sm:p-10 md:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D8B4FE]/[0.05] via-transparent to-[#FF9132]/[0.05] pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 tracking-wide uppercase mb-6">
                  <HelpCircle className="w-4 h-4 text-[#D8B4FE]" />
                  Common Questions
                </div>
                <div className="space-y-5">
                  {faqs.map((faq) => (
                    <div key={faq.question} className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6">
                      <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                      <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button asChild className="rounded-full">
                    <Link href="/quote">
                      Contact Support
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.08]">
                    <Link href="/privacy-policy">
                      View Policies
                      <FileText className="w-4 h-4 ml-2" />
                    </Link>
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
