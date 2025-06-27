// This is a server component (no 'use client')

import SleepLengthChecker from "./SleepLengthChecker";

export const metadata = {
  title: "Sleep Length Calculator | Optimize Your Sleep Cycles",
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
  // authors: [{ name: 'Your Name', url: 'https://yourwebsite.com' }],

  openGraph: {
    title: "Sleep Length Calculator | Optimize Your Sleep Cycles",
    description:
      "Calculate your sleep duration, analyze sleep cycles, and find optimal wake-up times for better rest and energy.",
    url: "https://yourwebsite.com/sleep-calculator",
    siteName: "Sleep Wellness Tools",
    images: [
      {
        url: "https://yourwebsite.com/sleep-calculator-og-image.png",
        width: 1200,
        height: 630,
        alt: "Sleep calculator interface showing sleep cycles and optimal wake times",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sleep Length Calculator | Optimize Your Sleep Cycles",
    description:
      "Calculate your sleep duration, analyze sleep cycles, and find optimal wake-up times for better rest and energy.",
    images: ["https://yourwebsite.com/sleep-calculator-twitter-image.png"],
  },

  alternates: {
    canonical: "https://yourwebsite.com/sleep-calculator",
  },
};

export default function Page() {
  return <SleepLengthChecker />;
}
