import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Time Tools Pro | Smart Calculators for Time, Sleep, and Dates",
  description:
    "Master your time with precision using Time Tools Pro. Explore a collection of beautifully designed time calculators including sleep timers, date difference tools, age calculators, and more.",
  keywords: [
    "time tools",
    "time calculators",
    "date difference calculator",
    "sleep time calculator",
    "countdown timer",
    "stopwatch online",
    "age calculator",
    "weekday finder",
    "timezone converter",
    "time management tools",
  ],

  openGraph: {
    title: "Time Tools Pro | Smart Calculators for Time, Sleep, and Dates",
    description:
      "Discover the ultimate suite of time-related tools to calculate, convert, and manage your schedule effortlessly.",
    url: "https://zippler-pi.vercel.app/",
    siteName: "Time Tools Pro",
    images: [
      {
        url: "https://zippler-pi.vercel.app/Z3.png",
        width: 1200,
        height: 630,
        alt: "Time Tools Pro landing page preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Time Tools Pro | Smart Calculators for Time, Sleep, and Dates",
    description:
      "Discover precision tools for calculating sleep, time zones, date differences, and more. Ad-free and beautifully designed.",
    images: ["https://zippler-pi.vercel.app/Z3.png"],
  },

  alternates: {
    canonical: "https://zippler-pi.vercel.app/",
  },

  other: {
    "google-site-verification": "x79cEmQ7U8SWq_WOKaSFuCUyoyOQFKxLCtFmrHDyNBo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
