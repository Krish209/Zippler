
// components/WorldClock.js

"use client";
import { useState, useEffect } from "react";

export default function WorldClock() {
  const [time, setTime] = useState(new Date());
  const timezones = [
    { label: "New York", tz: "America/New_York" },
    { label: "London", tz: "Europe/London" },
    { label: "Tokyo", tz: "Asia/Tokyo" }
  ];

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-4">
      {timezones.map((zone) => (
        <div key={zone.tz} className="flex justify-between">
          <span>{zone.label}</span>
          <span>
            {time.toLocaleTimeString("en-US", { timeZone: zone.tz })}
          </span>
        </div>
      ))}
    </div>
  );
}