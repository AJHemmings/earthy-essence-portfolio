
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  // Customize these arrays to change the floating elements
  // Each object represents a floating element with its size and animation delay
  const floatingElements = [
    { size: "w-4 h-4", delay: 0 },
    { size: "w-6 h-6", delay: 1 },
    { size: "w-3 h-3", delay: 2 },
    { size: "w-5 h-5", delay: 3 },
    { size: "w-4 h-4", delay: 4 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} rounded-full bg-sage/5 backdrop-blur-sm`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
