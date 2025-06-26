// This is a server component (no 'use client')

import AgeCalculator from "./AgeCalculator";

export const metadata = {
    title: "Time Span Calculator | Calculate Days Between Dates",
    description: "Free online tool to calculate exact days, weeks, months, or years between two dates. Perfect for project planning, age calculation, and event countdowns.",
    keywords: ["date calculator", "days between dates", "time span calculator", "duration calculator", "date difference"],
    openGraph: {
      title: "Time Span Calculator | Calculate Date Differences",
      description: "Instantly calculate the duration between any two dates in multiple time units",
      url: "https://yourdomain.com/date-calculator",
      siteName: "Your Site Name",
      images: [
        {
          url: "/og-date-calculator.jpg",
          width: 1200,
          height: 630,
          alt: "Time Span Calculator Interface",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Time Span Calculator",
      description: "Calculate exact time between dates with one click",
      images: ["/twitter-date-calculator.jpg"],
    },
  };

export default function Page() {
  return <AgeCalculator />;
}