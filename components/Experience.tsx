"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer III",
      company: "Cisco",
      location: "Bengaluru, India",
      period: "July 2020 - Present",
      description: [
        "Building a CLI using Golang and Cobra for the OneDevX platform to manage build, test, and space operations",
        "Developed a full-stack Web Terminals application for the Spaces project with xterm.js, ReactJS and Golang over WebSocket, featuring multi-tab support, drag, and minimize functionalities",
        "Created a Generic Persistent Terminal for VSCode using Node.js, node-pty, and socket.io, ensuring uninterrupted terminal sessions",
        "Contributed to IDE-Chat, an internal AI-assisted coding extension for VSCode, similar to GitHub Copilot",
        "Created a full-stack internal VSCode extension marketplace with a web portal, extension frontend, and GraphQL backend",
        "Built a VSCode extension for handling long-running builds using Node.js and pseudo-terminal technology",
      ],
    },
    {
      title: "Software Engineer",
      company: "Paytm",
      location: "Noida, India",
      period: "June 2019 - July 2020",
      description: [
        "Developed a multilingual chatbot integrated with AI/ML REST APIs, reducing customer support costs by 30%",
        "Revamped the 24x7 support section using a hybrid container, enhancing native feature support like camera and geolocation",
        "Worked on improving customer support experience through innovative chat solutions",
        "Collaborated with AI/ML teams to integrate intelligent features into customer service platforms",
      ],
    },
    {
      title: "Software Engineer",
      company: "Moonraft Innovation Labs",
      location: "Gurgaon, India",
      period: "August 2018 - June 2019",
      description: [
        "Developed a data-driven Canvas Dashboard using ReactJS, Redux, Node.js, D3, and GraphQL",
        "Implemented role-based authentication with T-Mobile SSO and followed test-driven development",
        "Built interactive data visualizations and analytics dashboards for enterprise clients",
        "Worked with modern frontend technologies and GraphQL APIs for efficient data management",
      ],
    },
  ];

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
            My professional journey and the amazing teams I&apos;ve worked with
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
                    <span className="text-accent-600 mr-2 mt-1.5 flex-shrink-0">
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
