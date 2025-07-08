// app/sun-calculator/SunCalculator.jsx

"use client";

import { useEffect, useState } from "react";
import SunCalc from "suncalc";
import {
  FiSun,
  FiSunrise,
  FiSunset,
  FiClock,
  FiCalendar,
} from "react-icons/fi";

export default function SunCalculator() {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [sunTimes, setSunTimes] = useState(null);
  const [error, setError] = useState("");

  const getSunTimes = (lat, lng, dateStr) => {
    const selectedDate = new Date(dateStr);
    const times = SunCalc.getTimes(selectedDate, lat, lng);
    setSunTimes(times);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        getSunTimes(latitude, longitude, date);
      },
      () => {
        setError("Location permission is required to calculate sun data.");
      }
    );
  }, []);

  useEffect(() => {
    // Recalculate if date changes and location was previously allowed
    if (sunTimes) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        getSunTimes(latitude, longitude, date);
      });
    }
  }, [date]);

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-slate-900 to-indigo-950 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center">
          <div className="flex items-center justify-center gap-3">
            <FiSun className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Sun Calculator</h1>
          </div>
          <p className="text-indigo-100 mt-2 text-sm">
            Discover sunrise, sunset and solar noon times
          </p>
        </div>

        {/* Controls */}
        <div className="p-6 space-y-6">
          <div>
            <label className="text-sm font-medium text-white/80 flex items-center gap-2 mb-1">
              <FiCalendar className="text-indigo-300" />
              Select Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-white/10 text-white px-4 py-2 rounded-lg border border-white/20 focus:ring-indigo-400 focus:ring-2"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="text-red-400 text-sm bg-red-500/10 p-3 border border-red-500/20 rounded-lg">
              {error}
            </div>
          )}

          {/* Results */}
          {sunTimes && !error && (
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-5 rounded-xl border border-white/10 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SunTimeBox
                  title="Sunrise"
                  icon={<FiSunrise className="text-yellow-300 h-6 w-6" />}
                  time={sunTimes.sunrise}
                />
                <SunTimeBox
                  title="Sunset"
                  icon={<FiSunset className="text-orange-300 h-6 w-6" />}
                  time={sunTimes.sunset}
                />
                <SunTimeBox
                  title="Solar Noon"
                  icon={<FiClock className="text-blue-300 h-6 w-6" />}
                  time={sunTimes.solarNoon}
                />
                <SunTimeBox
                  title="Day Length"
                  icon={<FiClock className="text-indigo-300 h-6 w-6" />}
                  time={formatDuration(
                    sunTimes.sunset.getTime() - sunTimes.sunrise.getTime()
                  )}
                  isDuration
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Sun time display box
function SunTimeBox({ title, icon, time, isDuration = false }) {
  return (
    <div className="bg-white/5 rounded-lg p-4 flex flex-col items-center justify-center border border-white/10 hover:border-indigo-400/30 transition">
      <div className="mb-2">{icon}</div>
      <h4 className="text-sm text-white/60">{title}</h4>
      <p className="text-xl font-semibold text-indigo-200 mt-1">
        {isDuration ? time : formatTime(time)}
      </p>
    </div>
  );
}

// Format time to HH:MM AM/PM
function formatTime(date) {
  return new Date(date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

// Format ms into hh:mm
function formatDuration(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
}
