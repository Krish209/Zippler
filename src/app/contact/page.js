import ContactPage from './Contact';

export const metadata = {
  title: "Contact Us | Time Tools",
  description:
    "Reach out to the Time Tools team for support, feedback, partnerships, or questions about our time and date calculators.",
  keywords: [
    "contact time tools",
    "time calculator support",
    "sleep calculator help",
    "feedback form",
    "contact time tools team",
    "date and time help",
    "suggest a time tool",
  ],
  openGraph: {
    title: "Get in Touch with Time Tools",
    description:
      "We're here to help! Contact us for support, feature suggestions, or business inquiries.",
    url: "https://zippler-pi.vercel.app/contact",
    siteName: "Time Tools Pro",
    images: [
      {
        url: "https://zippler-pi.vercel.app/og-image-contact.png", // Optional: Replace with your contact OG image
        width: 1200,
        height: 630,
        alt: "Contact Time Tools - Support & Feedback",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Time Tools",
    description:
      "Have a question, suggestion, or issue? Use our contact form and our team will respond promptly.",
    images: ["https://zippler-pi.vercel.app/twitter-image-contact.png"], // Optional
  },
  alternates: {
    canonical: "https://zippler-pi.vercel.app/contact",
  },
};


export default function Contact() {
    return <ContactPage />;
}
