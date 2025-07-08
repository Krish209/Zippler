// app/age-calculator/AgeCalculator.jsx

"use client";
import { useState, useEffect } from "react";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FiClock } from "react-icons/fi";

export default function AgeCalculator({ title, content }) {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
  });
  const [error, setError] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);
  const [nextBirthday, setNextBirthday] = useState("");

  useEffect(() => {
    if (birthDate) {
      const birth = new Date(birthDate);
      const now = new Date();

      // Check for invalid date
      if (isNaN(birth.getTime())) {
        setError("Invalid date format");
        setIsCalculated(false);
        return;
      }

      if (birth > now) {
        setError("Birth date cannot be in the future");
        setIsCalculated(false);
        return;
      }

      setError("");

      // Calculate age
      let years = now.getFullYear() - birth.getFullYear();
      let months = now.getMonth() - birth.getMonth();
      let days = now.getDate() - birth.getDate();
      let hours = now.getHours();
      let minutes = now.getMinutes();

      if (days < 0) {
        months--;
        // Get the last day of the previous month
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      setAge({
        years,
        months,
        days,
        hours,
        minutes,
      });

      // Calculate next birthday
      const nextBday = new Date(
        now.getFullYear(),
        birth.getMonth(),
        birth.getDate()
      );
      if (nextBday < now) {
        nextBday.setFullYear(nextBday.getFullYear() + 1);
      }
      setNextBirthday(
        nextBday.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );

      setIsCalculated(true);
    } else {
      setError("");
      setIsCalculated(false);
    }
  }, [birthDate]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Invalid date";

    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: { title },
          description: "Calculate exact age from birth date",
          url: "https://zippler-pi.vercel.app/age-calculator",
        })}
      </script>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-4xl bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-blue-500/20">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 sm:p-8 text-white">
            <div className="flex items-center justify-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-bold text-center">
                {title}
              </h1>
            </div>
            <p className="text-blue-100 text-center mt-2">{content}</p>
          </div>

          {/* Main Content */}
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Input Section */}
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-white/80 flex items-center gap-2">
                  Birth Date
                </h2>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    Enter your date of birth
                  </label>
                  <div className="relative">
                    <input
                      aria-label="Birth date input"
                      type="date"
                      id="birth-date-input"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      max={new Date().toISOString().split("T")[0]}
                      className="w-full text-base bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400
                        [&::-webkit-calendar-picker-indicator]:hidden
                        appearance-none transition-all duration-200 hover:bg-white/15"
                    />
                    <label className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <MdOutlineCalendarToday
                        className="text-blue-400 h-5 w-5 cursor-pointer hover:text-blue-300 transition-colors"
                        onClick={() =>
                          document
                            .getElementById("birth-date-input")
                            ?.showPicker()
                        }
                      />
                    </label>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 items-center">
                  <button
                    onClick={() => {
                      setBirthDate("");
                      setError("");
                    }}
                    disabled={!birthDate}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                      !birthDate
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
                      Your Birth Date
                    </h3>
                    <div className="flex items-center gap-3 justify-between text-white">
                      <p className="font-medium text-sm bg-blue-500/20 px-3 py-1.5 rounded-lg">
                        {formatDate(birthDate)}
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
                      {/* Age in Years */}
                      <div className="flex justify-between items-center border-b border-white/10 pb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                            <span className="text-blue-300 text-sm font-bold">
                              Y
                            </span>
                          </div>
                          <p className="text-white/70 text-sm uppercase tracking-wide">
                            Years
                          </p>
                        </div>
                        <p className="text-2xl sm:text-3xl font-bold text-white">
                          {age.years}
                        </p>
                      </div>

                      {/* Age in Months */}
                      <div className="flex justify-between items-center border-b border-white/10 pb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                            <span className="text-indigo-300 text-sm font-bold">
                              M
                            </span>
                          </div>
                          <p className="text-white/70 text-sm uppercase tracking-wide">
                            Months
                          </p>
                        </div>
                        <p className="text-2xl sm:text-3xl font-bold text-white">
                          {age.months}
                        </p>
                      </div>

                      {/* Age in Days */}
                      <div className="flex justify-between items-center border-b border-white/10 pb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                            <span className="text-purple-300 text-sm font-bold">
                              D
                            </span>
                          </div>
                          <p className="text-white/70 text-sm uppercase tracking-wide">
                            Days
                          </p>
                        </div>
                        <p className="text-2xl sm:text-3xl font-bold text-white">
                          {age.days}
                        </p>
                      </div>

                      {/* Next Birthday */}
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-blue-300"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                              />
                            </svg>
                          </div>
                          <p className="text-white/80 text-sm uppercase tracking-wide">
                            Next Birthday
                          </p>
                        </div>
                        <p className="text-right font-medium text-blue-300">
                          {nextBirthday}
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
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-md opacity-20"></div>
                      </div>
                      <p className="mt-4 text-center max-w-xs mx-auto">
                        Enter your birth date to calculate your exact age
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
                Calculates your age based on the current date and time
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
