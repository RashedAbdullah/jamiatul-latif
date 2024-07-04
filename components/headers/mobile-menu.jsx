import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const MobileMenu = ({ onOpenMenu, openMenu }) => {
  return (
    <div>
      <div className="block lg:hidden mr-5 text-2xl">
        <button
          onClick={onOpenMenu}
          className="relative flex items-center justify-center w-10 h-10 bg-primary rounded-full"
        >
          <AnimatePresence initial={false} mode="wait">
            {openMenu ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
                className="absolute"
              >
                <X color="white" strokeWidth={3} size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
                className="absolute"
              >
                <Menu color="white" strokeWidth={3} size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
