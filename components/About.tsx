"use client";

import { motion } from "framer-motion";
import { Layout, Server, Cloud, Wrench, Code2, Zap, Users, Trophy, type LucideIcon } from "lucide-react";
import type { AboutData } from "@/types/portfolio";

interface AboutProps {
  data: AboutData;
}

const iconMap: Record<string, LucideIcon> = {
  Layout,
  Server,
  Cloud,
  Wrench,
};

const statIcons = [
  <Zap key="zap" className="w-5 h-5" />,
  <Users key="users" className="w-5 h-5" />,
  <Code2 key="code" className="w-5 h-5" />,
  <Trophy key="trophy" className="w-5 h-5" />,
];

const About = ({ data }: AboutProps) => {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 -left-64 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-64 w-[500px] h-[500px] bg-secondary-500/5 rounded-full blur-3xl" />

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
            <Code2 size={14} />
            About Me
          </span>
          <h2 className="section-title">
            Crafting Digital{" "}
            <span className="gradient-text">Experiences</span>
          </h2>
          <p className="section-subtitle">
            {data.summary}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 md:mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {data.description.map((paragraph, index) => (
                <p key={index} className="text-dark-400 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {data.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-hover p-5 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-accent-500/10 text-accent-400 group-hover:bg-accent-500/20 transition-colors">
                      {statIcons[index]}
                    </div>
                    <span className="text-3xl font-bold gradient-text">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-sm text-dark-500">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {data.skillCategories.map((category, index) => {
              const Icon = iconMap[category.icon] || Code2;
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-hover p-5 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-accent-500/20 to-secondary-500/20 text-accent-400 group-hover:from-accent-500/30 group-hover:to-secondary-500/30 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-white">
                      {category.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="tag hover:border-accent-500/50 hover:text-accent-400 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Decoration Line */}
        <div className="line-gradient" />
      </div>
    </section>
  );
};

export default About;
