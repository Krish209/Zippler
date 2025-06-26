"use client";
import { useState } from "react";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FiCheck, FiX } from "react-icons/fi";

export default function LeapYearChecker() {
  const [year, setYear] = useState("");
  const [isLeap, setIsLeap] = useState(null);
  const [error, setError] = useState("");

  const checkLeapYear = (input) => {
    const parsedYear = parseInt(input, 10);
    if (isNaN(parsedYear) || parsedYear <= 0) {
      setError("Please enter a valid positive year");
      setIsLeap(null);
      return;
    }
    setError("");
    const leap =
      (parsedYear % 4 === 0 && parsedYear % 100 !== 0) ||
      parsedYear % 400 === 0;
    setIsLeap(leap);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center p-2 sm:p-6">
        <div className="w-full max-w-2xl bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 sm:p-8 text-white">
            <h1 className="text-2xl sm:text-3xl font-bold text-center">
              Leap Year Checker
            </h1>
            <p className="text-blue-100 text-center mt-2">
              Enter a year to find out if it's a leap year
            </p>
          </div>

          {/* Main Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-4">
              <label className="block text-base sm:text-base font-medium text-white/80">
                Enter Year
              </label>
              <div className="relative">
                <input
                  type="text" // Use "text" instead of "number" for better control
                  inputMode="numeric"
                  value={year}
                  onChange={(e) => {
                    setYear(e.target.value);
                    setIsLeap(null);
                  }}
                  onBlur={() => checkLeapYear(year)}
                  placeholder="e.g., 2024"
                  className="w-full text-base sm:text-lg bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 appearance-none"
                />
              </div>

              {error && (
                <div className="bg-red-500/10 border-l-4 border-red-500 px-4 py-2 rounded">
                  <p className="text-red-300 text-sm">{error}</p>
                </div>
              )}
            </div>

            {/* Result Section */}
            <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10 flex flex-col items-center justify-center text-center">
              {isLeap !== null ? (
                <div className="space-y-3">
                  <p className="text-white text-lg sm:text-xl font-medium">
                    Year <span className="text-blue-300">{year}</span> is
                  </p>
                  <p
                    className={`text-4xl font-bold ${
                      isLeap ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {isLeap ? "A Leap Year" : "Not a Leap Year"}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-white/50 my-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white/30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="mt-4">Enter a year to check leap status</p>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="bg-white/5 p-4 text-center text-xs text-white/50 border-t border-white/10">
            Leap years occur every 4 years, except for years that are divisible by 100 but not by 400.
          </div>
        </div>
      </div>
    </>
  );
}