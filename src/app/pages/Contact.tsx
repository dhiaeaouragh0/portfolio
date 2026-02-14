import { motion } from "motion/react";
import { Mail, Phone, Github, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { SEO } from "../components/SEO";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    setStatus("loading");

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setStatus("idle"), 3000);
  } catch (error) {
    console.error("EmailJS Error:", error);
    setStatus("error");
    setTimeout(() => setStatus("idle"), 3000);
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dhiaeaouragh0@gmail.com",
      href: "mailto:dhiaeaouragh0@gmail.com",
      color: "#8b5cf6",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+213 555 233 492",
      href: "tel:+213555233492",
      color: "#6d28d9",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "dhiaeaouragh0",
      href: "https://github.com/dhiaeaouragh0",
      color: "#5b21b6",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Algérie Kouba",
      href: "#",
      color: "#7c3aed",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <SEO 
        title="Contact - AOURAGH DHIAEDDINE"
        description="Contactez-moi pour vos projets web. Email: dhiaeaouragh0@gmail.com | Tél: +213 555 233 492 | Disponible pour missions freelance et opportunités d'emploi."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contactez-<span className="text-[#8b5cf6]">moi</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Une question ? Un projet ? N'hésitez pas à me contacter. Je serai ravi d'échanger avec vous !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#1f1f28] to-[#111118] p-8 md:p-10 rounded-2xl border border-[#27273a]"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Envoyez-moi un message</h2>
            
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400"
              >
                Message envoyé avec succès ! Je vous répondrai bientôt.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#27273a] rounded-lg text-white focus:border-[#8b5cf6] focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/20 transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#27273a] rounded-lg text-white focus:border-[#8b5cf6] focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/20 transition-all"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#27273a] rounded-lg text-white focus:border-[#8b5cf6] focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/20 transition-all"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#27273a] rounded-lg text-white focus:border-[#8b5cf6] focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/20 transition-all resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] text-white rounded-lg font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-[#8b5cf6]/50 hover:shadow-[#8b5cf6]/70 transition-shadow disabled:opacity-70"
              >
                <Send size={20} />
                <span>
                  {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
                </span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#1f1f28] to-[#111118] p-8 md:p-10 rounded-2xl border border-[#27273a]"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Informations de contact</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 group cursor-pointer"
                  >
                    <div
                      className="w-14 h-14 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${info.color}20` }}
                    >
                      <info.icon size={24} style={{ color: info.color }} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-lg text-white group-hover:text-[#8b5cf6] transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-[#8b5cf6]/10 to-[#6d28d9]/10 p-8 rounded-2xl border border-[#8b5cf6]/30"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Disponibilité</h3>
              <p className="text-gray-300 mb-4">
                Je suis actuellement <span className="text-[#8b5cf6] font-semibold">disponible</span> pour :
              </p>
              <ul className="space-y-2">
                {[
                  "Missions freelance",
                  "Opportunités d'emploi",
                  "Projets collaboratifs",
                  "Consultations techniques",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <span className="w-2 h-2 bg-[#8b5cf6] rounded-full mr-3"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Response Time */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-[#1f1f28] to-[#111118] p-6 rounded-2xl border border-[#27273a] text-center"
            >
              <div className="text-4xl font-bold text-[#8b5cf6] mb-2">≈ 24h</div>
              <p className="text-gray-300">Temps de réponse moyen</p>
            </motion.div> */}
          </div>
        </div>
      </div>
    </div>
  );
}