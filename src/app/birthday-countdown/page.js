// app/birthday-countdown/page.js

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
  // authors: [{ name: 'Your Name', url: 'https://zippler-pi.vercel.app' }],

  openGraph: {
    title: "Birthday Countdown Calculator | Days Until Your Special Day",
    description:
      "Track exactly how much time remains until your birthday with our countdown calculator. See days, weeks, and months until your next celebration.",
    url: "https://zippler-pi.vercel.app/birthday-countdown",
    siteName: "Zippler",
    images: [
      {
        url: "https://zippler-pi.vercel.app/Z3.png",
        width: 1200,
        height: 630,
        alt: "Birthday Countdown Calculator showing days until celebration",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Birthday Countdown Calculator | Days Until Your Special Day",
    description:
      "Track exactly how much time remains until your birthday with our countdown calculator. See days, weeks, and months until your next celebration.",
    images: ["https://zippler-pi.vercel.app/Z3.png"],
  },

  alternates: {
    canonical: "https://zippler-pi.vercel.app/birthday-countdown",
  },
};

export default function BirthdayCountdownPage() {
  return (
    <GoalCountdownCalculator
      title="Birthday"
      content="birthday"
      slug="birthday-countdown"
    />
  );
}
