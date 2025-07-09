// app/nap-calcualtor/NapCalculator.jsx
"use client";

import { useState } from "react";
import { FiClock, FiMoon, FiSunrise } from "react-icons/fi";
import { MdOutlineAccessTime, MdOutlineBedtime, MdTimer } from "react-icons/md";

export default function NapTimeCalculator() {
  const [mode, setMode] = useState("napLength"); // 'napLength' or 'wakeUpTime'
  const [inputTime, setInputTime] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);

  const napDurations = [10, 20, 30, 60, 90]; // minutes

  const calculateNapTimes = () => {
    if (!inputTime) {
      setError("Please enter a time");
      setIsCalculated(false);
      return;
    }

    setError("");

    const now = new Date();
    const [hours, minutes] = inputTime.split(":").map(Number);
    if (isNaN(hours) || isNaN(minutes)) {
      setError("Invalid time format");
      return;
    }

    const baseTime = new Date(now);
    baseTime.setHours(hours, minutes, 0, 0);

    const times = napDurations.map((duration) => {
      const target = new Date(baseTime);
      if (mode === "napLength") {
        target.setMinutes(now.getMinutes() + duration);
      } else {
        target.setMinutes(target.getMinutes() - duration);
      }

      return {
        duration,
        time: target.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      };
    });

    setResults(times);
    setIsCalculated(true);
  };

  const toggleMode = () => {
    setMode(mode === "napLength" ? "wakeUpTime" : "napLength");
    setInputTime("");
    setIsCalculated(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 items-center justify-center p-4 sm:p-6">
      <div className="pt-20">
        <div className="w-full mx-auto max-w-3xl bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-purple-500/20">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 sm:p-8 text-white">
            <div className="flex items-center justify-center gap-3">
              <MdTimer className="h-8 w-8" />
              <h1 className="text-2xl sm:text-3xl font-bold text-center">
                Nap Time Calculator
              </h1>
            </div>
            <p className="text-purple-100 text-center mt-2">
              {mode === "napLength"
                ? "Find your ideal nap end time"
                : "Find when to start napping"}
            </p>
          </div>

          {/* Main Content */}
          <div className="p-4 sm:p-6">
            <div className="space-y-6">
              {/* Mode Switch */}
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium text-white/80 flex items-center gap-2">
                  {mode === "napLength" ? (
                    <>
                      <FiMoon className="h-5 w-5 text-purple-300" />
                      Start Nap Now
                    </>
                  ) : (
                    <>
                      <FiSunrise className="h-5 w-5 text-yellow-300" />
                      Wake Up At
                    </>
                  )}
                </h2>
                <button
                  onClick={toggleMode}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white cursor-pointer hover:shadow-md"
                >
                  {mode === "napLength" ? (
                    <>
                      <FiSunrise className="h-4 w-4" />
                      Switch to wake-up time
                    </>
                  ) : (
                    <>
                      <MdOutlineBedtime className="h-4 w-4" />
                      Switch to nap now
                    </>
                  )}
                </button>
              </div>

              {/* Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  {mode === "napLength"
                    ? "Start your nap now at..."
                    : "Wake-up time after nap..."}
                </label>
                <div className="relative">
                  <input
                    type="time"
                    value={inputTime}
                    onChange={(e) => setInputTime(e.target.value)}
                    className="w-full text-base bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-400 focus:border-purple-400 appearance-none transition-all duration-200 hover:bg-white/15"
                  />
                  <label className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <MdOutlineAccessTime
                      className="text-purple-300 h-5 w-5 cursor-pointer hover:text-purple-200 transition-colors"
                      onClick={() =>
                        document.getElementById("time-input")?.showPicker()
                      }
                    />
                  </label>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 items-center">
                <button
                  onClick={calculateNapTimes}
                  disabled={!inputTime}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    !inputTime
                      ? "bg-white/5 text-white/30 cursor-not-allowed"
                      : "bg-purple-600 hover:bg-purple-700 text-white hover:shadow-md"
                  }`}
                >
                  <FiClock className="h-4 w-4" />
                  Calculate
                </button>

                <button
                  onClick={() => {
                    setInputTime("");
                    setError("");
                    setIsCalculated(false);
                  }}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-white/10 hover:bg-white/20 text-white hover:shadow-md transition-all"
                >
                  Clear
                </button>

                {error && <div className="text-red-400 text-sm">{error}</div>}
              </div>

              {/* Results */}
              {isCalculated && !error && (
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-3">
                  <h3 className="text-sm font-medium text-white/80 flex items-center gap-2">
                    <FiClock className="h-4 w-4" />
                    Nap {mode === "napLength" ? "End" : "Start"} Times
                  </h3>
                  <p className="text-xs text-white/60">
                    Choose a nap duration that fits your schedule.
                  </p>
                  <div className="space-y-2">
                    {results.map((res, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-lg flex justify-between items-center ${
                          res.duration === 20
                            ? "bg-purple-500/20 border border-purple-400/30"
                            : "bg-white/5"
                        }`}
                      >
                        <div>
                          <p className="text-white font-medium">{res.time}</p>
                          <p className="text-xs text-white/60">
                            {mode === "napLength"
                              ? `Nap ends after ${res.duration} mins`
                              : `Start nap for ${res.duration} mins`}
                          </p>
                        </div>
                        {res.duration === 20 && (
                          <span className="text-xs bg-purple-500/30 text-purple-200 px-2 py-1 rounded">
                            Ideal
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="bg-white/5 p-4 text-center text-xs text-white/50 border-t border-white/10">
            Short naps of 20 minutes can boost alertness and performance without
            grogginess.
          </div>
        </div>
      </div>
    </div>
  );
}
