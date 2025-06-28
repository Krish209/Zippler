"use client";

import Link from "next/link";
import {
  FiClock,
  FiGithub,
  FiCalendar,
  FiHome,
  FiInfo,
  FiMail,
  FiHeart,
} from "react-icons/fi";
import {
  MdOutlinePets,
  MdOutlineCake,
  MdOutlineEvent,
  MdOutlineBedtime,
  MdOutlineAccessTime,
} from "react-icons/md";
import Image from "next/image";
import logo from "../../public/Z3.png";
import { BsStopwatch } from "react-icons/bs";
import { TbCalendarWeek } from "react-icons/tb";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const mainLinks = [
    {
      name: "Home",
      href: "/",
      icon: <FiHome className="w-4 h-4" />,
    },
    {
      name: "About",
      href: "/about",
      icon: <FiInfo className="w-4 h-4" />,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: <FiMail className="w-4 h-4" />,
    },
  ];

  const timeCalculators = [
    {
      name: "Time Calculator",
      href: "/time-calculator",
      icon: <FiClock className="w-4 h-4" />,
    },
    {
      name: "Stopwatch",
      href: "/stopwatch",
      icon: <BsStopwatch className="w-4 h-4" />,
    },
    {
      name: "Sleep Calculator",
      href: "/sleep-calculator",
      icon: <MdOutlineBedtime className="w-4 h-4" />,
    },
  ];

  const dateCalculators = [
    {
      name: "Date Calculator",
      href: "/date-calculator",
      icon: <FiCalendar className="w-4 h-4" />,
    },
    {
      name: "Weekday Finder",
      href: "/weekday-finder",
      icon: <TbCalendarWeek className="w-4 h-4" />,
    },
    {
      name: "Leap Year Checker",
      href: "/leap-year-checker",
      icon: <MdOutlineEvent className="w-4 h-4" />,
    },
  ];

  const specialCalculators = [
    {
      name: "Age Calculator",
      href: "/age-calculator",
      icon: <MdOutlineAccessTime className="w-4 h-4" />,
    },
    {
      name: "Pet Age Calculator",
      href: "/pet-age-calculator",
      icon: <MdOutlinePets className="w-4 h-4" />,
    },
    {
      name: "Anniversary Countdown",
      href: "/anniversary-countdown",
      icon: <MdOutlineEvent className="w-4 h-4" />,
    },
    {
      name: "Birthday Countdown",
      href: "/birthday-countdown",
      icon: <MdOutlineCake className="w-4 h-4" />,
    },
  ];

  return (
    <footer className="bg-slate-900 border-t border-white/10 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Brand Info - Full width on mobile, first column on desktop */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link 
              href="/" 
              className="flex items-center space-x-2 group text-xl font-bold w-fit"
            >
              <div className="p-1.5 bg-blue-600/20 rounded-lg border border-blue-400/30 group-hover:border-blue-300 transition-all duration-200">
                <Image
                  src={logo}
                  alt="TimeTools Logo"
                  width={28}
                  height={28}
                  className="filter brightness-125 group-hover:scale-105 transition-transform"
                  priority
                />
              </div>
              <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                TimeTools
              </span>
            </Link>
            <p className="text-sm text-gray-400">
              Precise time and date calculation tools for your everyday needs.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
              Navigation
            </p>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center group py-1.5 -mx-2 px-2 rounded transition-colors hover:bg-white/5 w-full"
                  >
                    <span className="text-gray-400 group-hover:text-blue-300 mr-2 transition-colors">
                      {link.icon}
                    </span>
                    <span className="text-gray-300 group-hover:text-blue-300 transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Time Tools */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
              Time Tools
            </p>
            <ul className="space-y-3">
              {timeCalculators.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center group py-1.5 -mx-2 px-2 rounded transition-colors hover:bg-white/5 w-full"
                  >
                    <span className="text-gray-400 group-hover:text-blue-300 mr-2 transition-colors">
                      {link.icon}
                    </span>
                    <span className="text-gray-300 group-hover:text-blue-300 transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Date Tools - Moves to second row on small screens */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
              Date Tools
            </p>
            <ul className="space-y-3">
              {dateCalculators.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center group py-1.5 -mx-2 px-2 rounded transition-colors hover:bg-white/5 w-full"
                  >
                    <span className="text-gray-400 group-hover:text-blue-300 mr-2 transition-colors">
                      {link.icon}
                    </span>
                    <span className="text-gray-300 group-hover:text-blue-300 transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Special Calculators - Full width on small screens */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
              Special Calculators
            </p>
            <ul className="space-y-3">
              {specialCalculators.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center group py-1.5 -mx-2 px-2 rounded transition-colors hover:bg-white/5 w-full"
                  >
                    <span className="text-gray-400 group-hover:text-blue-300 mr-2 transition-colors">
                      {link.icon}
                    </span>
                    <span className="text-gray-300 group-hover:text-blue-300 transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright - Full width */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} TimeTools. All rights reserved.
          </p>
          <p className="mt-2 flex items-center justify-center text-sm text-gray-600">
            Made with <FiHeart className="mx-1.5 text-red-400" /> for time enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
}