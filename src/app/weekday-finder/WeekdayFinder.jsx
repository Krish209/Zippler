"use client";
import { useState, useEffect } from "react";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";

export default function DayOfWeekFinder() {
  const [inputDate, setInputDate] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [error, setError] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);

  useEffect(() => {
    if (inputDate) {
      const date = new Date(inputDate);

      // Check for invalid dates
      if (isNaN(date.getTime())) {
        setError("Invalid date format");
        setIsCalculated(false);
        return;
      }

      setError("");
      
      // Get day of week
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      setDayOfWeek(days[date.getDay()]);

      setIsCalculated(true);
    } else {
      setError("");
      setIsCalculated(false);
    }
  }, [inputDate]);

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Day of Week Finder",
          description: "Find what day of the week a particular date fell on",
          url: "https://yourdomain.com/day-finder",
        })}
      </script>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-4xl bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-blue-500/20">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 sm:p-8 text-white">
            <div className="flex items-center justify-center gap-3">
              <FiCalendar className="h-8 w-8" />
              <h1 className="text-2xl sm:text-3xl font-bold text-center">
                Day of the Week Finder
              </h1>
            </div>
            <p className="text-blue-100 text-center mt-2">
              Discover what day of the week any date fell on
            </p>
          </div>

          {/* Main Content */}
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Input Section */}
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-white/80 flex items-center gap-2">
                  <FiCalendar className="h-5 w-5 text-blue-400" />
                  Date Input
                </h2>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    Enter any date in history
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="date-input"
                      value={inputDate}
                      onChange={(e) => setInputDate(e.target.value)}
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

                <div className="flex flex-wrap gap-3 items-center">
                  <button
                    onClick={() => {
                      setInputDate("");
                      setError("");
                    }}
                    disabled={!inputDate}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                      !inputDate
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

              </div>

              {/* Results Section */}
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-4 sm:p-6 border border-white/10 flex flex-col justify-between transition-all duration-300 hover:border-blue-400/30">
                <div className="flex-1 flex flex-col justify-center">
                  {isCalculated && !error ? (
                    <div className="w-full space-y-6">
                      {/* Day of Week */}
                      <div className="flex flex-col items-center justify-center text-center p-8">
                        <div className="w-24 h-24 rounded-full bg-blue-500/10 flex items-center justify-center border-2 border-blue-400/30 mb-6">
                          <span className="text-3xl font-bold text-blue-300">
                            {dayOfWeek.charAt(0)}
                          </span>
                        </div>
                        <h3 className="text-xl font-medium text-white/80 mb-2">
                          The day was
                        </h3>
                        <p className="text-4xl sm:text-5xl font-bold text-blue-300">
                          {dayOfWeek}
                        </p>
                      </div>

                      {/* Fun Facts */}
                      <div className="mt-6 bg-white/5 rounded-lg p-4 border border-white/10">
                        <h4 className="text-sm font-medium text-white/70 mb-2">
                          DID YOU KNOW?
                        </h4>
                        <p className="text-white/80 text-sm">
                          {dayOfWeek === "Monday" && "Monday comes from 'Moon day' in Old English"}
                          {dayOfWeek === "Tuesday" && "Tuesday is named after the Norse god Tyr"}
                          {dayOfWeek === "Wednesday" && "Wednesday honors Odin (Woden in Old English)"}
                          {dayOfWeek === "Thursday" && "Thursday is Thor's day in Norse mythology"}
                          {dayOfWeek === "Friday" && "Friday is named after Frigg, the Norse goddess of love"}
                          {dayOfWeek === "Saturday" && "Saturday is the only day named after a Roman god (Saturn)"}
                          {dayOfWeek === "Sunday" && "Sunday has always been associated with the Sun"}
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
                        Enter any date to find out what day of the week it was
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
                Works for any date in history - past, present, or future
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}