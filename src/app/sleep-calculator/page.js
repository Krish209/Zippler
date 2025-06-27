// This is a server component (no 'use client')

import SleepTimeCalculator from "./SleepTimeCalculator";

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
  // authors: [{ name: 'Your Name', url: 'https://yourwebsite.com' }],

  openGraph: {
    title: "Sleep Time Calculator | Find Your Optimal Bedtime & Wake-up Time",
    description:
      "Calculate ideal sleep times based on your wake-up or bedtime. Get science-backed recommendations for complete sleep cycles to wake up refreshed.",
    url: "https://yourwebsite.com/sleep-time-calculator",
    siteName: "Sleep Wellness Tools",
    images: [
      {
        url: "https://yourwebsite.com/sleep-time-calculator-og-image.png",
        width: 1200,
        height: 630,
        alt: "Sleep Time Calculator interface showing optimal bedtime and wake-up time recommendations",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sleep Time Calculator | Find Your Optimal Bedtime & Wake-up Time",
    description:
      "Calculate ideal sleep times based on your wake-up or bedtime. Get science-backed recommendations for complete sleep cycles to wake up refreshed.",
    images: ["https://yourwebsite.com/sleep-time-calculator-twitter-image.png"],
  },

  alternates: {
    canonical: "https://yourwebsite.com/sleep-time-calculator",
  },
};

export default function Page() {
  return <SleepTimeCalculator />;
}
