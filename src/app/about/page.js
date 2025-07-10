// app/about/page.js

// This is a server component (no 'use client')

import AboutUs from "./AboutUs";

export const metadata = {
  title: "About Zippler | Meet the Team Behind the Time Calculators",
  description:
    "Learn the story behind Zippler, meet the passionate team, and explore our journey from a simple idea to a platform used by thousands worldwide.",
  keywords: [
    "about Zippler",
    "time calculator team",
    "who built Zippler",
    "Zippler story",
    "team behind Zippler",
    "timeline calculator developers",
    "about time app",
    "time management tools",
    "Zippler mission",
  ],

  openGraph: {
    title: "About Zippler | Meet the Team Behind the Time Calculators",
    description:
      "Learn the story behind Zippler, meet the passionate team, and explore our journey from a simple idea to a platform used by thousands worldwide.",
    url: "https://zippler-pi.vercel.app/about",
    siteName: "Zippler",
    images: [
      {
        url: "https://zippler-pi.vercel.app/Z3.png",
        width: 1200,
        height: 630,
        alt: "About Zippler page showing team and milestones",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "About Zippler | Meet the Team Behind the Time Calculators",
    description:
      "Learn the story behind Zippler, meet the passionate team, and explore our journey from a simple idea to a platform used by thousands worldwide.",
    images: ["https://zippler-pi.vercel.app/Z3.png"],
  },

  alternates: {
    canonical: "https://zippler-pi.vercel.app/about",
  },
};

export default function AboutPage() {
  return <AboutUs />;
}
