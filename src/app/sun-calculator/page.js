// app/sun-calculator/page.js

// This is a server component (no 'use client')
import SunCalculator from "./SunCalculator";

export const metadata = {
  title: "Sun Calculator | Sunrise, Sunset & Solar Noon Times by Location",
  description:
    "Discover accurate sunrise, sunset, solar noon, and day length for your current location and selected date using the Sun Calculator.",
  keywords: [
    "sun calculator",
    "sunrise time",
    "sunset time",
    "solar noon calculator",
    "sun times by location",
    "day length",
    "sun position today",
    "SunCalc",
    "time of sunrise",
    "time of sunset",
  ],
  openGraph: {
    title: "Sun Calculator | Sunrise, Sunset & Solar Noon Times",
    description:
      "Use this sun time calculator to find sunrise, sunset, and solar noon based on your location and date.",
    url: "https://zippler-pi.vercel.app/sun-calculator",
    siteName: "Time Tools Pro",
    images: [
      {
        url: "https://zippler-pi.vercel.app/Z3.png", // Replace with actual image
        width: 1200,
        height: 630,
        alt: "Sunrise and Sunset Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sun Calculator | Sunrise & Sunset Times for Any Location",
    description:
      "Get local sunrise, sunset, and solar noon times instantly. No ads, just accurate sun data.",
    images: [
      "https://zippler-pi.vercel.app/Z3.png", // Replace with actual image
    ],
  },
  alternates: {
    canonical: "https://zippler-pi.vercel.app/sun-calculator",
  },
};

export default function SunCalculatorPage() {
  return <SunCalculator />;
}
