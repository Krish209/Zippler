// app/sleep-calculator/page.js

import NapTimeCalculator from "./NapCalculator";

// This is a server component (no 'use client')

export const metadata = {
  title: "Sleep Time Calculator | Find Your Optimal Bedtime & Wake-up Time",
  description:
    "Calculate ideal sleep times based on your wake-up or bedtime. Get science-backed recommendations for complete sleep cycles to wake up refreshed.",
  keywords: [
    "sleep calculator",
    "bedtime calculator",
    "wake up time calculator",
    "sleep cycle calculator",
    "optimal sleep time",
    "REM sleep calculator",
    "best time to wake up",
    "best time to go to bed",
  ],
  // authors: [{ name: 'Your Name', url: 'https://zippler-pi.vercel.app' }],

  openGraph: {
    title: "Sleep Time Calculator | Find Your Optimal Bedtime & Wake-up Time",
    description:
      "Calculate ideal sleep times based on your wake-up or bedtime. Get science-backed recommendations for complete sleep cycles to wake up refreshed.",
    url: "https://zippler-pi.vercel.app/sleep-calculator",
    siteName: "Zippler",
    images: [
      {
        url: "https://zippler-pi.vercel.app/Z3.png",
        width: 1200,
        height: 630,
        alt: "Sleep Time Calculator interface showing optimal bedtime and wake-up time recommendations",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Sleep Time Calculator | Find Your Optimal Bedtime & Wake-up Time",
    description:
      "Calculate ideal sleep times based on your wake-up or bedtime. Get science-backed recommendations for complete sleep cycles to wake up refreshed.",
    images: ["https://zippler-pi.vercel.app/Z3.png"],
  },

  alternates: {
    canonical: "https://zippler-pi.vercel.app/sleep-calculator",
  },
};

export default function NapTimeCalculatorPage() {
  return <NapTimeCalculator />;
}
