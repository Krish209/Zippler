// app/weekday-finder/page.js

// This is a server component (no 'use client')

import DogAgeCalculator from "./DogAgeCalculator";

export const metadata = {
  title: "Dog Age Calculator | Convert Dog Years to Human Years Accurately",
  description:
    "Breed-size-adjusted dog age calculator. Convert dog years to human years and vice versa with detailed breed size factors.",
  keywords: [
    "dog age calculator",
    "dog to human years",
    "human to dog years",
    "breed size dog age",
    "dog aging calculator",
    "pet age converter",
    "small dog age",
    "large dog age",
  ],
  // authors: [{ name: 'Your Name', url: 'https://zippler-pi.vercel.app' }],

  openGraph: {
    title: "Dog Age Calculator | Accurate Breed Size Age Conversion",
    description:
      "Convert dog years to human years and human years to dog years with breed-size adjusted calculations for all dog breeds.",
    url: "https://zippler-pi.vercel.app/dog-age-calculator",
    siteName: "Zippler",
    images: [
      {
        url: "https://zippler-pi.vercel.app/Z3.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Dog Age Calculator",
    description: "Accurately convert dog years and human years by breed size",
    images: ["https://zippler-pi.vercel.app/Z3.png"], // Replace with your actual image URL
  },

  alternates: {
    canonical: "https://zippler-pi.vercel.app/dog-age-calculator",
  },
};

export default function DayOfWeekFinderPage() {
  return <DogAgeCalculator />;
}
