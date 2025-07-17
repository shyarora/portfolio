"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white">
      <div className="section-padding container-max">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-900 mb-6">
              Hi, I&apos;m <span className="text-accent-600">Shyam Arora</span>
            </h1>
            <p className="text-xl sm:text-2xl text-primary-600 mb-8 max-w-3xl mx-auto">
              Software Engineer III with 7 years of expertise in frontend and
              full-stack development, building scalable web applications and
              developer tools
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a href="#contact" className="btn-primary">
              Connect
            </a>
            <a href="#projects" className="btn-secondary">
              View My Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-6 mb-16"
          >
            <a
              href="https://github.com/shyarora"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-primary-600 hover:text-accent-600 transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/shyam-arora"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-primary-600 hover:text-accent-600 transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:shyarora7@gmail.com"
              className="p-3 text-primary-600 hover:text-accent-600 transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="animate-bounce"
          >
            <a href="#about" className="inline-block p-2 text-primary-400">
              <ArrowDown size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
