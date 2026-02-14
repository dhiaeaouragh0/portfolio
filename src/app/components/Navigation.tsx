import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Compétences", path: "/skills" },
    { name: "Projets", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "À propos", path: "/about" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-[#27273a]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold"
            >
              <span className="text-white">AOURAGH</span>
              <span className="text-[#8b5cf6]"> DHIAEDDINE</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group"
              >
                <motion.span
                  className={`transition-colors ${
                    location.pathname === item.path
                      ? "text-[#8b5cf6]"
                      : "text-gray-300 hover:text-white"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8b5cf6]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 ${
                  location.pathname === item.path
                    ? "text-[#8b5cf6]"
                    : "text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
