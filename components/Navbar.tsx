"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface NavItem {
  id: string;
  label: string;
}

interface NavbarProps {
  activeSection: string;
}

const navItems: NavItem[] = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "services", label: "SERVICES" },
  { id: "work", label: "WORK" },
  { id: "contact", label: "CONTACT" },
];

export default function Navbar({ activeSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between px-6 py-4 md:px-16 lg:px-24 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/5 backdrop-blur-lg py-3 shadow-2xl" 
          : "bg-transparent"
      }`}
    >
      <div className="text-xl md:text-2xl font-bold tracking-wider text-white">Sajan.</div>
      
      {/* Desktop Tabs */}
      <div className="hidden md:flex items-center gap-8 text-[11px] lg:text-[13px] font-semibold tracking-widest text-gray-300">
        {navItems.map((tab) => (
          <Link 
            key={tab.id}
            href={`#${tab.id}`} 
            className={`transition-all duration-300 ${
              activeSection === tab.id 
                ? "text-white border-b border-white pb-1" 
                : "hover:text-white"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <button 
        className="md:hidden p-2 text-white z-50 relative"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" x2="6" y1="6" y2="18"/>
            <line x1="6" x2="18" y1="6" y2="18"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"/>
            <line x1="4" x2="20" y1="6" y2="6"/>
            <line x1="4" x2="20" y1="18" y2="18"/>
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[rgba(1,4,16,1)] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-lg font-semibold tracking-[0.3em] text-gray-400">
          {navItems.map((tab) => (
            <Link 
              key={tab.id}
              href={`#${tab.id}`} 
              onClick={() => setIsMenuOpen(false)}
              className={`transition-colors duration-300 ${
                activeSection === tab.id ? "text-white" : "hover:text-white"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
