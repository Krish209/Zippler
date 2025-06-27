"use client";
import { useState, useEffect } from "react";
import { FiClock, FiMoon, FiSunrise, FiSunset } from "react-icons/fi";
import { MdOutlineAccessTime, MdOutlineBedtime, MdSunny } from "react-icons/md";

export default function SleepTimeCalculator() {
  const [mode, setMode] = useState("wakeup"); // 'wakeup' or 'bedtime'
  const [inputTime, setInputTime] = useState("");
  const [sleepTimes, setSleepTimes] = useState([]);
  const [error, setError] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);

  const calculateSleepTimes = () => {
    if (!inputTime) {
      setError("Please enter a time");
      setIsCalculated(false);
      return;
    }

    const [hours, minutes] = inputTime.split(":").map(Number);
    if (isNaN(hours) || isNaN(minutes)) {
      setError("Invalid time format");
      setIsCalculated(false);
      return;
    }

    setError("");
    const times = [];
    const baseDate = new Date();
    baseDate.setHours(hours, minutes, 0, 0);

    // Calculate 6 sleep cycles (each 90 mins)
    for (let cycles = 4; cycles <= 6; cycles++) {
      const time = new Date(baseDate);
      if (mode === "wakeup") {
        // Calculate bedtimes based on wake-up time
        time.setMinutes(time.getMinutes() - cycles * 90);
      } else {
        // Calculate wake-up times based on bedtime
        time.setMinutes(time.getMinutes() + cycles * 90);
      }

      times.push({
        cycles,
        time: time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        description: `${cycles} sleep cycles (${cycles * 1.5} hours)`,
      });
    }

    setSleepTimes(times);
    setIsCalculated(true);
  };

  const toggleMode = () => {
    setMode(mode === "wakeup" ? "bedtime" : "wakeup");
    setInputTime("");
    setIsCalculated(false);
  };

  useEffect(() => {
    if (inputTime && isCalculated) {
      calculateSleepTimes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-indigo-500/20">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-6 sm:p-8 text-white">
          <div className="flex items-center justify-center gap-3">
            <FiMoon className="h-8 w-8" />
            <h1 className="text-2xl sm:text-3xl font-bold text-center">
              Sleep Time Calculator
            </h1>
          </div>
          <p className="text-indigo-100 text-center mt-2">
            {mode === "wakeup"
              ? "Find the best bedtime for your wake-up time"
              : "Find the best wake-up time for your bedtime"}
          </p>
        </div>

        {/* Main Content */}
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Input Section */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium text-white/80 flex items-center gap-2">
                  {mode === "wakeup" ? (
                    <>
                      <MdSunny className="h-5 w-5 text-indigo-400" />
                      Bedtime
                    </>
                  ) : (
                    <>
                      <FiMoon className="h-5 w-5 text-indigo-400" />
                      Wake-up Time
                    </>
                  )}
                </h2>
                <button
                  onClick={toggleMode}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white cursor-pointer hover:shadow-md"
                >
                  {mode === "wakeup" ? (
                    <>
                      <MdOutlineBedtime className="h-3 w-3" />
                      Switch to bedtime
                    </>
                  ) : (
                    <>
                      <MdSunny className="h-3 w-3" />
                      Switch to wake-up
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  {mode === "wakeup" ? (
                    <>
                      <MdSunny className="text-indigo-400" />I need to wake up
                      at...
                    </>
                  ) : (
                    <>
                      <MdOutlineBedtime className="text-purple-400" />I plan to
                      go to bed at...
                    </>
                  )}
                </label>
                <div className="relative">
                  <input
                    type="time"
                    id="time-input"
                    value={inputTime}
                    onChange={(e) => setInputTime(e.target.value)}
                    className="w-full text-base bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 
                      [&::-webkit-calendar-picker-indicator]:hidden
                      appearance-none transition-all duration-200 hover:bg-white/15"
                  />
                  <label className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <MdOutlineAccessTime
                      className="text-blue-400 h-5 w-5 cursor-pointer hover:text-blue-300 transition-colors"
                      onClick={() =>
                        document.getElementById("time-input")?.showPicker()
                      }
                    />
                  </label>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 items-center">
                <button
                  onClick={calculateSleepTimes}
                  disabled={!inputTime}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    !inputTime
                      ? "bg-white/5 text-white/30 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-md"
                  }`}
                >
                  <FiClock className="h-4 w-4" />
                  Calculate
                </button>

                <button
                  onClick={() => {
                    setInputTime("");
                    setError("");
                  }}
                  disabled={!inputTime}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    !inputTime
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
                    <FiClock className="h-4 w-4" />
                    Your {mode === "wakeup" ? "Bedtime" : "Wake-up"} Options
                  </h3>
                  <p className="text-xs text-white/60 mb-2">
                    Based on complete sleep cycles (each ≈90 minutes):
                  </p>
                  <div className="space-y-2">
                    {sleepTimes.map((item, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg flex items-center justify-between ${
                          item.cycles === 5
                            ? "bg-indigo-500/20 border border-indigo-400/30"
                            : "bg-white/5"
                        }`}
                      >
                        <div>
                          <p className="font-medium text-white">{item.time}</p>
                          <p className="text-xs text-white/60">
                            {item.description}
                          </p>
                        </div>
                        {item.cycles === 5 && (
                          <span className="text-xs bg-indigo-500/30 text-indigo-200 px-2 py-1 rounded">
                            Ideal
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Results Section */}
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl p-4 sm:p-6 border border-white/10 flex flex-col justify-between transition-all duration-300 hover:border-indigo-400/30">
              <div className="flex-1 flex flex-col justify-center">
                {isCalculated && !error ? (
                  <div className="w-full space-y-6">
                    {/* Main Recommendation */}
                    <div className="flex flex-col items-center justify-center text-center p-4">
                      <div className="w-20 h-20 rounded-full bg-indigo-500/10 flex items-center justify-center border-2 border-indigo-400/30 mb-4">
                        {mode === "wakeup" ? (
                          <FiMoon className="h-8 w-8 text-indigo-300" />
                        ) : (
                          <FiSunrise className="h-8 w-8 text-yellow-300" />
                        )}
                      </div>
                      <h3 className="text-xl font-medium text-white/80 mb-1">
                        Recommended {mode === "wakeup" ? "Bedtime" : "Wake-up"}
                      </h3>
                      <p className="text-4xl sm:text-5xl font-bold text-indigo-300">
                        {sleepTimes.find((t) => t.cycles === 5)?.time}
                      </p>
                      <p className="mt-2 text-sm text-white/80">
                        For 5 complete sleep cycles (7.5 hours)
                      </p>
                    </div>

                    {/* Sleep Science */}
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <h4 className="text-sm font-medium text-white/80 flex items-center gap-2 mb-2">
                        <FiClock className="text-indigo-300" />
                        Sleep Cycle Science
                      </h4>
                      <ul className="text-xs text-white/60 space-y-1">
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-300">•</span>
                          Each cycle lasts ≈90 minutes
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-300">•</span>
                          Waking between cycles feels more natural
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-300">•</span>
                          Most adults need 4-6 cycles per night
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-indigo-300">•</span>5 cycles
                          (7.5 hours) is ideal for most
                        </li>
                      </ul>
                    </div>

                    {/* Additional Tips */}
                    {/* <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <h4 className="text-sm font-medium text-white/80 flex items-center gap-2 mb-2">
                        <FiSunset className="text-yellow-400" />
                        Sleep Tips
                      </h4>
                      <p className="text-xs text-white/60">
                        {mode === "wakeup"
                          ? "Try to go to bed at one of these times to wake up feeling refreshed at your desired time."
                          : "These wake-up times will help you feel most rested based on when you go to bed."}
                      </p>
                    </div> */}
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
                      {mode === "wakeup"
                        ? "Enter your desired wake-up time to find optimal bedtimes"
                        : "Enter your planned bedtime to find optimal wake-up times"}
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
            <p>
              {mode === "wakeup"
                ? "Try to go to bed at one of these times to wake up feeling refreshed at your desired time."
                : "These wake-up times will help you feel most rested based on when you go to bed."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
