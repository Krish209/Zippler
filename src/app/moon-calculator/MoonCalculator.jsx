"use client";

import { useEffect, useState } from "react";
import SunCalc from "suncalc";
import {
  FiMoon,
  FiCalendar,
  FiClock,
  FiTrendingUp,
  FiTrendingDown,
} from "react-icons/fi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdOutlineCalendarToday } from "react-icons/md";

export default function MoonCalculator() {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [moonData, setMoonData] = useState(null);
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setCoords({ lat: latitude, lng: longitude });
        getMoonData(latitude, longitude, date);
      },
      () => {
        setError("Location permission is required to calculate moon data.");
      }
    );
  }, []);

  useEffect(() => {
    if (coords) {
      getMoonData(coords.lat, coords.lng, date);
    }
  }, [date]);

  const getMoonData = (lat, lng, dateStr) => {
    const selectedDate = new Date(dateStr);
    if (isNaN(selectedDate.getTime())) {
      setError("Invalid date selected.");
      return;
    }

    const moonTimes = SunCalc.getMoonTimes(selectedDate, lat, lng);
    const moonIllum = SunCalc.getMoonIllumination(selectedDate);

    if (!moonIllum) {
      setError("Failed to calculate moon illumination.");
      return;
    }

    const { phase, fraction, age } = moonIllum;

    if (
      typeof phase !== "number" ||
      typeof fraction !== "number" ||
      typeof age !== "number"
    ) {
      setError("Invalid moon data received.");
      return;
    }

    setMoonData({
      moonrise: moonTimes.rise,
      moonset: moonTimes.set,
      phase: moonPhaseName(phase),
      illumination: (fraction * 100).toFixed(1),
      age: age.toFixed(1),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-950 p-4 sm:p-6">
      <div className="pt-20">
        <div className="w-full mx-auto max-w-xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-purple-800 to-indigo-700 text-white text-center">
            <div className="flex items-center justify-center gap-3">
              <FiMoon className="h-6 w-6" />
              <h1 className="text-2xl font-bold">Moon Calculator</h1>
            </div>
            <h2 className="text-indigo-100 mt-2 text-sm">
              View moonrise, moonset, phase, and illumination
            </h2>
          </div>

          {/* Controls */}
          <div className="p-6 space-y-6">
            <div>
              <label className="text-sm font-medium text-white/80 flex items-center gap-2 mb-1">
                <FiCalendar className="text-purple-300" />
                Select Date
              </label>
              <div className="relative">
                <input
                  aria-label="Date input"
                  type="date"
                  id="date-input"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full text-base bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400
                                        [&::-webkit-calendar-picker-indicator]:hidden
                                        appearance-none transition-all duration-200 hover:bg-white/15"
                />
                <label className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <MdOutlineCalendarToday
                    className="text-blue-400 h-5 w-5 cursor-pointer hover:text-blue-300 transition-colors"
                    onClick={() =>
                      document.getElementById("date-input")?.showPicker()
                    }
                  />
                </label>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="text-red-400 text-sm bg-red-500/10 p-3 border border-red-500/20 rounded-lg">
                {error}
              </div>
            )}

            {/* Results */}
            {moonData && !error && (
              <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 p-5 rounded-xl border border-white/10 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <MoonInfoBox
                    title="Moonrise"
                    icon={<FiTrendingUp className="text-blue-300 h-6 w-6" />}
                    value={
                      moonData.moonrise ? formatTime(moonData.moonrise) : "—"
                    }
                  />
                  <MoonInfoBox
                    title="Moonset"
                    icon={<FiTrendingDown className="text-pink-300 h-6 w-6" />}
                    value={
                      moonData.moonset ? formatTime(moonData.moonset) : "—"
                    }
                  />
                  <MoonInfoBox
                    title="Illumination"
                    icon={<FiMoon className="text-indigo-300 h-6 w-6" />}
                    value={`${moonData.illumination}%`}
                  />
                  <MoonInfoBox
                    title="Phase"
                    icon={
                      <BsFillMoonStarsFill className="text-yellow-300 h-6 w-6" />
                    }
                    value={moonData.phase}
                  />
                  <MoonInfoBox
                    title="Moon Age"
                    icon={<FiClock className="text-purple-300 h-6 w-6" />}
                    value={`${moonData.age} days`}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function MoonInfoBox({ title, icon, value }) {
  return (
    <div className="bg-white/5 rounded-lg p-4 flex flex-col items-center justify-center border border-white/10 hover:border-purple-400/30 transition">
      <div className="mb-2">{icon}</div>
      <p className="text-sm text-white/60">{title}</p>
      <p className="text-lg font-semibold text-indigo-200 mt-1">{value}</p>
    </div>
  );
}

function formatTime(date) {
  return new Date(date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

// Maps moon phase values (0 to 1) to human-readable names
function moonPhaseName(phase) {
  if (phase === 0 || phase === 1) return "New Moon";
  if (phase < 0.25) return "Waxing Crescent";
  if (phase === 0.25) return "First Quarter";
  if (phase < 0.5) return "Waxing Gibbous";
  if (phase === 0.5) return "Full Moon";
  if (phase < 0.75) return "Waning Gibbous";
  if (phase === 0.75) return "Last Quarter";
  return "Waning Crescent";
}
