// app/speed-challenge/page.js

// This is a server component (no 'use client')

import SpeedChallenge from "./SpeedChallenge";

export const metadata = {
  title: "Speed Challenge | Stopwatch Timing Game",
  description:
    "Think you’ve got perfect timing? Try to stop the clock at exactly 10.00 seconds in this addictively fun speed challenge game.",
  keywords: [
    "stopwatch challenge",
    "speed timing game",
    "10 second challenge",
    "reaction timer game",
    "stopwatch accuracy test",
    "speed test game",
    "stopwatch quiz",
    "timing game online",
    "perfect timing challenge",
  ],
  openGraph: {
    title: "Speed Challenge | Stopwatch Timing Game",
    description:
      "Test your reaction and precision by stopping the timer exactly at 10.00 seconds. Can you get a perfect score?",
    url: "https://zippler-pi.vercel.app/speed-challenge",
    siteName: "Zippler",
    images: [
      {
        url: "https://zippler-pi.vercel.app/Z3.png", // Replace with your actual image
        width: 1200,
        height: 630,
        alt: "Stopwatch Speed Challenge",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Speed Challenge | Can You Stop at 10 Seconds?",
    description:
      "Tap Start. Tap Stop at exactly 10.00s. The closer you get, the better your score. Try now!",
    images: ["https://zippler-pi.vercel.app/Z3.png"], // Replace with actual image
  },
  alternates: {
    canonical: "https://zippler-pi.vercel.app/speed-challenge",
  },
};

export default function AgeCalculatorPage() {
  return <SpeedChallenge />;
}
