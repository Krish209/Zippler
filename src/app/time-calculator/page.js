// This is a server component (no 'use client')

import TimeCalculator from "../time-calculator/TimeCalculator";

export const metadata = {
  title: "Time Duration Calculator | Calculate Time Between Two Points",
  description:
    "Free online tool to calculate duration between two times. Supports 12-hour and 24-hour formats. Get hours, minutes, and seconds between any two times.",
  keywords: [
    "time calculator",
    "duration calculator",
    "time difference",
    "hours calculator",
    "work hours calculator",
    "time between times",
    "12-hour format calculator",
    "24-hour format calculator",
  ],
  // authors: [{ name: 'Your Name', url: 'https://zippler-pi.vercel.app' }],

  openGraph: {
    title: "Time Duration Calculator | Precise Time Difference Tool",
    description:
      "Calculate precise duration between any two times in hours, minutes, and seconds",
    url: "https://zippler-pi.vercel.app/time-calculator",
    siteName: "Time Tools",
    images: [
      {
        url: "https://zippler-pi.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Time Duration Calculator",
    description: "Calculate precise duration between any two times",
    images: ["https://zippler-pi.vercel.app/og-image.jpg"],
  },

  alternates: {
    canonical: "https://zippler-pi.vercel.app/time-calculator",
  },
};

export default function TimeCalculatorPage() {
  return <TimeCalculator />;
}
