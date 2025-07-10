// app/pet-age-calculator/page.js

// This is a server component (no 'use client')

import AgeCalculator from "../age-calculator/AgeCalculator";

export const metadata = {
  title: "Pet Age Calculator | Determine Your Pet's Exact Age",
  description:
    "Calculate your pet's age in years, months, and days. Convert pet years to human years for dogs and cats with our accurate age calculator.",
  keywords: [
    "pet age calculator",
    "dog age calculator",
    "cat age calculator",
    "pet years to human years",
    "how old is my pet",
    "pet birthday calculator",
    "animal age calculator",
    "pet lifespan calculator",
  ],
  // authors: [{ name: 'Your Name', url: 'https://zippler-pi.vercel.app' }],

  openGraph: {
    title: "Pet Age Calculator | Determine Your Pet's Exact Age",
    description:
      "Calculate your pet's age in years, months, and days. Convert pet years to human years for dogs and cats with our accurate age calculator.",
    url: "https://zippler-pi.vercel.app/pet-age-calculator",
    siteName: "Zippler",
    images: [
      {
        url: "https://zippler-pi.vercel.app/Z3.png",
        width: 1200,
        height: 630,
        alt: "Pet Age Calculator interface showing dog and cat age conversion",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Pet Age Calculator | Determine Your Pet's Exact Age",
    description:
      "Calculate your pet's age in years, months, and days. Convert pet years to human years for dogs and cats with our accurate age calculator.",
    images: ["https://zippler-pi.vercel.app/Z3.png"],
  },

  alternates: {
    canonical: "https://zippler-pi.vercel.app/pet-age-calculator",
  },
};

export default function PetAgeCalculatorPage() {
  return (
    <AgeCalculator
      title="Pet Age Calculator"
      content="Calculate your pet's exact age in years, months, and days"
      slug="pet-age-calculator"
    />
  );
}
