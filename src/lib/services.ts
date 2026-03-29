export type StairioService = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  accent: string;
  features: string[];
  badge?: string;
};

export const stairioServices: StairioService[] = [
  {
    id: "ai-automation",
    number: "001",
    title: "AI Automation",
    tagline: "Autonomous AI Workflow Systems",
    description:
      "We build AI automation systems that handle repetitive workflows, reduce operational drag, and help teams execute faster.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    accent: "#D8B4FE",
    features: [
      "Task Automation",
      "AI Workflows",
      "Agent Logic",
      "Operational Speed",
    ],
  },
  {
    id: "business-automation",
    number: "002",
    title: "Business Automation",
    tagline: "Automated Operational Systems",
    description:
      "We automate business processes across teams so your operations scale smoothly without adding unnecessary manual work.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    accent: "#8CF0A9",
    features: [
      "Process Design",
      "System Automation",
      "Team Operations",
      "Workflow Control",
    ],
  },
  {
    id: "agaas",
    number: "003",
    title: "AGAAS",
    tagline: "Agents as a Service",
    description:
      "Deploy intelligent AI agents for support, calling, follow-ups, qualification, and other high-volume customer workflows.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    accent: "#FFB6AE",
    features: [
      "Voice Agents",
      "Chat Agents",
      "Lead Handling",
      "24/7 Support",
    ],
    badge: "AI-Powered",
  },
  {
    id: "full-stack-software-development",
    number: "004",
    title: "Full-stack Software Development",
    tagline: "End-to-End Product Engineering",
    description:
      "We design and develop scalable web apps, mobile apps, APIs, and cloud systems built for long-term growth.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    accent: "#FF9132",
    features: [
      "Web Apps",
      "Mobile Apps",
      "API Development",
      "Cloud Infrastructure",
    ],
  },
  {
    id: "intelligent-platforms",
    number: "005",
    title: "Intelligent Platforms",
    tagline: "AI-Native Platform Engineering",
    description:
      "We create scalable intelligent platforms that combine product strategy, automation, and modern AI-native architecture.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    accent: "#5DDF18",
    features: [
      "Platform Systems",
      "AI Integration",
      "Scalable Architecture",
      "Product Strategy",
    ],
  },
  {
    id: "custom-ai",
    number: "006",
    title: "Custom AI",
    tagline: "AI Built for Your Business",
    description:
      "Bespoke AI solutions tailored to your business model, data, operations, and growth goals.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    accent: "#7DD3FC",
    features: [
      "Custom Integrations",
      "Predictive Analytics",
      "Workflow Automation",
      "Data Intelligence",
    ],
  },
];

export const stairioServiceOptions = stairioServices.map(
  (service) => service.title,
);
