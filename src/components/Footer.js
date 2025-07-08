// components/Footer.js
'use client';

import Link from 'next/link';
import { FiClock, FiGithub, FiTwitter, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';
import logo from "../../public/Z3.png";
import Image from 'next/image';

const Footer = () => {
  const footerLinks = [
    {
      title: "Time Tools",
      links: [
        { name: "Time Calculator", href: "/time-calculator" },
        { name: "Stopwatch", href: "/stopwatch" },
        { name: "Sleep Calculator", href: "/sleep-calculator" },
      ],
    },
    {
      title: "Date Tools",
      links: [
        { name: "Date Calculator", href: "/date-calculator" },
        { name: "Weekday Finder", href: "/weekday-finder" },
        { name: "Leap Year Checker", href: "/leap-year-checker" },
      ],
    },
    {
      title: "Special Calculators",
      links: [
        { name: "Age Calculator", href: "/age-calculator" },
        { name: "Pet Age Calculator", href: "/pet-age-calculator" },
        { name: "Anniversary Countdown", href: "/anniversary-countdown" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  const socialLinks = [
    { name: "GitHub", icon: <FiGithub />, href: "https://github.com" },
    { name: "Twitter", icon: <FiTwitter />, href: "https://twitter.com" },
    { name: "LinkedIn", icon: <FiLinkedin />, href: "https://linkedin.com" },
    { name: "Email", icon: <FiMail />, href: "mailto:contact@timetools.com" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-indigo-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
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
            <p className="text-white/70">
              Precision time calculation tools to help you master your schedule and productivity.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="text-white/60 hover:text-indigo-400 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((column, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-indigo-300 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 text-center border-t border-white/10 justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Zippler. All rights reserved.
          </p>
        </div>

        {/* Made with love */}
        <div className="mt-4 text-center text-white/50 text-sm flex items-center justify-center gap-1">
          Made with <FiHeart className="text-rose-500" /> for time
            enthusiasts
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;