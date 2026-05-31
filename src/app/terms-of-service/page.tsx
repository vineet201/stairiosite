import type { Metadata } from "next";
import { InfoPageShell } from "@/components/ui/info-page-shell";

export const metadata: Metadata = {
  title: "Terms of Service | Stairio",
  description: "Read the general terms that govern Stairio products, services, and engagements.",
};

const sections = [
  {
    title: "Using Stairio services",
    paragraphs: [
      "These Terms of Service describe the general rules for using Stairio websites, products, software, and service engagements operated by STAIRIO TECHNOLOGIES PRIVATE LIMITED.",
      "By accessing or using Stairio, you agree to act lawfully, provide accurate information when requested, and avoid misuse of the platform, site, or any connected systems.",
    ],
  },
  {
    title: "Project scope and delivery",
    paragraphs: [
      "For custom work, specific deliverables, timelines, and commercial terms are typically defined in a separate proposal, agreement, or statement of work.",
      "If a proposal or service agreement conflicts with these general terms, the signed commercial agreement governs the engagement.",
    ],
    bullets: [
      "Scopes may evolve through approved revisions",
      "Delivery dates depend on timely client feedback",
      "Access and content dependencies can affect launch timing",
      "Ongoing support may require a separate agreement",
    ],
  },
  {
    title: "Intellectual property",
    paragraphs: [
      "Unless stated otherwise in a signed agreement, Stairio retains ownership of its pre-existing frameworks, internal tools, reusable systems, and proprietary methods.",
      "Client-specific deliverables are handled according to the applicable commercial agreement, including any transfer, license, or usage rights.",
    ],
  },
  {
    title: "Acceptable use and limitations",
    paragraphs: [
      "You may not use Stairio services to engage in unlawful activity, abuse infrastructure, attempt unauthorized access, or deploy harmful or deceptive workflows.",
      "Stairio may suspend or limit access if there is a security concern, payment issue, abusive behavior, or a breach of agreed terms.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <InfoPageShell
      badge="Terms of Service"
      title="Clear terms for using Stairio products and services"
      description="These terms provide a practical overview of how Stairio engagements, platforms, and digital services are generally handled."
      sections={sections}
      ctaTitle="Need clarification on a commercial engagement?"
      ctaDescription="For project-specific commercial questions, the best next step is to contact us directly so we can walk through your scope and terms."
      ctaLabel="Talk to Stairio"
    />
  );
}
