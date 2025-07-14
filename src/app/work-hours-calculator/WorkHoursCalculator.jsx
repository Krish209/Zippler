// app/work-hours-calculator/WorkHou.jsx
"use client";

import { useState, useEffect } from "react";
import { FiClock, FiCoffee, FiDollarSign, FiCalendar } from "react-icons/fi";
import { motion } from "framer-motion";
import { MdOutlineAccessTime } from "react-icons/md";

// Helper function for calculating time and earnings
const calculateWorkStats = (startTime, endTime, breakMinutes, hourlyRate) => {
  const [startHour, startMin] = startTime.split(":").map(Number);
  const [endHour, endMin] = endTime.split(":").map(Number);

  const startTotal = startHour * 60 + startMin;
  const endTotal = endHour * 60 + endMin;

  let totalMinutes = endTotal - startTotal - breakMinutes;
  if (totalMinutes < 0) totalMinutes += 1440; // Handle overnight shifts

  totalMinutes = Math.max(0, totalMinutes); // Clamp to non-negative

  const totalHours = (totalMinutes / 60).toFixed(2);
  const totalEarnings = (totalHours * hourlyRate).toFixed(2);

  return {
    totalHours,
    totalEarnings,
    breakAdjusted: breakMinutes > 0,
  };
};

const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

export default function WorkHoursCalculator() {
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("17:00");
  const [breakMinutes, setBreakMinutes] = useState(30);
  const [hourlyRate, setHourlyRate] = useState(15);
  const [results, setResults] = useState(null);

  useEffect(() => {
    const updated = calculateWorkStats(
      startTime,
      endTime,
      breakMinutes,
      hourlyRate
    );
    setResults(updated);
  }, [startTime, endTime, breakMinutes, hourlyRate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 p-4 sm:p-6">
      <div className="pt-20 pb-10">
        <div className="w-full mx-auto max-w-3xl bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
            <div className="flex items-center justify-center gap-3">
              <FiClock className="h-8 w-8" />
              <h1 className="text-2xl sm:text-3xl font-bold text-center">
                Work Hours Calculator
              </h1>
            </div>
            <h2 className="text-blue-100 text-center mt-2">
              Calculate your work hours and earnings
            </h2>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6">
            {/* Grid layout for responsiveness */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6">
              {/* Input Fields */}
              <div className="space-y-4">
                {[
                  {
                    label: "Start Time",
                    icon: <FiClock className="text-blue-400" />,
                    type: "time",
                    value: startTime,
                    onChange: (e) => setStartTime(e.target.value),
                    id: "start-time-input",
                  },
                  {
                    label: "End Time",
                    icon: <FiClock className="text-blue-400" />,
                    type: "time",
                    value: endTime,
                    onChange: (e) => setEndTime(e.target.value),
                    id: "end-time-input",
                  },
                  {
                    label: "Break Duration (minutes)",
                    icon: <FiCoffee className="text-amber-400" />,
                    type: "number",
                    value: breakMinutes,
                    onChange: (e) =>
                      setBreakMinutes(
                        Math.max(0, parseInt(e.target.value) || 0)
                      ),
                  },
                  {
                    label: "Hourly Rate ($)",
                    icon: <FiDollarSign className="text-emerald-400" />,
                    type: "number",
                    step: "0.01",
                    value: hourlyRate,
                    onChange: (e) =>
                      setHourlyRate(
                        Math.max(0, parseFloat(e.target.value) || 0)
                      ),
                  },
                ].map((field, index) => (
                  <div key={index} className="space-y-2">
                    <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                      {field.icon}
                      {field.label}
                    </label>
                    <div className="relative">
                      <input
                        id={field.id}
                        aria-label={field.id}
                        type={field.type}
                        value={field.value}
                        step={field.step || undefined}
                        min="0"
                        onChange={field.onChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
                          [&::-webkit-calendar-picker-indicator]:hidden
                          appearance-none transition-all duration-200 hover:bg-white/15"
                      />

                      {/* Only for time inputs show this icon */}
                      {(field.id === "start-time-input" ||
                        field.id === "end-time-input") && (
                        <label
                          htmlFor={field.id}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(field.id)?.showPicker();
                          }}
                        >
                          <MdOutlineAccessTime className="text-blue-400 h-5 w-5 hover:text-blue-300 transition-colors" />
                        </label>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Results */}
              <div>
                {results && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-4 border border-white/10 mt-2"
                  >
                    <h3 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                      <FiCalendar className="text-blue-300" />
                      Calculation Results
                    </h3>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-white/80">Total Hours:</span>
                        <span className="font-medium text-white">
                          {results.totalHours} hrs
                        </span>
                      </div>

                      {results.breakAdjusted && (
                        <div className="flex justify-between">
                          <span className="text-white/80">Break Deducted:</span>
                          <span className="text-white/80">
                            {breakMinutes} mins
                          </span>
                        </div>
                      )}

                      <div className="flex justify-between">
                        <span className="text-white/80">Total Earnings:</span>
                        <span className="font-medium text-emerald-300">
                          {formatCurrency(results.totalEarnings)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Guide */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10 mt-6">
                  <h3 className="font-medium text-white/90 mb-2">How to Use</h3>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• Enter your start and end work times</li>
                    <li>• Add any unpaid break time</li>
                    <li>• Input your hourly rate for earnings calculation</li>
                    <li>• Results update automatically</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
