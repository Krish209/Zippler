"use client";

import Link from "next/link";
import {
  FiClock,
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
    { name: "Home", href: "/", icon: <FiHome className="w-4 h-4" /> },
    { name: "About", href: "/about", icon: <FiInfo className="w-4 h-4" /> },
    { name: "Contact", href: "/contact", icon: <FiMail className="w-4 h-4" /> },
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

  const renderLinkList = (title, links) => (
    <div className="space-y-3">
      <p className="text-xs sm:text-sm font-semibold text-blue-300 uppercase tracking-wider">
        {title}
      </p>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.name} className="relative group">
            <Link
              href={link.href}
              className="inline-flex items-center space-x-2 text-sm sm:text-base text-gray-300 hover:text-blue-300 transition-colors"
            >
              <span className="text-gray-400 group-hover:text-blue-300 transition-colors">
                {link.icon}
              </span>
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-slate-900 border-t border-white/10 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 text-sm sm:text-base">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link
              href="/"
              className="flex items-center space-x-2 group text-lg sm:text-xl font-bold w-fit"
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
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xs">
              TimeTools offers a collection of precise, easy-to-use calculators
              for managing time, dates, events, and schedules.
            </p>
          </div>

          {/* Link Sections */}
          {renderLinkList("Navigation", mainLinks)}
          {renderLinkList("Time Tools", timeCalculators)}
          {renderLinkList("Date Tools", dateCalculators)}
          {renderLinkList("Special Calculators", specialCalculators)}
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs sm:text-sm">
          <p className="text-gray-400">
            &copy; {currentYear} TimeTools. All rights reserved.
          </p>
          <p className="mt-2 flex items-center justify-center text-gray-400">
            Made with <FiHeart className="mx-1.5 text-red-400" /> for time
            enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
}
