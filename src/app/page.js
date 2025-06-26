"use client";
import { useState, useEffect } from "react";
import { MdOutlineCalendarToday } from "react-icons/md";

export default function DateCalculator() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [days, setDays] = useState(null);
  const [weeks, setWeeks] = useState(null);
  const [months, setMonths] = useState(null);
  const [years, setYears] = useState(null);
  const [error, setError] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);
  const [activeTab, setActiveTab] = useState("days");

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
      const diffWeeks = Math.floor(diffDays / 7);
      const diffMonths = Math.floor(diffDays / 30.44);
      const diffYears = Math.floor(diffDays / 365.25);

      setDays(diffDays);
      setWeeks(diffWeeks);
      setMonths(diffMonths);
      setYears(diffYears);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center p-2 sm:p-6">
      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 sm:p-8 text-white">
          <h1 className="text-2xl sm:text-3xl font-bold text-center">
            Time Span Calculator
          </h1>
          <p className="text-blue-100 text-center mt-2">
            Calculate precise duration between dates
          </p>
        </div>

        {/* Main Content */}
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2 sm:space-y-3">
                  <label className="block text-base sm:text-base font-medium text-white/80">
                    Start Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="start-date-input"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      max={endDate || undefined}
                      className="w-full text-base sm:text-lg bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400
                          [&::-webkit-calendar-picker-indicator]:hidden /* Chrome/Safari */
                          [&::-webkit-inner-spin-button]:hidden /* Removes spin buttons */
                          [&::-webkit-clear-button]:hidden /* Removes clear button */
                          [&::-webkit-datetime-edit-fields-wrapper]:p-0 /* Fix field padding */
                          appearance-none"
                    />
                    <label className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <MdOutlineCalendarToday
                        className="text-blue-400 h-5 w-5 cursor-pointer"
                        onClick={() => document.getElementById('start-date-input')?.showPicker()}
                      />
                    </label>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <label className="block text-base sm:text-base font-medium text-white/80">
                    End Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="end-date-input"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      min={startDate || undefined}
                      className="w-full text-base sm:text-lg bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400
                          [&::-webkit-calendar-picker-indicator]:hidden /* Chrome/Safari */
                          [&::-webkit-inner-spin-button]:hidden /* Removes spin buttons */
                          [&::-webkit-clear-button]:hidden /* Removes clear button */
                          [&::-webkit-datetime-edit-fields-wrapper]:p-0 /* Fix field padding */
                          appearance-none"
                    />
                    <label className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <MdOutlineCalendarToday
                        className="text-blue-400 h-5 w-5 cursor-pointer"
                        onClick={() => document.getElementById('end-date-input')?.showPicker()}
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* <div className="flex flex-wrap gap-3">
                {error && (
                  <div>
                    <button
                      onClick={swapDates}
                      disabled={!startDate || !endDate}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                        !startDate || !endDate
                          ? "bg-white/5 text-white/30 cursor-not-allowed"
                          : "bg-white/10 hover:bg-white/20 text-white"
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
                          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                        />
                      </svg>
                      Swap
                    </button>

                    <div className="bg-red-500/10 border-l-4 border-red-500 px-4 py-2 rounded">
                      <p className="text-red-300 text-sm">{error}</p>
                    </div>
                  </div>
                )}
              </div> */}

              {isCalculated && !error && (
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h3 className="text-base sm:text-base font-medium text-white/80 mb-3 sm:mb-3">
                    Selected Range
                  </h3>
                  <div className="flex items-center gap-2 justify-between text-white">
                    <p className="font-medium text-sm sm:text-base">
                      {formatDate(startDate)}
                    </p>
                    <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center">
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
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                    <p className="font-medium text-right text-sm sm:text-base">
                      {formatDate(endDate)}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Results Section */}
            <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10 flex flex-col justify-between h-full">
              {/* Tabs */}
              <div className="flex justify-center border-b border-white/10 mb-2">
                {["days", "weeks", "months", "years"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2 px-3 sm:px-4 text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? "text-blue-400 border-b-2 border-blue-400"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                {isCalculated && !error ? (
                  <>
                    <p className="text-white/60 text-sm mb-2 uppercase tracking-wide">
                      {`Total ${activeTab}`}
                    </p>
                    <p className="text-6xl font-bold text-white mb-0">
                      {
                        {
                          days,
                          weeks,
                          months,
                          years,
                        }[activeTab]
                      }
                    </p>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center text-white/50 my-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 mx-auto text-white/30"
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
                    <p className="mt-4">Select dates to calculate duration</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white/5 p-4 text-center text-xs text-white/50 border-t border-white/10">
          Dates can be from any time period — past, present, or future
        </div>
      </div>
    </div>
  );
}
