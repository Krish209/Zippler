// app/age-calculator/page.js

// This is a server component (no 'use client')

import AgeCalculator from "./AgeCalculator";

export const metadata = {
  title: "Age Calculator | Find Your Exact Age in Years, Months, Days",
  description:
    "Calculate your precise age including years, months, and days since birth. Discover when your next birthday will be with our accurate age calculator tool.",
  keywords: [
    "age calculator",
    "birthday calculator",
    "how old am I",
    "exact age calculator",
    "date of birth calculator",
    "age in years months days",
    "next birthday calculator",
    "birth date age calculator",
  ],
  // authors: [{ name: 'Your Name', url: 'https://zippler-pi.vercel.app' }],

  openGraph: {
    title: "Age Calculator | Find Your Exact Age in Years, Months, Days",
    description:
      "Calculate your precise age including years, months, and days since birth. Discover when your next birthday will be with our accurate age calculator tool.",
    url: "https://zippler-pi.vercel.app/age-calculator",
    siteName: "Date & Time Tools",
    images: [
      {
        url: "https://zippler-pi.vercel.app/age-calculator-og-image.png",
        width: 1200,
        height: 630,
        alt: "Age Calculator interface showing detailed age breakdown",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Age Calculator | Find Your Exact Age in Years, Months, Days",
    description:
      "Calculate your precise age including years, months, and days since birth. Discover when your next birthday will be with our accurate age calculator tool.",
    images: ["https://zippler-pi.vercel.app/age-calculator-twitter-image.png"],
  },

  alternates: {
    canonical: "https://zippler-pi.vercel.app/age-calculator",
  },
};

export default function AgeCalculatorPage() {
  return (
    <AgeCalculator
      title="Age Calculator"
      content="Calculate your exact age in years, months, and days"
    />
  );
}
