import { motion } from "motion/react";

export default function LoadingSpinner({ type = "fashion" }) {
  // Fashion-themed loader variants
  const loaderVariants = {
    spinning: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const needleVariants = {
    drawing: {
      pathLength: [0, 1, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const dotVariants = {
    bounce: {
      y: [0, -20, 0],
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  if (type === "fashion") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black">
        <div className="relative">
          {/* Fashion needle and thread animation */}
          <motion.svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            className="mb-8"
          >
            {/* Needle */}
            <motion.line
              x1="40"
              y1="60"
              x2="80"
              y2="60"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <motion.circle
              cx="35"
              cy="60"
              r="3"
              fill="#D4AF37"
            />
            
            {/* Thread being drawn */}
            <motion.path
              d="M 80 60 Q 90 40 100 60 Q 90 80 80 60"
              stroke="#50C878"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              variants={needleVariants}
              animate="drawing"
              initial={{ pathLength: 0 }}
            />
          </motion.svg>

          {/* Rotating outer ring */}
          <motion.div
            className="absolute inset-0 w-32 h-32 border-2 border-transparent border-t-gold border-r-emerald rounded-full"
            style={{
              borderColor: "transparent #D4AF37 transparent #50C878",
            }}
            variants={loaderVariants}
            animate="spinning"
          />
        </div>

        {/* Loading text with stagger animation */}
        <motion.div
          className="flex space-x-1"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {["L", "O", "A", "D", "I", "N", "G"].map((letter, index) => (
            <motion.span
              key={index}
              className="text-white text-lg font-light tracking-wider"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              variants={staggerItem}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Elegant dots */}
        <div className="flex space-x-2 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-gold rounded-full"
              style={{ backgroundColor: i % 2 === 0 ? "#D4AF37" : "#50C878" }}
              variants={dotVariants}
              animate="bounce"
              transition={{ delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Simple gold spinner fallback
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <motion.div
        className="w-16 h-16 border-4 border-transparent border-t-gold rounded-full"
        style={{
          borderColor: "transparent #D4AF37 transparent transparent",
          filter: "drop-shadow(0 0 20px #D4AF3760)",
        }}
        variants={loaderVariants}
        animate="spinning"
      />
    </div>
  );
}