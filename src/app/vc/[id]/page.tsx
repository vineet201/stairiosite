import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getVcProfileById } from "@/lib/vc-profiles";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const profile = getVcProfileById(id);

  if (!profile) {
    return {
      title: "Digital Business Card — STAIRIO",
      description: "Digital Business Card — STAIRIO Technologies",
    };
  }

  const title = `${profile.name} — STAIRIO`;
  const description = `${profile.role} at Stairio Technologies Private Limited`;
  const canonical = `/vc/${profile.id}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${profile.name} · STAIRIO`,
      description: profile.role,
      type: "profile",
      url: canonical,
    },
    twitter: {
      card: "summary",
      title: `${profile.name} · STAIRIO`,
      description: profile.role,
    },
  };
}

export default async function VcProfilePage({ params }: PageProps) {
  const { id } = await params;
  const profile = getVcProfileById(id);

  if (!profile) {
    notFound();
  }

  const targetUrl = `/vc?p=${encodeURIComponent(profile.id)}`;

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(targetUrl)});`,
        }}
      />
      <div className="text-center">
        <p className="text-sm opacity-70 mb-3">Opening digital card...</p>
        <a href={targetUrl} className="underline underline-offset-4">
          Continue to {profile.name}&apos;s card
        </a>
      </div>
    </main>
  );
}
