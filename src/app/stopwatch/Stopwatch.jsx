"use client";
import { useState, useEffect, useRef } from "react";
import { FiPlay, FiPause, FiRotateCw, FiFlag } from "react-icons/fi";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);

  // Format time as HH:MM:SS.mm
  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const ms = Math.floor((milliseconds % 1000) / 10);

    return [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
      ms.toString().padStart(2, "0"),
    ].join(":");
  };

  // Start the stopwatch
  const start = () => {
    if (isRunning) return;

    startTimeRef.current = Date.now() - time;
    intervalRef.current = setInterval(() => {
      setTime(Date.now() - startTimeRef.current);
    }, 10);
    setIsRunning(true);
  };

  // Pause the stopwatch
  const pause = () => {
    if (!isRunning) return;

    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  // Reset the stopwatch
  const reset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
    setLaps([]);
    startTimeRef.current = 0;
  };

  // Record a lap
  const recordLap = () => {
    if (!isRunning) return;
    setLaps((prev) => [time, ...prev]);
  };

  // Clean up interval on unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-blue-500/20">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 sm:p-8 text-white">
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-bold text-center">
              Stopwatch
            </h1>
          </div>
          <p className="text-blue-100 text-center mt-2">
            Track time with precision
          </p>
        </div>

        {/* Main Content */}
        <div className="p-6">
          {/* Time Display */}
          <div className="text-center mb-8">
            <div className="text-5xl sm:text-6xl font-mono font-bold text-blue-300">
              {formatTime(time).split(":").slice(0, 3).join(":")}
              <span className="text-3xl text-blue-400">
                .{formatTime(time).split(":")[3]}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              aria-label={isRunning ? "Pause Button" : "Start Button"}
              onClick={isRunning ? pause : start}
              className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg transition-all ${
                isRunning
                  ? "bg-yellow-600 hover:bg-yellow-700"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {isRunning ? (
                <FiPause className="h-6 w-6" />
              ) : (
                <FiPlay className="h-6 w-6" />
              )}
            </button>

            <button
              onClick={recordLap}
              aria-label="Record Lap Button"
              disabled={!isRunning}
              className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all ${
                isRunning
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-white/5 text-white/30 cursor-not-allowed"
              }`}
            >
              <FiFlag className="h-6 w-6" />
            </button>

            <button
              onClick={reset}
              aria-label="Reset stopwatch Button"
              className="w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 text-white shadow-lg transition-all flex items-center justify-center"
            >
              <FiRotateCw className="h-6 w-6" />
            </button>
          </div>

          {/* Laps */}
          {laps.length > 0 && (
            <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-xl p-4 border border-white/10 max-h-64 overflow-y-auto">
              <h3 className="text-sm font-medium text-white/80 mb-3 flex items-center gap-2">
                <FiFlag className="h-4 w-4" />
                Lap Times
              </h3>
              <div className="divide-y divide-white/10">
                {laps.map((lap, index) => (
                  <div
                    key={index}
                    className="py-2 flex justify-between items-center"
                  >
                    <span className="text-white/80">
                      Lap {laps.length - index}
                    </span>
                    <span className="font-mono text-blue-300">
                      {formatTime(lap)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-white/5 p-4 text-center text-xs text-white/50 border-t border-white/10">
          <div className="flex items-center justify-center gap-2">
            <span>Uses browser's high-precision timing</span>
          </div>
        </div>
      </div>
    </div>
  );
}
