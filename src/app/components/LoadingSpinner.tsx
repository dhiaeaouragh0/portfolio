import { motion } from "motion/react";

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-[#0a0a0f] flex items-center justify-center z-50">
      <div className="text-center">
        {/* Spinner */}
        <motion.div
          className="w-16 h-16 border-4 border-[#27273a] border-t-[#8b5cf6] rounded-full mx-auto mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-[#8b5cf6] font-semibold"
        >
          Chargement...
        </motion.div>
      </div>
    </div>
  );
}
