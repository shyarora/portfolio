"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, ArrowUpRight, Layers } from "lucide-react";
import type { Project } from "@/types/portfolio";

interface ProjectsProps {
  data: Project[];
}

const Projects = ({ data }: ProjectsProps) => {
  const featuredProjects = data.filter((p) => p.featured);
  const otherProjects = data.filter((p) => !p.featured);

  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 -left-64 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-64 w-[500px] h-[500px] bg-secondary-500/5 rounded-full blur-3xl" />

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
            <Layers size={14} />
            Portfolio
          </span>
          <h2 className="section-title">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A collection of projects that showcase my expertise in building scalable applications
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card-hover h-full flex flex-col overflow-hidden">
                {/* Project Header/Image Area */}
                <div className="relative h-48 bg-gradient-to-br from-dark-800 to-dark-900 overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 via-transparent to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Pattern */}
                  <div className="absolute inset-0 dot-pattern opacity-20" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="tag-secondary text-xs">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-dark-900/90 text-white hover:bg-accent-500 transition-colors backdrop-blur-sm"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-dark-900/90 text-white hover:bg-accent-500 transition-colors backdrop-blur-sm"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-4 right-4">
                    <div className="p-3 rounded-xl bg-dark-800/80 backdrop-blur-sm border border-dark-700/50 group-hover:border-accent-500/50 transition-colors">
                      <Folder size={24} className="text-accent-400" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-dark-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="tag text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tag text-xs">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl font-semibold text-white mb-6 text-center"
            >
              Other Noteworthy Projects
            </motion.h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="card-hover p-5 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Folder size={24} className="text-accent-400" />
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-dark-500 hover:text-white transition-colors"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-dark-500 hover:text-white transition-colors"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h4 className="font-semibold text-white mb-2 group-hover:text-accent-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-dark-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs text-dark-500 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://github.com/shyarora"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group"
          >
            <Github size={18} />
            View All on GitHub
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Bottom Decoration */}
        <div className="mt-16 line-gradient" />
      </div>
    </section>
  );
};

export default Projects;
