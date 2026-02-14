import { motion } from "motion/react";
import { Github, Smartphone, ShoppingCart } from "lucide-react";
import { SEO } from "../components/SEO";

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#0b0b10] text-white">
      <SEO
        title="Projets - AOURAGH DHIAEDDINE"
        description="Portfolio de projets : Application mobile et sites e-commerce modernes. Réalisations en React, Node.js, MERN et Android Studio."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Mes <span className="text-[#8b5cf6]">Projets</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Quelques projets réalisés, démontrant mes compétences en développement web, mobile et MERN stack.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-gradient-to-br from-[#1f1f28] to-[#111118] rounded-2xl border border-[#27273a] overflow-hidden hover:border-[#8b5cf6]/50 transition-all"
            >
              <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10">
                {/* Left: Info + Image */}
                <div className="space-y-4">
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mr-3 bg-gradient-to-br ${project.gradient}`}
                    >
                      <project.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-[#8b5cf6] font-semibold">{project.type}</span>
                      <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#8b5cf6] transition-colors">
                        {project.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-300">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1.5 bg-gradient-to-r ${project.gradient} bg-opacity-10 text-[#a78bfa] rounded-lg text-sm font-medium border border-[#8b5cf6]/30`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* GitHub Link */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 mt-4 px-6 py-3 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] text-white rounded-lg font-semibold shadow-lg"
                  >
                    <Github size={20} />
                    <span>Code Source</span>
                  </motion.a>
                </div>

                {/* Right: Image */}
                <div className="flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl border border-[#27273a] object-cover w-full h-64 md:h-80"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

const projects = [

  {
    id: 1,
    title: "E-Commerce Website",
    type: "Web Application",
    icon: ShoppingCart,
    description: "Site web e-commerce classique avec React, Node.js et MongoDB.",
    technologies: ["React",  "Node.js", "MongoDB"],
    github: "https://github.com/dhiaeaouragh0/E-COM",
    color: "#6d28d9",
    gradient: "from-[#6d28d9] to-[#5b21b6]",
    image: "/images/ecom1.png",
  },
  {
    id: 2,
    title: "CowCar Mobile App",
    type: "Mobile App",
    icon: Smartphone,
    description: "Application mobile Android de gestion d’élevage bovin avec identification par code QR",
    technologies: ["Java", "XML", "SQL-Server"],
    github: "https://github.com/dhiaeaouragh0/cowcar-app",
    color: "#8b5cf6",
    gradient: "from-[#8b5cf6] to-[#6d28d9]",
    image: "/images/cowcar.png",
  },
  {
    id: 3,
    title: "Gaming E-Commerce Website",
    type: "Web Application",
    icon: ShoppingCart,
    description: "Marketplace pour accessoires gaming avec MERN stack et interface responsive.",
    technologies: ["React","Vite", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/dhiaeaouragh0/dhiae-zone-admin",
    color: "#5b21b6",
    gradient: "from-[#5b21b6] to-[#7c3aed]",
    image: "/images/ecom2.png",
  },
];
