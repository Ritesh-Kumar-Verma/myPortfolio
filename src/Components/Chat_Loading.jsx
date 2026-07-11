import React from "react";
import { motion } from "framer-motion";

const ChatLoading = () => {
  return (
    <div className="flex gap-2 items-center text-gray-500 font-bold w-full justify-center">
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
            className="w-2 h-2 bg-green-500 rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default ChatLoading;