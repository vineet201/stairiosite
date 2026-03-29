import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, BrainCircuit, Layers3, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog | Stairio",
  description: "Insights on AI-native products, automation, software systems, and modern digital growth.",
};

const posts = [
  {
    title: "What it really means to build an AI-native business",
    category: "AI Strategy",
    excerpt:
      "A practical look at the difference between adding AI features and redesigning a business system around intelligence from the start.",
    icon: BrainCircuit,
  },
  {
    title: "Why automation fails without product thinking",
    category: "Automation",
    excerpt:
      "Automation only works when workflows, handoffs, ownership, and user experience are designed together.",
    icon: Bot,
  },
  {
    title: "Designing software that operators actually want to use",
    category: "Product Design",
    excerpt:
      "The best internal and customer-facing tools reduce friction, increase visibility, and support confident action.",
    icon: Layers3,
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-40 bg-gradient-to-b from-[#D8B4FE]/50 to-transparent" />
        <div className="absolute top-32 left-[10%] w-[420px] h-[420px] bg-[#D8B4FE]/[0.08] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-[8%] w-[420px] h-[420px] bg-[#FF9132]/[0.08] rounded-full blur-[120px]" />
      </div>

      <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5DDF18] animate-pulse" />
            <span className="text-xs font-medium text-neutral-400 tracking-wide uppercase">Stairio Blog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
            <span className="text-white">Ideas on building smarter </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D8B4FE] via-[#FF9132] to-[#D8B4FE]">
              systems and products
            </span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            We use this space to share practical thinking on AI-native products, digital
            experiences, automation, and the systems behind modern business growth.
          </p>
        </div>
      </section>

      <section className="relative pb-14 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 mb-6">
            <Card className="rounded-[2rem] bg-[#0d0d0d]/85 border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl overflow-hidden">
              <CardContent className="relative p-8 sm:p-10 md:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#D8B4FE]/[0.05] via-transparent to-[#FF9132]/[0.05] pointer-events-none" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 tracking-wide uppercase mb-5">
                    <Sparkles className="w-4 h-4 text-[#D8B4FE]" />
                    Featured Perspective
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                    Software should not just look modern. It should help teams think and act better.
                  </h2>
                  <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
                    At Stairio, we believe products become powerful when design, workflow, and
                    intelligence are shaped together, not added in disconnected layers.
                  </p>
                  <Button asChild className="rounded-full">
                    <Link href="/quote">
                      Start a Conversation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] bg-[#0d0d0d]/85 border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="text-sm uppercase tracking-wide text-neutral-500 mb-3">Coming soon</div>
                <h3 className="text-2xl font-semibold text-white mb-3">Fresh articles, product notes, and system insights</h3>
                <p className="text-neutral-400 leading-relaxed">
                  This blog is being expanded. For now, it sets the foundation for future Stairio
                  writing on automation, AI workflows, software architecture, and product strategy.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {posts.map((post) => {
              const Icon = post.icon;
              return (
                <Card
                  key={post.title}
                  className="rounded-3xl bg-[#0d0d0d]/80 border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl"
                >
                  <CardContent className="p-6 sm:p-7">
                    <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-xs uppercase tracking-wide text-neutral-500 mb-3">{post.category}</div>
                    <h3 className="text-xl font-semibold text-white mb-3 leading-tight">{post.title}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">{post.excerpt}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
