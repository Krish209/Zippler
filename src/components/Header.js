"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiClock, FiMenu, FiX } from "react-icons/fi";
import { MdOutlineCalculate } from "react-icons/md";
import { TbCalendarWeek } from "react-icons/tb";
import Image from "next/image";
import logo from "../../public/Z3.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
  if (mobileMenuOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return () => {
    document.body.classList.remove("overflow-hidden");
  };
}, [mobileMenuOpen]);


  const navLinks = [
    {
      name: "Time Tools",
      href: "/time-calculator",
      icon: <FiClock className="w-5 h-5" />,
      subLinks: [
        { name: "Time Calculator", href: "/time-calculator" },
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
      ],
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-slate-900/90 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group text-lg sm:text-xl font-bold"
          >
            <div className="p-1.5 bg-blue-600/20 rounded-lg border border-blue-400/30 group-hover:border-blue-300 transition-all">
              <Image
                src={logo}
                alt="TimeTools Logo"
                width={28}
                height={28}
                className="filter brightness-125 group-hover:scale-105 transition-transform"
              />
            </div>
            <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
              TimeTools
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <div key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className={`flex items-center px-2 sm:px-3 py-1 sm:py-2 rounded-md text-sm sm:text-base font-medium ${
                      isActive
                        ? "text-blue-300 bg-blue-900/20"
                        : "text-gray-300 hover:text-blue-300 hover:bg-white/5"
                    }`}
                  >
                    {link.icon && (
                      <span className="mr-1 sm:mr-2">{link.icon}</span>
                    )}
                    {link.name}
                  </Link>

                  {link.subLinks && (
                    <div className="absolute left-0 mt-2 w-48 sm:w-56 origin-top-left rounded-md bg-slate-800 shadow-lg ring-1 ring-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className={`block px-3 py-2 text-sm sm:text-base ${
                            pathname === sub.href
                              ? "bg-blue-900/20 text-blue-300"
                              : "text-gray-300 hover:bg-white/5 hover:text-blue-300"
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden min-h-screen bg-slate-800/95 backdrop-blur-lg transition-opacity duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className={`flex items-center px-3 py-1 rounded-md text-base font-medium ${
                    pathname === link.href
                      ? "text-blue-300 bg-blue-900/20"
                      : "text-gray-300 hover:text-blue-300 hover:bg-white/5"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.icon && <span className="mr-3">{link.icon}</span>}
                  {link.name}
                </Link>
                {link.subLinks && (
                  <div className="pl-8 py-1 space-y-0">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className={`block px-3 py-1 rounded-md text-sm ${
                          pathname === sub.href
                            ? "bg-blue-900/20 text-blue-300"
                            : "text-gray-400 hover:bg-white/5 hover:text-blue-300"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
