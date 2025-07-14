// File: /app/sitemap.xml/route.ts (Next.js App Router)
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://zippler-pi.vercel.app";
  const lastMod = "2025-07-07"; // Static last modified date

  const pages = [
    "",
    "calc",
    "about",
    "contact",
    "age-calculator",
    "pet-age-calculator",
    "anniversary-countdown",
    "birthday-countdown",
    "date-calculator",
    "leap-year-checker",
    "night-calculator",
    "nap-calculator",
    "sleep-calculator",
    "sleep-length-checker",
    "stopwatch",
    "speed-challenge",
    "time-calculator",
    "birthday-day-finder",
    "weekday-finder",
    "sun-calculator",
    "moon-calculator",
    "dog-age-calculator",
    "fiscal-year-calculator",
    "golden-hour-calcualtor",
    "time-allocation",
    "work-hours-calculator"
  ];

  const xmlItems = pages
    .map((slug) => {
      const loc = slug ? `${baseUrl}/${slug}` : baseUrl;
      const priority = ["", "about", "contact"].includes(slug) ? "1.0" : "0.7";
      return `
    <url>
      <loc>${loc}</loc>
      <lastmod>${lastMod}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${priority}</priority>
    </url>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${xmlItems}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  });
}