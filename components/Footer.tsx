import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="section-padding container-max">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Shyam Arora</h3>
            <p className="text-primary-300">
              Full-Stack Developer passionate about creating exceptional digital experiences
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/shyarora"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-primary-300 hover:text-white transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/shyam-arora"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-primary-300 hover:text-white transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:shyarora7@gmail.com"
              className="p-2 text-primary-300 hover:text-white transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center">
          <p className="text-primary-300 flex items-center justify-center gap-2">
            Built with <Heart size={16} className="text-red-400" /> using Next.js and Tailwind CSS
          </p>
          <p className="text-primary-400 text-sm mt-2">
            © {new Date().getFullYear()} Shyam Arora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
