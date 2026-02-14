import { motion } from "motion/react";
import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Animation */}
          <motion.h1
            className="text-9xl md:text-[200px] font-bold bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] bg-clip-text text-transparent mb-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            404
          </motion.h1>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page non trouvée
          </h2>

          <p className="text-xl text-gray-400 mb-8 max-w-md mx-auto">
            Oops ! La page que vous recherchez semble introuvable.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] text-white rounded-lg font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-[#8b5cf6]/50"
              >
                <Home size={20} />
                <span>Retour à l'accueil</span>
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              className="px-8 py-4 bg-transparent border-2 border-[#8b5cf6] text-[#8b5cf6] rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-[#8b5cf6]/10 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Page précédente</span>
            </motion.button>
          </div>

          {/* Decorative Elements */}
          <div className="mt-12 relative">
            <motion.div
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-[#8b5cf6]/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
