import type { Metadata } from "next";
import { InfoPageShell } from "@/components/ui/info-page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy | Stairio",
  description: "Understand how Stairio collects, uses, and protects information.",
};

const sections = [
  {
    title: "What information we collect",
    paragraphs: [
      "Stairio may collect information you submit directly, such as your name, email address, company details, phone number, and project requirements.",
      "We may also collect limited technical data such as browser details, device information, and site usage signals to improve performance and user experience.",
    ],
  },
  {
    title: "How we use information",
    paragraphs: [
      "We use submitted information to respond to inquiries, deliver requested services, improve products, communicate about engagements, and operate the website securely.",
      "We do not use contact information in ways that are inconsistent with the purpose for which it was originally provided.",
    ],
    bullets: [
      "Respond to quote and project requests",
      "Improve site performance and product experience",
      "Communicate service or project updates",
      "Maintain security, compliance, and fraud prevention",
    ],
  },
  {
    title: "Data sharing and protection",
    paragraphs: [
      "We may share information with trusted service providers who help us operate the business, such as infrastructure, analytics, or communication vendors, when reasonably necessary.",
      "Stairio takes practical steps to protect information, but no internet-based system can guarantee absolute security.",
    ],
  },
  {
    title: "Your choices",
    paragraphs: [
      "If you want to review, update, or request deletion of information you have submitted to Stairio, you can contact us directly.",
      "Where applicable, we will make commercially reasonable efforts to honor those requests in line with operational, legal, and contractual requirements.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <InfoPageShell
      badge="Privacy Policy"
      title="How Stairio handles information with care"
      description="We believe trust is built through clarity, so this policy outlines the general ways Stairio collects, uses, and protects information."
      sections={sections}
      ctaTitle="Questions about data handling?"
      ctaDescription="If you want clarification on what information we collect or how it is used in a project context, reach out and we will help."
      ctaLabel="Contact Stairio"
    />
  );
}
