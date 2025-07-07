// This is a server component (no 'use client')

import MoonCalculator from "./MoonCalc";

export const metadata = {
  title: "Moon Calculator | Moonrise, Moonset, Phase & Illumination",
  description:
    "Explore accurate moonrise and moonset times, moon phase, illumination percentage, and lunar age based on your current location and selected date.",
  keywords: [
    "moon calculator",
    "moonrise time",
    "moonset time",
    "moon phase today",
    "moon illumination",
    "lunar age",
    "moon calendar",
    "current moon phase",
    "MoonCalc",
    "full moon tonight",
  ],
  openGraph: {
    title: "Moon Calculator | Moonrise, Phase & Illumination",
    description:
      "View moonrise, moonset, moon phase, illumination, and lunar age based on your location and selected date.",
    url: "https://zippler-pi.vercel.app/moon-calculator",
    siteName: "Time Tools Pro",
    images: [
      {
        url: "https://zippler-pi.vercel.app/og-image-moon.png", // Add your actual OG image
        width: 1200,
        height: 630,
        alt: "Moon Phase and Rise/Set Times",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moon Calculator | See Moonrise & Moon Phase Today",
    description:
      "Get detailed lunar data including moonrise, moonset, illumination, and phase for your current location.",
    images: [
      "https://zippler-pi.vercel.app/twitter-image-moon.png", // Replace with actual image URL
    ],
  },
  alternates: {
    canonical: "https://zippler-pi.vercel.app/moon-calculator",
  },
};

export default function MoonCalculatorPage() {
  return <MoonCalculator />;
}
