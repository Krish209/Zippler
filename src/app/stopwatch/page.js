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
  // authors: [{ name: 'Your Name', url: 'https://yourwebsite.com' }],

  openGraph: {
    title: "Precision Stopwatch | Time Tracking Tool",
    description:
      "Accurate stopwatch with lap timing functionality. Track time with millisecond precision.",
    url: "https://yourwebsite.com/stopwatch",
    siteName: "Your App Name",
    images: [
      {
        url: "https://yourwebsite.com/stopwatch-og-image.png",
        width: 1200,
        height: 630,
        alt: "Stopwatch Interface Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Precision Stopwatch | Time Tracking Tool",
    description:
      "Accurate stopwatch with lap timing functionality. Track time with millisecond precision.",
    images: ["https://yourwebsite.com/stopwatch-twitter-image.png"],
  },

  alternates: {
    canonical: "https://yourwebsite.com/stopwatch",
  },
};

export default function StopwatchPage() {
  return <Stopwatch />;
}
