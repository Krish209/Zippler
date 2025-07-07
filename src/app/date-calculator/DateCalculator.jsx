"use client";
import { useState, useEffect } from "react";
import { MdOutlineCalendarToday, MdSwapHoriz } from "react-icons/md";
import { FiClock } from "react-icons/fi";

export default function DateCalculator() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [days, setDays] = useState(0);
  const [months, setMonths] = useState(0);
  const [years, setYears] = useState(0);
  const [error, setError] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);
  const [totalDuration, setTotalDuration] = useState("");

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
      const diffTime = Math.abs(end - start);

      // Calculate all time units
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const diffMonths = Math.floor(diffDays / 30.44);
      const diffYears = Math.floor(diffDays / 365.25);

      setDays(diffDays);
      setMonths(diffMonths);
      setYears(diffYears);

      // Format total duration string
      const durationParts = [];
      if (diffYears > 0) {
        durationParts.push(`${diffYears} year${diffYears !== 1 ? "s" : ""}`);
      }
      if (diffMonths > 0) {
        durationParts.push(`${diffMonths} month${diffMonths !== 1 ? "s" : ""}`);
      }
      if (diffDays > 0 || durationParts.length === 0) {
        durationParts.push(`${diffDays} day${diffDays !== 1 ? "s" : ""}`);
      }

      setTotalDuration(durationParts.join(", "));
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

  const swapDates = () => {
    const temp = startDate;
    setStartDate(endDate);
    setEndDate(temp);
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Date Span Calculator",
          description: "Calculate duration between dates",
          url: "https://zippler-pi.vercel.app/date-calculator",
        })}
      </script>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-4xl bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-blue-500/20">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 sm:p-8 text-white">
            <div className="flex items-center justify-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-bold text-center">
                Date Duration Calculator
              </h1>
            </div>
            <p className="text-blue-100 text-center mt-2">
              Calculate precise duration between any two dates
            </p>
          </div>

          {/* Main Content */}
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Input Section */}
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-white/80 flex items-center gap-2">
                  Date Inputs
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                      Start Date
                    </label>
                    <div className="relative">
                      <input
                        aria-label="Start date input"
                        type="date"
                        id="start-date-input"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        max={endDate || undefined}
                        className="w-full text-base bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400
                          [&::-webkit-calendar-picker-indicator]:hidden
                          appearance-none transition-all duration-200 hover:bg-white/15"
                      />
                      <label className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <MdOutlineCalendarToday
                          className="text-blue-400 h-5 w-5 cursor-pointer hover:text-blue-300 transition-colors"
                          onClick={() =>
                            document
                              .getElementById("start-date-input")
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
                        aria-label="End date input"
                        type="date"
                        id="end-date-input"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        min={startDate || undefined}
                        className="w-full text-base bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400
                          [&::-webkit-calendar-picker-indicator]:hidden
                          appearance-none transition-all duration-200 hover:bg-white/15"
                      />
                      <label className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <MdOutlineCalendarToday
                          className="text-blue-400 h-5 w-5 cursor-pointer hover:text-blue-300 transition-colors"
                          onClick={() =>
                            document
                              .getElementById("end-date-input")
                              ?.showPicker()
                          }
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 items-center">
                  {/* <button
                    onClick={swapDates}
                    disabled={!startDate || !endDate}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                      !startDate || !endDate
                        ? "bg-white/5 text-white/30 cursor-not-allowed"
                        : "bg-white/10 hover:bg-white/20 text-white hover:shadow-md"
                    }`}
                  >
                    <MdSwapHoriz className="h-4 w-4" />
                    Swap Dates
                  </button> */}

                  <button
                    onClick={() => {
                      setStartDate("");
                      setEndDate("");
                      setError("");
                    }}
                    disabled={!startDate || !endDate}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                      !startDate || !endDate
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
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-4 border border-white/10 transition-all duration-300 hover:border-blue-400/30">
                    <h3 className="text-sm font-medium text-white/80 mb-3 flex items-center gap-2">
                      Selected Date Range
                    </h3>
                    <div className="flex items-center gap-3 justify-between text-white">
                      <p className="font-medium text-sm bg-blue-500/20 px-3 py-1.5 rounded-lg">
                        {formatDate(startDate)}
                      </p>
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-300"
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
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-4 sm:p-6 border border-white/10 flex flex-col justify-between transition-all duration-300 hover:border-blue-400/30">
                <div className="flex-1 flex flex-col justify-center">
                  {isCalculated && !error ? (
                    <div className="w-full space-y-6">
                      {/* Total Days */}
                      <div className="flex justify-between items-center border-b border-white/10 pb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                            <span className="text-blue-300 text-sm font-bold">
                              D
                            </span>
                          </div>
                          <p className="text-white/70 text-sm uppercase tracking-wide">
                            Total Days
                          </p>
                        </div>
                        <p className="text-2xl sm:text-3xl font-bold text-white">
                          {days}
                        </p>
                      </div>

                      {/* Total Months */}
                      <div className="flex justify-between items-center border-b border-white/10 pb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                            <span className="text-indigo-300 text-sm font-bold">
                              M
                            </span>
                          </div>
                          <p className="text-white/70 text-sm uppercase tracking-wide">
                            Total Months
                          </p>
                        </div>
                        <p className="text-2xl sm:text-3xl font-bold text-white">
                          {months}
                        </p>
                      </div>

                      {/* Total Years */}
                      <div className="flex justify-between items-center border-b border-white/10 pb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                            <span className="text-purple-300 text-sm font-bold">
                              Y
                            </span>
                          </div>
                          <p className="text-white/70 text-sm uppercase tracking-wide">
                            Total Years
                          </p>
                        </div>
                        <p className="text-2xl sm:text-3xl font-bold text-white">
                          {years}
                        </p>
                      </div>

                      {/* Total Duration */}
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center">
                            <FiClock className="text-blue-300" />
                          </div>
                          <p className="text-white/80 text-sm uppercase tracking-wide">
                            Total Duration
                          </p>
                        </div>
                        <p className="text-xl sm:text-2xl text-right font-bold text-blue-300">
                          {totalDuration || "0 days"}
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
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-md opacity-20"></div>
                      </div>
                      <p className="mt-4 text-center max-w-xs mx-auto">
                        Select start and end dates to calculate the duration
                        between them
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
                Dates can be from any time period — past, present, or future
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
