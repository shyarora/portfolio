"use client";

import { Github, Linkedin, Mail, Heart, Twitter, ArrowUp } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://github.com/shyarora", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com/in/shyam-arora", icon: Linkedin, label: "LinkedIn" },
    { href: "https://twitter.com/shyarora", icon: Twitter, label: "Twitter" },
    { href: "mailto:shyarora7@gmail.com", icon: Mail, label: "Email" },
  ];

  return (
    <footer className="relative border-t border-dark-800/50 bg-dark-950">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />

      <div className="section-padding container-max py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-secondary-500 flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <span className="text-xl font-bold text-white">Shyam Arora</span>
            </Link>
            <p className="text-dark-400 text-sm leading-relaxed mb-4 max-w-xs">
              Software Engineer 4 passionate about building exceptional developer tools
              and scalable applications.
            </p>
            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-dark-500 hover:text-white hover:bg-dark-800 transition-all"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-dark-400 hover:text-white text-sm transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm">
              <p className="text-dark-400">
                <span className="text-dark-500">Email: </span>
                <a href="mailto:shyarora7@gmail.com" className="text-white hover:text-accent-400 transition-colors">
                  shyarora7@gmail.com
                </a>
              </p>
              <p className="text-dark-400">
                <span className="text-dark-500">Location: </span>
                <span className="text-dark-300">Bengaluru, India</span>
              </p>
              <p className="text-dark-400">
                <span className="text-dark-500">Status: </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-400">Open to opportunities</span>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-800/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-dark-500 text-sm flex items-center gap-1">
              © {currentYear} Shyam Arora. Built with 
              <Heart size={14} className="text-red-500 fill-red-500 mx-0.5" />
              using Next.js & Tailwind CSS
            </p>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm text-dark-500 hover:text-white transition-colors"
            >
              Back to top
              <span className="p-1.5 rounded-lg bg-dark-800 group-hover:bg-accent-500 transition-colors">
                <ArrowUp size={14} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
