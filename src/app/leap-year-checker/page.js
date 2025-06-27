// This is a server component (no 'use client')
import LeapYearChecker from "./LeapYearChecker";

export const metadata = {
  title: "Leap Year Checker | Verify Any Year Online",
  description:
    "Instantly check if any year is a leap year with our accurate verification tool. Understand leap year rules and see why February gets an extra day every 4 years.",
  keywords: [
    "leap year checker",
    "is year a leap year",
    "leap year calculator",
    "leap year test",
    "year validator",
    '366 day year',
    'Gregorian calendar checker',
  ],
  // authors: [{ name: "Your Name", url: "https://yourdomain.com" }],

  openGraph: {
    title: "Leap Year Checker | Verify Any Year Online",
    description:
      "Instantly check if any year is a leap year with our accurate verification tool. Understand leap year rules and see why February gets an extra day every 4 years.",
    url: "https://yourdomain.com/leap-year",
    siteName: "Your Site Name",
    images: [
      {
        url: "https://yourdomain.com/images/leap-year-og.jpg",
        width: 1200,
        height: 630,
        alt: "Leap Year Checker Tool Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Leap Year Checker | Verify Any Year Online",
    description:
      "Instantly check if any year is a leap year with our free online tool",
    images: ["https://yourdomain.com/images/leap-year-twitter.jpg"],
  },

  alternates: {
    canonical: "https://yourdomain.com/leap-year",
  },
};

export default function LeapYearCheckerPage() {
  return <LeapYearChecker />;
}
