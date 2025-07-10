// app/page.js
"use client";

import Link from "next/link";
import {
  FiClock,
  FiCalendar,
  FiWatch,
  FiSunrise,
  FiSunset,
  FiPlus,
  FiStar,
  FiZap,
  FiTrendingUp,
  FiLayers,
} from "react-icons/fi";
import {
  MdOutlineAccessTime,
  MdOutlineBedtime,
  MdTimer,
  MdDateRange,
  MdEventAvailable,
} from "react-icons/md";
import {
  FaStopwatch,
  FaRegClock,
  FaBusinessTime,
  FaMoon,
  FaTachometerAlt,
} from "react-icons/fa";
import { IoTimeOutline, IoSpeedometerOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const tools = [
  {
    name: "Sleep Time Calculator",
    description:
      "Calculate optimal bedtimes or wake-up times based on sleep cycles",
    icon: <FaMoon className="h-6 w-6 text-indigo-400" />,
    href: "/sleep-calculator",
    color: "from-indigo-600 to-purple-600",
    featured: true,
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
    description:
      "Calculate the difference between two dates in days, weeks, months or years",
    icon: <FiCalendar className="h-6 w-6 text-emerald-400" />,
    href: "/date-calculator",
    color: "from-emerald-600 to-teal-600",
  },
  {
    name: "Weekday Finder",
    description: "Find out what day of the week any date falls on",
    icon: <FiWatch className="h-6 w-6 text-amber-400" />,
    href: "/weekday-finder",
    color: "from-amber-600 to-orange-600",
  },
  {
    name: "Stopwatch",
    description: "Measure elapsed time with precision and lap timing",
    icon: <FaStopwatch className="h-6 w-6 text-red-400" />,
    href: "/stopwatch",
    color: "from-red-600 to-pink-600",
    featured: true,
  },

  {
    name: "Leap Year Checker",
    description: "Check if a year is a leap year",
    icon: <MdEventAvailable className="h-6 w-6 text-purple-400" />,
    href: "/leap-year-checker",
    color: "from-purple-600 to-indigo-600",
  },
  {
    name: "Sleep Length Checker",
    description: "Calculate your total sleep length",
    icon: <FaMoon className="h-6 w-6 text-teal-400" />,
    href: "/sleep-length-checker",
    color: "from-teal-600 to-cyan-600",
  },
  {
    name: "Speed Challenge",
    description: "Test and improve your reaction speed",
    icon: <FaTachometerAlt className="h-6 w-6 text-pink-400" />,
    href: "/speed-challenge",
    color: "from-pink-600 to-red-600",
  },
  // {
  //   name: "Countdown Timer",
  //   description: "Set customizable countdown timers for any duration",
  //   icon: <MdTimer className="h-6 w-6 text-purple-400" />,
  //   href: "/timer",
  //   color: "from-purple-600 to-fuchsia-600"
  // },
  // {
  //   name: "Time Zone Converter",
  //   description: "Convert between different time zones instantly",
  //   icon: <FaBusinessTime className="h-6 w-6 text-sky-400" />,
  //   href: "/timezone-converter",
  //   color: "from-sky-600 to-blue-600"
  // },
  {
    name: "Age Calculator",
    description: "Calculate exact age in years, months and days",
    icon: <MdDateRange className="h-6 w-6 text-green-400" />,
    href: "/age-calculator",
    color: "from-green-600 to-emerald-600",
  },
  // {
  //   name: "Work Hours Calculator",
  //   description: "Calculate total work hours between two times",
  //   icon: <FaRegClock className="h-6 w-6 text-rose-400" />,
  //   href: "/work-hours",
  //   color: "from-rose-600 to-pink-600"
  // },
];

const features = [
  {
    name: "Precision Calculations",
    description: "Algorithms designed for 100% accurate time computations",
    icon: <FiZap className="h-5 w-5 text-indigo-500" />,
    stat: "100% Accurate",
  },
  {
    name: "Beautiful Interface",
    description: "Modern UI with intuitive controls and animations",
    icon: <FiStar className="h-5 w-5 text-indigo-500" />,
    stat: "10+ Themes",
  },
  {
    name: "Ad-Free Experience",
    description: "No distractions, just pure functionality",
    icon: <FiPlus className="h-5 w-5 text-indigo-500" />,
    stat: "0 Ads",
  },
  {
    name: "Growing Collection",
    description: "New tools added regularly based on user feedback",
    icon: <FiTrendingUp className="h-5 w-5 text-indigo-500" />,
    stat: "15+ Tools",
  },
];

const testimonials = [
  {
    name: "Sarah K.",
    role: "Product Manager",
    quote:
      "This app has transformed how I plan my sleep. I wake up refreshed every morning thanks to the sleep calculator!",
    avatar: "/avatars/1.jpg",
  },
  {
    name: "Michael T.",
    role: "Freelancer",
    quote:
      "The time zone converter saves me hours each week coordinating with international clients.",
    avatar: "/avatars/2.jpg",
  },
  {
    name: "Priya M.",
    role: "Student",
    quote:
      "Perfect for tracking study sessions and breaks with the timer and stopwatch features.",
    avatar: "/avatars/3.jpg",
  },
];

function AnimatedSection({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 overflow-x-hidden">
      <>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Zippler",
            url: "https://zippler-pi.vercel.app/",
            alternateName: "Zippler Pro",
          })}
        </script>
      </>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-full mx-auto h-[800px] bg-indigo-500/10 rounded-full filter blur-[100px]"></div>
          <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <AnimatedSection>
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6"
              >
                <FiZap className="h-4 w-4 text-indigo-400" />
                <span className="text-sm font-medium text-indigo-100">
                  Version 2.0 Released
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Master Your Time with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Precision Tools
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
                The ultimate collection of time calculators, converters and
                utilities for productivity
              </p>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/sleep-calculator"
                    className="px-6 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30 flex items-center gap-3"
                  >
                    <FaMoon className="h-5 w-5" />
                    Try Featured Tools
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="#tools"
                    className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-white/10 flex items-center gap-3"
                  >
                    <FiLayers className="h-5 w-5" />
                    Explore All Tools
                  </Link>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="py-12 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="text-sm font-semibold text-indigo-300 uppercase tracking-wider">
                Trusted by teams at
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
              {["TechCrunch", "Forbes", "The Verge", "Wired"].map((company) => (
                <motion.div
                  key={company}
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-bold text-white/50 hover:text-white/80 transition-colors flex justify-center"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zippler Pro?
              </h2>
              <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
                Designed for accuracy and ease of use with powerful features
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
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
                  <p className="text-white/70 mb-4">{feature.description}</p>
                  <p className="text-indigo-300 font-medium">{feature.stat}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-20 bg-gradient-to-br from-indigo-900/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Tools
              </h2>
              <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
                Our most popular time utilities loved by thousands
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {tools
                .filter((tool) => tool.featured)
                .map((tool, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={tool.href}
                      className={`group h-full bg-gradient-to-br ${tool.color} rounded-xl p-8 border border-white/10 hover:shadow-xl transition-all duration-300 flex flex-col`}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                          {tool.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {tool.name}
                        </h3>
                      </div>
                      <p className="text-white/80 mb-8 flex-1">
                        {tool.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                          Try it now →
                        </span>
                        <div className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white">
                          Popular
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* All Tools Section */}
      <section id="tools" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                All time Tools
              </h2>
              <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
                Comprehensive collection of time-related calculators and
                utilities
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={tool.href}
                    className={`group h-full bg-gradient-to-br ${tool.color} rounded-xl p-6 border border-white/10 hover:shadow-lg transition-all duration-300 flex flex-col`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                        {tool.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {tool.name}
                      </h3>
                    </div>
                    <p className="text-white/80 mb-6 flex-1">
                      {tool.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white/60 group-hover:text-white/80 transition-colors">
                        Open tool →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Users Say
              </h2>
              <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
                Trusted by thousands of users worldwide
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-400/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-indigo-400/20 flex items-center justify-center text-white">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-indigo-300">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-white/80 italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="mt-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className="h-4 w-4 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full filter blur-[80px]"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-400/10 rounded-full filter blur-[80px]"></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to take control of your time?
                </h3>
                <p className="text-indigo-100 max-w-2xl mx-auto mb-8">
                  Join thousands of users who are optimizing their schedules
                  with our tools.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/sleep-calculator"
                    className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg hover:bg-white/90 transition-all duration-200 hover:shadow-xl"
                  >
                    <FiClock className="h-5 w-5 mr-2" />
                    Start Using Tools Now
                  </Link>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
