import type { Metadata } from "next";
import { InfoPageShell } from "@/components/ui/info-page-shell";

export const metadata: Metadata = {
  title: "Refund Policy | Stairio",
  description: "Review the general refund and payment handling approach for Stairio engagements.",
};

const sections = [
  {
    title: "General payment approach",
    paragraphs: [
      "Stairio engagements are usually structured around defined discovery, build, delivery, or support phases. Payment terms are normally documented in a proposal, invoice schedule, or signed agreement.",
      "Because many Stairio services involve reserved time, strategic work, implementation effort, and custom delivery, payments may be partially or fully non-refundable once work has begun.",
    ],
  },
  {
    title: "When refunds may be considered",
    paragraphs: [
      "Refund requests are reviewed case by case and depend on the stage of work, the nature of the service, and the commercial terms agreed before project start.",
      "If no work has started and no delivery resources have been allocated, Stairio may consider a partial or full refund at its discretion.",
    ],
    bullets: [
      "Project status at the time of cancellation",
      "Resources already allocated or consumed",
      "Completed discovery, strategy, or implementation work",
      "Any signed commercial terms governing cancellation",
    ],
  },
  {
    title: "Subscription or recurring services",
    paragraphs: [
      "If Stairio introduces recurring software or support plans, those plans may have separate cancellation or renewal terms described on the relevant product page or service agreement.",
      "Future recurring plans may not automatically qualify for retroactive refunds unless explicitly stated.",
    ],
  },
  {
    title: "How to request a review",
    paragraphs: [
      "If you believe a refund review is appropriate, contact Stairio with your project details, invoice context, and reason for the request.",
      "We aim to review refund-related requests fairly and in good faith based on the actual status of the engagement.",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <InfoPageShell
      badge="Refund Policy"
      title="A practical policy for project payments and refund reviews"
      description="This page outlines the general refund approach for Stairio work, especially where services involve reserved capacity, strategic effort, and custom execution."
      sections={sections}
      ctaTitle="Need help reviewing a billing situation?"
      ctaDescription="If you have a payment or cancellation concern, contact us with the engagement details and we will review it carefully."
      ctaLabel="Request Support"
    />
  );
}
