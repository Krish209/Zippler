// app/dog-age-calculator/page.js
"use client";

import { useState } from "react";
import { FiInfo } from "react-icons/fi";

// Breed size classifications with conversion factors
const BREED_SIZES = [
  {
    name: "Small (0-20 lbs)",
    factors: [
      [1, 15],
      [2, 24],
      [3, 28],
      [4, 32],
      [5, 36],
      [6, 40],
      [7, 44],
      [8, 48],
      [9, 52],
      [10, 56],
      [11, 60],
      [12, 64],
      [13, 68],
      [14, 72],
      [15, 76],
    ],
  },
  {
    name: "Medium (21-50 lbs)",
    factors: [
      [1, 15],
      [2, 24],
      [3, 28],
      [4, 32],
      [5, 36],
      [6, 42],
      [7, 47],
      [8, 51],
      [9, 56],
      [10, 60],
      [11, 65],
      [12, 69],
      [13, 74],
      [14, 78],
      [15, 83],
    ],
  },
  {
    name: "Large (51-90 lbs)",
    factors: [
      [1, 15],
      [2, 24],
      [3, 28],
      [4, 32],
      [5, 36],
      [6, 45],
      [7, 50],
      [8, 55],
      [9, 61],
      [10, 66],
      [11, 72],
      [12, 77],
      [13, 82],
      [14, 88],
      [15, 93],
    ],
  },
  {
    name: "Giant (90+ lbs)",
    factors: [
      [1, 12],
      [2, 22],
      [3, 31],
      [4, 38],
      [5, 45],
      [6, 49],
      [7, 56],
      [8, 64],
      [9, 71],
      [10, 79],
      [11, 86],
      [12, 93],
      [13, 100],
      [14, 107],
      [15, 114],
    ],
  },
];
// Helper for linear interpolation
const interpolate = (x, x0, y0, x1, y1) => {
  if (x1 === x0) return y0;
  return y0 + ((y1 - y0) * (x - x0)) / (x1 - x0);
};

// Convert dog years to human years
const convertDogToHuman = (age, sizeIndex) => {
  const { factors } = BREED_SIZES[sizeIndex];
  if (age <= 1) return Math.round(factors[0][1] * age);

  for (let i = 1; i < factors.length; i++) {
    const [x0, y0] = factors[i - 1];
    const [x1, y1] = factors[i];
    if (age <= x1) return Math.round(interpolate(age, x0, y0, x1, y1));
  }

  const [lastDogAge, lastHumanAge] = factors[factors.length - 1];
  return Math.round(lastHumanAge + (age - lastDogAge) * 5);
};

// Convert human years to dog years
const convertHumanToDog = (age, sizeIndex) => {
  const { factors } = BREED_SIZES[sizeIndex];
  if (age <= factors[0][1]) return (age / factors[0][1]).toFixed(1);

  for (let i = 1; i < factors.length; i++) {
    const [x0, y0] = factors[i - 1];
    const [x1, y1] = factors[i];
    if (age <= y1) return interpolate(age, y0, x0, y1, x1).toFixed(1);
  }

  const [lastDogAge, lastHumanAge] = factors[factors.length - 1];
  return (lastDogAge + (age - lastHumanAge) / 5).toFixed(1);
};

export default function DogAgeCalculator() {
  const [dogAge, setDogAge] = useState(2);
  const [humanAge, setHumanAge] = useState(24);
  const [breedSize, setBreedSize] = useState(0);
  const [conversionMode, setConversionMode] = useState("dogToHuman");

  const result =
    conversionMode === "dogToHuman"
      ? convertDogToHuman(dogAge, breedSize)
      : convertHumanToDog(humanAge, breedSize);

  const resetCalculator = () => {
    setDogAge(2);
    setHumanAge(24);
    setBreedSize(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 p-4 sm:p-6">
      <div className="pt-20 pb-10">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-6 text-white text-center">
            <h1 className="text-3xl font-bold">🐶 Dog Age Calculator</h1>
            <h2 className="text-indigo-100 mt-2">
              Accurate breed-size-adjusted conversions
            </h2>
          </div>

          {/* Body */}
          <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Controls */}
            <div className="space-y-6">
              <div className="flex justify-center gap-2">
                {/* Update the mode toggle buttons (replace the existing button group) */}
                <div
                  className="inline-flex rounded-md shadow-sm bg-white/5 p-1"
                  role="group"
                >
                  <button
                    onClick={() => setConversionMode("dogToHuman")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      conversionMode === "dogToHuman"
                        ? "bg-indigo-600 text-white shadow-md"
                        : "text-white/80 hover:bg-white/10 hover:text-white cursor-pointer"
                    }`}
                  >
                    Dog → Human
                  </button>
                  <button
                    onClick={() => setConversionMode("humanToDog")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      conversionMode === "humanToDog"
                        ? "bg-indigo-600 text-white shadow-md"
                        : "text-white/80 hover:bg-white/10 hover:text-white cursor-pointer"
                    }`}
                  >
                    Human → Dog
                  </button>
                </div>
              </div>

              {/* Age slider */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  {conversionMode === "dogToHuman"
                    ? "Dog's Age (Years)"
                    : "Human Age (Years)"}
                </label>
                <input
                  type="range"
                  min={conversionMode === "dogToHuman" ? 0.1 : 1}
                  max={conversionMode === "dogToHuman" ? 20 : 120}
                  step="0.1"
                  value={conversionMode === "dogToHuman" ? dogAge : humanAge}
                  onChange={(e) =>
                    conversionMode === "dogToHuman"
                      ? setDogAge(parseFloat(e.target.value))
                      : setHumanAge(parseInt(e.target.value))
                  }
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                  aria-valuemin={0.1}
                  aria-valuemax={120}
                />
                <div className="flex justify-between mt-2 text-white/70 text-sm">
                  <span>
                    {conversionMode === "dogToHuman"
                      ? `Puppy: ${dogAge.toFixed(1)}`
                      : `Child: ${humanAge}`}
                  </span>
                  <span className="font-medium text-white">
                    {conversionMode === "dogToHuman"
                      ? `${dogAge.toFixed(1)} dog years`
                      : `${humanAge} human years`}
                  </span>
                </div>
              </div>

              {/* Breed size selection */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Breed Size
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {BREED_SIZES.map((size, index) => (
                    <button
                      key={index}
                      onClick={() => setBreedSize(index)}
                      className={`py-2 px-3 rounded-lg text-sm transition ${
                        breedSize === index
                          ? "bg-indigo-600 text-white"
                          : "bg-white/5 text-white/80 hover:bg-white/10"
                      }`}
                      aria-pressed={breedSize === index}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results + Comparison */}
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl p-6 border border-indigo-400/30 space-y-4 sm:space-y-6">
              {/* Result */}
              <div>
                <h3 className="text-lg font-medium text-white mb-1">
                  {conversionMode === "dogToHuman"
                    ? `${dogAge} dog year${dogAge !== 1 ? "s" : ""} ≈`
                    : `${humanAge} human year${humanAge !== 1 ? "s" : ""} ≈`}
                </h3>
                <p className="text-4xl font-bold text-indigo-300 mb-2">
                  {result}{" "}
                  {conversionMode === "dogToHuman"
                    ? "human years"
                    : "dog years"}
                </p>
                <p className="text-sm text-white/80">
                  {conversionMode === "dogToHuman"
                    ? "human years"
                    : "dog years"}{" "}
                  for a{" "}
                  <span className="font-medium text-white">
                    {BREED_SIZES[breedSize].name.toLowerCase()}
                  </span>{" "}
                  breed
                </p>
              </div>

              {/* Breed Comparison Chart */}
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h3 className="font-medium text-white/90 mb-3 flex items-center gap-2">
                  <FiInfo className="text-indigo-400" /> Breed Size Comparison
                </h3>
                <div className="space-y-3">
                  {BREED_SIZES.map((size, index) => {
                    const value =
                      conversionMode === "dogToHuman"
                        ? convertDogToHuman(dogAge, index)
                        : convertHumanToDog(humanAge, index);
                    const barWidth =
                      conversionMode === "dogToHuman"
                        ? Math.min(100, value / 1.2)
                        : Math.min(100, value * 5);
                    return (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-24 text-sm text-white/70">
                          {size.name}
                        </div>
                        <div className="flex-1 bg-white/10 rounded-full h-4 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-indigo-400 to-purple-400 h-full"
                            style={{ width: `${barWidth}%` }}
                          />
                        </div>
                        <div className="w-16 text-right text-indigo-300 text-sm font-medium">
                          {value}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Scientific Notes */}
              <div className="text-xs text-white/50">
                <p>
                  Based on research from the American Veterinary Medical
                  Association (AVMA) and breed-specific aging studies. Small
                  dogs tend to live longer but age faster in early years, while
                  giant breeds age quickly throughout their lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
