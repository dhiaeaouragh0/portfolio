import { motion } from "motion/react";
import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Number */}
          <motion.h1
            className="text-8xl sm:text-9xl md:text-[200px] font-extrabold bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] bg-clip-text text-transparent mb-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            404
          </motion.h1>

          {/* Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page non trouvée
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-md mx-auto">
            Oops ! La page que vous recherchez semble introuvable.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] text-white rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-[#8b5cf6]/50"
              >
                <Home size={20} />
                <span>Retour à l'accueil</span>
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              className="px-8 py-4 bg-transparent border-2 border-[#8b5cf6] text-[#8b5cf6] rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-[#8b5cf6]/10 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Page précédente</span>
            </motion.button>
          </div>

          {/* Decorative Floating Circle */}
          <div className="mt-12 relative">
            <motion.div
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-[#8b5cf6]/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.3, 0.6, 0.3],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}