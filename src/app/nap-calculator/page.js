// app/sleep-calculator/page.js

import NapTimeCalculator from "./NapCalculator";

// This is a server component (no 'use client')

export const metadata = {
  title: "Nap Time Calculator | Find Ideal Nap Start or End Times",
  description:
    "Calculate the best nap durations and times to optimize your rest and alertness. Switch between nap length and wake-up time modes easily.",
  keywords: [
    "nap time calculator",
    "nap length calculator",
    "nap start time",
    "wake up time calculator",
    "ideal nap duration",
    "power nap timer",
    "nap planner",
    "short nap benefits",
  ],
  // authors: [{ name: "Your Name", url: "https://zippler-pi.vercel.app" }],

  openGraph: {
    title: "Nap Time Calculator | Optimize Your Nap and Wake-up Times",
    description:
      "Quickly find ideal nap end times or wake-up times for power naps ranging from 10 to 90 minutes.",
    url: "https://zippler-pi.vercel.app/nap-calcualtor",
    siteName: "Zippler",
    images: [
      {
        url: "https://zippler-pi.vercel.app/nap-time-image.png", // Replace with your image URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Nap Time Calculator",
    description: "Find ideal nap start or end times for better rest and alertness.",
    images: ["https://zippler-pi.vercel.app/nap-time-image.png"], // Replace with your image URL
  },

  alternates: {
    canonical: "https://zippler-pi.vercel.app/nap-calcualtor",
  },
};

export default function NapTimeCalculatorPage() {
  return <NapTimeCalculator />;
}
