import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Brian Prakoso — Freelance Illustrator",
  description:
    "I'm a figure illustrator specialized in anime style, been studying it's fundamental for at least 2 years and once worked as a freelancer game designer",
  generator: "Next.js",
  applicationName: "Brian Prakoso",
  keywords: [
    "freelance",
    "illustrator",
    "character design",
    "concept art",
    "design graphic",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Brian Prakoso — Freelance Illustrator",
    description:
      "I'm a figure illustrator specialized in anime style, been studying it's fundamental for at least 2 years and once worked as a freelancer game designer",
    url: "http://localhost:3000/",
    siteName: "localhost:3000",

    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Prakoso — Freelance Illustrator",
    description:
      "I'm a figure illustrator specialized in anime style, been studying it's fundamental for at least 2 years and once worked as a freelancer game designer",
    creator: "brian_",
    creatorId: "1243720976552144897",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
