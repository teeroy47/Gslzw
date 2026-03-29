import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function ChatbotButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-[999]"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      {showTooltip && (
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-[#24336A] px-4 py-2 rounded-full font-['DM_Sans'] font-semibold text-sm whitespace-nowrap shadow-lg"
        >
          Get a Quote
        </motion.div>
      )}

      {/* Button */}
      <motion.a
        href="#contact"
        className="relative block w-16 h-16 bg-[#8DBF44] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#7aac3a] shadow-lg"
        whileHover={{ scale: 1.1 }}
      >
        <MessageCircle className="w-7 h-7 text-white" />
        
        {/* Pulsing Ring Animation */}
        <span className="absolute inset-0 rounded-full animate-[pulse_2.5s_ease-in-out_infinite]">
          <span className="absolute inset-0 rounded-full bg-[#8DBF44] opacity-70" />
        </span>
      </motion.a>

      {/* Keyframe Animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(141, 191, 68, 0.7);
          }
          50% {
            box-shadow: 0 0 0 16px rgba(141, 191, 68, 0);
          }
        }
      `}</style>
    </motion.div>
  );
}
