"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const AnimateNumbers = ({ number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const animation = animate(count, number, {
            duration: 2,
            ease: "easeOut"
          });
          return () => animation.stop();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("#counter-animation");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [number]);

  return (
    <motion.span
      id="counter-animation"
      className="inline-block bg-gradient-to-r from-emerald-600 to-teal-800 bg-clip-text text-transparent"
    >
      {rounded}
    </motion.span>
  );
};

export default AnimateNumbers;