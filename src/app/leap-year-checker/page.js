// This is a server component (no 'use client')
import LeapYearChecker from "./LeapYearChecker";

export const metadata = {
  title: "Leap Year Checker | Verify Any Year Online",
  description:
    "Instantly check if any year is a leap year. Our tool accurately determines leap years following all the rules. Perfect for students, developers, and curious minds.",
  keywords: [
    "leap year checker",
    "is year a leap year",
    "leap year calculator",
    "leap year test",
    "year validator",
  ],
  // authors: [{ name: "Your Name", url: "https://yourdomain.com" }],

  openGraph: {
    title: "Leap Year Checker | Verify Any Year Online",
    description:
      "Check if any year is a leap year with our accurate verification tool",
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
    creator: "@yourtwitterhandle",
  },

  alternates: {
    canonical: "https://yourdomain.com/leap-year",
  },
};

export default function Page() {
  return <LeapYearChecker />;
}
