// app/stopwatch/page.js

// This is a server component (no 'use client')

import GoldenHourCalculator from "./GoldenHourCalculator";

export const metadata = {
  title: "Golden Hour Calculator | Find Best Natural Light for Photography",
  description:
    "Calculate golden hour and blue hour times for any location and date. Perfect for photographers to plan shoots with natural light.",
  keywords: [
    "golden hour calculator",
    "blue hour calculator",
    "sunrise sunset times",
    "photography lighting",
    "natural light calculator",
    "sun position calculator",
    "photography tips",
    "sunrise sunset calculator",
    "golden hour today",
  ],
  openGraph: {
    title: "Golden Hour Calculator | Perfect Natural Lighting for Photos",
    description:
      "Find the golden hour and blue hour timings for any location and date to capture stunning photos.",
    url: "https://zippler-pi.vercel.app/golden-hour-calculator",
    siteName: "Zippler",
    images: [
      {
        url: "https://zippler-pi.vercel.app/Z3.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Hour Calculator",
    description: "Calculate golden and blue hour times for perfect photography lighting.",
    images: ["https://zippler-pi.vercel.app/Z3.png"],
  },
  alternates: {
    canonical: "https://zippler-pi.vercel.app/golden-hour-calculator",
  },
};

export default function StopwatchPage() {
  return <GoldenHourCalculator />;
}
