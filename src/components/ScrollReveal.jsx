import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({ 
  children, 
  direction = "up", 
  delay = 0, 
  duration = 0.8,
  distance = 50,
  className = "",
  stagger = false,
  staggerDelay = 0.1,
  once = true 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [once]);

  // Animation variants based on direction
  const getVariants = (dir) => {
    const variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    };

    switch (dir) {
      case "up":
        variants.hidden.y = distance;
        variants.visible.y = 0;
        break;
      case "down":
        variants.hidden.y = -distance;
        variants.visible.y = 0;
        break;
      case "left":
        variants.hidden.x = distance;
        variants.visible.x = 0;
        break;
      case "right":
        variants.hidden.x = -distance;
        variants.visible.x = 0;
        break;
      case "zoom":
        variants.hidden.scale = 0.8;
        variants.visible.scale = 1;
        break;
      case "fade":
        // Only opacity animation
        break;
      default:
        variants.hidden.y = distance;
        variants.visible.y = 0;
    }

    variants.visible.transition = {
      duration,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94], // Elegant easing
    };

    return variants;
  };

  // Stagger container variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const staggerItem = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x: direction === "left" ? distance : direction === "right" ? -distance : 0,
      scale: direction === "zoom" ? 0.8 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  if (stagger) {
    return (
      <motion.div
        ref={ref}
        className={className}
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {Array.isArray(children) ? 
          children.map((child, index) => (
            <motion.div key={index} variants={staggerItem}>
              {child}
            </motion.div>
          )) : 
          <motion.div variants={staggerItem}>
            {children}
          </motion.div>
        }
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={getVariants(direction)}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}