"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const AnimateNumbers = ({ number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, number, { duration: 3 });

    return animation.stop;
  }, []);

  return <motion.span>{rounded}</motion.span>;
};

export default AnimateNumbers;
