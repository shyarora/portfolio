"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, ChevronRight, Sparkles } from "lucide-react";
import type { ExperienceItem } from "@/types/portfolio";

interface ExperienceProps {
  data: ExperienceItem[];
}

const Experience = ({ data }: ExperienceProps) => {
  return (
    <section id="experience" className="section relative overflow-hidden bg-dark-900/30">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-dark-700 to-transparent" />
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] bg-secondary-500/5 rounded-full blur-3xl" />

      <div className="section-padding container-max relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="section-label">
            <Briefcase size={14} />
            Career Path
          </span>
          <h2 className="section-title">
            Professional{" "}
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Building impactful products at industry-leading companies
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {data.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index < data.length - 1 && (
                <div className="absolute left-[11px] md:left-[15px] top-8 bottom-0 w-px bg-gradient-to-b from-accent-500/50 via-dark-700 to-dark-700" />
              )}

              {/* Timeline dot */}
              <div className={`absolute left-0 md:left-1 top-1 w-6 h-6 rounded-full border-4 border-dark-900 z-10 ${
                exp.current 
                  ? "bg-accent-500 shadow-glow" 
                  : "bg-dark-700"
              }`}>
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-accent-500 animate-ping opacity-75" />
                )}
              </div>

              {/* Content Card */}
              <div className={`card-hover p-6 md:p-8 ${exp.current ? "border-accent-500/30" : ""}`}>
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {exp.title}
                      </h3>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-500/20 text-accent-400 border border-accent-500/30">
                          <Sparkles size={10} />
                          Current
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-semibold gradient-text">
                      {exp.company}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-3 text-sm text-dark-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-accent-400" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-secondary-400" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-dark-300">
                      <ChevronRight size={16} className="text-accent-500 mt-1 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="tag-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 line-gradient" />
      </div>
    </section>
  );
};

export default Experience;
