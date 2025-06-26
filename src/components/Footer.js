"use client";

import Link from "next/link";
import { 
  FiClock, 
  FiGithub, 
  FiTwitter, 
  FiLinkedin,
  FiMail,
  FiCode
} from "react-icons/fi";
import { MdOutlineAccessTime, MdOutlineCalculate } from "react-icons/md";
import logo from "../../public/Z3.png";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    {
      name: "Home",
      href: "/",
      icon: <FiClock className="w-4 h-4 mr-2 opacity-80" />
    },
    {
      name: "Calculators",
      href: "/calculators",
      icon: <MdOutlineCalculate className="w-4 h-4 mr-2 opacity-80" />
    },
    {
      name: "About",
      href: "/about",
      icon: <FiClock className="w-4 h-4 mr-2 opacity-80" />
    },
    {
      name: "Contact",
      href: "/contact",
      icon: <FiMail className="w-4 h-4 mr-2 opacity-80" />
    }
  ];

  const calculatorLinks = [
    {
      name: "Time Duration",
      href: "/calculators/time",
      icon: <MdOutlineAccessTime className="w-4 h-4 mr-2 opacity-70" />
    },
    {
      name: "Time Zone",
      href: "/calculators/timezone",
      icon: <MdOutlineAccessTime className="w-4 h-4 mr-2 opacity-70" />
    },
    {
      name: "Date Difference", 
      href: "/calculators/date",
      icon: <FiCode className="w-4 h-4 mr-2 opacity-70" />
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: <FiGithub className="h-5 w-5" />
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: <FiTwitter className="h-5 w-5" />
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: <FiLinkedin className="h-5 w-5" />
    }
  ];

  return (
    <footer className="bg-slate-900/80 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="p-1.5 bg-blue-600/20 rounded-lg border border-blue-400/30 group-hover:border-blue-300 transition-colors">
                <Image 
                  src={logo} 
                  alt="Logo" 
                  width={32} 
                  height={32} 
                  className="filter brightness-125"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                TimeTools
              </span>
            </Link>
            <p className="text-sm text-gray-400">
              Precision time calculation tools for developers and professionals.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-300 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-blue-300 tracking-wider uppercase mb-4">
                Navigation
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center text-sm text-gray-400 hover:text-blue-300 transition-colors"
                    >
                      {link.icon}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-blue-300 tracking-wider uppercase mb-4">
                Calculators
              </h3>
              <ul className="space-y-3">
                {calculatorLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center text-sm text-gray-400 hover:text-blue-300 transition-colors"
                    >
                      {link.icon}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional Info */}
          <div>
            <h3 className="text-sm font-semibold text-blue-300 tracking-wider uppercase mb-4">
              Information
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="flex items-center text-sm text-gray-400 hover:text-blue-300 transition-colors"
                >
                  <FiCode className="w-4 h-4 mr-2 opacity-70" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="flex items-center text-sm text-gray-400 hover:text-blue-300 transition-colors"
                >
                  <FiCode className="w-4 h-4 mr-2 opacity-70" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="flex items-center text-sm text-gray-400 hover:text-blue-300 transition-colors"
                >
                  <FiCode className="w-4 h-4 mr-2 opacity-70" />
                  API Documentation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} TimeTools. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-xs text-gray-500 mr-2">Crafted with</span>
            <FiCode className="text-gray-400 w-4 h-4" />
          </div>
        </div>
      </div>
    </footer>
  );
}