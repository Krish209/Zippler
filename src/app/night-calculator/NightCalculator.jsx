// app/night-calculator/NightCalculator.jsx

"use client";
import { useState, useEffect } from "react";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FiMoon } from "react-icons/fi";

export default function NightCalculator() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [nights, setNights] = useState(0);
  const [error, setError] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      // Check for invalid dates
      if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        setError("Invalid date format");
        setIsCalculated(false);
        return;
      }

      if (end < start) {
        setError("End date must be after start date");
        setIsCalculated(false);
        return;
      }

      setError("");

      // Calculate difference in days (nights = days - 1)
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      setNights(diffDays > 0 ? diffDays - 1 : 0);
      setIsCalculated(true);
    } else {
      setError("");
      setIsCalculated(false);
    }
  }, [startDate, endDate]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Invalid date";

    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const resetDates = () => {
    setStartDate("");
    setEndDate("");
    setError("");
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-slate-900 to-indigo-900 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-indigo-500/20">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-6 sm:p-8 text-white">
          <div className="flex items-center justify-center gap-3">
            <FiMoon className="h-8 w-8" />
            <h1 className="text-2xl sm:text-3xl font-bold text-center">
              Night Calculator
            </h1>
          </div>
          <p className="text-indigo-100 text-center mt-2">
            Calculate how many nights between two dates
          </p>
        </div>

        {/* Main Content */}
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Input Section */}
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-white/80 flex items-center gap-2">
                <FiMoon className="h-5 w-5 text-indigo-400" />
                Date Selection
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                    Start Date
                  </label>
                  <div className="relative">
                    <input
                      aria-label="start-night-input"
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      max={endDate || undefined}
                      className="w-full text-base bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                        [&::-webkit-calendar-picker-indicator]:hidden
                        appearance-none transition-all duration-200 hover:bg-white/15"
                    />
                    <label className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <MdOutlineCalendarToday
                        className="text-indigo-400 h-5 w-5 cursor-pointer hover:text-indigo-300 transition-colors"
                        onClick={() =>
                          document
                            .querySelector('input[type="date"]')
                            ?.showPicker()
                        }
                      />
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    End Date
                  </label>
                  <div className="relative">
                    <input
                      aria-label="end-night-input"
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      min={startDate || undefined}
                      className="w-full text-base bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                        [&::-webkit-calendar-picker-indicator]:hidden
                        appearance-none transition-all duration-200 hover:bg-white/15"
                    />
                    <label className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <MdOutlineCalendarToday
                        className="text-indigo-400 h-5 w-5 cursor-pointer hover:text-indigo-300 transition-colors"
                        onClick={() =>
                          document
                            .querySelectorAll('input[type="date"]')[1]
                            ?.showPicker()
                        }
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 items-center">
                <button
                  onClick={resetDates}
                  disabled={!startDate && !endDate}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    !startDate && !endDate
                      ? "bg-white/5 text-white/30 cursor-not-allowed"
                      : "bg-white/10 hover:bg-white/20 text-white hover:shadow-md"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Clear
                </button>

                {error && (
                  <div className="bg-red-500/10 border-l-4 border-red-500 px-4 py-2 rounded flex-1">
                    <p className="text-red-300 text-sm">{error}</p>
                  </div>
                )}
              </div>

              {isCalculated && !error && (
                <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl p-4 border border-white/10 transition-all duration-300 hover:border-indigo-400/30">
                  <h3 className="text-sm font-medium text-white/80 mb-3 flex items-center gap-2">
                    Selected Date Range
                  </h3>
                  <div className="flex items-center gap-3 justify-between text-white">
                    <p className="font-medium text-sm bg-indigo-500/20 px-3 py-1.5 rounded-lg">
                      {formatDate(startDate)}
                    </p>
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-400/30">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-indigo-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                    <p className="font-medium text-sm bg-purple-500/20 px-3 py-1.5 rounded-lg">
                      {formatDate(endDate)}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Results Section */}
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl p-4 sm:p-6 border border-white/10 flex flex-col justify-between transition-all duration-300 hover:border-indigo-400/30">
              <div className="flex-1 flex flex-col justify-center">
                {isCalculated && !error ? (
                  <div className="w-full space-y-6">
                    {/* Nights Count */}
                    <div className="flex flex-col items-center justify-center text-center p-5">
                      <div className="w-24 h-24 rounded-full bg-indigo-500/10 flex items-center justify-center border-2 border-indigo-400/30 mb-6">
                        <FiMoon className="h-10 w-10 text-indigo-300" />
                      </div>
                      <h3 className="text-xl font-medium text-white/80 mb-2">
                        Total Nights
                      </h3>
                      <p className="text-4xl sm:text-5xl font-bold text-indigo-300">
                        {nights}
                      </p>
                      <p className="mt-2 text-sm text-white/80">
                        {nights === 1 ? "1 night" : `${nights} nights`} between
                        dates
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-white/50 my-8 sm:my-18">
                    <div className="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 mx-auto text-white/30"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      </svg>
                      <div className="absolute -inset-4 bg-indigo-500/10 rounded-full blur-md opacity-20"></div>
                    </div>
                    <p className="mt-4 text-center max-w-xs mx-auto">
                      Select start and end dates to calculate the number of
                      nights between them
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white/5 p-4 text-center text-xs text-white/50 border-t border-white/10">
          <div className="flex items-center justify-center gap-2">
            <span>
              Perfect for travel planning, hotel stays, and vacation
              calculations
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
