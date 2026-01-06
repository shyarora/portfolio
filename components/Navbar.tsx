"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-dark-950/80 backdrop-blur-xl border-b border-dark-800/50 shadow-lg shadow-dark-950/50"
            : "bg-transparent"
        }`}
      >
        <div className="section-padding container-max">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="relative group flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-secondary-500 flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <span className="text-lg font-bold text-white hidden sm:block">
                Shyam Arora
              </span>
              <div className="absolute -inset-2 rounded-2xl bg-accent-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-dark-300 hover:text-white transition-colors duration-200 group"
                  onClick={(e) => {
                    if (item.href.startsWith("#")) {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }
                  }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-accent-500 to-secondary-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              
              {/* Resume Button */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 btn-primary text-sm py-2"
              >
                <FileText size={16} />
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative p-2 text-dark-300 hover:text-white transition-colors z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 top-3" : "top-1"
                  }`}
                />
                <span
                  className={`absolute block w-6 h-0.5 bg-current top-3 transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 top-3" : "top-5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-dark-950/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-6">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-2xl font-semibold text-dark-300 hover:text-white transition-all duration-300 transform ${
                  isMobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    e.preventDefault();
                    handleNavClick(item.href);
                  } else {
                    setIsMobileMenuOpen(false);
                  }
                }}
              >
                {item.label}
              </Link>
            ))}

            {/* Resume Button Mobile */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 btn-primary transform ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${navItems.length * 50}ms` }}
            >
              <FileText size={18} />
              Download Resume
            </a>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
