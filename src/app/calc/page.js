// app/calc/page.js

// This is a server component (no 'use client')

import AllCalculator from "./AllCalculator";

export const metadata = {
  title: "Time & Date Toolkit | Smart Time Calculators for Everyday Use",
  description:
    "Explore a suite of intuitive tools including sleep calculators, time math, date differences, stopwatch, and more — fast, focused, and elegant.",
  keywords: [
    "time calculator",
    "sleep time calculator",
    "stopwatch app",
    "weekday finder",
    "date difference calculator",
    "time tools online",
    "date and time utilities",
    "time conversion tools",
  ],
  openGraph: {
    title: "Time & Date Toolkit | Smart & Elegant Time Utilities",
    description:
      "Quick, intuitive tools to help you calculate sleep, add/subtract time, find weekdays, and track time with ease.",
    url: "https://zippler-pi.vercel.app/calc",
    siteName: "Time Tools Pro",
    images: [
      {
        url: "https://zippler-pi.vercel.app/og-image-home.png", // Optional: custom OG image
        width: 1200,
        height: 630,
        alt: "Time & Date Toolkit - Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Time & Date Toolkit | Smart Online Time Tools",
    description:
      "Use our toolkit to calculate sleep, add or subtract time, find weekdays, and more — fast, focused, and free.",
    images: ["https://zippler-pi.vercel.app/twitter-image-home.png"], // Optional: custom Twitter image
  },
  alternates: {
    canonical: "https://zippler-pi.vercel.app/calc",
  },
};


export default function AllCalculatorPage() {
  return <AllCalculator />;
}
