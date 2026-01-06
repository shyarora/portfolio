"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Twitter, Sparkles, MapPin, type LucideIcon } from "lucide-react";
import type { HeroData } from "@/types/portfolio";

interface HeroProps {
  data: HeroData;
}

const iconMap: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Mail,
  Twitter,
};

const Hero = ({ data }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-600/10 rounded-full blur-3xl" />
      
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 section-padding container-max pt-24 md:pt-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800/50 border border-dark-700/50 backdrop-blur-sm">
              <span className="status-dot" />
              <span className="text-sm text-dark-300">Available for new opportunities</span>
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Hi, I&apos;m{" "}
              <span className="relative inline-block">
                <span className="gradient-text">{data.name}</span>
                <motion.span
                  className="absolute -top-2 -right-6 text-accent-400"
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles size={24} />
                </motion.span>
              </span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-semibold text-dark-200">
              <span>{data.title}</span>
              <span className="w-2 h-2 rounded-full bg-accent-500" />
              <span className="text-dark-400">@ Cisco</span>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-dark-400 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            {data.tagline}
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex items-center justify-center gap-2 text-dark-500 mb-10"
          >
            <MapPin size={16} />
            <span className="text-sm">Bengaluru, India</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a href="#contact" className="btn-primary text-lg px-8 py-4">
              Let&apos;s Connect
              <span className="ml-1">→</span>
            </a>
            <a href="#projects" className="btn-secondary text-lg px-8 py-4">
              View My Work
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-3"
          >
            {data.socialLinks.map((link, index) => {
              const Icon = iconMap[link.icon];
              return (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target={link.platform !== "email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="btn-icon"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                >
                  {Icon && <Icon size={20} />}
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-dark-500 hover:text-dark-300 transition-colors group"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={20} className="group-hover:text-accent-400 transition-colors" />
            </motion.div>
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
    </section>
  );
};

export default Hero;
