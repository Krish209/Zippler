// app/page.tsx
import Link from "next/link";
import {
  FiClock,
  FiCalendar,
  FiWatch,
  FiSunrise,
  FiSunset,
  FiPlus,
  FiStar,
} from "react-icons/fi";
import { MdOutlineAccessTime, MdOutlineBedtime, MdTimer } from "react-icons/md";
import { FaStopwatch, FaMoon } from "react-icons/fa";

export default function Home() {
  const tools = [
    {
      name: "Sleep Time Calculator",
      description:
        "Calculate optimal bedtimes or wake-up times based on sleep cycles",
      icon: <FaMoon className="h-6 w-6 text-indigo-400" />,
      href: "/sleep-calculator",
      color: "from-indigo-600 to-purple-600",
    },
    {
      name: "Time Calculator",
      description: "Add or subtract time from any given time",
      icon: <FiClock className="h-6 w-6 text-blue-400" />,
      href: "/time-calculator",
      color: "from-blue-600 to-cyan-600",
    },
    {
      name: "Date Difference",
      description: "Calculate the difference between two dates",
      icon: <FiCalendar className="h-6 w-6 text-emerald-400" />,
      href: "/date-calculator",
      color: "from-emerald-600 to-teal-600",
    },
    {
      name: "Weekday Finder",
      description: "Find out what day of the week a date falls on",
      icon: <FiWatch className="h-6 w-6 text-amber-400" />,
      href: "/weekday-finder",
      color: "from-amber-600 to-orange-600",
    },
    {
      name: "Stopwatch",
      description: "Measure elapsed time with precision",
      icon: <FaStopwatch className="h-6 w-6 text-red-400" />,
      href: "/stopwatch",
      color: "from-red-600 to-pink-600",
    },
    {
      name: "Timer",
      description: "Set countdown timers for any duration",
      icon: <MdTimer className="h-6 w-6 text-purple-400" />,
      href: "/timer",
      color: "from-purple-600 to-fuchsia-600",
    },
  ];

  const features = [
    {
      name: "Precision Time Tools",
      description:
        "All our calculators use precise algorithms to ensure accurate results",
      icon: <FiClock className="h-5 w-5 text-indigo-500" />,
    },
    {
      name: "Beautiful UI",
      description: "Enjoy a clean, modern interface that's easy to use",
      icon: <FiStar className="h-5 w-5 text-indigo-500" />,
    },
    {
      name: "No Ads",
      description: "We believe in an uninterrupted user experience",
      icon: <FiPlus className="h-5 w-5 text-indigo-500" />,
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-slate-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Time Tools <span className="text-indigo-400">Pro</span>
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
              Your all-in-one solution for time calculations, date differences,
              and more
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/sleep-calculator"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/20 flex items-center gap-2"
              >
                <FaMoon className="h-5 w-5" />
                Try Sleep Calculator
              </Link>
              <Link
                href="#tools"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-white/10 flex items-center gap-2"
              >
                <FiPlus className="h-5 w-5" />
                Explore All Tools
              </Link>
            </div>
          </div>

          {/* Background elements */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-full max-w-2xl h-96 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-400/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-500/10 rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-white">
                  {feature.name}
                </h3>
              </div>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div
        id="tools"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Our Time Tools
          </h2>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
            Choose from our collection of specialized time calculators and
            utilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <Link
              key={index}
              href={tool.href}
              className={`group bg-gradient-to-br ${tool.color} rounded-xl p-6 border border-white/10 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{tool.name}</h3>
              </div>
              <p className="text-white/80 mb-6">{tool.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-white/60 group-hover:text-white/80 transition-colors">
                  Try it now →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to master your time?
          </h2>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-8">
            Start using our tools today to better plan your schedule, sleep, and
            productivity.
          </p>
          <Link
            href="/sleep-calculator"
            className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-white/90 transition-all duration-200 hover:shadow-lg"
          >
            <FiSunrise className="h-5 w-5 mr-2" />
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
