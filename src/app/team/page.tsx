import { TeamSectionBlock } from "@/components/ui/team-section-block";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Stairio",
  description:
    "Meet the builders behind Stairio's AI-native products for Indian service businesses, hospitality operators, and MSMEs.",
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background">
      <TeamSectionBlock />
    </main>
  );
}
