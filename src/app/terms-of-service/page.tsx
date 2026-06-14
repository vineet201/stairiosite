import type { Metadata } from "next";
import { InfoPageShell } from "@/components/ui/info-page-shell";

export const metadata: Metadata = {
  title: "Terms of Service | Stairio",
  description: "Read the terms of service governing Stairio, including Hotelify platform features and WhatsApp API integrations.",
};

const sections = [
  {
    title: "1. Agreement to Terms",
    paragraphs: [
      "These Terms of Service govern the use of websites, products, and services operated by STAIRIO TECHNOLOGIES PRIVATE LIMITED ('Stairio'). By accessing or using Stairio websites, including the Hotelify platform (https://www.stairio.com/hotelify), you agree to be bound by these terms.",
      "If you are using these services on behalf of a business entity (such as a hotel or guest house), you represent that you have the authority to bind that entity to these terms.",
    ],
  },
  {
    title: "2. Hotelify Services & Booking Platform",
    paragraphs: [
      "Hotelify provides property management software (PMS), direct booking engine capability, website hosting, and guest communication tools. Features include direct guest checkout, instant payment settlements, and booking synchronization.",
    ],
    bullets: [
      "0% commissions on direct hotel bookings",
      "Direct bank settlements powered by Razorpay payment integrations",
      "Real-time property management dashboard",
      "Custom brand domains, hosting, and automatic SSL certificates",
    ],
  },
  {
    title: "3. WhatsApp Business Integration Policy",
    paragraphs: [
      "Hotelify offers integrations with the WhatsApp Business Platform/API to allow hotels to send transactional notifications (booking confirmation, check-in instructions, check-out alerts) to guests.",
      "Hotels and businesses using our WhatsApp communication features must strictly adhere to the Meta Developer Policies and WhatsApp Business Policy.",
      "You represent and warrant that you will obtain explicit, documented opt-in consent from recipients before messaging them via WhatsApp. You are prohibited from sending spam, unsolicited marketing outreach, or violating any user opt-out request (such as if a user replies with STOP).",
      "Stairio reserves the right to suspend or terminate access to WhatsApp API integrations or API keys if any violation of Meta's terms or a high rate of user reports/complaints is detected.",
    ],
  },
  {
    title: "4. Payments & Billing",
    paragraphs: [
      "Pricing for Hotelify subscription plans (Starter, Growth, Professional) is billed as detailed on our pricing module. Transaction processing fees are determined by our integrated gateway partner (Razorpay/Stripe) and are separate from subscription costs.",
      "Stairio is not responsible for settlement delays or disputes arising between the hotel and guests, or issues on the payment gateway network.",
    ],
  },
  {
    title: "5. Limitation of Liability & Termination",
    paragraphs: [
      "Stairio and its services (including WhatsApp API connectivity) are provided on an 'as is' and 'as available' basis. We are not liable for any communication dropouts, third-party network downtimes, or business disruptions caused by API changes or suspensions on Meta platforms.",
      "Stairio may suspend or terminate your account or service access at any time for non-payment, breach of these terms, or actions that pose a security risk to our infrastructure or users.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <InfoPageShell
      badge="Terms of Service"
      title="Terms for using Stairio and Hotelify platforms"
      description="These terms provide a practical framework for using Stairio's digital products, booking engines, and communication systems."
      sections={sections}
      ctaTitle="Need clarification on a commercial engagement?"
      ctaDescription="For specific questions regarding subscription billing, API policies, or custom platform terms, please reach out to us."
      ctaLabel="Talk to Stairio"
    />
  );
}
