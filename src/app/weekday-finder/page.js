// This is a server component (no 'use client')

import DayOfWeekFinder from "./WeekdayFinder";

export const metadata = {
  title: 'Day of Week Finder | Historical Date Calculator',
  description: 'Discover what day of the week any date in history fell on. Perfect for planning, research, and curiosity.',
  keywords: ['day calculator', 'date finder', 'what day was', 'historical dates', 'weekday calculator'],
  
  openGraph: {
    title: 'Day of Week Finder | Historical Date Calculator',
    description: 'Discover what day of the week any date in history fell on. Perfect for planning, research, and curiosity.',
    url: 'https://yourdomain.com/day-finder',
    siteName: 'DateTools',
    images: [
      {
        url: 'https://yourdomain.com/day-finder-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Day of Week Finder Interface',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Day of Week Finder | Historical Date Calculator',
    description: 'Discover what day of the week any date in history fell on.',
    images: ['https://yourdomain.com/day-finder-twitter-image.png'],
  },

  alternates: {
    canonical: 'https://yourdomain.com/day-finder',
  },
};

export default function Page() {
  return <DayOfWeekFinder />;
}