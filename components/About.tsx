"use client";

import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Frontend Development",
      description: "ReactJS, NextJS, TypeScript, HTML5, CSS3, Redux, Recoil",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Node.js, Golang, GraphQL, REST APIs",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "DevOps & Tools",
      description: "Docker, Kubernetes, Git, WebSocket, Socket.io",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Testing & Build Tools",
      description: "Jest, Cypress, Webpack, Babel, CLI Tools (Golang Cobra)",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-padding container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            Software Engineer III with 7 years of expertise in frontend and
            full-stack development, building scalable web applications,
            developer tools, and cloud-integrated platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="text-accent-600 mb-4 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                {skill.title}
              </h3>
              <p className="text-primary-600 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-2xl font-bold text-primary-900 mb-4">
              My Journey
            </h3>
            <p className="text-primary-600 mb-6">
              With a Bachelor&apos;s degree in Computer Science from IP
              University Delhi and 7 years of hands-on experience, I&apos;ve
              specialized in building developer tools, web terminals, and
              scalable applications. Currently working as Software Engineer III
              at Cisco, focusing on DevOps platforms and VSCode extensions.
            </p>
            <p className="text-primary-600 mb-6">
              I&apos;m passionate about developer productivity, real-time
              communication systems, and creating tools that enhance the
              development experience. My expertise spans from frontend
              frameworks to backend services and DevOps practices.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="card p-4 text-center">
              <div className="text-2xl font-bold text-accent-600 mb-1">7+</div>
              <div className="text-sm text-primary-600">Years Experience</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-2xl font-bold text-accent-600 mb-1">3</div>
              <div className="text-sm text-primary-600">Companies</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-2xl font-bold text-accent-600 mb-1">15+</div>
              <div className="text-sm text-primary-600">Technologies</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-2xl font-bold text-accent-600 mb-1">10+</div>
              <div className="text-sm text-primary-600">Projects Built</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
