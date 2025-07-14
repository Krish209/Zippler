// app/fiscal-year-calculator/FiscalYearCalculator.jsx

"use client";
import { useState, useEffect } from "react";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FiClock } from "react-icons/fi";

export default function FiscalYearCalculator() {
  const [selectedDate, setSelectedDate] = useState("");
  const [stateFY, setStateFY] = useState("");
  const [biennium, setBiennium] = useState("");
  const [federalFY, setFederalFY] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!selectedDate) {
      setStateFY("");
      setFederalFY("");
      setBiennium("");
      setError("");
      return;
    }

    const date = new Date(selectedDate);
    if (isNaN(date.getTime())) {
      setError("Invalid date format");
      return;
    }

    setError("");

    const year = date.getFullYear();
    const month = date.getMonth(); // 0-indexed

    // State FY starts July 1 and ends June 30 → ends in next calendar year if after June
    const stateFiscalYear = month >= 6 ? year + 1 : year;

    // State biennium starts every odd year → find nearest odd year
    const bienniumStart = year % 2 === 0 ? year - 1 : year;
    const bienniumEnd = bienniumStart + 2;

    // Federal FY starts Oct 1 and ends Sep 30
    const federalFiscalYear = month >= 9 ? year + 1 : year;

    setStateFY(`FY ${stateFiscalYear}`);
    setBiennium(`${bienniumStart} - ${bienniumEnd.toString().slice(-2)}`);
    setFederalFY(`FY ${federalFiscalYear}`);
  }, [selectedDate]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Invalid date";
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 p-4 sm:p-6">
        <div className="pt-20 pb-10">
          <div className="w-full mx-auto max-w-lg bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-blue-500/20">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 sm:p-8 text-white">
              <h1 className="text-2xl sm:text-3xl font-bold text-center">
                Fiscal Year Calculator
              </h1>
              <h2 className="text-blue-100 text-center mt-2">
                State & Federal Fiscal Year and Biennium Info
              </h2>
            </div>

            {/* Main Content */}
            <div className="p-4 sm:p-6">
              {/* Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                  Select a Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="fiscal-date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full text-base bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400
                          [&::-webkit-calendar-picker-indicator]:hidden
                          appearance-none transition-all duration-200 hover:bg-white/15"
                  />
                  <label className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <MdOutlineCalendarToday
                      className="text-blue-400 h-5 w-5 cursor-pointer hover:text-blue-300"
                      onClick={() =>
                        document.getElementById("fiscal-date")?.showPicker()
                      }
                    />
                  </label>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="bg-red-500/10 border-l-4 border-red-500 px-4 py-2 rounded">
                  <p className="text-red-300 text-sm">{error}</p>
                </div>
              )}

              {/* Results */}
              {selectedDate && !error && (
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-4 border border-white/10 transition-all duration-300 hover:border-blue-400/30 space-y-4 mt-4">
                  <div className="flex justify-between">
                    <h3 className="text-sm font-medium text-white/80 mb-2">
                      Selected Date
                    </h3>
                    <p className="text-white text-lg font-semibold">
                      {formatDate(selectedDate)}
                    </p>
                  </div>

                  {/* Output Blocks */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 text-sm">
                        State Fiscal Year
                      </span>
                      <span className="text-blue-300 font-bold text-lg">
                        {stateFY}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 text-sm">
                        State Biennium
                      </span>
                      <span className="text-blue-300 font-bold text-lg">
                        {biennium}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 text-sm">
                        Federal Fiscal Year
                      </span>
                      <span className="text-blue-300 font-bold text-lg">
                        {federalFY}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-white/5 p-4 text-center text-xs text-white/50 border-t border-white/10">
              State FY (July–June), Federal FY (Oct–Sep), Biennium (odd year
              cycles)
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
