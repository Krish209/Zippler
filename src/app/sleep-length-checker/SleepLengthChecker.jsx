// app/sleep-length-checker/SleepLengthChecker.jsx

"use client";
import { useState, useEffect } from "react";
import { FiClock, FiMoon, FiSunrise, FiSunset } from "react-icons/fi";
import { MdOutlineAccessTime, MdOutlineBedtime, MdSunny } from "react-icons/md";

export default function SleepLengthChecker() {
  const [bedtime, setBedtime] = useState("");
  const [wakeupTime, setWakeupTime] = useState("");
  const [sleepDuration, setSleepDuration] = useState({
    hours: 0,
    minutes: 0,
    cycles: 0,
  });
  const [error, setError] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);

  useEffect(() => {
    if (bedtime && wakeupTime) {
      const bedtimeDate = new Date(`2000-01-01T${bedtime}`);
      const wakeupDate = new Date(`2000-01-01T${wakeupTime}`);

      // Handle overnight (bedtime before midnight, wakeup after)
      if (wakeupDate < bedtimeDate) {
        wakeupDate.setDate(wakeupDate.getDate() + 1);
      }

      const diffMs = wakeupDate - bedtimeDate;
      const diffMins = Math.floor(diffMs / (1000 * 60));
      const hours = Math.floor(diffMins / 60);
      const minutes = diffMins % 60;
      const cycles = Math.floor(diffMins / 90); // Each sleep cycle is ~90 mins

      if (hours < 0 || minutes < 0) {
        setError("Invalid time range");
        setIsCalculated(false);
        return;
      }

      setSleepDuration({ hours, minutes, cycles });
      setError("");
      setIsCalculated(true);
    } else {
      setError("");
      setIsCalculated(false);
    }
  }, [bedtime, wakeupTime]);

  const getSleepQuality = () => {
    const totalMins = sleepDuration.hours * 60 + sleepDuration.minutes;
    if (totalMins < 300) return "Not enough sleep";
    if (totalMins < 420) return "Light sleep";
    if (totalMins < 540) return "Good sleep";
    if (totalMins < 660) return "Ideal sleep";
    return "Too much sleep";
  };

  const getCycleQuality = () => {
    if (sleepDuration.cycles < 3) return "You'll feel tired";
    if (sleepDuration.cycles < 5) return "You'll feel refreshed";
    if (sleepDuration.cycles < 7) return "Optimal cycles";
    return "Too many cycles";
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Sleep Length Calculator",
          description: "Calculate your sleep duration and cycles",
          url: "https://zippler-pi.vercel.app/sleep-calculator",
        })}
      </script>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 p-4 sm:p-6">
        <div className="pt-20 pb-10">
          <div className="w-full mx-auto max-w-4xl bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-indigo-500/20">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-6 sm:p-8 text-white">
              <div className="flex items-center justify-center gap-3">
                <FiMoon className="h-8 w-8" />
                <h1 className="text-2xl sm:text-3xl font-bold text-center">
                  Sleep Length Calculator
                </h1>
              </div>
              <h2 className="text-indigo-100 text-center mt-2">
                Calculate your sleep duration and optimal wake-up times
              </h2>
            </div>

            {/* Main Content */}
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Input Section */}
                <div className="space-y-6">
                  <p className="text-lg font-medium text-white/80 flex items-center gap-2">
                    <FiMoon className="h-5 w-5 text-indigo-400" />
                    Sleep Times
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                        <MdOutlineBedtime className="text-indigo-400" />
                        Bedtime
                      </label>
                      <div className="relative">
                        <input
                          aria-label="bed-time-input"
                          type="time"
                          id="bedtime-input"
                          value={bedtime}
                          onChange={(e) => setBedtime(e.target.value)}
                          className="w-full text-base bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                          [&::-webkit-calendar-picker-indicator]:hidden
                          appearance-none transition-all duration-200 hover:bg-white/15"
                        />
                        <label className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <MdOutlineAccessTime
                            className="text-blue-400 h-5 w-5 cursor-pointer hover:text-blue-300 transition-colors"
                            onClick={() =>
                              document
                                .getElementById("bedtime-input")
                                ?.showPicker()
                            }
                          />
                        </label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                        <MdSunny className="text-purple-400" />
                        Wake-up Time
                      </label>
                      <div className="relative">
                        <input
                          aria-label="wake-up-time-input"
                          type="time"
                          id="wakeup-input"
                          value={wakeupTime}
                          onChange={(e) => setWakeupTime(e.target.value)}
                          className="w-full text-base bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                          [&::-webkit-calendar-picker-indicator]:hidden
                          appearance-none transition-all duration-200 hover:bg-white/15"
                        />
                        <label className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <MdOutlineAccessTime
                            className="text-blue-400 h-5 w-5 cursor-pointer hover:text-blue-300 transition-colors"
                            onClick={() =>
                              document
                                .getElementById("wakeup-input")
                                ?.showPicker()
                            }
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 items-center">
                    <button
                      onClick={() => {
                        setBedtime("");
                        setWakeupTime("");
                        setError("");
                      }}
                      disabled={!bedtime || !wakeupTime}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                        !bedtime || !wakeupTime
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
                        Your Sleep Window
                      </h3>
                      <div className="flex items-center gap-3 justify-between text-white">
                        <div className="text-center">
                          <p className="text-xs text-white/60">Bedtime</p>
                          <p className="font-medium text-sm bg-indigo-500/20 px-3 py-1.5 rounded-lg">
                            {bedtime}
                          </p>
                        </div>
                        <FiMoon className="text-indigo-300" />
                        <div className="text-center">
                          <p className="text-xs text-white/60">Wake-up</p>
                          <p className="font-medium text-sm bg-purple-500/20 px-3 py-1.5 rounded-lg">
                            {wakeupTime}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Results Section */}
                <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl p-4 sm:p-6 border border-white/10 flex flex-col justify-between transition-all duration-300 hover:border-indigo-400/30">
                  <div className="flex-1 flex flex-col justify-center">
                    {isCalculated && !error ? (
                      <div className="w-full space-y-6">
                        {/* Sleep Duration */}
                        <div className="flex flex-col items-center justify-center text-center p-4">
                          <div className="w-20 h-20 rounded-full bg-indigo-500/10 flex items-center justify-center border-2 border-indigo-400/30 mb-4">
                            <FiClock className="h-8 w-8 text-indigo-300" />
                          </div>
                          <h3 className="text-xl font-medium text-white/80 mb-1">
                            Sleep Duration
                          </h3>
                          <p className="text-4xl sm:text-5xl font-bold text-indigo-300">
                            {sleepDuration.hours}h {sleepDuration.minutes}m
                          </p>
                          <p
                            className={`mt-2 text-sm font-medium ${
                              getSleepQuality() === "Ideal sleep"
                                ? "text-green-400"
                                : getSleepQuality() === "Not enough sleep"
                                ? "text-red-400"
                                : "text-yellow-400"
                            }`}
                          >
                            {getSleepQuality()}
                          </p>
                        </div>

                        {/* Sleep Cycles */}
                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <FiSunset className="text-indigo-300" />
                              <span className="text-sm text-white/80">
                                Sleep Cycles
                              </span>
                            </div>
                            <span className="text-xl font-bold text-indigo-300">
                              {sleepDuration.cycles}
                            </span>
                          </div>
                          <p className="text-xs text-white/60">
                            (Each cycle ≈ 90 minutes)
                          </p>
                          <div className="mt-2">
                            <div className="flex items-center justify-between text-xs text-white/80 mb-1">
                              <span>Quality:</span>
                              <span
                                className={`font-medium ${
                                  getCycleQuality().includes("Optimal")
                                    ? "text-green-400"
                                    : getCycleQuality().includes("tired")
                                    ? "text-red-400"
                                    : "text-yellow-400"
                                }`}
                              >
                                {getCycleQuality()}
                              </span>
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-2">
                              <div
                                className="bg-indigo-500 h-2 rounded-full"
                                style={{
                                  width: `${Math.min(
                                    sleepDuration.cycles * 15,
                                    100
                                  )}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        {/* Optimal Wake Times */}
                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <p className="text-sm font-medium text-white/80 flex items-center gap-2 mb-2">
                            <FiSunrise className="text-yellow-400" />
                            Optimal Wake Times
                          </p>
                          <div className="grid grid-cols-3 gap-2 text-center">
                            {[4, 5, 6].map((cycles) => {
                              const totalMins = cycles * 90;
                              const wakeTime = new Date(
                                `2000-01-01T${bedtime}`
                              );
                              wakeTime.setMinutes(
                                wakeTime.getMinutes() + totalMins
                              );
                              return (
                                <div
                                  key={cycles}
                                  className="bg-white/5 p-2 rounded"
                                >
                                  <p className="text-xs text-white/60">
                                    {cycles} cycles
                                  </p>
                                  <p className="text-sm font-medium text-white">
                                    {wakeTime.toLocaleTimeString([], {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    })}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
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
                          Enter your bedtime and wake-up time to analyze your
                          sleep
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
                  A good night's sleep consists of 4-6 complete sleep cycles
                  (≈90 min each)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
