// app/time-calculator/page.js

import TimeAllocation from "./TimeAllocation";

// This is a server component (no 'use client')


export const metadata = {
  title: "Weekly Time Allocation | Visualize Your Time Usage",
  description:
    "Interactive weekly time allocation tool to track and visualize how you spend your 168 hours. Add, edit, and manage activities with an intuitive pie chart.",
  keywords: [
    "time allocation",
    "weekly time tracker",
    "time management",
    "time breakdown",
    "activity tracker",
    "time visualization",
    "pie chart time allocation",
    "time budgeting",
  ],
  // authors: [{ name: 'Your Name', url: 'https://zippler-pi.vercel.app' }],

  openGraph: {
    title: "Weekly Time Allocation | Track and Visualize Your Activities",
    description:
      "Visualize and manage how you spend your weekly hours with an interactive pie chart and activity list.",
    url: "https://zippler-pi.vercel.app/time-allocation",
    siteName: "Zippler",
    images: [
      {
        url: "https://zippler-pi.vercel.app/Z3.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Weekly Time Allocation",
    description:
      "Visualize and manage your weekly time using an interactive pie chart.",
    images: ["https://zippler-pi.vercel.app/Z3.png"],
  },

  alternates: {
    canonical: "https://zippler-pi.vercel.app/time-allocation",
  },
};

export default function TimeAllocationPage() {
  return <TimeAllocation />;
}
