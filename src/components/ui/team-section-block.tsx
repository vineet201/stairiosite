"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Cloud,
  Code2,
  DatabaseZap,
  Mail,
  MapPin,
  Palette,
  Sparkles,
  Users,
} from "lucide-react";
import { useState } from "react";

const teamMembers = [
  {
    name: "Alka Prasad",
    role: "Founding Director and Strategist",
    bio: "Alka guides Stairio's company direction, product positioning, and strategy for building AI-native systems for Indian service businesses.",
    image: "/images/team/alka-prasad.png",
    location: "India",
    skills: ["Strategy", "Product Direction", "Operations"],
    gradient: "from-white/10 via-white/5 to-transparent",
    email: "alka@stairio.com",
  },
  {
    name: "Vineet Kumar Sinha",
    role: "Lead Engineer",
    bio: "Vineet leads product engineering across Stairio's AI-native platforms, with a focus on full-stack systems, automation workflows, and scalable product delivery.",
    image: "/images/team/vineet-kumar-sinha.png",
    location: "India",
    skills: ["Full-Stack Engineering", "AI Workflows", "Product Systems"],
    gradient: "from-white/12 via-white/5 to-transparent",
    email: "vineet@stairio.com",
  },
];

const capabilityAreas = [
  {
    title: "AI Engineering",
    description: "Agent workflows, automation logic, prompt flows, and human-reviewed AI product behavior.",
    icon: BrainCircuit,
  },
  {
    title: "Full-Stack Product",
    description: "Customer-facing apps, dashboards, APIs, booking flows, lead capture, and admin tools.",
    icon: Code2,
  },
  {
    title: "Cloud & Delivery",
    description: "Deployment pipelines, hosting setup, environment handling, monitoring habits, and release support.",
    icon: Cloud,
  },
  {
    title: "Data & Integrations",
    description: "Business records, operational data, third-party APIs, auth flows, and reusable service layers.",
    icon: DatabaseZap,
  },
  {
    title: "UX & Product Design",
    description: "Operator-friendly journeys, product prototypes, design systems, and conversion-focused interfaces.",
    icon: Palette,
  },
  {
    title: "Domain & GTM Research",
    description: "Hospitality, MSME, fitness, and sales workflows translated into pilot-ready product requirements.",
    icon: Users,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

function TeamMemberCard({ member }: { member: (typeof teamMembers)[0] }) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left - width / 2) / (width / 2);
    const y = (e.clientY - rect.top - height / 2) / (height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div variants={itemVariants} className="perspective-1000">
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="group relative"
      >
        <Card className="relative overflow-hidden rounded-3xl border border-border/60 bg-card  backdrop-blur-xl transition-shadow duration-500">
          {/* Animated gradient overlay */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
            animate={
              isHovered
                ? { opacity: 1 }
                : { opacity: shouldReduceMotion ? 0.05 : 0 }
            }
          />

          {/* Sparkle effect on hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isHovered
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: shouldReduceMotion ? 1 : 0.6 }
            }
            className="absolute right-4 top-4 z-10"
          >
            <Sparkles className="h-5 w-5 text-primary" aria-hidden />
          </motion.div>

          <div className="relative z-10 p-6">
            {/* Avatar Section */}
            <div className="mb-4 flex justify-center">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="absolute -inset-2 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0))`,
                  }}
                  animate={
                    isHovered
                      ? {
                          rotate: shouldReduceMotion ? 0 : 360,
                          scale: shouldReduceMotion ? 1 : [1, 1.08, 1],
                        }
                      : { rotate: 0, scale: 1 }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0.6 : 3,
                    repeat: shouldReduceMotion ? 0 : Infinity,
                    ease: "linear",
                  }}
                />
                <div className="relative h-28 w-28 overflow-hidden rounded-full border border-border/60 bg-card/80 p-1">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full rounded-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Info Section */}
            <div className="text-center">
              <motion.h3
                className="mb-1 text-xl font-semibold tracking-tight text-white"
                animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {member.name}
              </motion.h3>
              <Badge
                variant="secondary"
                className="mb-2 bg-white/10 text-xs uppercase tracking-[0.28em] text-[var(--muted-foreground)] backdrop-blur"
              >
                {member.role}
              </Badge>

              <motion.div
                className="mb-3 flex items-center justify-center gap-1 text-xs text-[var(--muted-foreground)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <MapPin className="h-3 w-3" aria-hidden />
                <span>{member.location}</span>
              </motion.div>

              <p className="mb-4 text-sm text-[var(--muted-foreground)]">
                {member.bio}
              </p>

              {/* Skills */}
              <motion.div
                className="mb-4 flex flex-wrap justify-center gap-1.5"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isHovered ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 0 }
                }
                transition={{ duration: 0.3 }}
              >
                {member.skills.map((skill, idx) => (
                  <motion.div
                    key={skill}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 * idx, type: "spring" }}
                  >
                    <Badge
                      variant="outline"
                      className="border-border/60 bg-white/5 text-xs text-[var(--muted-foreground)] transition-colors hover:bg-white/10"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>

              {/* Contact */}
              <motion.div
                className="flex justify-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.a
                  href={`mailto:${member.email}`}
                  aria-label={`Email ${member.name}`}
                  initial={{ scale: 0.85 }}
                  animate={isHovered ? { scale: 1 } : { scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/40 bg-white/5 text-[var(--muted-foreground)] transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function TeamSectionBlock() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="team-section-heading"
      className="relative w-full overflow-hidden px-4 py-20 sm:px-6 lg:px-10"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: shouldReduceMotion ? 1 : [1, 1.18, 1],
            rotate: shouldReduceMotion ? 0 : [0, 90, 0],
            opacity: [0.12, 0.3, 0.12],
          }}
          transition={{
            duration: shouldReduceMotion ? 0.6 : 18,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "linear",
          }}
          className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/25 blur-[180px]"
        />
        <motion.div
          animate={{
            scale: shouldReduceMotion ? 1 : [1.1, 1, 1.1],
            rotate: shouldReduceMotion ? 0 : [0, -90, 0],
            opacity: [0.12, 0.32, 0.12],
          }}
          transition={{
            duration: shouldReduceMotion ? 0.6 : 16,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#5DDF18]/20 blur-[180px]"
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="mb-16 text-center"
        >
          <motion.div className="mb-6 inline-block">
            <Badge
              className="gap-2 bg-white/10 text-[var(--muted-foreground)] backdrop-blur"
              variant="secondary"
            >
              <Sparkles className="h-3 w-3" aria-hidden />
              Our Dream Team
            </Badge>
          </motion.div>

          <motion.h2
            id="team-section-heading"
            className="mb-6 bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-5xl font-semibold tracking-tight text-transparent md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            The builders behind
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Stairio&apos;s products
            </span>
          </motion.h2>

          <motion.p
            className="mx-auto max-w-2xl text-lg text-[var(--muted-foreground)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A focused product and engineering team building AI-native systems
            for hospitality, service MSMEs, sales teams, and operators.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
        >
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </motion.div>

        {/* Capability Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-20"
        >
          <div className="mb-8 text-center">
            <Badge
              className="mb-4 gap-2 bg-white/10 text-[var(--muted-foreground)] backdrop-blur"
              variant="secondary"
            >
              <Sparkles className="h-3 w-3" aria-hidden />
              Capability Matrix
            </Badge>
            <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Execution strengths for product pilots and scale
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilityAreas.map((area) => {
              const Icon = area.icon;

              return (
                <Card
                  key={area.title}
                  className="rounded-3xl border border-border/60 bg-card/80 p-6 backdrop-blur-xl"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-white/5">
                    <Icon className="h-5 w-5 text-white" aria-hidden />
                  </div>
                  <h4 className="mb-3 text-lg font-semibold text-white">
                    {area.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {area.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="inline-flex flex-col items-center gap-6 rounded-3xl border border-border/60 bg-card/80 px-10 py-8 shadow-[0_20px_70px_-30px_rgba(15,23,42,0.6)] backdrop-blur-xl">
            <h3 className="text-2xl font-semibold">Join Our Amazing Team</h3>
            <p className="max-w-xl text-sm text-[var(--muted-foreground)]">
              We&apos;re building a team for AI products that can move from
              prototype to product trials and commercial deployment.
            </p>
            <a
              href="https://careers.stairio.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button
                size="lg"
                className="group relative overflow-hidden rounded-full bg-primary px-10 py-6 text-primary-foreground shadow-lg shadow-primary/25 transition-transform duration-300 hover:translate-y-[-2px]"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  animate={
                    shouldReduceMotion ? undefined : { x: ["-120%", "120%"] }
                  }
                  transition={
                    shouldReduceMotion
                      ? undefined
                      : { repeat: Infinity, duration: 2, ease: "linear" }
                  }
                />
                <span className="relative font-medium">View Open Positions</span>
                <motion.span
                  className="relative ml-2"
                  animate={shouldReduceMotion ? undefined : { x: [0, 5, 0] }}
                  transition={
                    shouldReduceMotion
                      ? undefined
                      : { repeat: Infinity, duration: 1.5 }
                  }
                >
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </motion.span>
              </Button>
            </a>
          </Card>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 flex items-center justify-center gap-2">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                Builder Philosophy
              </h3>
            </div>
            <motion.p
              className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              &ldquo;At Stairio, we build product systems that help service businesses automate work, improve customer journeys, and scale with measurable software-led leverage.&rdquo;
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
