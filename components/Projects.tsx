"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Web Terminal Application",
      description:
        "A full-stack web terminals application with xterm.js, ReactJS and Golang over WebSocket. Features multi-tab support, drag and drop, and minimize functionalities for enhanced developer experience.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Golang", "WebSocket", "xterm.js", "Docker"],
      githubUrl: "https://github.com/shyarora",
      liveUrl: "#",
    },
    {
      title: "VSCode Extension Marketplace",
      description:
        "A full-stack internal VSCode extension marketplace with web portal, extension frontend, and GraphQL backend. Integrated feedback system with comments, likes, and issue tracking.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "GraphQL", "Node.js", "TypeScript", "VSCode API"],
      githubUrl: "https://github.com/shyarora",
      liveUrl: "#",
    },
    {
      title: "CLI Development Tool",
      description:
        "A command-line interface built with Golang and Cobra for the OneDevX platform to manage build, test, and space operations. Streamlines developer workflows and improves productivity.",
      image: "/api/placeholder/600/400",
      technologies: ["Golang", "Cobra CLI", "Docker", "Kubernetes", "DevOps"],
      githubUrl: "https://github.com/shyarora",
      liveUrl: "#",
    },
    {
      title: "AI-Powered Chatbot",
      description:
        "A multilingual chatbot integrated with AI/ML REST APIs for customer support. Reduced support costs by 30% through intelligent automated responses and seamless escalation.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "AI/ML APIs", "WebSocket", "NLP"],
      githubUrl: "https://github.com/shyarora",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-padding container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <span className="text-primary-400 font-mono">
                    Project Preview
                  </span>
                </div>
                <div className="absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-primary-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/shyarora"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
