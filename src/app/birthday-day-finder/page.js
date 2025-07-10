// app/birthday-day-finder/page.js

// This is a server component (no 'use client')

import DayOfWeekFinder from "../weekday-finder/WeekdayFinder";

export const metadata = {
  title: "Birth Day of the Week Finder | What Day Were You Born?",
  description:
    "Discover the exact day of the week you were born with our easy birth date day finder. Instantly see what weekday your birthday landed on.",
  keywords: [
    "birth day of the week",
    "day of week finder",
    "what day was I born",
    "birthday weekday calculator",
    "find my birth day",
    "day of birth calculator",
    "birthday day name",
    "weekday of birth",
    "day born on",
  ],

  openGraph: {
    title: "Birth Day of the Week Finder | What Day Were You Born?",
    description:
      "Discover the exact day of the week you were born with our easy birth date day finder. Instantly see what weekday your birthday landed on.",
    url: "https://zippler-pi.vercel.app/birthday-day-finder",
    siteName: "Zippler",
    images: [
      {
        url: "https://zippler-pi.vercel.app/Z3.png",
        width: 1200,
        height: 630,
        alt: "Birthday Day of the Week Finder showing results",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Birth Day of the Week Finder | What Day Were You Born?",
    description:
      "Discover the exact day of the week you were born with our easy birth date day finder. Instantly see what weekday your birthday landed on.",
    images: [
      "https://zippler-pi.vercel.app/Z3.png",
    ],
  },

  alternates: {
    canonical: "https://zippler-pi.vercel.app/birthday-day-finder",
  },
};

export default function BirthdayOftheWeekPage() {
  return (
    <DayOfWeekFinder
      title="Birth Day of the Week Finder"
      content="Enter your Birthday"
    />
  );
}
