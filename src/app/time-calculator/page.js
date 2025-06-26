// This is a server component (no 'use client')
import TimeCalculator from "./TimeCalculator";

export const metadata = {
  title: "Time Duration Calculator | Calculate Time Between Two Points",
  description: "Free online tool to calculate duration between two times. Supports 12-hour and 24-hour formats. Get hours, minutes, and seconds between any two times.",
  keywords: ["time calculator", "duration calculator", "time difference", "hours between times", "time tool"],
  openGraph: {
    title: "Time Duration Calculator",
    description: "Calculate precise duration between any two times in hours, minutes, and seconds",
    url: "https://yourdomain.com/time-calculator",
    siteName: "Time Tools",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Time Duration Calculator",
    description: "Calculate precise duration between any two times",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
};

export default function Page() {
  return <TimeCalculator />;
}