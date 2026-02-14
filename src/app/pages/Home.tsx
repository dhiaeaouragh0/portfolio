import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Code, Database, Globe } from "lucide-react";
import { SEO } from "../components/SEO";
import { useMemo } from "react";

export default function Home() {
  const width = typeof window !== "undefined" ? window.innerWidth : 1200;
  const height = typeof window !== "undefined" ? window.innerHeight : 800;

  const particles = useMemo(
    () =>
      [...Array(20)].map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        duration: Math.random() * 10 + 20,
      })),
    []
  );

  return (
    <div className="min-h-screen bg-[#0b0b10] text-white">
      <SEO
        title="Aouragh Dhiaeddine | Développeur Full-Stack"
        description="Développeur Full-Stack spécialisé en React, Node.js et systèmes distribués."
      />

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/20 via-transparent to-[#6d28d9]/20" />

          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#8b5cf6]/30 rounded-full"
              initial={{ x: p.x, y: p.y }}
              animate={{ x: p.x * 0.9, y: p.y * 0.9 }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[#8b5cf6] mb-4 px-4 py-2 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10">
              Développeur Full-Stack
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span>AOURAGH</span>
              <br />
              <span className="bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] bg-clip-text text-transparent">
                DHIAEDDINE
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Créateur d'expériences web modernes et performantes.
              <br />
              Spécialisé en React, Node.js et architectures distribuées.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects">
                <motion.button
                  aria-label="Voir mes projets"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px #8b5cf6" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] rounded-lg font-semibold flex items-center gap-2"
                >
                  Voir mes projets <ArrowRight size={20} />
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  aria-label="Me contacter"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-[#8b5cf6] text-[#8b5cf6] rounded-lg font-semibold hover:bg-[#8b5cf6]/10"
                >
                  Me contacter
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-[#8b5cf6] rounded-full flex justify-center">
              <div className="w-1.5 h-1.5 bg-[#8b5cf6] rounded-full mt-2" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 bg-[#111118]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Expertise <span className="text-[#8b5cf6]">Full-Stack</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Frontend Development",
                desc: "React, Vite, Tailwind CSS – interfaces modernes",
                color: "#8b5cf6",
              },
              {
                icon: Database,
                title: "Backend Development",
                desc: "Node.js, Express – MongoDB, SQL ",
                color: "#6d28d9",
              },
              {
                icon: Globe,
                title: "Systèmes Distribués",
                desc: " architectures réseau",
                color: "#5b21b6",
              },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded-xl border border-[#27273a] bg-gradient-to-br from-[#1f1f28] to-[#111118]"
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-lg bg-[#8b5cf6]/20">
                  <f.icon size={32} color={f.color} />
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-gray-400">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/10 to-[#6d28d9]/10" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à collaborer ?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Projet, mission ou simple discussion tech
          </p>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px #8b5cf6" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] rounded-lg font-semibold text-lg"
            >
              Démarrons un projet ensemble
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
