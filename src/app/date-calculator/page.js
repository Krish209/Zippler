// This is a server component (no 'use client')

import DateCalculator from "./DateCalculator";

export const metadata = {
  title: "Date Duration Calculator | Time Between Dates",
  description:
    "Calculate exact duration between two dates in years, months, and days. Perfect for project planning, age calculation, and date difference analysis.",
  keywords: [
    "date calculator",
    "duration calculator",
    "time between dates",
    "date difference",
    "days between dates",
    "months between dates",
    "years between dates",
    "project timeline calculator",
  ],
  // authors: [{ name: 'Your Name', url: 'https://yourwebsite.com' }],

  openGraph: {
    title: "Date Duration Calculator | Time Between Dates",
    description:
      "Calculate exact duration between two dates in years, months, and days. Perfect for project planning, age calculation, and date difference analysis.",
    url: "https://yourwebsite.com/date-calculator",
    siteName: "Time Calculation Tools",
    images: [
      {
        url: "https://yourwebsite.com/date-calculator-og-image.png",
        width: 1200,
        height: 630,
        alt: "Date Calculator interface showing duration between dates",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Date Duration Calculator | Time Between Dates",
    description:
      "Calculate exact duration between two dates in years, months, and days. Perfect for project planning, age calculation, and date difference analysis.",
    images: ["https://yourwebsite.com/date-calculator-twitter-image.png"],
  },

  alternates: {
    canonical: "https://yourwebsite.com/date-calculator",
  },
};

export default function DateCalculatorPage() {
  return <DateCalculator />;
}
