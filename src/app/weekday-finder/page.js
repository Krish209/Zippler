// app/weekday-finder/page.js

// This is a server component (no 'use client')

import DayOfWeekFinder from "./WeekdayFinder";

export const metadata = {
  title: "Day of Week Finder | Historical Date Calculator",
  description:
    "Discover what day of the week any date in history fell on. Perfect for planning, research, and curiosity.",
  keywords: [
    "day calculator",
    "date finder",
    "what day was",
    "historical dates",
    "weekday calculator",
  ],

  openGraph: {
    title: "Day of Week Finder | Historical Date Calculator",
    description:
      "Discover what day of the week any date in history fell on. Perfect for planning, research, and curiosity.",
    url: "https://zippler-pi.vercel.app/weekday-finder",
    siteName: "DateTools",
    images: [
      {
        url: "https://zippler-pi.vercel.app/day-finder-og-image.png",
        width: 1200,
        height: 630,
        alt: "Day of Week Finder Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Day of Week Finder | Historical Date Calculator",
    description: "Discover what day of the week any date in history fell on.",
    images: ["https://zippler-pi.vercel.app/day-finder-twitter-image.png"],
  },

  alternates: {
    canonical: "https://zippler-pi.vercel.app/weekday-finder",
  },
};

export default function DayOfWeekFinderPage() {
  return (
    <DayOfWeekFinder
      title="Day of the Week Finder"
      content="Enter any date in history, present or future"
      slug="weekday-finder"
    />
  );
}
