// app/stopwatch/page.js

// This is a server component (no 'use client')

import Stopwatch from "./Stopwatch";

export const metadata = {
  title: "Precision Stopwatch | Time Tracking Tool",
  description:
    "Accurate stopwatch with lap timing functionality. Track time with millisecond precision.",
  keywords: [
    "stopwatch",
    "timer",
    "time tracking",
    "lap timer",
    "precision timing",
  ],
  // authors: [{ name: 'Your Name', url: 'https://zippler-pi.vercel.app' }],

  openGraph: {
    title: "Precision Stopwatch | Time Tracking Tool",
    description:
      "Accurate stopwatch with lap timing functionality. Track time with millisecond precision.",
    url: "https://zippler-pi.vercel.app/stopwatch",
    siteName: "Zippler",
    images: [
      {
        url: "https://zippler-pi.vercel.app/Z3.png",
        width: 1200,
        height: 630,
        alt: "Stopwatch Interface Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Precision Stopwatch | Time Tracking Tool",
    description:
      "Accurate stopwatch with lap timing functionality. Track time with millisecond precision.",
    images: ["https://zippler-pi.vercel.app/Z3.png"],
  },

  alternates: {
    canonical: "https://zippler-pi.vercel.app/stopwatch",
  },
};

export default function StopwatchPage() {
  return <Stopwatch />;
}
