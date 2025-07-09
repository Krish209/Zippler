// app/calc/AllCalculator.jsx

"use client";

import Link from "next/link";
import { FaStopwatch } from "react-icons/fa";
import { FiClock, FiCalendar, FiSun, FiStopwatch, FiMoon } from "react-icons/fi";

import { MdOutlineBedtime, MdSchedule } from "react-icons/md";

const tools = [
  {
    name: "Age Calculator",
    description: "Calculate your age from birthdate accurately.",
    href: "/age-calculator",
    icon: <FiCalendar className="w-6 h-6 text-emerald-300" />,
  },
  {
    name: "Pet Age Calculator",
    description: "Convert your pet’s age to human years.",
    href: "/pet-age-calculator",
    icon: <FiClock className="w-6 h-6 text-teal-300" />,
  },
  {
    name: "Anniversary Countdown",
    description: "Countdown to your special date or anniversary.",
    href: "/anniversary-countdown",
    icon: <FiCalendar className="w-6 h-6 text-red-300" />,
  },
  {
    name: "Birthday Countdown",
    description: "Track how many days until your birthday.",
    href: "/birthday-countdown",
    icon: <FiCalendar className="w-6 h-6 text-pink-400" />,
  },
  {
    name: "Date Calculator",
    description: "Calculate the number of days between two dates.",
    href: "/date-calculator",
    icon: <FiCalendar className="w-6 h-6 text-yellow-300" />,
  },
  {
    name: "Leap Year Checker",
    description: "Check if a year is a leap year.",
    href: "/leap-year-checker",
    icon: <FiCalendar className="w-6 h-6 text-sky-300" />,
  },
  {
    name: "Night Calculator",
    description: "Calculate night duration between two times.",
    href: "/night-calculator",
    icon: <MdOutlineBedtime className="w-6 h-6 text-blue-300" />,
  },
  {
    name: "Nap Calculator",
    description: "Best nap lengths based on your schedule.",
    href: "/nap-calculator",
    icon: <MdOutlineBedtime className="w-6 h-6 text-lime-300" />,
  },
  {
    name: "Sleep Time Calculator",
    description:
      "Find optimal bedtimes or wake-up times based on sleep cycles.",
    href: "/sleep-calculator",
    icon: <MdOutlineBedtime className="w-6 h-6 text-indigo-300" />,
  },
  {
    name: "Sleep Length Checker",
    description: "Determine if your sleep duration is healthy.",
    href: "/sleep-length-checker",
    icon: <MdOutlineBedtime className="w-6 h-6 text-purple-200" />,
  },
  {
    name: "Stopwatch",
    description:
      "A clean, responsive stopwatch with pause/reset functionality.",
    href: "/stopwatch",
    icon: <FaStopwatch className="w-6 h-6 text-pink-300" />,
  },
  {
    name: "Speed Challenge",
    description: "Test how fast you can click or react!",
    href: "/speed-challenge",
    icon: <FaStopwatch className="w-6 h-6 text-red-400" />,
  },
  {
    name: "Time Calculator",
    description: "Add or subtract hours and minutes from a time.",
    href: "/time-calculator",
    icon: <MdSchedule className="w-6 h-6 text-purple-300" />,
  },
  {
    name: "Birthday Day Finder",
    description: "Find the day of the week your birthday falls on.",
    href: "/birthday-day-finder",
    icon: <FiCalendar className="w-6 h-6 text-fuchsia-300" />,
  },
  {
    name: "Weekday Finder",
    description: "Find the day of the week for any date.",
    href: "/weekday-finder",
    icon: <FiSun className="w-6 h-6 text-green-300" />,
  },
  {
    name: "Sun Calculator",
    description: "Find sunrise and sunset times for any date and location.",
    href: "/sun-calculator",
    icon: <FiSun className="w-6 h-6 text-yellow-400" />,
  },
  {
    name: "Moon Calculator",
    description: "Track moon phases and moonrise/moonset times.",
    href: "/moon-calculator",
    icon: <FiMoon className="w-6 h-6 text-indigo-400" />,
  },
];

export default function AllCalculator() {
  return (
    <main className="min-h-screen py-20 bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-6 flex items-center justify-center">
      <div className="w-full max-w-6xl space-y-12">
        {/* Animated Header */}
        <div className="text-center space-y-3 relative">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-400 animate-gradient bg-[length:200%_auto] bg-no-repeat">
            Time & Date Toolkit
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
            Intuitive tools to help you manage your time and dates efficiently —
            fast, focused, and elegant.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="relative backdrop-blur-md rounded-3xl border border-white/10 bg-white/5 shadow-lg p-6 sm:p-10 transition-all">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {tools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className="group relative p-5 bg-white/5 border border-white/10 rounded-xl shadow-md transition-all hover:shadow-indigo-400/20 hover:scale-[1.025] hover:border-indigo-400/20 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white/10 rounded-full">
                    {tool.icon}
                  </div>
                  <h2 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition">
                    {tool.name}
                  </h2>
                </div>
                <p className="text-sm text-white/60 leading-snug">
                  {tool.description}
                </p>

                {/* Shimmer border glow */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-indigo-400/30 transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
