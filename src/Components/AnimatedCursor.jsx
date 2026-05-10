import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        x: mousePos.x - 12,
        y: mousePos.y - 12,
        scale: [1, 1.5, 1], 
        rotate: [0, 90, 180, 270, 360] 
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear",
        // Make X and Y movement instant
        x: { duration: 0 },
        y: { duration: 0 }

      }}
    />
  );
};

export default AnimatedCursor;