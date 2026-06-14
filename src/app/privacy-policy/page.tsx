import type { Metadata } from "next";
import { InfoPageShell } from "@/components/ui/info-page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy | Stairio",
  description: "Understand how Stairio collects, uses, and protects information, including WhatsApp Business Platform communications.",
};

const sections = [
  {
    title: "1. Information We Collect",
    paragraphs: [
      "STAIRIO TECHNOLOGIES PRIVATE LIMITED, operating as Stairio, collects information that you or your hotel guests submit directly to our services, including the Hotelify platform (https://www.stairio.com/hotelify). This may include names, email addresses, phone numbers, company details, and room reservation requirements.",
      "For communications routed via the WhatsApp Business Platform, we collect and process the recipient's phone number, name, message transmission status, and any customer support chat history. We also collect limited technical details like browser types, device identifiers, IP addresses, and usage signals.",
    ],
  },
  {
    title: "2. How We Use Information",
    paragraphs: [
      "We use collected information to provide and improve our products, respond to queries, run the booking engine, manage properties, and facilitate communications. For WhatsApp messaging, we only send transactional and service-related notifications on behalf of participating hotels.",
    ],
    bullets: [
      "Process and confirm hotel bookings",
      "Send reservation confirmations, check-in details, and invoices via SMS or WhatsApp",
      "Facilitate guest support and automated query replies",
      "Monitor site performance, prevent fraud, and maintain regulatory compliance",
    ],
  },
  {
    title: "3. WhatsApp Messaging & Consent (Opt-in/Opt-out)",
    paragraphs: [
      "We strictly adhere to the Meta Developer and WhatsApp Business Policies. We only send notifications via the WhatsApp Business Platform to users (guests) who have explicitly opted in to receive updates.",
      "Opt-in consent is collected at the point of booking, registration, or guest check-in (e.g., ticking a checkbox to receive reservation updates on WhatsApp). We do not send unsolicited marketing or promotional messages without separate, explicit consent.",
      "Users can opt-out of receiving further WhatsApp notifications at any time. To unsubscribe, reply with the word 'STOP' directly to any message received, or contact us/the booking hotel to request the removal of your number from messaging lists.",
    ],
  },
  {
    title: "4. Data Sharing & Third-Party Processors",
    paragraphs: [
      "We do not sell, rent, or trade personal data or phone numbers with third parties for marketing purposes. When we route messaging notifications, data (phone numbers and message templates) is securely processed by Meta Platforms, Inc. (our infrastructure and messaging service provider).",
      "We may also share necessary data with payment processing partners (like Razorpay) and hosting providers to complete bookings, under strict confidentiality and security terms.",
    ],
  },
  {
    title: "5. User Rights & Data Deletion",
    paragraphs: [
      "Under applicable data protection laws, including the Digital Personal Data Protection Act (DPDPA), users have the right to access, correct, or request deletion of their personal information.",
      "If you wish to review, update, or request the erasure of your phone number or other guest data, you can submit a request directly to support@stairio.com. We will make reasonable efforts to process these requests in accordance with legal requirements.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <InfoPageShell
      badge="Privacy Policy"
      title="How Stairio handles information with care"
      description="We believe trust is built through clarity. This policy outlines how Stairio and Hotelify collect, process, and protect your information, including WhatsApp messaging."
      sections={sections}
      ctaTitle="Questions about data handling?"
      ctaDescription="If you want clarification on how we collect data or how WhatsApp notifications are handled for your hotel booking, reach out to us."
      ctaLabel="Contact Stairio"
    />
  );
}
