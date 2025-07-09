// app/about/page.js

// This is a server component (no 'use client')

import AboutUs from "./AboutUs";

export const metadata = {
  title: "About Time Tools | Meet the Team Behind the Time Calculators",
  description:
    "Learn the story behind Time Tools, meet the passionate team, and explore our journey from a simple idea to a platform used by thousands worldwide.",
  keywords: [
    "about Time Tools",
    "time calculator team",
    "who built Time Tools",
    "time tools story",
    "team behind time tools",
    "timeline calculator developers",
    "about time app",
    "time management tools",
    "time tools mission",
  ],

  openGraph: {
    title: "About Time Tools | Meet the Team Behind the Time Calculators",
    description:
      "Learn the story behind Time Tools, meet the passionate team, and explore our journey from a simple idea to a platform used by thousands worldwide.",
    url: "https://zippler-pi.vercel.app/about",
    siteName: "Special Date Tools",
    images: [
      {
        url: "https://zippler-pi.vercel.app/Z3.png",
        width: 1200,
        height: 630,
        alt: "About Time Tools page showing team and milestones",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "About Time Tools | Meet the Team Behind the Time Calculators",
    description:
      "Learn the story behind Time Tools, meet the passionate team, and explore our journey from a simple idea to a platform used by thousands worldwide.",
    images: ["https://zippler-pi.vercel.app/Z3.png"],
  },

  alternates: {
    canonical: "https://zippler-pi.vercel.app/about",
  },
};

export default function AboutPage() {
  return <AboutUs />;
}
