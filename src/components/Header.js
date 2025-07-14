// components/Header.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FiClock,
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import { TbCalendarWeek } from "react-icons/tb";
import { MdOutlineCalculate } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/Z3.png";
import Image from "next/image";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    {
      name: "Time Tools",
      href: "/time-calculator",
      icon: <FiClock className="w-5 h-5" />,
      subLinks: [
        { name: "Time Calculator", href: "/time-calculator" },
        { name: "Nap Calculator", href: "/nap-calculator" },
        { name: "Stopwatch", href: "/stopwatch" },
        { name: "Sleep Calculator", href: "/sleep-calculator" },
      ],
    },
    {
      name: "Date Tools",
      href: "/date-calculator",
      icon: <TbCalendarWeek className="w-5 h-5" />,
      subLinks: [
        { name: "Date Calculator", href: "/date-calculator" },
        { name: "Weekday Finder", href: "/weekday-finder" },
        { name: "Leap Year Checker", href: "/leap-year-checker" },
      ],
    },
    {
      name: "Special Calculators",
      href: "/age-calculator",
      icon: <MdOutlineCalculate className="w-5 h-5" />,
      subLinks: [
        { name: "Age Calculator", href: "/age-calculator" },
        { name: "Pet Age Calculator", href: "/pet-age-calculator" },
        { name: "Anniversary Countdown", href: "/anniversary-countdown" },
        { name: "Birthday Countdown", href: "/birthday-countdown" },
        { name: "Fiscal Year Calculator", href: "/fiscal-year-calculator" },
        { name: "Golden Hour Calculator", href: "/golden-hour-calculator" },
        { name: "Work Hours Calculator", href: "/work-hours-calculator" },
      ],
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    // <header className="fixed w-full z-50 transition-all duration-300 bg-slate-900/95 backdrop-blur-md">
    <header
      className={`fixed w-full z-50 transition-all duration-100 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
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
                Zippler
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <div key={index} className="relative">
                {link.subLinks ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className={`flex cursor-pointer items-center px-4 py-2 rounded-lg transition-all ${
                        activeDropdown === index
                          ? "bg-white/10 text-white"
                          : "text-white/80 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span className="mr-1">{link.name}</span>
                      {activeDropdown === index ? (
                        <FiChevronUp className="w-4 h-4" />
                      ) : (
                        <FiChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-56 origin-top-left rounded-xl bg-slate-800/95 backdrop-blur-lg border border-white/10 shadow-lg overflow-hidden"
                        >
                          <div className="py-1">
                            {link.subLinks.map((subLink, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subLink.href}
                                className="block px-4 py-2 text-white/80 hover:bg-white/5 hover:text-white transition-colors"
                                onClick={closeAllMenus}
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="px-4 py-2 rounded-lg text-white/80 hover:bg-white/5 hover:text-white transition-all"
                    onClick={closeAllMenus}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white focus:outline-none"
              aria-label="Main menu"
            >
              {mobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden min-h-screen bg-slate-900/95 backdrop-blur-lg border-t border-white/10 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link, index) => (
                <div key={index}>
                  {link.subLinks ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-left ${
                          activeDropdown === index
                            ? "bg-white/10 text-white"
                            : "text-white/80 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span>{link.name}</span>
                        {activeDropdown === index ? (
                          <FiChevronUp className="w-4 h-4" />
                        ) : (
                          <FiChevronDown className="w-4 h-4" />
                        )}
                      </button>

                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 space-y-1"
                          >
                            {link.subLinks.map((subLink, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subLink.href}
                                className="block px-3 py-2 rounded-md text-white/80 hover:bg-white/5 hover:text-white"
                                onClick={closeAllMenus}
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block px-3 py-2 rounded-md text-white/80 hover:bg-white/5 hover:text-white"
                      onClick={closeAllMenus}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
