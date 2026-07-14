import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SiteChrome } from "@/components/layout/site-chrome";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stairio.com"),
  title: "Stairio Technologies - AI Native Solutions",
  description: "AI-first systems that transform how businesses operate",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Stairio Technologies - AI Native Solutions",
    description: "AI-first systems that transform how businesses operate",
    url: "/",
    siteName: "Stairio",
    type: "website",
    images: [
      {
        url: "/images/Logo/Stairio.png",
        width: 1254,
        height: 1254,
        alt: "Stairio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stairio Technologies - AI Native Solutions",
    description: "AI-first systems that transform how businesses operate",
    images: ["/images/Logo/Stairio.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${satoshi.variable} antialiased`}
    >
      <body suppressHydrationWarning className="font-sans">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
