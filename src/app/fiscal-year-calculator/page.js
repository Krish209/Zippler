// app/date-calculator/page.js

// This is a server component (no 'use client')

import FiscalYearCalculator from "./FiscalYearCalculator";

export const metadata = {
  title: "Fiscal Year Calculator | State & Federal FY and Biennium Dates",
  description:
    "Calculate state and federal fiscal years and biennium periods based on any selected date. Understand fiscal cycles for budgeting and reporting.",
  keywords: [
    "fiscal year calculator",
    "state fiscal year",
    "federal fiscal year",
    "biennium calculator",
    "budgeting tool",
    "fiscal cycles",
    "date to fiscal year",
    "government fiscal year",
  ],
  // authors: [{ name: 'Your Name', url: 'https://zippler-pi.vercel.app' }],

  openGraph: {
    title: "Fiscal Year Calculator | Accurate State & Federal Fiscal Dates",
    description:
      "Determine state fiscal year, federal fiscal year, and biennium periods from any date with this easy-to-use calculator.",
    url: "https://zippler-pi.vercel.app/fiscal-year-calculator",
    siteName: "Zippler",
    images: [
      {
        url: "https://zippler-pi.vercel.app/Z3.png", // Replace with actual image URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Fiscal Year Calculator",
    description: "Calculate state and federal fiscal years plus biennium periods from any date",
    images: ["https://zippler-pi.vercel.app/Z3.png"], // Replace with actual image URL
  },

  alternates: {
    canonical: "https://zippler-pi.vercel.app/fiscal-year-calculator",
  },
};


export default function DateCalculatorPage() {
  return <FiscalYearCalculator />;
}
