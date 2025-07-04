// File: /app/sitemap.xml/route.ts (Next.js App Router)
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://zippler-pi.vercel.app";
  const lastMod = "2025-07-02"; // Static last modified date

  const pages = [
    "",
    "about",
    "contact",
    "age-calculator",
    "pet-age-calculator",
    "anniversary-countdown",
    "birthday-countdown",
    "date-calculator",
    "leap-year-checker",
    "night-calculator",
    "sleep-calculator",
    "sleep-checker",
    "stopwatch",
    "time-calculator",
    "weekday-finder",
  ];

  const xmlItems = pages
    .map((slug) => {
      const loc = slug ? `${baseUrl}/${slug}` : baseUrl;
      const priority = ["", "about", "contact"].includes(slug) ? "1.0" : "0.7";
      return `<url><loc>${loc}</loc><lastmod>${lastMod}</lastmod><changefreq>weekly</changefreq><priority>${priority}</priority></url>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url><loc>${baseUrl}</loc><lastmod>${lastMod}</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>${baseUrl}/about</loc><lastmod>${lastMod}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>${baseUrl}/contact</loc><lastmod>${lastMod}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  ${xmlItems}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  });
}
