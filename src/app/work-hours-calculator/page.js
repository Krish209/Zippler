// app/weekday-finder/page.js

// This is a server component (no 'use client')

import WorkHoursCalculator from "./WorkHoursCalculator";

export const metadata = {
  title: "Work Hours Calculator | Calculate Work Duration & Earnings",
  description:
    "Free online tool to calculate total work hours, deduct breaks, and estimate earnings based on your hourly rate. Supports overnight shifts and customizable breaks.",
  keywords: [
    "work hours calculator",
    "work duration calculator",
    "earnings calculator",
    "break time deduction",
    "hourly rate calculator",
    "shift calculator",
    "calculate work time",
    "time and earnings calculator",
  ],
  // authors: [{ name: 'Your Name', url: 'https://zippler-pi.vercel.app' }],

  openGraph: {
    title: "Work Hours Calculator | Calculate Your Work Time & Earnings",
    description:
      "Accurately calculate work hours, breaks, and earnings with this simple online tool.",
    url: "https://zippler-pi.vercel.app/work-hours-calculator",
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
    card: "summary",
    title: "Work Hours Calculator",
    description: "Calculate work duration and earnings including breaks.",
    images: ["https://zippler-pi.vercel.app/Z3.png"],
  },

  alternates: {
    canonical: "https://zippler-pi.vercel.app/work-hours-calculator",
  },
};

export default function WorkHoursCalculatorPage() {
  return <WorkHoursCalculator />;
}
