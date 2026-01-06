import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Portfolio Data
const portfolioData = {
  hero: {
    name: "Shyam Arora",
    title: "Software Engineer 4",
    subtitle: "Building the future of developer tooling",
    tagline: "8+ years crafting scalable web applications, developer tools, and cloud-native platforms at industry-leading companies.",
    socialLinks: [
      { platform: "github", url: "https://github.com/shyarora", icon: "Github" },
      { platform: "linkedin", url: "https://linkedin.com/in/shyam-arora", icon: "Linkedin" },
      { platform: "email", url: "mailto:shyarora7@gmail.com", icon: "Mail" },
      { platform: "twitter", url: "https://twitter.com/shyarora", icon: "Twitter" }
    ],
    resumeUrl: "/resume.pdf"
  },
  about: {
    summary: "I'm a passionate software engineer who thrives on solving complex problems and building tools that make developers' lives easier.",
    description: [
      "With a Bachelor's degree in Computer Science from IP University Delhi and 8 years of hands-on experience, I've specialized in building developer tools, web terminals, and scalable applications.",
      "Currently working as Software Engineer 4 at Cisco, where I lead initiatives in DevOps platforms, VSCode extensions, and AI-assisted development tools. I'm passionate about developer productivity, real-time communication systems, and creating tools that enhance the development experience.",
      "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring junior developers."
    ],
    skillCategories: [
      {
        category: "Frontend",
        icon: "Layout",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Recoil", "HTML5", "CSS3"]
      },
      {
        category: "Backend",
        icon: "Server",
        skills: ["Node.js", "Golang", "GraphQL", "REST APIs", "WebSocket", "Socket.io"]
      },
      {
        category: "DevOps & Cloud",
        icon: "Cloud",
        skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Git", "Linux"]
      },
      {
        category: "Tools & Testing",
        icon: "Wrench",
        skills: ["Jest", "Cypress", "Webpack", "Babel", "VSCode Extensions", "CLI Tools"]
      }
    ],
    stats: [
      { value: "8+", label: "Years Experience" },
      { value: "3", label: "Companies" },
      { value: "20+", label: "Technologies" },
      { value: "15+", label: "Projects Delivered" }
    ],
    profileImage: "/profile.jpg"
  },
  experiences: [
    {
      id: "cisco-se4",
      title: "Software Engineer 4",
      company: "Cisco",
      companyLogo: "/logos/cisco.svg",
      location: "Bengaluru, India",
      period: "2024 - Present",
      type: "full-time",
      current: true,
      description: [
        "Coming soon - Recently promoted to Software Engineer 4",
        "Leading technical initiatives and architectural decisions for developer platform tools",
        "Mentoring team members and driving best practices across the organization"
      ],
      technologies: ["Golang", "React", "TypeScript", "Kubernetes", "GraphQL"]
    },
    {
      id: "cisco-se3",
      title: "Software Engineer III",
      company: "Cisco",
      companyLogo: "/logos/cisco.svg",
      location: "Bengaluru, India",
      period: "July 2020 - 2024",
      type: "full-time",
      current: false,
      description: [
        "Built a CLI using Golang and Cobra for the OneDevX platform to manage build, test, and space operations",
        "Developed a full-stack Web Terminals application with xterm.js, ReactJS and Golang over WebSocket, featuring multi-tab support, drag, and minimize functionalities",
        "Created a Generic Persistent Terminal for VSCode using Node.js, node-pty, and socket.io, ensuring uninterrupted terminal sessions",
        "Contributed to IDE-Chat, an internal AI-assisted coding extension for VSCode, similar to GitHub Copilot",
        "Created a full-stack internal VSCode extension marketplace with a web portal, extension frontend, and GraphQL backend",
        "Built a VSCode extension for handling long-running builds using Node.js and pseudo-terminal technology"
      ],
      technologies: ["React", "Golang", "TypeScript", "Node.js", "GraphQL", "WebSocket", "VSCode API", "Docker"]
    },
    {
      id: "paytm",
      title: "Software Engineer",
      company: "Paytm",
      companyLogo: "/logos/paytm.svg",
      location: "Noida, India",
      period: "June 2019 - July 2020",
      type: "full-time",
      current: false,
      description: [
        "Developed a multilingual chatbot integrated with AI/ML REST APIs, reducing customer support costs by 30%",
        "Revamped the 24x7 support section using a hybrid container, enhancing native feature support like camera and geolocation",
        "Improved customer support experience through innovative chat solutions",
        "Collaborated with AI/ML teams to integrate intelligent features into customer service platforms"
      ],
      technologies: ["React", "Node.js", "AI/ML APIs", "WebSocket", "Hybrid Apps"]
    },
    {
      id: "moonraft",
      title: "Software Engineer",
      company: "Moonraft Innovation Labs",
      companyLogo: "/logos/moonraft.svg",
      location: "Gurgaon, India",
      period: "August 2018 - June 2019",
      type: "full-time",
      current: false,
      description: [
        "Developed a data-driven Canvas Dashboard using ReactJS, Redux, Node.js, D3, and GraphQL",
        "Implemented role-based authentication with T-Mobile SSO and followed test-driven development",
        "Built interactive data visualizations and analytics dashboards for enterprise clients",
        "Worked with modern frontend technologies and GraphQL APIs for efficient data management"
      ],
      technologies: ["React", "Redux", "Node.js", "D3.js", "GraphQL", "SSO"]
    }
  ],
  projects: [
    {
      id: "web-terminal",
      title: "Web Terminal Application",
      description: "A powerful full-stack web terminal with multi-tab support, drag-and-drop functionality, and real-time collaboration features.",
      longDescription: "Built with xterm.js, React, and Golang over WebSocket. Features include multi-tab support, drag and drop, minimize functionalities, and persistent sessions for enhanced developer experience.",
      technologies: ["React", "Golang", "WebSocket", "xterm.js", "Docker"],
      githubUrl: "https://github.com/shyarora",
      featured: true,
      category: "Developer Tools"
    },
    {
      id: "vscode-marketplace",
      title: "VSCode Extension Marketplace",
      description: "Internal extension marketplace with web portal, integrated feedback system, and GraphQL backend for seamless extension management.",
      longDescription: "A full-stack internal VSCode extension marketplace with web portal, extension frontend, and GraphQL backend. Integrated feedback system with comments, likes, and issue tracking.",
      technologies: ["React", "GraphQL", "Node.js", "TypeScript", "VSCode API"],
      githubUrl: "https://github.com/shyarora",
      featured: true,
      category: "Developer Tools"
    },
    {
      id: "onedevx-cli",
      title: "OneDevX CLI Tool",
      description: "Command-line interface built with Golang for managing build, test, and space operations across the development platform.",
      longDescription: "A comprehensive CLI built with Golang and Cobra for the OneDevX platform to manage build, test, and space operations. Streamlines developer workflows and improves productivity.",
      technologies: ["Golang", "Cobra CLI", "Docker", "Kubernetes"],
      githubUrl: "https://github.com/shyarora",
      featured: true,
      category: "CLI Tools"
    },
    {
      id: "ai-chatbot",
      title: "AI-Powered Support Chatbot",
      description: "Multilingual chatbot with AI/ML integration that reduced customer support costs by 30% through intelligent automation.",
      longDescription: "A multilingual chatbot integrated with AI/ML REST APIs for customer support. Reduced support costs by 30% through intelligent automated responses and seamless escalation.",
      technologies: ["React", "Node.js", "AI/ML APIs", "WebSocket", "NLP"],
      githubUrl: "https://github.com/shyarora",
      featured: false,
      category: "AI/ML"
    },
    {
      id: "persistent-terminal",
      title: "VSCode Persistent Terminal",
      description: "Generic terminal extension for VSCode that maintains session state across reloads using node-pty and socket.io.",
      technologies: ["TypeScript", "Node.js", "node-pty", "Socket.io", "VSCode API"],
      githubUrl: "https://github.com/shyarora",
      featured: false,
      category: "VSCode Extensions"
    },
    {
      id: "ide-chat",
      title: "IDE-Chat AI Assistant",
      description: "Internal AI-assisted coding extension for VSCode, providing intelligent code suggestions and developer assistance.",
      technologies: ["TypeScript", "VSCode API", "AI/ML", "Node.js"],
      githubUrl: "https://github.com/shyarora",
      featured: false,
      category: "AI/ML"
    }
  ],
  contact: {
    email: "shyarora7@gmail.com",
    location: "Bengaluru, India",
    availability: "Open to interesting opportunities and collaborations",
    socialLinks: [
      { platform: "github", url: "https://github.com/shyarora", icon: "Github" },
      { platform: "linkedin", url: "https://linkedin.com/in/shyam-arora", icon: "Linkedin" },
      { platform: "email", url: "mailto:shyarora7@gmail.com", icon: "Mail" },
      { platform: "twitter", url: "https://twitter.com/shyarora", icon: "Twitter" }
    ]
  }
};

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Get all portfolio data
app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

// Get hero section data
app.get('/api/portfolio/hero', (req, res) => {
  res.json(portfolioData.hero);
});

// Get about section data
app.get('/api/portfolio/about', (req, res) => {
  res.json(portfolioData.about);
});

// Get experiences data
app.get('/api/portfolio/experiences', (req, res) => {
  res.json(portfolioData.experiences);
});

// Get projects data
app.get('/api/portfolio/projects', (req, res) => {
  res.json(portfolioData.projects);
});

// Get featured projects
app.get('/api/portfolio/projects/featured', (req, res) => {
  res.json(portfolioData.projects.filter(p => p.featured));
});

// Get contact data
app.get('/api/portfolio/contact', (req, res) => {
  res.json(portfolioData.contact);
});

// Contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // In production, you would send an email or store in database
  console.log('Contact form submission:', { name, email, message });
  
  res.json({ 
    success: true,
    message: 'Thank you for your message! I will get back to you soon.',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
