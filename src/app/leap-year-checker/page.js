// app/leap-year-checker/page.js

// This is a server component (no 'use client')

import LeapYearChecker from "./LeapYearChecker";

export const metadata = {
  title: "Leap Year Checker | Verify Any Year Online",
  description:
    "Instantly check if any year is a leap year with our accurate verification tool. Understand leap year rules and see why February gets an extra day every 4 years.",
  keywords: [
    "leap year checker",
    "is year a leap year",
    "leap year calculator",
    "leap year test",
    "year validator",
    "366 day year",
    "Gregorian calendar checker",
  ],
  // authors: [{ name: "Your Name", url: "https://zippler-pi.vercel.app" }],

  openGraph: {
    title: "Leap Year Checker | Verify Any Year Online",
    description:
      "Instantly check if any year is a leap year with our accurate verification tool. Understand leap year rules and see why February gets an extra day every 4 years.",
    url: "https://zippler-pi.vercel.app/leap-year-checker",
    siteName: "Zippler",
    images: [
      {
        url: "https://zippler-pi.vercel.app/Z3.png",
        width: 1200,
        height: 630,
        alt: "Leap Year Checker Tool Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Leap Year Checker | Verify Any Year Online",
    description:
      "Instantly check if any year is a leap year with our free online tool",
    images: [
      "https://zippler-pi.vercel.app/Z3.png",
    ],
  },

  alternates: {
    canonical: "https://zippler-pi.vercel.app/leap-year-checker",
  },
};

export default function LeapYearCheckerPage() {
  return <LeapYearChecker />;
}
