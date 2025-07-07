// This is a server component (no 'use client')

import NightCalculator from "./NightCalculator";

export const metadata = {
  title: "Night Calculator | Count Nights Between Dates",
  description:
    "Calculate the exact number of nights between two dates. Perfect for travel planning, hotel bookings, and vacation duration calculations.",
  keywords: [
    "night calculator",
    "nights between dates",
    "hotel stay calculator",
    "vacation night counter",
    "trip duration calculator",
    "date night calculator",
    "how many nights between dates",
    "travel planning tool",
  ],
  // authors: [{ name: 'Your Name', url: 'https://zippler-pi.vercel.app' }],

  openGraph: {
    title: "Night Calculator | Count Nights Between Dates",
    description:
      "Calculate the exact number of nights between two dates. Perfect for travel planning, hotel bookings, and vacation duration calculations.",
    url: "https://zippler-pi.vercel.app/night-calculator",
    siteName: "Travel Planning Tools",
    images: [
      {
        url: "https://zippler-pi.vercel.app/night-calculator-og-image.png",
        width: 1200,
        height: 630,
        alt: "Night Calculator interface showing date range and night count",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Night Calculator | Count Nights Between Dates",
    description:
      "Calculate the exact number of nights between two dates. Perfect for travel planning, hotel bookings, and vacation duration calculations.",
    images: [
      "https://zippler-pi.vercel.app/night-calculator-twitter-image.png",
    ],
  },

  alternates: {
    canonical: "https://zippler-pi.vercel.app/night-calculator",
  },
};

export default function NightCalculatorPage() {
  return <NightCalculator />;
}
