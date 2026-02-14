import { motion } from "motion/react";
import { Github, Mail, Phone } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-[#27273a] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">AOURAGH</span>
              <span className="text-[#8b5cf6]"> DHIAEDDINE</span>
            </h3>
            <p className="text-gray-400">
              Développeur Full-Stack passionné par la création d'expériences web modernes et performantes.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">
                  Compétences
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">
                  Projets
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#8b5cf6] transition-colors">
                  À propos
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:dhiaeaouragh0@gmail.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-[#8b5cf6] transition-colors"
              >
                <Mail size={18} />
                <span>dhiaeaouragh0@gmail.com</span>
              </a>
              <a
                href="tel:+213555233492"
                className="flex items-center space-x-2 text-gray-400 hover:text-[#8b5cf6] transition-colors"
              >
                <Phone size={18} />
                <span>+2135 55 23 34 92</span>
              </a>
              <a
                href="https://github.com/dhiaeaouragh0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-[#8b5cf6] transition-colors"
              >
                <Github size={18} />
                <span>github.com/dhiaeaouragh0</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-[#27273a] text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} AOURAGH DHIAEDDINE. Tous droits réservés.</p>
        </motion.div>
      </div>
    </footer>
  );
}