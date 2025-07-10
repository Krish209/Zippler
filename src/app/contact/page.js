// app/contact/page.js
// This is a server component (no 'use client')

import Contact from "./Contact";

export const metadata = {
  title: "Contact Us | Zippler",
  description:
    "Reach out to the Zippler team for support, feedback, partnerships, or questions about our time and date calculators.",
  keywords: [
    "contact Zippler",
    "time calculator support",
    "sleep calculator help",
    "feedback form",
    "contact Zippler team",
    "date and time help",
    "suggest a time tool",
  ],
  openGraph: {
    title: "Get in Touch with Zippler",
    description:
      "We're here to help! Contact us for support, feature suggestions, or business inquiries.",
    url: "https://zippler-pi.vercel.app/contact",
    siteName: "Zippler",
    images: [
      {
        url: "https://zippler-pi.vercel.app/Z3.png", // Optional: Replace with your contact OG image
        width: 1200,
        height: 630,
        alt: "Contact Zippler - Support & Feedback",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Zippler",
    description:
      "Have a question, suggestion, or issue? Use our contact form and our team will respond promptly.",
    images: ["https://zippler-pi.vercel.app/Z3.png"], // Optional
  },
  alternates: {
    canonical: "https://zippler-pi.vercel.app/contact",
  },
};

export default function ContactPage() {
  return <Contact />;
}
