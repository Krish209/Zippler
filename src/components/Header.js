"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { FiChevronDown, FiMenu, FiClock } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineAccessTime, MdOutlineCalculate } from "react-icons/md";
import logo from "../../public/Z3.png";
import Image from "next/image";
import ActiveLink from "./Activelink";

export const links = [
  {
    name: "Home",
    link: "/",
    icon: <FiClock className="w-4 h-4 mr-2 opacity-80" />
  },
  {
    name: "Calculators",
    link: "/calculators",
    icon: <MdOutlineCalculate className="w-4 h-4 mr-2 opacity-80" />,
    submenu: true,
    sublinks: [
      { 
        name: "Time Duration", 
        link: "/calculators/time",
        icon: <MdOutlineAccessTime className="w-4 h-4 mr-2 opacity-70" />
      },
      { 
        name: "Time Zone", 
        link: "/calculators/timezone",
        icon: <MdOutlineAccessTime className="w-4 h-4 mr-2 opacity-70" />
      },
    ],
  },
  {
    name: "About",
    link: "/about",
    icon: <FiClock className="w-4 h-4 mr-2 opacity-80" />
  },
];

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const menuRef = useRef(null);
  const timeoutRef = useRef(null);

  const pathname = usePathname();

  const toggleMobileMenu = useCallback(() => {
    setMobileMenu((prev) => !prev);
  }, []);

  useEffect(() => {
    if (mobileMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [mobileMenu]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownHover = useCallback((index) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(index);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  }, []);

  const handleDropdownToggle = useCallback((index) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  }, []);

  return (
    <header className="bg-slate-900/90 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="p-1.5 bg-blue-600/20 rounded-lg border border-blue-400/30 group-hover:border-blue-300 transition-all duration-200">
              <Image 
                src={logo} 
                alt="TimeTools Logo" 
                width={28} 
                height={28} 
                className="filter brightness-125 group-hover:scale-105 transition-transform"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent hidden sm:inline-block">
              TimeTools
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex h-full">
            {links.map((item, index) => (
              <div
                key={index}
                className="relative h-full flex items-center"
                onMouseEnter={() => handleDropdownHover(index)}
                onMouseLeave={handleDropdownLeave}
              >
                <ActiveLink
                  href={item.link || "#"}
                  className="flex items-center px-4 py-2 h-full text-sm font-medium text-gray-300 hover:text-white transition-colors group relative"
                  activeClass="text-white"
                >
                  {item.icon}
                  {item.name}
                  {item.submenu && (
                    <FiChevronDown
                      className={`ml-1 transform transition-transform ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 ${item.link === pathname ? 'scale-x-100' : 'scale-x-0'}`}></span>
                </ActiveLink>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div
                    className={`absolute top-full left-0 mt-0 py-2 w-56 bg-slate-800/95 backdrop-blur-lg border border-white/10 rounded-b-lg shadow-xl transition-all z-50
                      ${
                        activeDropdown === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-1 pointer-events-none"
                      }`}
                  >
                    {item.sublinks.map((sub, i) => (
                      <ActiveLink
                        key={i}
                        href={sub.link}
                        className="flex items-center px-4 py-2.5 text-sm text-gray-300 hover:bg-blue-600/30 hover:text-white transition-colors"
                        activeClass="bg-blue-600/30 text-white"
                      >
                        {sub.icon}
                        {sub.name}
                      </ActiveLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-all group"
            aria-label={mobileMenu ? "Close menu" : "Open menu"}
          >
            {mobileMenu ? (
              <AiOutlineClose className="w-5 h-5 text-blue-300 group-hover:rotate-90 transition-transform" />
            ) : (
              <FiMenu className="w-5 h-5 text-blue-300 group-hover:scale-110 transition-transform" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={menuRef}
        className={`md:hidden fixed inset-y-0 right-0 w-full max-w-xs bg-slate-900/95 backdrop-blur-lg border-l border-white/10 shadow-2xl z-50 transform transition-transform duration-300 ease-out
          ${mobileMenu ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-white/10 h-16">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-blue-600/20 rounded-lg border border-blue-400/30">
              <Image src={logo} alt="TimeTools Logo" width={24} height={24} />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
              TimeTools
            </span>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <AiOutlineClose className="w-5 h-5 text-blue-300" />
          </button>
        </div>

        <nav className="p-4 overflow-y-auto h-[calc(100%-4rem)]">
          {links.map((item, index) => (
            <div key={index} className="mb-1">
              {!item.submenu ? (
                <ActiveLink
                  href={item.link}
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center px-4 py-3 rounded-lg hover:bg-white/5 hover:text-blue-300 transition-colors"
                  activeClass="bg-white/10 text-blue-300"
                >
                  {item.icon}
                  {item.name}
                </ActiveLink>
              ) : (
                <>
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                      activeDropdown === index
                        ? "bg-white/10 text-blue-300"
                        : "hover:bg-white/5 hover:text-blue-300"
                    }`}
                  >
                    <div className="flex items-center">
                      {item.icon}
                      {item.name}
                    </div>
                    <FiChevronDown
                      className={`transform transition-transform ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === index && (
                    <div className="ml-8 mt-1 space-y-1">
                      {item.sublinks.map((sub, i) => (
                        <ActiveLink
                          key={i}
                          href={sub.link}
                          onClick={() => setMobileMenu(false)}
                          className="flex items-center px-4 py-2.5 text-sm rounded-lg hover:bg-blue-600/30 hover:text-white transition-colors"
                          activeClass="bg-blue-600/30 text-white"
                        >
                          {sub.icon}
                          {sub.name}
                        </ActiveLink>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;