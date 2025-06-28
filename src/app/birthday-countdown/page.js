// This is a server component (no 'use client')

import GoalCountdownCalculator from "@/components/GoalCountDownCalc";

export const metadata = {
  title: "Birthday Countdown Calculator | Days Until Your Special Day",
  description:
    "Track exactly how much time remains until your birthday with our countdown calculator. See days, weeks, and months until your next celebration.",
  keywords: [
    "birthday countdown",
    "days until birthday",
    "birthday calculator",
    "how many days until my birthday",
    "birthday countdown timer",
    "time until birthday",
    "special day countdown",
    "birthday tracker",
  ],
  // authors: [{ name: 'Your Name', url: 'https://yourwebsite.com' }],

  openGraph: {
    title: "Birthday Countdown Calculator | Days Until Your Special Day",
    description:
      "Track exactly how much time remains until your birthday with our countdown calculator. See days, weeks, and months until your next celebration.",
    url: "https://yourwebsite.com/birthday-countdown",
    siteName: "Special Day Tools",
    images: [
      {
        url: "https://yourwebsite.com/birthday-countdown-og-image.png",
        width: 1200,
        height: 630,
        alt: "Birthday Countdown Calculator showing days until celebration",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Birthday Countdown Calculator | Days Until Your Special Day",
    description:
      "Track exactly how much time remains until your birthday with our countdown calculator. See days, weeks, and months until your next celebration.",
    images: ["https://yourwebsite.com/birthday-countdown-twitter-image.png"],
  },

  alternates: {
    canonical: "https://yourwebsite.com/birthday-countdown",
  },
};

export default function BirthdayCalculatorPage() {
  return <GoalCountdownCalculator title="Birthday" content="birthday" />;
}
