import { motion } from "motion/react";
import { Code2, Database, Layout, Cpu, Wrench } from "lucide-react";
import { SEO } from "../components/SEO";
import { useMemo } from "react";

export default function Skills() {
  const skillCategories = useMemo(
    () => [
      {
        icon: Layout,
        title: "Frontend / Mobile",
        color: "#8b5cf6",
        skills: [
          { name: "React / Vite", level: 85 },
          { name: "Tailwind CSS", level: 75 },
          { name: "Android Studio (Java/XML)", level: 70 },
        ],
      },
      {
        icon: Code2,
        title: "Backend / Programming",
        color: "#6d28d9",
        skills: [
          { name: "Node.js / Express", level: 82 },
          { name: "Python (bases)", level: 60 },
          { name: "C (bases)", level: 70 },
        ],
      },
      {
        icon: Database,
        title: "Database / Projects",
        color: "#5b21b6",
        skills: [
          { name: "MongoDB", level: 85 },
          { name: "SQL Server / Oracle", level: 88 },
          { name: "MERN Stack Projects", level: 90 },
        ],
      },
      {
        icon: Cpu,
        title: "Hardware & IT",
        color: "#7c3aed",
        skills: [
          { name: "Montage et maintenance PC", level: 90 },
          { name: "Ventes et support IT", level: 85 },
          { name: "Expérience entreprise (2 ans)", level: 95 },
        ],
      },
      {
        icon: Wrench, 
        title: "Logiciels & Outils",
        color: "#7c3aed", 
        skills: [
          { name: "Word, Excel, PowerPoint", level: 85 },
          { name: "Photoshop", level: 70 },
          { name: "Illustrator", level: 80 },
          { name: "Adobe Premiere", level: 70 },
        ],
      },

    ],
    []
  );

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#0b0b10] text-white">
      <SEO
        title="Compétences - AOURAGH DHIAEDDINE"
        description="Compétences techniques : React, Vite, Node.js, Express, MongoDB, SQL, Android Studio, Hardware. Expertise Full-Stack et IT."
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
            Mes <span className="text-[#8b5cf6]">Compétences</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mon parcours en développement web, mobile et hardware, avec expérience en entreprise.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gradient-to-br from-[#1f1f28] to-[#111118] p-8 rounded-2xl border border-[#27273a] hover:border-[#8b5cf6]/50 transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mr-4"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <category.icon size={28} style={{ color: category.color }} aria-hidden="true"/>
                </div>
                <h2 className="text-2xl font-bold text-white">{category.title}</h2>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-200 font-medium">{skill.name}</span>
                      <span className="text-[#8b5cf6] font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#27273a] rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                          ease: "easeOut",
                        }}
                        className="h-2.5 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9]"
                        style={{
                          boxShadow: `0 0 10px ${category.color}50`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stack Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-br from-[#1f1f28] to-[#111118] p-8 md:p-12 rounded-2xl border border-[#27273a]"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Stack & Expérience <span className="text-[#8b5cf6]">Clés</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#8b5cf6] mb-4">Développement</h3>
              <p className="text-gray-300">
                React, Vite, Tailwind CSS, Node.js, Express, MongoDB, SQL, Android Studio (Java/XML).  
                Réalisation de projets MERN et mobile.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#8b5cf6] mb-4">Hardware / IT</h3>
              <p className="text-gray-300">
                2 ans d’expérience en entreprise informatique : montage et maintenance de PC, support technique et ventes.  
                Connaissances solides en hardware et systèmes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
