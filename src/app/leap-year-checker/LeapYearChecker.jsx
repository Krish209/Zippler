// app/leap-year-checker/LeapYearChecker.jsx

"use client";
import { useState } from "react";

export default function LeapYearChecker() {
  const [year, setYear] = useState("");
  const [isLeapYear, setIsLeapYear] = useState(null);
  const [error, setError] = useState("");
  const [checkedYear, setCheckedYear] = useState(null); // Track the year that was actually checked

  const handleYearChange = (e) => {
    const value = e.target.value;
    // Only allow numbers and empty string
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setYear(value);
    }
  };

  const checkLeapYear = () => {
    setError("");
    setIsLeapYear(null);

    if (!year) {
      setError("Please enter a year");
      return;
    }

    const yearNum = parseInt(year);
    if (isNaN(yearNum) || yearNum.toString().length !== 4) {
      setError("Please enter a valid 4-digit year");
      return;
    }

    const result =
      yearNum % 400 === 0 || (yearNum % 100 !== 0 && yearNum % 4 === 0);

    setIsLeapYear(result);
    setCheckedYear(year); // Store the checked year
  };

  const clearInput = () => {
    setYear("");
    setIsLeapYear(null);
    setError("");
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Leap Year Checker",
          description: "Check if a year is a leap year",
          url: "https://zippler-pi.vercel.app/leap-year-checker",
        })}
      </script>

      <div className="min-h-screen py-20 bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-2xl bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-blue-500/20">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-6 sm:p-8 text-white">
            <div className="flex items-center justify-center gap-3">
              {/* <MdOutlineCalendarToday className="text-2xl" /> */}
              <h1 className="text-2xl sm:text-3xl font-bold text-center">
                Leap Year Checker
              </h1>
            </div>
            <p className="text-emerald-100 text-center mt-2">
              Check if any year is a leap year
            </p>
          </div>

          {/* Main Content */}
          <div className="p-4 sm:p-6">
            <div className="space-y-6">
              {/* Input Section */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Enter Year
                  </label>
                  <div className="relative">
                    <input
                      aria-label="leap-year-checker"
                      type="text" // Changed from number to text to remove arrows
                      inputMode="numeric" // Shows numeric keyboard on mobile
                      pattern="[0-9]*" // Helps with numeric input on mobile
                      value={year}
                      onChange={handleYearChange}
                      className="w-full text-base sm:text-lg bg-white/10 border border-white/20 rounded-lg px-4 py-3 sm:py-4 text-white focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-200 hover:bg-white/15"
                      placeholder="e.g. 2024"
                      maxLength="4"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 items-center">
                  <button
                    onClick={checkLeapYear}
                    disabled={!year}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                      !year
                        ? "bg-white/5 text-white/30 cursor-not-allowed"
                        : "bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow-md"
                    }`}
                  >
                    Check Year
                  </button>

                  <button
                    onClick={clearInput}
                    disabled={!year && isLeapYear === null}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                      !year && isLeapYear === null
                        ? "bg-white/5 text-white/30 cursor-not-allowed"
                        : "bg-white/10 hover:bg-white/20 text-white hover:shadow-md"
                    }`}
                  >
                    Clear
                  </button>

                  {error && (
                    <div className="bg-red-500/10 border-l-4 border-red-500 px-4 py-2 rounded flex-1">
                      <p className="text-red-300 text-sm">{error}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Results Section */}
              <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl p-6 border border-white/10 transition-all duration-300 hover:border-emerald-400/30">
                {isLeapYear !== null ? (
                  <div className="flex flex-col items-center justify-center text-center gap-4">
                    <div className="space-y-3">
                      <p className="text-white text-lg sm:text-xl font-medium">
                        Year{" "}
                        <span className="text-blue-300">{checkedYear}</span> is
                      </p>
                      <p
                        className={`text-4xl font-bold ${
                          isLeapYear ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {isLeapYear ? "A Leap Year" : "Not a Leap Year"}
                      </p>
                    </div>
                    <p className="text-white/70 text-center">
                      {isLeapYear
                        ? "This year has 366 days (February has 29 days)"
                        : "This year has 365 days (February has 28 days)"}
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-white/50 my-2 sm:my-2">
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
                      <div className="absolute -inset-4 bg-emerald-500/10 rounded-full blur-md opacity-20"></div>
                    </div>
                    <p className="mt-4 text-center max-w-xs mx-auto">
                      Enter a year to check if it's a leap year
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-white/5 p-4 text-center text-xs text-white/50 border-t border-white/10">
            <div className="flex items-center justify-center gap-2">
              <span>
                Leap years help synchronize our calendar with Earth's revolution
                around the Sun
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
