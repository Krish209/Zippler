// This is a server component (no 'use client')

import GoalCountdownCalculator from "@/components/GoalCountDownCalc";

export const metadata = {
  title: "Anniversary Countdown Calculator | Days Until Your Special Date",
  description:
    "Track exactly how much time remains until your anniversary with our countdown calculator. See days, weeks, and months until your next celebration.",
  keywords: [
    "anniversary countdown",
    "days until anniversary",
    "anniversary calculator",
    "wedding anniversary countdown",
    "relationship anniversary tracker",
    "time until anniversary",
    "special date countdown",
    "anniversary reminder",
  ],
  // authors: [{ name: 'Your Name', url: 'https://yourwebsite.com' }],

  openGraph: {
    title: "Anniversary Countdown Calculator | Days Until Your Special Date",
    description:
      "Track exactly how much time remains until your anniversary with our countdown calculator. See days, weeks, and months until your next celebration.",
    url: "https://yourwebsite.com/anniversary-countdown",
    siteName: "Special Date Tools",
    images: [
      {
        url: "https://yourwebsite.com/anniversary-countdown-og-image.png",
        width: 1200,
        height: 630,
        alt: "Anniversary Countdown Calculator showing days until celebration",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Anniversary Countdown Calculator | Days Until Your Special Date",
    description:
      "Track exactly how much time remains until your anniversary with our countdown calculator. See days, weeks, and months until your next celebration.",
    images: ["https://yourwebsite.com/anniversary-countdown-twitter-image.png"],
  },

  alternates: {
    canonical: "https://yourwebsite.com/anniversary-countdown",
  },
};

export default function AnniversaryCalcualtorPage() {
  return <GoalCountdownCalculator title="Anniversary" content="anniversary" />;
}
