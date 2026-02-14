import { motion } from "motion/react";
import { GraduationCap, Briefcase, Globe2, Award } from "lucide-react";
import { SEO } from "../components/SEO";
import { useMemo } from "react";

export default function About() {
  // Pré-génération des listes pour performance
  const skills = useMemo(
    () => [
      { icon: Briefcase, label: "Développeur Full-Stack", color: "#8b5cf6" },
      { icon: Globe2, label: "Systèmes Web", color: "#6d28d9" },
      { icon: Award, label: "Code Quality", color: "#5b21b6" },
      { icon: GraduationCap, label: "Master 1", color: "#7c3aed" },
    ],
    []
  );

  const education = useMemo(
    () => [
      {
        degree: "Master 1 - Réseaux et Systèmes Distribués",
        institution:
          "Université des Sciences et de la Technologie Houari Boumediene (USTHB)",
        period: "2024 - 2025",
        description:
          "Spécialisation en architectures distribuées, réseaux informatiques et systèmes complexes",
      },
      {
        degree: "Licence - Ingénierie des Systèmes Informatiques et Logiciels",
        institution:
          "Université des Sciences et de la Technologie Houari Boumediene (USTHB)",
        period: "2021 - 2024",
        description:
          "Formation complète en développement logiciel, algorithmique et génie logiciel",
      },
    ],
    []
  );

  const languages = useMemo(
    () => [
      { language: "Arabe", level: "Langue maternelle", proficiency: 95 },
      { language: "Français", level: "Intermédiaire avancé", proficiency: 75 },
      { language: "Anglais", level: "Intermédiaire", proficiency: 60 },
    ],
    []
  );

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#0b0b10] text-white">
      <SEO
        title="À propos - AOURAGH DHIAEDDINE"
        description="Diplômé de l'USTHB en Réseaux et Systèmes Distribués. Développeur Full-Stack passionné avec expertise en React, Node.js et architectures distribuées."
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
            À propos de <span className="text-[#8b5cf6]">moi</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionné par la technologie et l'innovation, je crée des solutions
            web modernes et performantes
          </p>
        </motion.div>

        {/* Introduction / Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-[#1f1f28] to-[#111118] p-8 md:p-12 rounded-2xl border border-[#27273a] mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texte */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Développeur Full-Stack
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Diplômé de l{" "}
                  <strong className="text-[#8b5cf6]">
                    Université des Sciences et de la Technologie Houari Boumediene
                    (USTHB)
                  </strong>
                  , je combine une solide formation académique avec une passion
                  pour le développement web moderne.
                </p>
                <p>
                  Ma spécialisation en{" "}
                  <strong className="text-[#8b5cf6]">
                    Réseaux et Systèmes Distribués
                  </strong>{" "}
                  me permet d'architecturer des applications scalables et
                  performantes, en alliant expertise frontend et backend.
                </p>
                <p>
                  Mon objectif ? Créer des expériences web exceptionnelles qui
                  allient design moderne, performance optimale et code
                  maintenable.
                </p>
              </div>
            </div>

            {/* Skills Cards */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {skills.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px #8b5cf6",
                    }}
                    className="bg-[#0a0a0f] p-6 rounded-xl border border-[#27273a] text-center"
                  >
                    <item.icon
                      size={32}
                      style={{ color: item.color }}
                      className="mx-auto mb-3"
                      aria-hidden="true"
                    />
                    <p className="text-sm text-gray-300">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <GraduationCap
              className="mr-3 text-[#8b5cf6]"
              size={32}
              aria-hidden="true"
            />
            Parcours Académique
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-8 border-l-2 border-[#8b5cf6]"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-[#8b5cf6] rounded-full" />
                <div className="bg-gradient-to-br from-[#1f1f28] to-[#111118] p-6 rounded-xl border border-[#27273a]">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-[#8b5cf6] mb-2">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mb-3">{edu.period}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Globe2 className="mr-3 text-[#8b5cf6]" size={32} aria-hidden="true" />
            Langues
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.language}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 0 15px #8b5cf6" }}
                className="bg-gradient-to-br from-[#1f1f28] to-[#111118] p-6 rounded-xl border border-[#27273a]"
              >
                <h3 className="text-xl font-bold text-white mb-2">{lang.language}</h3>
                <p className="text-gray-400 mb-4">{lang.level}</p>
                <div className="w-full bg-[#27273a] rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
