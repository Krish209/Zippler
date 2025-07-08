// app/time-calculator/TimeCalculator.jsx

"use client";
import { useState, useEffect } from "react";
import {
  MdOutlineAccessTime,
  MdSwapHoriz,
  MdOutlineTimer,
} from "react-icons/md";
import { FiClock, FiSunrise, FiSunset } from "react-icons/fi";

export default function TimeCalculator() {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [totalTime, setTotalTime] = useState("");
  const [error, setError] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);
  const [timeFormat, setTimeFormat] = useState("12"); // '12' or '24'

  useEffect(() => {
    if (startTime && endTime) {
      try {
        // Convert to 24-hour format for calculations
        const start24 = convertTo24Hour(startTime, timeFormat);
        const end24 = convertTo24Hour(endTime, timeFormat);

        if (!start24 || !end24) {
          throw new Error("Invalid time format");
        }

        const [startHours, startMinutes] = start24.split(":").map(Number);
        const [endHours, endMinutes] = end24.split(":").map(Number);

        // Validate inputs
        if (
          isNaN(startHours) ||
          startHours < 0 ||
          startHours > 23 ||
          isNaN(startMinutes) ||
          startMinutes < 0 ||
          startMinutes > 59 ||
          isNaN(endHours) ||
          endHours < 0 ||
          endHours > 23 ||
          isNaN(endMinutes) ||
          endMinutes < 0 ||
          endMinutes > 59
        ) {
          throw new Error("Invalid time values");
        }

        // Convert to Date objects for easier comparison
        const startDate = new Date();
        startDate.setHours(startHours, startMinutes, 0, 0);

        const endDate = new Date();
        endDate.setHours(endHours, endMinutes, 0, 0);

        // Handle overnight case (end time is next day)
        if (endDate < startDate) {
          endDate.setDate(endDate.getDate() + 1);
        }

        setError("");
        const diffTime = Math.abs(endDate - startDate);

        // Calculate all time units
        const diffSeconds = Math.floor(diffTime / 1000);
        const diffMinutes = Math.floor(diffSeconds / 60);
        const diffHours = Math.floor(diffSeconds / 3600);

        // Calculate remaining minutes and seconds after full hours
        const remainingMinutes = diffMinutes % 60;
        const remainingSeconds = diffSeconds % 60;

        setSeconds(remainingSeconds);
        setMinutes(remainingMinutes);
        setHours(diffHours);

        // Format total time string
        const totalParts = [];
        if (diffHours > 0) {
          totalParts.push(`${diffHours} hour${diffHours !== 1 ? "s" : ""}`);
        }
        if (remainingMinutes > 0) {
          totalParts.push(
            `${remainingMinutes} minute${remainingMinutes !== 1 ? "s" : ""}`
          );
        }
        if (remainingSeconds > 0 || totalParts.length === 0) {
          totalParts.push(
            `${remainingSeconds} second${remainingSeconds !== 1 ? "s" : ""}`
          );
        }

        setTotalTime(totalParts.join(", "));
        setIsCalculated(true);
      } catch (err) {
        setError(err.message);
        setIsCalculated(false);
      }
    } else {
      setError("");
      setIsCalculated(false);
    }
  }, [startTime, endTime, timeFormat]);

  // Convert between 12-hour and 24-hour formats
  const convertTo24Hour = (time, format) => {
    if (!time) return null;
    if (format === "24") return time;

    try {
      const [timePart, period] = time.split(/(?=[AP]M)/i);
      let [hours, minutes] = timePart.split(":").map(Number);

      if (period) {
        if (period.toUpperCase() === "PM" && hours < 12) hours += 12;
        if (period.toUpperCase() === "AM" && hours === 12) hours = 0;
      }

      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`;
    } catch {
      return null;
    }
  };

  const formatTimeDisplay = (time, format) => {
    if (!time) return "";
    if (format === "24") return time;

    try {
      let [hours, minutes] = time.split(":").map(Number);
      const period = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;

      return `${hours}:${minutes.toString().padStart(2, "0")} ${period}`;
    } catch {
      return "";
    }
  };

  const swapTimes = () => {
    const temp = startTime;
    setStartTime(endTime);
    setEndTime(temp);
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Time Duration Calculator",
          description: "Calculate duration between times",
          url: "https://zippler-pi.vercel.app/time-calculator",
        })}
      </script>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-4xl bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-blue-500/20">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 sm:p-8 text-white">
            <div className="flex items-center justify-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-bold text-center">
                Time Duration Calculator
              </h1>
            </div>
            <p className="text-blue-100 text-center mt-2">
              Calculate precise duration between any two times
            </p>
          </div>

          {/* Main Content */}
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Input Section */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-medium text-white/80 flex items-center gap-2">
                    {/* <FiSunrise className="text-yellow-300" /> */}
                    Time Inputs
                  </h2>
                  <div
                    className="inline-flex rounded-md shadow-sm"
                    role="group"
                  >
                    <button
                      type="button"
                      onClick={() => setTimeFormat("12")}
                      aria-label="12-hour format"
                      className={`px-3 py-2 text-sm font-medium rounded-l-lg transition-all ${
                        timeFormat === "12"
                          ? "bg-blue-600 text-white shadow-md"
                          : "bg-white/10 text-white/70 hover:bg-white/20 cursor-pointer"
                      }`}
                    >
                      12-hour
                    </button>
                    <button
                      type="button"
                      onClick={() => setTimeFormat("24")}
                      aria-label="24-hour format"
                      className={`px-3 py-2 text-sm font-medium rounded-r-lg transition-all ${
                        timeFormat === "24"
                          ? "bg-blue-600 text-white shadow-md "
                          : "bg-white/10 text-white/70 hover:bg-white/20 cursor-pointer"
                      }`}
                    >
                      24-hour
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                      Start Time
                    </label>
                    <div className="relative">
                      <input
                        aria-label="start-time-input"
                        type={timeFormat === "12" ? "time" : "time"}
                        id="start-time-input"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className="w-full text-base bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400
                          [&::-webkit-calendar-picker-indicator]:hidden
                          appearance-none transition-all duration-200 hover:bg-white/15"
                        placeholder={
                          timeFormat === "12" ? "HH:MM AM/PM" : "HH:MM"
                        }
                      />
                      <label className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <MdOutlineAccessTime
                          className="text-blue-400 h-5 w-5 cursor-pointer hover:text-blue-300 transition-colors"
                          onClick={() =>
                            document
                              .getElementById("start-time-input")
                              ?.showPicker()
                          }
                        />
                      </label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                      End Time
                    </label>
                    <div className="relative">
                      <input
                        aria-label="end-time-input"
                        type={timeFormat === "12" ? "time" : "time"}
                        id="end-time-input"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className="w-full text-base bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400
                          [&::-webkit-calendar-picker-indicator]:hidden
                          appearance-none transition-all duration-200 hover:bg-white/15"
                        placeholder={
                          timeFormat === "12" ? "HH:MM AM/PM" : "HH:MM"
                        }
                      />
                      <label className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <MdOutlineAccessTime
                          className="text-blue-400 h-5 w-5 cursor-pointer hover:text-blue-300 transition-colors"
                          onClick={() =>
                            document
                              .getElementById("end-time-input")
                              ?.showPicker()
                          }
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 items-center">
                  <button
                    onClick={swapTimes}
                    disabled={!startTime || !endTime}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                      !startTime || !endTime
                        ? "bg-white/5 text-white/30 cursor-not-allowed"
                        : "bg-white/10 hover:bg-white/20 text-white hover:shadow-md cursor-pointer"
                    }`}
                  >
                    <MdSwapHoriz className="h-4 w-4" />
                    Swap Times
                  </button>

                  {/* Clear button */}
                  <button
                    onClick={() => {
                      setStartTime("");
                      setEndTime("");
                      setError("");
                    }}
                    disabled={!startTime || !endTime}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                      !startTime || !endTime
                        ? "bg-white/5 text-white/30 cursor-not-allowed"
                        : "bg-white/10 hover:bg-white/20 text-white hover:shadow-md cursor-pointer"
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
                      <FiSunset className="text-yellow-300" />
                      Selected Time Range
                    </h3>
                    <div className="flex items-center gap-3 justify-between text-white">
                      <p className="font-medium text-sm bg-blue-500/20 px-3 py-1.5 rounded-lg">
                        {timeFormat === "12"
                          ? formatTimeDisplay(
                              convertTo24Hour(startTime, "12"),
                              "12"
                            )
                          : startTime}
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
                        {timeFormat === "12"
                          ? formatTimeDisplay(
                              convertTo24Hour(endTime, "12"),
                              "12"
                            )
                          : endTime}
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
                      {/* Total Hours */}
                      <div className="flex justify-between items-center border-b border-white/10 pb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                            <span className="text-blue-300 text-sm font-bold">
                              H
                            </span>
                          </div>
                          <p className="text-white/70 text-sm uppercase tracking-wide">
                            Total Hours
                          </p>
                        </div>
                        <p className="text-2xl sm:text-3xl font-bold text-white">
                          {hours + minutes / 60 + seconds / 3600 > 0
                            ? (hours + minutes / 60 + seconds / 3600).toFixed(2)
                            : "0.00"}
                        </p>
                      </div>

                      {/* Total Minutes */}
                      <div className="flex justify-between items-center border-b border-white/10 pb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                            <span className="text-purple-300 text-sm font-bold">
                              M
                            </span>
                          </div>
                          <p className="text-white/70 text-sm uppercase tracking-wide">
                            Total Minutes
                          </p>
                        </div>
                        <p className="text-2xl sm:text-3xl font-bold text-white">
                          {hours * 60 + minutes + seconds / 60 > 0
                            ? (hours * 60 + minutes + seconds / 60).toFixed(2)
                            : "0.00"}
                        </p>
                      </div>

                      {/* Total Seconds */}
                      <div className="flex justify-between items-center border-b border-white/10 pb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                            <span className="text-indigo-300 text-sm font-bold">
                              S
                            </span>
                          </div>
                          <p className="text-white/70 text-sm uppercase tracking-wide">
                            Total Seconds
                          </p>
                        </div>
                        <p className="text-2xl sm:text-3xl font-bold text-white">
                          {hours * 3600 + minutes * 60 + seconds || "0"}
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
                          {totalTime || "0 seconds"}
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
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-md opacity-20"></div>
                      </div>
                      <p className="mt-4 text-center max-w-xs mx-auto">
                        Select start and end times to calculate the duration
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
                Times can be from any period — AM or PM, including overnight
                calculations
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
