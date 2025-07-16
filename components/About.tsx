'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Smartphone } from 'lucide-react'

const About = () => {
  const skills = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'React, Next.js, TypeScript, Tailwind CSS',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Node.js, Express, PostgreSQL, MongoDB',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full-Stack Solutions',
      description: 'End-to-end application development',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'React Native, responsive design',
    },
  ]

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
            I'm a passionate full-stack developer with expertise in modern web technologies.
            I love building scalable applications that solve real-world problems.
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
              <p className="text-primary-600 text-sm">
                {skill.description}
              </p>
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
              With a strong foundation in computer science and years of hands-on experience,
              I've developed a deep understanding of both frontend and backend technologies.
              I'm passionate about writing clean, efficient code and staying up-to-date with
              the latest industry trends.
            </p>
            <p className="text-primary-600 mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing
              to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="card p-4 text-center">
              <div className="text-2xl font-bold text-accent-600 mb-1">3+</div>
              <div className="text-sm text-primary-600">Years Experience</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-2xl font-bold text-accent-600 mb-1">20+</div>
              <div className="text-sm text-primary-600">Projects Completed</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-2xl font-bold text-accent-600 mb-1">10+</div>
              <div className="text-sm text-primary-600">Technologies</div>
            </div>
            <div className="card p-4 text-center">
              <div className="text-2xl font-bold text-accent-600 mb-1">5+</div>
              <div className="text-sm text-primary-600">Happy Clients</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
