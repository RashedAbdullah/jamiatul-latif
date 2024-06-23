"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomeTexts from "./home-texts";

const images = ["/jamia_pic.jpg", "/header-bg-sm.png", "/jamia_pic.jpg"];

const BackgroundImages = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        <motion.div
          key={currentImage}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentImage]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black opacity-50 top-full"></div>
          <HomeTexts />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BackgroundImages;
