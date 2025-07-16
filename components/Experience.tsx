'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      period: '2023 - Present',
      description: [
        'Led development of scalable web applications using React, Node.js, and PostgreSQL',
        'Implemented CI/CD pipelines and improved deployment efficiency by 40%',
        'Mentored junior developers and conducted code reviews',
        'Collaborated with cross-functional teams to deliver high-quality products'
      ]
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Innovations LLC',
      location: 'New York, NY',
      period: '2022 - 2023',
      description: [
        'Developed and maintained multiple client-facing web applications',
        'Built RESTful APIs and integrated third-party services',
        'Optimized application performance resulting in 30% faster load times',
        'Participated in agile development processes and sprint planning'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Web Studio',
      location: 'San Francisco, CA',
      period: '2021 - 2022',
      description: [
        'Created responsive web interfaces using React and modern CSS frameworks',
        'Collaborated with designers to implement pixel-perfect UI components',
        'Improved accessibility standards across all company projects',
        'Maintained and updated legacy codebases'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-primary-50">
      <div className="section-padding container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle mx-auto">
            My professional journey and the amazing teams I've worked with
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-accent-600 mb-3">
                    {exp.company}
                  </h4>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-primary-600">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    {exp.location}
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-primary-600 flex items-start">
                    <span className="text-accent-600 mr-2 mt-1.5 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
