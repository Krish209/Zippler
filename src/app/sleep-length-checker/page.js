// app/sleep-length-checker/page.js

// This is a server component (no 'use client')

import SleepLengthChecker from "./SleepLengthChecker";

export const metadata = {
  title: "Sleep Length checker | Optimize Your Sleep Cycles",
  description:
    "Calculate your sleep duration, analyze sleep cycles, and find optimal wake-up times for better rest and energy.",
  keywords: [
    "sleep calculator",
    "sleep cycle calculator",
    "optimal wake up time",
    "sleep duration",
    "REM sleep calculator",
    "best time to wake up",
    "sleep quality analyzer",
    "bedtime calculator",
  ],
  // authors: [{ name: 'Your Name', url: 'https://zippler-pi.vercel.app' }],

  openGraph: {
    title: "Sleep Length checker | Optimize Your Sleep Cycles",
    description:
      "Calculate your sleep duration, analyze sleep cycles, and find optimal wake-up times for better rest and energy.",
    url: "https://zippler-pi.vercel.app/sleep-length-checker",
    siteName: "Zippler",
    images: [
      {
        url: "https://zippler-pi.vercel.app/Z3.png",
        width: 1200,
        height: 630,
        alt: "Sleep checker interface showing sleep cycles and optimal wake times",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Sleep Length checker | Optimize Your Sleep Cycles",
    description:
      "Calculate your sleep duration, analyze sleep cycles, and find optimal wake-up times for better rest and energy.",
    images: ["https://zippler-pi.vercel.app/Z3.png"],
  },

  alternates: {
    canonical: "https://zippler-pi.vercel.app/sleep-length-checker",
  },
};

export default function SleepLengthCheckerPage() {
  return <SleepLengthChecker />;
}
